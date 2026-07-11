import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Button from "./ui/Button";

import { NAV_LINKS } from "../data/nav";

import {
  ArrowRight,
  Menu,
  X,
} from "../icons/Icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));

      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section;
          break;
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090909]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-2xl font-bold tracking-tight text-white group"
        >
          A
          <span className="text-[#D4AF37] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,.8)]">
            H.
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const section = link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === section
                    ? "text-[#D4AF37]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}

                {activeSection === section && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#D4AF37]"
                  />
                )}
              </a>
            );
          })}

          <Button
            variant="primary"
            className="!px-6 !py-2 text-sm"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
            <ArrowRight size={16} />
          </Button>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white hover:text-[#D4AF37] transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#121212] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-8 gap-6">

              {NAV_LINKS.map((link) => {
                const section = link.href.replace("#", "");

                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      closeMenu();

                      setTimeout(() => {
                        scrollToSection(section);
                      }, 300);
                    }}
                    className={`text-left text-lg transition-colors ${
                      activeSection === section
                        ? "text-[#D4AF37]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

              <Button
                variant="primary"
                className="w-full mt-2"
                onClick={() => {
                  closeMenu();

                  setTimeout(() => {
                    scrollToSection("contact");
                  }, 300);
                }}
              >
                Let's Talk
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;