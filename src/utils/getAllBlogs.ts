import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug: filename.replace(".md", ""),
        ...data, // title, date, etc from frontmatter
        content, // raw markdown content
      };
    });
}
