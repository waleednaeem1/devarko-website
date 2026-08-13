import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Freight ERP with HR and Payroll | Kare Cargo | CodeSumMix",
  description:
    "Kare Cargo International runs its whole freight business on one ERP: air and sea operations, e-invoicing, double-entry accounts, HR and payroll in one login.",
  keywords:
    "freight ERP with HR and payroll, freight ERP Pakistan, logistics ERP software, HR and payroll software, freight accounting software, double-entry accounting software, PRA FBR integration, e-invoicing Pakistan, ERP development, freight forwarding specialists, Kare Cargo case study, Cargonio, CodeSumMix",
  alternates: { canonical: "https://codesummix.com/work/kare-cargo/" },
  openGraph: { title: "Freight ERP with HR and Payroll | Kare Cargo | CodeSumMix", description: "Kare Cargo International runs its whole freight business on one ERP: air and sea operations, e-invoicing, double-entry accounts, HR and payroll in one login.", url: "https://codesummix.com/work/kare-cargo/", type: "article", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/og/work-kare-cargo.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Freight ERP with HR and Payroll | Kare Cargo | CodeSumMix", description: "Kare Cargo International runs its whole freight business on one ERP: air and sea operations, e-invoicing, double-entry accounts, HR and payroll in one login.", images: ["https://codesummix.com/assets/og/work-kare-cargo.jpg"] },
};

