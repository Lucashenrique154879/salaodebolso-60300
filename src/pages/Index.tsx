import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  CalendarCheck,
  Link2,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import agendaImg from "@/assets/screenshots/agenda.png";
import dashboardImg from "@/assets/screenshots/dashboard.png";
import financeiroImg from "@/assets/screenshots/financeiro.png";
import { site } from "@/lib/site";

const leftFeatures = [
  {
    icon: CalendarCheck,
    title: "Agenda online e confirmação",
    desc: "Organize horários, serviços e profissionais com rapidez e clareza.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    icon: Link2,
    title: "Link de agendamento 24/7",
    desc: "Clientes agendam sozinhos e você reduz faltas e retrabalho.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: TrendingUp,
    title: "Metas, relatórios e comissões",
    desc: "Acompanhe performance, faturamento e comissões sem planilhas.",
    color: "bg-emerald-50 text-emerald-700",
  },
];

const rightFeatures = [
  {
    icon: TrendingUp,
    title: "Clientes e recorrência",
    desc: "Histórico, preferências e relacionamento para aumentar retorno.",
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: BarChart3,
    title: "Financeiro no controle",
    desc: "Entradas, saídas e visão do caixa para decisões mais seguras.",
    color: "bg-cyan-50 text-cyan-700",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | ${site.tagline}`}
        description="Sistema de gestão para salão de beleza e barbearia com agenda online, link de agendamento 24/7, cadastro de clientes e controle financeiro. Teste grátis por 7 dias."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: typeof window !== "undefined" ? window.location.origin : "https://example.com",
            email: site.supportEmail,
            telephone: site.supportPhoneE164,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: typeof window !== "undefined" ? window.location.origin : "https://example.com",
          },
        ]}
      />

      <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl pointer-events-none" />
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            <div className="space-y-7">
              <div data-hero="" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-raleway font-semibold text-sm">
                  Teste grátis por 7 dias · Sem cartão
                </span>
              </div>

              <h1 data-hero="" className="text-4xl sm:text-5xl lg:text-6xl font-raleway font-black leading-[1.06] tracking-tight text-foreground">
                Gestão premium para{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  salão de beleza
                </span>{" "}
                e barbearia
              </h1>

              <p data-hero="" className="text-lg text-muted-foreground leading-relaxed font-lora max-w-xl">
                Agenda online, link de agendamento, cadastro de clientes e financeiro em um só lugar. Reduza faltas, ganhe tempo e tenha visão do negócio.
              </p>

              <div data-hero="" className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button variant="hero" size="lg" className="text-base px-8" onClick={() => window.open(site.appUrl, "_blank")}>
                  Começar teste grátis
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8" onClick={() => navigate("/pricing")}>
                  Ver planos
                </Button>
              </div>

              <div className="flex flex-wrap gap-5 pt-1">
                {[
                  { icon: Shield, text: "Segurança e confiabilidade" },
                  { icon: Clock, text: "Configuração rápida" },
                  { icon: Users, text: "Equipe e clientes organizados" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="font-lora">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-6 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-3xl" />
              <div className="relative" data-parallax="" data-parallax-speed="0.22">
                <img
                  src={heroImage}
                  alt="Tela do Salão de Bolso mostrando agenda e visão geral"
                  className="relative w-full rounded-2xl shadow-2xl border border-white/80"
                  width={1200}
                  height={900}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute -top-5 -right-4 lg:-right-8 bg-card rounded-xl shadow-xl border border-border px-4 py-3 flex items-center gap-2.5">
                  <div className="flex gap-0.5" aria-label="Avaliação média 4.9 de 5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-raleway font-bold text-foreground leading-none">4.9 / 5.0</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Avaliações recentes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted" id="value">
        <Container>
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full border border-secondary/30">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm font-raleway font-semibold text-accent-foreground">
                Menos atrito, mais resultados
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-raleway font-black text-foreground">
              Um sistema para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                vender mais
              </span>{" "}
              e trabalhar com leveza
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
              Gestão de salão de beleza exige rotina, controle e previsibilidade. O Salão de Bolso transforma isso em processos simples e métricas claras.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...leftFeatures, ...rightFeatures].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${f.color}`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-raleway font-bold text-sm text-foreground">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-1 font-lora leading-snug">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" className="text-base px-10 h-12 font-raleway font-bold" onClick={() => navigate("/product")}>
              Ver o produto
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="screens">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-raleway font-black text-foreground">
                Telas elegantes, feitas para{" "}
                <span className="text-gradient">agilidade</span>
              </h2>
              <p className="text-lg text-muted-foreground font-lora max-w-xl">
                Interface moderna, responsiva e acessível. Com foco em leitura rápida, contrastes adequados e ações claras para o dia a dia do salão.
              </p>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="lg" className="px-8" onClick={() => navigate("/product#screens")}>
                  Ver mais telas
                </Button>
                <Button variant="soft" size="lg" className="px-8" onClick={() => navigate("/pricing")}>
                  Ver planos
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { src: agendaImg, alt: "Tela de agenda do sistema", label: "Agenda" },
                { src: dashboardImg, alt: "Tela de dashboard do sistema", label: "Dashboard" },
                { src: financeiroImg, alt: "Tela de financeiro do sistema", label: "Financeiro" },
              ].map((img) => (
                <div key={img.label} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="px-4 py-3 text-sm font-raleway font-semibold text-foreground/80">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted" id="next">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl lg:text-5xl font-raleway font-black text-foreground">
                Pronto para organizar agenda, clientes e financeiro?
              </h2>
              <p className="text-lg text-muted-foreground font-lora max-w-xl">
                Comece com o teste grátis e veja como um sistema de gestão para salão de beleza muda a rotina em poucos dias.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" className="px-8" onClick={() => window.open(site.appUrl, "_blank")}>
                  Começar agora
                </Button>
                <Button variant="outline" size="lg" className="px-8" onClick={() => window.open(site.whatsappUrl, "_blank")}>
                  Tirar dúvidas no WhatsApp
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Agenda", sub: "online e organizada", icon: CalendarCheck },
                { label: "Clientes", sub: "histórico e retorno", icon: Users },
                { label: "Financeiro", sub: "caixa e relatórios", icon: BarChart3 },
                { label: "Visão", sub: "clara do negócio", icon: TrendingUp },
              ].map((k) => (
                <div key={k.label} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                  <k.icon className="w-5 h-5 text-primary" />
                  <div className="mt-3 text-lg font-raleway font-bold text-foreground">{k.label}</div>
                  <div className="text-sm text-muted-foreground font-lora mt-1">{k.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}
