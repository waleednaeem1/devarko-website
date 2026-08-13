import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "School LMS Development: Ilmversity Case Study | CodeSumMix",
  description:
    "Ilmversity is a school LMS built for Pakistani institutions: classes, attendance, assessments and parent visibility in one platform. See the build.",
  keywords:
    "school LMS development, school management system development, LMS development company, education technology Pakistan, custom LMS software, student information system, EdTech software house, school portal development, e-learning development, Laravel LMS",
  alternates: { canonical: "https://codesummix.com/work/ilmversity/" },
  openGraph: { title: "School LMS Development: Ilmversity Case Study | CodeSumMix", description: "Ilmversity is a school LMS built for Pakistani institutions: classes, attendance, assessments and parent visibility in one platform. See the build.", url: "https://codesummix.com/work/ilmversity/", type: "article", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/og/work-ilmversity.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "School LMS Development: Ilmversity Case Study | CodeSumMix", description: "Ilmversity is a school LMS built for Pakistani institutions: classes, attendance, assessments and parent visibility in one platform. See the build.", images: ["https://codesummix.com/assets/og/work-ilmversity.jpg"] },
};

export default function IlmversityPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://codesummix.com/" },
            { "@type": "ListItem", position: 2, name: "Work", item: "https://codesummix.com/work/" },
            { "@type": "ListItem", position: 3, name: "Ilmversity", item: "https://codesummix.com/work/ilmversity/" },
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
          <span className="eyebrow">Case study · EdTech · Pakistan</span>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", marginTop: "0.7rem" }}>
            Ilmversity: a learning management system for schools
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: "720px", marginTop: "1rem", fontSize: "1.08rem" }}>
            Ilmversity is a learning management system built for schools and educational institutions
            across Pakistan. It brings course delivery, classrooms, assessments, and day-to-day
            administration online in a single, modern platform, and it's trusted by schools nationwide.
          </p>
          <div className="feature-case__chips" style={{ marginTop: "1.4rem" }}>
            <span>LMS</span>
            <span>Course Delivery</span>
            <span>Assessments</span>
            <span>School Admin</span>
            <span>Web App</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Trusted by schools</span>
            <h2 className="section__title">Schools across Pakistan run on Ilmversity.</h2>
            <p className="section__sub">
              From large school systems to individual campuses: institutions rely on the platform every
              day to teach, assess, and manage.
            </p>
          </div>
          <div className="client-strip" data-reveal>
            <span>
              <img src="/assets/img/cases/ilm-clients/adamjee.png" alt="Adamjee" />
            </span>
            <span>
              <img src="/assets/img/cases/ilm-clients/dar-e-arqam.png" alt="Dar-e-Arqam Schools" />
            </span>
            <span>
              <img src="/assets/img/cases/ilm-clients/sukkur-iba.png" alt="Sukkur IBA" />
            </span>
            <span>
              <img src="/assets/img/cases/ilm-clients/scarsdale.png" alt="Scarsdale" />
            </span>
            <span>
              <img src="/assets/img/cases/ilm-clients/nordic-international.png" alt="Nordic International" />
            </span>
            <span>
              <img src="/assets/img/cases/ilm-clients/lecole-mondiale.png" alt="L'ecole Mondiale" />
            </span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">What we built</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                The whole school, in one platform.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                Teachers deliver courses and content, set and grade assessments, and track progress.
                Administrators manage students, classes, and the day-to-day from a single place.
                Everything lives in one <Link href="/services/web-applications/">fast, modern web application</Link> built to handle many schools at
                once.
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
                  <b>Course &amp; content delivery</b>
                  <em>Lessons and materials for every class</em>
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
                  <b>Student &amp; teacher management</b>
                  <em>Roles, classes, and rosters</em>
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
                  <b>Assessments &amp; grading</b>
                  <em>Set, submit, and mark work online</em>
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
                  <b>Progress tracking</b>
                  <em>Insights for teachers and admins</em>
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
                  <b>Administration tools</b>
                  <em>Run the institution from one dashboard</em>
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
                  <b>Multi-school web app</b>
                  <em>Fast and modern, built to scale</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Building for education?</h2>
            <p className="cta__sub">
              LMS, e-learning, school or campus management: <Link href="/edtech/">education technology</Link> is our specialty.
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
