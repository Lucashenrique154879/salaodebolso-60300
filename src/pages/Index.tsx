import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { useState } from "react";
import {
  Calendar,
  Users,
  DollarSign,
  Award,
  Clock,
  Scissors,
  Settings,
  TrendingUp,
  Smartphone,
  Mail,
  Phone,
  CheckCircle,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

  const screenshots = [
    { img: dashboardImg, title: "Dashboard Completo", desc: "Visualize tudo em tempo real" },
    { img: agendamentosImg, title: "Gestão de Agendamentos", desc: "Organize todos os horários" },
    { img: agendaImg, title: "Agenda Profissional", desc: "Visualização diária, semanal e mensal" },
    { img: clientesImg, title: "Gestão de Clientes", desc: "Histórico completo de cada cliente" },
    { img: financeiroImg, title: "Controle Financeiro", desc: "Receitas, despesas e gráficos" },
    { img: marketingImg, title: "Programa de Fidelidade", desc: "Recompense clientes fiéis" },
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Nav */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border z-50 animate-slide-in-right">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={logoImage} alt="Salão de Bolso" className="w-10 h-10 rounded-lg hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Salão de Bolso
            </span>
          </div>
          <Button variant="hero" onClick={scrollToPricing} className="hover:scale-105 transition-transform duration-300">
            Adquirir Agora
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-accent/20 to-background overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 animate-pulse">
                <span className="text-primary font-semibold">🎉 Oferta Especial: 50% de Desconto</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Transforme seu{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Salão de Beleza
                </span>{" "}
                com Tecnologia
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Sistema completo de gestão que economiza tempo, aumenta receita e profissionaliza seu negócio. 
                Tudo que você precisa em um único lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button variant="hero" size="lg" className="text-lg h-14 hover:scale-105 transition-transform duration-300" onClick={scrollToPricing}>
                  Ver Oferta Especial
                </Button>
                <Button variant="outline" size="lg" className="text-lg h-14 hover:scale-105 transition-transform duration-300" onClick={scrollToContact}>
                  Falar com Vendedor
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Pagamento Único</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Sem Mensalidades</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">Atualizações Grátis</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse" />
              <img
                src={heroImage}
                alt="Dashboard Salão de Bolso"
                className="relative rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_50px_hsl(270_95%_60%/0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black">
              Tudo que seu{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Salão Precisa
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Funcionalidades completas para organizar, automatizar e fazer seu negócio crescer
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Calendar}
              title="Agendamentos Inteligentes"
              description="Gestão completa com visualização diária, semanal e mensal. Evita conflitos e permite reagendamentos fáceis."
            />
            <FeatureCard
              icon={Smartphone}
              title="Agendamento Online 24/7"
              description="Link compartilhável para clientes agendarem sozinhos, qualquer hora. Reduz ligações e aumenta conversão."
            />
            <FeatureCard
              icon={Users}
              title="Gestão de Clientes"
              description="Cadastro completo com histórico de serviços, valores e notas personalizadas por cliente."
            />
            <FeatureCard
              icon={DollarSign}
              title="Financeiro Completo"
              description="Controle total de receitas, despesas, contas fixas e a receber. Gráficos e relatórios detalhados."
            />
            <FeatureCard
              icon={Award}
              title="Programa de Fidelidade"
              description="Sistema de pontuação, classes de clientes e recompensas. Aumenta engajamento e retorno."
            />
            <FeatureCard
              icon={Clock}
              title="Cronogramas Automáticos"
              description="Crie retornos recorrentes e agendamentos futuros automaticamente. Nunca perca um cliente."
            />
            <FeatureCard
              icon={Scissors}
              title="Catálogo de Serviços"
              description="Gerencie todos os serviços com preços, duração e análise dos mais vendidos."
            />
            <FeatureCard
              icon={Settings}
              title="Configurações Avançadas"
              description="Defina horários de funcionamento, intervalos e notificações personalizadas."
            />
            <FeatureCard
              icon={BarChart3}
              title="Relatórios e Análises"
              description="Dashboards em tempo real, identificação de serviços lucrativos e previsão de recebimentos."
            />
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black">
              Conheça o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sistema por Dentro
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interface moderna e intuitiva que funciona em qualquer dispositivo
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative animate-fade-in">
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-primary/20 hover:border-primary/40 transition-all duration-500">
                <img
                  src={screenshots[currentScreenshot].img}
                  alt={screenshots[currentScreenshot].title}
                  className="w-full h-auto transition-all duration-500 hover:scale-105"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevScreenshot}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-primary/30 animate-fade-in"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextScreenshot}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-primary/30 animate-fade-in"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Info Box */}
              <div className="mt-8 text-center space-y-2 animate-fade-in" key={currentScreenshot}>
                <h3 className="text-2xl font-bold text-foreground transition-all duration-300">
                  {screenshots[currentScreenshot].title}
                </h3>
                <p className="text-lg text-muted-foreground transition-all duration-300">
                  {screenshots[currentScreenshot].desc}
                </p>
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentScreenshot
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Ir para tela ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black">
              Por que escolher o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Salão de Bolso?
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, title: "Aumente sua Receita", desc: "Programa de fidelidade aumenta retorno de clientes em até 40%" },
              { icon: Clock, title: "Economize Tempo", desc: "Automações reduzem tempo administrativo em até 70%" },
              { icon: CheckCircle, title: "Organização Total", desc: "Nunca mais esqueça compromissos ou conflitos de horário" },
              { icon: Smartphone, title: "Acesse de Qualquer Lugar", desc: "Funciona em computador, tablet e celular. Instale como app!" },
              { icon: DollarSign, title: "Sem Mensalidades", desc: "Pague uma vez e use para sempre com atualizações gratuitas" },
              { icon: Award, title: "Profissionalize seu Negócio", desc: "Interface moderna impressiona clientes e facilita gestão" },
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group text-center space-y-3 p-6 rounded-xl bg-white/50 backdrop-blur hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black">
              Oferta{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Especial
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Investimento único com retorno garantido para seu negócio
            </p>
          </div>
          <div className="max-w-md mx-auto animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <PricingCard />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-black animate-fade-in">Fale Conosco</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Tem dúvidas? Entre em contato e vamos te ajudar a transformar seu salão!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-lg h-14 px-8 hover:scale-105 transition-transform duration-300"
              onClick={() => window.open(`https://wa.me/5533998542100?text=Olá! Gostaria de saber mais sobre o Salão de Bolso`, '_blank')}
            >
              <Phone className="w-5 h-5" />
              (33) 99854-2100
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg h-14 px-8 bg-white hover:bg-white/90 text-primary border-0 hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = 'mailto:resellr7@gmail.com'}
            >
              <Mail className="w-5 h-5" />
              resellr7@gmail.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img src={logoImage} alt="Salão de Bolso" className="w-8 h-8 rounded" />
            <span className="text-xl font-bold">Salão de Bolso</span>
          </div>
          <p className="text-sm opacity-70">
            © 2025 Salão de Bolso. Sistema completo de gestão para salões de beleza.
          </p>
          <p className="text-xs opacity-50">
            Transforme seu negócio com tecnologia profissional
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
