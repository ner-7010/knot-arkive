import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center gap-8">

      <h1 className="text-6xl font-bold">
        KnotArkive
      </h1>

      <p className="text-xl text-gray-500">
        Knowledge • Goals • Experience
      </p>

      <p className="max-w-xl text-gray-600">
        A personal knowledge system and portfolio connecting learning,
        projects, and experience.
      </p>

      <div className="flex gap-6 mt-6">
        <Link
          href="/projects"
          className="rounded-lg bg-black text-white px-6 py-3 hover:bg-gray-800"
        >
          View Projects
        </Link>

        <Link
          href="/articles"
          className="rounded-lg border px-6 py-3 hover:bg-gray-100"
        >
          Read Articles
        </Link>
      </div>

    </main>
  );
}