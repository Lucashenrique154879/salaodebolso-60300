import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Container from "@/components/layout/Container";
import SkipLink from "@/components/layout/SkipLink";
import logoImage from "@/assets/logo.png";
import { Menu, Scissors, Mail, Phone } from "lucide-react";

type Props = {
  children: ReactNode;
};

const navLinks = [
  { to: "/product", label: "Produto" },
  { to: "/pricing", label: "Planos" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "Sobre" },
  { to: "/contact", label: "Contato" },
];

const footerLinks = [
  { to: "/product", label: "Produto" },
  { to: "/pricing", label: "Planos" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/faq", label: "Perguntas Frequentes" },
  { to: "/garantia", label: "Garantia" },
  { to: "/contato", label: "Contato" },
];

export default function SiteLayout({ children }: Props) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <SkipLink />
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl border-b border-primary/10 z-50 shadow-sm">
        <nav aria-label="Navegação principal">
          <Container className="tech-scan py-3 flex items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={logoImage}
                  alt="Salão de Bolso"
                  className="w-full h-full object-cover"
                  width={40}
                  height={40}
                  loading="eager"
                  decoding="async"
                />
              </div>
              <span className="text-xl font-raleway font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
                Salão de Bolso
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  aria-current={location.pathname === l.to ? "page" : undefined}
                  className={`px-3 py-1.5 rounded-md text-sm font-raleway font-medium transition-all duration-200 ${
                    location.pathname === l.to
                      ? "text-primary bg-primary/8"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/afiliados"
                className="px-3 py-1.5 rounded-md text-sm font-raleway font-semibold text-secondary hover:text-secondary/80 transition-colors"
              >
                Afiliados
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white">
                  <div className="flex items-center gap-3 mb-8 pt-2">
                    <img
                      src={logoImage}
                      alt="Salão de Bolso"
                      className="w-9 h-9 rounded-lg shadow"
                      width={36}
                      height={36}
                      loading="eager"
                      decoding="async"
                    />
                    <span className="font-raleway font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Salão de Bolso
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <SheetClose asChild>
                      <Link
                        to="/"
                        aria-current={location.pathname === "/" ? "page" : undefined}
                        className={`px-3 py-2.5 rounded-lg font-raleway font-medium transition-colors ${
                          location.pathname === "/" ? "text-primary bg-primary/8" : "text-foreground/80 hover:bg-muted"
                        }`}
                      >
                        Início
                      </Link>
                    </SheetClose>
                    {navLinks.map((l) => (
                      <SheetClose asChild key={l.to}>
                        <Link
                          to={l.to}
                          aria-current={location.pathname === l.to ? "page" : undefined}
                          className={`px-3 py-2.5 rounded-lg font-raleway font-medium transition-colors ${
                            location.pathname === l.to ? "text-primary bg-primary/8" : "text-foreground/80 hover:bg-muted"
                          }`}
                        >
                          {l.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Link to="/afiliados" className="px-3 py-2.5 rounded-lg font-raleway font-semibold text-secondary hover:bg-muted transition-colors">
                        Afiliados
                      </Link>
                    </SheetClose>
                    <div className="pt-4">
                      <SheetClose asChild>
                        <Link to="/pricing">
                          <Button variant="hero" size="lg" className="w-full">
                            Ver Planos
                          </Button>
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Link to="/pricing" className="hidden sm:block">
                <Button variant="hero" size="default" className="text-sm px-5">
                  Ver Planos
                </Button>
              </Link>
            </div>
          </Container>
        </nav>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <main id="main-content" tabIndex={-1} className="pt-[72px]">
        {children}
      </main>

      {/* ── Footer CTA Strip ─────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-primary to-secondary py-14 px-4">
        <Container className="text-center space-y-6">
          <h2 className="text-2xl lg:text-4xl font-raleway font-bold text-white">
            Pronto para transformar a gestão do seu salão?
          </h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto font-lora">
            Teste grátis por 7 dias. Sem cartão de crédito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary font-raleway font-bold hover:bg-white/90 shadow-lg hover:scale-[1.03] transition-all h-12 px-8"
              onClick={() => window.open("https://salaodebolsoapp.shop", "_blank")}
            >
              Começar teste grátis
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/70 font-raleway h-12 px-8"
              onClick={() =>
                window.open(
                  "https://wa.me/5533998542100?text=Olá! Gostaria de saber mais sobre o Salão de Bolso",
                  "_blank",
                )
              }
            >
              Falar com um especialista
            </Button>
          </div>
        </Container>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-foreground text-background/80 py-16 px-4">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg overflow-hidden opacity-90">
                  <img
                    src={logoImage}
                    alt="Salão de Bolso"
                    className="w-full h-full object-cover"
                    width={36}
                    height={36}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="text-lg font-raleway font-bold text-background">
                  Salão de Bolso
                </span>
              </div>
              <p className="text-sm leading-relaxed text-background/60 font-lora">
                Sistema de gestão para salão de beleza e barbearia com agenda online, controle financeiro e atendimento mais organizado.
              </p>
              <div className="flex items-center gap-1.5 text-background/40 text-xs">
                <Scissors className="w-3.5 h-3.5" />
                <span>Gestão inteligente para beleza</span>
              </div>
            </div>

            {/* Pages */}
            <div className="space-y-3">
              <div className="font-raleway font-semibold text-background text-sm uppercase tracking-wider">
                Páginas
              </div>
              <div className="flex flex-col gap-2">
                {footerLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-sm text-background/60 hover:text-background transition-colors duration-200 font-lora"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-3">
              <div className="font-raleway font-semibold text-background text-sm uppercase tracking-wider">
                Recursos
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/problemas" className="text-sm text-background/60 hover:text-background transition-colors font-lora">
                  Problemas que resolvemos
                </Link>
                <Link to="/beneficios" className="text-sm text-background/60 hover:text-background transition-colors font-lora">
                  Benefícios
                </Link>
                <Link to="/afiliados" className="text-sm text-background/60 hover:text-background transition-colors font-lora">
                  Programa de afiliados
                </Link>
                <a
                  href="https://wa.me/5533998542100?text=Olá! Gostaria de saber mais sobre o Salão de Bolso"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-background/60 hover:text-background transition-colors font-lora"
                >
                  WhatsApp
                </a>
                <a
                  href="https://salaodebolsoapp.shop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-secondary hover:text-secondary/80 transition-colors font-lora font-medium"
                >
                  Acessar o sistema →
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <div className="font-raleway font-semibold text-background text-sm uppercase tracking-wider">
                Contato
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:resellr7@gmail.com"
                  className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  resellr7@gmail.com
                </a>
                <a
                  href="tel:+5533998542100"
                  className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  (33) 99854-2100
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-14 pt-8 border-t border-background/10 text-xs text-background/40">
            <span>© {new Date().getFullYear()} Salão de Bolso. Todos os direitos reservados.</span>
            <span>Feito com cuidado no Brasil</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
