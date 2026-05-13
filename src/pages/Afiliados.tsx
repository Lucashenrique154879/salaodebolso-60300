import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { site } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CheckCircle2, Copy, DollarSign, Home, Link2, Rocket, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

const AFFILIATE_LINK = "https://app.cakto.com.br/affiliate/invite/2a65ce9f-0efe-46a6-ab5a-e08f02b2ed2c";

const scripts = [
  {
    label: "WhatsApp direto",
    text: `Oi [Nome]! Tudo bem?\n\nVocê trabalha em salão ou conhece alguém da área de beleza?\nEu conheci o Salão de Bolso — um sistema de gestão para salão com agenda online, cadastro de clientes e financeiro.\nSe fizer sentido, dá uma olhada por aqui:\n[SEU LINK DE AFILIADO]`,
  },
  {
    label: "Instagram/TikTok",
    text: `Se você tem salão ou trabalha com beleza, precisa organizar agenda e financeiro.\nO Salão de Bolso é um sistema simples e rápido para gestão do salão.\nLink:\n[SEU LINK DE AFILIADO]`,
  },
  {
    label: "Grupos",
    text: `Olá! Compartilhando um sistema de gestão para salão de beleza que pode ajudar: agenda online, clientes e financeiro.\nLink:\n[SEU LINK DE AFILIADO]`,
  },
] as const;

const faqItems = [
  {
    q: "Como funciona o programa de afiliados?",
    a: "Você se cadastra, recebe seu link de afiliado, divulga para salões e barbearias e ganha comissão por cada venda confirmada via sua indicação.",
  },
  {
    q: "Quanto ganho de comissão por venda?",
    a: "A comissão padrão é definida pelo programa na plataforma (ex.: R$ 70 por venda). Os valores finais podem variar conforme regras atuais do programa.",
  },
  {
    q: "Quando e como recebo os pagamentos?",
    a: "O pagamento é processado pela plataforma Cakto após confirmação da venda. O prazo e método seguem as regras de saque da plataforma.",
  },
  {
    q: "Como o rastreamento funciona (cookie/atribuição)?",
    a: "A plataforma registra cliques e atribui vendas ao seu link dentro da janela de rastreamento definida pelo programa (ex.: 30 dias).",
  },
  {
    q: "Quais são as regras de participação?",
    a: "Não use spam, anúncios enganosos ou promessas falsas. Divulgue preços e condições conforme a página oficial do produto e respeite os termos do programa.",
  },
  {
    q: "Quais materiais de apoio eu tenho?",
    a: "Você tem scripts prontos para WhatsApp e redes sociais, além de estratégias sugeridas para divulgação orgânica.",
  },
  {
    q: "Dá para trabalhar em casa como afiliado?",
    a: "Sim. A rotina pode ser 100% online: conteúdo, mensagens, acompanhamento do funil e suporte ao cliente via WhatsApp, tudo do seu computador ou celular.",
  },
  {
    q: "Preciso aparecer em vídeos para ganhar dinheiro online?",
    a: "Não necessariamente. Você pode usar prints de telas, tutoriais com voz, carrosséis e mensagens diretas. O importante é explicar a dor e a solução com clareza.",
  },
  {
    q: "Posso fazer anúncios pagos?",
    a: "Depende das regras do programa e da plataforma. Antes de anunciar, confirme se tráfego pago, palavras-chave de marca e remarketing são permitidos.",
  },
  {
    q: "Existe suporte para dúvidas antes da compra?",
    a: "Sim. Você pode direcionar interessados para o WhatsApp para tirar dúvidas e aumentar a taxa de conversão com segurança.",
  },
] as const;

