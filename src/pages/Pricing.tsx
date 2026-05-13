import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site } from "@/lib/site";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const monthlyFeatures = [
  "Agenda online e agendamentos",
  "Link de agendamento 24/7",
  "Cadastro de clientes e histórico",
  "Controle financeiro (entradas e saídas)",
  "Relatórios e visão do negócio",
];

const lifetimeFeatures = [
  "Acesso completo ao sistema",
  "Atualizações contínuas",
  "Suporte prioritário",
  "Agenda online 24/7",
  "Relatórios e dashboard",
];

const faqs = [
  {
    q: "Preciso de cartão de crédito para testar?",
    a: "Não. Você pode iniciar o teste grátis sem cadastrar cartão.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O sistema é responsivo e funciona em celular, tablet e computador.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. No plano mensal, você pode cancelar a qualquer momento.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Você pode falar com a equipe via WhatsApp para dúvidas e orientação de uso.",
  },
];

export default function Pricing() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Planos e preços`}
        description="Planos do Salão de Bolso: mensalidade acessível e opção vitalícia. Teste grátis por 7 dias e organize agenda, clientes e financeiro."
        path="/pricing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: site.name,
          description: "Sistema de gestão para salão de beleza com agenda online e controle financeiro.",
          offers: [
            { "@type": "Offer", price: "7.90", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
            { "@type": "Offer", price: "197.00", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
          ],
        }}
      />

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-raleway font-black tracking-tight">
              Planos simples, valor{" "}
              <span className="text-gradient">imediato</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-lora">
              Comece com o teste grátis. Depois, escolha o modelo que faz sentido para o seu salão — mensal ou vitalício.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="rounded-2xl border-2 border-border bg-card shadow-sm">
              <CardHeader>
                <CardTitle className="font-raleway">Mensal</CardTitle>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-raleway font-black text-foreground">R$ 7,90</span>
                  <span className="text-muted-foreground font-lora mb-2">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground font-lora">Sem fidelidade. Cancele quando quiser.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {monthlyFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5" />
                      <span className="text-sm text-foreground/80 font-lora">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Button variant="hero" size="lg" className="w-full" onClick={() => window.open(site.appUrl, "_blank")}>
                    Iniciar teste grátis
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-lora">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    <span>Sem cartão · 7 dias grátis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-primary/40 bg-card shadow-xl shadow-primary/10 relative overflow-hidden">
              <div className="absolute top-5 right-5 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full">
                <span className="text-white text-xs font-raleway font-bold tracking-wide">MAIS VANTAJOSO</span>
              </div>
              <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-primary/15">
                <CardTitle className="font-raleway">Vitalício</CardTitle>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-2xl font-raleway font-bold text-muted-foreground line-through">R$ 482</span>
                  <span className="text-5xl font-raleway font-black text-foreground">R$ 197</span>
                </div>
                <p className="text-sm text-muted-foreground font-lora">Pagamento único. Acesso para sempre.</p>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3">
                  {lifetimeFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5" />
                      <span className="text-sm text-foreground/80 font-lora">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open("https://wa.me/5533998542100?text=Olá! Quero adquirir o Salão de Bolso (vitalício)", "_blank")}
                  >
                    Comprar vitalício
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" onClick={() => window.open(site.whatsappUrl, "_blank")}>
                    Falar com um especialista
                  </Button>
                  <div className="text-center text-xs text-muted-foreground font-lora">Garantia de 7 dias</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="faq">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-raleway font-black text-center">Perguntas frequentes</h2>
            <p className="mt-4 text-lg text-muted-foreground font-lora text-center">
              Respostas objetivas para você decidir com confiança.
            </p>
            <div className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left font-raleway">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-lora">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}

