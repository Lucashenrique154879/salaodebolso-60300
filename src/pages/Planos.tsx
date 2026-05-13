import { PricingCard } from "@/components/PricingCard";
import SiteLayout from "@/components/SiteLayout";
import { Sparkles, Star } from "lucide-react";

export default function Planos() {
  return (
    <SiteLayout>
      <section className="py-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-accent/60 to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-raleway font-semibold text-sm">Planos</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-raleway font-black text-foreground">
              Escolha o plano ideal{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                e comece hoje
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-lora">
              Mensalidade de R$ 7,90/mês ou acesso vitalício por R$ 197.
            </p>
          </div>

          <div className="max-w-lg mx-auto animate-scale-in">
            <PricingCard />
          </div>

          {/* Social proof */}
          <div className="text-center mt-14 space-y-4">
            <p className="text-muted-foreground font-lora text-sm">
              Junte-se a mais de 50 salões que já transformaram seus negócios
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card rounded-full border border-border shadow-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="font-raleway font-bold text-foreground">4.9/5.0</span>
              <span className="text-muted-foreground font-lora text-sm">(50+ avaliações)</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
