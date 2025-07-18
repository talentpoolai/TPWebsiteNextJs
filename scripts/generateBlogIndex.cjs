const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// Paths
const blogDir = path.join(__dirname, '../src/content/blog');
const outputFile = path.join(__dirname, '../src/data/blogIndex.json');

// Read time helper
function calculateReadTime(markdown) {
  const wordsPerMinute = 200;
  const text = markdown.replace(/[#_*>\-!\[\]\(\)`]/g, '');
  const wordCount = text.split(/\s+/).length;
  return `${Math.max(1, Math.ceil(wordCount / wordsPerMinute))} min read`;
}

function adjustImagePaths(markdown, slug) {
  // Adjust relative paths so frontend can fetch images directly
  return markdown.replace(/\!\[(.*?)\]\((images\/.*?)\)/g, (_, altText, imagePath) => {
    return `![${altText}](src/content/blog/${imagePath})`;
  });
}

function getBlogPosts() {
  const files = fs.readdirSync(blogDir);

  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdownContent } = matter(fileContents);

      // Adjust image paths to be frontend compatible
      const cleanedMarkdown = adjustImagePaths(markdownContent, data.slug || file.replace(/\.md$/, ''));

      // Convert markdown → HTML
      const htmlContent = marked(cleanedMarkdown);

      return {
        id: data.id || path.basename(file, '.md'),
        title: data.title || 'Untitled Blog',
        slug: data.slug || path.basename(file, '.md'),
        excerpt: data.excerpt || markdownContent.substring(0, 150).replace(/\n/g, ' ') + '...',
        content: htmlContent,
        author: data.author || {
          name: 'Poushali Ganguly',
          role: 'Business Head',
          avatar: 'https://www.thetalentpool.ai/wp-content/uploads/2024/10/Poushali-Gangulyimage.webp'
        },
        publishedAt: data.publishedAt || data.date || new Date().toISOString(),
        readTime: data.readTime || calculateReadTime(markdownContent),
        category: data.category || (data.categories?.[0] ?? 'General'),
        tags: data.tags || [],
        featuredImage: data.featuredImage
          ? `src/content/blog/images/${path.basename(data.featuredImage)}`
          : '',
        featured: data.featured || false,
        seo: {
          metaTitle: data.seo?.metaTitle || data.title,
          metaDescription: data.seo?.metaDescription || data.excerpt || '',
          keywords: data.seo?.keywords || data.tags || []
        }
      };
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return posts;
}

function buildBlogIndex() {
  const posts = getBlogPosts();
  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`✅ Blog index generated with ${posts.length} posts.`);
}

buildBlogIndex();
