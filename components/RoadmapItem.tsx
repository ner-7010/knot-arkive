type RoadmapItemProps = {
  name: string;
  status: string;
  category: string;
};

export default function RoadmapItem({
  name,
  status,
  category
}: RoadmapItemProps) {

  const color =
    status === "done"
      ? "bg-green-500"
      : status === "learning"
      ? "bg-yellow-500"
      : "bg-gray-400";

  return (
    <div className="border p-4 rounded-lg flex justify-between items-center">

      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>

      <span className={`text-white px-3 py-1 rounded ${color}`}>
        {status}
      </span>

    </div>
  );
}