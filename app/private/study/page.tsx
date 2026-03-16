import Link from "next/link"
import { getStudyLogs } from "@/lib/studylogs"

export default function StudyPage() {

  const logs = getStudyLogs()

  return (
    <main className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Study Log
      </h1>

      <div className="space-y-4">

        {logs.map((log: any) => (

          <Link
            key={log.slug}
            href={`/private/study/${log.slug}`}
          >
            <div className="border p-6 rounded-lg hover:bg-gray-50 cursor-pointer">

              <h3 className="text-lg font-semibold">
                {log.title}
              </h3>

              <p className="text-sm text-gray-500">
                {new Date(log.date).toLocaleDateString()}
              </p>

              <div className="mt-4 text-sm">
                <p>Study Time: {log.hours}h</p>
                <p>Understanding: {log.understanding}%</p>
              </div>

            </div>
          </Link>

        ))}

      </div>

    </main>
  )
}