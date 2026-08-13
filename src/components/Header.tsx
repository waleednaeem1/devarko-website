"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <nav className={`nav${open ? " open" : ""}`} aria-label="Primary" ref={navRef}>
          <Link className="brand" href="/" aria-label="CodeSumMix home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/logo.svg?v=3" alt="" />
            <span className="brand__name">
              Code<b>SumMix</b>
            </span>
          </Link>
          <ul className="nav__links" id="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={isActive(l.href) ? "is-active" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="btn btn--primary" href="/contact/">
                Let&apos;s talk
              </Link>
            </li>
          </ul>
          <div className="nav__right">
            <Link className="btn btn--primary" href="/contact/">
              Let&apos;s talk
            </Link>
            <button
              className="nav__toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="nav-links"
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
