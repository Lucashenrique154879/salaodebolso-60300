import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <SiteLayout>
      <Seo
        title={`${site.name} | Blog`}
        description="Conteúdos práticos sobre gestão de salão de beleza: agenda online, controle financeiro, atendimento e crescimento."
        path="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${site.name} Blog`,
          url: typeof window !== "undefined" ? window.location.origin + "/blog" : "https://example.com/blog",
        }}
      />

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl lg:text-6xl font-raleway font-black tracking-tight">Blog</h1>
            <p className="text-lg text-muted-foreground font-lora">
              Guias rápidos para melhorar rotina, reduzir faltas e tomar decisões com dados — sem complicar.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Card key={p.slug} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-muted-foreground font-lora">{new Date(p.dateISO).toLocaleDateString("pt-BR")} · {p.readingTime}</div>
                <h2 className="mt-3 text-xl font-raleway font-bold text-foreground leading-snug">
                  <Link to={`/blog/${p.slug}`} className="hover:underline underline-offset-4">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-muted-foreground font-lora leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.keywords.slice(0, 3).map((k) => (
                    <span key={k} className="text-xs font-raleway font-semibold px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                      {k}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}

