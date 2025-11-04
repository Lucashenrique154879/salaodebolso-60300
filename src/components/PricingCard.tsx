import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PricingCard = () => {
  return (
    <Card className="border-4 border-primary shadow-[var(--shadow-premium)] hover:shadow-[0_0_100px_hsl(280_90%_55%/0.5)] transition-all duration-500 relative overflow-hidden animate-scale-in hover:scale-105 bg-white">
      <div className="absolute top-0 right-0 bg-gradient-to-br from-secondary to-primary text-white px-10 py-3 text-base font-black transform rotate-12 translate-x-10 -translate-y-4 animate-pulse shadow-2xl">
        50% OFF
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <CardHeader className="bg-gradient-to-br from-primary/10 via-accent/50 to-secondary/10 pb-10 pt-16 relative">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-1 bg-destructive/10 border border-destructive/30 rounded-full">
            <p className="text-destructive line-through text-xl font-semibold">De R$ 600,00</p>
          </div>
          
          {/* À Vista Option */}
          <div className="space-y-2 p-6 bg-white/80 rounded-2xl border-2 border-primary/30 shadow-lg">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-bold">💰 MELHOR PREÇO</span>
            </div>
            <CardTitle className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
              R$ 299,99
            </CardTitle>
            <p className="text-base font-bold text-foreground">Pagamento à vista • Sem mensalidades</p>
          </div>

          {/* Parcelado Option */}
          <div className="space-y-2 p-6 bg-white/60 rounded-2xl border-2 border-border/50">
            <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full">
              <span className="text-secondary text-sm font-bold">💳 PARCELADO</span>
            </div>
            <CardTitle className="text-4xl lg:text-5xl font-black text-foreground">
              12x R$ 41,67
            </CardTitle>
            <p className="text-base font-semibold text-muted-foreground">Ou R$ 500,00 no cartão • Sem juros</p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Oferta por tempo limitado</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-10 pb-8 space-y-8 relative">
        <div className="space-y-4">
          {[
            "✨ Acesso completo a todas as funcionalidades",
            "🔄 Atualizações gratuitas para sempre",
            "💬 Suporte técnico prioritário incluso",
            "💰 Sem mensalidades ou taxas ocultas",
            "📱 Agendamento online 24/7",
            "📊 Dashboard e relatórios completos",
            "👥 Gestão ilimitada de clientes",
            "💳 Controle financeiro avançado",
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="mt-0.5 p-1.5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 group-hover:scale-110">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{feature}</span>
            </div>
          ))}
        </div>
        <div className="pt-4 space-y-4">
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full text-xl h-16 font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
            onClick={() => window.open(`https://wa.me/5533998542100?text=Olá! Quero adquirir o Salão de Bolso`, '_blank')}
          >
            🚀 Comprar Agora
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            🔒 Pagamento 100% seguro • Garantia de 7 dias
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
