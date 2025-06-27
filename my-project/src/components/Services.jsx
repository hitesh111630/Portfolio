import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Responsive and scalable websites using latest technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly UI",
    description: "Pixel perfect UI/UX that works great on all devices.",
  },
  {
    icon: <FaCloud />,
    title: "API Integration",
    description: "Seamless integration with RESTful APIs and cloud services.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-[80vh] bg-white text-gray-800 py-20 px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My <span className="text-orange-500">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group bg-white shadow-md border border-orange-100 rounded-xl p-6 w-full max-w-xs text-center transition duration-300 hover:shadow-orange-200 relative overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/10 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none rounded-xl"></div>

            {/* Icon */}
            <div className="flex items-center justify-center text-4xl text-orange-500 mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
