"use client";

import { useRef, useState } from "react";

const WEB3FORMS_KEY = "ee6e6c96-518e-4547-ba64-def9c40193b6";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
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
        "Sorry, something went wrong sending your message. Please email us directly at info@devarko.com."
      );
    }
  }

  return (
    <>
      <form className={`form${sent ? " hide" : ""}`} onSubmit={onSubmit} noValidate>
        <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
        <input type="hidden" name="subject" value="New enquiry from devarko.com" />
        <input type="hidden" name="from_name" value="Devarko Website" />
        <input
          type="checkbox"
          name="botcheck"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        <div className="form__row">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
        </div>
        <div className="field">
          <label htmlFor="company">
            Company <span style={{ color: "var(--muted-2)" }}>(optional)</span>
          </label>
          <input id="company" name="company" type="text" placeholder="Company or project name" />
        </div>
        <div className="field">
          <label htmlFor="budget">Estimated budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Not sure yet</option>
            <option value="lt5k">Under $5,000</option>
            <option value="5-15k">$5,000 – $15,000</option>
            <option value="15-50k">$15,000 – $50,000</option>
            <option value="gt50k">$50,000+</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">What are you building?</label>
          <textarea
            id="message"
            name="message"
            placeholder="A few sentences about your project, goals, and timeline."
            required
          ></textarea>
        </div>
        <div className="form__actions">
          <button type="submit" className="btn btn--primary btn--lg" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <span className="form__note">
            Or email us directly at{" "}
            <a href="mailto:info@devarko.com" style={{ color: "var(--text)" }}>
              info@devarko.com
            </a>
          </span>
        </div>
      </form>

      <div className={`form__success${sent ? " show" : ""}`} ref={successRef}>
        <h3 className="grad">Thanks: message received!</h3>
        <p>
          We'll get back to you within one business day at the email you provided. In the meantime,
          feel free to reach us directly at{" "}
          <a href="mailto:info@devarko.com" style={{ color: "var(--text)" }}>
            info@devarko.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
