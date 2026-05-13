import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <SiteLayout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-raleway font-black text-foreground">
                Ainda tem{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  dúvidas?
                </span>
              </h1>
              <p className="text-lg text-muted-foreground font-lora">
                Nossa equipe está pronta para te ajudar! Escolha o canal de preferência.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "(33) 99854-2100",
                  href: "https://wa.me/5533998542100?text=Olá! Gostaria de saber mais sobre o Salão de Bolso",
                  external: true,
                  accent: "bg-emerald-50 text-emerald-600",
                },
                {
                  icon: Mail,
                  label: "E-mail",
                  value: "resellr7@gmail.com",
                  href: "mailto:resellr7@gmail.com",
                  external: false,
                  accent: "bg-primary/8 text-primary",
                },
                {
                  icon: Phone,
                  label: "Telefone",
                  value: "(33) 99854-2100",
                  href: "tel:+5533998542100",
                  external: false,
                  accent: "bg-amber-50 text-amber-600",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="group flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div
                    className={`p-3.5 rounded-xl ${c.accent} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-raleway font-bold text-sm text-foreground">{c.label}</div>
                    <div className="text-xs text-muted-foreground font-lora mt-0.5">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <Button
              variant="hero"
              size="lg"
              className="text-base px-10 h-12 font-raleway font-bold"
              onClick={() =>
                window.open(
                  "https://wa.me/5533998542100?text=Olá! Gostaria de saber mais sobre o Salão de Bolso",
                  "_blank",
                )
              }
            >
              💬 Falar no WhatsApp agora
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
