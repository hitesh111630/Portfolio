import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fff6f1] text-center text-sm text-gray-600 pt-6 pb-8">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/hitesh111630"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-600 hover:text-orange-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hitesh-patil-595540286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-600 hover:text-orange-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:hiteshpatilkg@example.com"
          className="text-xl text-gray-600 hover:text-orange-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <p>&copy; 2025 Hitesh Patil. All rights reserved.</p>
    </footer>
  );
}
