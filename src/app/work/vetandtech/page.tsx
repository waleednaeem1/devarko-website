import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Online Education Platform Development | VetandTech",
  description:
    "VetandTech delivers continuing education to vets worldwide. See how we built the course catalogue, video lessons, certificates and member payments.",
  keywords:
    "online education platform development, e-learning development, continuing education platform, course platform development, LMS development, EdTech specialists, education technology company, video learning platform, membership platform development, custom web development",
  alternates: { canonical: "https://codesummix.com/work/vetandtech/" },
  openGraph: { title: "Online Education Platform Development | VetandTech", description: "VetandTech delivers continuing education to vets worldwide. See how we built the course catalogue, video lessons, certificates and member payments.", url: "https://codesummix.com/work/vetandtech/", type: "article", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/og/work-vetandtech.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Online Education Platform Development | VetandTech", description: "VetandTech delivers continuing education to vets worldwide. See how we built the course catalogue, video lessons, certificates and member payments.", images: ["https://codesummix.com/assets/og/work-vetandtech.jpg"] },
};

export default function VetandTechPage() {
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
              name: "VetandTech",
              item: "https://codesummix.com/work/vetandtech/",
            },
          ],
        }}
      />
      <section
        style={{
          paddingTop: "clamp(8.75rem,15vh,11.5rem)",
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
          <span className="eyebrow">Case study · Vet EdTech · USA</span>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", marginTop: "0.7rem" }}>
            VetandTech: veterinary education, online
          </h1>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: "720px",
              marginTop: "1rem",
              fontSize: "1.08rem",
            }}
          >
            For the same US client behind <Link href="/work/dvm-central/">DVM Central</Link> and VetPet Central, we built VetandTech: an
            online veterinary education platform where veterinary professionals learn through{" "}
            <strong style={{ color: "var(--text)" }}>free RACE-approved CE webinars</strong>,
            courses, surgical training resources, and events. It sits at the intersection of our two
            deepest specialties: <Link href="/edtech/">education technology</Link> and the veterinary industry.
          </p>
          <div className="feature-case__chips" style={{ marginTop: "1.4rem" }}>
            <span>CE Webinars</span>
            <span>Courses</span>
            <span>Surgical Training</span>
            <span>Events</span>
            <span>Community</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">The platform</span>
            <h2 className="section__title">Continuing education for the veterinary community.</h2>
            <p className="section__sub">
              Vets and vet techs register for live webinars, earn RACE-approved CE credits for free,
              and browse a growing library of courses and surgical resources.
            </p>
          </div>
          <div className="shot" data-reveal>
            <img
              src="/assets/img/cases/vt-site.jpg"
              alt="VetandTech: online veterinary education platform"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">What we built</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                Where EdTech meets vet tech.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                VetandTech brings everything we know about learning platforms to the veterinary
                world: webinar registration and delivery, CE credit tracking, course and resource
                libraries, and a sponsor ecosystem that connects the industry&apos;s suppliers with
                its professionals.
              </p>
              <p>
                It completes a three-platform ecosystem for our US client: a marketplace (DVM
                Central), a consumer care platform (VetPet Central), and professional education
                (VetandTech).
              </p>
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
                  <b>Free RACE-approved CE webinars</b>
                  <em>Live sessions with registration &amp; credits</em>
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
                  <b>Courses &amp; learning tracks</b>
                  <em>Structured education for vets &amp; vet techs</em>
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
                  <b>Surgical training resources</b>
                  <em>Guides, videos &amp; instrument know-how</em>
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
                  <b>Events &amp; community</b>
                  <em>Industry events, blogs &amp; resources</em>
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
                  <b>Sponsor &amp; partner ecosystem</b>
                  <em>Suppliers supporting professional education</em>
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
                  <b>Fast, <Link href="/services/web-applications/">modern web platform</Link></b>
                  <em>SEO-ready and built to grow</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Building a learning platform?</h2>
            <p className="cta__sub">
              Education technology is our core specialty: from LMS and e-learning to professional CE
              platforms.
            </p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a project{" "}
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
