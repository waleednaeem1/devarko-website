import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import AuPage from "@/components/AuPage";
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
    images: [{ url: `${SITE_URL}/assets/img/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
    images: [`${SITE_URL}/assets/img/og-image.png`],
  },
};

export default function Page() {
  return (
    <AuPage page={page} path="/contact/">
      <section className="section section--tight">
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
                  <b>Address</b>
                  <a href={AU_MAPS_URL} target="_blank" rel="noopener">
                    {AU_ADDRESS}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</AuPage>
  );
}
