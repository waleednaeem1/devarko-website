"use client";

import { useEffect, useState } from "react";
import {
  AUTH_KEY,
  DEMO_PASSWORD,
  formatDate,
  getApplications,
  getJobs,
  writeJobs,
  type Job,
  type JobApplication,
} from "@/lib/careers";

export default function AdminApp() {
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState<"jobs" | "apps">("jobs");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [apps, setApps] = useState<JobApplication[]>([]);
  const [appsFilter, setAppsFilter] = useState("");
  const [postedOk, setPostedOk] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(AUTH_KEY) === "1");
    setChecked(true);
  }, []);

  useEffect(() => {
    if (!authed) return;
    setJobs(getJobs());
    setApps(getApplications());
  }, [authed]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (password === DEMO_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setLoginError(false);
      setAuthed(true);
    } else {
      setLoginError(true);
    }
  }

  function logout() {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setPassword("");
  }

  function postJob(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const title = String(fd.get("title") ?? "").trim();
    if (!title) return;
    const next: Job[] = [
      {
        id: `job_${Date.now()}`,
        title,
        department: String(fd.get("department") || "General"),
        location: String(fd.get("location") || "Remote"),
        type: String(fd.get("type") || "Full-time"),
        description: String(fd.get("description") ?? ""),
        postedAt: new Date().toISOString(),
      },
      ...getJobs(),
    ];
    writeJobs(next);
    setJobs(next);
    form.reset();
    setPostedOk(true);
    setTimeout(() => setPostedOk(false), 2600);
  }

  function deleteJob(id: string) {
    const next = getJobs().filter((j) => j.id !== id);
    writeJobs(next);
    setJobs(next);
  }

  const visibleApps = apps
    .slice()
    .reverse()
    .filter((a) => !appsFilter || a.jobId === appsFilter);

  if (!checked) return null;

  if (!authed) {
    return (
      <div className="admin-login">
        <h2>Admin sign in</h2>
        <form className="form" onSubmit={login} noValidate>
          <div className="field">
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              placeholder="Enter admin password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn--primary btn--lg" type="submit">
            Sign in
          </button>
          {loginError && <p className="admin-error">Incorrect password: please try again.</p>}
        </form>
        <p className="admin-note">
          <strong>Prototype:</strong> demo password is <strong>demo1234</strong>. This is a
          front-end demo gate: in production this becomes a secure login, with applications stored
          in a real database.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-bar">
        <div className="admin-tabs">
          <button
            className={tab === "jobs" ? "is-active" : undefined}
            type="button"
            onClick={() => setTab("jobs")}
          >
            Jobs
          </button>
          <button
            className={tab === "apps" ? "is-active" : undefined}
            type="button"
            onClick={() => setTab("apps")}
          >
            Applications
          </button>
        </div>
        <button className="btn btn--ghost" type="button" onClick={logout}>
          Log out
        </button>
      </div>

      {tab === "jobs" && (
        <div className="admin-grid">
          <div className="admin-panel">
            <h3>Post a new job</h3>
            <form className="form" onSubmit={postJob} noValidate>
              <div className="field">
                <label htmlFor="pj-title">Job title</label>
                <input id="pj-title" name="title" type="text" placeholder="e.g. Senior Backend Engineer" required />
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="pj-dept">Department</label>
                  <input id="pj-dept" name="department" type="text" placeholder="Engineering" />
                </div>
                <div className="field">
                  <label htmlFor="pj-loc">Location</label>
                  <input id="pj-loc" name="location" type="text" placeholder="Lahore / Remote" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="pj-type">Type</label>
                <select id="pj-type" name="type">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="pj-desc">Description</label>
                <textarea
                  id="pj-desc"
                  name="description"
                  placeholder="Responsibilities and requirements…"
                  style={{ minHeight: 150 }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--lg">
                Publish job
              </button>
              {postedOk && <p className="post-ok">✓ Job posted: it's now live on the careers page.</p>}
            </form>
          </div>
          <div className="admin-panel">
            <h3>Current openings</h3>
            <div>
              {jobs.length === 0 ? (
                <p className="form__note">No jobs yet — post one with the form.</p>
              ) : (
                jobs.map((j) => (
                  <div className="admin-item" key={j.id}>
                    <div>
                      <b>{j.title}</b>
                      <div className="admin-item__meta">
                        {j.department} · {j.location} · {j.type}
                      </div>
                    </div>
                    <button className="btn btn--ghost" onClick={() => deleteJob(j.id)}>
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {tab === "apps" && (
        <div className="admin-panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "1.3rem",
            }}
          >
            <div>
              <h3 style={{ margin: 0 }}>Applications</h3>
              <span className="form__note">
                {visibleApps.length} application{visibleApps.length === 1 ? "" : "s"}
              </span>
            </div>
            <select
              aria-label="Filter applications by role"
              value={appsFilter}
              onChange={(e) => setAppsFilter(e.target.value)}
              style={{
                font: "inherit",
                color: "var(--text)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 999,
                padding: "0.6rem 1rem",
              }}
            >
              <option value="">All roles</option>
              {jobs.map((j) => (
                <option value={j.id} key={j.id}>
                  {j.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            {visibleApps.length === 0 ? (
              <p className="form__note">No applications yet. They appear here as candidates apply.</p>
            ) : (
              visibleApps.map((a) => (
                <div className="app-card" key={a.id}>
                  <div className="app-card__head">
                    <b>{a.name}</b>
                    <span>{formatDate(a.appliedAt)}</span>
                  </div>
                  <div className="app-card__role">{a.jobTitle}</div>
                  <div className="app-card__contact">
                    <a href={`mailto:${a.email}`}>{a.email}</a>
                    {a.phone ? ` · ${a.phone}` : ""}
                  </div>
                  {a.cvLink && (
                    <div className="app-card__resume">
                      🔗{" "}
                      <a href={a.cvLink} target="_blank" rel="noopener" style={{ color: "var(--text)" }}>
                        CV / portfolio
                      </a>
                    </div>
                  )}
                  {a.cover && <p className="app-card__cover">{a.cover}</p>}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
