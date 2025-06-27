const skills = [
  { title: "Facebook Marketing", percent: 95 },
  { title: "Search Engine Optimization", percent: 90 },
  { title: "Content Writing", percent: 95 },
  { title: "Youtube Marketing", percent: 72 },
  { title: "Affiliate Marketing", percent: 80 },
  { title: "Graphic Design", percent: 85 },
  { title: "Web UI Design", percent: 94 },
  { title: "Web Design", percent: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#fffaf6] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-medium">Why Choose Me</p>
          <h2 className="text-3xl font-bold text-gray-800">
            My Experience Area
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">{skill.title}</span>
                <span className="text-gray-500 text-sm">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-orange-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
