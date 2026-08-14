import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page Not Found | Devarko",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <section className="page-hero" style={{ minHeight: "72vh", display: "flex", alignItems: "center" }}>
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow">Error 404</span>
          <h1 className="grad" style={{ fontSize: "clamp(3.5rem,12vw,8rem)", lineHeight: 1 }}>
            404
          </h1>
          <p>The page you're looking for doesn't exist or may have moved.</p>
          <div
            style={{
              display: "flex",
              gap: "0.9rem",
              justifyContent: "center",
              marginTop: "1.8rem",
              flexWrap: "wrap",
            }}
          >
            <Link className="btn btn--primary btn--lg" href="/">
              Back home <ArrowIcon />
            </Link>
            <Link className="btn btn--ghost btn--lg" href="/careers/">
              View careers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
