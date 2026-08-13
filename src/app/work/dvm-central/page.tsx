import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "B2B Marketplace Development | DVM Central Case Study",
  description:
    "DVM Central connects veterinary clinics with suppliers across the USA. See how we built a B2B marketplace with catalogues, quoting and order workflows.",
  keywords:
    "B2B marketplace development, multi-vendor marketplace development, custom marketplace software, supplier portal development, e-commerce platform development, web application development, Laravel marketplace development, veterinary marketplace platform, software development agency, custom software development",
  alternates: { canonical: "https://codesummix.com/work/dvm-central/" },
  openGraph: { title: "B2B Marketplace Development | DVM Central Case Study", description: "DVM Central connects veterinary clinics with suppliers across the USA. See how we built a B2B marketplace with catalogues, quoting and order workflows.", url: "https://codesummix.com/work/dvm-central/", type: "article", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/img/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "B2B Marketplace Development | DVM Central Case Study", description: "DVM Central connects veterinary clinics with suppliers across the USA. See how we built a B2B marketplace with catalogues, quoting and order workflows.", images: ["https://codesummix.com/assets/img/og-image.png"] },
};

export default function DvmCentralPage() {
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
              name: "DVM Central",
              item: "https://codesummix.com/work/dvm-central/",
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
          <span className="eyebrow">Case study · E-commerce · USA</span>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", marginTop: "0.7rem" }}>
            DVM Central: a B2B veterinary marketplace
          </h1>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: "720px",
              marginTop: "1rem",
              fontSize: "1.08rem",
            }}
          >
            For a US client in Orlando, Florida, we built DVM Central: a
            veterinary marketplace that connects suppliers directly with
            practices. It brings the entire catalogue of veterinary products:
            surgical instruments, dental and diagnostic tools, imaging, and
            pharmaceuticals: into one fast, modern buying experience, with a
            dedicated portal for sellers.
          </p>
          <div className="feature-case__chips" style={{ marginTop: "1.4rem" }}>
            <span>Laravel</span>
            <span>Next.js</span>
            <span>Stripe</span>
            <span>DigitalOcean</span>
            <span>Docker</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">The marketplace</span>
            <h2 className="section__title">A full veterinary catalogue, online.</h2>
            <p className="section__sub">
              Thousands of products across surgery, dentistry, diagnostics,
              imaging, and pharma: searchable and filterable, with discounts,
              multi-vendor pricing, and a fast Stripe checkout.
            </p>
          </div>
          <div className="shot" data-reveal>
            <img
              src="/assets/img/cases/dvm-products-1000.jpg"
              alt="DVM Central storefront: browsing the veterinary product catalogue with brand and price filters"
              loading="lazy"
            />
          </div>
          <div className="case-shots" style={{ marginTop: "1.25rem" }}>
            <div className="shot" data-reveal>
              <img
                src="/assets/img/cases/dvm-product.jpg"
                alt="DVM Central product page: pricing, buy action, and Stripe secure checkout"
                loading="lazy"
              />
            </div>
            <div className="shot" data-reveal data-reveal-delay="1">
              <img
                src="/assets/img/cases/dvm-featured.jpg"
                alt="DVM Central: featured products grid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">What we built</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                A two-sided platform that scales.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                Buyers get a fast storefront with rich search and a smooth
                checkout. Sellers get their own portal to list products and
                manage orders, with no setup fees. Around it all, the platform
                adds a vendor directory, deals, virtual expos, and on-demand
                learning for the veterinary community.
              </p>
              <p>
                Engineered on a Laravel back end with a Next.js storefront,
                Stripe payments, and a Dockerised deployment on DigitalOcean:
                built for speed, SEO, and easy growth.
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
                  <b>Multi-vendor marketplace</b>
                  <em>Many sellers, one storefront</em>
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
                  <b>Seller portal</b>
                  <em>List products &amp; manage orders, no setup fees</em>
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
                  <b>Catalogue, search &amp; checkout</b>
                  <em>Thousands of products, fast browsing</em>
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
                  <b>Vendor directory</b>
                  <em>Discover suppliers &amp; service providers</em>
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
                  <b>Deals, expos &amp; CE learning</b>
                  <em>A hub for the veterinary community</em>
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
                  <b>Laravel + Next.js on Docker</b>
                  <em>Stripe payments, deployed on DigitalOcean</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Building a marketplace or store?</h2>
            <p className="cta__sub">
              From multi-vendor marketplaces to custom e-commerce: we design and
              build platforms that scale.
            </p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a project
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
