import { getArticles } from "./articles"
import { getStudyLogs } from "./studylogs"

export function getAllTags(admin: boolean = false): string[] {
  const articles = getArticles()
  let tags = articles.flatMap(a => a.tags || [])

  if (admin) {
    const logs = getStudyLogs()
    tags = tags.concat(logs.flatMap(l => l.tags || []))
  }

  // 重複削除
  return Array.from(new Set(tags))
}