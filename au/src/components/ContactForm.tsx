"use client";

import { useRef, useState } from "react";

const WEB3FORMS_KEY = "475ac28f-251c-49f6-8d5d-be6a8468b9c5";

const SERVICES = [
  "Web Development",
  "SEO Services",
  "Web Applications",
  "Mobile Apps",
  "AI & Automation",
  "Hosting & Care Plans",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const successRef = useRef<HTMLDivElement>(null);

  function toggle(s: string) {
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

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
        <input type="hidden" name="subject" value="New enquiry from devarko.com.au" />
        <input type="hidden" name="from_name" value="Devarko Australia" />
        <input type="hidden" name="Services" value={services.join(", ")} />
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
          <label>
            What can we help with?
            <span className="field__hint">pick any that apply</span>
          </label>
          <div className="chipset" role="group" aria-label="Services you are interested in">
            {SERVICES.map((s) => {
              const on = services.includes(s);
              return (
                <label key={s} className={`chip-select${on ? " is-on" : ""}`}>
                  <input type="checkbox" checked={on} onChange={() => toggle(s)} />
                  <span className="chip-select__tick" aria-hidden="true">
                    ✓
                  </span>
                  {s}
                </label>
              );
            })}
          </div>
        </div>
        <div className="form__row">
          <div className="field">
            <label htmlFor="package">
              Package <span style={{ color: "var(--muted-2)" }}>(optional)</span>
            </label>
            <select id="package" name="Package" defaultValue="">
              <option value="">Not sure yet, help me choose</option>
              <optgroup label="Web development (quoted to your project)">
                <option>Web development · Launch</option>
                <option>Web development · Business</option>
                <option>Web development · Platform</option>
              </optgroup>
              <optgroup label="SEO plans (monthly, no lock-in)">
                <option>Local · AUD $990/month</option>
                <option>Growth · AUD $1,690/month</option>
                <option>Authority · AUD $2,900/month</option>
              </optgroup>
            </select>
          </div>
          <div className="field">
            <label htmlFor="budget">
              Budget <span style={{ color: "var(--muted-2)" }}>(optional)</span>
            </label>
            <select id="budget" name="Budget" defaultValue="">
              <option value="">Not sure yet</option>
              <option>Under AUD $5,000</option>
              <option>AUD $5,000 to $15,000</option>
              <option>AUD $15,000 to $50,000</option>
              <option>AUD $50,000 and up</option>
              <option>Ongoing monthly (SEO or care plan)</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">Tell us about your project</label>
          <textarea
            id="message"
            name="message"
            placeholder="A few sentences about your business, what you need, and any timeline."
            required
          ></textarea>
        </div>
        <div className="form__actions">
          <button type="submit" className="btn btn--primary btn--lg" disabled={sending}>
            {sending ? "Sending…" : "Send enquiry"}
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
        <h3 className="grad">Thanks, your enquiry is in.</h3>
        <p>
          We reply within one business day at the email you gave us. If it is urgent, reach us
          directly at{" "}
          <a href="mailto:info@devarko.com" style={{ color: "var(--text)" }}>
            info@devarko.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
