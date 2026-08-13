import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "E-Learning Platform Development | Bright Future Case Study",
  description:
    "How we built Bright Future, a B2B e-learning platform serving universities in Kuwait: video streaming, payments and multi-tenant course delivery.",
  keywords:
    "e-learning platform development, e-learning development, education technology company, LMS development, EdTech specialists, custom e-learning software, online course platform development, video streaming platform, Laravel e-learning platform, mobile app development",
  alternates: { canonical: "https://codesummix.com/work/bright-future/" },
  openGraph: { title: "E-Learning Platform Development | Bright Future Case Study", description: "How we built Bright Future, a B2B e-learning platform serving universities in Kuwait: video streaming, payments and multi-tenant course delivery.", url: "https://codesummix.com/work/bright-future/", type: "article", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/og/work-bright-future.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "E-Learning Platform Development | Bright Future Case Study", description: "How we built Bright Future, a B2B e-learning platform serving universities in Kuwait: video streaming, payments and multi-tenant course delivery.", images: ["https://codesummix.com/assets/og/work-bright-future.jpg"] },
};

export default function BrightFutureCaseStudy() {
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
              name: "Bright Future",
              item: "https://codesummix.com/work/bright-future/",
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
          <span className="eyebrow">Case study · EdTech · Kuwait</span>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", marginTop: "0.7rem" }}>
            Bright Future: a complete e-learning platform
          </h1>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: "720px",
              marginTop: "1rem",
              fontSize: "1.08rem",
            }}
          >
            Bright Future Institute needed one platform to deliver private training and
            university-level courses across Kuwait: to students on mobile and to staff on the web,
            with paid enrollment, secure video, and full administrative control. We designed and
            built the entire system, end to end.
          </p>
          <div className="feature-case__chips" style={{ marginTop: "1.4rem" }}>
            <span>Laravel</span>
            <span>React</span>
            <span>iOS &amp; Android</span>
            <span>REST API</span>
            <span>Video Streaming</span>
            <span>Online Payments</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">The student app</span>
            <h2 className="section__title">Learning that fits in a pocket.</h2>
            <p className="section__sub">
              Native <Link href="/services/mobile-apps/">iOS and Android apps where students browse</Link> the catalogue, subscribe, and watch
              HD lessons, with cart, coupons, and secure checkout built in.
            </p>
          </div>
          <div className="case-gallery">
            <div data-reveal="">
              <div className="phone-mock">
                <img
                  src="/assets/img/cases/bf-app-480.jpeg"
                  alt="Bright Future app: home and course catalogue"
                  loading="lazy"
                />
              </div>
              <p className="shot-cap">Home &amp; course catalogue</p>
            </div>
            <div data-reveal="" data-reveal-delay="1">
              <div className="phone-mock">
                <img
                  src="/assets/img/cases/bf-app-cart.png"
                  alt="Bright Future app: cart"
                  loading="lazy"
                />
              </div>
              <p className="shot-cap">Cart &amp; enrollment</p>
            </div>
            <div data-reveal="" data-reveal-delay="2">
              <div className="phone-mock">
                <img
                  src="/assets/img/cases/bf-app-payment.png"
                  alt="Bright Future app: secure payment"
                  loading="lazy"
                />
              </div>
              <p className="shot-cap">Secure payment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">The admin dashboard</span>
            <h2 className="section__title">Run the whole institute from one screen.</h2>
            <p className="section__sub">
              A <Link href="/services/web-applications/">web dashboard for staff</Link>: enrolments, revenue, transactions, invoices, coupons, and
              reports, all in real time.
            </p>
          </div>
          <div className="browser-mock" data-reveal="">
            <div className="browser-mock__bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img
              src="/assets/img/cases/bf-dash-1.jpg"
              alt="Bright Future admin dashboard: overview, revenue and stats"
              loading="lazy"
            />
          </div>
          <div className="case-shots" style={{ marginTop: "1.25rem" }}>
            <div className="browser-mock" data-reveal="">
              <div className="browser-mock__bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img
                src="/assets/img/cases/bf-dash-2.png"
                alt="Bright Future admin: transactions, invoices and coupons"
                loading="lazy"
              />
            </div>
            <div className="browser-mock" data-reveal="" data-reveal-delay="1">
              <div className="browser-mock__bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img
                src="/assets/img/cases/bf-dash-3.png"
                alt="Bright Future admin: schedules and tasks"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal="">
              <span className="eyebrow">The challenge</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>
                One platform, three products, four roles.
              </h2>
              <p style={{ marginTop: "1.1rem" }}>
                Courses had to reach students on the web and on native mobile apps, while
                administrators and instructors managed content, enrollments, and finances from a
                single dashboard: all backed by one source of truth and secure, paid video.
              </p>
              <p>
                We owned the whole stack: a Laravel REST API, a React admin panel, and native iOS
                and Android apps, so everything stays consistent and easy to evolve.
              </p>
            </div>
            <ul className="feature-list" data-reveal="" data-reveal-delay="1">
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
                  <b>Web admin dashboard</b>
                  <em>Courses, users, finances, invoices &amp; reports</em>
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
                  <b>Native iOS &amp; Android apps</b>
                  <em>For students and instructors</em>
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
                  <b>HD video lessons</b>
                  <em>Secure, access-controlled streaming</em>
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
                  <b>Online payments</b>
                  <em>Coupons, installments &amp; invoices</em>
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
                  <b>Role-based access</b>
                  <em>Students, instructors, admins &amp; super-admins</em>
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
                  <b>One Laravel API</b>
                  <em>Powering web and both mobile apps</em>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal="">
            <h2 className="cta__title">Building something like this?</h2>
            <p className="cta__sub">
              Whether it&apos;s <Link href="/edtech/">an e-learning platform</Link>, a marketplace, or a mobile app: we can take
              it from idea to launch.
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
