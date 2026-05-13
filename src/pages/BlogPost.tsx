import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { getPostBySlug } from "@/lib/blog";
import { site } from "@/lib/site";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <SiteLayout>
        <Seo title={`${site.name} | Post não encontrado`} description="Post não encontrado." noindex />
        <Section>
          <Container>
            <h1 className="text-3xl font-raleway font-black">Post não encontrado</h1>
            <p className="mt-3 text-muted-foreground font-lora">O conteúdo que você procura não está disponível.</p>
            <div className="mt-6">
              <Link to="/blog">
                <Button variant="hero" size="lg">Voltar para o blog</Button>
              </Link>
            </div>
          </Container>
        </Section>
      </SiteLayout>
    );
  }

  const pagePath = `/blog/${post.slug}`;
  const canonical = typeof window !== "undefined" ? window.location.origin + pagePath : "https://example.com" + pagePath;

  return (
    <SiteLayout>
      <Seo
        title={`${post.title} | ${site.name}`}
        description={post.description}
        path={pagePath}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.dateISO,
          dateModified: post.dateISO,
          mainEntityOfPage: canonical,
          author: { "@type": "Organization", name: site.name },
        }}
      />

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="text-xs text-muted-foreground font-lora">
              <Link to="/blog" className="hover:underline underline-offset-4">Blog</Link>
              <span> · </span>
              <span>{new Date(post.dateISO).toLocaleDateString("pt-BR")}</span>
              <span> · </span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 text-4xl lg:text-6xl font-raleway font-black tracking-tight">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground font-lora">{post.description}</p>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <article className="max-w-3xl mx-auto prose prose-zinc prose-headings:font-raleway prose-p:font-lora prose-a:text-primary prose-a:underline-offset-4">
            {post.content.map((block) => (
              <section key={block.heading}>
                <h2>{block.heading}</h2>
                {block.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </article>

          <div className="max-w-3xl mx-auto mt-10 flex flex-col sm:flex-row gap-3">
            <Button variant="hero" size="lg" className="px-8" onClick={() => window.open(site.appUrl, "_blank")}>
              Testar o sistema
            </Button>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="px-8">Ver planos</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}

