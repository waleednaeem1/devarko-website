import type { Metadata } from "next";
import { Suspense } from "react";
import JobDetail from "@/components/careers/JobDetail";

export const metadata: Metadata = {
  title: "Open Role | Careers | CodeSumMix",
  description:
    "Apply for an open role at CodeSumMix: a software studio building EdTech and AI products in Lahore and remote.",
  robots: { index: false, follow: true },
};

export default function JobPage() {
  return (
    <main>
      <Suspense fallback={null}>
        <JobDetail />
      </Suspense>
    </main>
  );
}
