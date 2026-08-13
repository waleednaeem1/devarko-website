#!/usr/bin/env python3
"""Render CodeSumMix service detail pages from structured JSON content.

One template -> N pages, so every service page is visually identical
and only the words change. Run:  python3 _build/render_services.py content.json
"""
import json, sys, os, html, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS_V = "34"

NAV = [("/services/","Services"),("/cargonio/","Cargonio"),("/work/","Work"),
       ("/about/","About"),("/team/","Team"),("/contact/","Contact"),("/careers/","Careers")]

def e(s):
    return html.escape(str(s), quote=False).replace("&amp;#", "&#")

def esc_attr(s):
    return html.escape(str(s), quote=True)

def nav_html():
    items = "".join(
        f'\n          <li><a href="{h}"{" class=\"is-active\"" if h=="/services/" else ""}>{t}</a></li>'
        for h, t in NAV)
    return f"""  <header class="site-header">
    <div class="container">
      <nav class="nav" aria-label="Primary">
        <a class="brand" href="/" aria-label="CodeSumMix home"><img src="/assets/img/logo.svg?v=3" alt=""><span class="brand__name">Code<b>SumMix</b></span></a>
        <ul class="nav__links">{items}
          <li><a class="btn btn--primary" href="/contact/">Let's talk</a></li>
        </ul>
        <div class="nav__right">
          <a class="btn btn--primary" href="/contact/">Let's talk</a>
          <button class="nav__toggle" aria-label="Toggle menu" aria-expanded="false"><span></span></button>
        </div>
      </nav>
    </div>
  </header>"""

FOOTER = """  <footer class="site-footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a class="brand" href="/"><img src="/assets/img/logo.svg?v=3" alt=""><span class="brand__name">Code<b>SumMix</b></span></a>
          <p>We design and build custom web, mobile, AI and cloud products. Education technology and freight are where we go deepest.</p>
          <div class="footer__social">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z"/></svg></a>
            <a href="mailto:info@codesummix.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Services</h4>
          <a href="/cargonio/">Cargonio ERP</a>
          <a href="/services/custom-software/">Custom Software</a>
          <a href="/services/ai-solutions/">AI Solutions</a>
          <a href="/services/web-applications/">Web Applications</a>
          <a href="/services/mobile-apps/">Mobile Apps</a>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <a href="/about/">About</a>
          <a href="/team/">Team</a>
          <a href="/work/">Work</a>
          <a href="/careers/">Careers</a>
          <a href="/contact/">Contact</a>
        </div>
        <div class="footer__col">
          <h4>Get in touch</h4>
          <a href="mailto:info@codesummix.com">info@codesummix.com</a>
          <a href="tel:+923203271071">+92 320 3271071</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
          <a class="footer__map" href="https://www.google.com/maps/search/?api=1&query=Lahore%2C+Pakistan" target="_blank" rel="noopener" aria-label="CodeSumMix in Lahore, Pakistan, on Google Maps">
            <img src="/assets/img/map-lahore.jpg?v=1" width="720" height="440" alt="Map of Lahore, Pakistan, where the CodeSumMix team is based" loading="lazy">
            <span class="footer__map-cap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>Lahore, Pakistan</span>
          </a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; <span id="year">2026</span> CodeSumMix. All rights reserved.</span>
        <span>Designed &amp; built by CodeSumMix.</span>
      </div>
    </div>
  </footer>"""

ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
TICK  = '<span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>'


def render(d, others):
    slug = d["slug"]
    url = f"https://codesummix.com/services/{slug}/"

    stats = "".join(
        f'\n          <div class="svc-stat"><b>{e(s["value"])}</b><span>{e(s["label"])}</span></div>'
        for s in d["stats"])

    bullets = "".join(
        f'\n            <li>{TICK}<span class="feature-list__copy"><b>{e(b["title"])}</b><em>{e(b["desc"])}</em></span></li>'
        for b in d["overview"]["bullets"])

    paras = "".join(f'\n            <p{" style=\"margin-top:1.1rem\"" if i==0 else ""}>{e(p)}</p>'
                    for i, p in enumerate(d["overview"]["paragraphs"]))

    caps = "".join(
        f'\n          <article class="svc-card"><span class="svc-card__n">{i+1:02d}</span>'
        f'<h3>{e(c["title"])}</h3><p>{e(c["desc"])}</p></article>'
        for i, c in enumerate(d["capabilities"]))

    steps = "".join(
        f'\n          <div class="svc-step"><div class="svc-step__n">{i+1:02d}</div>'
        f'<h3>{e(s["title"])}</h3><p>{e(s["desc"])}</p></div>'
        for i, s in enumerate(d["process"]))

    stack = "".join(f'<span>{e(t)}</span>' for t in d["stack"])

    faqs = "".join(
        f'\n          <details{" open" if i==0 else ""}><summary>{e(f["q"])}</summary>'
        f'<div class="faq__a">{e(f["a"])}</div></details>'
        for i, f in enumerate(d["faqs"]))

    rel = "".join(
        f'\n          <a class="svc-stack-link" href="/services/{o["slug"]}/"><span>{e(o["navTitle"])}</span></a>'
        for o in others[:6])

    faq_ld = json.dumps({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [{"@type": "Question", "name": f["q"],
                        "acceptedAnswer": {"@type": "Answer", "text": f["a"]}} for f in d["faqs"]]
    }, ensure_ascii=False)

    svc_ld = json.dumps({
        "@context": "https://schema.org", "@type": "Service",
        "serviceType": d["navTitle"], "name": d["metaTitle"], "description": d["metaDescription"],
        "url": url,
        "provider": {"@type": "Organization", "name": "CodeSumMix", "url": "https://codesummix.com/"},
        "areaServed": "Worldwide",
    }, ensure_ascii=False)

    crumb_ld = json.dumps({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://codesummix.com/"},
            {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://codesummix.com/services/"},
            {"@type": "ListItem", "position": 3, "name": d["navTitle"], "item": url},
        ]}, ensure_ascii=False)

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{e(d["metaTitle"])}</title>
  <meta name="description" content="{esc_attr(d["metaDescription"])}">
  <meta name="keywords" content="{esc_attr(d["keywords"])}">
  <meta name="author" content="CodeSumMix">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#ffffff">
  <link rel="canonical" href="{url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CodeSumMix">
  <meta property="og:locale" content="en_US">
  <meta property="og:title" content="{esc_attr(d["metaTitle"])}">
  <meta property="og:description" content="{esc_attr(d["metaDescription"])}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="https://codesummix.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc_attr(d["metaTitle"])}">
  <meta name="twitter:description" content="{esc_attr(d["metaDescription"])}">
  <meta name="twitter:image" content="https://codesummix.com/assets/img/og-image.png">
  <script type="application/ld+json">{svc_ld}</script>
  <script type="application/ld+json">{faq_ld}</script>
  <script type="application/ld+json">{crumb_ld}</script>
  <link rel="icon" href="/assets/img/logo.svg?v=3" type="image/svg+xml">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png?v=1">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16.png?v=1">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png?v=1">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/css/style.css?v={CSS_V}">
