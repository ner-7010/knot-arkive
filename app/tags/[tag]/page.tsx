import { getArticles } from "@/lib/articles"
import { getStudyLogs } from "@/lib/studylogs"
import { isAdmin } from "@/lib/auth"
import Link from "next/link"

type Props = {
  params: Promise<{ tag: string }>
}

export default async function TagPage({ params }: Props) {

  const { tag } = await params

  const articles = getArticles()

  const articleFiltered = articles.filter((article) =>
    article.tags?.includes(tag)
  )

  const admin = await isAdmin()

  let studyFiltered: ReturnType<typeof getStudyLogs> = []

  if (admin) {

    const logs = getStudyLogs()

    studyFiltered = logs.filter((log) =>
      log.tags?.includes(tag)
    )

  }

  return (

    <main className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        #{tag}
      </h1>

      <div className="space-y-6">

        {articleFiltered.map((article) => (

          <Link
            key={`article-${article.slug}`}
            href={`/articles/${article.slug}`}
          >

            <div className="border p-6 rounded-lg hover:bg-gray-50 cursor-pointer">

              <h2 className="text-xl font-semibold">
                {article.title}
              </h2>

              <p className="text-gray-500 text-sm">
                {new Date(article.date).toLocaleDateString()}
              </p>

            </div>

          </Link>

        ))}

        {studyFiltered.map((log) => (

          <Link
            key={`study-${log.slug}`}
            href={`/private/study/${log.slug}`}
          >

            <div className="border p-6 rounded-lg hover:bg-gray-50 cursor-pointer">

              <h2 className="text-xl font-semibold">
                {log.title}
              </h2>

              <p className="text-gray-500 text-sm">
                {new Date(log.date).toLocaleDateString()}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </main>
  )
}