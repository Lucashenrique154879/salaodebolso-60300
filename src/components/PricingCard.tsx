import { Check, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "✨ Acesso completo a todas as funcionalidades",
  "🔄 Atualizações gratuitas para sempre",
  "💬 Suporte técnico prioritário incluso",
  "📱 Agendamento online 24/7",
  "📊 Dashboard e relatórios completos",
  "👥 Gestão ilimitada de clientes",
  "💳 Controle financeiro avançado",
  "🧠 Assistente de IA com dicas de gestão",
];

export const PricingCard = () => {
  return (
    <div className="relative bg-card rounded-3xl border-2 border-primary/30 shadow-2xl shadow-primary/10 overflow-hidden">
      {/* Decorative top bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />

      {/* Header */}
      <div className="px-8 pt-10 pb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="text-center space-y-6">
          {/* Free trial block */}
          <div className="p-6 bg-card rounded-2xl border border-primary/20 shadow-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-raleway font-bold tracking-wide uppercase">
                Experimente Grátis
              </span>
            </div>
            <div className="text-5xl lg:text-6xl font-raleway font-black text-foreground">
              7 Dias Grátis
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-lora">
              Teste completo · Sem compromisso · Sem cartão
            </p>
          </div>

          {/* Plans block */}
          <div className="p-6 bg-card rounded-2xl border border-primary/20 shadow-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/15 rounded-full mb-3">
              <span className="text-secondary text-xs font-raleway font-black tracking-wide uppercase">
                💎 Planos
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-xl font-raleway font-bold text-muted-foreground line-through">R$ 482</span>
              <span className="text-5xl lg:text-6xl font-raleway font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                R$ 7,90/mês
              </span>
            </div>
            <p className="text-sm text-foreground font-raleway font-semibold mt-2">
              🔥 Mensal ou vitalício por R$ 197
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-lora">Mensal por R$ 7,90 ou vitalício por R$ 197</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 pt-8 pb-10 space-y-6">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className="mt-0.5 flex-shrink-0 p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                <Check className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-sm font-lora text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          <Button
            variant="hero"
            size="lg"
            className="w-full text-base h-13 font-raleway font-bold"
            onClick={() => window.open("https://salaodebolsoapp.shop", "_blank")}
          >
            🎁 Começar Teste Grátis
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full text-base h-13 font-raleway"
            onClick={() =>
              window.open(
                "https://wa.me/5533998542100?text=Olá! Quero adquirir o Salão de Bolso",
                "_blank",
              )
            }
          >
            💬 Falar com Vendedor
          </Button>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground font-lora">
            <Shield className="w-3.5 h-3.5" />
            <span>Pagamento 100% seguro · Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </div>
  );
};
