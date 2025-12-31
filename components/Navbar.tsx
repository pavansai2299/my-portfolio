"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Highlight based on section in view
  useEffect(() => {
    // Observe sections that have an id (about, projects, contact, etc.)
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Highlight resume when on /resume page, clear otherwise if not on home
  useEffect(() => {
    if (pathname === "/resume") {
      setActive("resume");
    } else if (pathname && pathname !== "/") {
      setActive(""); // other pages - none highlighted
    }
  }, [pathname]);

  const linkClass = (id: string) =>
    `hover:text-blue-500 transition ${active === id ? "text-blue-500 font-semibold" : ""}`;

  return (
    <nav className="flex justify-between items-center px-8 py-4 fixed w-full z-50 bg-gray-300 bg-opacity-95 backdrop-blur-sm text-black">
      <Link
        href="/"
        className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full hover:text-blue-500 hover:border-blue-500 transition"
      >
        PS
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/#about" className={linkClass("about") + " scroll-smooth"}>
          About
        </Link>
        <Link href="/#projects" className={linkClass("projects") + " scroll-smooth"}>
          Projects
        </Link>
        <Link href="/#contact" className={linkClass("contact") + " scroll-smooth"}>
          Contact
        </Link>
        <Link href="/resume" className={linkClass("resume")}>
          Resume
        </Link>
      </div>

      {/* Mobile: hamburger */}
      <div className="md:hidden relative">
        <button
          ref={btnRef}
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="p-2 rounded-md inline-flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-black transform transition ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transform transition ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </div>
        </button>

        <div
          id="mobile-menu"
          ref={menuRef}
          role="menu"
          className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50 ${open ? "block" : "hidden"}`}
        >
          <Link href="/#about" className={`block px-4 py-2 hover:bg-gray-100 ${active === "about" ? "text-blue-500 font-semibold" : ""}`} onClick={() => { setOpen(false); setActive("about"); }}>
            About
          </Link>
          <Link href="/#projects" className={`block px-4 py-2 hover:bg-gray-100 ${active === "projects" ? "text-blue-500 font-semibold" : ""}`} onClick={() => { setOpen(false); setActive("projects"); }}>
            Projects
          </Link>
          <Link href="/#contact" className={`block px-4 py-2 hover:bg-gray-100 ${active === "contact" ? "text-blue-500 font-semibold" : ""}`} onClick={() => { setOpen(false); setActive("contact"); }}>
            Contact
          </Link>
          <Link href="/resume" className={`block px-4 py-2 hover:bg-gray-100 ${active === "resume" ? "text-blue-500 font-semibold" : ""}`} onClick={() => setOpen(false)}>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}