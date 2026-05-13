import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { site } from "@/lib/site";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <Seo title={`${site.name} | 404`} description="Página não encontrada." noindex />
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      <div className="relative text-center space-y-8 max-w-md animate-fade-in">
        <div className="space-y-2">
          <div className="text-8xl font-raleway font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-2xl font-raleway font-bold text-foreground">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground font-lora">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg" className="gap-2 font-raleway font-bold">
              <Home className="w-4 h-4" />
              Ir para o início
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 font-raleway"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
