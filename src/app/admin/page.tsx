import type { Metadata } from "next";
import AdminApp from "@/components/careers/AdminApp";

export const metadata: Metadata = {
  title: "Careers Admin | CodeSumMix",
  description: "CodeSumMix careers admin.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: "clamp(1.5rem,3vw,2.5rem)" }}>
        <div className="page-hero__glow"></div>
        <div className="container">
          <span className="eyebrow">Admin</span>
          <h1>Careers admin</h1>
          <p>Post roles and review who's applied.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(1rem,2vw,2rem)" }}>
        <div className="container">
          <AdminApp />
        </div>
      </section>
    </main>
  );
}
