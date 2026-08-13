import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Freight Forwarding Software | Cargonio ERP | CodeSumMix",
  description:
    "Cargonio is our multi-tenant freight forwarding ERP: air and sea import-export jobs, invoicing with PRA and FBR e-IMS filing, accounts, HR and payroll.",
  keywords:
    "freight forwarding software, freight ERP, freight forwarding ERP, logistics software, air export software, sea import software, freight invoicing software, PRA e-IMS integration, FBR e-invoicing, e-invoicing Pakistan, multi-tenant ERP, ERP development, Cargonio, CodeSumMix",
  alternates: { canonical: "https://codesummix.com/cargonio/" },
  openGraph: { title: "Freight Forwarding Software | Cargonio ERP | CodeSumMix", description: "Cargonio is our multi-tenant freight forwarding ERP: air and sea import-export jobs, invoicing with PRA and FBR e-IMS filing, accounts, HR and payroll.", url: "https://codesummix.com/cargonio/", type: "website", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/og/cargonio.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Freight Forwarding Software | Cargonio ERP | CodeSumMix", description: "Cargonio is our multi-tenant freight forwarding ERP: air and sea import-export jobs, invoicing with PRA and FBR e-IMS filing, accounts, HR and payroll.", images: ["https://codesummix.com/assets/og/cargonio.jpg"] },
};

