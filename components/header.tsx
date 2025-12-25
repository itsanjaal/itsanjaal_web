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

export default function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  const menuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // const element = document.querySelector("#radix-_r_0_-trigger-radix-_r_1_");

  // // Triggered when the mouse enters the element
  // element.addEventListener("mouseenter", () => {
  //   console.log("Mouse is over the element!");
  // });

  // // Triggered when the mouse leaves the element
  // element.addEventListener("mouseleave", () => {
  //   console.log("Mouse has left!");
  // });

  // Close on outside click + Escape
  React.useEffect(() => {
    function handleClose(e: MouseEvent | KeyboardEvent) {
      if (
        e instanceof MouseEvent &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }

      if (e instanceof KeyboardEvent && e.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClose);
      document.addEventListener("keydown", handleClose);
    }

    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, [open]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      {/* ================= DESKTOP NAV ================= */}
      {!isMobile && (
        <nav className="container mx-auto flex h-16 items-center px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="IT Sanjaal"
              width={120}
              height={40}
              className="h-10 w-auto mix-blend-multiply"
              priority
            />
          </Link>

          <NavigationMenu className="ml-10">
            <NavigationMenuList>
              {/* Courses */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Featured Courses
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/featuredcourses"
                          className="flex h-full flex-col justify-end rounded-md bg-muted p-4"
                        >
                          <Image
                            src="/courses.jpg"
                            alt="Courses"
                            width={400}
                            height={200}
                            className="rounded-md object-cover"
                          />
                          <div className="mt-2 font-medium">IT Courses</div>
                          <p className="text-sm text-muted-foreground">
                            Build real-world IT skills.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <ListItem href="/msexcel" title="MS Excel Class">
                      From basics to advanced Excel.
                    </ListItem>
                    <ListItem href="/pythonn" title="Python Programming">
                      Python with data analysis.
                    </ListItem>
                    <ListItem href="/ui" title="UI/UX Design">
                      Figma & Canva based UI/UX.
                    </ListItem>
                    <ListItem href="/bioinformatics" title="Bioinformatics">
                      Python for biodata analysis.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              {/* Team */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Team</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[300px]">
                    <ListItem href="/team/kiran" title="Advocate">
                      Kiran Subedhi
                    </ListItem>
                    <ListItem href="/team/dibash" title="Content Writer">
                      Dibash Gautam
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">Let’s Talk</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport />
          </NavigationMenu>
        </nav>
      )}

      {/* ================= MOBILE NAV ================= */}
      {isMobile && (
        <>
          <nav className="container mx-auto flex h-16 items-center justify-between px-6">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="IT Sanjaal"
                width={100}
                height={40}
                className="h-9 w-auto"
              />
            </Link>

            <button
              ref={buttonRef}
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md p-2"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>

          {open && (
            <div ref={menuRef} className="border-t bg-white px-6 py-4">
              <MobileLink href="/msexcel" title="MS Excel" setOpen={setOpen} />
              <MobileLink href="/pythonn" title="Python" setOpen={setOpen} />
              <MobileLink href="/ui" title="UI/UX Design" setOpen={setOpen} />
              <MobileLink
                href="/team/kiran"
                title="Kiran Subedhi"
                setOpen={setOpen}
              />
              <MobileLink
                href="/team/dibash"
                title="Dibash Gautam"
                setOpen={setOpen}
              />
              <MobileLink
                href="/contact"
                title="Let’s Talk"
                setOpen={setOpen}
              />
            </div>
          )}
        </>
      )}
    </header>
  );
}

/* ---------------- Reusable Components ---------------- */

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
          className="block rounded-md p-3 hover:bg-accent focus:bg-accent"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-sm text-muted-foreground">{children}</p>
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
  setOpen: (v: boolean) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block border-b py-3 text-lg font-medium last:border-none"
    >
      {title}
    </Link>
  );
}
