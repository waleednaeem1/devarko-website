/* Careers prototype storage. Front-end only, backed by localStorage so the full
   flow works without a backend. For production, back this with a real API. */

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  postedAt?: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  cover: string;
  cvLink: string;
  appliedAt: string;
}

const JOBS_KEY = "csm_jobs_v1";
const APPS_KEY = "csm_apps_v1";
export const AUTH_KEY = "csm_admin";
export const DEMO_PASSWORD = "demo1234";
export const WEB3FORMS_KEY = "475ac28f-251c-49f6-8d5d-be6a8468b9c5";

export const SEED_JOBS: Job[] = [
  {
    id: "sw-fullstack",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Lahore / Remote",
    type: "Full-time",
    description:
      "We're looking for a senior engineer who can own features end to end.\n\nWhat you'll do:\n• Build and ship web apps with React, Next.js, Node and Laravel\n• Design clean APIs and data models\n• Mentor engineers and review code\n\nWhat we look for:\n• 4+ years building production web applications\n• Strong JavaScript/TypeScript and a backend language\n• Care for quality, testing and clear communication",
  },
  {
    id: "rn-mobile",
    title: "React Native Mobile Developer",
    department: "Engineering",
    location: "Lahore / Remote",
    type: "Full-time",
    description:
      "Help us build native-quality mobile apps for iOS and Android from one codebase.\n\nWhat you'll do:\n• Build and maintain React Native apps\n• Integrate REST APIs, push notifications and payments\n• Ship to the App Store and Play Store\n\nWhat we look for:\n• 2+ years with React Native\n• A strong sense for mobile UX\n• Native module experience is a plus",
  },
  {
    id: "ai-ml",
    title: "AI / ML Engineer",
    department: "AI",
    location: "Lahore / Remote",
    type: "Full-time",
    description:
      "Build AI features that put our clients' data to work.\n\nWhat you'll do:\n• Build LLM-powered features, chatbots and RAG pipelines\n• Work with embeddings, vector databases and prompt engineering\n• Ship reliable, evaluated AI into production\n\nWhat we look for:\n• Experience with OpenAI or open-source LLMs\n• Strong Python\n• A pragmatic, product-minded approach",
  },
  {
    id: "product-designer",
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Lahore",
    type: "Full-time",
    description:
      "Design interfaces that are beautiful, usable and built to convert.\n\nWhat you'll do:\n• Turn requirements into wireframes, flows and polished UI\n• Maintain and grow our design systems\n• Partner closely with engineers\n\nWhat we look for:\n• A strong portfolio of shipped product work\n• Fluency in Figma\n• An eye for detail and motion",
  },
  {
    id: "qa-automation",
    title: "QA Automation Engineer",
    department: "Quality",
    location: "Remote",
    type: "Full-time",
    description:
      "Help every release ship with confidence.\n\nWhat you'll do:\n• Build automated test suites (unit, integration, e2e)\n• Own regression and performance testing\n• Improve our CI quality gates\n\nWhat we look for:\n• Experience with modern test frameworks\n• Strong attention to edge cases\n• Comfortable scripting",
  },
  {
    id: "laravel-backend",
    title: "Laravel Backend Engineer",
    department: "Engineering",
    location: "Lahore",
    type: "Full-time",
    description:
      "Build robust APIs and backends that power web and mobile clients.\n\nWhat you'll do:\n• Design and build APIs in Laravel/PHP\n• Model data and optimise queries (MySQL/PostgreSQL)\n• Integrate payments, storage and third-party services\n\nWhat we look for:\n• 3+ years with Laravel\n• Solid REST API design\n• Testing and clean-code habits",
  },
];

export function getJobs(): Job[] {
  try {
    const raw = localStorage.getItem(JOBS_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : null;
    if (Array.isArray(parsed)) return parsed as Job[];
  } catch {
    /* fall through to seed */
  }
  const seeded = SEED_JOBS.slice();
  writeJobs(seeded);
  return seeded;
}

export function writeJobs(jobs: Job[]): void {
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
}

export function getApplications(): JobApplication[] {
  try {
    const raw = localStorage.getItem(APPS_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : null;
    if (Array.isArray(parsed)) return parsed as JobApplication[];
  } catch {
    /* ignore */
  }
  return [];
}

export function writeApplications(apps: JobApplication[]): void {
  localStorage.setItem(APPS_KEY, JSON.stringify(apps));
}

export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}
