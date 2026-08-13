import servicesJson from "@/content/services.json";

export interface ServiceStat {
  value: string;
  label: string;
}
export interface ServiceBullet {
  title: string;
  desc: string;
}
export interface ServiceCard {
  title: string;
  desc: string;
}
export interface ServiceStep {
  title: string;
  desc: string;
}
export interface ServiceFaq {
  q: string;
  a: string;
}
export interface Service {
  slug: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  h1: string;
  lede: string;
  stats: ServiceStat[];
  overview: { heading: string; paragraphs: string[]; bullets: ServiceBullet[] };
  capabilities: ServiceCard[];
  process: ServiceStep[];
  stack: string[];
  faqs: ServiceFaq[];
  ctaTitle: string;
  ctaSub: string;
}

export const services = servicesJson as unknown as Service[];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function otherServices(slug: string): Service[] {
  return services.filter((s) => s.slug !== slug);
}
