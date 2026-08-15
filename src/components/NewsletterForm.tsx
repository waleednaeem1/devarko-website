"use client";

import { useState } from "react";

const WEB3FORMS_KEY = "475ac28f-251c-49f6-8d5d-be6a8468b9c5";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

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
      } else {
        throw new Error((data && data.message) || "Submission failed");
      }
    } catch {
      setSending(false);
      alert("Sorry, that didn't go through. Please email us at info@devarko.com instead.");
    }
  }

  if (sent) {
    return (
      <p className="news-form__done" role="status">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
        You&apos;re on the list. Talk soon.
      </p>
    );
  }

  return (
    <form className="news-form" onSubmit={onSubmit}>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New newsletter subscriber (devarko.com)" />
      <input type="hidden" name="from_name" value="Devarko Website" />
      <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <label htmlFor="news-email" className="sr-only">
        Email address
      </label>
      <input
        id="news-email"
        name="email"
        type="email"
        placeholder="you@company.com"
        autoComplete="email"
        required
      />
      <button type="submit" className="btn btn--primary" disabled={sending}>
        {sending ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
