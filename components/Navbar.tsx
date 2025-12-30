"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 fixed w-full z-50 bg-gray-300 bg-opacity-95 backdrop-blur-sm text-black">
      <Link
        href="/"
        className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full hover:text-blue-500 hover:border-blue-500 transition"
      >
        PS
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/#about" className="hover:text-blue-500">
          About
        </Link>
        <Link href="/#projects" className="hover:text-blue-500 scroll-smooth">
          Projects
        </Link>
        <Link href="/#contact" className="hover:text-blue-500">
          Contact
        </Link>
        <Link href="/resume" className="hover:text-blue-500">
          Resume
        </Link>
      </div>
    </nav>
  );
}
