import matter from "gray-matter";
import blogIndex from './blogIndex.json';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML content
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featured: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

// Convert blog index data to BlogPost format
export const blogPosts: BlogPost[] = blogIndex.map(post => ({
  id: post.id,
  title: post.title,
  slug: post.slug,
  excerpt: post.excerpt,
  content: post.content, // This is already HTML content
  author: post.author,
  publishedAt: post.publishedAt,
  readTime: post.readTime,
  category: post.category,
  tags: post.tags,
  featuredImage: post.featuredImage,
  featured: post.featured,
  seo: post.seo
}));

export const blogCategories = [
  "All",
  "Hiring Strategy",
  "Remote Work",
  "AI & Technology",
  "Diversity & Inclusion",
  "Interview Process",
  "Startup Hiring"
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category: string) => 
  category === "All" ? blogPosts : blogPosts.filter(post => post.category === category);

export const getPostBySlug = (slug: string): BlogPost | null => {
  return blogPosts.find(post => post.slug === slug) || null;
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3) => 
  blogPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, limit);
