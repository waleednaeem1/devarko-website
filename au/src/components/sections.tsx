import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import home from "@/content/au-home.json";
import areas from "@/content/au-areas.json";

const PRIMARY_AREAS = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Canberra",
  "Gold Coast",
  "Newcastle",
  "Hobart",
];

const WIDE_AREAS = [
  "New South Wales",
  "Victoria",
  "Queensland",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "ACT",
  "Northern Territory",
];

export function ServiceAreas({ alt }: { alt?: boolean }) {
  return (
    <section className={`section section--tight areas${alt ? " section--alt" : ""}`} id="areas">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="eyebrow">{areas.eyebrow}</span>
          <h2 className="section__title">{areas.title}</h2>
          <p className="section__sub">{areas.sub}</p>
        </div>
        <div className="areas__grid">
          <figure className="areas__map" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/service-areas.jpg"
              width={1200}
              height={900}
              alt="Map of eastern Australia showing Devarko based in Hobart, focused on Melbourne, and serving Sydney and Brisbane"
              loading="lazy"
            />
          </figure>
          <div className="areas__lists" data-reveal data-reveal-delay="1">
            <div className="areas__group areas__group--primary">
              <h3 className="areas__gh">
                <span className="areas__dot areas__dot--primary"></span>
                {areas.primaryHeading}
              </h3>
              <p>{areas.primaryDesc}</p>
              <ul className="area-chips">
                {PRIMARY_AREAS.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="areas__group">
              <h3 className="areas__gh">
                <span className="areas__dot"></span>
                {areas.wideHeading}
              </h3>
              <p>{areas.wideDesc}</p>
              <ul className="area-chips area-chips--muted">
                {WIDE_AREAS.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <p className="areas__foot">{areas.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Discover",
    text: "We start with your goals, customers and current site, and agree exactly what we are building before any code.",
  },
  {
    num: "02",
    title: "Design",
    text: "Wireframes to polished UI, reviewed with you early, so nothing expensive gets built twice.",
  },
  {
    num: "03",
    title: "Build",
    text: "Hand-coded in short sprints with weekly demos. You watch the site take shape, not wait for a reveal.",
  },
  {
    num: "04",
    title: "Launch & grow",
    text: "We ship, measure and keep improving: hosting, care plans and month-to-month SEO when you want it.",
  },
];

const STACK = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "Python",
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "React Native",
  "WordPress",
  "Shopify",
  "AWS",
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

export function ProcessSteps({ alt }: { alt?: boolean }) {
  return (
    <section className={`section section--tight${alt ? " section--alt" : ""}`} id="process">
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
          {STEPS.map((s, i) => (
            <div className="step" data-reveal {...(i ? { "data-reveal-delay": String(i) } : {})} key={s.num}>
              <div className="step__num">{s.num}</div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  return (
    <section className="stack-band" aria-label="Technology stack">
      <div className="container">
        <p className="logos__label" data-reveal>
          We build in whatever your project needs, across every major language
        </p>
        <ul className="stack-chips" data-reveal data-reveal-delay="1">
          {STACK.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PackagesTeaser({ alt }: { alt?: boolean }) {
  return (
    <section className={`section section--tight${alt ? " section--alt" : ""}`}>
      <div className="container">
        <div className="section__head section__head--center" data-reveal>
          <span className="eyebrow">Packages and pricing</span>
          <h2 className="section__title">{home.packagesTeaser.title}</h2>
        </div>
        <div className="price-mini">
          {home.packagesTeaser.tiers.map((t, i) => (
            <div className="price-mini__card" data-reveal {...(i ? { "data-reveal-delay": String(i) } : {})} key={t.name}>
              <span className="price-mini__name">{t.name}</span>
              <span className="price-mini__price">{t.price}</span>
              <span className="price-mini__line">{t.line}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} data-reveal>
          <Link className="btn btn--primary" href="/packages/">
            See every package in full <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ alt }: { alt?: boolean }) {
  return (
    <section className={`section section--tight${alt ? " section--alt" : ""}`} id="testimonials">
      <div className="container">
        <div className="section__head section__head--center" data-reveal>
          <span className="eyebrow">Testimonials</span>
          <h2 className="section__title">From clients running their businesses on our software.</h2>
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
  );
}
