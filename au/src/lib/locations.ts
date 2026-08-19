import locationsJson from "@/content/au-locations.json";

export interface LocSection {
  h2: string;
  paragraphs: string[];
}
export interface LocFaq {
  q: string;
  a: string;
}
export interface LocationPageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  lede: string;
  sections: LocSection[];
  faqs: LocFaq[];
  ctaTitle: string;
  ctaSub: string;
}

export const locations = locationsJson as LocationPageContent[];

export function getLocation(slug: string): LocationPageContent | undefined {
  return locations.find((l) => l.slug === slug);
}
