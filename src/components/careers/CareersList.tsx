"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getJobs, type Job } from "@/lib/careers";

export default function CareersList() {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("");
  const [type, setType] = useState("");
  const [loc, setLoc] = useState("");

  useEffect(() => {
    setJobs(getJobs());
  }, []);

  const options = useMemo(() => {
    const uniq = (key: keyof Job) => [...new Set((jobs ?? []).map((j) => String(j[key])))];
    return { depts: uniq("department"), types: uniq("type"), locs: uniq("location") };
  }, [jobs]);

  const rows = useMemo(() => {
    const q = query.toLowerCase();
    return (jobs ?? []).filter(
      (j) =>
        (!q || `${j.title} ${j.department}`.toLowerCase().includes(q)) &&
        (!dept || j.department === dept) &&
        (!type || j.type === type) &&
        (!loc || j.location === loc)
    );
  }, [jobs, query, dept, type, loc]);

  return (
    <>
      <div className="filters">
        <input
          id="job-search"
          type="search"
          placeholder="Search roles…"
          aria-label="Search roles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select aria-label="Filter by department" value={dept} onChange={(e) => setDept(e.target.value)}>
          <option value="">All departments</option>
          {options.depts.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
        <select aria-label="Filter by type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All types</option>
          {options.types.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
        <select aria-label="Filter by location" value={loc} onChange={(e) => setLoc(e.target.value)}>
          <option value="">All locations</option>
          {options.locs.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>
      <p className="job-count">
        {jobs === null ? "" : `${rows.length} open role${rows.length === 1 ? "" : "s"}`}
      </p>
      <div className="careers-list">
        {rows.map((j) => (
          <Link className="job-row" href={`/job/?id=${encodeURIComponent(j.id)}`} key={j.id}>
            <div className="job-row__main">
              <h3>{j.title}</h3>
              <div className="job-row__meta">
                <span>{j.department}</span>
                <span>{j.location}</span>
                <span>{j.type}</span>
              </div>
            </div>
            <span className="job-row__cta">
              View &amp; apply{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
      {jobs !== null && rows.length === 0 && (
        <div className="careers-empty">
          No open roles match your search right now. Email your CV to{" "}
          <a href="mailto:info@devarko.com" style={{ color: "var(--accent-2)" }}>
            info@devarko.com
          </a>{" "}
          and we'll keep you in mind.
        </div>
      )}
    </>
  );
}
