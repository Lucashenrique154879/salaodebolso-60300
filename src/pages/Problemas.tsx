import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const problems = [
  "Perda de agendamentos por esquecimento ou conflitos",
  "Horas gastas organizando manualmente a agenda",
  "Clientes esquecidos, sem programa de fidelidade",
  "Dificuldade em controlar receitas e despesas",
  "Trabalho fora do horário para responder WhatsApp",
  "Perda de oportunidades de venda",
];

const solutions = [
  "Agenda organizada automaticamente, zero conflitos",
  "Economize 10+ horas por semana com automação",
  "Programa de fidelidade aumenta retorno em até 40%",
  "Controle financeiro completo e visual em tempo real",
  "Clientes agendam sozinhos 24/7 pelo link",
  "Aumente vendas com análise de serviços mais lucrativos",
];

export default function Problemas() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Problemas que resolvemos`}
        description="Veja como um sistema de gestão para salão de beleza resolve problemas comuns: agenda, faltas, controle financeiro e rotina de atendimento."
        path="/problemas"
      />
      <Section>
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14 space-y-4 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-raleway font-black text-foreground">
                Problemas que você{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  já enfrentou?
                </span>
              </h1>
              <p className="text-lg text-muted-foreground font-lora">
                Veja como o Salão de Bolso resolve cada um deles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Problems column */}
              <div className="space-y-3">
                <h2 className="text-lg font-raleway font-bold text-destructive mb-5 flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-destructive/10">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  Sem o Sistema
                </h2>
                {problems.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-destructive/4 rounded-xl border border-destructive/15 animate-fade-in"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-lora text-foreground/80">{p}</span>
                  </div>
                ))}
              </div>

              {/* Solutions column */}
              <div className="space-y-3">
                <h2 className="text-lg font-raleway font-bold text-primary mb-5 flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  Com o Sistema
                </h2>
                {solutions.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-primary/4 rounded-xl border border-primary/15 hover:border-primary/35 hover:shadow-sm transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-lora text-foreground font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-10 h-12 font-raleway font-bold gap-2"
                onClick={() => window.open(site.appUrl, "_blank")}
              >
                Começar agora
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}
