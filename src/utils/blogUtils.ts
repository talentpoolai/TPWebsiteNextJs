import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML content now
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

// Import all markdown files from the content directory
const markdownFiles = import.meta.glob('../content/*.md', { 
  eager: true, 
  as: 'raw' 
});

export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in markdownFiles) {
    const fileContent = markdownFiles[path];
    const { data, content } = matter(fileContent);
    
    // Extract slug from filename
    const filename = path.split('/').pop() || '';
    const slug = filename.replace('.md', '');

    posts.push({
      id: data.id || slug,
      title: data.title || '',
      slug: slug,
      excerpt: data.excerpt || '',
      content: marked(content), // Convert Markdown to HTML here ✅
      author: data.author || { 
        name: 'Talentpool Team', 
        role: 'Content Writer', 
        avatar: '' 
      },
      publishedAt: data.publishedAt || new Date().toISOString(),
      readTime: data.readTime || '5 min read',
      category: data.category || 'General',
      tags: data.tags || [],
      featuredImage: data.featuredImage || '',
      featured: data.featured || false,
      seo: data.seo || { metaTitle: '', metaDescription: '', keywords: [] }
    });

  }

  // Sort by published date (newest first)
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => post.featured);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getAllBlogPosts();
  if (category === 'All') return posts;
  return posts.filter(post => post.category === category);
}

export function getRelatedBlogPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  return getAllBlogPosts()
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getAllBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set(posts.map(post => post.category));
  return ['All', ...Array.from(categories)];
}