import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

type StudyLogSummary = {
  slug: string
  title: string
  date: string
  hours: number
  understanding: number
  tags?: string[]
}

type StudyLog = {
  slug: string
  title: string
  date: string
  hours: number
  understanding: number
  tags?: string[]
  contentHtml: string
}

const logsDirectory = path.join(process.cwd(), "studylogs")

export function getStudyLogs(): StudyLogSummary[] {

  const fileNames = fs.readdirSync(logsDirectory)

  return fileNames.map((fileName) => {

    const fullPath = path.join(logsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      slug: fileName.replace(".md", ""),
      title: data.title,
      date: data.date,
      hours: data.hours,
      understanding: data.understanding,
      tags: data.tags || []
    }

  })
}

export async function getStudyLog(slug: string): Promise<StudyLog> {

  const fullPath = path.join(logsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)

  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    hours: data.hours,
    understanding: data.understanding,
    tags: data.tags || [],
    contentHtml
  }
}