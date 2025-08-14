import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SearchFilters {
  specialties?: string[];
  city?: string;
  state?: string;
  radius?: number; // km
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  availableDate?: string;
  sortBy?: 'relevance' | 'price_asc' | 'price_desc' | 'rating' | 'proximity';
  page?: number;
  limit?: number;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const { searchTerm, filters }: { searchTerm?: string; filters: SearchFilters } = await req.json();
    
    const {
      specialties = [],
      city,
      state,
      minPrice,
      maxPrice,
      minRating = 0,
      sortBy = 'relevance',
      page = 1,
      limit = 12
    } = filters;

    // Base query with joins
    let query = supabaseClient
      .from('freelancer_profiles')
      .select(`
        *,
        profiles!inner(id, full_name, email, avatar_url, city, state),
        freelancer_specialties!inner(specialty),
        portfolio_items(id, title, media_url, thumbnail_url, media_type)
      `);

    // Apply filters
    if (specialties.length > 0) {
      query = query.in('freelancer_specialties.specialty', specialties);
    }

    if (city) {
      query = query.eq('profiles.city', city);
    }

    if (state) {
      query = query.eq('profiles.state', state);
    }

    if (minPrice !== undefined) {
      query = query.gte('hourly_rate', minPrice);
    }

    if (maxPrice !== undefined) {
      query = query.lte('hourly_rate', maxPrice);
    }

    if (minRating > 0) {
      query = query.gte('rating', minRating);
    }

    // Text search in bio, full_name
    if (searchTerm) {
      query = query.or(`bio.ilike.%${searchTerm}%, profiles.full_name.ilike.%${searchTerm}%`);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price_asc':
        query = query.order('hourly_rate', { ascending: true });
        break;
      case 'price_desc':
        query = query.order('hourly_rate', { ascending: false });
        break;
      case 'rating':
        query = query.order('rating', { ascending: false });
        break;
      case 'relevance':
      default:
        // Pro members first, then by rating, then by total_jobs
        query = query.order('is_pro_member', { ascending: false })
                     .order('rating', { ascending: false })
                     .order('total_jobs', { ascending: false });
        break;
    }

    // Apply pagination
    const offset = (page - 1) * limit;
    query = query.range(offset, offset + limit - 1);

    const { data: freelancers, error, count } = await query;

    if (error) {
      console.error('Search error:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Process results to group specialties and portfolio
    const processedResults = freelancers?.map(freelancer => {
      const specialtiesList = Array.isArray(freelancer.freelancer_specialties) 
        ? freelancer.freelancer_specialties.map((s: any) => s.specialty)
        : [freelancer.freelancer_specialties?.specialty].filter(Boolean);

      const portfolioItems = Array.isArray(freelancer.portfolio_items)
        ? freelancer.portfolio_items.slice(0, 3) // Limit to 3 items for search results
        : [];

      return {
        ...freelancer,
        specialties: specialtiesList,
        portfolio: portfolioItems,
        user: freelancer.profiles
      };
    }) || [];

    // Calculate total pages
    const totalPages = count ? Math.ceil(count / limit) : 1;

    return new Response(
      JSON.stringify({
        results: processedResults,
        pagination: {
          page,
          limit,
          total: count || 0,
          totalPages,
          hasMore: page < totalPages
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});