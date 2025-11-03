import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQItem } from "@/components/FAQItem";
import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";
import { Calendar, Users, DollarSign, Award, Clock, Scissors, Settings, TrendingUp, Smartphone, Mail, Phone, CheckCircle, BarChart3, ChevronLeft, ChevronRight, Shield, Zap, Star, Users2, Sparkles, Target, X } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logoImage from "@/assets/logo.jpg";
import dashboardImg from "@/assets/screenshots/dashboard.png";
import agendamentosImg from "@/assets/screenshots/agendamentos.png";
import clientesImg from "@/assets/screenshots/clientes.png";
import financeiroImg from "@/assets/screenshots/financeiro.png";
import marketingImg from "@/assets/screenshots/marketing.png";
import agendaImg from "@/assets/screenshots/agenda.png";
const Index = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const screenshots = [{
    img: dashboardImg,
    title: "Dashboard Completo",
    desc: "Visualize tudo em tempo real com gráficos e métricas"
  }, {
    img: agendamentosImg,
    title: "Gestão de Agendamentos",
    desc: "Organize todos os horários sem conflitos"
  }, {
    img: agendaImg,
    title: "Agenda Profissional",
    desc: "Visualização diária, semanal e mensal"
  }, {
    img: clientesImg,
    title: "Gestão de Clientes",
    desc: "Histórico completo e detalhado de cada cliente"
  }, {
    img: financeiroImg,
    title: "Controle Financeiro",
    desc: "Receitas, despesas e gráficos avançados"
  }, {
    img: marketingImg,
    title: "Programa de Fidelidade",
    desc: "Aumente o retorno de clientes em até 40%"
  }];
  const nextScreenshot = () => {
    setCurrentScreenshot(prev => (prev + 1) % screenshots.length);
  };
  const prevScreenshot = () => {
    setCurrentScreenshot(prev => (prev - 1 + screenshots.length) % screenshots.length);
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-border z-50 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={logoImage} alt="Salão de Bolso" className="w-12 h-12 rounded-xl hover:scale-110 transition-transform duration-300 shadow-lg" />
            <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Salão de Bolso
            </span>
          </div>
          <Button variant="hero" size="lg" onClick={scrollToPricing} className="hover:scale-105 transition-transform duration-300 shadow-lg">
            🔥 Ver Oferta
          </Button>
        </nav>
      </header>

      {/* Urgency Banner */}
      <div className="fixed top-20 left-0 right-0 bg-gradient-to-r from-primary via-secondary to-primary text-white py-2 z-40 animate-pulse">
        <p className="text-center text-sm font-bold">
          ⚡ OFERTA ESPECIAL: 50% de Desconto por tempo limitado! Últimas unidades disponíveis
        </p>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(280_90%_55%/0.1),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(320_85%_60%/0.1),transparent_50%)]" />
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border-2 border-primary/20 animate-pulse shadow-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold">Oferta Especial: 50% OFF</span>
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
                Transforme seu{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Salão de Beleza
                </span>{" "}
                com Tecnologia
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                O sistema completo que <strong className="text-primary">economiza 10+ horas por semana</strong>, aumenta sua receita em até <strong className="text-primary">40%</strong> e profissionaliza seu negócio. Tudo que você precisa em um único lugar.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 animate-fade-in" style={{
              animationDelay: '0.3s'
            }}>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-black text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Salões usando</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-black text-primary">40%</div>
                  <div className="text-sm text-muted-foreground mt-1">Mais receita</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-black text-primary">10h</div>
                  <div className="text-sm text-muted-foreground mt-1">Economizadas</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <Button variant="hero" size="lg" className="text-xl h-16 px-8 font-bold hover:scale-105 transition-transform duration-300 shadow-2xl" onClick={scrollToPricing}>
                  🚀 Garantir Desconto de 50%
                </Button>
                <Button variant="outline" size="lg" className="text-xl h-16 px-8 font-bold hover:scale-105 transition-transform duration-300 border-2" onClick={scrollToContact}>
                  💬 Falar com Especialista
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">Pagamento Único</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">Sem Mensalidades</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">Garantia de 7 Dias</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl animate-pulse" />
              <img src={heroImage} alt="Dashboard Salão de Bolso" className="relative rounded-3xl shadow-[0_0_100px_hsl(280_90%_55%/0.4)] border-4 border-white hover:scale-105 transition-transform duration-500" />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 animate-bounce">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-primary text-primary" />
                  <div>
                    <div className="font-bold text-foreground">4.9/5.0</div>
                    <div className="text-xs text-muted-foreground">50+ reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
              Problemas que você <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">já enfrentou?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problems */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-2">
                  <X className="w-6 h-6" /> Sem o Sistema
                </h3>
                {["Perda de agendamentos por esquecimento ou conflitos", "Horas gastas organizando manualmente a agenda", "Clientes esquecidos, sem programa de fidelidade", "Dificuldade em controlar receitas e despesas", "Trabalho fora do horário para responder WhatsApp", "Perda de oportunidades de venda"].map((problem, index) => <div key={index} className="flex items-start gap-3 p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{problem}</span>
                  </div>)}
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" /> Com o Sistema
                </h3>
                {["Agenda organizada automaticamente, zero conflitos", "Economize 10+ horas por semana com automação", "Programa de fidelidade aumenta retorno em 40%", "Controle financeiro completo e visual em tempo real", "Clientes agendam sozinhos 24/7 pelo link", "Aumente vendas com análise de serviços mais lucrativos"].map((solution, index) => <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20 hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{solution}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-accent/20 via-background to-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold">Funcionalidades Completas</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black">
              Tudo que seu{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Salão Precisa
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sistema profissional completo para organizar, automatizar e fazer seu negócio crescer exponencialmente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={Calendar} title="Agendamentos Inteligentes" description="Gestão completa com visualização diária, semanal e mensal. Sistema evita conflitos automaticamente e permite reagendamentos fáceis com histórico completo." />
            <FeatureCard icon={Smartphone} title="Agendamento Online 24/7" description="Link compartilhável para clientes agendarem sozinhos, qualquer hora do dia. Reduz ligações em 70% e aumenta conversão de novos clientes." />
            <FeatureCard icon={Users} title="Gestão Completa de Clientes" description="Cadastro detalhado com histórico de todos os serviços, valores gastos, preferências e notas personalizadas por cliente." />
            <FeatureCard icon={DollarSign} title="Financeiro Profissional" description="Controle total de receitas, despesas, contas fixas e a receber. Gráficos visuais e relatórios detalhados para melhor gestão financeira." />
            <FeatureCard icon={Award} title="Programa de Fidelidade" description="Sistema de pontuação automático, classes de clientes VIP e recompensas personalizadas. Aumenta engajamento e retorno de clientes em até 40%." />
            <FeatureCard icon={Clock} title="Automações Inteligentes" description="Crie retornos recorrentes e agendamentos futuros automaticamente. Lembretes automáticos para que você nunca perca um cliente." />
            <FeatureCard icon={Scissors} title="Catálogo de Serviços" description="Gerencie todos os serviços com preços, duração estimada e análise detalhada dos serviços mais vendidos e lucrativos." />
            <FeatureCard icon={Settings} title="Configurações Avançadas" description="Defina horários de funcionamento personalizados, intervalos entre atendimentos e notificações customizadas para seu negócio." />
            <FeatureCard icon={BarChart3} title="Relatórios e Análises" description="Dashboards em tempo real, identificação de serviços mais lucrativos, previsão de recebimentos e métricas de desempenho completas." />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-black">
              Conheça o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sistema por Dentro
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interface moderna, intuitiva e profissional que funciona perfeitamente em qualquer dispositivo
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative animate-fade-in">
              <div className="overflow-hidden rounded-3xl shadow-[0_0_100px_hsl(280_90%_55%/0.3)] border-4 border-primary/30 hover:border-primary/50 transition-all duration-500">
                <img src={screenshots[currentScreenshot].img} alt={screenshots[currentScreenshot].title} className="w-full h-auto transition-all duration-500" />
              </div>
              
              {/* Navigation Buttons */}
              <button onClick={prevScreenshot} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-125" aria-label="Anterior">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextScreenshot} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-125" aria-label="Próximo">
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Info Box */}
              <div className="mt-10 text-center space-y-3 animate-fade-in" key={currentScreenshot}>
                <h3 className="text-3xl font-bold text-foreground">
                  {screenshots[currentScreenshot].title}
                </h3>
                <p className="text-xl text-muted-foreground">
                  {screenshots[currentScreenshot].desc}
                </p>
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center gap-3 mt-8">
                {screenshots.map((_, index) => <button key={index} onClick={() => setCurrentScreenshot(index)} className={`rounded-full transition-all duration-300 ${index === currentScreenshot ? "bg-primary w-12 h-4" : "bg-border hover:bg-primary/50 w-4 h-4"}`} aria-label={`Ir para tela ${index + 1}`} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Users2 className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold">Depoimentos</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black">
              O que nossos{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Clientes Dizem
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de 50 salões de beleza transformaram seus negócios com nossa solução
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <TestimonialCard name="Maria Silva" role="Salão Beleza Pura - SP" content="Meu faturamento aumentou 40% em 3 meses! O programa de fidelidade trouxe muitos clientes de volta. Melhor investimento que fiz no salão." rating={5} />
            <TestimonialCard name="João Santos" role="Barbearia Style - RJ" content="Economizo mais de 10 horas por semana que gastava organizando agenda manualmente. Agora os clientes agendam sozinhos e eu foco no atendimento." rating={5} />
            <TestimonialCard name="Ana Oliveira" role="Studio Ana Hair - MG" content="Sistema incrível! O controle financeiro me mostrou onde estava perdendo dinheiro. Consegui aumentar minha margem de lucro em 30%." rating={5} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black">
              Por que escolher o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Salão de Bolso?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A solução completa que profissionaliza seu negócio e multiplica seus resultados
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[{
            icon: TrendingUp,
            title: "Aumente sua Receita",
            desc: "Programa de fidelidade inteligente aumenta retorno de clientes em até 40%. Análise de serviços mais lucrativos ajuda a focar no que dá mais resultado.",
            color: "from-primary/20 to-secondary/20"
          }, {
            icon: Clock,
            title: "Economize Tempo",
            desc: "Automações reduzem tempo administrativo em até 70%. Agendamento online 24/7 elimina necessidade de responder WhatsApp fora do horário.",
            color: "from-primary/20 to-secondary/20"
          }, {
            icon: Target,
            title: "Organização Total",
            desc: "Nunca mais esqueça compromissos ou tenha conflitos de horário. Sistema inteligente organiza tudo automaticamente com avisos e lembretes.",
            color: "from-primary/20 to-secondary/20"
          }, {
            icon: Smartphone,
            title: "Acesse de Qualquer Lugar",
            desc: "Funciona perfeitamente em computador, tablet e celular. Instale como aplicativo e tenha acesso offline quando necessário.",
            color: "from-primary/20 to-secondary/20"
          }, {
            icon: DollarSign,
            title: "Sem Mensalidades",
            desc: "Pague uma única vez e use para sempre! Sem taxas escondidas, sem surpresas. Todas as atualizações futuras incluídas gratuitamente.",
            color: "from-primary/20 to-secondary/20"
          }, {
            icon: Shield,
            title: "Profissionalize seu Negócio",
            desc: "Interface moderna e profissional impressiona clientes. Relatórios e métricas ajudam na tomada de decisões estratégicas para crescimento.",
            color: "from-primary/20 to-secondary/20"
          }].map((benefit, index) => <div key={index} className="group text-center space-y-4 p-8 rounded-2xl bg-gradient-to-br from-white to-primary/5 border-2 border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${benefit.color} group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex p-6 rounded-full bg-white/20 backdrop-blur-lg mb-4">
              <Shield className="w-16 h-16" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black">
              Garantia Total de 7 Dias
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Experimente o sistema por <strong>7 dias sem riscos</strong>. Se não ficar 100% satisfeito, devolvemos todo seu investimento. Sem perguntas, sem burocracia.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl">
                <div className="text-4xl font-black mb-2">7</div>
                <div className="text-lg">Dias de Garantia</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl">
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-lg">Dinheiro de Volta</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl">
                <div className="text-4xl font-black mb-2">0</div>
                <div className="text-lg">Risco para Você</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tudo que você precisa saber antes de transformar seu salão
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <FAQItem value="item-1" question="Como funciona o pagamento único?" answer="Você paga apenas uma vez R$ 299,90 e tem acesso completo ao sistema para sempre. Sem mensalidades, sem taxas escondidas, sem surpresas. Todas as atualizações futuras estão incluídas gratuitamente." />
              <FAQItem value="item-2" question="O sistema funciona no celular?" answer="Sim! O sistema é 100% responsivo e funciona perfeitamente em computadores, tablets e celulares. Você pode até instalar como um aplicativo no seu celular para acesso ainda mais rápido e com função offline." />
              <FAQItem value="item-3" question="Preciso de conhecimentos técnicos para usar?" answer="Não! O sistema foi desenvolvido para ser extremamente intuitivo. Qualquer pessoa consegue usar sem dificuldades. Além disso, oferecemos suporte técnico completo para te ajudar em qualquer dúvida." />
              <FAQItem value="item-4" question="Posso usar em mais de um dispositivo?" answer="Sim! Você pode acessar o sistema de quantos dispositivos quiser - computador, tablet, celular. Todos os dados ficam sincronizados automaticamente em tempo real." />
              <FAQItem value="item-5" question="Meus dados ficam seguros?" answer="Absolutamente! Utilizamos as mesmas tecnologias de segurança dos maiores bancos do mundo. Seus dados ficam criptografados e protegidos, com backups automáticos diários." />
              <FAQItem value="item-6" question="E se eu não gostar do sistema?" answer="Sem problemas! Você tem 7 dias de garantia total. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia." />
              <FAQItem value="item-7" question="Quantos clientes posso cadastrar?" answer="Quantos você quiser! Não há limite de clientes, agendamentos, serviços ou qualquer outra funcionalidade. Você tem acesso completo e ilimitado a todas as features." />
              <FAQItem value="item-8" question="Como funciona o suporte técnico?" answer="Oferecemos suporte técnico prioritário via WhatsApp e e-mail. Nossa equipe está sempre disponível para te ajudar com qualquer dúvida ou dificuldade que possa ter." />
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-accent/20 via-background to-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4 animate-pulse">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold">Oferta Especial</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black">
              Investimento que se{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Paga Sozinho
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Com o aumento de 40% na receita, o sistema se paga em menos de 1 semana. O resto é lucro puro para você!
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <PricingCard />
          </div>
          
          {/* Social Proof */}
          <div className="text-center mt-16 space-y-6">
            <p className="text-muted-foreground">Junte-se a mais de 50 salões que já transformaram seus negócios</p>
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
              <span className="text-foreground font-bold ml-2">4.9/5.0</span>
              <span className="text-muted-foreground">(50+ avaliações)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary via-secondary to-primary text-white">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-black">
            Pronto para Transformar<br />seu Salão de Beleza?
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Junte-se a centenas de salões que já aumentaram sua receita em até 40% e economizam mais de 10 horas por semana
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Button size="lg" variant="secondary" className="gap-2 text-xl h-16 px-10 font-bold hover:scale-105 transition-transform duration-300 shadow-2xl" onClick={scrollToPricing}>
              🚀 Garantir 50% de Desconto
            </Button>
          </div>
          <p className="text-sm opacity-75 pt-4">
            ⚡ Oferta por tempo limitado • 🔒 Pagamento 100% seguro • ✅ Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-foreground text-background">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black">Ainda tem dúvidas?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Nossa equipe está pronta para te ajudar! Entre em contato agora mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2 text-lg h-14 px-8 hover:scale-105 transition-transform duration-300" onClick={() => window.open(`https://wa.me/5533998542100?text=Olá! Gostaria de saber mais sobre o Salão de Bolso`, '_blank')}>
              <Phone className="w-5 h-5" />
              (33) 99854-2100
            </Button>
            <Button size="lg" className="gap-2 text-lg h-14 px-8 bg-white hover:bg-white/90 text-foreground border-0 hover:scale-105 transition-transform duration-300" onClick={() => window.location.href = 'mailto:resellr7@gmail.com'}>
              <Mail className="w-5 h-5" />
              resellr7@gmail.com
            </Button>
          </div>
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
            <span>Todos os direitos reservados. Feito por lucas Henrique</span>
        </div>
        </div>
      </footer>
    </div>;
};
export default Index;
