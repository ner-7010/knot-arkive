import SearchBox from "@/components/SearchBox"
import SearchResults from "@/components/SearchResults"
import { searchContent } from "@/lib/search"

type Props = {
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: Props) {

  const { q } = await searchParams

  const query = q ?? ""

  const results = query ? searchContent(query) : []

  return (

    <main className="max-w-3xl mx-auto py-12">

      <h1 className="text-3xl font-bold mb-6">
        Search
      </h1>

      <SearchBox />

      {query && (

        <>
          <p className="text-sm text-gray-500 mb-6">
            Results for "{query}"
          </p>

          <SearchResults results={results} />
        </>

      )}

    </main>

  )
}