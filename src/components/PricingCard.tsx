import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PricingCard = () => {
  return (
    <Card className="border-4 border-primary shadow-[var(--shadow-glow)] hover:shadow-[0_0_80px_hsl(270_95%_60%/0.4)] transition-all duration-500 relative overflow-hidden animate-scale-in hover:scale-105">
      <div className="absolute top-0 right-0 bg-gradient-to-br from-secondary to-primary text-white px-8 py-2 text-sm font-bold transform rotate-12 translate-x-8 -translate-y-4 animate-pulse">
        50% OFF
      </div>
      <CardHeader className="bg-gradient-to-br from-accent to-white pb-8 pt-12">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground line-through text-lg">De R$ 600,00</p>
          <CardTitle className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            R$ 299,90
          </CardTitle>
          <p className="text-sm font-medium text-muted-foreground">Pagamento único</p>
        </div>
      </CardHeader>
      <CardContent className="pt-8 space-y-6">
        <div className="space-y-3">
          {[
            "Acesso completo a todas as funcionalidades",
            "Atualizações gratuitas para sempre",
            "Suporte técnico incluso",
            "Sem mensalidades ou taxas ocultas",
            "Agendamento online 24/7",
            "Dashboard completo",
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        <Button 
          variant="hero" 
          size="lg" 
          className="w-full text-lg h-14 hover:scale-105 transition-transform duration-300"
          onClick={() => window.open(`https://wa.me/5533998542100?text=Olá! Quero adquirir o Salão de Bolso por R$ 299,90`, '_blank')}
        >
          Comprar Agora
        </Button>
      </CardContent>
    </Card>
  );
};
