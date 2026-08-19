import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./site.css";
import {
  AU_ADDRESS,
  AU_MAPS_URL,
  AU_PHONE,
  AU_PHONE_TEL,
  GSC_TOKEN,
  GTM_ID,
  MAIN_SITE,
  SITE_URL,
} from "@/lib/site";
import Analytics from "@/components/Analytics";
import AuHeader from "@/components/AuHeader";
import NewsletterForm from "@/components/NewsletterForm";
import RevealObserver from "@/components/RevealObserver";
import Year from "@/components/Year";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  generator: "Next.js",
  title: "Web Development & SEO for Australian Business | Devarko",
  description:
    "Devarko builds fast, search-ready websites and web apps for Australian businesses, backed by engineer-led SEO and a senior development studio.",
  authors: [{ name: "Devarko" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  verification: { google: GSC_TOKEN },
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "any" },
      { url: "/assets/img/logo.svg?v=5", type: "image/svg+xml" },
      { url: "/assets/img/favicon-96.png?v=5", sizes: "96x96", type: "image/png" },
      { url: "/assets/img/favicon-48.png?v=5", sizes: "48x48", type: "image/png" },
      { url: "/assets/img/favicon-32.png?v=5", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/favicon-16.png?v=5", sizes: "16x16", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico?v=5" }],
    apple: [{ url: "/assets/img/apple-touch-icon.png?v=2" }],
  },
  openGraph: {
    type: "website",
    siteName: "Devarko",
    locale: "en_AU",
    images: [{ url: `${SITE_URL}/assets/img/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [`${SITE_URL}/assets/img/og-image.png`] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preload" href="/assets/fonts/Inter-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/SpaceGrotesk-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/Inter-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AuHeader />
        {children}
        <footer className="site-footer">
          <div className="container">
            <div className="footer__news">
              <div>
                <h3>Get updates from the studio.</h3>
                <p>
                  New launches, case studies and practical product notes. No spam, and you can
                  unsubscribe any time.
                </p>
              </div>
              <NewsletterForm />
            </div>
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
                  Web development and SEO for Australian businesses, delivered by the senior
                  engineering studio behind seven production platforms.
                </p>
              </div>
              <div className="footer__col">
                <h4>Services</h4>
                <Link href="/web-development/">Web Development</Link>
                <Link href="/seo-services/">SEO Services</Link>
                <Link href="/packages/">Packages &amp; Pricing</Link>
                <a href={`${MAIN_SITE}/services/`} target="_blank" rel="noopener">
                  All services
                </a>
              </div>
              <div className="footer__col">
                <h4>Devarko</h4>
                <a href={`${MAIN_SITE}/work/`} target="_blank" rel="noopener">
                  Our work
                </a>
                <a href={`${MAIN_SITE}/cargonio/`} target="_blank" rel="noopener">
                  Cargonio ERP
                </a>
                <a href="https://www.linkedin.com/company/devarko" target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </div>
              <div className="footer__col">
                <h4>Get in touch</h4>
                <a href="mailto:info@devarko.com">info@devarko.com</a>
                <a href={`tel:${AU_PHONE_TEL}`}>{AU_PHONE}</a>
                <Link href="/contact/">Contact form</Link>
                <a
                  className="footer__map"
                  href={AU_MAPS_URL}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Devarko at ${AU_ADDRESS}, on Google Maps`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/img/map-hobart.jpg?v=1"
                    width={720}
                    height={440}
                    alt="Map of Hobart, Tasmania, where Devarko is based"
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
                    Hobart, Tasmania
                  </span>
                </a>
                <span className="footer__addr">Based in Hobart, Tasmania</span>
              </div>
            </div>
            <div className="footer__bottom">
              <span>
                &copy; <Year /> Devarko. All rights reserved.
              </span>
              <span>
                <a href={MAIN_SITE} style={{ color: "var(--muted)" }}>
                  devarko.com
                </a>
              </span>
            </div>
          </div>
        </footer>
        <Analytics />
        <RevealObserver />
      </body>
    </html>
  );
}
