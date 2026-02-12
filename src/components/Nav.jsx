import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router";

const MENU_ITEMS = [
  { label: "About me", sectionId: "about" },
  { label: "My Story", sectionId: "story" },
  { label: "What I Do", sectionId: "services" },
  { label: "Testimonial", sectionId: "testimonial" },
  { label: "Contact", path: "/contact" },
  { label: "Blogs", path: "/blogs" },  
];

function Nav() {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 57);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const scrollAnchor = 140;
      let currentSection = "";

      MENU_ITEMS.forEach((item) => {
        if (!item.sectionId) return;

        const section = document.getElementById(item.sectionId);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const currentY = window.scrollY + scrollAnchor;

        if (currentY >= sectionTop && currentY < sectionBottom) {
          currentSection = item.sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const handleMenuClick = (item) => {
    if (item.path) {
      navigate(item.path);
      return;
    }

    if (item.sectionId) {
      const section = document.getElementById(item.sectionId);
      if (!section) return;

      const fixedNavOffset = 88;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - fixedNavOffset,
        behavior: "smooth",
      });

      setActiveSection(item.sectionId);
    }
  };

  const liStyle =
    "cursor-pointer font-semibold transition-all duration-150 hover:text-green-600";

  return (
    <header className="bg-bgColor">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5 border-b border-gray-200 py-4">
        <a href="mailto:sevilvelsha.com" className="flex items-center gap-1">
          <MdEmail className="text-green-600 mt-1" />
          sevilvelsha.com
        </a>
        <div>Voice & Communication Expert | Speaker | Author | Coach</div>
      </div>

      {isFixed && <div className="h-[88px]" />}

      <nav
        className={
          isFixed
            ? "fixed left-0 right-0 top-0 z-50 bg-bgColor shadow-md"
            : "bg-bgColor"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="cursor-pointer select-none text-3xl font-bold">
            Sevil Velsha
          </div>

          <ul className="flex items-center gap-4">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`${liStyle} ${
                    activeSection === item.sectionId
                      ? "text-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="flex items-center gap-1 font-semibold text-green-600"
          >
            <FaInstagram className="mt-1" /> @sevil.Velsha
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
