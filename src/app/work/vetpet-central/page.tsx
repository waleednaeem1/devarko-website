import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Telehealth Booking Platform Development | VetPet Central",
  description:
    "VetPet Central lets pet owners book vets and join video consultations. See how we built the scheduling, telehealth and payments behind the platform.",
  keywords:
    "telehealth platform development, appointment booking system development, video consultation platform, healthcare app development, custom web application development, mobile app development, Stripe payment integration, scheduling software development, React Native development, software development agency",
  alternates: { canonical: "https://codesummix.com/work/vetpet-central/" },
  openGraph: { title: "Telehealth Booking Platform Development | VetPet Central", description: "VetPet Central lets pet owners book vets and join video consultations. See how we built the scheduling, telehealth and payments behind the platform.", url: "https://codesummix.com/work/vetpet-central/", type: "article", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/img/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Telehealth Booking Platform Development | VetPet Central", description: "VetPet Central lets pet owners book vets and join video consultations. See how we built the scheduling, telehealth and payments behind the platform.", images: ["https://codesummix.com/assets/img/og-image.png"] },
};

export default function VetPetCentralPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://codesummix.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Work",
              item: "https://codesummix.com/work/",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "VetPet Central",
              item: "https://codesummix.com/work/vetpet-central/",
            },
          ],
        }}
      />
      <section
        style={{
          paddingTop: "clamp(7rem,12vh,9rem)",
          paddingBottom: "clamp(1.5rem,3vw,2.5rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="page-hero__glow"></div>
        <div className="container">
          <Link className="case-back" href="/work/">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>{" "}
            All work
          </Link>
          <span className="eyebrow">Case study · Vet Tech · USA</span>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", marginTop: "0.7rem" }}>
            VetPet Central: vet appointments &amp; telehealth
          </h1>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: "720px",
              marginTop: "1rem",
              fontSize: "1.08rem",
            }}
          >
            Also for our US client, VetPet Central is a nationwide platform that
            connects pet owners with licensed veterinarians. Pet parents can find
            clinics, book in-person or video visits, keep their pets&apos; records in
            one place, and even get AI-assisted health insights, while vets and
            clinics manage their listings and appointments.
          </p>
          <div className="feature-case__chips" style={{ marginTop: "1.4rem" }}>
            <span>Telehealth</span>
            <span>Booking</span>
            <span>Pet Records</span>
            <span>AI</span>
            <span>iOS &amp; Android</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Tap. Book. Relax.</span>
            <h2 className="section__title">A vet visit, a few taps away.</h2>
            <p className="section__sub">
              Find a clinic, book an in-person or video appointment, and consult a
              vet online: on the web and on the mobile app.
            </p>
          </div>
          <div className="shot" data-reveal>
            <img
              src="/assets/img/cases/vp-home.png"
              alt="VetPet Central: book a vet online"
              loading="lazy"
            />
          </div>
          <div className="case-shots" style={{ marginTop: "1.25rem" }}>
            <div className="shot" data-reveal>
              <img
                src="/assets/img/cases/vp-online.png"
                alt="VetPet Central: online vet help"
                loading="lazy"
              />
            </div>
            <div className="shot" data-reveal data-reveal-delay="1">
              <img
                src="/assets/img/cases/vp-askvet.png"
                alt="VetPet Central: ask a vet"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">What we built</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                Care that connects owners, vets &amp; clinics.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                Pet owners search a nationwide clinic directory, book visits, and
                meet vets over secure video. Their pets&apos; profiles and records
                live in one place, and a built-in pharmacy and AI tools round out
                the experience. Vets and clinics get their own tools to manage
                listings and appointments.
              </p>
              <p>Delivered across web and native iOS &amp; Android apps.</p>
            </div>
            <ul className="feature-list" data-reveal data-reveal-delay="1">
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Appointment booking</b>
                  <em>In-person &amp; video telehealth</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Nationwide clinic directory</b>
                  <em>Search &amp; filter by location and need</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Pet profiles &amp; records</b>
                  <em>Health history in one place</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>Pet pharmacy</b>
                  <em>Order medication online</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>AI-assisted insights</b>
                  <em>Photo analysis &amp; a vet-help assistant</em>
                </span>
              </li>
              <li>
                <span className="tick">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span className="feature-list__copy">
                  <b>iOS &amp; Android apps</b>
                  <em>Plus a full web experience</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Got a marketplace or booking app in mind?</h2>
            <p className="cta__sub">
              Telehealth, scheduling, payments, AI features: we build modern
              platforms across web and mobile.
            </p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a project
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/work/">
                See more work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
