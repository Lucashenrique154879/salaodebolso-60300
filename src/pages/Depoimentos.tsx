import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Star, Users2 } from "lucide-react";
import { site } from "@/lib/site";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Salão Beleza Pura — SP",
    content:
      "Meu faturamento aumentou 40% em 3 meses! O programa de fidelidade trouxe muitos clientes de volta. Melhor investimento que fiz no salão.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Barbearia Style — RJ",
    content:
      "Economizo mais de 10 horas por semana que gastava organizando agenda manualmente. Agora os clientes agendam sozinhos e eu foco no atendimento.",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Studio Ana Hair — MG",
    content:
      "Sistema incrível! O controle financeiro me mostrou onde estava perdendo dinheiro. Consegui aumentar minha margem de lucro em 30%.",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    role: "Espaço Beleza — RS",
    content:
      "O link de agendamento online mudou minha vida. Clientes agendam sem eu precisar ficar no celular. Incrível!",
    rating: 5,
  },
  {
    name: "Rodrigo Lima",
    role: "Barbearia Premium — SP",
    content:
      "Gestão de comissões ficou muito mais transparente. Minha equipe ficou mais motivada e os conflitos acabaram.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Studio F Beauty — BA",
    content:
      "Adquiri o plano vitalício e foi o melhor investimento. Sistema completo, atualizado e com suporte rápido.",
    rating: 5,
  },
];

export default function Depoimentos() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Depoimentos`}
        description="Veja depoimentos de salões e barbearias que usam o Salão de Bolso para organizar agenda, clientes e financeiro."
        path="/depoimentos"
      />
      <Section tone="muted">
        <Container>
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 rounded-full border border-primary/20">
              <Users2 className="w-4 h-4 text-primary" />
              <span className="text-primary font-raleway font-semibold text-sm">Depoimentos</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-raleway font-black text-foreground">
              O que nossos{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Clientes Dizem
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
              Mais de 50 salões de beleza transformaram seus negócios com nossa solução.
            </p>

            {/* Rating summary */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-2xl border border-border shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="font-raleway font-black text-foreground text-lg">4.9/5.0</span>
              <span className="text-muted-foreground font-lora text-sm">(50+ avaliações)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10 font-lora italic">
            *Resultados individuais podem variar
          </p>
        </Container>
      </Section>
    </SiteLayout>
  );
}
