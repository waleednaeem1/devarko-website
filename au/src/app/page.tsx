import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { rich } from "@/components/AuPage";
import { ProcessSteps, ServiceAreas, TechStack } from "@/components/sections";
import { ArrowIcon } from "@/components/icons";
import home from "@/content/au-home.json";
import { getPage } from "@/lib/pages";
import { AU_PHONE, AU_PHONE_TEL, MAIN_SITE, SITE_URL } from "@/lib/site";

const meta = getPage("home");

export const metadata: Metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  keywords: meta.keywords,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: meta.metaTitle,
    description: meta.metaDescription,
    url: `${SITE_URL}/`,
    type: "website",
    siteName: "Devarko",
    locale: "en_AU",
    images: [{ url: `${SITE_URL}/assets/img/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.metaTitle,
    description: meta.metaDescription,
    images: [`${SITE_URL}/assets/img/og-image.png`],
  },
};

const CARD_META: Record<string, { href: string; external?: boolean; ai?: boolean; badge?: string; icon: React.ReactNode }> = {
  seo: {
    href: "/seo-services/",
    badge: "Core service",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3M8 11h6M11 8v6" />
      </>
    ),
  },
  webdev: {
    href: "/web-development/",
    badge: "Core service",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
  },
  webapps: {
    href: `${MAIN_SITE}/services/web-applications/`,
    external: true,
    icon: <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13.5 6l-3 12" />,
  },
  mobile: {
    href: `${MAIN_SITE}/services/mobile-apps/`,
    external: true,
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M11 18h2" />
      </>
    ),
  },
  ai: {
    href: `${MAIN_SITE}/services/ai-solutions/`,
    external: true,
    ai: true,
    icon: (
      <>
        <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
        <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" />
      </>
    ),
  },
  cloud: {
    href: `${MAIN_SITE}/services/cloud-devops/`,
    external: true,
    icon: (
      <>
        <path d="M6.5 19a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 9.5a3.5 3.5 0 0 1-.5 9.5z" />
        <path d="M9.5 14.5l2 2 3.5-4" />
      </>
    ),
  },
};

const WORK_CARDS = [
  {
    href: `${MAIN_SITE}/work/bright-future/`,
    badge: "Flagship client",
    img: "/assets/img/cases/bf-dash-1.jpg",
    alt: "Bright Future admin dashboard",
    meta: "EdTech · Kuwait",
    title: "Bright Future",
    desc: "End-to-end e-learning for universities and training programs: web dashboard, native iOS & Android apps, secure video, and online payments.",
    tags: ["E-learning", "iOS & Android", "Payments"],
    delay: 0,
  },
  {
    href: `${MAIN_SITE}/work/dvm-central/`,
    img: "/assets/img/cases/dvm-products-1000.jpg",
    alt: "DVM Central marketplace storefront",
    meta: "E-commerce · USA",
    title: "DVM Central",
    desc: "A B2B veterinary marketplace connecting suppliers with practices: thousands of products, a seller portal, and secure checkout.",
    tags: ["Marketplace", "Seller Portal", "Checkout"],
    delay: 1,
  },
  {
    href: `${MAIN_SITE}/work/skyline-cargo/`,
    img: "/assets/img/cases/cargonio-demo-jobs-1200.jpg",
    alt: "Sea export jobs on Cargonio: parties, vessels, destinations and shipment statuses",
    meta: "Logistics · Pakistan",
    title: "Skyline Cargo Marketing",
    desc: "Freight forwarding, digitised: sea & air import/export operations and invoicing with government tax integration, plus HR, payroll, and accounts modules.",
    tags: ["Freight ERP", "Invoicing", "HR & Payroll"],
    delay: 0,
  },
  {
    href: `${MAIN_SITE}/work/vetpet-central/`,
    img: "/assets/img/cases/vp-site-1000.jpg",
    alt: "VetPet Central: find and book trusted vets",
    meta: "Vet Tech · USA",
    title: "VetPet Central",
    desc: "A nationwide vet booking & telehealth platform: clinic directory, pet records, pharmacy, and AI-assisted insights on web and mobile.",
    tags: ["Telehealth", "Booking", "AI"],
    delay: 1,
  },
];

const LOGOS = [
  { href: `${MAIN_SITE}/work/bright-future/`, img: "/assets/img/logos/bright-future.png", w: 99, h: 96, alt: "Bright Future Institute logo", name: "Bright Future", tag: "E-learning · Kuwait" },
  { href: `${MAIN_SITE}/work/ilmversity/`, img: "/assets/img/logos/ilmversity.png", w: 96, h: 96, alt: "Ilmversity logo", name: "Ilmversity", tag: "School LMS · Pakistan" },
  { href: `${MAIN_SITE}/work/dvm-central/`, img: "/assets/img/logos/dvm-central.svg", w: 300, h: 120, alt: "DVM Central logo", name: "DVM Central", tag: "Marketplace · USA" },
  { href: `${MAIN_SITE}/work/vetpet-central/`, img: "/assets/img/logos/vetpet-central.png", w: 189, h: 96, alt: "VetPet Central logo", name: "VetPet Central", tag: "Vet tech · USA" },
  { href: `${MAIN_SITE}/work/vetandtech/`, img: "/assets/img/logos/vetandtech.png", w: 284, h: 96, alt: "VetandTech logo", name: "VetandTech", tag: "Vet EdTech · USA" },
  { href: `${MAIN_SITE}/work/skyline-cargo/`, img: "/assets/img/logos/skyline-cargo.png", w: 415, h: 96, alt: "Skyline Cargo Marketing logo", name: "Skyline Cargo", tag: "Freight · Pakistan" },
  { href: `${MAIN_SITE}/work/kare-cargo/`, img: "/assets/img/logos/kare-cargo.png", w: 424, h: 96, alt: "Kare Cargo International logo", name: "Kare Cargo Intl", tag: "Freight ERP · Pakistan" },
];

const TESTIMONIALS = [
  {
    quote:
      "Cargonio is an outstanding freight forwarding platform that has streamlined our operations and boosted productivity. An excellent product backed by a team that truly cares about its customers.",
    initials: "R",
    name: "Raheel",
    role: "Chief Executive Officer · Skyline Cargo Marketing",
  },
  {
    quote:
      "Cargonio has transformed the way we manage our freight forwarding operations. It's reliable, user-friendly, and has significantly improved our team's efficiency. Their continuous support and commitment to innovation make them a trusted technology partner.",
    initials: "AA",
    name: "Adeel Ahmed",
    role: "Managing Director · Kare Cargo International",
  },
];

export default function HomePage() {
  return (
    <main>
      <link
        rel="preload"
        as="image"
        href="/assets/img/cases/cargonio-demo-freight-1200.webp"
        fetchPriority="high"
        media="(min-width: 768px)"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#business`,
          name: "Devarko",
          description: meta.metaDescription,
          url: `${SITE_URL}/`,
          telephone: AU_PHONE_TEL,
          email: "info@devarko.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hobart",
            addressRegion: "TAS",
            addressCountry: "AU",
          },
          geo: { "@type": "GeoCoordinates", latitude: -42.8821, longitude: 147.3272 },
          areaServed: [
            { "@type": "City", name: "Melbourne" },
            { "@type": "State", name: "Victoria" },
            { "@type": "City", name: "Sydney" },
            { "@type": "Country", name: "Australia" },
          ],
          image: `${SITE_URL}/assets/img/og-image.png`,
          logo: `${SITE_URL}/assets/img/logo.svg`,
          sameAs: ["https://www.linkedin.com/company/devarko", MAIN_SITE],
          parentOrganization: { "@id": `${MAIN_SITE}/#org` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: home.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero__glow"></div>
        <span className="hero__orb hero__orb--1" aria-hidden="true"></span>
        <span className="hero__orb hero__orb--2" aria-hidden="true"></span>
        <span className="hero__orb hero__orb--3" aria-hidden="true"></span>
        <div className="container">
          <div className="hero__grid">
            <div className="hero__inner">
              <h1 className="hero__title" data-reveal>
                {home.hero.h1Pre} <span className="grad">{home.hero.h1Grad}</span> {home.hero.h1Post}
              </h1>
              <p className="hero__sub" data-reveal data-reveal-delay="2">
                {home.hero.sub}
              </p>
              <div className="hero__actions" data-reveal data-reveal-delay="3">
                <Link className="btn btn--primary btn--lg" href="/contact/">
                  Start a project <ArrowIcon />
                </Link>
                <Link className="btn btn--ghost btn--lg" href="/packages/">
                  See packages &amp; pricing
                </Link>
              </div>
              <div className="hero__trust" data-reveal data-reveal-delay="3">
                <span>
                  <strong>{home.hero.trust[0]}</strong>
                </span>
                <span className="dot"></span>
                <span>{home.hero.trust[1]}</span>
                <span className="dot"></span>
                <span>{home.hero.trust[2]}</span>
              </div>
            </div>

            <div className="hero__visual" data-reveal data-reveal-delay="2">
              <span className="hero__badge">
                <i></i> Live in production
              </span>
              <div className="hero__browser">
                <div className="hero__browser-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <img
                  src="/assets/img/cases/cargonio-demo-freight-1200.webp"
                  width={1200}
                  height={750}
                  alt="Cargonio freight dashboard in the live demo workspace, one of the production platforms built by Devarko"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="hero__phone">
                <img
                  src="/assets/img/cases/bf-app-480.webp"
                  width={480}
                  height={1043}
                  alt="Bright Future e-learning mobile app built by Devarko"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">{home.servicesIntro.eyebrow}</span>
            <h2 className="section__title">{home.servicesIntro.title}</h2>
            <p className="section__sub">{home.servicesIntro.sub}</p>
          </div>
          <div className="grid services__grid">
            {home.serviceCards.map((c, i) => {
              const m = CARD_META[c.key];
              const inner = (
                <>
                  {m.badge && <span className="card__badge">{m.badge}</span>}
                  <div className="card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {m.icon}
                    </svg>
                  </div>
                  <h3 className="card__title">{c.title}</h3>
                  <p className="card__text">{c.text}</p>
                  <span className="card__link">
                    Learn more <ArrowIcon />
                  </span>
                </>
              );
              const cls = `card${m.ai ? " card--ai" : ""} card--link`;
              const delay = i % 3 ? { "data-reveal-delay": String(i % 3) } : {};
              return m.external ? (
                <a key={c.key} className={cls} href={m.href} target="_blank" rel="noopener" data-reveal {...delay}>
                  {inner}
                </a>
              ) : (
                <Link key={c.key} className={cls} href={m.href} data-reveal {...delay}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <TechStack />

      {/* Packages teaser */}
      <section className="section section--tight section--alt" id="packages">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">{home.packagesTeaser.eyebrow}</span>
            <h2 className="section__title">{home.packagesTeaser.title}</h2>
            <p className="section__sub">{rich(home.packagesTeaser.sub)}</p>
          </div>
          <div className="price-mini">
            {home.packagesTeaser.tiers.map((t, i) => (
              <div className="price-mini__card" data-reveal {...(i ? { "data-reveal-delay": String(i) } : {})} key={t.name}>
                <span className="price-mini__name">{t.name}</span>
                <span className="price-mini__price">{t.price}</span>
                <span className="price-mini__line">{t.line}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} data-reveal>
            <Link className="btn btn--primary" href="/packages/">
              See every package in full <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <ServiceAreas />

      {/* Selected work */}
      <section className="section" id="work">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">{home.workIntro.eyebrow}</span>
            <h2 className="section__title">{home.workIntro.title}</h2>
            <p className="section__sub">{home.workIntro.sub}</p>
          </div>

          <div className="case-grid">
            {WORK_CARDS.map((c) => (
              <a
                className="case-card"
                href={c.href}
                target="_blank"
                rel="noopener"
                data-reveal
                {...(c.delay ? { "data-reveal-delay": String(c.delay) } : {})}
                key={c.href}
              >
                <div className="case-card__cover">
                  {c.badge && (
                    <span className="case-card__badge">
                      <span className="pill__dot"></span> {c.badge}
                    </span>
                  )}
                  <img className="cover" src={c.img} alt={c.alt} loading="lazy" />
                </div>
                <div className="case-card__body">
                  <span className="case-card__meta">{c.meta}</span>
                  <h3 className="case-card__title">{c.title}</h3>
                  <p className="case-card__desc">{c.desc}</p>
                  <div className="case-card__tags">
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="case-card__link">
                    Case study <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} data-reveal>
            <a className="btn btn--ghost" href={`${MAIN_SITE}/work/`} target="_blank" rel="noopener">
              View all seven case studies <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section aria-label="Clients" style={{ paddingBlock: "clamp(1.5rem,3vw,2.75rem)" }}>
        <div className="container">
          <p className="logos__label" data-reveal>
            {home.logosLabel}
          </p>
        </div>
        <div className="logo-marquee" data-reveal data-reveal-delay="1">
          <div className="logo-marquee__track">
            {[false, true].map((hidden) => (
              <div className="logo-marquee__group" aria-hidden={hidden || undefined} key={String(hidden)}>
                {LOGOS.map((l) => (
                  <a
                    className="logo-chip"
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    key={`${l.name}-${hidden}`}
                    tabIndex={hidden ? -1 : undefined}
                  >
                    <img src={l.img} width={l.w} height={l.h} alt={hidden ? "" : l.alt} loading="lazy" />
                    <span className="logo-chip__meta">
                      <b>{l.name}</b>
                      <span>{l.tag}</span>
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      <ProcessSteps alt />

      {/* Testimonials */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">{home.testimonialsIntro.eyebrow}</span>
            <h2 className="section__title">{home.testimonialsIntro.title}</h2>
          </div>
          <div className="grid testimonials">
            {TESTIMONIALS.map((t, i) => (
              <figure className="testimonial" data-reveal {...(i ? { "data-reveal-delay": String(i) } : {})} key={t.initials}>
                <div className="testimonial__stars" aria-label="Rated 5 out of 5">
                  ★★★★★
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <span className="testimonial__avatar" aria-hidden="true">
                    {t.initials}
                  </span>
                  <span className="testimonial__who">
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="section__title">Good things to ask us.</h2>
          </div>
          <div className="faq" data-reveal>
            {home.faqs.map((f, i) => (
              <details name="faq" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <div className="faq__a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="contact">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">{home.cta.title}</h2>
            <p className="cta__sub">{rich(home.cta.sub)}</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a conversation <ArrowIcon />
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
