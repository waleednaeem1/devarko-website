"use client";

import { useEffect } from "react";
import { GA4_ID, GTM_ID } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __csmTagsFired?: boolean;
  }
}

/**
 * Loads GTM + GA4 after the page has painted (window load + 300ms) or on the
 * first user interaction, whichever comes first. Keeps ~280KB of tag JS out of
 * the critical path while still recording every real pageview.
 */
export default function Analytics() {
  useEffect(() => {
    if (window.__csmTagsFired) return;

    const fire = () => {
      if (window.__csmTagsFired) return;
      window.__csmTagsFired = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const gtm = document.createElement("script");
      gtm.async = true;
      gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(gtm);

      const ga = document.createElement("script");
      ga.async = true;
      ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(ga);

      function gtag(...args: unknown[]) {
        window.dataLayer!.push(args);
      }
      window.gtag = window.gtag || gtag;
      window.gtag("js", new Date());
      window.gtag("config", GA4_ID, { anonymize_ip: true });
    };

    const onLoad = () => setTimeout(fire, 300);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    const events: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, fire, { once: true, passive: true }));
    return () => {
      window.removeEventListener("load", onLoad);
      events.forEach((e) => window.removeEventListener(e, fire));
    };
  }, []);

  return null;
}
