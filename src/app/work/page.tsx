import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Software Development Portfolio & Case Studies | CodeSumMix",
  description:
    "See the platforms we have built: e-learning, veterinary marketplaces and freight systems live in Kuwait, Pakistan and the USA. Explore our case studies.",
  keywords:
    "software development portfolio, software case studies, software house in Lahore, custom software development, EdTech projects, freight forwarding software, web development company, Laravel development, React development, software agency Pakistan",
  alternates: { canonical: "https://codesummix.com/work/" },
  openGraph: { title: "Software Development Portfolio & Case Studies | CodeSumMix", description: "See the platforms we have built: e-learning, veterinary marketplaces and freight systems live in Kuwait, Pakistan and the USA. Explore our case studies.", url: "https://codesummix.com/work/", type: "website", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/img/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Software Development Portfolio & Case Studies | CodeSumMix", description: "See the platforms we have built: e-learning, veterinary marketplaces and freight systems live in Kuwait, Pakistan and the USA. Explore our case studies.", images: ["https://codesummix.com/assets/img/og-image.png"] },
};

export default function WorkPage() {
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
              name: "Work",
              item: "https://codesummix.com/work/",
            },
          ],
        }}
      />
      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>Our work</span>
          <h1 data-reveal data-reveal-delay="1">Real platforms, in production.</h1>
          <p data-reveal data-reveal-delay="2">From education platforms to e-commerce, healthcare, and freight &amp; logistics: for clients in Kuwait, Pakistan, and the United States. Here's a closer look at what we've shipped.</p>
        </div>
      </section>

      <section style={{ paddingBlock: "clamp(1.5rem,3vw,2.5rem)" }}>
        <div className="container">
          <div className="work-stats" data-reveal>
            <div><b>7</b><span>Client platforms</span></div>
            <div><b>3</b><span>Countries</span></div>
            <div><b>3</b><span>Industries</span></div>
            <div><b>7</b><span>Live in production</span></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(1.5rem,3vw,2.5rem)" }}>
        <div className="container">
          <div className="case-grid">

            <Link className="case-card" href="/work/bright-future/" data-reveal>
              <div className="case-card__cover">
                <span className="case-card__badge"><span className="pill__dot"></span> Flagship client</span>
                <img className="cover" src="/assets/img/cases/bf-dash-1.jpg" alt="Bright Future admin dashboard" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">EdTech · Kuwait</span>
                <h3 className="case-card__title">Bright Future</h3>
                <p className="case-card__desc">End-to-end e-learning for universities and training programs: web dashboard, native iOS &amp; Android apps, secure video, and online payments.</p>
                <div className="case-card__tags"><span>E-learning</span><span>iOS &amp; Android</span><span>Payments</span></div>
                <span className="case-card__link">Case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>

            <Link className="case-card" href="/work/ilmversity/" data-reveal data-reveal-delay="1">
              <div className="case-card__cover">
                <img className="cover" src="/assets/img/cases/ilm-site.jpg" alt="Ilmversity: AI-powered LMS and school management platform" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">EdTech · Pakistan</span>
                <h3 className="case-card__title">Ilmversity</h3>
                <p className="case-card__desc">A learning management system for schools nationwide: courses, assessments, and day-to-day administration in one modern platform.</p>
                <div className="case-card__tags"><span>School LMS</span><span>Assessments</span><span>Admin</span></div>
                <span className="case-card__link">Case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>

            <Link className="case-card" href="/work/dvm-central/" data-reveal>
              <div className="case-card__cover">
                <img className="cover" src="/assets/img/cases/dvm-products-1000.jpg" alt="DVM Central marketplace storefront" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">E-commerce · USA</span>
                <h3 className="case-card__title">DVM Central</h3>
                <p className="case-card__desc">A B2B veterinary marketplace connecting suppliers with practices: thousands of products, a seller portal, and secure checkout.</p>
                <div className="case-card__tags"><span>Marketplace</span><span>Seller Portal</span><span>Checkout</span></div>
                <span className="case-card__link">Case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>

            <Link className="case-card" href="/work/vetpet-central/" data-reveal data-reveal-delay="1">
              <div className="case-card__cover">
                <img className="cover" src="/assets/img/cases/vp-site-1000.jpg" alt="VetPet Central: find and book trusted vets" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">Vet Tech · USA</span>
                <h3 className="case-card__title">VetPet Central</h3>
                <p className="case-card__desc">A nationwide vet booking &amp; telehealth platform: clinic directory, pet records, pharmacy, and AI-assisted insights on web and mobile.</p>
                <div className="case-card__tags"><span>Telehealth</span><span>Booking</span><span>AI</span></div>
                <span className="case-card__link">Case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>

            <Link className="case-card" href="/work/vetandtech/" data-reveal>
              <div className="case-card__cover">
                <img className="cover" src="/assets/img/cases/vt-site.jpg" alt="VetandTech: online veterinary education platform" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">Vet EdTech · USA</span>
                <h3 className="case-card__title">VetandTech</h3>
                <p className="case-card__desc">An online veterinary education platform: free RACE-approved CE webinars, courses, and surgical training resources for veterinary professionals.</p>
                <div className="case-card__tags"><span>CE Webinars</span><span>Courses</span><span>Vet Education</span></div>
                <span className="case-card__link">Case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>

            <Link className="case-card" href="/work/skyline-cargo/" data-reveal>
              <div className="case-card__cover">
                <span className="case-card__badge"><span className="pill__dot"></span> New client · 2026</span>
                <img className="cover" src="/assets/img/cases/cargonio-demo-jobs-1200.jpg" alt="Skyline Cargo freight dashboard on Cargonio" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">Logistics · Pakistan</span>
                <h3 className="case-card__title">Skyline Cargo Marketing</h3>
                <p className="case-card__desc">Freight forwarding, digitized: sea &amp; air import/export operations and invoicing with PRA &amp; FBR e-IMS tax integration, plus HR, payroll, and accounts modules.</p>
                <div className="case-card__tags"><span>Sea &amp; Air</span><span>Invoicing</span><span>PRA &amp; FBR e-IMS</span><span>Freight ERP</span><span>HR &amp; Payroll</span><span>Accounts</span></div>
                <span className="case-card__link">Case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>

            <Link className="case-card" href="/work/kare-cargo/" data-reveal data-reveal-delay="1" style={{ gridColumn: "1 / -1" }}>
              <div className="case-card__cover" style={{ aspectRatio: "32 / 9" }}>
                <span className="case-card__badge"><span className="pill__dot"></span> Live · 2026</span>
                <img className="cover" src="/assets/img/cases/cargonio-demo-home-1200.jpg" alt="Cargonio Company Home: operations, finance and HR in one workspace" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">Logistics · Pakistan</span>
                <h3 className="case-card__title">Kare Cargo International</h3>
                <p className="case-card__desc">A complete freight ERP, live on <strong>Cargonio</strong>: sea &amp; air operations and invoicing with government tax integration, plus HR management, payroll, and accounts in one system.</p>
                <div className="case-card__tags"><span>Sea &amp; Air</span><span>Invoicing</span><span>PRA &amp; FBR e-IMS</span><span>Freight ERP</span><span>HR &amp; Payroll</span><span>Accounts</span></div>
                <span className="case-card__link">Case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Want to be our next case study?</h2>
            <p className="cta__sub">We're taking on new projects now. Tell us what you're building and let's make something worth showing off.</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">Start a project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/services/">Explore services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
