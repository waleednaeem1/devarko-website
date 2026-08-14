import type { Metadata } from "next";
import CareersList from "@/components/careers/CareersList";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

const TITLE = "Software Jobs in Lahore | Careers | Devarko";
const DESCRIPTION =
  "Software jobs in Lahore at a nine-person studio: Laravel, React, React Native, QA and DevOps roles with real client products and no layers of management.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "software jobs Lahore, software house jobs Pakistan, Laravel developer jobs, React developer jobs Lahore, PHP developer jobs Pakistan, QA engineer jobs Lahore, DevOps jobs Pakistan, software internships Lahore, careers at Devarko",
  alternates: { canonical: `${SITE_URL}/careers/` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/careers/`, type: "website", siteName: "Devarko", locale: "en_US", images: [{ url: "https://devarko.com/assets/og/careers.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["https://devarko.com/assets/og/careers.jpg"] },
};

export default function CareersPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers/` },
          ],
        }}
      />
      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Careers
          </span>
          <h1 data-reveal data-reveal-delay="1">
            Build the future of software with us.
          </h1>
          <p data-reveal data-reveal-delay="2">
            We're a software studio with deep roots in education technology and AI. If you love
            building products that real people rely on, we'd love to meet you.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem,4vw,3rem)" }}>
        <div className="container">
          <CareersList />
        </div>
      </section>
    </main>
  );
}
