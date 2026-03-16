import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

type ArticleSummary = {
  slug: string
  title: string
  date: string
  tags?: string[]
}

type Article = {
  slug: string
  title: string
  date: string
  tags?: string[]
  contentHtml: string
}

const articlesDirectory = path.join(process.cwd(), "articles");

export function getArticles(): ArticleSummary[] {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
    };
  });
}

export async function getArticle(slug: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    contentHtml,
  };
}