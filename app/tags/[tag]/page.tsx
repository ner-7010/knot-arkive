import { getArticles } from "@/lib/articles"
import { getStudyLogs } from "@/lib/studylogs"
import Link from "next/link"

type Props = {
  params: Promise<{ tag: string }>
}

export default async function TagPage({ params }: Props) {

  const { tag } = await params

  const articles = getArticles().map(a => ({
    type: "article" as const,
    slug: a.slug,
    title: a.title,
    date: a.date,
    tags: a.tags,
  }))

  const logs = getStudyLogs().map(l => ({
    type: "studylog" as const,
    slug: l.slug,
    title: l.title,
    date: l.date,
    tags: l.tags,
  }))

  const all = [...articles, ...logs]

  const filtered = all.filter((item) =>
    item.tags?.includes(tag)
  )

  return (

    <main className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        #{tag}
      </h1>

      <div className="space-y-6">

        {filtered.map((item) => (

          <Link
            key={`${item.type}-${item.slug}`}
            href={
              item.type === "article"
                ? `/articles/${item.slug}`
                : `/studylogs/${item.slug}`
            }
          >
            <div className="border p-6 rounded-lg hover:bg-gray-50 cursor-pointer">

              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm">
                {new Date(item.date).toLocaleDateString()}
              </p>

            </div>
          </Link>

        ))}

      </div>

    </main>
  )
}