"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  const menuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white backdrop-blur-sm shadow-lg">
      {/* ---------------- DESKTOP NAV ---------------- */}
      {!isMobile && (
        <nav className="container mx-auto px-6 sm:px-6 lg:px-4 flex h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Logo.png"
              alt="IT Sanjaal"
              width={60}
              height={40}
              className="h-24 w-auto mix-blend-multiply"
            />
          </Link>
          <NavigationMenu className="ml-10 flex-1">
            <NavigationMenuList>
              {/* Featured Courses */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Featured Courses</NavigationMenuTrigger>

                <NavigationMenuContent className="navigation-menu__content z-[9999]">
                  <ul className="grid gap-2 md:w-[300px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {/* Hero Card */}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end
                              rounded-md bg-gradient-to-b p-4 no-underline outline-none transition-all duration-200 select-none md:p-6"
                        >
                          <Image
                            src="/courses.jpg"
                            alt="Courses"
                            width={400}
                            height={200}
                            className=" inset-0 h-full w-full rounded-md object-cover"
                          />
                          <div className="mb-2 text-lg font-medium">
                            IT Courses
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Beautifully designed courses to enhance your IT
                            skills.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <ListItem href="/msexcel" title="MS Excel Class">
                      Learn complete MS Excel from basic to advanced.
                    </ListItem>

                    <ListItem
                      href="/pythonn"
                      title="Fundamenrtals of Python programming"
                    >
                      Master Python, Pandas, NumPy, and visualization.
                    </ListItem>

                    

                    <ListItem
                      href="/ui"
                      title="UI/UX Design Using Figma & Canva"
                    >
                      Build exceptional UI/UX with modern design tools.
                    </ListItem>
                    <ListItem
                      href="/bioinformatics"
                      title="Bioinformatics with Python"
                    >
                      Master Python, and biodata analysis.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuList>
              {/* Featured Courses */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Team</NavigationMenuTrigger>

                <NavigationMenuContent className="navigation-menu__content  z-[9999]">
                  <ul className="grid gap-2 md:w-[300px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/team/kiran" title="Advocate">
                      Kiran
                    </ListItem>
                    <ListItem href="/team/dibash" title="Content Writer">
                      Dibash Gautam
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Contact */}
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">Let's Talk</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport />
          </NavigationMenu>
        </nav>
      )}

      {/* ---------------- MOBILE HAMBURGER ---------------- */}
      {isMobile && (
        <nav className="container mx-auto px-6 sm:px-6 lg:px-4 flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Logo.png"
              alt="IT Sanjaal"
              width={60}
              height={40}
              className="h-14 w-auto mix-blend-multiply"
            />
          </Link>
          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md flex items-center justify-center"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      )}

      {/* ---------------- MOBILE MENU DROPDOWN ---------------- */}
      {isMobile && open && (
        <div ref={menuRef} className="bg-white shadow-md border-t px-6 py-4">
          <MobileLink
            href="/msexcel"
            title="MS Excel Class"
            setOpen={setOpen}
          />
          <MobileLink
            href="/pythonn"
            title="Python with Data Analysis"
            setOpen={setOpen}
          />
          <MobileLink href="/ui" title="UI/UX Design" setOpen={setOpen} />
          <MobileLink href="/contact" title="Let's Talk" setOpen={setOpen} />
        </div>
      )}
    </header>
  );
}

export default NavigationMenuDemo;

// ---- Reusable Components ---- //

function ListItem({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-3 transition-colors hover:bg-accent focus:bg-accent focus:outline-none"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function MobileLink({
  href,
  title,
  setOpen,
}: {
  href: string;
  title: string;
  setOpen: (value: boolean) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block py-3 px-2 text-lg font-medium border-b last:border-none"
    >
      {title}
    </Link>
  );
}
