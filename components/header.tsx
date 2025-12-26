"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const isMobile = useIsMobile();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- Close helpers ---------------- */

  const closeAll = () => {
    setMobileOpen(false);
    setCoursesOpen(false);
    setTeamOpen(false);
  };

  const openMenu = (set: (v: boolean) => void) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    set(true);
  };

  const delayedClose = (set: (v: boolean) => void) => {
    closeTimeout.current = setTimeout(() => set(false), 150);
  };

  /* ---------------- Outside click + ESC ---------------- */

  useEffect(() => {
    function handleClose(e: MouseEvent | KeyboardEvent) {
      if (
        e instanceof MouseEvent &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        closeAll();
      }

      if (e instanceof KeyboardEvent && e.key === "Escape") {
        closeAll();
      }
    }

    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      {/* ================= DESKTOP ================= */}
      {!isMobile && (
        <nav
          ref={navRef}
          className="container mx-auto flex h-16 items-center px-6"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="IT Sanjaal"
              width={140}
              height={60}
              className="mix-blend-multiply"
              priority
            />
          </Link>

          <ul className="ml-10 flex items-center gap-10">
            {/* Featured Courses */}
            <li
              className="relative"
              onMouseEnter={() => openMenu(setCoursesOpen)}
              onMouseLeave={() => delayedClose(setCoursesOpen)}
            >
              <button
                aria-expanded={coursesOpen}
                className="flex items-center gap-1 font-medium hover:text-primary focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setCoursesOpen((v) => !v);
                  }
                  if (e.key === "Escape") {
                    setCoursesOpen(false);
                  }
                }}
              >
                Featured Courses
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatedDropdown open={coursesOpen}>
                <DropdownItem
                  href="/msexcel"
                  title="MS Excel Class"
                  desc="From basics to advanced Excel."
                />
                <DropdownItem
                  href="/pythonn"
                  title="Python Programming"
                  desc="Python with data analysis."
                />
                <DropdownItem
                  href="/ui"
                  title="UI/UX Design"
                  desc="Figma & Canva based UI/UX."
                />
                <DropdownItem
                  href="/bioinformatics"
                  title="Bioinformatics"
                  desc="Python for biodata analysis."
                />
              </AnimatedDropdown>
            </li>

            {/* Team */}
            <li
              className="relative"
              onMouseEnter={() => openMenu(setTeamOpen)}
              onMouseLeave={() => delayedClose(setTeamOpen)}
            >
              <button
                aria-expanded={teamOpen}
                className="flex items-center gap-1 font-medium hover:text-primary focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setTeamOpen((v) => !v);
                  }
                  if (e.key === "Escape") {
                    setTeamOpen(false);
                  }
                }}
              >
                Team
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    teamOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatedDropdown open={teamOpen}>
                <DropdownItem
                  href="/team/kiran"
                  title="Kiran Subedhi"
                  desc="Legal advisor & advocate."
                />
                <DropdownItem
                  href="/team/dibash"
                  title="Dibash Gautam"
                  desc="Content writer & editor."
                />
              </AnimatedDropdown>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                className="font-medium hover:text-primary"
              >
                Let’s Talk
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* ================= MOBILE ================= */}
      {isMobile && (
        <>
          <nav className="container mx-auto flex h-16 items-center justify-between px-6">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="IT Sanjaal"
                width={100}
                height={40}
              />
            </Link>

            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>

          {mobileOpen && (
            <div
              ref={navRef}
              className="border-t bg-white px-6 py-4 space-y-3"
            >
              <MobileItem
                href="/msexcel"
                title="MS Excel"
                desc="From basics to advanced Excel."
              />
              <MobileItem
                href="/pythonn"
                title="Python"
                desc="Python with data analysis."
              />
              <MobileItem
                href="/ui"
                title="UI/UX Design"
                desc="Figma & Canva based UI/UX."
              />
              <MobileItem
                href="/bioinformatics"
                title="Bioinformatics"
                desc="Python for biodata analysis."
              />
              <MobileItem
                href="/team/kiran"
                title="Kiran Subedhi"
                desc="Legal advisor & advocate."
              />
              <MobileItem
                href="/team/dibash"
                title="Dibash Gautam"
                desc="Content writer & editor."
              />
              <MobileItem
                href="/contact"
                title="Let’s Talk"
                desc="Contact our team."
              />
            </div>
          )}
        </>
      )}
    </header>
  );
}

/* ================= COMPONENTS ================= */

function AnimatedDropdown({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute left-0 top-full mt-2 w-72 rounded-xl border bg-white shadow-lg
      transition-all duration-200 ease-out
      ${
        open
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-2 scale-95 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}

function DropdownItem({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-4 py-3 transition-colors hover:bg-accent focus:bg-accent"
    >
      <div className="text-sm font-medium">{title}</div>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </Link>
  );
}

function MobileItem({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="block border-b py-3 last:border-none"
    >
      <div className="text-lg font-medium">{title}</div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Link>
  );
}