</head>
<body>

{nav_html()}

  <main>

    <!-- HERO -->
    <section class="svc-hero">
      <span class="svc-hero__orb svc-hero__orb--1" aria-hidden="true"></span>
      <span class="svc-hero__orb svc-hero__orb--2" aria-hidden="true"></span>
      <div class="container">
        <div class="svc-hero__inner">
          <a class="case-back" href="/services/"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg> All services</a>
          <span class="eyebrow">{e(d["eyebrow"])}</span>
          <h1>{e(d["h1"])}</h1>
          <p class="svc-hero__lede">{e(d["lede"])}</p>
          <div class="svc-hero__actions">
            <a class="btn btn--primary btn--lg" href="/contact/">Start a project {ARROW}</a>
            <a class="btn btn--ghost btn--lg" href="/work/">See our work</a>
          </div>
        </div>
        <div class="svc-stats" data-reveal data-stagger>{stats}
        </div>
      </div>
    </section>

    <!-- OVERVIEW -->
    <section class="section section--tight">
      <div class="container">
        <div class="case-split">
          <div data-reveal>
            <span class="eyebrow">Overview</span>
            <h2 class="section__title" style="margin-top:1rem">{e(d["overview"]["heading"])}</h2>{paras}
          </div>
          <ul class="feature-list" data-reveal data-stagger>{bullets}
          </ul>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section class="section section--tight section--alt">
      <div class="container">
        <div class="section__head section__head--center" data-reveal>
          <span class="eyebrow">What's included</span>
          <h2 class="section__title">What you get with {e(d["navTitle"])}.</h2>
        </div>
        <div class="svc-grid" data-reveal data-stagger>{caps}
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section section--tight">
      <div class="container">
        <div class="section__head section__head--center" data-reveal>
          <span class="eyebrow">How we work</span>
          <h2 class="section__title">From first call to live.</h2>
        </div>
        <div class="svc-steps" data-reveal data-stagger>{steps}
        </div>
      </div>
    </section>

    <!-- STACK -->
    <section class="section section--tight section--alt">
      <div class="container">
        <div class="section__head section__head--center" data-reveal>
          <span class="eyebrow">Tools we use</span>
          <h2 class="section__title">The stack behind the work.</h2>
        </div>
        <div class="svc-stack" data-reveal data-stagger>{stack}</div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section--tight">
      <div class="container">
        <div class="section__head section__head--center" data-reveal>
          <span class="eyebrow">Questions</span>
          <h2 class="section__title">Things clients ask us.</h2>
        </div>
        <div class="faq" data-reveal>{faqs}
        </div>
      </div>
    </section>

    <!-- OTHER SERVICES -->
    <section class="section section--tight section--alt">
      <div class="container">
        <div class="section__head section__head--center" data-reveal>
          <span class="eyebrow">More from us</span>
          <h2 class="section__title">Other services.</h2>
        </div>
        <div class="svc-stack" data-reveal data-stagger>{rel}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--tight">
      <div class="container">
        <div class="cta__inner" data-reveal>
          <h2 class="cta__title">{e(d["ctaTitle"])}</h2>
          <p class="cta__sub">{e(d["ctaSub"])}</p>
          <div class="cta__actions">
            <a class="btn btn--primary btn--lg" href="/contact/">Start a project {ARROW}</a>
            <a class="btn btn--ghost btn--lg" href="https://wa.me/923203271071" target="_blank" rel="noopener">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  </main>

{FOOTER}

  <script src="/assets/js/main.js?v=4"></script>
</body>
</html>
"""


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "_build", "services.json")
    pages = json.load(open(src))
    written = []
    for d in pages:
        others = [p for p in pages if p["slug"] != d["slug"]]
        out_dir = os.path.join(ROOT, "services", d["slug"])
        os.makedirs(out_dir, exist_ok=True)
        path = os.path.join(out_dir, "index.html")
        with open(path, "w", encoding="utf-8") as f:
            f.write(render(d, others))
        written.append(f"/services/{d['slug']}/")
    print(f"rendered {len(written)} pages:")
    for w in written:
        print("  " + w)


if __name__ == "__main__":
    main()
