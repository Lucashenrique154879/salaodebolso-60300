import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Copy, ArrowLeft, DollarSign, Link2, Banknote, Infinity, Target, Trophy, Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import logoImage from "@/assets/logo.png";

import type { Easing } from "framer-motion";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.1, ease },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const AFFILIATE_LINK = "https://app.cakto.com.br/affiliate/invite/2a65ce9f-0efe-46a6-ab5a-e08f02b2ed2c";

const scripts = [
  {
    label: "WhatsApp direto",
    text: `Oi [Nome]! Tudo bem?\nVocê trabalha em salão ou conhece alguém da área de beleza?\nEncontrei um app de gestão para salão chamado Salão de Bolso — controla agendamento, clientes e financeiro pelo celular. É acesso vitalício por R$197, sem mensalidade.\nAchei muito útil e achei que podia te interessar (ou alguém que você conhece):\n👉 [SEU LINK DE AFILIADO]`,
  },
  {
    label: "Instagram e TikTok",
    text: `Se você tem salão ou trabalha com beleza, precisa conhecer isso 👇\nO Salão de Bolso é um app que organiza toda a gestão do seu salão no celular:\n📅 Agendamentos\n👥 Clientes\n💰 Financeiro\nSem papel. Sem confusão. E o melhor: é pagamento único, sem mensalidade.\nTô indicando porque realmente vale — link na bio (ou nos comentários):\n👉 [SEU LINK DE AFILIADO]\n#salao #salaodebeleza #manicure #cabeleireira #gestao`,
  },
  {
    label: "Grupos Facebook/WhatsApp",
    text: `Olá pessoal! Quem trabalha em salão ou conhece alguém da área? 💇‍♀️\nDescobri um app chamado Salão de Bolso que organiza tudo: agendamentos, clientes e financeiro — direto no celular, sem mensalidade.\nTô compartilhando porque achei que pode ajudar muita gente aqui do grupo:\n👉 [SEU LINK DE AFILIADO]\nQualquer dúvida é só perguntar!`,
  },
  {
    label: "Stories curto",
    text: `[Mostre a tela do app funcionando]\nNarração: Esse app organiza toda a gestão do salão no celular — agendamento, clientes e financeiro. Pagamento único, sem mensalidade. Link nos comentários!`,
  },
];

const faqItems = [
  { q: "Quando recebo minha comissão?", a: "O pagamento é processado automaticamente pelo Cakto após a confirmação da venda. O prazo depende das configurações do seu saque na plataforma." },
  { q: "Preciso ter CNPJ para ser afiliado?", a: "Não. Qualquer pessoa física pode se cadastrar como afiliado no Cakto e receber comissões normalmente." },
  { q: "Como sei que a venda foi feita pelo meu link?", a: "O Cakto rastreia automaticamente cada clique no seu link. Você consegue ver todas as suas vendas e comissões em tempo real no painel do afiliado." },
  { q: "Por quanto tempo meu link fica ativo?", a: "Seu link de afiliado fica ativo indefinidamente enquanto você estiver cadastrado no programa." },
  { q: "Posso divulgar em qualquer canal?", a: "Sim — WhatsApp, Instagram, TikTok, Facebook, grupos, pessoalmente. O único limite é não usar spam ou informações falsas sobre o produto." },
  { q: "Tem algum custo para ser afiliado?", a: "Nenhum. O cadastro é gratuito e você não paga nada para divulgar." },
];

