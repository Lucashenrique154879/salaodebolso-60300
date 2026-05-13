import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import {
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Link2,
  ShieldCheck,
  Users,
} from "lucide-react";
import agendaImg from "@/assets/screenshots/agenda.png";
import agendamentosImg from "@/assets/screenshots/agendamentos.png";
import clientesImg from "@/assets/screenshots/clientes.png";
import dashboardImg from "@/assets/screenshots/dashboard.png";
import financeiroImg from "@/assets/screenshots/financeiro.png";
import marketingImg from "@/assets/screenshots/marketing.png";
import { useNavigate } from "react-router-dom";

const featureGroups = [
  {
    title: "Agenda e atendimento",
    items: [
      { icon: CalendarCheck, title: "Agenda online", desc: "Organize horários, serviços e profissionais com rapidez." },
      { icon: Link2, title: "Link de agendamento", desc: "Clientes agendam sozinhos 24/7 e você reduz faltas." },
      { icon: ClipboardList, title: "Serviços e catálogo", desc: "Padronize preços, duração e execução do atendimento." },
    ],
  },
  {
    title: "Clientes e crescimento",
    items: [
      { icon: Users, title: "Cadastro de clientes", desc: "Histórico e preferências para aumentar recorrência." },
      { icon: CheckCircle2, title: "Organização da rotina", desc: "Menos retrabalho e mais previsibilidade no dia a dia." },
      { icon: ShieldCheck, title: "Segurança", desc: "Boas práticas de acesso e cuidado com dados." },
    ],
  },
  {
    title: "Financeiro e gestão",
    items: [
      { icon: BarChart3, title: "Controle financeiro", desc: "Entradas, saídas e visão do caixa em um só lugar." },
      { icon: CreditCard, title: "Relatórios", desc: "Indicadores claros para decisões mais rápidas." },
      { icon: CheckCircle2, title: "Metas", desc: "Acompanhe evolução e desempenho com objetividade." },
    ],
  },
] as const;

const screenshots = [
  { src: dashboardImg, alt: "Dashboard do sistema de gestão para salão", label: "Dashboard" },
  { src: agendaImg, alt: "Agenda do sistema para salão de beleza", label: "Agenda" },
  { src: agendamentosImg, alt: "Lista de agendamentos do salão", label: "Agendamentos" },
  { src: clientesImg, alt: "Cadastro e histórico de clientes", label: "Clientes" },
  { src: financeiroImg, alt: "Tela de controle financeiro do salão", label: "Financeiro" },
  { src: marketingImg, alt: "Recursos de marketing e fidelização", label: "Marketing" },
] as const;

export default function Product() {
  const navigate = useNavigate();

  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Produto`}
        description="Conheça o sistema de gestão para salão de beleza: agenda online, link de agendamento, cadastro de clientes e controle financeiro com interface moderna e responsiva."
        path="/product"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: site.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: typeof window !== "undefined" ? window.location.origin + "/product" : "https://example.com/product",
          offers: [
            {
              "@type": "Offer",
              price: "7.90",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
              url: site.appUrl,
            },
          ],
        }}
      />

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-6xl font-raleway font-black tracking-tight">
                Produto pensado para{" "}
                <span className="text-gradient">rotina real</span>
              </h1>
              <p className="text-lg text-muted-foreground font-lora max-w-xl">
                Um sistema de gestão para salão de beleza que prioriza velocidade, clareza e consistência. Use no celular, tablet ou computador.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" className="px-8" onClick={() => window.open(site.appUrl, "_blank")}>
                  Acessar e testar grátis
                </Button>
                <Button variant="outline" size="lg" className="px-8" onClick={() => navigate("/pricing")}>
                  Ver planos
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <img
                src={dashboardImg}
                alt="Visão geral do sistema com indicadores e atalhos"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted" id="features">
        <Container>
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-raleway font-black">
              Recursos essenciais para{" "}
              <span className="text-gradient">gestão de salão</span>
            </h2>
            <p className="text-lg text-muted-foreground font-lora max-w-3xl mx-auto">
              Do agendamento ao financeiro, tudo foi desenhado para reduzir tarefas manuais e aumentar previsibilidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featureGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-sm font-raleway font-semibold text-muted-foreground uppercase tracking-wider">
                  {g.title}
                </div>
                <div className="mt-5 space-y-4">
                  {g.items.map((it) => (
                    <div key={it.title} className="flex gap-3">
                      <div className="mt-0.5 rounded-xl bg-primary/8 p-2 text-primary">
                        <it.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-raleway font-bold text-foreground">{it.title}</div>
                        <div className="text-sm text-muted-foreground font-lora mt-1">{it.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="screens">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-5xl font-raleway font-black">Telas do sistema</h2>
              <p className="text-lg text-muted-foreground font-lora max-w-2xl">
                Layout responsivo, leitura confortável e ações rápidas. Cada tela prioriza o que importa para o atendimento.
              </p>
            </div>
            <Button variant="outline" size="lg" className="self-start lg:self-auto" onClick={() => navigate("/pricing")}>
              Ver planos e começar
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {screenshots.map((s) => (
              <figure key={s.label} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <img src={s.src} alt={s.alt} className="w-full h-auto" loading="lazy" decoding="async" />
                <figcaption className="px-4 py-3 text-sm font-raleway font-semibold text-foreground/80">
                  {s.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}

