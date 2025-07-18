// src/data/blogIndex.ts
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
}

const posts: BlogPost[] = [];

const files = import.meta.glob("../../content/blog/*.md", { eager: true });

for (const path in files) {
  const file = files[path] as { default: string };
  const { data, content } = matter(file.default);

  posts.push({
    ...data,
    content,
    slug: path.split("/").pop()?.replace(".md", "") || "",
  });
}

// Sort posts by publishedAt (newest first)
posts.sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export default posts;