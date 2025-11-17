import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-8">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm">
        <p>&copy; {year} ALX React Project</p>
        <a
          href="https://github.com/Choaibelkaouri"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-white"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
