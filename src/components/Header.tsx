
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Menu, User, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-heading font-bold text-xl">AudioVídeo Pro</span>
          </div>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Buscar freelancers..."
                type="search"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Para Freelancers
            </Button>
            <Button variant="ghost" size="sm">
              Para Clientes
            </Button>
            <Button size="sm" className="btn-gradient">
              Entrar
            </Button>
            <Button variant="outline" size="sm">
              Cadastrar
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
