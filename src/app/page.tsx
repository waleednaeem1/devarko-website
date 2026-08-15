import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import EngageSwitcher from "@/components/home/EngageSwitcher";
import FeatureFlowList from "@/components/home/FeatureFlowList";
import { ArrowIcon } from "@/components/icons";
import homeJsonLd from "@/content/home-jsonld.json";
import homeMeta from "@/content/home-meta.json";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  keywords: homeMeta.keywords,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: { title: homeMeta.title, description: homeMeta.description, url: `${SITE_URL}/`, type: "website", siteName: "Devarko", locale: "en_US", images: [{ url: "https://devarko.com/assets/og/home.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: homeMeta.title, description: homeMeta.description, images: ["https://devarko.com/assets/og/home.jpg"] },
};

const SERVICE_CARDS = [
  {
    href: "/services/custom-software/",
    title: "Custom Software",
    text: "Tailored platforms, internal tools, and SaaS products engineered around your workflows, not squeezed into a template.",
    delay: 0,
    icon: <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13.5 6l-3 12" />,
  },
  {
    href: "/services/ai-solutions/",
    title: "AI Solutions & Automation",
    text: "LLM-powered features, chatbots, RAG search, and intelligent automation that turn your data into a real competitive edge and cut manual work.",
    delay: 1,
    ai: true,
    badge: "In demand",
    icon: (
      <>
        <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
        <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" />
      </>
    ),
  },
  {
    href: "/services/web-applications/",
    title: "Web Applications",
    text: "Fast, accessible, SEO-ready web apps built with React, Next.js, and Laravel: that load instantly and rank well.",
    delay: 2,
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
  },
  {
    href: "/services/mobile-apps/",
    title: "Mobile Apps",
    text: "Native-quality iOS and Android apps from a single, maintainable codebase: shipped to both stores.",
    delay: 0,
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    href: "/services/crm-solutions/",
    title: "CRM Solutions",
    text: "Setup, customization, and integration of Salesforce, Zoho, and Bitrix24, so your sales and operations run on one connected system.",
    delay: 1,
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M16 7.5a2.6 2.6 0 0 1 0 5M21 20a5 5 0 0 0-4-4.9" />
      </>
    ),
  },
  {
    href: "/services/cloud-devops/",
    title: "Cloud & DevOps",
    text: "Scalable infrastructure, CI/CD pipelines, and observability on AWS, GCP, and Azure, so releases are boring and safe.",
    delay: 2,
    icon: (
      <>
        <path d="M6.5 19a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 9.5a3.5 3.5 0 0 1-.5 9.5z" />
        <path d="M9.5 14.5l2 2 3.5-4" />
      </>
    ),
  },
  {
    href: "/services/ui-ux-design/",
    title: "UI/UX & Product Design",
    text: "Research-driven interfaces that are beautiful, intuitive, and built to convert: from prototype to design system.",
    delay: 0,
    icon: (
      <>
        <path d="M12 19l7-7-4-4-7 7v4z" />
        <path d="M14.5 6.5l3 3M5 21h6" />
      </>
    ),
  },
  {
    href: "/services/qa-testing/",
    title: "QA & Testing",
    text: "Manual and automated testing that catches issues before your users do, so every release ships with confidence.",
    delay: 1,
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
  {
    href: "/services/seo-marketing/",
    title: "SEO & Digital Marketing",
    text: "Technical SEO, performance, and content that help the right people find you, and turn visits into customers.",
    delay: 2,
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3M8 11h6M11 8v6" />
      </>
    ),
  },
];

const EDU_FEED = [
  {
    title: "E-learning platforms & LMS",
    desc: "Courses, chapters, lessons & assessments",
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
  },
  {
    title: "iOS & Android learning apps",
    desc: "Native mobile experiences for students",
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    title: "Secure HD video streaming",
    desc: "HLS delivery with access control",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.5l6 3.5-6 3.5z" />
      </>
    ),
  },
  {
    title: "Payments & installments",
    desc: "Built-in billing & enrollment flows",
    icon: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
        <path d="M2.5 10h19M6.5 15h4" />
      </>
    ),
  },
  {
    title: "Multi-role access",
    desc: "Students, instructors, admins & super-admins",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M16 7.5a2.6 2.6 0 0 1 0 5M21 20a5 5 0 0 0-4-4.9" />
      </>
    ),
  },
  {
    title: "Progress tracking & analytics",
    desc: "Insights for learners and institutions",
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M6 17v-5M11 17V7M16 17v-8M21 17V4" />
      </>
    ),
  },
];

