import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Software Development Services | Web, AI, CRM | CodeSumMix",
  description:
    "Custom software, web and mobile apps, AI automation, CRM builds, cloud DevOps, UI/UX and QA: delivered end to end by one Lahore-based engineering team.",
  keywords:
    "software development services, custom software development, web development, mobile app development, CRM development, AI solutions and automation, cloud and DevOps services, UI/UX design services, QA and testing services, e-learning development, ERP development, SEO and digital marketing",
  alternates: { canonical: "https://codesummix.com/services/" },
  openGraph: { title: "Software Development Services | Web, AI, CRM | CodeSumMix", description: "Custom software, web and mobile apps, AI automation, CRM builds, cloud DevOps, UI/UX and QA: delivered end to end by one Lahore-based engineering team.", url: "https://codesummix.com/services/", type: "website", siteName: "CodeSumMix", locale: "en_US", images: [{ url: "https://codesummix.com/assets/og/services.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Software Development Services | Web, AI, CRM | CodeSumMix", description: "Custom software, web and mobile apps, AI automation, CRM builds, cloud DevOps, UI/UX and QA: delivered end to end by one Lahore-based engineering team.", images: ["https://codesummix.com/assets/og/services.jpg"] },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://codesummix.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://codesummix.com/services/" },
          ],
        }}
      />
      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal="">Services</span>
          <h1 data-reveal="" data-reveal-delay="1">Everything you need to design, build, and ship.</h1>
          <p data-reveal="" data-reveal-delay="2">One team for the whole journey: from idea and design to launch, scaling, and support. Here&apos;s what we do best.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem,4vw,3rem)" }}>
        <div className="container">
          <div className="grid services__grid">

            <Link className="card card--link" href="/services/custom-software/" data-reveal="">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13.5 6l-3 12"/></svg></div>
              <h3 className="card__title">Custom Software</h3>
              <p className="card__text">Tailored platforms, internal tools, and SaaS products engineered around your workflows, not a template.</p>
              <ul className="card__points"><li>Internal tools &amp; dashboards</li><li>SaaS &amp; multi-tenant products</li><li>Workflow automation</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

            <Link className="card card--ai card--link" href="/services/ai-solutions/" data-reveal="" data-reveal-delay="1">
              <span className="card__badge">In demand</span>
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"/><path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z"/></svg></div>
              <h3 className="card__title">AI Solutions &amp; Automation</h3>
              <p className="card__text">Put your data to work with intelligent features and automation that cut manual effort.</p>
              <ul className="card__points"><li>LLM features &amp; chatbots</li><li>RAG / document search</li><li>Process automation</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

            <Link className="card card--link" href="/services/web-applications/" data-reveal="" data-reveal-delay="2">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg></div>
              <h3 className="card__title">Web Applications</h3>
              <p className="card__text">Fast, accessible, SEO-ready web apps that load instantly and scale cleanly.</p>
              <ul className="card__points"><li>React &amp; Next.js</li><li>Laravel &amp; PHP</li><li>Performance &amp; SEO</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

            <Link className="card card--link" href="/services/mobile-apps/" data-reveal="">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg></div>
              <h3 className="card__title">Mobile Apps</h3>
              <p className="card__text">Native-quality iOS and Android apps from a single, maintainable codebase.</p>
              <ul className="card__points"><li>iOS &amp; Android</li><li>React Native</li><li>App Store &amp; Play delivery</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

            <Link className="card card--link" href="/services/crm-solutions/" data-reveal="" data-reveal-delay="1">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 7.5a2.6 2.6 0 0 1 0 5M21 20a5 5 0 0 0-4-4.9"/></svg></div>
              <h3 className="card__title">CRM Solutions</h3>
              <p className="card__text">Get your sales and operations running on one connected, automated system.</p>
              <ul className="card__points"><li>Salesforce, Zoho, Bitrix24</li><li>Setup &amp; customization</li><li>Integration &amp; migration</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

            <Link className="card card--link" href="/services/cloud-devops/" data-reveal="" data-reveal-delay="2">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 19a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 18 9.5a3.5 3.5 0 0 1-.5 9.5z"/><path d="M9.5 14.5l2 2 3.5-4"/></svg></div>
              <h3 className="card__title">Cloud &amp; DevOps</h3>
              <p className="card__text">Scalable infrastructure and safe, repeatable releases on any major cloud.</p>
              <ul className="card__points"><li>AWS / GCP / Azure</li><li>CI/CD pipelines</li><li>Monitoring &amp; scaling</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

            <Link className="card card--link" href="/services/ui-ux-design/" data-reveal="">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7-4-4-7 7v4z"/><path d="M14.5 6.5l3 3M5 21h6"/></svg></div>
              <h3 className="card__title">UI/UX &amp; Product Design</h3>
              <p className="card__text">Research-driven interfaces that are beautiful, intuitive, and built to convert.</p>
              <ul className="card__points"><li>Research &amp; wireframes</li><li>Design systems</li><li>Interactive prototypes</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

            <Link className="card card--link" href="/services/qa-testing/" data-reveal="" data-reveal-delay="1">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
              <h3 className="card__title">QA &amp; Testing</h3>
              <p className="card__text">Catch issues before your users do, so every release ships with confidence.</p>
              <ul className="card__points"><li>Manual &amp; automated testing</li><li>Regression suites</li><li>Performance testing</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

            <Link className="card card--link" href="/services/seo-marketing/" data-reveal="" data-reveal-delay="2">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M8 11h6M11 8v6"/></svg></div>
              <h3 className="card__title">SEO &amp; Digital Marketing</h3>
              <p className="card__text">Help the right people find you, and turn visits into customers.</p>
              <ul className="card__points"><li>Technical SEO</li><li>Core Web Vitals</li><li>Content &amp; analytics</li></ul>

              <span className="card__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </Link>

          </div>
        </div>
      </section>

      <section className="section section--tight" id="engagement">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">How we work with you</span>
            <h2 className="section__title">Full build, a dedicated team, or just expert advice.</h2>
            <p className="section__sub">Not every project needs us to build the whole thing. Pick the engagement that fits where you are.</p>
          </div>
          <div className="grid services__grid">
            <article className="card" data-reveal="">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></div>
              <h3 className="card__title">Full Product Build</h3>
              <p className="card__text">We take your idea from design to launch and own delivery end to end: the whole product, one accountable team.</p>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="1">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 7.5a2.6 2.6 0 0 1 0 5M21 20a5 5 0 0 0-4-4.9"/></svg></div>
              <h3 className="card__title">Dedicated Team</h3>
              <p className="card__text">Embed our senior engineers and designers into your existing team to add capacity and ship faster.</p>
            </article>
            <article className="card" data-reveal="" data-reveal-delay="2">
              <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg></div>
              <h3 className="card__title">Consulting &amp; Advisory</h3>
              <p className="card__text">Just need guidance? Architecture reviews, code audits, tech-stack &amp; product strategy, and fractional-CTO support, no full build required.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="stack section--tight" id="stack">
        <div className="container">
          <div className="section__head section__head--center" data-reveal="">
            <span className="eyebrow">Our tech stack</span>
            <h2 className="section__title">Technologies, platforms &amp; tools we build with.</h2>
          </div>
          <div className="stack__groups">

            <div className="stack__group" data-reveal="">
              <h3 className="stack__cat">Languages &amp; Frameworks</h3>
              <div className="stack__row">
                <span className="stack__item">TypeScript</span>
                <span className="stack__item">JavaScript</span>
                <span className="stack__item">PHP</span>
                <span className="stack__item">Laravel</span>
                <span className="stack__item">Python</span>
                <span className="stack__item">Django</span>
                <span className="stack__item">Node.js</span>
                <span className="stack__item">React</span>
                <span className="stack__item">Next.js</span>
                <span className="stack__item">Vue.js</span>
                <span className="stack__item">Java</span>
                <span className="stack__item">Go</span>
              </div>
            </div>

            <div className="stack__group" data-reveal="" data-reveal-delay="1">
              <h3 className="stack__cat">Mobile</h3>
              <div className="stack__row">
                <span className="stack__item">iOS (Swift)</span>
                <span className="stack__item">Android (Kotlin)</span>
                <span className="stack__item">React&nbsp;Native</span>
                <span className="stack__item">Flutter</span>
              </div>
            </div>

            <div className="stack__group" data-reveal="">
              <h3 className="stack__cat">Desktop Applications</h3>
              <div className="stack__row">
                <span className="stack__item">Electron</span>
                <span className="stack__item">.NET / WPF</span>
                <span className="stack__item">C#</span>
                <span className="stack__item">C++</span>
                <span className="stack__item">Qt</span>
                <span className="stack__item">Tauri</span>
                <span className="stack__item">JavaFX</span>
                <span className="stack__item">macOS (Swift)</span>
              </div>
            </div>

            <div className="stack__group stack__group--ai" data-reveal="" data-reveal-delay="1">
              <h3 className="stack__cat">AI &amp; Automation</h3>
              <div className="stack__row">
                <span className="stack__item">OpenAI</span>
                <span className="stack__item">Claude</span>
                <span className="stack__item">LangChain</span>
                <span className="stack__item">RAG &amp; LLM apps</span>
                <span className="stack__item">TensorFlow</span>
                <span className="stack__item">PyTorch</span>
                <span className="stack__item">Hugging Face</span>
                <span className="stack__item">Workflow automation</span>
              </div>
            </div>

            <div className="stack__group" data-reveal="">
              <h3 className="stack__cat">CRM &amp; Platforms</h3>
              <div className="stack__row">
                <span className="stack__item">Salesforce</span>
                <span className="stack__item">Zoho</span>
                <span className="stack__item">Bitrix24</span>
                <span className="stack__item">HubSpot</span>
                <span className="stack__item">WordPress</span>
                <span className="stack__item">Shopify</span>
              </div>
            </div>

            <div className="stack__group" data-reveal="" data-reveal-delay="1">
              <h3 className="stack__cat">Cloud, DevOps &amp; Data</h3>
              <div className="stack__row">
                <span className="stack__item">AWS</span>
                <span className="stack__item">Google Cloud</span>
                <span className="stack__item">Azure</span>
                <span className="stack__item">Docker</span>
                <span className="stack__item">Kubernetes</span>
                <span className="stack__item">PostgreSQL</span>
                <span className="stack__item">MySQL</span>
                <span className="stack__item">MongoDB</span>
                <span className="stack__item">Redis</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta__inner" data-reveal="">
            <h2 className="cta__title">Not sure where to start?</h2>
            <p className="cta__sub">Tell us the problem you&apos;re trying to solve. We&apos;ll help you scope it and recommend the right approach.</p>
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
