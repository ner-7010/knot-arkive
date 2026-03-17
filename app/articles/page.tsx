import Link from "next/link";
import { getArticles } from "@/lib/articles";

export default function Articles() {

  const articles = getArticles();

  return (
    <main className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Articles
      </h1>

      <div className="space-y-4">

        {articles.map((article: any) => (

          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
          >
            <div className="border p-6 rounded-lg hover:bg-gray-50 cursor-pointer">

              <h3 className="text-lg font-semibold">
                {article.title}
              </h3>

              <p className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString()}
              </p>

            </div>
          </Link>

        ))}

      </div>

    </main>
  )
}