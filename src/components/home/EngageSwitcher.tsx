"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, Tick } from "@/components/icons";

const CYCLE_MS = 5500;

const TABS = [
  {
    title: "Full Product Build",
    line: "One team owns your product from the first sketch to launch day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    title: "Dedicated Team",
    line: "Senior engineers who plug into your team and ship with you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M16 7.5a2.6 2.6 0 0 1 0 5M21 20a5 5 0 0 0-4-4.9" />
      </svg>
    ),
  },
  {
    title: "Consulting & Advisory",
    line: "Straight answers from people who have shipped this before.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3z" />
      </svg>
    ),
  },
];

function MockTick() {
  return (
    <span className="mock-dot">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function EngageSwitcher() {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [barKey, setBarKey] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heldRef = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setHeld(true);
      return;
    }
    const wrap = wrapRef.current;
    if (!wrap || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !heldRef.current && !timerRef.current) {
            timerRef.current = setInterval(() => {
              setActive((a) => (a + 1) % TABS.length);
              setBarKey((k) => k + 1);
            }, CYCLE_MS);
          } else if (!entry.isIntersecting && timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(wrap);
    return () => {
      io.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const pick = (i: number) => {
    heldRef.current = true;
    setHeld(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setActive(i);
  };

  return (
    <div className="engage" data-reveal ref={wrapRef}>
      <div className={`engage__tabs${held ? " is-held" : ""}`} role="tablist" aria-label="Ways of working with CodeSumMix">
        {TABS.map((t, i) => (
          <button
            key={t.title}
            className={`engage-tab${active === i ? " is-active" : ""}`}
            role="tab"
            aria-selected={active === i}
            aria-controls={`engage-panel-${i + 1}`}
            id={`engage-tab-${i + 1}`}
            onClick={() => pick(i)}
          >
            <span className="engage-tab__icon">{t.icon}</span>
            <span>
              <b>{t.title}</b>
              <span>{t.line}</span>
            </span>
            <span className="engage-tab__bar" aria-hidden="true" key={active === i ? barKey : undefined}></span>
          </button>
        ))}
      </div>
      <div className="engage__stage">
        <div
          className={`engage-panel${active === 0 ? " is-active" : ""}`}
          role="tabpanel"
          id="engage-panel-1"
          aria-labelledby="engage-tab-1"
        >
          <div>
            <h3>We build it. You launch it.</h3>
            <p>
              Bring us the idea and we handle everything else: product design, engineering, QA and
              the launch itself. You get one accountable team and a working demo every single week,
              so there are never any surprises at the end.
            </p>
            <ul className="engage-panel__list">
              <li>
                <Tick />
                Design, development, QA and launch under one roof
              </li>
              <li>
                <Tick />
                Weekly demos of real, working software
              </li>
              <li>
                <Tick />
                Support that continues well past release day
              </li>
            </ul>
            <Link className="card__link" href="/contact/">
              Start a build <ArrowIcon />
            </Link>
          </div>
          <div className="engage-mock" aria-hidden="true">
            <div className="mock-row">
              <MockTick />
              <span>
                <b>Design approved</b>
                <span>Week 2 · prototype signed off</span>
              </span>
            </div>
            <div className="mock-row">
              <MockTick />
              <span>
                <b>Build in progress</b>
                <span>Sprint 4 · demo every Friday</span>
              </span>
            </div>
            <div className="mock-bar">
              <i style={{ width: "8%" }}></i>
            </div>
            <div className="mock-row">
              <span className="mock-dot mock-dot--pulse">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span>
                <b>Launch</b>
                <span>Store review &amp; go-live, handled</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className={`engage-panel${active === 1 ? " is-active" : ""}`}
          role="tabpanel"
          id="engage-panel-2"
          aria-labelledby="engage-tab-2"
        >
          <div>
            <h3>Your roadmap, our engineers.</h3>
            <p>
              Already have a product and a team? We add the muscle. Our senior engineers and
              designers join your standups, work in your tools, follow your process and start
              shipping in their first week.
            </p>
            <ul className="engage-panel__list">
              <li>
                <Tick />
                Hand-picked seniors, never a random bench
              </li>
              <li>
                <Tick />
                They work inside your workflow and your tools
              </li>
              <li>
                <Tick />
                Scale up or down as the roadmap changes
              </li>
            </ul>
            <Link className="card__link" href="/team/">
              Meet the team <ArrowIcon />
            </Link>
          </div>
          <div className="engage-mock" aria-hidden="true">
            <div className="mock-avatars">
              <span className="av av--1">AK</span>
              <span className="av av--2">HM</span>
              <span className="av av--3">SR</span>
              <span className="av av--4">ZT</span>
              <span className="av av--ghost">+You</span>
            </div>
            <div className="mock-row">
              <MockTick />
              <span>
                <b>Sprint board</b>
                <span>14 tickets closed this week</span>
              </span>
            </div>
            <div className="mock-chip">
              <i></i> 2 engineers embedded &amp; shipping
            </div>
          </div>
        </div>
        <div
          className={`engage-panel${active === 2 ? " is-active" : ""}`}
          role="tabpanel"
          id="engage-panel-3"
          aria-labelledby="engage-tab-3"
        >
          <div>
            <h3>Borrow our scars, skip the mistakes.</h3>
            <p>
              Sometimes you don't need more hands, you need a second opinion. We review
              architectures, audit codebases and help you choose a stack you won't regret in two
              years. Especially useful before a big rebuild or a funding round.
            </p>
            <ul className="engage-panel__list">
              <li>
                <Tick />
                Architecture &amp; code reviews with a written report
              </li>
              <li>
                <Tick />
                Tech-stack and product strategy sessions
              </li>
              <li>
                <Tick />
                Fractional CTO support while you hire
              </li>
            </ul>
            <Link className="card__link" href="/contact/">
              Book a session <ArrowIcon />
            </Link>
          </div>
          <div className="engage-mock" aria-hidden="true">
            <div className="mock-row">
              <MockTick />
              <span>
                <b>Architecture review</b>
                <span>27-page report, delivered</span>
              </span>
            </div>
            <div className="mock-row">
              <MockTick />
              <span>
                <b>Stack decision</b>
                <span>Options scored, risks named</span>
              </span>
            </div>
            <div className="mock-chip">
              <i></i> Fractional CTO on call
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
