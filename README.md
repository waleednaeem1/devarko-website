# devarko.com

The Devarko marketing site: Next.js 16 (App Router, TypeScript), statically
exported and deployed to Hostinger on every push to `main`.

## Stack

- **Next.js 16** with `output: "export"`, trailing-slash URLs to match the
  original site structure
- **TypeScript** throughout; content lives as typed JSON in `src/content/`
- One global stylesheet (`src/app/site.css`), the design system carried over
  from the original hand-built site
- No backend: the contact and job-application forms post to Web3Forms, and the
  careers admin is a front-end prototype backed by localStorage

## Layout

```
src/
├── app/               one folder per route; services/[slug] renders all nine
│                      service pages from src/content/services.json
├── components/        header, footer, analytics loader, interactive widgets
├── content/           services.json, home JSON-LD, page copy sources
└── lib/               site constants, services accessors, careers store
public/                images, fonts, robots.txt, sitemap.xml, .htaccess
```

## Develop

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export into out/
```

## Deploy

Push to `main`. GitHub Actions builds the static export and syncs `out/` to
Hostinger over FTP (`.github/workflows/deploy.yml`; FTP credentials live in the
repo's Actions secrets). Analytics (GA4 + GTM) load after first paint via
`src/components/Analytics.tsx`; the Search Console verification tag is set in
`src/app/layout.tsx`.
