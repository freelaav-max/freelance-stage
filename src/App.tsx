import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import FreelancerProfile from "./pages/FreelancerProfile";
import FreelancerPublicProfile from "./pages/FreelancerPublicProfile";
import SearchResults from "./pages/SearchResults";
import HowItWorksPage from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<FreelancerProfile />} />
            <Route path="/freelancer/:id" element={<FreelancerPublicProfile />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/como-funciona" element={<HowItWorksPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Toaster />
        <Sonner />
      </AuthProvider>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;