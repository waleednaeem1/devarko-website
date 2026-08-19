import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPage from "@/components/LocationPage";
import { getLocation } from "@/lib/locations";
import { SITE_URL } from "@/lib/site";

const SLUG = "seo-hobart";
const page = getLocation(SLUG);

export const metadata: Metadata = page
  ? {
      title: page.metaTitle,
      description: page.metaDescription,
      keywords: page.keywords,
      alternates: { canonical: `${SITE_URL}/${SLUG}/` },
      openGraph: {
        title: page.metaTitle,
        description: page.metaDescription,
        url: `${SITE_URL}/${SLUG}/`,
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
    }
  : {};

export default function Page() {
  if (!page) notFound();
  return <LocationPage page={page} />;
}
