import postsJson from "@/content/posts.json";

export interface PostSection {
  h2: string;
  paragraphs: string[];
}
export interface PostFaq {
  q: string;
  a: string;
}
export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  category: string;
  readMinutes: number;
  publishedAt: string;
  intro: string[];
  sections: PostSection[];
  faqs: PostFaq[];
}

export const posts = (postsJson as Post[]).slice().sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
