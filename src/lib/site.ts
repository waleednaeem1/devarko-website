export const SITE_URL = "https://codesummix.com";
export const SITE_NAME = "CodeSumMix";
export const GSC_TOKEN = "fDKv5lr4SHsABkHuOuhuNKrJRsX0ZEbBDc4P1kvFKj0";
export const GA4_ID = "G-V0SX4RYSTY";
export const GTM_ID = "GTM-TDKV5XPW";
export const WHATSAPP_URL =
  "https://wa.me/923203271071?text=" +
  encodeURIComponent("Hi CodeSumMix, I'd like to discuss a project.");

export const NAV_LINKS = [
  { href: "/services/", label: "Services" },
  { href: "/cargonio/", label: "Cargonio" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/team/", label: "Team" },
  { href: "/contact/", label: "Contact" },
  { href: "/careers/", label: "Careers" },
] as const;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
