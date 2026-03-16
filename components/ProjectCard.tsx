type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
}: Project) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">

      <h2 className="text-xl font-bold">{title}</h2>

      <p className="text-gray-600 mt-2">{description}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm bg-gray-100 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={github}
        className="inline-block mt-4 text-blue-600 hover:underline"
        target="_blank"
      >
        GitHub →
      </a>

    </div>
  );
}