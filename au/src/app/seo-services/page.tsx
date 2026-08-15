import type { Metadata } from "next";
import AuPage from "@/components/AuPage";
import { PackagesTeaser, ProcessSteps } from "@/components/sections";
import { getPage } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

const page = getPage("seo-services");

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: page.keywords,
  alternates: { canonical: `${SITE_URL}/seo-services/` },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${SITE_URL}/seo-services/`,
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
    <AuPage page={page} path="/seo-services/">
      <ProcessSteps alt />
      <PackagesTeaser />
    </AuPage>
  );
}
