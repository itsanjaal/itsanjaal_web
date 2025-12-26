"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type MenuType = "courses" | "team" | null;

export default function Navbar() {
  const isMobile = useIsMobile();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- Helpers ---------------- */

  const openMenu = (menu: MenuType) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(menu);
  };

  const delayedClose = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
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
              className="h-25 w-auto mix-blend-multiply"
              priority
            />
          </Link>

          <ul className="ml-10 flex items-center gap-10">
            {/* COURSES */}
            <li
              className="relative"
              onMouseEnter={() => openMenu("courses")}
              onMouseLeave={delayedClose}
            >
              <MenuButton
                label="Featured Courses"
                open={activeMenu === "courses"}
                onClick={() =>
                  setActiveMenu(
                    activeMenu === "courses" ? null : "courses"
                  )
                }
              />

              <AnimatedDropdown
                open={activeMenu === "courses"}
                onMouseEnter={() => openMenu("courses")}
                onMouseLeave={delayedClose}
              >
                <DropdownItem
                  href="/msexcel"
                  title="MS Excel Class"
                  desc="From basics to advanced Excel."
                  onClick={closeAll}
                />
                <DropdownItem
                  href="/pythonn"
                  title="Python Programming"
                  desc="Python with data analysis."
                  onClick={closeAll}
                />
                <DropdownItem
                  href="/ui"
                  title="UI/UX Design"
                  desc="Figma & Canva based UI/UX."
                  onClick={closeAll}
                />
                <DropdownItem
                  href="/bioinformatics"
                  title="Bioinformatics"
                  desc="Python for biodata analysis."
                  onClick={closeAll}
                />
              </AnimatedDropdown>
            </li>

            {/* TEAM */}
            <li
              className="relative"
              onMouseEnter={() => openMenu("team")}
              onMouseLeave={delayedClose}
            >
              <MenuButton
                label="Team"
                open={activeMenu === "team"}
                onClick={() =>
                  setActiveMenu(activeMenu === "team" ? null : "team")
                }
              />

              <AnimatedDropdown
                open={activeMenu === "team"}
                onMouseEnter={() => openMenu("team")}
                onMouseLeave={delayedClose}
              >
                <DropdownItem
                  href="/team/kiran"
                  title="Kiran Subedhi"
                  desc="Legal advisor & advocate."
                  onClick={closeAll}
                />
                <DropdownItem
                  href="/team/dibash"
                  title="Dibash Gautam"
                  desc="Content writer & editor."
                  onClick={closeAll}
                />
              </AnimatedDropdown>
            </li>

            {/* CONTACT */}
            <li>
              <Link
                href="/contact"
                className="font-medium hover:text-primary"
                onClick={closeAll}
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
            <Link href="/" onClick={closeAll}>
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
            <div className="border-t bg-white px-6 py-4 space-y-3">
              <MobileItem
                href="/msexcel"
                title="MS Excel"
                desc="From basics to advanced Excel."
                onClick={closeAll}
              />
              <MobileItem
                href="/pythonn"
                title="Python"
                desc="Python with data analysis."
                onClick={closeAll}
              />
              <MobileItem
                href="/ui"
                title="UI/UX Design"
                desc="Figma & Canva based UI/UX."
                onClick={closeAll}
              />
              <MobileItem
                href="/bioinformatics"
                title="Bioinformatics"
                desc="Python for biodata analysis."
                onClick={closeAll}
              />
              <MobileItem
                href="/team/kiran"
                title="Kiran Subedhi"
                desc="Legal advisor & advocate."
                onClick={closeAll}
              />
              <MobileItem
                href="/team/dibash"
                title="Dibash Gautam"
                desc="Content writer & editor."
                onClick={closeAll}
              />
              <MobileItem
                href="/contact"
                title="Let’s Talk"
                desc="Contact our team."
                onClick={closeAll}
              />
            </div>
          )}
        </>
      )}
    </header>
  );
}

/* ================= SUB COMPONENTS ================= */

function MenuButton({
  label,
  open,
  onClick,
}: {
  label: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-haspopup="true"
      aria-expanded={open}
      onClick={onClick}
      className="flex items-center gap-1 font-medium hover:text-primary"
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-300 ${
          open ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

function AnimatedDropdown({
  open,
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-0 top-full mt-3 w-72 rounded-xl border bg-white shadow-xl
      origin-top transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
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
  onClick,
}: {
  href: string;
  title: string;
  desc: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-4 py-3 transition hover:bg-accent"
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
  onClick,
}: {
  href: string;
  title: string;
  desc: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block border-b py-3 last:border-none"
    >
      <div className="text-lg font-medium">{title}</div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Link>
  );
}
