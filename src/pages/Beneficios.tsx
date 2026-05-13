import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Clock, DollarSign, Shield, Smartphone, Target, TrendingUp } from "lucide-react";
import { site } from "@/lib/site";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente sua Receita",
    desc: "Programa de fidelidade inteligente aumenta retorno de clientes. Análise de serviços mais lucrativos ajuda a focar no que dá mais resultado.",
    accentBg: "bg-rose-50",
    accentIcon: "text-rose-600",
  },
  {
    icon: Clock,
    title: "Economize Tempo",
    desc: "Automações reduzem tempo administrativo. Agendamento online 24/7 elimina necessidade de responder WhatsApp fora do horário.",
    accentBg: "bg-amber-50",
    accentIcon: "text-amber-600",
  },
  {
    icon: Target,
    title: "Organização Total",
    desc: "Nunca mais esqueça compromissos ou tenha conflitos de horário. Sistema organiza tudo automaticamente com avisos e lembretes.",
    accentBg: "bg-sky-50",
    accentIcon: "text-sky-600",
  },
  {
    icon: Smartphone,
    title: "Acesse de Qualquer Lugar",
    desc: "Funciona em computador, tablet e celular. Instale como aplicativo e tenha acesso rápido quando precisar.",
    accentBg: "bg-violet-50",
    accentIcon: "text-violet-600",
  },
  {
    icon: DollarSign,
    title: "Mensal ou Vitalício",
    desc: "Assine por R$ 7,90/mês ou escolha o acesso vitalício por R$ 197. Acesso completo ao sistema e atualizações incluídas.",
    accentBg: "bg-emerald-50",
    accentIcon: "text-emerald-600",
  },
  {
    icon: Shield,
    title: "Profissionalize seu Negócio",
    desc: "Interface moderna e profissional impressiona clientes. Relatórios e métricas ajudam na tomada de decisões para crescimento.",
    accentBg: "bg-primary/8",
    accentIcon: "text-primary",
  },
];

export default function Beneficios() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Benefícios`}
        description="Benefícios do Salão de Bolso: agenda online, mais organização, controle financeiro e crescimento para salão de beleza e barbearia."
        path="/beneficios"
      />
      <Section>
        <Container>
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-raleway font-black text-foreground">
              Por que escolher o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Salão de Bolso?
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
              A solução completa que profissionaliza seu negócio e multiplica seus resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8 transition-all duration-400 p-7 space-y-4 animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className={`inline-flex p-3.5 rounded-xl ${b.accentBg} ${b.accentIcon} group-hover:scale-110 transition-transform duration-300`}
                >
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-raleway font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-lora">{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}
