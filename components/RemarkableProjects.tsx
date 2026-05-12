"use client";

// components/RemarkableProjects.tsx
//
// Usage:
//   import RemarkableProjects from "@/components/RemarkableProjects";
//   <RemarkableProjects />
//
// To use your own project logos:
//   Replace the `logo` field with the path to your image, e.g. "/logos/neuropath.svg"
//   Images should ideally be square SVGs or PNGs with transparent backgrounds.

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ─── Project data ───────────────────────────────────────── */
// Replace logo paths with your actual project logo files.
// Recommended: put them in /public/logos/ and reference as "/logos/project.svg"
const PROJECTS = [
  {
    id: 1,
    name: "EduHub",
    cat: "Web Development",
    year: "2026",
    desc: "Genomic variant analysis pipeline processing 10M+ reads per sample with real-time clinical report generation.",
    stack: ["Next.js", "Tailwind", "Typescript", "AWS"],
    logo: "/projects/p1.png", // ← replace with your logo
    projectUrl: "https://www.eduhubglobal.com.au/",
  },
  {
    id: 2,
    name: "Healing Drive",
    cat: "Web Development",
    year: "2025",
    desc: "High-conversion e-commerce platform with AI-powered recommendations, boosting revenue by 38% in 3 months.",
    stack: ["Django", "AWS", "Postgres"],
    logo: "projects/p2.png",
    projectUrl: "https://www.healingdrivehomehealth.com/",
  },
  {
    id: 3,
    name: "Aestheticbrowsandlashes",
    cat: "Web Development",
    year: "2025",
    desc: "High-conversion e-commerce platform with AI-powered recommendations, boosting revenue by 38% in 3 months.",
    stack: ["Django", "AWS", "Postgres"],
    logo: "projects/p3.png",
    projectUrl: "https://aestheticbrowsandlashes.com/",
  },
  {
    id: 4,
    name: "Dhamala Capital",
    cat: "Web Development",
    year: "2025",
    desc: "High-conversion e-commerce platform with AI-powered recommendations, boosting revenue by 38% in 3 months.",
    stack: ["Next.js", "Stripe", "Postgres"],
    logo: "projects/p4.png",
    projectUrl: "https://dhamalacapital.com/",
  },
] as const;

type Project = (typeof PROJECTS)[number];

/* ─── Arrow icon ─────────────────────────────────────────── */
function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─── Project card ───────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer bg-white dark:bg-black"
      style={{ aspectRatio: "4/3" }}
    >
      <Link href={project.projectUrl}>
        {/* Subtle red tint on hover */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-400"
          style={{
            background: "rgba(185,28,28,0.025)",
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Index */}
        <span
          className="absolute top-3.5 left-4 z-10 font-mono text-[9px] lg:text-[14px] tracking-[0.2em] text-red-600 transition-opacity duration-300"
          style={{ opacity: hovered ? 0 : 0.4 }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Year */}
        <span
          className="absolute top-3.5 right-4 z-10 font-mono text-[9px] lg:text-[14px] tracking-[0.2em] text-gray-400 transition-opacity duration-300"
          style={{ opacity: hovered ? 0 : 0.5 }}
        >
          {project.year}
        </span>

        {/* Logo — shifts up on hover, goes full color */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500"
          style={{
            transform: hovered ? "translateY(-50px)" : "translateY(0)",
            transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div className="flex flex-col items-center gap-1">
            <div
              className="relative w-80 h-70 transition-transform duration-500"
              style={{
                transform: hovered ? "scale(1.1)" : "scale(1)",
                transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
              }}
            >
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                className="object-contain transition-all duration-400"
              />
            </div>
            {/* Name fades out as panel slides up */}
            <span
              className="font-mono text-[10px] lg:text-[14px] tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase transition-opacity duration-300"
              style={{ opacity: hovered ? 0 : 1 }}
            >
              {project.name}
            </span>
          </div>
        </div>

        {/* Red thread line draws across bottom on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-30">
          <div
            className="h-full bg-red-600 transition-all duration-500 relative"
            style={{
              width: hovered ? "100%" : "0%",
              transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
            }}
          >
            {/* Glowing tip dot */}
            <div
              className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-red-500 -translate-y-1/2 transition-transform duration-300"
              style={{
                transform: `translateY(-50%) scale(${hovered ? 1 : 0})`,
                transitionDelay: hovered ? "0.35s" : "0s",
              }}
            />
          </div>
        </div>

        {/* Reveal panel slides up from bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 bg-white dark:bg-black border-t-2 border-red-600 px-5 py-4 transition-transform duration-500"
          style={{
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
          }}
        >
          <p className="font-mono text-[9px]  tracking-[0.25em] text-red-600 uppercase mb-1.5">
            {project.cat}
          </p>
          <h3
            className="text-[18px] font-normal leading-snug text-gray-900 dark:text-gray-50 mb-2"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {project.name}
          </h3>
          <p
            className="font-mono text-[10px] lg:text-[14px] leading-[1.75] text-gray-500 dark:text-gray-400 mb-3"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.desc}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 flex-wrap">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[9px] lg:text-[14px] tracking-wide border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-500 px-2 py-0.5 uppercase"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="w-7 h-7 rounded-full border border-red-600 flex items-center justify-center text-red-600 flex-shrink-0 bg-red-600/5">
              <ArrowRight />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* ─── Section ────────────────────────────────────────────── */
export default function RemarkableProjects() {
  return (
    <section className="w-full py-20 px-6 lg:px-12">
      {/*
        max-w-7xl gives ~1280px — wider than 6xl (~1152px).
        Remove max-w-7xl entirely for full-bleed if your layout allows it.
      */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-red-600 uppercase mb-4">
              Our work
            </p>
            <h2
              className="text-4xl lg:text-[3.2rem] font-normal leading-tight text-gray-900 dark:text-gray-50"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Remarkable <em>Projects</em>
            </h2>
            <div className="w-8 h-[2px] bg-red-600 mt-5" />
          </div>
          <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase pb-2">
            {PROJECTS.length} projects
          </span>
        </div>

        {/* Grid — 3 columns, 1px gap border trick */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        {/* <div className="flex items-center gap-4 mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="w-7 h-px bg-gray-200 dark:bg-gray-700" />
          <a
            href="/projects"
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-gray-400 hover:text-red-600 transition-colors duration-300"
          >
            View all case studies →
          </a>
        </div> */}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}
