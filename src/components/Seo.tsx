import { Helmet } from "react-helmet-async";

type JsonLd = Record<string, unknown>;

type Props = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  imagePath?: string;
  noindex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
};

function getOrigin() {
  if (typeof window === "undefined") return "https://example.com";
  return window.location.origin;
}

function toAbsoluteUrl(pathname: string) {
  const origin = getOrigin();
  try {
    return new URL(pathname, origin).toString();
  } catch {
    return origin;
  }
}

export default function Seo({ title, description, keywords, path, imagePath = "/favicon.png", noindex, jsonLd }: Props) {
  const canonical = toAbsoluteUrl(path ?? (typeof window !== "undefined" ? window.location.pathname : "/"));
  const imageUrl = toAbsoluteUrl(imagePath);
  const jsonLdList = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
      {jsonLdList.map((data, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

