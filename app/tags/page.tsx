import Link from "next/link"
import { getAllTags } from "@/lib/tags"
import { isAdmin } from "@/lib/auth"

export default async function TagsPage() {

  const admin = await isAdmin()

  const tags = getAllTags(admin)

  return (

    <main className="max-w-4xl mx-auto py-12">

      <h1 className="text-3xl font-bold mb-8">
        Tags
      </h1>

      <div className="flex flex-wrap gap-4">

        {tags.map((tag) => (

          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            {tag}
          </Link>

        ))}

      </div>

    </main>

  )
}