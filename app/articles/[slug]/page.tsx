import Link from "next/link"

import { getArticle } from "@/lib/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const article = await getArticle(slug);

  return (
    <main className="max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-2">
        {article.title}
      </h1>

      <p className="text-gray-500 mb-4">
        {new Date(article.date).toLocaleDateString()}
      </p>

      {article.tags && (
        <div className="flex gap-2 mb-8">
          {article.tags.map((tag: string) => (
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

      <article
        className="prose"
        dangerouslySetInnerHTML={{
          __html: article.contentHtml,
        }}
      />

    </main>
  );
}