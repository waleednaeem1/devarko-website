import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Freight Forwarding Software Pakistan | Skyline Cargo",
  description:
    "See how we built freight forwarding software for a Pakistani forwarder: sea and air import-export, MBL/HBL invoicing and live PRA e-IMS tax filing.",
  keywords:
    "freight forwarding software Pakistan, logistics software Pakistan, freight forwarding specialists, sea import export software, MBL HBL invoicing, PRA e-IMS integration, FBR e-invoicing, e-invoicing Pakistan, custom software development, software house in Lahore, Skyline Cargo case study, CodeSumMix",
  alternates: { canonical: "https://codesummix.com/work/skyline-cargo/" },
  openGraph: { title: "Freight Forwarding Software Pakistan | Skyline Cargo", description: "See how we built freight forwarding software for a Pakistani forwarder: sea and air import-export, MBL/HBL invoicing and live PRA e-IMS tax filing.", url: "https://codesummix.com/work/skyline-cargo/", type: "article", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/img/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Freight Forwarding Software Pakistan | Skyline Cargo", description: "See how we built freight forwarding software for a Pakistani forwarder: sea and air import-export, MBL/HBL invoicing and live PRA e-IMS tax filing.", images: ["https://codesummix.com/assets/img/og-image.png"] },
};

export default function SkylineCargoPage() {
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
            {
              "@type": "ListItem",
              position: 3,
              name: "Skyline Cargo Marketing",
              item: "https://codesummix.com/work/skyline-cargo/",
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
          <span className="eyebrow">Case study · Logistics · Pakistan · Client #1</span>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", marginTop: "0.7rem" }}>
            Skyline Cargo Marketing: freight forwarding, digitized
          </h1>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: "720px",
              marginTop: "1rem",
              fontSize: "1.08rem",
            }}
          >
            For Skyline Cargo Marketing, a freight-forwarding company in Lahore, we built a platform
            that runs their sea and air import &amp; export operations end to end: job and shipment
            records with master &amp; house bills of lading, multi-currency invoicing, and direct
            integration with the government&apos;s{" "}
            <strong style={{ color: "var(--text)" }}>PRA &amp; FBR e-IMS</strong> systems for tax
            fiscalization, plus freight-ERP modules for HR, payroll, and accounts.
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
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">The platform</span>
            <h2 className="section__title">Every invoice, fiscalized with the government.</h2>
            <p className="section__sub">
              Invoices carry the full freight context: HBL/MBL, party, charges, and tax, and sync to
              the PRA &amp; FBR e-IMS systems with one click, returning an official fiscal invoice
              number.
            </p>
          </div>
          <div className="shot" data-reveal="">
            <img
              src="/assets/img/cases/cargonio-demo-freight.jpg"
              alt="The Cargonio freight dashboard, shown in the live demo workspace: jobs, shipments in transit, receivables and gross profit"
              loading="lazy"
            />
          </div>
          <div className="shot" data-reveal="" style={{ marginTop: "1.25rem" }}>
            <img
              src="/assets/img/cases/cargonio-demo-invoices.jpg"
              alt="Sea-export invoices in the Cargonio live demo: totals with tax, statuses from draft to paid, ready for PRA e-IMS filing"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal="">
              <span className="eyebrow">What we built</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                The system that became a product.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                The team records sea and air shipments: imports and exports, with master and house
                bills of lading, containers, parties, and charges in multiple currencies. Invoicing
                follows the freight workflow, and every invoice reports to the government
                automatically: tax is calculated, synced to the PRA &amp; FBR e-IMS systems, and
                stamped with an official fiscal number.
              </p>
              <p>
                Around the freight core sit full ERP modules: HR management, payroll, and accounts,
                while dashboards give the owners a live view of billing, tax collected, top
                customers, and fiscalization status, with Excel/CSV exports.
              </p>
              <p>
                Skyline now runs on{" "}
                <Link href="/cargonio/" style={{ color: "var(--accent-ink)", fontWeight: 600 }}>
                  Cargonio
                </Link>
                : the freight-forwarding ERP we productised from this work and now license to other
                forwarders.
              </p>
            </div>
            <ul className="feature-list" data-reveal="" data-reveal-delay="1">
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
                  <b>Sea &amp; air, import &amp; export</b>
                  <em>Jobs, shipments, MBL &amp; HBL records</em>
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
                  <b>Freight invoicing</b>
                  <em>Charges, containers &amp; multi-currency rates</em>
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
                  <b>PRA &amp; FBR e-IMS integration</b>
                  <em>One-click fiscalization with official invoice numbers</em>
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
                  <b>Tax calculation &amp; reporting</b>
                  <em>Sales tax calculated &amp; reported per invoice</em>
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
                  <b>Freight-ERP modules</b>
                  <em>HR management, payroll &amp; accounts</em>
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
                  <b>Business dashboard</b>
                  <em>Billing trends, top parties, charge mix &amp; sync status</em>
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
                  <b>Print-ready documents</b>
                  <em>Invoices &amp; receipts, plus Excel/CSV exports</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal="">
            <h2 className="cta__title">Run a logistics or freight business?</h2>
            <p className="cta__sub">
              Operations, invoicing, tax compliance, and reporting: we build systems that run the
              whole business.
            </p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a project{" "}
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
              <Link className="btn btn--ghost btn--lg" href="/work/">
                See more work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