export default function CargonioPage() {
  return (
    <main className="page--dark-hero">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              name: "Cargonio",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Freight Forwarding ERP",
              operatingSystem: "Web",
              url: "https://cargonio.com/",
              description:
                "A multi-tenant freight-forwarding ERP covering air and sea import/export operations, shipping documents, billing with PRA and FBR e-IMS tax fiscalization, double-entry accounting, HR, payroll and reporting.",
              author: {
                "@type": "Organization",
                name: "CodeSumMix",
                url: "https://codesummix.com/",
              },
              featureList: [
                "Air and sea import/export job management",
                "Freight invoicing with PRA and FBR e-IMS fiscalization",
                "Double-entry accounting with period locks",
                "HR, attendance and payroll",
                "Multi-tenant branded workspaces",
                "100+ operational and financial reports",
              ],
              screenshot: [
                "https://codesummix.com/assets/img/cases/cargonio-demo-freight.jpg",
                "https://codesummix.com/assets/img/cases/cargonio-demo-invoices.jpg",
                "https://codesummix.com/assets/img/cases/cargonio-demo-hr.jpg",
              ],
            },
            {
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
                  name: "Cargonio",
                  item: "https://codesummix.com/cargonio/",
                },
              ],
            },
          ],
        }}
      />

      <section className="prod-hero">
        <div className="container">
          <div className="prod-hero__grid">
            <div>
              <span className="prod-badge"><span className="pill__dot"></span> <b>Our product</b> · live in production</span>
              <div className="prod-mark" style={{ marginTop: "1.6rem" }}>Cargonio<i></i></div>
              <h1 style={{ fontSize: "clamp(2rem,4.2vw,3rem)" }}>From booking to balance sheet.</h1>
              <p className="prod-hero__lede">The complete freight-forwarding ERP. Air and sea, export and import: job entry, shipping documents, billing with built-in government tax compliance, general ledger and 100+ reports in one system. Built, owned, and sold by CodeSumMix.</p>
              <div className="cap-grid">
                <div className="cap" style={{ "--cap-accent": "linear-gradient(135deg,#4C6FFF,#7C5CFF)" } as CSSProperties}>
                  <div className="cap__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2-4 4 8 2-5 2 3h6"/></svg></div>
                  <b>Full job lifecycle</b>
                  <span>Booking → documentation → delivery, air &amp; sea</span>
                </div>
                <div className="cap" style={{ "--cap-accent": "linear-gradient(135deg,#36E0C8,#4EA8FF)" } as CSSProperties}>
                  <div className="cap__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg></div>
                  <b>Billing → ledger</b>
                  <span>Invoices post straight into the accounts</span>
                </div>
                <div className="cap" style={{ "--cap-accent": "linear-gradient(135deg,#FFB347,#F2960E)" } as CSSProperties}>
                  <div className="cap__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4v6c0 5-3.8 8.8-9 10-5.2-1.2-9-5-9-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
                  <b>PRA &amp; FBR integrated</b>
                  <span>Government-fiscalized invoices in one click</span>
                </div>
                <div className="cap" style={{ "--cap-accent": "linear-gradient(135deg,#A78BFA,#EC4899)" } as CSSProperties}>
                  <div className="cap__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 7.5a2.6 2.6 0 0 1 0 5M21 20a5 5 0 0 0-4-4.9"/></svg></div>
                  <b>HR &amp; payroll included</b>
                  <span>Your people and your books, one platform</span>
                </div>
              </div>
              <div className="prod-hero__actions">
                <Link className="btn btn--primary btn--lg" href="/contact/">Request a demo{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
                <a className="btn btn--ghost btn--lg" href="https://cargonio.com" target="_blank" rel="noopener">Visit cargonio.com</a>
              </div>
            </div>
            <div className="prod-card" data-reveal="">
              <span className="prod-card__tag">Why we built it</span>
              <p className="prod-card__quote">Freight companies were running on decades-old desktop software, or on spreadsheets.</p>
              <p className="prod-card__meta">We rebuilt that whole world as one modern, web-based platform: the operational depth of a legacy freight ERP, with the speed, clarity and compliance a business actually needs today.</p>
              <div className="prod-users">
                <span>Skyline Cargo Marketing · live</span>
                <span>Kare Cargo International · live</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">Inside the product</span>
            <h2 className="section__title">This is Cargonio, running live.</h2>
            <p className="section__sub">Real workspaces from real freight companies, not mockups.</p>
          </div>
          <div className="shot" data-reveal="">
            <img src="/assets/img/cases/cargonio-demo-freight.jpg" alt="Cargonio freight forwarding dashboard: jobs this month, shipments in transit, pending invoices, gross profit, jobs by mode and shipment status" loading="lazy"/>
          </div>
          <p className="shot-cap" data-reveal="">The Freight Forwarding dashboard is the operational cockpit: live job counts, shipments in transit, unbilled jobs, revenue vs cost, and one-click entry into every job type.</p>

          <div className="case-shots shots--even" style={{ marginTop: "2rem" }}>
            <div data-reveal="">
              <div className="shot"><img src="/assets/img/cases/cargonio-demo-hr.jpg" alt="Cargonio HR dashboard: employees, attendance, leave requests, payroll and new joiners" loading="lazy"/></div>
              <p className="shot-cap">HR &amp; payroll: attendance, leaves, appreciations and monthly payroll in the same platform.</p>
            </div>
            <div data-reveal="" data-reveal-delay="1">
              <div className="shot"><img src="/assets/img/cases/cargonio-demo-home.jpg" alt="Cargonio company home: a client's branded workspace with active jobs, outstanding invoices, income and employees" loading="lazy"/></div>
              <p className="shot-cap">Company Home: each client's branded workspace, showing only the modules they're entitled to.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">What's inside</span>
            <h2 className="section__title">One platform, every part of a freight business.</h2>
            <p className="section__sub">Cargonio is modular: each company gets a branded workspace switched on with exactly the modules it needs, and nothing it doesn't.</p>
          </div>

          <div className="mod-grid">
            <article className="mod" data-reveal="">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2-4 4 8 2-5 2 3h6"/></svg></div>
              <h3>Freight Operations</h3>
              <p>Air &amp; sea, export &amp; import. Job entry with MAWB/HAWB and MBL/HBL, containers, routing, parties, vessels and flights.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="1">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3h12l4 4v14H4z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg></div>
              <h3>Quotations &amp; Documents</h3>
              <p>Quote a customer, then turn a won quotation into a live freight job in one click. Air waybills, bills of lading, job sheets, delivery orders and manifests print straight from the record.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="2">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg></div>
              <h3>Billing &amp; Invoicing</h3>
              <p>Local and international invoices, charge codes, credit notes and refunds: multi-currency, with per-company numbering.</p>
            </article>
            <article className="mod" data-reveal="">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4v6c0 5-3.8 8.8-9 10-5.2-1.2-9-5-9-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
              <h3>Government Tax Compliance</h3>
              <p>Direct <strong>PRA &amp; FBR</strong> e-IMS integration: sales tax calculated, invoices fiscalized one-by-one or in bulk, official fiscal numbers stamped back, and every submission logged for audit.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="1">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg></div>
              <h3>Finance &amp; Accounts</h3>
              <p>A double-entry accounting core: chart of accounts, vouchers, banking and financial statements, fed by billing automatically.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="2">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 7.5a2.6 2.6 0 0 1 0 5M21 20a5 5 0 0 0-4-4.9"/></svg></div>
              <h3>HR &amp; People</h3>
              <p>Employees, departments, designations, contracts, appreciations, policies, holidays and offboarding.</p>
            </article>
            <article className="mod" data-reveal="">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="M8 15h3"/></svg></div>
              <h3>Attendance &amp; Leaves</h3>
              <p>Clock in/out, attendance summaries and corrections, leave types, balances and approval workflows.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="1">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <h3>Payroll</h3>
              <p>Salaries, pre-payments, increments and promotions, with payslips flowing through to the accounts.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="2">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 3v2h6V3"/><path d="M8 12l2 2 5-5"/></svg></div>
              <h3>Employee Self-Service</h3>
              <p>A portal where staff clock in, apply for leave, view payslips, assets, holidays and company policies themselves.</p>
            </article>
            <article className="mod" data-reveal="">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/></svg></div>
              <h3>Assets &amp; Inventory</h3>
              <p>Company assets and stock: assignment, lending, returns and condition tracking.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="1">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 16V9M12 16v-4M16 16v-6"/></svg></div>
              <h3>Reports &amp; Dashboards</h3>
              <p>100+ operational, MIS and financial reports, live dashboards, and Excel/CSV exports for the accounts team.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="2">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
              <h3>Roles &amp; Permissions</h3>
              <p>Granular, per-company roles: each user sees exactly the modules and screens they're entitled to, and nothing more.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="compliance" data-reveal="">
            <div className="compliance__head">
              <span className="eyebrow">Built-in compliance</span>
              <h2 className="section__title" style={{ marginTop: ".8rem" }}>Tax compliance that isn't an afterthought.</h2>
              <p className="section__sub" style={{ marginInline: "0" }}>In Pakistan, freight invoices have to reach the government: correctly, and on time. Cargonio talks to the <strong style={{ color: "var(--text)" }}>PRA</strong> and <strong style={{ color: "var(--text)" }}>FBR</strong> systems directly, so your team invoices as normal and compliance happens in the background.</p>
            </div>
            <div className="compliance__grid">
              <div className="compliance__item">
                <b>Direct e-IMS integration</b>
                <span>Invoices submit straight to the government's systems, no re-keying into a separate portal.</span>
              </div>
              <div className="compliance__item">
                <b>Official fiscal numbers</b>
                <span>Every fiscalized invoice comes back stamped with its government invoice number, stored on the record.</span>
              </div>
              <div className="compliance__item">
                <b>Single &amp; bulk sync</b>
                <span>Push one invoice, or clear a whole backlog of pending invoices in a single action.</span>
              </div>
              <div className="compliance__item">
                <b>Sandbox &amp; production modes</b>
                <span>Test safely against sandbox endpoints, then switch a company to live when you're ready.</span>
              </div>
              <div className="compliance__item">
                <b>Full submission audit log</b>
                <span>Every request and response is logged, so a failed sync is always traceable and retryable.</span>
              </div>
              <div className="compliance__item">
                <b>Tax registers &amp; reports</b>
                <span>Sales-tax registers, party-wise breakdowns and withholding summaries, exportable for filing.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="case-split">
            <div data-reveal="">
              <span className="eyebrow">How it's built</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>One product. A branded workspace for every company.</h2>
              <p style={{ marginTop: "1.1rem", color: "var(--muted)" }}>Cargonio is multi-tenant by design. Every client company gets its own isolated workspace, with its own data, users, invoice numbering, tax settings and branding, all running on a single platform we maintain and improve for everyone at once.</p>
              <p style={{ color: "var(--muted)" }}>That means a new freight company can be onboarded in days rather than months, and every client benefits from every improvement we ship.</p>
            </div>
            <ul className="feature-list" data-reveal="" data-reveal-delay="1">
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Complete tenant isolation</b><em>Each company's data is fenced off at the database level</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Modules switched on per client</b><em>Each workspace shows only the modules it's granted</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Per-company settings</b><em>Tax IDs, credentials, invoice prefixes &amp; defaults</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Supported by us, directly</b><em>We build it, host it, and support the people using it</em></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">Built for the books</span>
            <h2 className="section__title">Controls an accountant will actually trust.</h2>
            <p className="section__sub">Freight software isn't just operations: it's money. Cargonio treats every document like an auditable financial record.</p>
          </div>
          <div className="mod-grid">
            <article className="mod" data-reveal="">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16M4 12h16M4 19h10"/><circle cx="19" cy="19" r="3"/></svg></div>
              <h3>Draft → Checked → Final</h3>
              <p>Every invoice, credit note and voucher moves through a review workflow. Finalising posts it to the general ledger; un-finalising reverses that posting cleanly.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="1">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18v12H3z"/><path d="M3 6l9 7 9-7"/><path d="M7 21l4-4 4 4"/></svg></div>
              <h3>Voided, never deleted</h3>
              <p>Finalised documents can be voided but never erased: the number and its charge lines stay on file, so the audit trail is never broken.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="2">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
              <h3>Period locking</h3>
              <p>Close a period and nothing can be posted back into it: month-end and year-end stay final once they're signed off.</p>
            </article>
            <article className="mod" data-reveal="">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>
              <h3>Fiscal year &amp; branch context</h3>
              <p>Work inside a chosen year and station: every job list, document and report narrows to that context, with per-branch job numbering.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="1">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22"/><path d="M5 6h9a3.5 3.5 0 0 1 0 7H8a3.5 3.5 0 0 0 0 7h11"/></svg></div>
              <h3>Multi-currency, one ledger</h3>
              <p>Bill in any currency at the day's rate: every figure is stored with its base-currency twin, so the trial balance never mixes dollars with rupees.</p>
            </article>
            <article className="mod" data-reveal="" data-reveal-delay="2">
              <div className="mod__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
              <h3>Rights, not just roles</h3>
              <p>Fifteen distinct rights per screen: view, add, edit, print, check, final, void, un-void, email, approve, so you control exactly who can do what.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">In production</span>
            <h2 className="section__title">Running real freight businesses.</h2>
            <p className="section__sub">Cargonio isn't a concept: it's the system our clients invoice their customers and file their government taxes with, every day.</p>
          </div>
          <div className="case-grid">
            <Link className="case-card" href="/work/skyline-cargo/" data-reveal="">
              <div className="case-card__cover">
                <span className="case-card__badge"><span className="pill__dot"></span> Client #1 · live</span>
                <img className="cover" src="/assets/img/cases/cargonio-demo-jobs-1200.jpg" alt="Sea export jobs on Cargonio: parties, vessels, destinations and statuses" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">Logistics · Pakistan</span>
                <h3 className="case-card__title">Skyline Cargo Marketing</h3>
                <p className="case-card__desc">A Lahore freight forwarder running sea &amp; air import/export operations, invoicing and government-fiscalized tax reporting on Cargonio.</p>
                <span className="case-card__link">Read the case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>
            <Link className="case-card" href="/work/kare-cargo/" data-reveal="" data-reveal-delay="1">
              <div className="case-card__cover">
                <span className="case-card__badge"><span className="pill__dot"></span> Client #2 · live</span>
                <img className="cover" src="/assets/img/cases/cargonio-demo-invoices-1200.jpg" alt="Freight invoicing on Cargonio: totals with tax, statuses and fiscal filing" loading="lazy"/>
              </div>
              <div className="case-card__body">
                <span className="case-card__meta">Logistics · Pakistan</span>
                <h3 className="case-card__title">Kare Cargo International</h3>
                <p className="case-card__desc">Running the full stack on Cargonio: freight operations and invoicing plus HR, payroll and accounts, on the same platform.</p>
                <span className="case-card__link">Read the case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal="">
            <h2 className="cta__title">Run a freight business?</h2>
            <p className="cta__sub">See Cargonio on your own shipments and invoices: we'll walk you through a live demo and set up a workspace for your company.</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">Request a demo{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <a className="btn btn--ghost btn--lg" href="https://wa.me/923203271071?text=Hi%20CodeSumMix%20%E2%80%94%20I%27d%20like%20a%20Cargonio%20demo." target="_blank" rel="noopener">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
