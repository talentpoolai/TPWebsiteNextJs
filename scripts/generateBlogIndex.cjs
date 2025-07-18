const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const fetch = global.fetch || ((...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)));

// GitHub repo details
const GITHUB_OWNER = "talentpoolai"; // e.g., "tejas-shimpi"
const GITHUB_REPO = "TPblogs";    // e.g., "blog-content"
const GITHUB_BRANCH = "main";                 // or "master"
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/content?ref=${GITHUB_BRANCH}`;
const RAW_BASE_URL = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}`;

// Local paths in Bolt
const localMarkdownDir = path.join(__dirname, '../content');
const outputJsonFile = path.join(__dirname, '../src/data/blogIndex.json');

// Utility: calculate reading time
function calculateReadTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Fetch all markdown file names from GitHub
async function fetchMarkdownFileList() {
  console.log("🌐 Fetching markdown file list from GitHub...");
  const res = await fetch(GITHUB_API_URL);

  if (!res.ok) {
    throw new Error(`❌ Failed to fetch file list: ${res.statusText}`);
  }

  const files = await res.json();
  return files
    .filter(file => file.name.endsWith('.md'))
    .map(file => file.name);
}

// Download markdown files
async function downloadMarkdownFiles(fileList) {
  if (!fs.existsSync(localMarkdownDir)) {
    fs.mkdirSync(localMarkdownDir, { recursive: true });
  }

  for (const file of fileList) {
    const rawUrl = `${RAW_BASE_URL}/content/${file}`;
    const res = await fetch(rawUrl);
    if (!res.ok) {
      console.error(`❌ Failed to download ${file}`);
      continue;
    }
    const content = await res.text();
    fs.writeFileSync(path.join(localMarkdownDir, file), content, 'utf8');
    console.log(`✅ Downloaded: ${file}`);
  }
}

// Generate JSON from markdown files
function generateBlogIndex() {
  console.log("📖 Generating blogIndex.json...");
  const files = fs.readdirSync(localMarkdownDir);

  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(localMarkdownDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: data.id || file.replace('.md', ''),
        title: data.title,
        slug: data.slug || file.replace('.md', ''),
        excerpt: data.excerpt || content.substring(0, 150) + "...",
        content: marked(content),
        author: data.author,
        publishedAt: data.publishedAt,
        readTime: calculateReadTime(content),
        category: data.category,
        tags: data.tags || [],
        featuredImage: `${RAW_BASE_URL}/images/${data.featuredImage}`,
        featured: data.featured || false,
        seo: data.seo || {},
      };
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  fs.writeFileSync(outputJsonFile, JSON.stringify(posts, null, 2));
  console.log(`✅ blogIndex.json generated with ${posts.length} posts.`);
}

// Main flow
async function main() {
  try {
    const fileList = await fetchMarkdownFileList();
    await downloadMarkdownFiles(fileList);
    generateBlogIndex();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();