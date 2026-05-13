import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/site";

export default function StyleGuide() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Style guide`}
        description="Guia interno de componentes, tokens e práticas de SEO aplicadas."
        path="/style-guide"
        noindex
      />

      <Section>
        <Container>
          <h1 className="text-4xl lg:text-6xl font-raleway font-black tracking-tight">Style guide</h1>
          <p className="mt-4 text-lg text-muted-foreground font-lora max-w-3xl">
            Página interna para padronizar componentes, espaçamentos, tipografia e práticas de SEO. Recomenda-se manter como noindex.
          </p>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="font-raleway font-bold text-xl text-foreground">Componentes</div>
              <div className="mt-4 space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero">Hero</Button>
                  <Button variant="default">Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="soft">Soft</Button>
                </div>
                <div className="text-sm text-muted-foreground font-lora">
                  Padrões: foco visível, alvos de toque confortáveis e textos objetivos.
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="font-raleway font-bold text-xl text-foreground">Tokens</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { name: "background", cls: "bg-background border" },
                  { name: "card", cls: "bg-card border" },
                  { name: "primary", cls: "bg-primary" },
                  { name: "secondary", cls: "bg-secondary" },
                  { name: "muted", cls: "bg-muted border" },
                  { name: "accent", cls: "bg-accent border" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-3 rounded-xl border border-border bg-background p-3">
                    <div className={`h-10 w-10 rounded-lg ${t.cls}`} aria-hidden="true" />
                    <div className="text-sm font-raleway font-semibold text-foreground">{t.name}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-muted-foreground font-lora">
                Cores em HSL via CSS variables para consistência e tema escuro.
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <div>
              <div className="font-raleway font-bold text-2xl text-foreground">SEO aplicado</div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground font-lora">
                <li>Meta tags por rota (title, description, OpenGraph, Twitter Card, canonical)</li>
                <li>JSON-LD estruturado (Organization, WebSite, Product/SoftwareApplication, Blog/BlogPosting)</li>
                <li>HTML semântico (header/main/footer/section/article/figure)</li>
                <li>Imagens com loading lazy e atributos descritivos de alt</li>
                <li>Conteúdo com intenção de busca (gestão de salão, agenda online, controle financeiro)</li>
              </ul>
            </div>

            <div>
              <div className="font-raleway font-bold text-2xl text-foreground">Acessibilidade (WCAG 2.2)</div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground font-lora">
                <li>Foco visível em componentes interativos</li>
                <li>Hierarquia de headings (um h1 por página, h2/h3 consistentes)</li>
                <li>Links com rótulos claros e navegação por teclado</li>
                <li>Contraste de texto priorizando legibilidade</li>
                <li>Skip link para pular direto ao conteúdo</li>
              </ul>
            </div>

            <div>
              <div className="font-raleway font-bold text-2xl text-foreground">Animações</div>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground font-lora">
                <li>Scroll reveal global: qualquer section/card com data-reveal entra suavemente quando aparece no scroll</li>
                <li>Parallax leve: use data-parallax e opcionalmente data-parallax-speed (ex.: 0.22)</li>
                <li>Micro-interações: botões têm hover/active com leve lift, glow e ícone com movimento</li>
                <li>Respeita prefers-reduced-motion (desativa efeitos JS e reduz animações)</li>
                <li>GSAP é carregado sob demanda apenas em rotas com data-hero</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}

