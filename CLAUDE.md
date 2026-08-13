# CodeSumMix — Marketing Website

Static marketing site for **CodeSumMix**, a software studio (founder: Waleed Naeem).
Live at **https://codesummix.com/**, hosted on Hostinger as plain static files.

> This is its own project. It is **not** part of any Bright Future repo — those are
> separate client codebases that happen to live nearby on disk.

## Stack
- Hand-coded **static HTML / CSS / JS** — no framework, no build step.
- Dark theme; brand gradient `#7C5CFF → #4EA8FF → #36E0C8`; fonts Space Grotesk + Inter.
- **Clean URLs** via directory structure (`/services/` → `services/index.html`) + `.htaccess`.
- Root-relative asset paths (`/assets/...`). Cache-bust CSS with `?v=N` on the stylesheet `<link>`.

## Layout
```
index.html                      homepage
services/ work/ about/          inner pages (each is an index.html)
contact/ careers/ job/ admin/
work/<client>/                  case studies: bright-future, ilmversity, dvm-central, vetpet-central
assets/css/style.css            full design system
assets/js/main.js               nav, scroll-reveal, contact form
assets/js/careers.js            client-side careers prototype
assets/img/ (+ cases/)          logos + case-study screenshots
404.html  sitemap.xml  robots.txt  .htaccess
brand.html                      internal logo-concepts page — EXCLUDED from deploy
```

## Integrations
- **Web3Forms** (POST to `api.web3forms.com/submit`) powers the contact + job-application
  forms. Free plan has **no file uploads**, so the résumé field is a "CV link" URL.
- The **careers board is a client-side prototype** (localStorage `csm_jobs_v1` / `csm_apps_v1`,
  demo admin password in `assets/js/careers.js`). There is no real backend — replace before
  treating job postings/applications as production.

## Preview
`python3 -m http.server 8910 --directory .` → http://localhost:8910/
(Also wired as the `codesummix-site` config in `.claude/launch.json`.)

## Deploy (Hostinger)
Zip the project root (exclude `brand.html`, `.DS_Store`, `.git`, `.claude`) so files sit at the
zip root, then extract into `public_html`. `.htaccess` must land at the root for clean URLs.

## Brand facts
- Lahore, Pakistan · +92 320 3271071 · info@codesummix.com
- Featured clients: **Bright Future** (Kuwait, EdTech) · **Ilmversity** (Pakistan, LMS) ·
  **DVM Central** (USA, B2B vet marketplace — Laravel / Next.js / Stripe / DigitalOcean / Docker) ·
  **VetPet Central** (USA, vet booking & telehealth).
