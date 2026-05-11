"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   DNA Canvas Background
───────────────────────────────────────────── */
function DNABackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const STRANDS = 3;
    const NODES = 16;
    const AMP = 75;
    const WL = 230;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = canvas.width / (STRANDS + 1);

      for (let s = 0; s < STRANDS; s++) {
        const sx = spacing * (s + 1);
        const phase0 = (s * Math.PI * 2) / STRANDS;
        const pts1: [number, number][] = [];
        const pts2: [number, number][] = [];
        const total = NODES * 3;

        for (let i = 0; i <= total; i++) {
          const y = (i / total) * (canvas.height + 60) - 30;
          const ph = (y / WL) * Math.PI * 2 - time + phase0;
          pts1.push([sx + Math.sin(ph) * AMP, y]);
          pts2.push([sx - Math.sin(ph) * AMP, y]);
        }

        const drawSpline = (pts: [number, number][], color: string) => {
          ctx.beginPath();
          ctx.moveTo(pts[0][0], pts[0][1]);
          for (let i = 1; i < pts.length; i++) {
            const mx = (pts[i - 1][0] + pts[i][0]) / 2;
            const my = (pts[i - 1][1] + pts[i][1]) / 2;
            ctx.quadraticCurveTo(pts[i - 1][0], pts[i - 1][1], mx, my);
          }
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.stroke();
        };

        drawSpline(pts1, "rgba(220,38,38,0.22)");
        drawSpline(pts2, "rgba(220,38,38,0.22)");

        const step = Math.floor(total / NODES);
        for (let i = 0; i < total; i += step) {
          const [x1, y1] = pts1[i];
          const [x2, y2] = pts2[i];
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = "rgba(248,113,113,0.12)";
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(x1, y1, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(239,68,68,0.45)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x2, y2, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(239,68,68,0.45)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(mx, my, 2, 0, Math.PI * 2);
          ctx.fillStyle =
            Math.floor(i / step) % 2 === 0
              ? "rgba(252,165,165,0.3)"
              : "rgba(185,28,28,0.35)";
          ctx.fill();
        }
      }

      time += 0.016;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Fade-in on scroll hook
───────────────────────────────────────────── */
function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────── */
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useFadeIn(0.3);

  useEffect(() => {
    if (!visible) return;
    let val = 0;
    const duration = 1400;
    const interval = 16;
    const increment = (end / duration) * interval;
    const timer = setInterval(() => {
      val += increment;
      if (val >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(val));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [visible, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Service data
───────────────────────────────────────────── */
const services = [
  {
    id: "01",
    title: "Genomic Data & Sequencing Services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 4 Q16 10 26 4"
          stroke="#ef4444"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M6 10 Q16 16 26 10"
          stroke="#ef4444"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M6 16 Q16 22 26 16"
          stroke="#ef4444"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M6 22 Q16 28 26 22"
          stroke="#ef4444"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <line x1="6" y1="4" x2="6" y2="22" stroke="#ef4444" strokeWidth="1.5" />
        <line
          x1="26"
          y1="4"
          x2="26"
          y2="22"
          stroke="#ef4444"
          strokeWidth="1.5"
        />
      </svg>
    ),
    items: [
      {
        name: "NGS Pipelines",
        desc: "End-to-end processing of raw sequencing data — FASTQ to Variant Calling.",
      },
      {
        name: "Genome Annotation",
        desc: "Identification of genes and functional elements in DNA sequences.",
      },
      {
        name: "Transcriptomics",
        desc: "RNA-Seq analysis to measure differential gene expression.",
      },
    ],
  },
  {
    id: "02",
    title: "Structural Bioinformatics & Drug Discovery",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="5" stroke="#ef4444" strokeWidth="1.8" />
        <circle cx="6" cy="8" r="3" stroke="#ef4444" strokeWidth="1.5" />
        <circle cx="26" cy="8" r="3" stroke="#ef4444" strokeWidth="1.5" />
        <circle cx="6" cy="24" r="3" stroke="#ef4444" strokeWidth="1.5" />
        <circle cx="26" cy="24" r="3" stroke="#ef4444" strokeWidth="1.5" />
        <line
          x1="9"
          y1="10"
          x2="13"
          y2="13"
          stroke="#ef4444"
          strokeWidth="1.2"
        />
        <line
          x1="23"
          y1="10"
          x2="19"
          y2="13"
          stroke="#ef4444"
          strokeWidth="1.2"
        />
        <line
          x1="9"
          y1="22"
          x2="13"
          y2="19"
          stroke="#ef4444"
          strokeWidth="1.2"
        />
        <line
          x1="23"
          y1="22"
          x2="19"
          y2="19"
          stroke="#ef4444"
          strokeWidth="1.2"
        />
      </svg>
    ),
    items: [
      {
        name: "Molecular Docking",
        desc: "Simulating ligand-protein interactions for drug lead identification.",
      },
      {
        name: "Protein Modeling",
        desc: "Predicting 3D structures using AlphaFold and homology techniques.",
      },
      {
        name: "Molecular Dynamics",
        desc: "Analyzing the physical movements of atoms and molecules over time.",
      },
    ],
  },
  {
    id: "03",
    title: "Bio-IT Development & Automation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="6"
          width="24"
          height="18"
          rx="2"
          stroke="#ef4444"
          strokeWidth="1.8"
        />
        <path
          d="M10 14 L14 18 L22 11"
          stroke="#ef4444"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="4"
          y1="10"
          x2="28"
          y2="10"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="7" cy="8" r="1" fill="#ef4444" opacity="0.7" />
        <circle cx="10" cy="8" r="1" fill="#ef4444" opacity="0.7" />
      </svg>
    ),
    items: [
      {
        name: "Custom Bio-Python Scripting",
        desc: "Tailored tools for biological data parsing and statistical analysis.",
      },
      {
        name: "Workflow Automation",
        desc: "Building scalable pipelines using Snakemake or Nextflow.",
      },
      {
        name: "Biological Databases",
        desc: "Designing secure systems to manage and query large-scale research data.",
      },
    ],
  },
  {
    id: "04",
    title: "Specialized Training & Consultation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="4" stroke="#ef4444" strokeWidth="1.8" />
        <path
          d="M8 26 C8 20 24 20 24 26"
          stroke="#ef4444"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 13 L28 13 M25 10 L25 16"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      {
        name: "Technical Tutoring",
        desc: "Practical training in Bio-Python, R, and bioinformatics software.",
      },
      {
        name: "Strategic Advisory",
        desc: "Consulting on molecular characterization and biotechnology projects.",
      },
      {
        name: "Academic Support",
        desc: "Assistance with bioinformatics curriculum design and research methodology.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   Service Card
───────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, visible } = useFadeIn(0.1);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s`,
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(20,0,0,0.3) 100%)",
        border: "1px solid rgba(239,68,68,0.18)",
        borderRadius: "16px",
        padding: "32px 28px",
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Corner glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "120px",
          height: "120px",
          background:
            "radial-gradient(circle at top right, rgba(239,68,68,0.1), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "14px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.25)",
            borderRadius: "10px",
            padding: "10px",
            flexShrink: 0,
          }}
        >
          {service.icon}
        </div>
        <div>
          <span
            style={{
              fontSize: "10px",
              color: "rgba(239,68,68,0.65)",
              letterSpacing: "0.15em",
              display: "block",
              marginBottom: "5px",
            }}
          >
            {service.id}
          </span>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {service.title}
          </h3>
        </div>
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {service.items.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "flex",
              gap: "12px",
              padding: "12px 14px",
              borderRadius: "10px",
              background:
                hovered === i
                  ? "rgba(239,68,68,0.08)"
                  : "rgba(255,255,255,0.03)",
              border:
                hovered === i
                  ? "1px solid rgba(239,68,68,0.28)"
                  : "1px solid rgba(255,255,255,0.05)",
              transition: "all 0.22s ease",
              cursor: "default",
            }}
          >
            <div
              style={{
                width: "3px",
                flexShrink: 0,
                borderRadius: "3px",
                background:
                  hovered === i
                    ? "rgba(239,68,68,0.8)"
                    : "rgba(239,68,68,0.22)",
                transition: "background 0.22s ease",
                marginTop: "2px",
              }}
            />
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: hovered === i ? "#fe1616" : "#ffffffd7",
                  margin: "0 0 4px",
                  transition: "color 0.22s ease",
                  letterSpacing: "0.01em",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#464545",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page — no nav/footer (uses your site's layout)
───────────────────────────────────────────── */
export default function BioinformaticsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes bio-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bio-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes bio-scan {
          0%   { top: -3px; }
          100% { top: calc(100% + 3px); }
        }

        .bio-service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }

        @media (max-width: 680px) {
          .bio-service-grid { grid-template-columns: 1fr; }
          .bio-stats { flex-wrap: wrap; gap: 28px !important; }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          background: "transparent",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        {/* DNA Background */}
        <DNABackground />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* ── HERO ── */}
          <section
            style={{
              padding: "100px 48px 72px",
              textAlign: "center",
            }}
          >
            {/* Badge */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.55s ease 0.1s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.22)",
                borderRadius: "100px",
                padding: "5px 16px 5px 10px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#ef4444",
                  animation: "bio-blink 1.6s ease infinite",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "10px",
                  color: "#f87171",
                  letterSpacing: "0.14em",
                }}
              >
                GENOME ANALYSIS PLATFORM
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.65s ease 0.22s",
                fontSize: "clamp(38px, 6vw, 74px)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "#e7000cd2",
                maxWidth: "780px",
                margin: "0 auto 20px",
              }}
            >
              Bioinformatics &{" "}
              <em style={{ color: "#e7000cc9", fontStyle: "italic" }}>
                Genome Analysis
              </em>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.65s ease 0.36s",
                fontSize: "17px",
                fontWeight: 300,
                color: "primary-foreground",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              End-to-end computational biology services — from raw sequencing
              data to drug discovery and research consultation.
            </p>
          </section>

          {/* ── SERVICES SECTION ── */}
          <section
            style={{
              padding: "0 48px 96px",
              maxWidth: "1240px",
              margin: "0 auto",
            }}
          >
            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(239,68,68,0.65)",
                  letterSpacing: "0.22em",
                  marginBottom: "12px",
                }}
              >
                WHAT WE OFFER
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 46px)",
                  fontWeight: 400,
                  color: "#ff0000",
                  lineHeight: 1.15,
                }}
              ></h2>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "rgba(239,68,68,0.55)",
                  margin: "18px auto 0",
                  borderRadius: "2px",
                }}
              />
            </div>

            {/* Cards */}
            <div className="bio-service-grid">
              {services.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </div>
          </section>

          {/* ── CTA BANNER ── */}

          <section style={{ padding: "0 48px 96px" }}>
            <div
              style={{
                maxWidth: "860px",
                margin: "0 auto",
                background:
                  "linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(0,0,0,0.15) 100%)",
                border: "1px solid rgba(239,68,68,0.22)",
                borderRadius: "20px",
                padding: "60px 48px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* scan line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(239,68,68,0.38), transparent)",
                  animation: "bio-scan 3.5s linear infinite",
                  top: 0,
                }}
              />

              <p
                style={{
                  fontSize: "10px",
                  color: "rgba(239,68,68,0.65)",
                  letterSpacing: "0.22em",
                  marginBottom: "16px",
                }}
              >
                READY TO COLLABORATE?
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 42px)",
                  fontWeight: 400,
                  color: "#ff0000bf",
                  marginBottom: "14px",
                  lineHeight: 1.2,
                }}
              >
                Start your genomic journey today
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(93, 93, 100, 0.79)",
                  maxWidth: "440px",
                  margin: "0 auto 32px",
                  lineHeight: 1.65,
                }}
              >
                From sequencing to drug discovery — our team of
                bioinformaticians is ready to accelerate your research.
              </p>

              {/* CENTERED BUTTON WRAPPER */}
              <div className="pt-1 flex justify-center">
                <button className="group flex items-center gap-3 p-4 text-[11px] lg:text-[14px] tracking-[0.25em] uppercase border-0 bg-destructive cursor-pointer text-white dark:text-gray-100 dark:hover:text-red-500 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed">
                  <span className="block w-8 h-[1.5px] bg-current transition-all duration-300 group-hover:w-14" />
                  <Link href="/contact">Contact Our Team</Link>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
