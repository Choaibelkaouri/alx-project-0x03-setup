import React from "react";
import Link from "next/link";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-lg font-semibold flex items-center gap-2">
          <FaHome />
          <span>ALX React Project</span>
        </h1>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/">
            <span className="cursor-pointer hover:underline">Home</span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer hover:underline flex items-center gap-1">
              <FaInfoCircle />
              About
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
