import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const PricingCard = () => {
  return <Card className="border-4 border-primary shadow-[var(--shadow-premium)] hover:shadow-[0_0_100px_hsl(280_90%_55%/0.5)] transition-all duration-500 relative overflow-hidden animate-scale-in hover:scale-105 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <CardHeader className="bg-gradient-to-br from-primary/10 via-accent/50 to-secondary/10 pb-10 pt-16 relative">
        <div className="text-center space-y-6">
          {/* Teste Grátis */}
          <div className="space-y-2 p-6 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl border-2 border-accent shadow-lg animate-pulse-slow">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full">
              <span className="text-accent-foreground text-sm font-bold">🎁 EXPERIMENTE GRÁTIS</span>
            </div>
            <CardTitle className="text-5xl lg:text-6xl font-black text-foreground drop-shadow-lg">
              7 Dias Grátis
            </CardTitle>
            <p className="text-base font-bold text-foreground">Teste completo • Sem compromisso • Sem cartão</p>
          </div>

          {/* Assinatura Mensal */}
          <div className="space-y-2 p-6 bg-white/80 rounded-2xl border-2 border-primary/30 shadow-lg">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-bold">🔄 ASSINATURA</span>
            </div>
            <CardTitle className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
              R$ 20/mês
            </CardTitle>
            <p className="text-base font-bold text-foreground">Pagamento mensal • Cancele quando quiser</p>
          </div>

          {/* Vitalício - BLACK FRIDAY */}
          <div className="space-y-2 p-6 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl border-4 border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.5)] relative overflow-hidden animate-pulse-slow">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-xs font-black transform rotate-12 translate-x-2 -translate-y-1 shadow-lg">
              BLACK FRIDAY
            </div>
            <div className="inline-block px-3 py-1 bg-yellow-400/20 rounded-full">
              <span className="text-yellow-400 text-sm font-black">🔥 OFERTA ESPECIAL 🔥</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl text-gray-500 line-through font-bold">R$ 300</span>
              <CardTitle className="text-5xl lg:text-6xl font-black text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                R$ 100
              </CardTitle>
            </div>
            <p className="text-base font-bold text-yellow-300">💎 Pagamento único • Acesso VITALÍCIO</p>
            <p className="text-xs text-red-400 font-semibold animate-pulse">⚡ Apenas na Black Friday - Tempo limitado!</p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Escolha o melhor plano para você</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-10 pb-8 space-y-8 relative">
        <div className="space-y-4">
          {["✨ Acesso completo a todas as funcionalidades", "🔄 Atualizações gratuitas para sempre", "💬 Suporte técnico prioritário incluso", "💰 Sem mensalidades ou taxas ocultas", "📱 Agendamento online 24/7", "📊 Dashboard e relatórios completos", "👥 Gestão ilimitada de clientes", "💳 Controle financeiro avançado"].map((feature, index) => <div key={index} className="flex items-start gap-4 group">
              <div className="mt-0.5 p-1.5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 group-hover:scale-110">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{feature}</span>
            </div>)}
        </div>
        <div className="pt-4 space-y-4">
          <Button variant="hero" size="lg" className="w-full text-xl h-16 font-bold hover:scale-105 transition-transform duration-300 shadow-lg" onClick={() => window.open(`https://lilac-luxe-salon-100.vercel.app/`, '_blank')}>
            🎁 Começar Teste Grátis
          </Button>
          <Button variant="outline" size="lg" className="w-full text-xl h-16 font-bold hover:scale-105 transition-transform duration-300" onClick={() => window.open(`https://wa.me/5533998542100?text=Olá! Quero adquirir o Salão de Bolso`, '_blank')}>
            💬 Falar com Vendedor
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            🔒 Pagamento 100% seguro • Garantia de 7 dias
          </p>
        </div>
      </CardContent>
    </Card>;
};