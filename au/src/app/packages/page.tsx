import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { rich } from "@/components/AuPage";
import { Testimonials } from "@/components/sections";
import { ArrowIcon, Tick } from "@/components/icons";
import pkg from "@/content/au-packages.json";
import { AU_PHONE, AU_PHONE_TEL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: pkg.metaTitle,
  description: pkg.metaDescription,
  keywords: pkg.keywords,
  alternates: { canonical: `${SITE_URL}/packages/` },
  openGraph: {
    title: pkg.metaTitle,
    description: pkg.metaDescription,
    url: `${SITE_URL}/packages/`,
    type: "website",
    siteName: "Devarko",
    locale: "en_AU",
    images: [{ url: `${SITE_URL}/assets/img/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: pkg.metaTitle,
    description: pkg.metaDescription,
    images: [`${SITE_URL}/assets/img/og-image.png`],
  },
};

const OFFER_PRICES: Record<string, number> = {
  Local: 990,
  Growth: 1690,
  Authority: 2900,
};

interface Tier {
  name: string;
  price: string;
  tagline: string;
  includes: string[];
  note?: string;
}

function TierGrid({ tiers, featured, ctaLabel }: { tiers: Tier[]; featured: string; ctaLabel: (t: Tier) => string }) {
  return (
    <div className="price-grid">
      {tiers.map((t, i) => (
        <div
          className={`price-card${t.name === featured ? " price-card--feat" : ""}`}
          data-reveal
          {...(i ? { "data-reveal-delay": String(i) } : {})}
          key={t.name}
        >
          {t.name === featured && <span className="price-card__flag">Most popular</span>}
          <span className="price-card__name">{t.name}</span>
          <span className="price-card__price">
            {t.price.replace(/\/month$/, "")}
            {t.price.endsWith("/month") && <em>per month, cancel any month</em>}
          </span>
          <p className="price-card__tag">{t.tagline}</p>
          <ul className="price-card__list">
            {t.includes.map((line) => (
              <li key={line}>
                <Tick />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          {t.note && <p className="price-card__note">{t.note}</p>}
          <Link className={`btn ${t.name === featured ? "btn--primary" : "btn--ghost"}`} href="/contact/">
            {ctaLabel(t)} <ArrowIcon />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function PackagesPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/packages/#service`,
          name: "Website design and SEO packages",
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: { "@type": "Country", name: "Australia" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Devarko packages",
            itemListElement: [...pkg.webTiers, ...pkg.seoTiers].map((t) => {
              const priced = OFFER_PRICES[t.name] !== undefined;
              return {
                "@type": "Offer",
                name: `${t.name} ${priced ? "SEO plan" : "website build"}`,
                description: t.tagline,
                ...(priced ? { price: OFFER_PRICES[t.name], priceCurrency: "AUD" } : {}),
              };
            }),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pkg.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: pkg.h1, item: `${SITE_URL}/packages/` },
          ],
        }}
      />

      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Packages &amp; pricing
          </span>
          <h1 data-reveal data-reveal-delay="1">
            {pkg.h1}
          </h1>
          <p data-reveal data-reveal-delay="2">
            {pkg.lede}
          </p>
        </div>
      </section>

      <section className="section section--tight" id="websites">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">{pkg.webIntro.eyebrow}</span>
            <h2 className="section__title">{pkg.webIntro.title}</h2>
            <p className="section__sub">{pkg.webIntro.sub}</p>
          </div>
          <TierGrid tiers={pkg.webTiers} featured="Business" ctaLabel={(t) => `Start with ${t.name}`} />
          <p className="price-fine" data-reveal>
            Book a short scoping call and we will send a fixed written quote for your project.
          </p>
        </div>
      </section>

      <section className="section section--tight section--alt" id="seo">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">{pkg.seoIntro.eyebrow}</span>
            <h2 className="section__title">{pkg.seoIntro.title}</h2>
            <p className="section__sub">{pkg.seoIntro.sub}</p>
          </div>
          <TierGrid tiers={pkg.seoTiers} featured="Growth" ctaLabel={(t) => `Ask about ${t.name}`} />
          <p className="price-fine" data-reveal>
            SEO plans run month to month. No contracts, no exit fees, cancel any month.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">Why us</span>
            <h2 className="section__title">{pkg.different.title}</h2>
            <p className="section__sub">{pkg.different.sub}</p>
          </div>
          <ul className="feature-list" data-reveal data-stagger style={{ marginTop: "1.4rem", maxWidth: "780px" }}>
            {pkg.different.bullets.map((b) => (
              <li key={b.title}>
                <Tick />
                <span className="feature-list__copy">
                  <b>{b.title}</b>
                  <em>{rich(b.desc)}</em>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="section__title">Before you pick a package.</h2>
          </div>
          <div className="faq" data-reveal>
            {pkg.faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <div className="faq__a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">{pkg.cta.title}</h2>
            <p className="cta__sub">{rich(pkg.cta.sub)}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Book a call <ArrowIcon />
              </Link>
              <a className="btn btn--ghost btn--lg" href={`tel:${AU_PHONE_TEL}`}>
                Call {AU_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
