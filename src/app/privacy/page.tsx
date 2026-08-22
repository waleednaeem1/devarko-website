import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import privacy from "@/content/privacy.json";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: privacy.metaTitle,
  description: privacy.metaDescription,
  alternates: { canonical: `${SITE_URL}/privacy/` },
  openGraph: {
    title: privacy.metaTitle,
    description: privacy.metaDescription,
    url: `${SITE_URL}/privacy/`,
    type: "website",
    siteName: "Devarko",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/assets/img/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: privacy.metaTitle, description: privacy.metaDescription },
};

export default function PrivacyPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy/` },
          ],
        }}
      />
      <section className="page-hero" style={{ paddingBottom: "clamp(1.5rem,3vw,2.5rem)" }}>
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Legal
          </span>
          <h1 data-reveal data-reveal-delay="1">
            {privacy.h1}
          </h1>
          <p data-reveal data-reveal-delay="2">
            {privacy.lede}
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "clamp(1.5rem,3vw,2.5rem)" }}>
        <div className="container">
          <article className="post-body">
            {privacy.sections.map((s) => (
              <section key={s.h2}>
                <h2>{s.h2}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
