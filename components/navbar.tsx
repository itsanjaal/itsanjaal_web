"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "IT Career & Placement Support", href: "/it-career" },
  { name: "Bioinformatics", href: "/bioinfo" },
  { name: "About Us", href: "/about-us" },
  { name: "Feedback", href: "/feedback" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkStyle = (href: string) => {
    const isActive =
      pathname === href || (href !== "/" && pathname.startsWith(href));
    return `px-2 py-2 transition-all whitespace-nowrap ${
      isActive
        ? "bg-destructive text-white shadow-md"
        : "text-gray-600 hover:bg-gray-300"
    }`;
  };

  return (
    <nav className="bg-white border-b sticky top-0 left-0 w-full z-[100]">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto h-20 px-4 md:px-2 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="IT Sanjaal"
              width={120}
              height={50}
              className="h-15 w-auto lg:h-24 md:h-20 mix-blend-multiply object-contain"
              priority
            />
            {/* Hidden on Mobile & Tablet, shown only on LG (Desktop) */}
            <p className="md:hidden lg:block ml-3 text-destructive text-2xl font-semibold whitespace-nowrap">
              IT Sanjaal
            </p>
          </Link>
        </div>

        {/* Desktop/Tablet Menu - Centered */}
        <ul className="hidden md:flex flex-grow justify-center items-center md:space-x-1 lg:space-x-4 px-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={`${getLinkStyle(link.href)} md:text-[10px] lg:text-lg`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Say Hello Button - Always visible on tablet/desktop */}
        <div className="hidden md:block flex-shrink-0 md:mr-2 lg:mr-0">
          <Link 
            href="/contact" 
            className="bg-white border-2 border-destructive text-destructive px-4 py-2 lg:px-6 lg:py-3 hover:scale-105 transition-transform duration-300 inline-block whitespace-nowrap md:text-sm lg:text-lg hover:bg-destructive hover:text-white"
          >
            Say Hello
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border-b md:hidden flex flex-col p-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-lg ${getLinkStyle(link.href)}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Mobile "Say Hello" in the dropdown */}
          <li>
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-white border-2 border-destructive text-destructive text-center hover:bg-red hover:text-white p-3"
            >
              Say Hello
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}