const FREIGHT_FLOW = [
  {
    title: "Sea & air operations",
    desc: "Imports, exports, jobs & shipment records",
    icon: (
      <>
        <path d="M3 14l1.8 4.5A2 2 0 0 0 6.7 20h10.6a2 2 0 0 0 1.9-1.5L21 14" />
        <path d="M3 14l9-3 9 3" />
        <path d="M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
      </>
    ),
  },
  {
    title: "Freight invoicing",
    desc: "MBL/HBL, containers & multi-currency charges",
    icon: (
      <>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
        <path d="M14 2v5h5M9 13h6M9 17h4" />
      </>
    ),
  },
  {
    title: "Government tax integration",
    desc: "PRA & FBR e-IMS fiscalization & tax reporting",
    icon: (
      <>
        <path d="M12 2l8 3.5v5.6c0 5-3.4 8.6-8 10.9-4.6-2.3-8-5.9-8-10.9V5.5z" />
        <path d="M9 12l2.2 2.2L15.5 10" />
      </>
    ),
  },
  {
    title: "Full freight ERP",
    desc: "Operations plus HR, payroll & accounts",
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="8" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </>
    ),
  },
];

const WORK_CARDS = [
  {
    href: "/work/bright-future/",
    badge: "Flagship client",
    img: "/assets/img/cases/bf-dash-1.jpg",
    alt: "Bright Future admin dashboard",
    meta: "EdTech · Kuwait",
    title: "Bright Future",
    desc: "End-to-end e-learning for universities and training programs: web dashboard, native iOS & Android apps, secure video, and online payments.",
    tags: ["E-learning", "iOS & Android", "Payments"],
    delay: 0,
  },
  {
    href: "/work/dvm-central/",
    img: "/assets/img/cases/dvm-products-1000.jpg",
    alt: "DVM Central marketplace storefront",
    meta: "E-commerce · USA",
    title: "DVM Central",
    desc: "A B2B veterinary marketplace connecting suppliers with practices: thousands of products, a seller portal, and secure checkout.",
    tags: ["Marketplace", "Seller Portal", "Checkout"],
    delay: 1,
  },
  {
    href: "/work/skyline-cargo/",
    badge: "New client · 2026",
    img: "/assets/img/cases/cargonio-demo-jobs-1200.jpg",
    alt: "Sea export jobs on Cargonio: parties, vessels, destinations and shipment statuses",
    meta: "Logistics · Pakistan",
    title: "Skyline Cargo Marketing",
    desc: "Freight forwarding, digitized: sea & air import/export operations and invoicing with PRA & FBR e-IMS tax integration, plus HR, payroll, and accounts modules.",
    tags: ["Sea & Air", "Invoicing", "PRA & FBR e-IMS", "Freight ERP", "HR & Payroll", "Accounts"],
    delay: 0,
  },
  {
    href: "/work/vetpet-central/",
    img: "/assets/img/cases/vp-site-1000.jpg",
    alt: "VetPet Central: find and book trusted vets",
    meta: "Vet Tech · USA",
    title: "VetPet Central",
    desc: "A nationwide vet booking & telehealth platform: clinic directory, pet records, pharmacy, and AI-assisted insights on web and mobile.",
    tags: ["Telehealth", "Booking", "AI"],
    delay: 1,
  },
];

