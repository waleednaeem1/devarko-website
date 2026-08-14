import Link from "next/link";
import Year from "@/components/Year";

const SERVICE_LINKS = [
  { href: "/edtech/", label: "EdTech Development" },
  { href: "/freight-software/", label: "Freight Software" },
  { href: "/cargonio/", label: "Cargonio ERP" },
  { href: "/services/custom-software/", label: "Custom Software" },
  { href: "/services/ai-solutions/", label: "AI Solutions" },
  { href: "/services/web-applications/", label: "Web & Mobile Apps" },
  { href: "/services/crm-solutions/", label: "CRM Solutions" },
  { href: "/services/cloud-devops/", label: "Cloud & DevOps" },
];

const COMPANY_LINKS = [
  { href: "/about/", label: "About" },
  { href: "/team/", label: "Team" },
  { href: "/work/", label: "Work" },
  { href: "/careers/", label: "Careers" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="brand" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/logo.svg?v=4" alt="" />
              <span className="brand__name">
                Dev<b>arko</b>
              </span>
            </Link>
            <p>
              We design and build custom web, mobile, AI and cloud products. Education
              technology and freight are where we go deepest.
            </p>
            <div className="footer__social">
              <a
                href="https://www.linkedin.com/company/devarko"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z" />
                </svg>
              </a>
              <a href="mailto:info@devarko.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            {SERVICE_LINKS.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            {COMPANY_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <h4>Get in touch</h4>
            <a href="mailto:info@devarko.com">info@devarko.com</a>
            <a href="tel:+923203271071">+92 320 3271071</a>
            <a href="https://www.linkedin.com/company/devarko" target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a
              className="footer__map"
              href="https://www.google.com/maps/search/?api=1&query=Lahore%2C+Pakistan"
              target="_blank"
              rel="noopener"
              aria-label="Devarko in Lahore, Pakistan, on Google Maps"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/map-lahore.jpg?v=1"
                width={720}
                height={440}
                alt="Map of Lahore, Pakistan, where the Devarko team is based"
                loading="lazy"
              />
              <span className="footer__map-cap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Lahore, Pakistan
              </span>
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            &copy; <Year /> Devarko. All rights reserved.
          </span>
          <span>Designed &amp; built by Devarko.</span>
        </div>
      </div>
    </footer>
  );
}
