import Link from "next/link";

export default function PrivatePage() {

  return (
    <main className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Private Knowledge
      </h1>

      <p className="text-gray-600 mb-10">
        Personal notes and internal knowledge.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <Link href="/private/study">
          <div className="border p-6 rounded-lg hover:bg-gray-50 cursor-pointer">
            <h2 className="font-semibold text-xl">
              Learning Logs
            </h2>
            <p className="text-gray-600 mt-2">
              Daily study records.
            </p>
          </div>
        </Link>

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-xl">
            Vocabulary
          </h2>
          <p className="text-gray-600 mt-2">
            Technical terminology.
          </p>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="font-semibold text-xl">
            Experience
          </h2>
          <p className="text-gray-600 mt-2">
            Work experience notes.
          </p>
        </div>

      </div>

    </main>
  );
}