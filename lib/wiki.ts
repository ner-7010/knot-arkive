import { getArticles } from "./articles"
import { getStudyLogs } from "./studylogs"

export async function replaceWikiLinks(
  content: string,
  admin: boolean = false
): Promise<string> {

  const articles = getArticles()
  const logs = admin ? getStudyLogs() : []

  return content.replace(/\[\[([^\]]+)\]\]/g, (_, title) => {

    // Articles から検索
    const article = articles.find(a => a.title === title)
    if (article) return `<a href="/articles/${article.slug}" class="text-blue-600 hover:underline">${title}</a>`

    // StudyLogs から検索（管理者のみ）
    if (admin) {
      const log = logs.find(l => l.title === title)
      if (log) return `<a href="/private/study/${log.slug}" class="text-blue-600 hover:underline">${title}</a>`
    }

    // 見つからなければそのまま
    return title
  })
}