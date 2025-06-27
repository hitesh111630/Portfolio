import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }, // ✅ Skills Added
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#fff6f1] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-orange-500 tracking-wide"
        >
          Hitesh.dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 font-medium hover:text-orange-500 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-orange-500"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-[#fff6f1] px-4 py-4 space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 font-medium hover:text-orange-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
