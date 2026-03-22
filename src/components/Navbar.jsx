import { Link, useLocation } from "react-router";
import { navLinks } from "../constants";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className="flex justify-between items-start pt-4 pb-2 z-10 relative">
      <div className="flex justify-center items-center w-18 h-18 sm:w-24 sm:h-24 shrink-0">
        <img
          src={isHome ? "/logo-white.png" : "/logo-black.png"}
          alt="logo"
          className="w-[85%] h-[85%] object-contain"
        />
      </div>
      <ul className="flex gap-4 sm:gap-8 text-[16px] text-text-primary">
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
  );
};

export default Navbar;
