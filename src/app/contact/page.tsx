import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

const TITLE = "Hire Software Developers in Pakistan | Devarko";
const DESCRIPTION =
  "Talk to Devarko about your build. Email info@devarko.com or call +92 320 3271071 to scope a project with a Lahore team that answers to its founder.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "hire software developers Pakistan, contact software house Lahore, hire Laravel developers, outsource software development Pakistan, hire React developers, dedicated developers Lahore, software project quote, software development company contact",
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/contact/`, type: "website", siteName: "Devarko", locale: "en_US", images: [{ url: "https://devarko.com/assets/og/contact.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["https://devarko.com/assets/og/contact.jpg"] },
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact/` },
          ],
        }}
      />

      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Contact
          </span>
          <h1 data-reveal data-reveal-delay="1">
            Let's build something great.
          </h1>
          <p data-reveal data-reveal-delay="2">
            Tell us what you're working on. We usually reply within one business day.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem,4vw,3rem)" }}>
        <div className="container">
          <div className="contact-grid">
            <div data-reveal>
              <ContactForm />
            </div>

            <div className="contact-info" data-reveal data-reveal-delay="1">
              <div className="contact-info__item">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <div>
                  <b>Email</b>
                  <a href="mailto:info@devarko.com">info@devarko.com</a>
                </div>
              </div>
              <div className="contact-info__item">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </span>
                <div>
                  <b>Phone / WhatsApp</b>
                  <a href="tel:+923203271071">+92 320 3271071</a>
                </div>
              </div>
              <div className="contact-info__item">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <b>Location</b>
                  <span className="v">Lahore, Pakistan</span>
                </div>
              </div>
              <div className="contact-info__item">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z" />
                  </svg>
                </span>
                <div>
                  <b>LinkedIn</b>
                  <a href="https://www.linkedin.com/company/devarko" target="_blank" rel="noopener">
                    Connect with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
