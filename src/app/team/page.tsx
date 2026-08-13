import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Software Development Team in Lahore | CodeSumMix",
  description:
    "Meet the senior team behind CodeSumMix: finance, engineering leadership, and full-stack engineers across web, mobile and cloud who ship and then support what they build.",
  keywords:
    "software development team, Laravel developers Lahore, React developers Pakistan, React Native developers, UI/UX designers Pakistan, QA engineers Lahore, DevOps engineers, dedicated development team, software house team",
  alternates: { canonical: "https://codesummix.com/team/" },
  openGraph: { title: "Software Development Team in Lahore | CodeSumMix", description: "Meet the senior team behind CodeSumMix: finance, engineering leadership, and full-stack engineers across web, mobile and cloud who ship and then support what they build.", url: "https://codesummix.com/team/", type: "website", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/img/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Software Development Team in Lahore | CodeSumMix", description: "Meet the senior team behind CodeSumMix: finance, engineering leadership, and full-stack engineers across web, mobile and cloud who ship and then support what they build.", images: ["https://codesummix.com/assets/img/og-image.png"] },
};

export default function TeamPage() {
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
              name: "Team",
              item: "https://codesummix.com/team/",
            },
          ],
        }}
      />
      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>Our team</span>
          <h1 data-reveal data-reveal-delay="1">The senior team behind your product.</h1>
          <p data-reveal data-reveal-delay="2">A small, senior, founder-led team. The people on this page are the people who actually design, build and support your product, not freelancers stitched together.</p>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="team-grid">
            <article className="member member--lead" data-reveal>
              <div className="member__ico member__ico--photo"><span>WN</span><img src="/assets/img/founder.jpg?v=1" alt="Waleed Naeem, Founder and CEO of CodeSumMix" /></div>
              <h3 className="member__name">Waleed Naeem</h3>
              <span className="member__role">Founder &amp; CEO</span>
              <span className="member__focus">Product &amp; Delivery</span>
              <p className="member__bio">Built Bright Future end to end for a client in Kuwait, and turned that standard into Cargonio, our own ERP. Runs client projects personally.</p>
            </article>
            <article className="member" data-reveal data-reveal-delay="1">
              <div className="member__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M19 8l-5 5-4-4-3 3"/></svg></div>
              <h3 className="member__name">Yashfa</h3>
              <span className="member__role">CFO</span>
              <span className="member__focus">Finance &amp; Operations</span>
              <p className="member__bio">Keeps every engagement transparent, predictable, and on-budget: from estimates to invoicing.</p>
            </article>
            <article className="member" data-reveal data-reveal-delay="2">
              <div className="member__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
              <h3 className="member__name">Yousuf Chaudary</h3>
              <span className="member__role">CTO</span>
              <span className="member__focus">Architecture &amp; Engineering</span>
              <p className="member__bio">Sets technical direction, reviews code, and owns delivery quality across every project.</p>
            </article>
            <article className="member" data-reveal>
              <div className="member__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10.5 18.5h3"/></svg></div>
              <h3 className="member__name">Qasim Yousuf</h3>
              <span className="member__role">Full-Stack Engineer</span>
              <span className="member__focus">Mobile, Backend, Cloud &amp; DevOps</span>
              <p className="member__bio">Native-quality iOS &amp; Android apps with React Native, with Laravel APIs, AWS and CI/CD underneath.</p>
            </article>
            <article className="member" data-reveal data-reveal-delay="1">
              <div className="member__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
              <h3 className="member__name">Subhan Naveed</h3>
              <span className="member__role">Full-Stack Engineer</span>
              <span className="member__focus">Frontend &amp; Experience</span>
              <p className="member__bio">React &amp; TypeScript, design systems, and pixel-accurate, accessible interfaces.</p>
            </article>
            <article className="member" data-reveal data-reveal-delay="2">
              <div className="member__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg></div>
              <h3 className="member__name">Shahzaib Naseem</h3>
              <span className="member__role">Full-Stack Engineer</span>
              <span className="member__focus">Frontend &amp; Experience</span>
              <p className="member__bio">Next.js and Laravel, dashboards and admin panels that feel fast and read clearly.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="case-split">
            <div data-reveal>
              <span className="eyebrow">How we work</span>
              <h2 className="section__title" style={{ marginTop: "1rem" }}>A dedicated team, not a ticket queue.</h2>
              <p style={{ marginTop: "1.1rem" }}>Every engagement gets a focused pod from this team: engineering, QA, and a clear point of contact, so work moves fast and quality stays high. You always know who&apos;s building your product.</p>
            </div>
            <ul className="feature-list" data-reveal data-reveal-delay="1">
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Senior by default</b><em>Experienced engineers on every project</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>QA built in</b><em>Dedicated testers, not an afterthought</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>One accountable team</b><em>From design through launch and support</em></span></li>
              <li><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span><span className="feature-list__copy"><b>Clear communication</b><em>Weekly demos and a single point of contact</em></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal>
            <h2 className="cta__title">Want this team on your product?</h2>
            <p className="cta__sub">Tell us what you&apos;re building: we&apos;ll put the right people on it.</p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">Start a project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/work/">See our work</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
