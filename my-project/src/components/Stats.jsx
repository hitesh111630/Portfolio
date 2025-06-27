import { FaUsers, FaProjectDiagram, FaAward, FaRegSmile } from "react-icons/fa";

const stats = [
  { icon: <FaUsers />, label: "Clients", value: "50+" },
  { icon: <FaProjectDiagram />, label: "Projects", value: "80+" },
  { icon: <FaAward />, label: "Awards", value: "5" },
  { icon: <FaRegSmile />, label: "Happy Clients", value: "100%" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#fffaf6] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          My Achievements
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="text-3xl text-orange-500 mb-2">{stat.icon}</div>
              <div className="text-xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