const LOGOS = [
  { href: "/work/bright-future/", img: "/assets/img/logos/bright-future.png", w: 99, h: 96, alt: "Bright Future Institute logo", name: "Bright Future", tag: "E-learning · Kuwait" },
  { href: "/work/ilmversity/", img: "/assets/img/logos/ilmversity.png", w: 96, h: 96, alt: "Ilmversity logo", name: "Ilmversity", tag: "School LMS · Pakistan" },
  { href: "/work/dvm-central/", img: "/assets/img/logos/dvm-central.svg", w: 300, h: 120, alt: "DVM Central logo", name: "DVM Central", tag: "Marketplace · USA" },
  { href: "/work/vetpet-central/", img: "/assets/img/logos/vetpet-central.png", w: 189, h: 96, alt: "VetPet Central logo", name: "VetPet Central", tag: "Vet tech · USA" },
  { href: "/work/vetandtech/", img: "/assets/img/logos/vetandtech.png", w: 284, h: 96, alt: "VetandTech logo", name: "VetandTech", tag: "Vet EdTech · USA" },
  { href: "/work/skyline-cargo/", img: "/assets/img/logos/skyline-cargo.png", w: 415, h: 96, alt: "Skyline Cargo Marketing logo", name: "Skyline Cargo", tag: "Freight · Pakistan" },
  { href: "/work/kare-cargo/", img: "/assets/img/logos/kare-cargo.png", w: 424, h: 96, alt: "Kare Cargo International logo", name: "Kare Cargo Intl", tag: "Freight ERP · Pakistan" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discover", text: "We dig into your goals, users, and constraints to define the right thing to build: before a line of code." },
  { num: "02", title: "Design", text: "Wireframes to polished UI, validated with you early, so there are no expensive surprises later." },
  { num: "03", title: "Build", text: "Agile sprints, clean and tested code, weekly demos. You always know exactly where things stand." },
  { num: "04", title: "Launch & Scale", text: "We ship, monitor, and iterate, then stay on as a partner to help you grow with confidence." },
];

const STATS = [
  { num: "2×", label: "Specialties: EdTech & Freight" },
  { num: "AI-first", label: "Modern, intelligent builds" },
  { num: "3-in-1", label: "Web, iOS & Android delivery" },
  { num: "End‑to‑end", label: "Design, build, launch & support" },
];

const TESTIMONIALS = [
  {
    quote:
      "Cargonio is an outstanding freight forwarding platform that has streamlined our operations and boosted productivity. An excellent product backed by a team that truly cares about its customers.",
    initials: "R",
    name: "Raheel",
    role: "Chief Executive Officer · Skyline Cargo Marketing",
  },
  {
    quote:
      "Cargonio has transformed the way we manage our freight forwarding operations. It's reliable, user-friendly, and has significantly improved our team's efficiency. Their continuous support and commitment to innovation make them a trusted technology partner.",
    initials: "AA",
    name: "Adeel Ahmed",
    role: "Managing Director · Kare Cargo International",
  },
];

export default function HomePage() {
  return (
    <main>
      <link
        rel="preload"
        as="image"
        href="/assets/img/cases/cargonio-demo-freight-1200.webp"
        fetchPriority="high"
        media="(min-width: 768px)"
      />
      <JsonLd data={homeJsonLd} />

      {/* Hero */}
      <section className="hero">
        <div className="hero__glow"></div>
        <span className="hero__orb hero__orb--1" aria-hidden="true"></span>
        <span className="hero__orb hero__orb--2" aria-hidden="true"></span>
        <span className="hero__orb hero__orb--3" aria-hidden="true"></span>
        <div className="container">
          <div className="hero__grid">
            <div className="hero__inner">
              <span className="pill" data-reveal>
                <span className="pill__dot"></span> <b>Now booking</b> new projects
              </span>
              <h1 className="hero__title" data-reveal data-reveal-delay="1">
                We design and build <span className="grad">software</span> that moves your business
                forward.
              </h1>
              <p className="hero__sub" data-reveal data-reveal-delay="2">
                Devarko is a software house and development agency that partners with founders
                and teams to ship custom web, mobile, cloud, and <strong>AI</strong> products, with
                deep expertise in <strong>education technology</strong> and{" "}
                <strong>freight &amp; logistics</strong>.
              </p>
              <div className="hero__actions" data-reveal data-reveal-delay="3">
                <Link className="btn btn--primary btn--lg" href="/contact/">
                  Start a project <ArrowIcon />
                </Link>
                <Link className="btn btn--ghost btn--lg" href="/work/">
                  View our work
                </Link>
              </div>
              <div className="hero__trust" data-reveal data-reveal-delay="3">
                <span>
                  <strong>EdTech &amp; Freight-forwarding</strong> specialists
                </span>
                <span className="dot"></span>
                <span>AI-driven development</span>
                <span className="dot"></span>
                <span>
                  Serving <strong>Australia, Kuwait, Pakistan &amp; the USA</strong>
                </span>
              </div>
            </div>

            <div className="hero__visual" data-reveal data-reveal-delay="2">
              <span className="hero__badge">
                <i></i> Live in production
              </span>
              <div className="hero__browser">
                <div className="hero__browser-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <img
                  src="/assets/img/cases/cargonio-demo-freight-1200.webp"
                  width={1200}
                  height={750}
                  alt="Cargonio freight dashboard in the live demo workspace: jobs this month, shipments in transit, receivables and gross profit"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="hero__phone">
                <img
                  src="/assets/img/cases/bf-app-480.webp"
                  width={480}
                  height={1043}
                  alt="Bright Future e-learning mobile app built by Devarko"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">What we do</span>
            <h2 className="section__title">End-to-end product engineering, under one roof.</h2>
            <p className="section__sub">
              From the first whiteboard sketch to a product running in production, we cover the full
              build, so you don't have to coordinate five vendors.
            </p>
          </div>
          <div className="grid services__grid">
            {SERVICE_CARDS.map((c) => (
              <Link
                key={c.href}
                className={`card${c.ai ? " card--ai" : ""} card--link`}
                href={c.href}
                data-reveal
                {...(c.delay ? { "data-reveal-delay": String(c.delay) } : {})}
              >
                {c.badge && <span className="card__badge">{c.badge}</span>}
                <div className="card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {c.icon}
                  </svg>
                </div>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__text">{c.text}</p>
                <span className="card__link">
                  Learn more <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section section--tight section--alt" id="engagement">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">How we work with you</span>
            <h2 className="section__title">Full build, a dedicated team, or just expert advice.</h2>
            <p className="section__sub">
              Not every project needs us to build the whole thing. Pick the engagement that fits
              where you are.
            </p>
          </div>
          <EngageSwitcher />
        </div>
      </section>

      {/* EdTech expertise */}
      <section className="section" id="expertise">
        <div className="container">
          <div className="expertise__grid">
            <div className="expertise__text" data-reveal>
              <span className="eyebrow">Where we go deep</span>
              <h2 className="section__title">
                Our main expertise:
                <br />
                education technology.
              </h2>
              <p className="section__sub">
                EdTech isn't a side project for us: it's our specialty. We build the kind of
                learning platforms that students, instructors, and institutions rely on every single
                day, and we know the hard parts: video delivery, payments, access control, and
                scale.
              </p>
              <div className="expertise__callout">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10L12 5 2 10l10 5 10-5z" />
                  <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                </svg>
                <p>
                  <b>Trusted to build Bright Future &amp; Ilmversity.</b> Real education platforms
                  serving schools, universities, and training programs across Kuwait and Pakistan.
                </p>
              </div>
            </div>
            <div className="edu-stage edu-stage--side" data-reveal data-reveal-delay="1">
              <div
                className="edu-phone"
                role="img"
                aria-label="Phone showing what our education platforms include: e-learning and LMS, iOS and Android apps, secure HD video, payments and installments, multi-role access, progress tracking and analytics"
              >
                <span className="edu-phone__notch"></span>
                <div className="edu-screens" aria-hidden="true">
                  <div className="edu-screen edu-screen--on">
                    <div className="edu-head">
                      <span className="edu-ava">Cx</span>
                      <span>
                        <b>Built into every platform</b>
                        <em>What our EdTech clients ship with</em>
                      </span>
                    </div>
                    <div className="edu-feed">
                      <div className="edu-feed__track">
                        {[...EDU_FEED, ...EDU_FEED].map((f, i) => (
                          <div className="edu-card edu-card--feat" key={`${f.title}-${i}`}>
                            <span className="fic">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                {f.icon}
                              </svg>
                            </span>
                            <span>
                              <b>{f.title}</b>
                              <em>{f.desc}</em>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freight specialty */}
      <section className="section section--tight" id="freight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">Our second specialty</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                Freight forwarding &amp; logistics software.
              </h2>
              <p style={{ marginTop: "1.1rem", color: "var(--muted)" }}>
                We build the systems that run freight businesses end to end: sea &amp; air
                import/export operations, invoicing, government tax compliance, and the back office.
                Both <strong style={{ color: "var(--text)" }}>Skyline Cargo Marketing</strong> and{" "}
                <strong style={{ color: "var(--text)" }}>Kare Cargo International</strong> now run
                their operations on our platform, live in production.
              </p>
              <Link className="card__link" href="/work/skyline-cargo/" style={{ marginTop: "1.3rem" }}>
                See the Skyline Cargo case study <ArrowIcon />
              </Link>
            </div>
            <FeatureFlowList>
              {FREIGHT_FLOW.map((f) => (
                <li key={f.title}>
                  <span className="flow-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      {f.icon}
                    </svg>
                  </span>
                  <span className="feature-list__copy">
                    <b>{f.title}</b>
                    <em>{f.desc}</em>
                  </span>
                </li>
              ))}
            </FeatureFlowList>
          </div>
          <div className="fr-stage" data-reveal>
            <div
              className="fr-browser"
              role="img"
              aria-label="Freight operations in Cargonio: live job and shipment counts, a vessel en route from Karachi to Jebel Ali, and an invoice moving from draft to final to fiscalized"
            >
              <div className="fr-bar" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <i>app.cargonio.com</i>
              </div>
              <div className="fr-body" aria-hidden="true">
                <div className="fr-side">
                  <b>Cargonio</b>
                  <span className="on">Freight Forwarding</span>
                  <span>Finance</span>
                  <span>HR &amp; Payroll</span>
                  <span>Reports</span>
                  <span>Management</span>
                </div>
                <div className="fr-main">
                  <div className="fr-kpis">
                    <div className="fr-kpi">
                      <b>11</b>
                      <span>Jobs this month</span>
                    </div>
                    <div className="fr-kpi">
                      <b>18</b>
                      <span>Shipments in transit</span>
                    </div>
                    <div className="fr-kpi">
                      <b>PKR 2.29M</b>
                      <span>Gross profit MTD</span>
                    </div>
                  </div>
                  <div className="fr-route">
                    <div className="fr-route__ports">
                      <span>
                        <b>KHI</b>
                        <em>Karachi</em>
                      </span>
                      <span className="fr-route__mid">MSC Positano · ETA 4 days</span>
                      <span style={{ textAlign: "right" }}>
                        <b>JEA</b>
                        <em>Jebel Ali</em>
                      </span>
                    </div>
                    <div className="fr-route__line">
                      <i></i>
                      <span className="fr-ship">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 14l1.8 4.5A2 2 0 0 0 6.7 20h10.6a2 2 0 0 0 1.9-1.5L21 14" />
                          <path d="M3 14l9-3 9 3" />
                          <path d="M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="fr-inv">
                    <span>
                      <b>Invoice SEL-2026-00008</b>
                      <em>Guard Rice (Pvt) Ltd · PKR 740,025 incl. tax</em>
                    </span>
                    <span className="fr-status">
                      <i className="st st--draft">Draft</i>
                      <i className="st st--final">Final</i>
                      <i className="st st--paid">Fiscalized · PRA &amp; FBR</i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="shot-cap" data-reveal>
            From booking to fiscal invoice: live jobs, the voyage in progress, and billing that
            files itself with the PRA &amp; FBR systems.
          </p>
        </div>
      </section>

      {/* Cargonio product band */}
      <section className="section section--tight" id="product">
        <div className="container">
          <div className="prodband" data-reveal>
            <div className="prodband__grid">
              <div>
                <span className="eyebrow">Our own product</span>
                <div className="prod-mark" style={{ fontSize: "clamp(1.8rem,3.4vw,2.4rem)", marginTop: ".9rem" }}>
                  Cargonio<i></i>
                </div>
                <h2>From booking to balance sheet.</h2>
                <p>
                  We don't just build software for other people: we ship our own.{" "}
                  <strong style={{ color: "#fff" }}>Cargonio</strong> is our freight-forwarding ERP:
                  air &amp; sea, export &amp; import, shipping documents, billing with PRA &amp; FBR
                  tax integration, a full accounting core, HR and payroll, all in one multi-tenant
                  platform we build, host and support.
                </p>
                <div className="prod-hero__actions" style={{ marginTop: "1.8rem" }}>
                  <Link className="btn btn--primary" href="/cargonio/">
                    Explore Cargonio <ArrowIcon />
                  </Link>
                  <a className="btn btn--ghost" href="https://cargonio.com" target="_blank" rel="noopener">
                    cargonio.com
                  </a>
                </div>
              </div>
              <div className="prodband__stats">
                <div className="prodband__stat">
                  <b>Air &amp; Sea</b>
                  <span>Export &amp; import operations</span>
                </div>
                <div className="prodband__stat">
                  <b>100+</b>
                  <span>Operational &amp; financial reports</span>
                </div>
                <div className="prodband__stat">
                  <b>PRA &amp; FBR</b>
                  <span>Tax integration built in</span>
                </div>
                <div className="prodband__stat">
                  <b>2 clients</b>
                  <span>Live in production</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--alt" id="process">
        <div className="container">
          <div className="section__head" data-reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="section__title">A process built for momentum.</h2>
            <p className="section__sub">
              No black boxes. You get weekly demos, clear communication, and working software at
              every step.
            </p>
          </div>
          <div className="steps">
            {PROCESS_STEPS.map((s, i) => (
              <div className="step" data-reveal {...(i ? { "data-reveal-delay": String(i) } : {})} key={s.num}>
                <div className="step__num">{s.num}</div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section" id="work">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Selected work</span>
            <h2 className="section__title">Trusted to build real products.</h2>
            <p className="section__sub">
              Education, e-commerce, healthcare, and freight &amp; logistics platforms: live for
              clients in Kuwait, Pakistan, and the USA, and now serving Australia from our
              Tasmanian head office.
            </p>
          </div>

          <div className="case-grid">
            {WORK_CARDS.map((c) => (
              <Link
                className="case-card"
                href={c.href}
                data-reveal
                {...(c.delay ? { "data-reveal-delay": String(c.delay) } : {})}
                key={c.href}
              >
                <div className="case-card__cover">
                  {c.badge && (
                    <span className="case-card__badge">
                      <span className="pill__dot"></span> {c.badge}
                    </span>
                  )}
                  <img className="cover" src={c.img} alt={c.alt} loading="lazy" />
                </div>
                <div className="case-card__body">
                  <span className="case-card__meta">{c.meta}</span>
                  <h3 className="case-card__title">{c.title}</h3>
                  <p className="case-card__desc">{c.desc}</p>
                  <div className="case-card__tags">
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="case-card__link">
                    Case study <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} data-reveal>
            <Link className="btn btn--ghost" href="/work/">
              View all seven case studies <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section aria-label="Clients" style={{ paddingBlock: "clamp(1.5rem,3vw,2.75rem)" }}>
        <div className="container">
          <p className="logos__label" data-reveal>
            The companies running on software we built
          </p>
        </div>
        <div className="logo-marquee" data-reveal data-reveal-delay="1">
          <div className="logo-marquee__track">
            {[false, true].map((hidden) => (
              <div className="logo-marquee__group" aria-hidden={hidden || undefined} key={String(hidden)}>
                {LOGOS.map((l) => (
                  <Link
                    className="logo-chip"
                    href={l.href}
                    key={`${l.name}-${hidden}`}
                    tabIndex={hidden ? -1 : undefined}
                  >
                    <img src={l.img} width={l.w} height={l.h} alt={hidden ? "" : l.alt} loading="lazy" />
                    <span className="logo-chip__meta">
                      <b>{l.name}</b>
                      <span>{l.tag}</span>
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats section--tight">
        <div className="container">
          <div className="grid stats__grid">
            {STATS.map((s, i) => (
              <div className="stat" data-reveal {...(i ? { "data-reveal-delay": String(i) } : {})} key={s.label}>
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">What clients say</span>
            <h2 className="section__title">Trusted by the people we build for.</h2>
          </div>
          <div className="grid testimonials">
            {TESTIMONIALS.map((t, i) => (
              <figure className="testimonial" data-reveal {...(i ? { "data-reveal-delay": String(i) } : {})} key={t.initials}>
                <div className="testimonial__stars" aria-label="Rated 5 out of 5">
                  ★★★★★
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <span className="testimonial__avatar" aria-hidden="true">
                    {t.initials}
                  </span>
                  <span className="testimonial__who">
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="contact">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">
              Have a project in mind?
              <br />
              Let's build it.
            </h2>
            <p className="cta__sub">
              Tell us what you're working on. We'll get back within one business day with next
              steps.
            </p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a project <ArrowIcon />
              </Link>
              <a
                className="btn btn--ghost btn--lg"
                href="https://wa.me/923203271071?text=Hi%20Devarko%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-1.47-.74-2.44-1.32-3.41-2.99-.26-.45.26-.42.74-1.38.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.7 4.3 3.79 1.6.69 2.23.75 3.03.63.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.3z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
