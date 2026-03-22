import { Link, useLocation } from "react-router";
import { navLinks } from "../constants";
import useTheme from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { isDark } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoSrc = isHome || isDark ? "/logo-white.png" : "/logo-black.png";

  return (
    <div className="flex justify-between items-start pt-4 pb-2 z-10 relative">
      <div className="flex justify-center items-center w-18 h-18 sm:w-24 sm:h-24 shrink-0">
        <img
          src={logoSrc}
          alt="logo"
          className="w-[85%] h-[85%] object-contain"
        />
      </div>
      <div className="flex items-center gap-4 sm:gap-8 text-[16px] text-text-primary">
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-primary-200 transition-colors duration-300"
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <RiMenu3Fill
          className="md:hidden"
          size={20}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {isMenuOpen && (
          <div className="absolute top-[80%] right-0 w-48 bg-bg-300 rounded-lg shadow-lg p-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:text-primary-200 transition-colors duration-300"
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
