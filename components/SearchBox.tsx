"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBox() {

  const [query, setQuery] = useState("")
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return

    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">

      <input
        className="w-full border px-4 py-2"
        placeholder="Search articles and study logs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

    </form>
  )
}