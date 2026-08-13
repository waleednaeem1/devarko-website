import type { Metadata, Viewport } from "next";
import "./site.css";
import { SITE_URL, SITE_NAME, GSC_TOKEN, GTM_ID } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import RevealObserver from "@/components/RevealObserver";
import WaFab from "@/components/WaFab";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  generator: "Next.js",
  title: "Software House in Lahore | Custom Software Development",
  description:
    "CodeSumMix is a software house and development agency in Lahore building custom software, web and mobile apps, AI automation and EdTech platforms.",
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  verification: { google: GSC_TOKEN },
  icons: {
    icon: [
      { url: "/assets/img/logo.svg?v=3", type: "image/svg+xml" },
      { url: "/assets/img/favicon-32.png?v=1", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/favicon-16.png?v=1", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/assets/img/apple-touch-icon.png?v=1" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: `${SITE_URL}/assets/img/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/assets/img/og-image.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link
          rel="preload"
          href="/assets/fonts/Inter-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/SpaceGrotesk-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/Inter-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
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
        <Header />
        {children}
        <Footer />
        <WaFab />
        <Analytics />
        <RevealObserver />
      </body>
    </html>
  );
}
