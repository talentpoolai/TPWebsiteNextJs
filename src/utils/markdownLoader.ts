import matter from 'gray-matter';
import { BlogPost } from '../data/blogData';

export const loadBlogPosts = async (): Promise<BlogPost[]> => {
  // This will need to be implemented based on your build process
  // For now, you can keep using your existing blogPosts array
  // and gradually migrate to markdown files
  
  // Example of how you might load a markdown file:
  /*
  const markdownContent = await fetch('/content/blog/example-post.md').then(r => r.text());
  const { data, content } = matter(markdownContent);
  
  return {
    id: data.slug,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: content, // This will be markdown, you'll need to convert to HTML
    author: data.author,
    publishedAt: data.publishedAt,
    readTime: data.readTime,
    category: data.category,
    tags: data.tags,
    featuredImage: data.featuredImage,
    featured: data.featured,
    seo: data.seo
  };
  */
};