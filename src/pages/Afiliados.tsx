import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Copy, ArrowLeft, DollarSign, Link2, Share2, Banknote, Infinity, Smartphone, Users, BarChart3, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import logoImage from "@/assets/logo.png";
import { Phone, Mail } from "lucide-react";

const AFFILIATE_LINK = "https://app.cakto.com.br/affiliate/invite/2a65ce9f-0efe-46a6-ab5a-e08f02b2ed2c";

const scripts = [
  {
    label: "WhatsApp direto",
    text: `Oi [Nome]! Tudo bem?
Você trabalha em salão ou conhece alguém da área de beleza?
Encontrei um app de gestão para salão chamado Salão de Bolso — controla agendamento, clientes e financeiro pelo celular. É acesso vitalício por R$197, sem mensalidade.
Achei muito útil e achei que podia te interessar (ou alguém que você conhece):
👉 [SEU LINK DE AFILIADO]`,
  },
  {
    label: "Instagram e TikTok",
    text: `Se você tem salão ou trabalha com beleza, precisa conhecer isso 👇
O Salão de Bolso é um app que organiza toda a gestão do seu salão no celular:
📅 Agendamentos
👥 Clientes
💰 Financeiro
Sem papel. Sem confusão. E o melhor: é pagamento único, sem mensalidade.
Tô indicando porque realmente vale — link na bio (ou nos comentários):
👉 [SEU LINK DE AFILIADO]
#salao #salaodebeleza #manicure #cabeleireira #gestao`,
  },
  {
    label: "Grupos Facebook/WhatsApp",
    text: `Olá pessoal! Quem trabalha em salão ou conhece alguém da área? 💇‍♀️
Descobri um app chamado Salão de Bolso que organiza tudo: agendamentos, clientes e financeiro — direto no celular, sem mensalidade.
Tô compartilhando porque achei que pode ajudar muita gente aqui do grupo:
👉 [SEU LINK DE AFILIADO]
Qualquer dúvida é só perguntar!`,
  },
  {
    label: "Stories curto",
    text: `[Mostre a tela do app funcionando]
Narração: Esse app organiza toda a gestão do salão no celular — agendamento, clientes e financeiro. Pagamento único, sem mensalidade. Link nos comentários!`,
  },
];

const Afiliados = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copiado!", description: "Texto copiado para a área de transferência" });
  };

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
          <h1 className="text-4xl lg:text-6xl font-black leading-tight">
            Ganhe <span className="text-green-600">R$70</span> por venda —{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              sem estoque, sem suporte
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Divulgue o Salão de Bolso e receba automaticamente a cada venda confirmada pelo Cakto.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            {[
              { value: "R$70", label: "por venda", icon: DollarSign },
              { value: "R$197", label: "preço do produto", icon: Banknote },
              { value: "Automático", label: "pagamento via Cakto", icon: Link2 },
              { value: "∞", label: "sem limite de vendas", icon: Infinity },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white rounded-xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all hover:scale-105">
                <stat.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-black text-green-600">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="text-xl h-16 px-10 font-bold bg-green-600 hover:bg-green-700 text-white shadow-xl hover:scale-105 transition-all"
            onClick={() => window.open(AFFILIATE_LINK, "_blank")}
          >
            🤝 Quero ser afiliado
          </Button>
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
