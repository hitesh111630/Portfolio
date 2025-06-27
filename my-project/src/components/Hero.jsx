import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaAward, FaSmile } from "react-icons/fa";

// Stats data
const stats = [
  { icon: <FaUsers />, label: "Clients", value: "20+" },
  { icon: <FaProjectDiagram />, label: "Projects", value: "30+" },
  { icon: <FaAward />, label: "Awards", value: "5+" },
  { icon: <FaSmile />, label: "Happy Users", value: "99%" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100vh] flex flex-col items-center justify-center px-4 md:px-16 py-10 md:py-16 bg-[#fff6f1] text-gray-800"
    >
      {/* Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-4 md:gap-2 pl-40">
        {/* Left Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-[0.9] text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-orange-500 font-semibold text-lg md:text-xl mb-1"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Hitesh Patil
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 mt-2 font-medium"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed"
          >
            I build high-performance web applications with beautiful UI, smooth
            animations, and scalable backend. Let’s build something awesome
            together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex gap-4 mt-6 justify-center md:justify-start"
          >
            <a
              href="/resume.pdf"
              download
              className="bg-orange-500 text-white px-6 py-2 rounded-md font-medium shadow hover:bg-orange-600 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md font-medium hover:bg-orange-50 transition"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Glow */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-[0.9] flex justify-center relative"
        >
          <div className="relative w-fit">
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="w-72 h-72 md:w-[420px] md:h-[420px] bg-orange-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-full overflow-hidden shadow-xl hover:shadow-orange-300 transition duration-300"
            >
              <img
                src="/profile.jpg"
                alt="Hitesh Patil"
                className="w-64 h-64 md:w-96 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section - Clean Premium Look */}
      <div className="w-full mt-12 flex flex-wrap justify-center gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + index * 0.2 }}
            className="bg-white shadow-md border border-orange-100 rounded-xl p-6 w-40 sm:w-48 text-center hover:scale-105 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
          >
            <div className="flex items-center justify-center text-4xl text-orange-500 mb-2">
              {item.icon}
            </div>
            <div className="text-lg font-semibold text-gray-800">
              {item.label}
            </div>
            <div className="text-sm text-gray-500">{item.value}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
