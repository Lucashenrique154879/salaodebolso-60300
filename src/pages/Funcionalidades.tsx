import { FeatureCard } from "@/components/FeatureCard";
import SiteLayout from "@/components/SiteLayout";
import {
  Award,
  BarChart3,
  BrainCircuit,
  Calendar,
  Clock,
  DollarSign,
  Scissors,
  Settings,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamentos Inteligentes",
    description:
      "Gestão completa com visualização diária, semanal e mensal. Sistema evita conflitos automaticamente e permite reagendamentos fáceis com histórico completo.",
    accentColor: "bg-rose-50 text-rose-600",
  },
  {
    icon: Smartphone,
    title: "Agendamento Online 24/7",
    description:
      "Link compartilhável para clientes agendarem sozinhos, qualquer hora do dia. Reduz ligações e aumenta conversão de novos clientes.",
    accentColor: "bg-amber-50 text-amber-600",
  },
  {
    icon: Users,
    title: "Gestão Completa de Clientes",
    description:
      "Cadastro detalhado com histórico de serviços, valores gastos, preferências e notas personalizadas por cliente.",
    accentColor: "bg-sky-50 text-sky-600",
  },
  {
    icon: DollarSign,
    title: "Financeiro Profissional",
    description:
      "Controle total de receitas, despesas, contas fixas e a receber. Gráficos e relatórios para melhor gestão financeira.",
    accentColor: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Award,
    title: "Programa de Fidelidade",
    description:
      "Sistema de pontuação automático, classes de clientes VIP e recompensas personalizadas. Aumenta engajamento e retorno de clientes.",
    accentColor: "bg-pink-50 text-pink-600",
  },
  {
    icon: Clock,
    title: "Automações Inteligentes",
    description:
      "Crie retornos recorrentes e agendamentos futuros automaticamente. Lembretes automáticos para não perder clientes.",
    accentColor: "bg-violet-50 text-violet-600",
  },
  {
    icon: Scissors,
    title: "Catálogo de Serviços",
    description:
      "Gerencie serviços com preços, duração estimada e análise dos serviços mais vendidos e lucrativos.",
    accentColor: "bg-orange-50 text-orange-600",
  },
  {
    icon: Settings,
    title: "Configurações Avançadas",
    description:
      "Defina horários de funcionamento, intervalos entre atendimentos e notificações customizadas.",
    accentColor: "bg-slate-100 text-slate-600",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Análises",
    description:
      "Dashboards em tempo real, serviços mais lucrativos, previsão de recebimentos e métricas completas.",
    accentColor: "bg-teal-50 text-teal-600",
  },
  {
    icon: BrainCircuit,
    title: "Assistente de IA",
    description:
      "Inteligência artificial integrada com dicas de gestão para ajudar você a tomar decisões melhores.",
    accentColor: "bg-primary/10 text-primary",
  },
];

export default function Funcionalidades() {
  return (
    <SiteLayout>
      <section className="py-20 px-4 bg-background">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

        <div className="container mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 rounded-full border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary font-raleway font-semibold text-sm">Funcionalidades</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-raleway font-black text-foreground">
              Tudo que seu{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Salão Precisa
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
              Sistema profissional completo para organizar, automatizar e fazer seu negócio crescer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  accentColor={feature.accentColor}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
