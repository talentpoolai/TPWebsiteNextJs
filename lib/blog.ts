import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
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

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          content: marked(content),
          author: data.author || { name: '', role: '', avatar: '' },
          publishedAt: data.publishedAt || new Date().toISOString(),
          readTime: data.readTime || '5 min read',
          category: data.category || 'General',
          tags: data.tags || [],
          featuredImage: data.featuredImage || '',
          featured: data.featured || false,
          seo: data.seo || { metaTitle: '', metaDescription: '', keywords: [] }
        };
      });

    return allPostsData.sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: marked(content),
      author: data.author || { name: '', role: '', avatar: '' },
      publishedAt: data.publishedAt || new Date().toISOString(),
      readTime: data.readTime || '5 min read',
      category: data.category || 'General',
      tags: data.tags || [],
      featuredImage: data.featuredImage || '',
      featured: data.featured || false,
      seo: data.seo || { metaTitle: '', metaDescription: '', keywords: [] }
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  if (category === 'All') return posts;
  return posts.filter(post => post.category === category);
}

export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  return getAllPosts()
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return ['All', ...Array.from(categories)];
}