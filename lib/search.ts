import { getArticles } from "./articles";
import { getStudyLogs } from "./studylogs";

export type SearchItem = {
  type: "article" | "studylog";
  slug: string;
  title: string;
  tags?: string[];
  date: string;
};

export function searchContent(query: string): SearchItem[] {
  const q = query.toLowerCase();

  const articles = getArticles().filter((a) =>
    a.title.toLowerCase().includes(q)
  );

  const studylogs = getStudyLogs().filter((s) =>
    s.title.toLowerCase().includes(q)
  );

  const articleResults: SearchItem[] = articles.map((a): SearchItem => ({
    type: "article",
    slug: a.slug,
    title: a.title,
    tags: a.tags,
    date: a.date,
  }));

  const studylogResults: SearchItem[] = studylogs.map((s): SearchItem => ({
    type: "studylog",
    slug: s.slug,
    title: s.title,
    tags: s.tags,
    date: s.date,
  }));

  return [...articleResults, ...studylogResults];
}