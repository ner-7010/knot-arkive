import Link from "next/link"
import { SearchItem } from "@/lib/search"

type Props = {
  results: SearchItem[]
}

export default function SearchResults({ results }: Props) {

  if (results.length === 0) {
    return <p>No results</p>
  }

  return (

    <ul className="space-y-4">

      {results.map((item) => (

        <li key={`${item.type}-${item.slug}`}>

          <Link
            href={
              item.type === "article"
                ? `/articles/${item.slug}`
                : `/private/study/${item.slug}`
            }
            className="text-blue-600 hover:underline"
          >

            {item.title}

          </Link>

        </li>

      ))}

    </ul>

  )
}