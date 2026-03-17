import { getStudyLog } from "@/lib/studylogs"
import { replaceWikiLinks } from "@/lib/wiki"
import Link from "next/link"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function StudyDetail({ params }: Props) {

  const { slug } = await params
  const log = await getStudyLog(slug)

  const html = await replaceWikiLinks(log.contentHtml)

  return (
    <main className="max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-2">
        {log.title}
      </h1>

      <p className="text-gray-500 mb-4">
        {new Date(log.date).toLocaleDateString()}
      </p>

      {log.tags && (
        <div className="flex gap-2 mb-6">
          {log.tags.map((tag: string) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="text-xs bg-gray-200 px-2 py-1 rounded"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}

      <div className="mb-6 text-sm">
        <p>Study Time: {log.hours}h</p>
        <p>Understanding: {log.understanding}%</p>
      </div>

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />

    </main>
  )
}