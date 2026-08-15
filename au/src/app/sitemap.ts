import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["/", "/web-development/", "/seo-services/", "/contact/"].map((p, i) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: i === 0 ? 1.0 : 0.8,
  }));
}