const Afiliados = () => {
  const [salesPerWeek, setSalesPerWeek] = useState(3);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copiado!", description: "Texto copiado para a área de transferência" });
  };

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-border z-50 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Salão de Bolso" className="w-12 h-12 rounded-xl shadow-lg" />
            <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Salão de Bolso
            </span>
          </div>
          <a href="/" className="flex items-center gap-2 text-primary font-bold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Voltar para o site
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-green-50 via-background to-green-50/50">
        <div className="container mx-auto text-center space-y-8 max-w-5xl">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl lg:text-6xl font-black leading-tight">
            Ganhe <span className="text-green-600">R$70</span> por venda —{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              sem estoque, sem suporte
            </span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Divulgue o Salão de Bolso e receba automaticamente a cada venda confirmada pelo Cakto.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            {[
              { value: "R$70", label: "por venda", icon: DollarSign },
              { value: "R$197", label: "preço do produto", icon: Banknote },
              { value: "Automático", label: "pagamento via Cakto", icon: Link2 },
              { value: "∞", label: "sem limite de vendas", icon: Infinity },
            ].map((stat, i) => (
              <motion.div key={i} variants={scaleIn} custom={i} className="p-4 bg-white rounded-xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all hover:scale-105">
                <stat.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-black text-green-600">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Prova social */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="max-w-2xl mx-auto bg-green-800 text-white rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium shadow-lg">
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9/5.0</span>
            <span className="opacity-60">·</span>
            <span>50+ clientes satisfeitos</span>
            <span className="opacity-60">·</span>
            <span>Pagamento garantido pelo Cakto</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={scaleIn} custom={4}>
            <Button
              size="lg"
              className="text-xl h-16 px-10 font-bold bg-green-600 hover:bg-green-700 text-white shadow-xl hover:scale-105 transition-all"
              onClick={() => window.open(AFFILIATE_LINK, "_blank")}
            >
              🤝 Quero ser afiliado
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-16">
            Como <span className="text-green-600">funciona</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Cadastre-se como afiliado", desc: "Acesse o painel Cakto, crie sua conta de afiliado gratuitamente em menos de 2 minutos" },
              { step: 2, title: "Pegue seu link exclusivo", desc: "O Cakto gera um link rastreável único para você. Cada venda pelo seu link é registrada automaticamente" },
              { step: 3, title: "Divulgue nos seus canais", desc: "WhatsApp, Instagram, Facebook, TikTok, grupos — qualquer canal que você já usa" },
              { step: 4, title: "Receba R$70 por venda", desc: "O Cakto processa e deposita na sua conta sem depender de ninguém" },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4 p-6 rounded-2xl border-2 border-green-100 hover:border-green-300 bg-green-50/30 hover:shadow-xl transition-all">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-black">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que vende */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-16">
            Por que o Salão de Bolso é <span className="text-green-600">fácil de vender</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, emoji: "🎯", title: "1,5 milhão de salões no Brasil", desc: "A maioria ainda usa papel ou WhatsApp para agendar. É um mercado praticamente virgem para tecnologia." },
              { icon: DollarSign, emoji: "💰", title: "R$197 — qualquer profissional paga", desc: "É menos que um dia de trabalho para a maioria dos clientes. Objeção de preço é rara nesse nicho." },
              { icon: Trophy, emoji: "🏆", title: "Produto nichado e diferenciado", desc: "Não existe sistema de gestão assim focado em salões pequenos com esse preço e sem mensalidade." },
            ].map((card, i) => (
              <Card key={i} className="border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center space-y-4">
                  <span className="text-4xl">{card.emoji}</span>
                  <h3 className="text-xl font-black">{card.title}</h3>
                  <p className="text-muted-foreground">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora de ganhos */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-black">
            Calcule seus <span className="text-green-600">ganhos</span> como afiliado
          </h2>
          <p className="text-xl text-muted-foreground">
            Arraste o controle e veja quanto você pode ganhar por mês
          </p>

          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 space-y-8">
            <div className="space-y-4">
              <label className="text-lg font-bold">
                Vendas por semana: <span className="text-green-600 text-2xl">{salesPerWeek}</span>
              </label>
              <Slider
                value={[salesPerWeek]}
                onValueChange={(v) => setSalesPerWeek(v[0])}
                min={1}
                max={20}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 venda</span>
                <span>20 vendas</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Por semana", value: salesPerWeek * 70 },
                { label: "Por mês", value: salesPerWeek * 4 * 70 },
                { label: "Por ano", value: salesPerWeek * 52 * 70 },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-3xl font-black text-green-700">{formatCurrency(item.value)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O produto */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-12">
            O produto que você vai <span className="text-green-600">divulgar</span>
          </h2>
          <Card className="border-2 border-green-200 shadow-xl overflow-hidden">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-black">Salão de Bolso</h3>
                <p className="text-muted-foreground">App de gestão para salões de beleza, manicures, cabeleireiros e profissionais de estética</p>
              </div>
              <div className="space-y-3">
                {[
                  "Controle de agendamentos pelo celular",
                  "Histórico completo de clientes",
                  "Controle financeiro",
                  "Gestão de serviços",
                  "Sem mensalidade — pagamento único",
                  "Funciona no celular, tablet e computador",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <span className="text-3xl font-black">R$197</span>
                <span className="text-muted-foreground ml-2">pagamento único</span>
              </div>
              <div className="text-center p-4 bg-green-100 rounded-xl border-2 border-green-300">
                <span className="text-2xl font-black text-green-700">Sua comissão: R$70 por venda</span>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { vendas: 5, total: "R$350" },
                  { vendas: 10, total: "R$700" },
                  { vendas: 20, total: "R$1.400" },
                ].map((kpi, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-xl border shadow-sm">
                    <div className="text-xl font-black text-green-600">{kpi.total}</div>
                    <div className="text-sm text-muted-foreground">{kpi.vendas} vendas</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scripts prontos */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black">
              Material pronto para usar — <span className="text-green-600">só copiar e colar</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Coloque seu link de afiliado onde indicado e envie. Não precisa criar nada do zero.
            </p>
          </div>
          <div className="space-y-6">
            {scripts.map((script, i) => (
              <Card key={i} className="border-2 border-green-100 hover:border-green-300 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{script.label}</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-green-300 text-green-700 hover:bg-green-50"
                      onClick={() => copyToClipboard(script.text)}
                    >
                      <Copy className="w-4 h-4" /> Copiar
                    </Button>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm text-muted-foreground bg-muted/30 p-4 rounded-xl font-sans">
                    {script.text}
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regras */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-12">
            Regras do <span className="text-green-600">programa</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { ok: true, text: "Pagamento automático via Cakto — R$70 direto na sua conta a cada venda confirmada" },
              { ok: true, text: "Rastreamento de 30 dias — clicou hoje, comprou em até 30 dias = comissão sua" },
              { ok: true, text: "Sem limite de vendas — quanto mais divulgar, mais ganha" },
              { ok: false, text: "Não use spam ou anúncios enganosos — divulgação em grupos sem relação com beleza ou promessas falsas desqualificam o afiliado" },
              { ok: false, text: "Não altere preço ou informações — divulgue sempre como R$197 acesso vitalício" },
            ].map((rule, i) => (
              <Card key={i} className={`border-2 ${rule.ok ? "border-green-200 bg-green-50/30" : "border-red-200 bg-red-50/30"}`}>
                <CardContent className="p-6 flex items-start gap-3">
                  {rule.ok ? (
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm">{rule.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-12">
            Perguntas <span className="text-green-600">frequentes</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-2 border-green-100 rounded-xl px-6 data-[state=open]:border-green-300 transition-colors">
                <AccordionTrigger className="text-left font-bold hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-green-800 text-white">
        <div className="container mx-auto text-center space-y-8 max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-black">Pronto para começar a ganhar?</h2>
          <p className="text-xl opacity-90">Cadastre-se gratuitamente e comece a divulgar hoje mesmo</p>
          <Button
            size="lg"
            className="text-xl h-16 px-12 font-bold bg-white text-green-800 hover:bg-white/90 shadow-xl hover:scale-105 transition-all"
            onClick={() => window.open(AFFILIATE_LINK, "_blank")}
          >
            🤝 Quero ser afiliado agora
          </Button>
          <p className="text-sm opacity-80">
            ✓ Cadastro gratuito · ✓ Sem mensalidade · ✓ Pagamento automático
          </p>
          <p className="text-sm opacity-75">
            Dúvidas? resellr7@gmail.com · (33) 99854-2100
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4">
        <div className="container mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <img src={logoImage} alt="Salão de Bolso" className="w-10 h-10 rounded-lg" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Salão de Bolso
            </span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sistema completo de gestão para salões de beleza. Transforme seu negócio com tecnologia profissional.
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground pt-4">
            <span>© 2025 Salão de Bolso</span>
            <span>•</span>
            <span>Todos os direitos reservados. Feito por Lucas Henrique</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Afiliados;
