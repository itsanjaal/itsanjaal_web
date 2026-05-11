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
import { useState } from "react";

/* ─── Project data ───────────────────────────────────────── */
// Replace logo paths with your actual project logo files.
// Recommended: put them in /public/logos/ and reference as "/logos/project.svg"
const PROJECTS = [
  {
    id: 1,
    name: "NeuroPath AI",
    cat: "Bioinformatics",
    year: "2025",
    desc: "Genomic variant analysis pipeline processing 10M+ reads per sample with real-time clinical report generation.",
    stack: ["Python", "TensorFlow", "AWS"],
    logo: "/logos/neuropath.svg",   // ← replace with your logo
  },
  {
    id: 2,
    name: "Meridian Commerce",
    cat: "Web Development",
    year: "2025",
    desc: "High-conversion e-commerce platform with AI-powered recommendations, boosting revenue by 38% in 3 months.",
    stack: ["Next.js", "Stripe", "Postgres"],
    logo: "/logos/meridian.svg",
  },
  {
    id: 3,
    name: "FleetTrack",
    cat: "Mobile App Development",
    year: "2024",
    desc: "Cross-platform fleet management app with live GPS tracking, driver scoring, and predictive maintenance alerts.",
    stack: ["React Native", "Node.js", "Redis"],
    logo: "/logos/fleettrack.svg",
  },
  {
    id: 4,
    name: "Axiom Design",
    cat: "UI/UX Design",
    year: "2025",
    desc: "200+ component design system with full accessibility audit and a Figma-to-code pipeline for a fintech startup.",
    stack: ["Figma", "Storybook", "Tailwind"],
    logo: "/logos/axiom.svg",
  },
  {
    id: 5,
    name: "CloudShift",
    cat: "DevOps",
    year: "2024",
    desc: "Zero-downtime Kubernetes migration for 50 microservices, cutting deployment time from 2 hours to 4 minutes.",
    stack: ["K8s", "Terraform", "GitHub CI"],
    logo: "/logos/cloudshift.svg",
  },
  {
    id: 6,
    name: "PromptOS",
    cat: "AI Strategy & Prompt Engineering",
    year: "2025",
    desc: "LLM orchestration layer and prompt engineering framework across 4 enterprise departments, saving 1,200 hrs/month.",
    stack: ["LangChain", "FastAPI", "Azure"],
    logo: "/logos/promptos.svg",
  },
  {
    id: 7,
    name: "LearnPath LMS",
    cat: "IT Course",
    year: "2024",
    desc: "Interactive learning platform for 3,000+ students with live coding environments and placement tracking.",
    stack: ["Vue.js", "Django", "WebSockets"],
    logo: "/logos/learnpath.svg",
  },
  {
    id: 8,
    name: "ContentFlow",
    cat: "Content Writing",
    year: "2024",
    desc: "AI-assisted editorial platform producing 500+ articles/month with SEO scoring and brand voice enforcement.",
    stack: ["Next.js", "OpenAI", "Sanity"],
    logo: "/logos/contentflow.svg",
  },
  {
    id: 9,
    name: "CareerBridge",
    cat: "IT Career & Placement Support",
    year: "2025",
    desc: "Placement portal connecting 800+ graduates with 120+ hiring partners, featuring resume AI and mock interviews.",
    stack: ["React", "Node.js", "MongoDB"],
    logo: "/logos/careerbridge.svg",
  },
] as const;

type Project = (typeof PROJECTS)[number];

/* ─── Arrow icon ─────────────────────────────────────────── */
function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        className="absolute top-3.5 left-4 z-10 font-mono text-[9px] tracking-[0.2em] text-red-600 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 0.4 }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Year */}
      <span
        className="absolute top-3.5 right-4 z-10 font-mono text-[9px] tracking-[0.2em] text-gray-400 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 0.5 }}
      >
        {project.year}
      </span>

      {/* Logo — shifts up on hover, goes full color */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500"
        style={{
          transform: hovered ? "translateY(-20px)" : "translateY(0)",
          transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div
            className="relative w-16 h-16 transition-transform duration-500"
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
              style={{
                filter: hovered
                  ? "grayscale(0) opacity(1)"
                  : "grayscale(1) opacity(0.55)",
              }}
            />
          </div>
          {/* Name fades out as panel slides up */}
          <span
            className="font-mono text-[10px] tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase transition-opacity duration-300"
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
        <p className="font-mono text-[9px] tracking-[0.25em] text-red-600 uppercase mb-1.5">
          {project.cat}
        </p>
        <h3
          className="text-[18px] font-normal leading-snug text-gray-900 dark:text-gray-50 mb-2"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          {project.name}
        </h3>
        <p
          className="font-mono text-[10px] leading-[1.75] text-gray-500 dark:text-gray-400 mb-3"
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
                className="font-mono text-[9px] tracking-wide border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-500 px-2 py-0.5 uppercase"
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
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(0,0,0,0.07)" }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="w-7 h-px bg-gray-200 dark:bg-gray-700" />
          <a
            href="/projects"
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-gray-400 hover:text-red-600 transition-colors duration-300"
          >
            View all case studies →
          </a>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}
