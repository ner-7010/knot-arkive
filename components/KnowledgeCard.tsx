type KnowledgeCardProps = {
  title: string;
  links: string[];
};

export default function KnowledgeCard({
  title,
  links
}: KnowledgeCardProps) {

  return (
    <div className="border p-6 rounded-lg">

      <h2 className="text-xl font-semibold mb-4">
        {title}
      </h2>

      <div className="flex flex-wrap gap-2">

        {links.map((link) => (
          <span
            key={link}
            className="bg-gray-200 px-2 py-1 rounded text-sm"
          >
            {link}
          </span>
        ))}

      </div>

    </div>
  );
}