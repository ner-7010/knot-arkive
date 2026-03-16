import { skills } from "@/data/skills";
import SkillCard from "@/components/SkillCard";

export default function Skills() {
  return (
    <main className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Skills
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>

    </main>
  );
}