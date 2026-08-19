import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { rich } from "@/components/AuPage";
import { ArrowIcon } from "@/components/icons";
import type { LocationPageContent } from "@/lib/locations";
import { SITE_URL } from "@/lib/site";

function cityFromSlug(slug: string): string {
  const last = slug.split("-").pop() || "";
  return last.charAt(0).toUpperCase() + last.slice(1);
}

export default function LocationPage({ page }: { page: LocationPageContent }) {
  const url = `${SITE_URL}/${page.slug}/`;
  const isSeo = page.slug.startsWith("seo");
  const serviceHref = isSeo ? "/seo-services/" : "/web-development/";
  const serviceLabel = isSeo ? "SEO services" : "web development";
  const city = cityFromSlug(page.slug);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.h1,
          serviceType: isSeo ? "Search engine optimisation" : "Web development",
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: { "@type": "City", name: city },
          url,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((f) => ({
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
            { "@type": "ListItem", position: 2, name: page.h1, item: url },
          ],
        }}
      />

      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Devarko Australia · {city}
          </span>
          <h1 data-reveal data-reveal-delay="1">
            {page.h1}
          </h1>
          <p data-reveal data-reveal-delay="2">
            {page.lede}
          </p>
          <div className="hero__actions" data-reveal data-reveal-delay="3" style={{ justifyContent: "center", marginTop: "1.6rem" }}>
            <Link className="btn btn--primary btn--lg" href="/contact/">
              Start a conversation <ArrowIcon />
            </Link>
            <Link className="btn btn--ghost btn--lg" href={serviceHref}>
              Our {serviceLabel}
            </Link>
          </div>
        </div>
      </section>

      {page.sections.map((s, si) => (
        <section className={`section section--tight${si % 2 ? " section--alt" : ""}`} key={s.h2}>
          <div className="container">
            <div className="section__head" data-reveal>
              <h2 className="section__title">{s.h2}</h2>
            </div>
            <div className="post-body" style={{ maxWidth: "780px", marginInline: "0" }}>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{rich(p)}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="section__title">{city} businesses often ask.</h2>
          </div>
          <div className="faq" data-reveal>
            {page.faqs.map((f, i) => (
              <details name="faq" key={f.q} open={i === 0}>
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
            <h2 className="cta__title">{page.ctaTitle}</h2>
            <p className="cta__sub">{page.ctaSub}</p>
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
