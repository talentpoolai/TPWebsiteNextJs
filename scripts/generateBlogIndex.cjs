const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Path to your markdown folder
const blogDir = path.join(__dirname, '../src/content/blog');
const outputFile = path.join(__dirname, '../src/data/blogIndex.json');

function getBlogPosts() {
  const files = fs.readdirSync(blogDir);

  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        ...data,
        content,
        slug: file.replace(/\.md$/, ''),
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