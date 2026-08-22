import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { rich } from "@/components/AuPage";
import { ArrowIcon } from "@/components/icons";
import { getPost, posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const url = `${SITE_URL}/blog/${p.slug}/`;
  const og = `${SITE_URL}/assets/og/blog-${p.slug}.jpg`;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url,
      type: "article",
      siteName: "Devarko",
      locale: "en_AU",
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.metaDescription,
      images: [og],
    },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const url = `${SITE_URL}/blog/${p.slug}/`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.metaDescription,
          image: `${SITE_URL}/assets/og/blog-${p.slug}.jpg`,
          datePublished: p.publishedAt,
          dateModified: p.publishedAt,
          mainEntityOfPage: url,
          author: { "@type": "Person", name: "Waleed Naeem", jobTitle: "Founder & CEO" },
          publisher: {
            "@type": "Organization",
            name: "Devarko",
            url: `${SITE_URL}/`,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/img/icon-512.png` },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog/` },
            { "@type": "ListItem", position: 3, name: p.title, item: url },
          ],
        }}
      />

      <section className="page-hero" style={{ paddingBottom: "clamp(1.5rem,3vw,2.5rem)" }}>
        <div className="page-hero__glow"></div>
        <div className="container">
          <Link className="case-back" href="/blog/">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>{" "}
            All articles
          </Link>
          <span className="eyebrow">{p.category}</span>
          <h1 style={{ maxWidth: "820px", marginInline: "auto" }}>{p.title}</h1>
          <p className="post-byline">
            By Waleed Naeem · {formatDate(p.publishedAt)} · {p.readMinutes} min read
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(1.5rem,3vw,2.5rem)" }}>
        <div className="container">
          <article className="post-body">
            {p.intro.map((par, i) => (
              <p className="post-lede" key={`i${i}`}>
                {rich(par)}
              </p>
            ))}
            {p.sections.map((s) => (
              <section key={s.h2}>
                <h2>{s.h2}</h2>
                {s.paragraphs.map((par, i) => (
                  <p key={i}>{rich(par)}</p>
                ))}
              </section>
            ))}

            <h2>Common questions</h2>
            <div className="faq">
              {p.faqs.map((f, i) => (
                <details name="faq" key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <div className="faq__a">{f.a}</div>
                </details>
              ))}
            </div>
          </article>

          <div className="cta__inner post-cta" data-reveal>
            <h2 className="cta__title">Planning something like this?</h2>
            <p className="cta__sub">
              Talk it through with the people who build and rank their own sites. We reply within
              one business day.
            </p>
            <div className="cta__actions">
              <Link className="btn btn--primary btn--lg" href="/contact/">
                Start a conversation <ArrowIcon />
              </Link>
              <Link className="btn btn--ghost btn--lg" href="/packages/">
                See packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
