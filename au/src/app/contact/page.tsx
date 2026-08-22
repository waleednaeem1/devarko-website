import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { rich } from "@/components/AuPage";
import { getPage } from "@/lib/pages";
import { AU_ADDRESS, AU_MAPS_URL, AU_PHONE, AU_PHONE_TEL, SITE_URL } from "@/lib/site";

const page = getPage("contact");

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: page.keywords,
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${SITE_URL}/contact/`,
    type: "website",
    siteName: "Devarko",
    locale: "en_AU",
    images: [{ url: `${SITE_URL}/assets/og/contact.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
    images: [`${SITE_URL}/assets/og/contact.jpg`],
  },
};

const STEPS = [
  "A reply within one business day, from the founder.",
  "A short call to understand what you need.",
  "A fixed-price proposal you can say yes or no to.",
];

export default function Page() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((f) => ({
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
            { "@type": "ListItem", position: 2, name: page.h1, item: `${SITE_URL}/contact/` },
          ],
        }}
      />

      <section className="page-hero page-hero--tight">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Devarko Australia
          </span>
          <h1 data-reveal data-reveal-delay="1">
            {page.h1}
          </h1>
          <p data-reveal data-reveal-delay="2">
            A website, better search visibility, or both. The fastest way to find out if we are a
            fit is a short conversation.
          </p>
        </div>
      </section>

      <section className="section section--tight section--flush">
        <div className="container">
          <div className="contact-grid">
            <div data-reveal>
              <ContactForm />
            </div>
            <div className="contact-info" data-reveal data-reveal-delay="1">
              <div className="contact-info__item">
                <span className="ico">@</span>
                <div>
                  <b>Email</b>
                  <a href="mailto:info@devarko.com">info@devarko.com</a>
                </div>
              </div>
              <div className="contact-info__item">
                <span className="ico">☎</span>
                <div>
                  <b>Phone</b>
                  <a href={`tel:${AU_PHONE_TEL}`}>{AU_PHONE}</a>
                </div>
              </div>
              <div className="contact-info__item">
                <span className="ico">⌖</span>
                <div>
                  <b>Based in</b>
                  <a href={AU_MAPS_URL} target="_blank" rel="noopener">
                    {AU_ADDRESS}
                  </a>
                </div>
              </div>
              <div className="contact-next">
                <h4>What happens next</h4>
                <ol>
                  {STEPS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {page.sections.map((s, si) => (
        <section
          className={`section section--tight${si % 2 === 0 ? " section--alt" : ""}`}
          key={s.h2}
        >
          <div className="container">
            <div className="section__head" data-reveal>
              <h2 className="section__title">{s.h2}</h2>
            </div>
            <div className="post-body" style={{ maxWidth: "780px", marginInline: "0" }}>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{rich(p)}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--tight">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="section__title">Good things to ask us.</h2>
          </div>
          <div className="faq" data-reveal>
            {page.faqs.map((f, i) => (
              <details name="faq" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <div className="faq__a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
