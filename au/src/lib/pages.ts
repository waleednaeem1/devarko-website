import pagesJson from "@/content/au-pages.json";

export interface AuBullet {
  title: string;
  desc: string;
}
export interface AuSection {
  h2: string;
  paragraphs: string[];
  bullets?: AuBullet[];
}
export interface AuFaq {
  q: string;
  a: string;
}
export interface AuPageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  lede: string;
  sections: AuSection[];
  faqs: AuFaq[];
  ctaTitle: string;
  ctaSub: string;
}

export const pages = pagesJson as AuPageContent[];

export function getPage(slug: string): AuPageContent {
  const p = pages.find((x) => x.slug === slug);
  if (!p) throw new Error(`missing AU page content: ${slug}`);
  return p;
}
