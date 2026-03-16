type Skill = {
  name: string;
  level: number;
  category: string;
};

export default function SkillCard({ name, level, category }: Skill) {
  return (
    <div className="border p-5 rounded-lg">

      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{name}</h3>
        <span>{level}%</span>
      </div>

      <div className="w-full bg-gray-200 h-3 rounded">
        <div
          className="bg-blue-500 h-3 rounded"
          style={{ width: `${level}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-2">
        {category}
      </p>

    </div>
  );
}