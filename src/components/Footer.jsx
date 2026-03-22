import { Link } from "react-router";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-dark-100 py-10 md:px-18 px-6 rounded-4xl flex flex-col items-center gap-4 mt-12 mb-6">
      <div className="flex flex-col max-lg:gap-8 lg:flex-row justify-center items-center w-full">
        <div className="w-1/2 flex flex-col items-center lg:items-start max-lg:text-center">
          <img src="/logo-white.png" alt="logo" className="w-24" />
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Connecting talent with opportunity. Your dream job is just a click
            away.
          </p>
        </div>

        <div className="flex lg:w-1/2 w-full items-start justify-between">
          {footerLinks.map((section) => (
            <div key={section.title} className="mx-4 text-end">
              <h3 className="lg:text-2xl text-lg font-bebas-neue text-white mb-1">
                {section.title}
              </h3>
              <ul className="flex flex-col lg:gap-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-200 transition-colors duration-300 text-xs md:text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div></div>
      </div>

      <div className="w-full h-px bg-text-secondary my-4" />

      <div className="flex justify-between items-center w-full text-xs md:text-sm text-gray-400">
        <p>&copy; 2024 Jobsy. All rights reserved.</p>

        <div className="flex gap-1 sm:gap-4">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
