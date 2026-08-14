"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  getApplications,
  getJobs,
  writeApplications,
  WEB3FORMS_KEY,
  type Job,
} from "@/lib/careers";

export default function JobDetail() {
  const params = useSearchParams();
  const id = params.get("id");
  const [job, setJob] = useState<Job | null | undefined>(undefined);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = getJobs().find((j) => j.id === id) ?? null;
    setJob(found);
    if (found) document.title = `${found.title} | Careers | Devarko`;
  }, [id]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!job) return;
    const form = e.currentTarget;
    const fd = new FormData(form);

    const apps = getApplications();
    apps.push({
      id: `app_${Date.now()}`,
      jobId: job.id,
      jobTitle: job.title,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      cover: String(fd.get("cover") ?? ""),
      cvLink: String(fd.get("cv_link") ?? ""),
      appliedAt: new Date().toISOString(),
    });
    writeApplications(apps);

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const data = await res.json();
      if (data && data.success) {
        setSent(true);
        requestAnimationFrame(() => {
          successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      } else {
        throw new Error((data && data.message) || "Submission failed");
      }
    } catch {
      setSending(false);
      alert(
        "Sorry, something went wrong submitting your application. Please email us directly at info@devarko.com."
      );
    }
  }

  return (
    <>
      <section
        style={{
          paddingTop: "clamp(7rem,12vh,9rem)",
          paddingBottom: "clamp(1rem,2vw,1.5rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="page-hero__glow"></div>
        <div className="container">
          <Link className="back-link" href="/careers/">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>{" "}
            All openings
          </Link>
          <span className="eyebrow">{job?.department ?? "Careers"}</span>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", marginTop: "0.7rem" }}>
            {job === undefined ? "Loading…" : job === null ? "Role not found" : job.title}
          </h1>
          <p style={{ color: "var(--muted)", marginTop: "0.7rem" }}>
            {job ? `${job.location} · ${job.type}` : ""}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(1.5rem,3vw,2.5rem)" }}>
        <div className="container">
          {job === null ? (
            <p style={{ color: "var(--muted)" }}>
              This opening may have closed.{" "}
              <Link href="/careers/" style={{ color: "var(--accent-2)" }}>
                See all open roles &rarr;
              </Link>
            </p>
          ) : (
            <div className="job-layout">
              <div className="job-body">
                <div className="job-description">{job?.description ?? ""}</div>
              </div>
              <aside className="job-apply">
                <h3>Apply now</h3>
                <p className="muted">
                  For <strong style={{ color: "var(--text)" }}>{job?.title ?? "this role"}</strong>
                </p>
                <form className={`form${sent ? " hide" : ""}`} onSubmit={onSubmit} noValidate>
                  <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                  <input
                    type="hidden"
                    name="subject"
                    value={job ? `New application: ${job.title}` : "New job application: Devarko"}
                  />
                  <input type="hidden" name="from_name" value="Devarko Careers" />
                  <input type="hidden" name="position" value={job?.title ?? ""} />
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div className="field">
                    <label htmlFor="ap-name">Full name</label>
                    <input id="ap-name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="ap-email">Email</label>
                    <input id="ap-email" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                  <div className="field">
                    <label htmlFor="ap-phone">
                      Phone <span style={{ color: "var(--muted-2)" }}>(optional)</span>
                    </label>
                    <input id="ap-phone" name="phone" type="tel" placeholder="+92 …" />
                  </div>
                  <div className="field">
                    <label htmlFor="ap-cv">Link to your CV / portfolio</label>
                    <input
                      id="ap-cv"
                      name="cv_link"
                      type="url"
                      placeholder="Google Drive, LinkedIn, or portfolio URL"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="ap-cover">
                      Cover note <span style={{ color: "var(--muted-2)" }}>(optional)</span>
                    </label>
                    <textarea
                      id="ap-cover"
                      name="cover"
                      placeholder="Why you're a great fit…"
                      style={{ minHeight: 110 }}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg" disabled={sending}>
                    {sending ? "Sending…" : "Submit application"}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                  <p className="form__note">
                    By applying you agree we may store your details to consider you for this role.
                  </p>
                </form>
                <div className={`form__success${sent ? " show" : ""}`} ref={successRef}>
                  <h3 className="grad">Application received!</h3>
                  <p>
                    Thanks: we've logged your application and will be in touch.{" "}
                    <Link href="/careers/" style={{ color: "var(--text)" }}>
                      Browse more roles →
                    </Link>
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
