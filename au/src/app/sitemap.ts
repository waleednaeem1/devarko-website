import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { locations } from "@/lib/locations";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ["/", "/web-development/", "/seo-services/", "/packages/", "/contact/", "/blog/"];
  const locs = locations.map((l) => `/${l.slug}/`);
  const blog = posts.map((p) => `/blog/${p.slug}/`);
  const all = [...core, ...locs, ...blog];
  return all.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1.0 : 0.8,
  }));
}
