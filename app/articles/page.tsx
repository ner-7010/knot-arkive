import Link from "next/link";
import { getArticles } from "@/lib/articles";

export default function Articles() {
  const articles = getArticles();

  return (
    <main>

      <h1 className="text-3xl font-bold mb-8">
        Articles
      </h1>

      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articles/${article.slug}`}
              className="text-blue-600 hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>

    </main>
  );
}