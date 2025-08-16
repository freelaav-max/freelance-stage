export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      availability: {
        Row: {
          created_at: string
          external_id: string | null
          freelancer_id: string
          id: string
          notes: string | null
          period: unknown
          source: Database["public"]["Enums"]["availability_source"]
          status: Database["public"]["Enums"]["availability_status"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          external_id?: string | null
          freelancer_id: string
          id?: string
          notes?: string | null
          period: unknown
          source?: Database["public"]["Enums"]["availability_source"]
          status: Database["public"]["Enums"]["availability_status"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          external_id?: string | null
          freelancer_id?: string
          id?: string
          notes?: string | null
          period?: unknown
          source?: Database["public"]["Enums"]["availability_source"]
          status?: Database["public"]["Enums"]["availability_status"]
          updated_at?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          client_id: string | null
          created_at: string
          freelancer_id: string
          id: string
          notes: string | null
          period: unknown
          source: string | null
          status: Database["public"]["Enums"]["booking_status"]
          title: string | null
          updated_at: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          freelancer_id: string
          id?: string
          notes?: string | null
          period: unknown
          source?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          title?: string | null
          updated_at?: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          freelancer_id?: string
          id?: string
          notes?: string | null
          period?: unknown
          source?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      calendar_connections: {
        Row: {
          created_at: string
          external_calendar_id: string | null
          freelancer_id: string
          ical_url: string | null
          id: string
          is_active: boolean
          last_sync_at: string | null
          provider: Database["public"]["Enums"]["calendar_provider"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          external_calendar_id?: string | null
          freelancer_id: string
          ical_url?: string | null
          id?: string
          is_active?: boolean
          last_sync_at?: string | null
          provider: Database["public"]["Enums"]["calendar_provider"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          external_calendar_id?: string | null
          freelancer_id?: string
          ical_url?: string | null
          id?: string
          is_active?: boolean
          last_sync_at?: string | null
          provider?: Database["public"]["Enums"]["calendar_provider"]
          updated_at?: string
        }
        Relationships: []
      }
      freelancer_profiles: {
        Row: {
          bio: string | null
          city: string | null
          country: string | null
          created_at: string
          equipment: string | null
          experience_years: number | null
          hourly_rate: number | null
          id: string
          is_pro_member: boolean | null
          portfolio_links: string[] | null
          rating: number | null
          state: string | null
          total_jobs: number | null
          total_reviews: number | null
          updated_at: string
        }
        Insert: {
          bio?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          equipment?: string | null
          experience_years?: number | null
          hourly_rate?: number | null
          id: string
          is_pro_member?: boolean | null
          portfolio_links?: string[] | null
          rating?: number | null
          state?: string | null
          total_jobs?: number | null
          total_reviews?: number | null
          updated_at?: string
        }
        Update: {
          bio?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          equipment?: string | null
          experience_years?: number | null
          hourly_rate?: number | null
          id?: string
          is_pro_member?: boolean | null
          portfolio_links?: string[] | null
          rating?: number | null
          state?: string | null
          total_jobs?: number | null
          total_reviews?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "freelancer_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      freelancer_specialties: {
        Row: {
          freelancer_id: string
          id: string
          specialty: Database["public"]["Enums"]["specialty"]
        }
        Insert: {
          freelancer_id: string
          id?: string
          specialty: Database["public"]["Enums"]["specialty"]
        }
        Update: {
          freelancer_id?: string
          id?: string
          specialty?: Database["public"]["Enums"]["specialty"]
        }
        Relationships: [
          {
            foreignKeyName: "freelancer_specialties_freelancer_id_fkey"
            columns: ["freelancer_id"]
            isOneToOne: false
            referencedRelation: "freelancer_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolio_items: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          freelancer_id: string
          id: string
          media_type: string
          media_url: string
          thumbnail_url: string | null
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          freelancer_id: string
          id?: string
          media_type: string
          media_url: string
          thumbnail_url?: string | null
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          freelancer_id?: string
          id?: string
          media_type?: string
          media_url?: string
          thumbnail_url?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "portfolio_items_freelancer_id_fkey"
            columns: ["freelancer_id"]
            isOneToOne: false
            referencedRelation: "freelancer_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          city: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string | null
          state: string | null
          updated_at: string
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Insert: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          email: string
          full_name: string
          id: string
          phone?: string | null
          state?: string | null
          updated_at?: string
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Update: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          state?: string | null
          updated_at?: string
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_my_availability: {
        Args: { from_at: string; to_at: string }
        Returns: {
          created_at: string
          external_id: string | null
          freelancer_id: string
          id: string
          notes: string | null
          period: unknown
          source: Database["public"]["Enums"]["availability_source"]
          status: Database["public"]["Enums"]["availability_status"]
          updated_at: string
        }[]
      }
      get_public_availability: {
        Args: { freelancer: string; from_at: string; to_at: string }
        Returns: {
          period: unknown
          status: Database["public"]["Enums"]["availability_status"]
        }[]
      }
      get_public_freelancer_info: {
        Args: { freelancer_id: string }
        Returns: {
          avatar_url: string
          city: string
          full_name: string
          id: string
          state: string
        }[]
      }
      set_availability: {
        Args: {
          end_at: string
          notes?: string
          source?: Database["public"]["Enums"]["availability_source"]
          start_at: string
          status: Database["public"]["Enums"]["availability_status"]
        }
        Returns: string
      }
    }
    Enums: {
      availability_source:
        | "manual"
        | "google"
        | "ical"
        | "auto_blocked"
        | "other"
      availability_status: "available" | "unavailable" | "partial"
      booking_status: "pending" | "confirmed" | "cancelled"
      calendar_provider: "google" | "ical" | "outlook" | "other"
      specialty:
        | "audio_engineer"
        | "sound_technician"
        | "camera_operator"
        | "video_editor"
        | "lighting_technician"
        | "dj"
        | "vj"
        | "live_streaming"
        | "photographer"
        | "videographer"
      user_type: "freelancer" | "client"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      availability_source: [
        "manual",
        "google",
        "ical",
        "auto_blocked",
        "other",
      ],
      availability_status: ["available", "unavailable", "partial"],
      booking_status: ["pending", "confirmed", "cancelled"],
      calendar_provider: ["google", "ical", "outlook", "other"],
      specialty: [
        "audio_engineer",
        "sound_technician",
        "camera_operator",
        "video_editor",
        "lighting_technician",
        "dj",
        "vj",
        "live_streaming",
        "photographer",
        "videographer",
      ],
      user_type: ["freelancer", "client"],
    },
  },
} as const
