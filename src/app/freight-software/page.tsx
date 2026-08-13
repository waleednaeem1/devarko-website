import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Freight Forwarding Specialists | Logistics Software",
  description:
    "Freight forwarding specialists building logistics software: sea and air import-export operations, invoicing and PRA & FBR e-IMS tax integration in Pakistan.",
  keywords:
    "freight forwarding specialists, freight forwarding software, logistics software development, freight ERP, freight software Pakistan, sea import export software, air freight software, MBL HBL software, PRA e-IMS integration, FBR e-invoicing, cargo software development, customs clearance software",
  alternates: { canonical: "https://codesummix.com/freight-software/" },
  openGraph: { title: "Freight Forwarding Specialists | Logistics Software | CodeSumMix", description: "Freight forwarding specialists building logistics software: sea and air import-export operations, invoicing and PRA & FBR e-IMS tax integration in Pakistan.", url: "https://codesummix.com/freight-software/", type: "website", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/img/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Freight Forwarding Specialists | Logistics Software | CodeSumMix", description: "Freight forwarding specialists building logistics software: sea and air import-export operations, invoicing and PRA & FBR e-IMS tax integration in Pakistan.", images: ["https://codesummix.com/assets/img/og-image.png"] },
};

export default function FreightSoftwarePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Freight Forwarding Specialists",
          name: "Freight Forwarding Specialists: Logistics Software",
          description:
            "Freight forwarding specialists building logistics software: sea and air import-export operations, invoicing and PRA & FBR e-IMS tax integration in Pakistan.",
          url: "https://codesummix.com/freight-software/",
          provider: {
            "@type": "Organization",
            name: "CodeSumMix",
            url: "https://codesummix.com/",
          },
          areaServed: "Worldwide",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do we have to take your product, or can you build us our own?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Either. Most forwarders are better served by Cargonio: the work is already done, tested and running, and you get a branded workspace with the modules you need. A bespoke build makes sense when your operation genuinely differs from the norm, and we will tell you honestly which case you are in rather than selling you the more expensive one.",
              },
            },
            {
              "@type": "Question",
              name: "How does the PRA and FBR reporting actually work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Your team invoices as normal. The invoice carries the freight context: house and master bill, party, charges and tax, and syncs to the government system, which returns an official fiscal number that is stored on the record. It can be done one invoice at a time or as a bulk run against a backlog, with every request and response logged so a failure is traceable rather than mysterious.",
              },
            },
            {
              "@type": "Question",
              name: "We already run an old desktop freight system. Can you migrate us?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "That is the usual starting point: most forwarders we meet are on decade-old desktop software, and some are on spreadsheets. We read the existing system first, map its master data and open jobs, and move you across in stages rather than switching everything on a Monday morning. Historic data usually comes over as reference; live jobs are the careful part.",
              },
            },
            {
              "@type": "Question",
              name: "Can it handle our accounts, or do we keep a separate package?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It handles them. Billing posts straight into a double-entry ledger, so an invoice raised against a shipment appears in the accounts without re-keying, and the trial balance never mixes currencies because every figure is stored with its base-currency twin. Firms that want to keep an existing accounts package can export instead, but the reconciliation work comes back.",
              },
            },
          ],
        }}
      />
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
              name: "Freight Forwarding Specialists",
              item: "https://codesummix.com/freight-software/",
            },
          ],
        }}
      />
      <section className="svc-hero">
        <span className="svc-hero__orb svc-hero__orb--1" aria-hidden="true"></span>
        <span className="svc-hero__orb svc-hero__orb--2" aria-hidden="true"></span>
        <div className="container">
          <div className="svc-hero__inner">
            <span className="eyebrow">Speciality · Freight &amp; logistics</span>
            <h1>Freight forwarding specialists who have shipped the whole thing</h1>
            <p className="svc-hero__lede">Freight software is an unusually unforgiving domain: master and house bills, containers, multi-currency charges, and a government that expects every invoice reported correctly. We know it because we built a complete freight ERP and now run it for forwarders in Pakistan.</p>
            <div className="svc-hero__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">Start a project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
              <Link className="btn btn--ghost btn--lg" href="/work/">See our work</Link>
            </div>
          </div>
          <div className="svc-stats" data-reveal data-stagger>
            <div className="svc-stat"><b>Air &amp; sea</b><span>export and import, four lanes</span></div>
            <div className="svc-stat"><b>PRA &amp; FBR</b><span>government tax integration built in</span></div>
            <div className="svc-stat"><b>Cargonio</b><span>our own freight ERP product</span></div>
            <div className="svc-stat"><b>2 forwarders</b><span>live on the platform today</span></div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">Why us</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>We did not learn freight from a requirements document</h2>
              <p style={{ marginTop: "1.1rem" }}>Most software teams meet freight forwarding for the first time on your project, and you pay for that education. We arrived at it the same way, but we finished, and then kept going: the system we built for our first forwarder became <Link href="/cargonio/" style={{ color: "var(--accent-ink)", fontWeight: 600 }}>Cargonio</Link>, a product we own, sell and support.</p>
              <p>That means we already know what a house bill is, why a job number is per branch and per fiscal year, why a finalised invoice must be voided rather than deleted, and what happens when a government endpoint is down on the afternoon your invoices are due. Those are the questions that usually surface in month three of a build.</p>
            </div>
            <ul className="feature-list" data-reveal data-stagger>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Sea &amp; air, import &amp; export</b><em>Four lanes on one job book</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>MBL, HBL &amp; containers</b><em>Master and house documents, seals, ISO codes</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Multi-currency billing</b><em>Charges in any currency, one balanced ledger</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Government fiscalization</b><em>PRA &amp; FBR e-IMS reporting</em></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">What we build</span>
            <h2 className="section__title">Where the domain knowledge shows.</h2>
          </div>
          <div className="svc-grid" data-reveal data-stagger>
            <article className="svc-card"><span className="svc-card__n">01</span><h3>Job &amp; shipment operations</h3><p>Air export, sea export, air import and sea import on one record set: master and house documents, containers, parties, routing, vessels and flights, with per-branch and per-year job numbering.</p></article>
            <article className="svc-card"><span className="svc-card__n">02</span><h3>Freight invoicing</h3><p>Local and international invoices, charge codes, credit notes and refunds, in multiple currencies, tied to the shipment they belong to rather than typed again into an accounts package.</p></article>
            <article className="svc-card"><span className="svc-card__n">03</span><h3>Government tax integration</h3><p>PRA and FBR e-IMS reporting: tax calculated, invoices fiscalized one at a time or in bulk, official fiscal numbers stamped back onto the record, and every submission logged for audit.</p></article>
            <article className="svc-card"><span className="svc-card__n">04</span><h3>Accounting that balances</h3><p>A double-entry core underneath the freight: chart of accounts, vouchers, banking and financial statements, fed automatically when a document is finalised, and reversed cleanly when it is un-finalised.</p></article>
            <article className="svc-card"><span className="svc-card__n">05</span><h3>HR, payroll &amp; the back office</h3><p>Freight companies are businesses too. Employees, attendance, leave, payroll and an employee self-service portal, in the same platform as the shipments rather than a second system nobody reconciles.</p></article>
            <article className="svc-card"><span className="svc-card__n">06</span><h3>Reporting for the people who ask</h3><p>Operational, MIS and financial reports with filters, grouping, totals and CSV export: written after watching someone export to Excel and pivot it by hand.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Proof</span>
            <h2 className="section__title">Live, and being used today.</h2>
          </div>
          <div className="case-grid">
            <Link className="case-card" href="/work/skyline-cargo/" data-reveal>
              <div className="case-card__cover"><img className="cover" src="/assets/img/cases/cargonio-demo-freight.jpg" alt="Skyline Cargo Marketing: Logistics · Pakistan" loading="lazy"/></div>
              <div className="case-card__body"><span className="case-card__meta">Logistics · Pakistan</span><h3 className="case-card__title">Skyline Cargo Marketing</h3>
              <p className="case-card__desc">Sea and air import/export operations, invoicing and government-fiscalized tax reporting: our first freight client.</p>
              <span className="case-card__link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
            </Link>
            <Link className="case-card" href="/work/kare-cargo/" data-reveal>
              <div className="case-card__cover"><img className="cover" src="/assets/img/cases/cargonio-demo-home-1200.jpg" alt="Kare Cargo International: Logistics · Pakistan" loading="lazy"/></div>
              <div className="case-card__body"><span className="case-card__meta">Logistics · Pakistan</span><h3 className="case-card__title">Kare Cargo International</h3>
              <p className="case-card__desc">The full stack from day one: freight operations and invoicing plus HR, payroll and accounts on one platform.</p>
              <span className="case-card__link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
            </Link>
            <Link className="case-card" href="/cargonio/" data-reveal>
              <div className="case-card__cover"><img className="cover" src="/assets/img/cases/cargonio-demo-invoices-1200.jpg" alt="Cargonio: Our product" loading="lazy"/></div>
              <div className="case-card__body"><span className="case-card__meta">Our product</span><h3 className="case-card__title">Cargonio</h3>
              <p className="case-card__desc">The multi-tenant freight ERP behind both: from booking to balance sheet, licensed to forwarders.</p>
              <span className="case-card__link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="section__title">What clients ask us first.</h2>
          </div>
          <div className="faq" data-reveal>
            <details open><summary>Do we have to take your product, or can you build us our own?</summary><div className="faq__a">Either. Most forwarders are better served by Cargonio: the work is already done, tested and running, and you get a branded workspace with the modules you need. A bespoke build makes sense when your operation genuinely differs from the norm, and we will tell you honestly which case you are in rather than selling you the more expensive one.</div></details>
            <details><summary>How does the PRA and FBR reporting actually work?</summary><div className="faq__a">Your team invoices as normal. The invoice carries the freight context: house and master bill, party, charges and tax, and syncs to the government system, which returns an official fiscal number that is stored on the record. It can be done one invoice at a time or as a bulk run against a backlog, with every request and response logged so a failure is traceable rather than mysterious.</div></details>
            <details><summary>We already run an old desktop freight system. Can you migrate us?</summary><div className="faq__a">That is the usual starting point: most forwarders we meet are on decade-old desktop software, and some are on spreadsheets. We read the existing system first, map its master data and open jobs, and move you across in stages rather than switching everything on a Monday morning. Historic data usually comes over as reference; live jobs are the careful part.</div></details>
            <details><summary>Can it handle our accounts, or do we keep a separate package?</summary><div className="faq__a">It handles them. Billing posts straight into a double-entry ledger, so an invoice raised against a shipment appears in the accounts without re-keying, and the trial balance never mixes currencies because every figure is stored with its base-currency twin. Firms that want to keep an existing accounts package can export instead, but the reconciliation work comes back.</div></details>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Run a freight forwarding company?</h2>
            <p className="cta__sub">Tell us your lanes, your volumes and what your current system will not do. We will show you Cargonio running and be straight about whether it fits or whether you need something built.</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">Start a project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
              <a className="btn btn--ghost btn--lg" href="https://wa.me/923203271071" target="_blank" rel="noopener">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
