import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-[#fffaf6]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image with slide-in from left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src="/profile.jpg"
            alt="About"
            className="rounded-xl shadow-md w-72 md:w-96 mx-auto"
          />
        </motion.div>

        {/* Right: Text content with fade-in from right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-orange-500 font-medium mb-2">About Me</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Creative Designer & Developer
          </h2>
          <p className="text-gray-600 mb-4">
            I’m a passionate front-end developer with a knack for creating
            elegant web interfaces. I’ve worked on dozens of projects including
            UI/UX design, web dev, digital campaigns, and more.
          </p>
          <p className="text-gray-600 mb-6">
            Always learning, always building. My goal is to make the digital
            world better with design + code.
          </p>
          <a
            href="https://www.freelancer.com/u/hiteshp19?sb=t"
            download
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-md shadow hover:bg-orange-600 transition"
          >
            Hire Me !
          </a>
        </motion.div>
      </div>
    </section>
  );
}
