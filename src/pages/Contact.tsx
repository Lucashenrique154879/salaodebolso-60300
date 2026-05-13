import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/site";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Contato`}
        description="Fale com o Salão de Bolso. Tire dúvidas sobre o sistema de gestão para salão de beleza, planos e configuração inicial."
        path="/contact"
      />

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl lg:text-6xl font-raleway font-black tracking-tight">Contato</h1>
            <p className="text-lg text-muted-foreground font-lora">
              Quer entender qual plano faz sentido, como configurar o sistema ou tirar dúvidas sobre gestão de salão?
              Fale com a gente.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-raleway font-bold text-foreground">WhatsApp</div>
                  <div className="text-sm text-muted-foreground font-lora mt-1">
                    Respostas rápidas para dúvidas e orientação.
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Button variant="hero" size="lg" className="w-full" onClick={() => window.open(site.whatsappUrl, "_blank")}>
                  Conversar no WhatsApp
                </Button>
              </div>
            </Card>

            <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-raleway font-bold text-foreground">E-mail</div>
                  <div className="text-sm text-muted-foreground font-lora mt-1">
                    Para assuntos mais detalhados e parcerias.
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <a className="text-sm font-lora text-foreground/80 hover:text-foreground underline underline-offset-4" href={`mailto:${site.supportEmail}`}>
                  {site.supportEmail}
                </a>
              </div>
            </Card>

            <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="font-raleway font-bold text-foreground">Telefone</div>
                  <div className="text-sm text-muted-foreground font-lora mt-1">
                    Caso prefira falar diretamente.
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <a className="text-sm font-lora text-foreground/80 hover:text-foreground underline underline-offset-4" href={`tel:${site.supportPhoneE164}`}>
                  {site.supportPhoneDisplay}
                </a>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}

