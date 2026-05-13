import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Shield, CheckCircle, Clock, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Garantia() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Garantia de 7 dias`}
        description="Garantia de 7 dias para testar o Salão de Bolso com tranquilidade. Se não fizer sentido, você pode solicitar reembolso."
        path="/garantia"
      />
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-12 animate-fade-in">
            {/* Shield icon */}
            <div className="inline-flex p-7 rounded-full bg-primary/10 border border-primary/20">
              <Shield className="w-16 h-16 text-primary" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-raleway font-black text-foreground">
                Garantia Total de{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  7 Dias
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-lora max-w-xl mx-auto">
                Experimente o sistema por{" "}
                <strong className="text-foreground font-semibold">7 dias sem riscos</strong>. Se não ficar
                100% satisfeito, devolvemos todo seu investimento. Sem perguntas, sem burocracia.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Clock, value: "7", label: "Dias de Garantia", sub: "Período completo de teste" },
                { icon: RefreshCcw, value: "100%", label: "Dinheiro de Volta", sub: "Reembolso total garantido" },
                { icon: CheckCircle, value: "0", label: "Risco para Você", sub: "Sem perguntas, sem burocracia" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 space-y-3"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-5xl font-raleway font-black text-foreground">{stat.value}</div>
                  <div>
                    <div className="font-raleway font-bold text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground font-lora mt-1">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8 space-y-6 text-left">
              <h2 className="font-raleway font-bold text-xl text-foreground text-center">Como funciona?</h2>
              <div className="space-y-4">
                {[
                  "Assine e teste o sistema completo por 7 dias",
                  "Se não ficar satisfeito por qualquer motivo, entre em contato",
                  "Devolveremos 100% do valor em até 5 dias úteis",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-raleway font-bold">{i + 1}</span>
                    </div>
                    <span className="font-lora text-foreground/80">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              className="text-base px-10 h-12 font-raleway font-bold"
              onClick={() => window.open(site.appUrl, "_blank")}
            >
              Começar com garantia de 7 dias
            </Button>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}
