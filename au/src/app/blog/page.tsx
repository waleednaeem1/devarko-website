import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { ArrowIcon } from "@/components/icons";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

const TITLE = "Web Design & SEO Insights for Australia | Devarko";
const DESCRIPTION =
  "Practical writing for Australian businesses: what a website costs, choosing a web designer, and SEO that works, from the studio that builds and ranks its own sites.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "web design blog Australia, website cost Australia, SEO tips Australia, choosing a web designer, small business website, Devarko insights",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/`,
    type: "website",
    siteName: "Devarko",
    locale: "en_AU",
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
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", {
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
          name: "Devarko Australia Insights",
          url: `${SITE_URL}/blog/`,
          publisher: { "@id": `${SITE_URL}/#business` },
        }}
      />

      <section className="page-hero">
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow" data-reveal>
            Insights
          </span>
          <h1 data-reveal data-reveal-delay="1">
            Web and SEO, explained for Australian business.
          </h1>
          <p data-reveal data-reveal-delay="2">
            Straight answers on what a site costs, how to hire, and what actually moves you up
            Google. Written by the people who build it.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(2rem,4vw,3rem)" }}>
        <div className="container">
          {posts.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--muted)" }}>New articles are on the way.</p>
          ) : (
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
          )}
        </div>
      </section>
    </main>
  );
}
