import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { ArrowIcon, Tick } from "@/components/icons";
import type { AuPageContent } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

export function rich(text: string): React.ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const external = m[2].startsWith("http");
    return external ? (
      <a key={i} href={m[2]} target="_blank" rel="noopener">
        {m[1]}
      </a>
    ) : (
      <Link key={i} href={m[2]}>
        {m[1]}
      </Link>
    );
  });
}

export default function AuPage({
  page,
  path,
  children,
  afterHero,
}: {
  page: AuPageContent;
  path: string;
  children?: React.ReactNode;
  afterHero?: React.ReactNode;
}) {
  const url = `${SITE_URL}${path}`;
  return (
    <main>
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
            ...(path !== "/"
              ? [{ "@type": "ListItem", position: 2, name: page.h1, item: url }]
              : []),
          ],
        }}
      />

      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Devarko Australia
          </span>
          <h1 data-reveal data-reveal-delay="1">
            {page.h1}
          </h1>
          <p data-reveal data-reveal-delay="2">
            {page.lede}
          </p>
        </div>
      </section>

      {afterHero}

      {page.sections.map((s, si) => {
        const hasBullets = !!(s.bullets && s.bullets.length > 0);
        return (
          <section
            className={`section section--tight${si % 2 ? " section--alt" : ""}`}
            key={s.h2}
          >
            <div className="container">
              {hasBullets ? (
                <div className={`au-split${si % 2 ? " au-split--rev" : ""}`}>
                  <div className="au-split__text" data-reveal>
                    <h2 className="section__title">{s.h2}</h2>
                    <div className="post-body">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{rich(p)}</p>
                      ))}
                    </div>
                  </div>
                  <ul className="feature-list au-split__list" data-reveal data-reveal-delay="1" data-stagger>
                    {s.bullets!.map((b) => (
                      <li key={b.title}>
                        <Tick />
                        <span className="feature-list__copy">
                          <b>{b.title}</b>
                          <em>{b.desc}</em>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <div className="section__head" data-reveal>
                    <h2 className="section__title">{s.h2}</h2>
                  </div>
                  <div className="post-body" style={{ maxWidth: "780px", marginInline: "0" }}>
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{rich(p)}</p>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })}

      {children}

      <section className="section section--tight">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="section__title">Good things to ask us.</h2>
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
              <a className="btn btn--ghost btn--lg" href="https://devarko.com/work/" target="_blank" rel="noopener">
                See our work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
