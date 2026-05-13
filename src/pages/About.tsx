import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

const principles = [
  { title: "Clareza", desc: "Interface direta, leitura confortável e ações previsíveis." },
  { title: "Velocidade", desc: "Carregamento rápido e fluxo de trabalho sem travas." },
  { title: "Confiança", desc: "Boas práticas de segurança e suporte quando você precisa." },
];

export default function About() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Sobre`}
        description="Conheça o Salão de Bolso: um sistema de gestão para salão de beleza criado para simplificar agenda, clientes e financeiro com uma experiência moderna e acessível."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          email: site.supportEmail,
          telephone: site.supportPhoneE164,
          url: typeof window !== "undefined" ? window.location.origin : "https://example.com",
        }}
      />

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-raleway font-semibold text-sm">Feito para rotina real</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-raleway font-black tracking-tight">
              Sobre o <span className="text-gradient">{site.name}</span>
            </h1>
            <p className="text-lg text-muted-foreground font-lora">
              O Salão de Bolso nasceu para resolver um problema simples: a gestão do salão não deveria consumir sua energia.
              Por isso, juntamos agenda online, cadastro de clientes e controle financeiro em uma experiência moderna, rápida e acessível.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="hero" size="lg" className="px-8" onClick={() => window.open(site.appUrl, "_blank")}>
                Testar grátis
              </Button>
              <Button variant="outline" size="lg" className="px-8" onClick={() => window.open(site.whatsappUrl, "_blank")}>
                Conversar no WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="font-raleway font-bold text-foreground text-xl">{p.title}</div>
                <div className="mt-2 text-sm text-muted-foreground font-lora">{p.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-raleway font-black">O que você ganha</h2>
              <p className="text-lg text-muted-foreground font-lora">
                Menos planilhas, menos mensagens perdidas e mais previsibilidade. O foco é liberar seu tempo para atendimento e crescimento.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Mais organização na agenda e no atendimento",
                  "Recorrência com histórico de clientes e relacionamento",
                  "Decisões com base em dados do financeiro",
                  "Rotina clara para equipe e gestão",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5" />
                    <span className="text-sm text-foreground/80 font-lora">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-raleway font-bold text-foreground">Suporte humano</div>
                  <div className="text-sm text-muted-foreground font-lora mt-1">
                    Orientação para começar e tirar dúvidas no dia a dia.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-raleway font-bold text-foreground">Boas práticas</div>
                  <div className="text-sm text-muted-foreground font-lora mt-1">
                    Interface acessível e decisões focadas em confiabilidade.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}

