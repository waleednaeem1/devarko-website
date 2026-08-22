import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import SeoScoreRings from "@/components/SeoScoreRings";
import WebBuildMock from "@/components/WebBuildMock";
import { ArrowIcon, BackIcon, Tick } from "@/components/icons";
import { getService, otherServices, services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const url = `${SITE_URL}/services/${s.slug}/`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: "Devarko", locale: "en_US", images: [{ url: `https://devarko.com/assets/og/service-${s.slug}.jpg`, width: 1200, height: 630 }], title: s.metaTitle, description: s.metaDescription, url },
    twitter: { card: "summary_large_image", images: [`https://devarko.com/assets/og/service-${s.slug}.jpg`], title: s.metaTitle, description: s.metaDescription },
  };
}


function rich(text: string): React.ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    return (
      <Link key={i} href={m[2]}>
        {m[1]}
      </Link>
    );
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = otherServices(s.slug);
  const url = `${SITE_URL}/services/${s.slug}/`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: s.navTitle,
          name: s.metaTitle,
          description: s.metaDescription,
          url,
          provider: { "@type": "Organization", name: "Devarko", url: `${SITE_URL}/` },
          areaServed: "Worldwide",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: s.faqs.map((f) => ({
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
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
            { "@type": "ListItem", position: 3, name: s.navTitle, item: url },
          ],
        }}
      />

      <section className="svc-hero">
        <span className="svc-hero__orb svc-hero__orb--1" aria-hidden="true"></span>
        <span className="svc-hero__orb svc-hero__orb--2" aria-hidden="true"></span>
        <div className="container">
          <div className="svc-hero__inner">
            <Link className="case-back" href="/services/">
              <BackIcon /> All services
            </Link>
            <span className="eyebrow">{s.eyebrow}</span>
            <h1>{s.h1}</h1>
            <p className="svc-hero__lede">{s.lede}</p>
            <div className="svc-hero__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a project <ArrowIcon />
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/work/">
                See our work
              </Link>
            </div>
          </div>
          <div className="svc-stats" data-reveal data-stagger>
            {s.stats.map((st) => (
              <div className="svc-stat" key={st.label}>
                <b>{st.value}</b>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">Overview</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                {s.overview.heading}
              </h2>
              {s.overview.paragraphs.map((p, i) => (
                <p key={i} style={i === 0 ? { marginTop: "1.1rem" } : undefined}>
                  {rich(p)}
                </p>
              ))}
            </div>
            <ul className="feature-list" data-reveal data-stagger>
              {s.overview.bullets.map((b) => (
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
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="section__title">What you get with {s.navTitle}.</h2>
          </div>
          <div className="svc-grid" data-reveal data-stagger>
            {s.capabilities.map((c, i) => (
              <article className="svc-card" key={c.title}>
                <span className="svc-card__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="section__title">From first call to live.</h2>
          </div>
          <div className="svc-steps" data-reveal data-stagger>
            {s.process.map((st, i) => (
              <div className="svc-step" key={st.title}>
                <div className="svc-step__n">{String(i + 1).padStart(2, "0")}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Tools we use</span>
            <h2 className="section__title">The stack behind the work.</h2>
          </div>
          <div className="svc-stack" data-reveal data-stagger>
            {s.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {s.slug === "seo-marketing" && <SeoScoreRings />}
      {s.slug === "web-applications" && <WebBuildMock />}

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="section__title">Things clients ask us.</h2>
          </div>
          <div className="faq" data-reveal>
            {s.faqs.map((f, i) => (
              <details name="faq" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <div className="faq__a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">More from us</span>
            <h2 className="section__title">Other services.</h2>
          </div>
          <div className="svc-stack" data-reveal data-stagger>
            {others.slice(0, 6).map((o) => (
              <Link className="svc-stack-link" href={`/services/${o.slug}/`} key={o.slug}>
                <span>{o.navTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">{s.ctaTitle}</h2>
            <p className="cta__sub">{s.ctaSub}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a project <ArrowIcon />
              </Link>
              <a className="btn btn--ghost btn--lg" href="https://wa.me/923203271071" target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
