import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { ArrowIcon } from "@/components/icons";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

const TITLE = "Software Insights for EdTech & Freight | Devarko";
const DESCRIPTION =
  "Practical writing from the Devarko team: custom software costs, LMS decisions, freight digitization and Pakistani e-invoicing, from people who build these systems.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "software development blog, custom software insights, freight forwarding software, LMS development, PRA e-invoicing, EdTech development, Devarko blog",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/`,
    type: "website",
    siteName: "Devarko",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/assets/og/blog.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/assets/og/blog.jpg`],
  },
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog/` },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Devarko Insights",
          url: `${SITE_URL}/blog/`,
          publisher: { "@id": `${SITE_URL}/#org` },
        }}
      />

      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Insights
          </span>
          <h1 data-reveal data-reveal-delay="1">
            Notes from the people who build it.
          </h1>
          <p data-reveal data-reveal-delay="2">
            Costs, trade-offs and hard-won lessons from real EdTech and freight projects. No fluff,
            no recycled listicles.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem,4vw,3rem)" }}>
        <div className="container">
          <div className="post-grid">
            {posts.map((p, i) => (
              <Link
                className="post-card"
                href={`/blog/${p.slug}/`}
                key={p.slug}
                data-reveal
                {...(i % 2 ? { "data-reveal-delay": "1" } : {})}
              >
                <span className="post-card__meta">
                  <b>{p.category}</b> · {formatDate(p.publishedAt)} · {p.readMinutes} min read
                </span>
                <h2>{p.title}</h2>
                <p>{p.metaDescription}</p>
                <span className="card__link">
                  Read the article <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
