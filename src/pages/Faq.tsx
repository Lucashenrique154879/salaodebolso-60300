import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { FAQItem } from "@/components/FAQItem";
import { Accordion } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const faqItems = [
  {
    value: "item-1",
    question: "Como funciona a mensalidade e o acesso vitalício?",
    answer:
      "Você pode assinar por R$ 7,90/mês ou escolher o acesso vitalício por R$ 197. Em ambos os casos, você tem acesso completo ao sistema. Se não ficar satisfeito, você tem 7 dias de garantia.",
  },
  {
    value: "item-2",
    question: "O sistema funciona no celular?",
    answer:
      "Sim! O sistema é 100% responsivo e funciona perfeitamente em computadores, tablets e celulares. Você pode até instalar como um aplicativo no seu celular para acesso ainda mais rápido e com função offline.",
  },
  {
    value: "item-3",
    question: "Preciso de conhecimentos técnicos para usar?",
    answer:
      "Não! O sistema foi desenvolvido para ser extremamente intuitivo. Qualquer pessoa consegue usar sem dificuldades. Além disso, oferecemos suporte técnico completo para te ajudar em qualquer dúvida.",
  },
  {
    value: "item-4",
    question: "Posso usar em mais de um dispositivo?",
    answer:
      "Sim! Você pode acessar o sistema de quantos dispositivos quiser — computador, tablet, celular. Todos os dados ficam sincronizados automaticamente em tempo real.",
  },
  {
    value: "item-5",
    question: "Meus dados ficam seguros?",
    answer:
      "Absolutamente! Utilizamos as mesmas tecnologias de segurança dos maiores bancos do mundo. Seus dados ficam criptografados e protegidos, com backups automáticos diários.",
  },
  {
    value: "item-6",
    question: "E se eu não gostar do sistema?",
    answer:
      "Sem problemas! Você tem 7 dias de garantia total. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.",
  },
  {
    value: "item-7",
    question: "Quantos clientes posso cadastrar?",
    answer:
      "Quantos você quiser! Não há limite de clientes, agendamentos, serviços ou qualquer outra funcionalidade. Você tem acesso completo e ilimitado a todas as features.",
  },
  {
    value: "item-8",
    question: "Como funciona o suporte técnico?",
    answer:
      "Oferecemos suporte técnico prioritário via WhatsApp e e-mail. Nossa equipe está sempre disponível para te ajudar com qualquer dúvida ou dificuldade que possa ter.",
  },
];

export default function Faq() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | FAQ`}
        description="Perguntas frequentes sobre o Salão de Bolso: planos, uso no celular, segurança de dados, suporte e garantia."
        path="/faq"
      />
      <Section>
        <Container>
          {/* Header */}
          <div className="text-center mb-14 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 rounded-full border border-primary/20">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-primary font-raleway font-semibold text-sm">FAQ</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-raleway font-black text-foreground">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Frequentes
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lora">
              Tudo que você precisa saber antes de transformar seu salão.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-1">
              {faqItems.map((item) => (
                <FAQItem key={item.value} {...item} />
              ))}
            </Accordion>

            {/* Contact CTA */}
            <div className="mt-10 p-8 bg-muted/50 rounded-2xl border border-border text-center space-y-4">
              <p className="font-raleway font-semibold text-foreground">
                Ainda tem dúvidas?
              </p>
              <p className="text-sm text-muted-foreground font-lora">
                Nossa equipe está pronta para te ajudar!
              </p>
              <Button
                variant="hero"
                onClick={() =>
                  window.open(
                    site.whatsappUrl,
                    "_blank",
                  )
                }
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}
