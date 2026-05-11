"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#e51a1a" />
            <path
              d="M8 22 L16 10 L24 22"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="16" cy="22" r="2.5" fill="white" />
          </svg>
          <span
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="text-2xl tracking-widest text-gray-900"
          >
            RED<span className="text-[#e51a1a]">FORGE</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/#services", label: "Services" },
            { href: "#", label: "Work" },
            { href: "#", label: "About" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#e51a1a] transition-colors link-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 bg-[#e51a1a] text-white text-sm font-semibold rounded-full hover:bg-[#c11212] transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 bg-gray-800 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 bg-gray-800 transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-gray-800 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-red-100 px-6 py-4 flex flex-col gap-4">
          {["Home", "Services", "Work", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Services" ? "/#services" : "#"}
              className="text-gray-700 font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#"
            className="px-5 py-2 bg-[#e51a1a] text-white text-sm font-semibold rounded-full text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
