"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps a server-rendered .feature-flow list and walks a soft highlight down
 * its items while the list is in view. Motion-reduced users get the static list.
 */
export default function FeatureFlowList({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const list = ref.current;
    if (!list || !("IntersectionObserver" in window)) return;
    const items = Array.from(list.querySelectorAll("li"));
    if (!items.length) return;
    let i = -1;
    let timer: ReturnType<typeof setInterval> | null = null;
    const step = () => {
      items.forEach((li) => li.classList.remove("is-lit"));
      i = (i + 1) % items.length;
      items[i].classList.add("is-lit");
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !timer) {
            step();
            timer = setInterval(step, 1800);
          } else if (!entry.isIntersecting && timer) {
            clearInterval(timer);
            timer = null;
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(list);
    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <ul className="feature-list feature-flow" data-stagger ref={ref}>
      {children}
    </ul>
  );
}
