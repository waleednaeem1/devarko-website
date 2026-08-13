import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Team Behind 7 Live Platforms | CodeSumMix",
  description:
    "CodeSumMix is a founder-led software studio in Lahore. Seven client platforms live across Kuwait, Pakistan, and the USA, plus our own freight ERP, Cargonio.",
  keywords:
    "software house in Lahore, software company Pakistan, software house Pakistan, software agency Lahore, custom software development Pakistan, education technology company, freight forwarding specialists, Laravel development company, Waleed Naeem, about CodeSumMix",
  alternates: { canonical: "https://codesummix.com/about/" },
  openGraph: { title: "About the Team Behind 7 Live Platforms | CodeSumMix", description: "CodeSumMix is a founder-led software studio in Lahore. Seven client platforms live across Kuwait, Pakistan, and the USA, plus our own freight ERP, Cargonio.", url: "https://codesummix.com/about/", type: "website", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/og/about.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "About the Team Behind 7 Live Platforms | CodeSumMix", description: "CodeSumMix is a founder-led software studio in Lahore. Seven client platforms live across Kuwait, Pakistan, and the USA, plus our own freight ERP, Cargonio.", images: ["https://codesummix.com/assets/og/about.jpg"] },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://codesummix.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About",
              item: "https://codesummix.com/about/",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/about/`,
          name: "About CodeSumMix",
          mainEntity: { "@id": `${SITE_URL}/#org` },
        }}
      />
      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>About us</span>
          <h1 data-reveal data-reveal-delay="1">Built by operators: EdTech, freight, and an ERP of our own.</h1>
          <p data-reveal data-reveal-delay="2">We build education and freight software that runs in production: seven client platforms in three countries, plus Cargonio, our own ERP.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem,4vw,3rem)" }}>
        <div className="container">
          <div className="about-story">
            <div data-reveal>
              <span className="eyebrow">Who we are</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>A small studio that runs what it ships.</h2>
              <p style={{ marginTop: "1.1rem" }}>CodeSumMix is a software studio in Lahore, Pakistan, founded and led by Waleed Naeem. We build software for clients and run a product of our own. Seven client platforms we built are in production across Kuwait, Pakistan, and the USA, and our own product runs two freight businesses every day.</p>
              <p>We go deep in two fields: education technology, and freight &amp; logistics. <strong style={{ color: "var(--text)" }}>Bright Future</strong> in Kuwait and <strong style={{ color: "var(--text)" }}>Ilmversity</strong> in Pakistan anchor the EdTech work. The freight work produced <strong style={{ color: "var(--text)" }}>Cargonio</strong>, our own multi-tenant ERP with air and sea operations, invoicing tied into the PRA &amp; FBR e-IMS tax systems, double-entry accounts, and HR and payroll. Both of our freight clients run their businesses on it.</p>
              <p>Small and senior is a deliberate choice. There are no juniors learning on your project and no account managers between you and the people writing the code. That means faster decisions, and work you can inspect every week in a live demo. When we grow, we grow carefully: see our <Link href="/careers/">open roles</Link>.</p>
            </div>
            <div className="about-panel" data-reveal data-reveal-delay="1">
              <div className="s"><b>2</b><span>Specialties: EdTech &amp; freight software</span></div>
              <div className="s"><b>7</b><span>Client platforms in production</span></div>
              <div className="s"><b>3</b><span>Countries: Kuwait, Pakistan &amp; the USA</span></div>
              <div className="s"><b>1</b><span>Product of our own: Cargonio ERP</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">What we value</span>
            <h2 className="section__title">How we work with you.</h2>
          </div>
          <div className="steps">
            <div className="step" data-reveal>
              <div className="step__num"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.5" fill="currentColor"/></svg></div>
              <h3 className="step__title">Build for real users</h3>
              <p className="step__text">Software only matters if people actually use it. We design for the human on the other side of the screen.</p>
            </div>
            <div className="step" data-reveal data-reveal-delay="1">
              <div className="step__num"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z"/></svg></div>
              <h3 className="step__title">Own the outcome</h3>
              <p className="step__text">We care about your result, not just our hours. We act like partners, because that's the only way good products get built.</p>
            </div>
            <div className="step" data-reveal data-reveal-delay="2">
              <div className="step__num"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z"/></svg></div>
              <h3 className="step__title">Communicate openly</h3>
              <p className="step__text">Weekly demos, clear timelines, no jargon walls. You always know exactly where things stand.</p>
            </div>
            <div className="step" data-reveal data-reveal-delay="3">
              <div className="step__num"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 16l3-8 4 5 3-3 4 6"/><path d="M4 20h16"/></svg></div>
              <h3 className="step__title">Ship, then improve</h3>
              <p className="step__text">We get working software in front of users fast, then refine with real feedback instead of guesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="section__title">A process built for momentum.</h2>
          </div>
          <div className="steps">
            <div className="step" data-reveal><div className="step__num">01</div><h3 className="step__title">Discover</h3><p className="step__text">We dig into your goals, users, and constraints to define the right thing to build.</p></div>
            <div className="step" data-reveal data-reveal-delay="1"><div className="step__num">02</div><h3 className="step__title">Design</h3><p className="step__text">Wireframes to polished UI, validated with you early, no expensive surprises.</p></div>
            <div className="step" data-reveal data-reveal-delay="2"><div className="step__num">03</div><h3 className="step__title">Build</h3><p className="step__text">Agile sprints, clean and tested code, weekly demos. Full transparency.</p></div>
            <div className="step" data-reveal data-reveal-delay="3"><div className="step__num">04</div><h3 className="step__title">Launch &amp; Scale</h3><p className="step__text">We ship, monitor, and iterate, then stay on to help you grow.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Let's build something together.</h2>
            <p className="cta__sub">Whether you have a detailed spec or just a rough idea, we'd love to hear about it.</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">Start a project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/work/">See our work</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
