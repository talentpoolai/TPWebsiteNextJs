const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// Paths
const blogDir = path.join(__dirname, '../src/content/blog');
const outputFile = path.join(__dirname, '../src/data/blogIndex.json');

// Function to estimate read time
function calculateReadTime(text) {
  const wordsPerMinute = 200; // average adult reading speed
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

function getBlogPosts() {
  const files = fs.readdirSync(blogDir);

  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdown } = matter(fileContents);

      // Convert markdown to HTML
      const content = marked(markdown);

      return {
        id: data.id || path.basename(file, '.md'),
        title: data.title || 'Untitled Blog',
        slug: data.slug || path.basename(file, '.md'),
        excerpt: data.excerpt || markdown.substring(0, 150) + '...',
        content, // Converted HTML content
        author: data.author || {
          name: 'Poushali Ganguly',
          role: 'Business Head',
          avatar: 'https://www.thetalentpool.ai/wp-content/uploads/2024/10/Poushali-Gangulyimage.webp'
        },
        publishedAt: data.date || new Date().toISOString(),
        readTime: data.readTime || calculateReadTime(markdown),
        category: data.categories?.[0] || 'General',
        tags: data.tags || [],
        featuredImage: data.coverImage || 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
        featured: data.featured || false,
        seo: {
          metaTitle: data.title || 'Talentpool Blog',
          metaDescription: data.excerpt || '',
          keywords: data.tags || []
        }
      };
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return posts;
}

function buildBlogIndex() {
  const posts = getBlogPosts();
  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2)); // Pretty-print JSON
  console.log(`✅ Blog index generated with ${posts.length} posts.`);
}

buildBlogIndex();
