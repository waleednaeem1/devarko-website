"use client";

import { useEffect, useRef, useState } from "react";

export default function WebBuildMock() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / 900);
      setScore(Math.round((1 - Math.pow(1 - p, 3)) * 99));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const to = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 1400);
    return () => {
      clearTimeout(to);
      cancelAnimationFrame(raf);
    };
  }, [inView]);

  return (
    <section className="section section--tight webbuild" ref={ref} aria-label="How a build comes together">
      <div className="container">
        <div className="section__head section__head--center" data-reveal>
          <span className="eyebrow">From code to live</span>
          <h2 className="section__title">Watch a site come together.</h2>
          <p className="section__sub">
            Every piece is hand-coded and assembled to be fast from the first line, not bolted on
            later.
          </p>
        </div>

        <div className={`buildmock${inView ? " is-in" : ""}`} data-reveal data-reveal-delay="1" aria-hidden="true">
          <div className="buildmock__bar">
            <span className="buildmock__dot"></span>
            <span className="buildmock__dot"></span>
            <span className="buildmock__dot"></span>
            <i className="buildmock__url">
              yoursite.com.au<b className="buildmock__caret"></b>
            </i>
          </div>

          <div className="buildmock__body">
            <div className="bm-nav">
              <span className="bm-logo"></span>
              <span className="bm-links">
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="bm-pill"></span>
            </div>

            <div className="bm-hero">
              <span className="bm-h bm-h--1"></span>
              <span className="bm-h bm-h--2"></span>
              <span className="bm-sub"></span>
              <div className="bm-cta">
                <span className="bm-btn bm-btn--primary"></span>
                <span className="bm-btn bm-btn--ghost"></span>
              </div>
            </div>

            <div className="bm-cards">
              <span className="bm-card"></span>
              <span className="bm-card"></span>
              <span className="bm-card"></span>
            </div>
          </div>

          <div className="buildmock__meter">
            <span className="buildmock__meter-label">PageSpeed</span>
            <span className="buildmock__meter-score">{score}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