export default function KareCargoPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://codesummix.com/" },
            { "@type": "ListItem", position: 2, name: "Work", item: "https://codesummix.com/work/" },
            {
              "@type": "ListItem",
              position: 3,
              name: "Kare Cargo International",
              item: "https://codesummix.com/work/kare-cargo/",
            },
          ],
        }}
      />
      <section
        style={{
          paddingTop: "clamp(8.75rem,15vh,11.5rem)",
          paddingBottom: "clamp(1.5rem,3vw,2.5rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="page-hero__glow"></div>
        <div className="container">
          <Link className="case-back" href="/work/">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>{" "}
            All work
          </Link>
          <span className="eyebrow">Case study · Logistics · Pakistan</span>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", marginTop: "0.7rem" }}>
            Kare Cargo International: the whole business on one platform
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: "720px", marginTop: "1rem", fontSize: "1.08rem" }}>
            Most freight companies run their shipments in one system, their staff in a spreadsheet, and their books in
            another. Kare Cargo International wanted none of that. They went live on{" "}
            <Link href="/cargonio/" style={{ color: "var(--accent-ink)", fontWeight: 600 }}>
              Cargonio
            </Link>{" "}
            with the full stack from day one: sea and air operations, invoicing with government tax integration, and the
            entire back office of HR, payroll and accounts in the same place.
          </p>
          <div className="feature-case__chips" style={{ marginTop: "1.4rem" }}>
            <span>Sea &amp; Air</span>
            <span>Import &amp; Export</span>
            <span>Invoicing</span>
            <span>PRA &amp; FBR e-IMS</span>
            <span>Freight ERP</span>
            <span>HR &amp; Payroll</span>
            <span>Accounts</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">One workspace</span>
            <h2 className="section__title">Every department, one login.</h2>
            <p className="section__sub">
              Operations, finance and people management sit side by side in a single branded workspace, so the owner
              sees the whole company from one screen instead of chasing four systems.
            </p>
          </div>
          <div className="shot" data-reveal>
            <img
              src="/assets/img/cases/cargonio-demo-home.jpg"
              alt="Kare Cargo Logistics company home: active jobs, outstanding invoices, income, net position, active employees and staff on leave"
              loading="lazy"
            />
          </div>
          <p className="shot-cap" data-reveal>
            Company Home: active jobs, outstanding invoices, income and net position for the month, alongside headcount
            and who&apos;s on leave today.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">Freight operations</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                Built around how forwarders actually work.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                Their team books <Link href="/freight-software/">sea and air jobs</Link>, imports and exports alike, straight from the dashboard: a new sea
                export job, a MAWB job, an air import, a quotation, or a pull from AWB stock. Each job carries its
                master and house documents, containers, parties and charges through to invoicing.
              </p>
              <p>
                Because billing is wired into the accounting core, an invoice raised on a shipment lands in the ledger
                the moment it&apos;s finalised, and reports to the government&apos;s tax systems without anyone
                re-typing it into a portal.
              </p>
            </div>
            <ul className="feature-list" data-reveal data-reveal-delay="1">
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Four lanes, one job book</b>
                  <em>Air &amp; sea, export &amp; import in a single record set</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Quotation to job</b>
                  <em>Win a quote, convert it to a live shipment</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Invoicing tied to the shipment</b>
                  <em>Charges, currencies and credit notes on the job</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>PRA &amp; FBR e-IMS</b>
                  <em>Tax reported from the same screen</em>
                </span>
              </li>
            </ul>
          </div>
          <div className="shot" data-reveal style={{ marginTop: "2rem" }}>
            <img
              src="/assets/img/cases/cargonio-demo-jobs.jpg"
              alt="Sea export jobs on Cargonio, shown in the live demo workspace: parties, vessels, destinations, sail dates and statuses"
              loading="lazy"
            />
          </div>
          <p className="shot-cap" data-reveal>
            The jobs register, shown here in Cargonio&apos;s live demo with sample data: every shipment carries its
            party, vessel, destination and status from open to closed.
          </p>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">The back office</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                People and payroll, not an afterthought.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                This is where Kare Cargo&apos;s rollout goes further than freight. Their HR module runs employees,
                departments, attendance and leave approvals, appreciations, company policies and offboarding, and
                payroll runs off the same records, so a month&apos;s salaries reconcile against the same books the
                shipments bill into.
              </p>
              <p>
                Staff get their own portal too: clock in, request leave, check remaining balances and pull payslips
                without going through an administrator.
              </p>
            </div>
            <ul className="feature-list" data-reveal data-reveal-delay="1">
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Employees &amp; departments</b>
                  <em>Records, designations, contracts &amp; policies</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Attendance &amp; leave</b>
                  <em>Daily marking, balances &amp; approval flow</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Payroll &amp; payslips</b>
                  <em>Monthly runs, increments &amp; pre-payments</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Accounts &amp; reporting</b>
                  <em>A double-entry ledger under the whole business</em>
                </span>
              </li>
            </ul>
          </div>
          <div className="shot" data-reveal style={{ marginTop: "2rem" }}>
            <img
              src="/assets/img/cases/cargonio-demo-hr.jpg"
              alt="The Cargonio HR dashboard in the live demo workspace: headcount, attendance, leave and payroll at a glance"
              loading="lazy"
            />
          </div>
          <p className="shot-cap" data-reveal>
            The HR dashboard: headcount, today&apos;s attendance, pending leave and resignation requests, upcoming
            holidays and monthly payroll at a glance.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">Why it went live quickly</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                A product, not a rebuild.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                Kare Cargo didn&apos;t wait for a system to be written from scratch. Because Cargonio is a <Link href="/services/custom-software/">multi-tenant product</Link>, they were given their own isolated workspace, with their data, their users, their invoice
                numbering, their tax settings and their branding, switched on with exactly the modules they needed.
              </p>
              <p>
                That&apos;s the difference between commissioning software and adopting it: they inherited everything
                already proven with our first freight client, and every improvement we ship from here reaches them
                automatically.
              </p>
              <Link className="card__link" href="/cargonio/" style={{ marginTop: "1.3rem" }}>
                Explore the Cargonio platform{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <ul className="feature-list" data-reveal data-reveal-delay="1">
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Own isolated workspace</b>
                  <em>Their data fenced off from every other client</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Their own settings</b>
                  <em>Tax IDs, invoice prefixes, branch &amp; fiscal year</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Roles that match the team</b>
                  <em>Each user sees only their own screens</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Improvements arrive free</b>
                  <em>One platform, maintained for everyone</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Run a freight company?</h2>
            <p className="cta__sub">
              Operations, invoicing, tax compliance, HR, payroll and accounts: we can have your workspace running on
              Cargonio too.
            </p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Request a demo{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/work/skyline-cargo/">
                See the Skyline case study
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