export default function Afiliados() {
  const [commissionPerSale, setCommissionPerSale] = useState(70);
  const [salesPeriod, setSalesPeriod] = useState<"day" | "week" | "month">("day");
  const [salesPerPeriod, setSalesPerPeriod] = useState(3);

  const currency = useMemo(
    () => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }),
    [],
  );

  const simulator = useMemo(() => {
    const cps = Math.max(0, Number.isFinite(commissionPerSale) ? commissionPerSale : 0);
    const s = Math.max(0, Number.isFinite(salesPerPeriod) ? salesPerPeriod : 0);

    const salesPerDay = salesPeriod === "day" ? s : salesPeriod === "week" ? s / 7 : s / 30;
    const earningsPerDay = salesPerDay * cps;

    return {
      earningsPerSale: cps,
      salesPerDay,
      salesPerWeek: salesPerDay * 7,
      salesPerMonth: salesPerDay * 30,
      earningsPerDay,
      earningsPerWeek: earningsPerDay * 7,
      earningsPerMonth: earningsPerDay * 30,
      earningsPerYear: earningsPerDay * 365,
    };
  }, [commissionPerSale, salesPerPeriod, salesPeriod]);

  const origin = typeof window !== "undefined" ? window.location.origin : "https://example.com";
  const jsonLdFaq = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${site.name} | Programa de afiliados`,
      url: `${origin}/afiliados`,
      description:
        "Programa de afiliados para ganhar dinheiro online e trabalhar em casa: comissão por venda, simulador de ganhos, materiais e estratégias.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: origin,
      email: site.supportEmail,
      telephone: site.supportPhoneE164,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50",
      },
    },
  ];

  const affiliateStats = [
    { icon: TrendingUp, label: "Taxa de conversão (referência)", value: "3%–5%" },
    { icon: Link2, label: "Janela de rastreamento (ex.)", value: "30 dias" },
    { icon: DollarSign, label: "Comissão por venda (ex.)", value: currency.format(commissionPerSale) },
    { icon: Home, label: "Rotina possível (ex.)", value: "100% online" },
  ] as const;

  const affiliateTestimonials = [
    {
      name: "Rafael Souza",
      city: "São Paulo · SP",
      channel: "WhatsApp + Instagram",
      result: "R$ 2.800 em 30 dias",
      text: "Montei uma rotina simples de contato com salões e postagens curtas. Quando eu deixei o CTA claro e mandei prova do produto, a conversão subiu.",
    },
    {
      name: "Camila Ribeiro",
      city: "Belo Horizonte · MG",
      channel: "Indicação + grupos",
      result: "R$ 1.400/mês",
      text: "Usei scripts prontos e uma sequência de mensagens. Em vez de insistir, foquei em falar com quem já tinha a dor de agenda e financeiro.",
    },
    {
      name: "Bruno Almeida",
      city: "Recife · PE",
      channel: "Conteúdo orgânico",
      result: "Primeiras 5 vendas",
      text: "Comecei devagar e só falei com público do nicho. A primeira virada foi explicar o benefício em 15 segundos e mandar o link na hora certa.",
    },
  ] as const;

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast({ title: "Copiado", description: "Texto copiado para a área de transferência" });
  };

  return (
    <SiteLayout>
      <Seo
        title={`Programa de afiliados | ${site.name}`}
        description="Programa de afiliados para ganhar dinheiro online e trabalhar em casa: comissão por venda, simulador de ganhos, materiais e estratégias."
        keywords="programa de afiliados, ganhar dinheiro online, trabalhar em casa, comissão por venda, marketing de afiliados"
        path="/afiliados"
        jsonLd={jsonLdFaq}
      />

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-6xl font-raleway font-black tracking-tight">
                Programa de afiliados para{" "}
                <span className="text-gradient">ganhar dinheiro online</span>
              </h1>
              <p className="text-lg text-muted-foreground font-lora max-w-xl">
                Uma forma simples de trabalhar em casa: indique um sistema de gestão para salão de beleza e ganhe comissão por venda confirmada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" className="px-8" onClick={() => window.open(AFFILIATE_LINK, "_blank")}>
                  Quero me cadastrar
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8"
                  onClick={() => document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  Ver simulador
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
                {[
                  { icon: DollarSign, label: "Comissão", value: "R$ 70" },
                  { icon: Link2, label: "Venda rastreada", value: "Link + atribuição" },
                  { icon: ShieldCheck, label: "Comece hoje", value: "Cadastro grátis" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <s.icon className="w-5 h-5 text-primary" />
                    <div className="mt-3 text-lg font-raleway font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground font-lora mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-raleway font-bold text-foreground text-xl">Como funciona o programa de afiliados</h2>
              <div className="mt-5 space-y-4">
                {[
                  "Cadastre-se e ative seu link de afiliado",
                  "Divulgue o link com scripts e conteúdo pronto",
                  "Acompanhe cliques, conversões e comissões no painel",
                  "Receba pagamento conforme regras da plataforma",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5" />
                    <span className="text-sm text-foreground/80 font-lora">{t}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="simulador" tone="muted">
        <Container>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-raleway font-black">
                Simulador de ganhos do <span className="text-gradient">programa de afiliados</span>
              </h2>
              <p className="text-lg text-muted-foreground font-lora">
                Simule de forma simples: comissão por venda × vendas por dia/semana/mês.
              </p>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                <div className="space-y-2">
                  <h3 className="font-raleway font-bold text-foreground">Comissão por venda (R$)</h3>
                  <Input
                    inputMode="numeric"
                    value={commissionPerSale}
                    onChange={(e) => setCommissionPerSale(Number(e.target.value))}
                    aria-label="Comissão por venda"
                  />
                  <div className="text-xs text-muted-foreground font-lora">Ex.: R$ 70 por venda confirmada.</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-raleway font-bold text-foreground">Vendas por</h3>
                    <ToggleGroup
                      type="single"
                      value={salesPeriod}
                      onValueChange={(v) => {
                        if (v === "day" || v === "week" || v === "month") setSalesPeriod(v);
                      }}
                      variant="outline"
                      className="justify-end"
                    >
                      <ToggleGroupItem value="day" aria-label="Vendas por dia">Dia</ToggleGroupItem>
                      <ToggleGroupItem value="week" aria-label="Vendas por semana">Semana</ToggleGroupItem>
                      <ToggleGroupItem value="month" aria-label="Vendas por mês">Mês</ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-raleway font-semibold text-muted-foreground">
                      {salesPerPeriod}
                    </div>
                    <div className="text-xs text-muted-foreground font-lora">
                      {salesPeriod === "day" ? "por dia" : salesPeriod === "week" ? "por semana" : "por mês"}
                    </div>
                  </div>
                  <Slider
                    value={[salesPerPeriod]}
                    onValueChange={(v) => setSalesPerPeriod(v[0])}
                    min={0}
                    max={salesPeriod === "day" ? 30 : salesPeriod === "week" ? 200 : 800}
                    step={1}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "1/dia", values: { p: 70, s: 1, t: "day" as const } },
                    { label: "3/dia", values: { p: 70, s: 3, t: "day" as const } },
                    { label: "10/sem", values: { p: 70, s: 10, t: "week" as const } },
                    { label: "50/mês", values: { p: 70, s: 50, t: "month" as const } },
                  ].map((s) => (
                    <Button
                      key={s.label}
                      variant="soft"
                      size="sm"
                      onClick={() => {
                        setCommissionPerSale(s.values.p);
                        setSalesPeriod(s.values.t);
                        setSalesPerPeriod(s.values.s);
                      }}
                    >
                      {s.label}
                    </Button>
                  ))}
                </div>

                <div className="text-xs text-muted-foreground font-lora">
                  Referências de cálculo: semana = 7 dias, mês = 30 dias.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-raleway font-black text-foreground">Resultados estimados</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: DollarSign, label: "Ganho por venda", value: currency.format(simulator.earningsPerSale) },
                  { icon: Home, label: "Ganho por dia", value: currency.format(simulator.earningsPerDay) },
                  { icon: TrendingUp, label: "Ganho por semana", value: currency.format(simulator.earningsPerWeek) },
                  { icon: Rocket, label: "Ganho por mês", value: currency.format(simulator.earningsPerMonth) },
                ].map((kpi) => (
                  <Card key={kpi.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <kpi.icon className="w-5 h-5 text-primary" />
                    <div className="mt-3 text-2xl font-raleway font-black text-foreground">{kpi.value}</div>
                    <div className="text-xs text-muted-foreground font-lora mt-1">{kpi.label}</div>
                  </Card>
                ))}
              </div>
              <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-raleway font-semibold text-muted-foreground">Ganho estimado por ano</div>
                    <div className="mt-2 text-3xl font-raleway font-black text-foreground">{currency.format(simulator.earningsPerYear)}</div>
                    <div className="mt-2 text-sm text-muted-foreground font-lora">
                      Estimativa baseada na sua média de vendas. Resultados variam conforme canal, oferta e consistência.
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-secondary" aria-label="Avaliação 4.9 de 5">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="text-sm font-raleway font-bold text-foreground">4.9</span>
                  </div>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" className="px-8" onClick={() => window.open(AFFILIATE_LINK, "_blank")}>
                  Quero ser afiliado
                </Button>
                <Button variant="outline" size="lg" className="px-8" onClick={() => window.open(site.whatsappUrl, "_blank")}>
                  Tirar dúvidas no WhatsApp
                </Button>
              </div>
              <div className="text-xs text-muted-foreground font-lora">
                Estimativas para referência. Resultados variam conforme canal, oferta, região e consistência.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-raleway font-black text-center">
              Estatísticas e prova social do <span className="text-gradient">programa de afiliados</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-lora text-center max-w-3xl mx-auto">
              Estrutura pronta para você publicar métricas reais. Substitua os valores de referência pelos seus números oficiais.
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-lora text-center">
              Depoimentos abaixo são ilustrativos e devem ser trocados por cases reais antes de publicar.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {affiliateStats.map((s) => (
                <Card key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <s.icon className="w-5 h-5 text-primary" />
                  <div className="mt-3 text-2xl font-raleway font-black text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-lora mt-1">{s.label}</div>
                </Card>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {affiliateTestimonials.map((t) => (
                <Card key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-raleway font-bold text-foreground">{t.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground font-lora">
                        {t.city} · {t.channel}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-secondary" aria-label="Avaliação 5 de 5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-raleway font-semibold text-primary">{t.result}</div>
                  <p className="mt-3 text-sm text-muted-foreground font-lora leading-relaxed">{t.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-3xl lg:text-5xl font-raleway font-black">Materiais de apoio para divulgar</h2>
              <p className="text-lg text-muted-foreground font-lora">
                Copie, cole e substitua [SEU LINK DE AFILIADO] pelo seu link.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {scripts.map((s) => (
                <Card key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="font-raleway font-bold text-foreground">{s.label}</div>
                  <pre className="mt-3 whitespace-pre-wrap text-sm text-muted-foreground font-lora leading-relaxed">
                    {s.text}
                  </pre>
                  <div className="mt-5">
                    <Button variant="outline" className="w-full" onClick={() => copyToClipboard(s.text)}>
                      <Copy className="w-4 h-4" />
                      Copiar texto
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-raleway font-black text-center">
              Estratégias para <span className="text-gradient">trabalhar em casa</span> e vender mais
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-lora text-center max-w-3xl mx-auto">
              Divulgação orgânica bem feita gera vendas previsíveis ao longo do tempo. Foque em clareza, prova e consistência.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Link2,
                  title: "WhatsApp e indicação",
                  desc: "Mensagem curta, link, prova e convite para teste. Envie para contatos que já atuam com beleza.",
                },
                {
                  icon: TrendingUp,
                  title: "Conteúdo no Instagram",
                  desc: "Reels mostrando dor → solução → print de tela → CTA com link. Publique 3x por semana.",
                },
                {
                  icon: ShieldCheck,
                  title: "Grupos e comunidades",
                  desc: "Participe de grupos de beleza, ajude com dicas e indique o sistema quando fizer sentido.",
                },
              ].map((s) => (
                <Card key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <s.icon className="w-5 h-5 text-primary" />
                  <h3 className="mt-3 text-xl font-raleway font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-lora">{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-raleway font-black text-center">
              Regras, comissões e pagamentos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-lora text-center max-w-3xl mx-auto">
              Transparência evita retrabalho e aumenta conversão. Use este checklist como guia e ajuste conforme as regras atuais do programa na plataforma.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Comissões",
                  icon: DollarSign,
                  items: [
                    "Comissão por venda confirmada via seu link",
                    "Evite promessas e valores fora da página oficial",
                    "Foque em oferecer clareza e prova do produto",
                  ],
                },
                {
                  title: "Pagamentos",
                  icon: ShieldCheck,
                  items: [
                    "Processados pela plataforma após confirmação",
                    "Prazo e método conforme regras de saque",
                    "Acompanhe no painel: cliques, vendas e repasses",
                  ],
                },
                {
                  title: "Participação",
                  icon: Link2,
                  items: [
                    "Sem spam e sem anúncios enganosos",
                    "Respeite termos do programa (marca, tráfego pago, cupons)",
                    "Divulgue com consistência para crescer no orgânico",
                  ],
                },
              ].map((c) => (
                <Card key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <c.icon className="w-5 h-5 text-primary" />
                  <h3 className="mt-3 text-xl font-raleway font-bold text-foreground">{c.title}</h3>
                  <div className="mt-4 space-y-3">
                    {c.items.map((t) => (
                      <div key={t} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground font-lora">{t}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-raleway font-black text-center">FAQ do programa de afiliados</h2>
            <div className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((f) => (
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
