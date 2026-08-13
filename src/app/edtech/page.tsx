import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "EdTech Specialists | E-learning & LMS Development",
  description:
    "EdTech specialists building e-learning platforms, school LMS and course apps: three education platforms live across Kuwait, Pakistan and the USA.",
  keywords:
    "EdTech specialists, education technology company, e-learning development, LMS development, learning management system development, online course platform development, e-learning app development, EdTech development company, school management software, education software development Pakistan",
  alternates: { canonical: "https://codesummix.com/edtech/" },
  openGraph: { title: "EdTech Specialists | E-learning & LMS Development | CodeSumMix", description: "EdTech specialists building e-learning platforms, school LMS and course apps: three education platforms live across Kuwait, Pakistan and the USA.", url: "https://codesummix.com/edtech/", type: "website", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/og/edtech.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "EdTech Specialists | E-learning & LMS Development | CodeSumMix", description: "EdTech specialists building e-learning platforms, school LMS and course apps: three education platforms live across Kuwait, Pakistan and the USA.", images: ["https://codesummix.com/assets/og/edtech.jpg"] },
};

export default function EdTechPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "EdTech Specialists",
          name: "EdTech Specialists: E-learning & LMS Development",
          description:
            "EdTech specialists building e-learning platforms, school LMS and course apps: three education platforms live across Kuwait, Pakistan and the USA.",
          url: "https://codesummix.com/edtech/",
          provider: {
            "@type": "Organization",
            name: "CodeSumMix",
            url: "https://codesummix.com/",
          },
          areaServed: "Worldwide",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What makes an EdTech build different from a normal web app?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Three things usually: video that has to stream securely and cheaply at scale, access rules that decide who can see what and for how long, and payment logic that is rarely a simple one-off charge. Get those wrong and the product works fine in a demo then falls apart in a term. We have already solved them in production, which is most of what you are buying.",
              },
            },
            {
              "@type": "Question",
              name: "Can you build the mobile apps as well as the platform?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and we would argue you should do both together. The Bright Future student apps for iOS and Android run on the same Laravel API as the web platform, so a change to an enrolment rule does not have to be written three times. Building the apps later, against an API that was never designed for them, is how teams end up with three products that disagree.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with schools, or universities, or training companies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "All three, and they want different things. A school LMS is about timetables, sections, attendance and parents. A university or training provider is about paid enrolment, cohorts and certification. A professional body is about credits and compliance. We have shipped for each, so we can tell you early which parts of your brief are normal and which are unusual.",
              },
            },
            {
              "@type": "Question",
              name: "We already have an LMS. Can you improve it rather than replace it?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes, and it is usually the cheaper answer. Most complaints we hear about an existing LMS are about video delivery, payments or reporting rather than the whole system. We will read what you have before recommending a rebuild, and if replacing one module fixes the problem we will say so.",
              },
            },
          ],
        }}
      />
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
              name: "EdTech Specialists",
              item: "https://codesummix.com/edtech/",
            },
          ],
        }}
      />
      <section className="svc-hero">
        <span className="svc-hero__orb svc-hero__orb--1" aria-hidden="true"></span>
        <span className="svc-hero__orb svc-hero__orb--2" aria-hidden="true"></span>
        <div className="container">
          <div className="svc-hero__inner">
            <span className="eyebrow">Speciality · Education technology</span>
            <h1>EdTech specialists: we build what students actually log into</h1>
            <p className="svc-hero__lede">Education technology is not a vertical we added to a list. Three of our platforms are learning products in daily use: a B2B e-learning platform for universities in Kuwait, a school LMS used across Pakistan, and a professional education site for veterinarians in the United States.</p>
            <div className="svc-hero__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">Start a project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
              <Link className="btn btn--ghost btn--lg" href="/work/">See our work</Link>
            </div>
          </div>
          <div className="svc-stats" data-reveal data-stagger>
            <div className="svc-stat"><b>3 platforms</b><span>learning products live in production</span></div>
            <div className="svc-stat"><b>Kuwait · PK · USA</b><span>students and staff on three continents</span></div>
            <div className="svc-stat"><b>HD video</b><span>secure streaming with access control</span></div>
            <div className="svc-stat"><b>iOS + Android</b><span>native student apps, not a wrapper</span></div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">Why us</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>The hard parts of e-learning are never the course list</h2>
              <p style={{ marginTop: "1.1rem" }}>Anyone can build a page that lists courses. The parts that decide whether a learning platform survives contact with real users are video that plays on a weak connection, payments that cope with instalments and coupons, access rules that stop a lapsed student watching paid content, and an admin panel a non-technical coordinator can run without calling you.</p>
              <p>We have built all of that and we maintain it. Bright Future delivers private training and university-level courses across Kuwait on web, iOS and Android. Ilmversity runs course delivery, assessments and administration for schools nationwide. VetandTech puts RACE-approved CE webinars in front of veterinary professionals in the USA.</p>
            </div>
            <ul className="feature-list" data-reveal data-stagger>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Secure HD video</b><em>HLS streaming with access control</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Payments &amp; instalments</b><em>Enrolment, coupons, part-payment plans</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Multi-role access</b><em>Students, instructors, admins, super-admins</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Progress &amp; analytics</b><em>What learners finish, and what they abandon</em></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">What we build</span>
            <h2 className="section__title">Where the domain knowledge shows.</h2>
          </div>
          <div className="svc-grid" data-reveal data-stagger>
            <article className="svc-card"><span className="svc-card__n">01</span><h3>Learning management systems</h3><p>Courses, chapters, lessons, assessments and grading, with the administration a school or university actually runs on: timetables, sections, enrolment and reporting.</p></article>
            <article className="svc-card"><span className="svc-card__n">02</span><h3>Secure video delivery</h3><p>HD lessons over HLS with access control, so paid content stays paid. We use Bunny CDN in production and design for students on patchy mobile connections, not office fibre.</p></article>
            <article className="svc-card"><span className="svc-card__n">03</span><h3>Payments &amp; enrolment</h3><p>Card payments, coupons, discounts and instalment plans: including MyFatoorah for Kuwait and Stripe elsewhere. Enrolment, expiry and renewal logic is where most e-learning builds get messy; we treat it as core.</p></article>
            <article className="svc-card"><span className="svc-card__n">04</span><h3>Native student apps</h3><p>iOS and Android from one React Native codebase, sharing the same API as the web platform, so a rule written once applies everywhere. Both apps shipped and maintained on the stores.</p></article>
            <article className="svc-card"><span className="svc-card__n">05</span><h3>Instructor &amp; admin tooling</h3><p>The screens staff live in: uploading content, managing cohorts, tracking payments, answering support. Usually the least glamorous part of an EdTech build and the one that decides whether it gets adopted.</p></article>
            <article className="svc-card"><span className="svc-card__n">06</span><h3>Professional &amp; CE education</h3><p>Not all learning is a school. VetandTech delivers free RACE-approved continuing-education webinars with credit tracking and a sponsor ecosystem for veterinary professionals.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Proof</span>
            <h2 className="section__title">Live, and being used today.</h2>
          </div>
          <div className="case-grid">
            <Link className="case-card" href="/work/bright-future/" data-reveal>
              <div className="case-card__cover"><img className="cover" src="/assets/img/cases/bf-dash-1.jpg" alt="Bright Future: EdTech · Kuwait" loading="lazy"/></div>
              <div className="case-card__body"><span className="case-card__meta">EdTech · Kuwait</span><h3 className="case-card__title">Bright Future</h3>
              <p className="case-card__desc">B2B e-learning for universities and training programs: web dashboard, native apps, secure video and online payments.</p>
              <span className="case-card__link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
            </Link>
            <Link className="case-card" href="/work/ilmversity/" data-reveal>
              <div className="case-card__cover"><img className="cover" src="/assets/img/cases/ilm-site.jpg" alt="Ilmversity: EdTech · Pakistan" loading="lazy"/></div>
              <div className="case-card__body"><span className="case-card__meta">EdTech · Pakistan</span><h3 className="case-card__title">Ilmversity</h3>
              <p className="case-card__desc">A learning management system for schools nationwide: courses, assessments and day-to-day administration.</p>
              <span className="case-card__link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
            </Link>
            <Link className="case-card" href="/work/vetandtech/" data-reveal>
              <div className="case-card__cover"><img className="cover" src="/assets/img/cases/vt-site.jpg" alt="VetandTech: Vet EdTech · USA" loading="lazy"/></div>
              <div className="case-card__body"><span className="case-card__meta">Vet EdTech · USA</span><h3 className="case-card__title">VetandTech</h3>
              <p className="case-card__desc">Online veterinary education: RACE-approved CE webinars, courses and surgical training resources.</p>
              <span className="case-card__link">Read more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section__head section__head--center" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="section__title">What clients ask us first.</h2>
          </div>
          <div className="faq" data-reveal>
            <details open><summary>What makes an EdTech build different from a normal web app?</summary><div className="faq__a">Three things usually: video that has to stream securely and cheaply at scale, access rules that decide who can see what and for how long, and payment logic that is rarely a simple one-off charge. Get those wrong and the product works fine in a demo then falls apart in a term. We have already solved them in production, which is most of what you are buying.</div></details>
            <details><summary>Can you build the mobile apps as well as the platform?</summary><div className="faq__a">Yes, and we would argue you should do both together. The Bright Future student apps for iOS and Android run on the same Laravel API as the web platform, so a change to an enrolment rule does not have to be written three times. Building the apps later, against an API that was never designed for them, is how teams end up with three products that disagree.</div></details>
            <details><summary>Do you work with schools, or universities, or training companies?</summary><div className="faq__a">All three, and they want different things. A school LMS is about timetables, sections, attendance and parents. A university or training provider is about paid enrolment, cohorts and certification. A professional body is about credits and compliance. We have shipped for each, so we can tell you early which parts of your brief are normal and which are unusual.</div></details>
            <details><summary>We already have an LMS. Can you improve it rather than replace it?</summary><div className="faq__a">Often, yes, and it is usually the cheaper answer. Most complaints we hear about an existing LMS are about video delivery, payments or reporting rather than the whole system. We will read what you have before recommending a rebuild, and if replacing one module fixes the problem we will say so.</div></details>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Building something for learners?</h2>
            <p className="cta__sub">Tell us who is learning, how they pay, and what has to work on a phone with two bars of signal. We will tell you which parts are straightforward and which ones tend to bite.</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">Start a project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></Link>
              <a className="btn btn--ghost btn--lg" href="https://wa.me/923203271071" target="_blank" rel="noopener">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
