import { getArticles } from "./articles"
import { getStudyLogs } from "./studylogs"

export async function replaceWikiLinks(content: string): Promise<string> {

  const articles = getArticles()
  const logs = getStudyLogs()

  return content.replace(/\[\[([^\]]+)\]\]/g, (_, title) => {

    // Articles から検索
    const article = articles.find(a => a.title === title)
    if (article) return `<a href="/articles/${article.slug}" class="text-blue-600 hover:underline">${title}</a>`

    // StudyLogs から検索
    const log = logs.find(l => l.title === title)
    if (log) return `<a href="/studylogs/${log.slug}" class="text-blue-600 hover:underline">${title}</a>`

    // 見つからなければそのまま
    return title
  })
}