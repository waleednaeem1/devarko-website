import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Testimonials } from "@/components/sections";
import { ArrowIcon } from "@/components/icons";
import about from "@/content/au-about.json";
import home from "@/content/au-home.json";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: about.metaTitle,
  description: about.metaDescription,
  keywords: about.keywords,
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    title: about.metaTitle,
    description: about.metaDescription,
    url: `${SITE_URL}/about/`,
    type: "website",
    siteName: "Devarko",
    locale: "en_AU",
    images: [{ url: `${SITE_URL}/assets/og/about.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: about.metaTitle,
    description: about.metaDescription,
    images: [`${SITE_URL}/assets/og/about.jpg`],
  },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: about.h1,
          url: `${SITE_URL}/about/`,
          about: { "@id": `${SITE_URL}/#business` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about/` },
          ],
        }}
      />

      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            About Devarko
          </span>
          <h1 data-reveal data-reveal-delay="1">
            {about.h1}
          </h1>
          <p data-reveal data-reveal-delay="2">
            {about.lede}
          </p>
        </div>
      </section>

      {about.sections.map((s, si) => (
        <section className={`section section--tight${si % 2 ? " section--alt" : ""}`} key={s.h2}>
          <div className="container">
            <div className="section__head" data-reveal>
              <h2 className="section__title">{s.h2}</h2>
            </div>
            <div className="post-body" style={{ maxWidth: "780px", marginInline: "0" }}>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="stats section--tight">
        <div className="container">
          <div className="grid stats__grid">
            {home.stats.map((s, i) => (
              <div className="stat" data-reveal {...(i ? { "data-reveal-delay": String(i) } : {})} key={s.label}>
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials alt />

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">{about.ctaTitle}</h2>
            <p className="cta__sub">{about.ctaSub}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a conversation <ArrowIcon />
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/packages/">
                See packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
