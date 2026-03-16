import { knowledge } from "@/data/knowledge";
import KnowledgeCard from "@/components/KnowledgeCard";

export default function Knowledge() {

  return (
    <main className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Knowledge
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {knowledge.map((item) => (
          <KnowledgeCard
            key={item.id}
            title={item.title}
            links={item.links}
          />
        ))}

      </div>

    </main>
  );
}