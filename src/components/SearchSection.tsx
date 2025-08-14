
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, DollarSign, Search } from "lucide-react";

const SearchSection = () => {
  return (
    <section className="py-16 -mt-10 relative z-20">
      <div className="container">
        <div className="search-container max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Encontre o Profissional Ideal para seu Projeto
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Search className="w-4 h-4" />
                Especialidade
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cinegrafista">Cinegrafista</SelectItem>
                  <SelectItem value="tecnico-som">Técnico de Som</SelectItem>
                  <SelectItem value="iluminador">Iluminador</SelectItem>
                  <SelectItem value="vj">VJ / Motion Designer</SelectItem>
                  <SelectItem value="operador-camera">Operador de Câmera</SelectItem>
                  <SelectItem value="editor">Editor de Vídeo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Localização
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio-janeiro">Rio de Janeiro</SelectItem>
                  <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                  <SelectItem value="brasilia">Brasília</SelectItem>
                  <SelectItem value="salvador">Salvador</SelectItem>
                  <SelectItem value="recife">Recife</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Data
              </label>
              <input
                type="date"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Orçamento
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Faixa de preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500">Até R$ 500</SelectItem>
                  <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                  <SelectItem value="1000-2000">R$ 1.000 - R$ 2.000</SelectItem>
                  <SelectItem value="2000-5000">R$ 2.000 - R$ 5.000</SelectItem>
                  <SelectItem value="5000+">Acima R$ 5.000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button className="btn-gradient w-full sm:w-auto px-8">
              <Search className="mr-2 h-4 w-4" />
              Buscar Profissionais
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Filtros Avançados
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">Popular: Casamentos</Badge>
            <Badge variant="secondary">Eventos Corporativos</Badge>
            <Badge variant="secondary">Shows</Badge>
            <Badge variant="secondary">Streaming</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
