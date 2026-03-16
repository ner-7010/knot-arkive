import { roadmap } from "@/data/roadmap";
import RoadmapItem from "@/components/RoadmapItem";

export default function Roadmap() {
  return (
    <main className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Learning Roadmap
      </h1>

      <div className="space-y-4">
        {roadmap.map((item) => (
          <RoadmapItem key={item.name} {...item} />
        ))}
      </div>

    </main>
  );
}