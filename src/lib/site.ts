export const SITE_URL = "https://devarko.com";
export const SITE_NAME = "Devarko";
export const GSC_TOKEN = "fDKv5lr4SHsABkHuOuhuNKrJRsX0ZEbBDc4P1kvFKj0";
export const GA4_ID = "G-V0SX4RYSTY";
export const GTM_ID = "GTM-TDKV5XPW";
export const WHATSAPP_URL =
  "https://wa.me/923203271071?text=" +
  encodeURIComponent("Hi Devarko, I'd like to discuss a project.");

export const AU_PHONE = "+61 475 720 769";
export const AU_PHONE_TEL = "+61475720769";
export const AU_ADDRESS = "Hobart, Tasmania, Australia";
export const AU_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Hobart, Tasmania, Australia");
export const PK_PHONE = "+92 320 3271071";
export const PK_PHONE_TEL = "+923203271071";

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
