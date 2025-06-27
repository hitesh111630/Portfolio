const projects = [
  {
    img: "https://cdn.pixabay.com/photo/2016/10/13/16/26/web-agency-1738168_1280.jpg",
    title: "Website Design",
  },
  {
    img: "https://megabyte.ae/wp-content/uploads/2019/12/seo.jpg",
    title: "SEO Campaign",
  },
  {
    img: "/MacBook Air - 12.jpg",
    title: "UI/UX Project",
  },
  {
    img: "https://th.bing.com/th/id/OIP.Ga9cF4fyi3OWsAJUyoUBmQHaFZ?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    title: "Digital Marketing",
  },
  {
    img: "/Group 70.jpg",
    title: "App UI Design",
  },
  {
    img: "/branding.jpg",
    title: "Branding Work",
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-medium">Portfolio</p>
          <h2 className="text-3xl font-bold text-gray-800">My Latest Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden group transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
