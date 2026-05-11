"use client";
// components/PartnersSection.tsx
//
// Infinite auto-scrolling partner logo marquee.
// Logos are duplicated 6× to fill wide screens without gaps.
// Scrolling pauses on hover so visitors can inspect each partner.
//
// To add more partners: append to the PARTNERS array.
// Place logo files in /public/logos/partners/ and reference as shown.

import Image from "next/image";

/* ─── Partner data ───────────────────────────────────────── */
const PARTNERS = [
  {
    name: "Dhamala Capital",
    logo: "/partners/dhamala.jpeg", // move to /public/logos/partners/dhamala-capital.jpeg
    href: "https://www.dhamalacapital.com", // update if different
  },
  {
    name: "EduHub Global",
    logo: "/partners/eduhub.png", // move to /public/logos/partners/eduhub-global.png
    href: "https://www.eduhubglobal.com", // update if different
  },
  // Add more partners here:
  // { name: "Partner Name", logo: "/logos/partners/name.svg", href: "https://..." },
] as const;

// Duplicate 6× so the marquee fills any screen width seamlessly
const REPS = 6;
const TRACK = Array.from({ length: REPS }, () => PARTNERS).flat();

/* ─── Single logo card ───────────────────────────────────── */
function PartnerCard({
  name,
  logo,
  href,
}: {
  name: string;
  logo: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative flex flex-col items-center justify-center gap-3
        min-w-[200px] px-10 py-7 mx-px
        bg-white  no-underline
        hover:border-red-200 hover:bg-red-50
        transition-all duration-300
        overflow-hidden
      "
      aria-label={name}
    >
      {/* Bottom red reveal bar */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-350"
        aria-hidden
      />

      {/* Logo */}
      <div className="h-14 flex items-center justify-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={160}
          height={56}
          className="max-h-14 w-auto object-contain transition-all duration-350"
          style={{ filter: "grayscale(1) opacity(0.6)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLImageElement).style.filter =
              "grayscale(0) opacity(1)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLImageElement).style.filter =
              "grayscale(1) opacity(0.6)")
          }
        />
      </div>

      {/* Name */}
      <span
        className="font-mono uppercase text-gray-400 group-hover:text-red-600 transition-colors duration-300"
        style={{ fontSize: "9px", letterSpacing: "0.2em" }}
      >
        {name}
      </span>
    </a>
  );
}

/* ─── Section ────────────────────────────────────────────── */
export default function PartnersSection() {
  return (
    <section className="relative bg-white py-20 lg:py-24 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-red-600" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-0.5 bg-red-600 flex-shrink-0" />
          <span
            className="font-mono uppercase text-red-600"
            style={{ fontSize: "clamp(9px,1vw,11px)", letterSpacing: "0.32em" }}
          >
            Trusted by
          </span>
        </div>
        <h2
          className="font-normal leading-none text-gray-900 mb-3"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(26px,4vw,46px)",
          }}
        >
          Our <em className="italic text-red-600">Partners</em>
        </h2>
        <p
          className="font-mono leading-relaxed text-gray-500 max-w-lg"
          style={{ fontSize: "clamp(11px,1.1vw,13px)" }}
        >
          We collaborate with forward-thinking organisations who share our
          commitment to excellence and innovation.
        </p>
        <div className="w-8 h-0.5 bg-red-600 mt-5" />
      </div>

      {/* ── Marquee ── */}
      {/* Left + right edge fades */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 bottom-0 w-32 lg:w-48 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-32 lg:w-48 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #fff, transparent)" }}
        />

        {/* Scrolling track — pause on hover via CSS group */}
        <div className="overflow-hidden">
          <div
            className="flex w-max"
            style={{ animation: "pt-marquee 28s linear infinite" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.animationPlayState =
                "paused")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.animationPlayState =
                "running")
            }
          >
            {TRACK.map((p, i) => (
              <PartnerCard key={`${p.name}-${i}`} {...p} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-6 flex items-center justify-between flex-wrap gap-4">
        <span
          className="font-mono uppercase text-gray-400"
          style={{ fontSize: "clamp(8px,0.9vw,10px)", letterSpacing: "0.22em" }}
        >
          {PARTNERS.length} trusted partner
          {Number(PARTNERS.length) !== 1 ? "s" : ""} & growing
        </span>
        <a
          href="/contact"
          className="font-mono uppercase text-red-600 hover:text-red-700 transition-colors duration-200 no-underline"
          style={{ fontSize: "clamp(8px,0.9vw,10px)", letterSpacing: "0.22em" }}
        >
          Become a partner →
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
        @keyframes pt-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-${(100 / REPS).toFixed(4)}%); }
        }
      `}</style>
    </section>
  );
}
