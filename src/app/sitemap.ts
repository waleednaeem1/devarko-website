import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const BUILD_DATE = new Date();

interface Entry {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const CORE: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/cargonio/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/edtech/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/freight-software/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/team/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/careers/", priority: 0.5, changeFrequency: "weekly" },
];

const CASES = [
  "bright-future",
  "ilmversity",
  "dvm-central",
  "vetpet-central",
  "vetandtech",
  "skyline-cargo",
  "kare-cargo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...CORE.map((e) => ({
      url: `${SITE_URL}${e.path}`,
      lastModified: BUILD_DATE,
      changeFrequency: e.changeFrequency,
      priority: e.priority,
    })),
    ...CASES.map((slug) => ({
      url: `${SITE_URL}/work/${slug}/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}/`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
