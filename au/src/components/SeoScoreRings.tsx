"use client";

import { useEffect, useRef, useState } from "react";

const SCORES = [
  { label: "Performance", value: 99 },
  { label: "SEO", value: 100 },
  { label: "Best Practices", value: 100 },
  { label: "Accessibility", value: 98 },
];

const R = 54;
const C = 2 * Math.PI * R;

function Ring({ label, value, active, delay }: { label: string; value: number; active: boolean; delay: number }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let start = 0;
    const dur = 1200;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const to = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(to);
      cancelAnimationFrame(raf);
    };
  }, [active, value, delay]);

  const offset = active ? C * (1 - n / 100) : C;

  return (
    <div className="ring">
      <div className="ring__gauge">
        <svg viewBox="0 0 130 130" aria-hidden="true">
          <circle cx="65" cy="65" r={R} className="ring__track" />
          <circle
            cx="65"
            cy="65"
            r={R}
            className="ring__bar"
            style={{ strokeDasharray: C, strokeDashoffset: offset }}
          />
        </svg>
        <span className="ring__num">{n}</span>
      </div>
      <span className="ring__label">{label}</span>
    </div>
  );
}

export default function SeoScoreRings() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section section--tight scoreband" ref={ref} aria-label="Lighthouse scores">
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <linearGradient id="ringgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5b4dff" />
            <stop offset="1" stopColor="#36c9b0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container">
        <div className="section__head section__head--center" data-reveal>
          <span className="eyebrow">Proof, not promises</span>
          <h2 className="section__title">Our own site, scored on Google Lighthouse.</h2>
          <p className="section__sub">
            The same audit Google runs. We hold every client build to these numbers, because fast,
            clean code is where real SEO starts.
          </p>
        </div>
        <div className="rings" data-reveal data-reveal-delay="1">
          {SCORES.map((s, i) => (
            <Ring key={s.label} label={s.label} value={s.value} active={active} delay={i * 140} />
          ))}
        </div>
      </div>
    </section>
  );
}
