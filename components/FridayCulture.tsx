"use client";

// components/FridayCulture.tsx
// Red & white theme. Reads session topic/time from /api/friday.
// Tracks join clicks via POST /api/friday.
// Replace /images/friday-session.jpg with your actual team photo.

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

/* ─── Countdown ──────────────────────────────────────────── */
function getTarget(sessionTime: string | null): Date {
  if (sessionTime) return new Date(sessionTime);
  const now = new Date();
  const d = new Date(now);
  const day = d.getDay();
  const diff = day === 5 && now.getHours() < 15 ? 0 : (5 - day + 7) % 7 || 7;
  d.setDate(d.getDate() + diff);
  d.setHours(15, 0, 0, 0);
  return d;
}

interface Parts { days: string; hours: string; mins: string; secs: string; }
const pad = (n: number) => String(n).padStart(2, "0");

function computeParts(target: Date): Parts {
  const diff = Math.max(0, target.getTime() - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days:  pad(Math.floor(s / 86400)),
    hours: pad(Math.floor(s / 3600) % 24),
    mins:  pad(Math.floor(s / 60) % 60),
    secs:  pad(s % 60),
  };
}

function CountUnit({ value, label }: { value: string; label: string }) {
  const prev = useRef(value);
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    if (prev.current !== value) {
      setFlip(true);
      const id = setTimeout(() => setFlip(false), 220);
      prev.current = value;
      return () => clearTimeout(id);
    }
  }, [value]);
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-mono font-medium tabular-nums text-gray-300 transition-all duration-200"
        style={{ fontSize: "clamp(20px,3vw,36px)", opacity: flip ? 0.2 : 1, transform: flip ? "translateY(-3px)" : "none" }}>
        {value}
      </span>
      <span className="font-mono uppercase text-gray-300"
        style={{ fontSize: "clamp(7px,0.9vw,9px)", letterSpacing: "0.2em" }}>{label}</span>
    </div>
  );
}

function BlinkSep() {
  const [dim, setDim] = useState(false);
  useEffect(() => { const id = setInterval(() => setDim(d => !d), 1000); return () => clearInterval(id); }, []);
  return (
    <span className="font-mono font-light text-red-400 transition-opacity duration-500 self-start pt-0.5"
      style={{ fontSize: "clamp(16px,2.5vw,30px)", opacity: dim ? 0.15 : 0.7 }}>:</span>
  );
}

/* ─── Floating tag ───────────────────────────────────────── */
function FloatTag({ label, style }: { label: string; style: React.CSSProperties }) {
  return (
    <span className="absolute font-mono uppercase pointer-events-none select-none"
      style={{ fontSize: "clamp(7px,0.9vw,9px)", letterSpacing: "0.15em",
        color: "rgba(255,255,255,0.65)", border: "0.5px solid rgba(255,255,255,0.3)",
        padding: "3px 10px", ...style }}>
      {label}
    </span>
  );
}

/* ─── Perk ───────────────────────────────────────────────── */
function Perk({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-red-200 bg-red-50"
        style={{ fontSize: "clamp(12px,1.4vw,15px)" }}>{icon}</div>
      <span className="font-mono text-gray-600" style={{ fontSize: "clamp(10px,1.05vw,12px)" }}>{label}</span>
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────── */
export default function FridayCulture() {
  const [session, setSession] = useState<{ id: string | null; topic: string; sessionTime: string | null; description: string | null; joinClicks: number; }>({
    id: null, topic: "Tech-for-People", sessionTime: null, description: null, joinClicks: 0,
  });
  const [parts, setParts] = useState<Parts>({ days: "00", hours: "00", mins: "00", secs: "00" });
  const [joining, setJoining] = useState(false);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    fetch("/api/friday").then(r => r.json()).then(d => { if (d.session) setSession(d.session); }).catch(() => {});
  }, []);

  useEffect(() => {
    const target = getTarget(session.sessionTime);
    const tick = () => setParts(computeParts(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [session.sessionTime]);

  const handleJoin = useCallback(async () => {
    if (joining || joined) return;
    setJoining(true);
    setJoined(true);
    setSession(s => ({ ...s, joinClicks: s.joinClicks + 1 }));
    try {
      if (session.id) {
        await fetch("/api/friday", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: session.id }) });
      }
    } catch { /* silent */ }
    finally { setJoining(false); }
  }, [joining, joined, session.id]);

  const showDays = parseInt(parts.days) > 0;
  const bodyText = session.description ?? "We believe great tech starts with deep thinking. Join us for an interactive talk where we bridge the gap between complex technology and human philosophy — fueled by fresh coffee and refreshments.";

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* ── Countdown strip — red bg ── */}
      <div className="bg-red-600 flex items-center justify-center gap-4 lg:gap-8 flex-wrap px-6 py-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
        <span className="font-mono uppercase tracking-[0.25em] text-white/80" style={{ fontSize: "clamp(8px,1vw,10px)" }}>
          Next session in
        </span>
        <div className="flex items-center gap-2 lg:gap-3">
          {showDays && <><CountUnit value={parts.days} label="Days" /><BlinkSep /></>}
          <CountUnit value={parts.hours} label="Hrs" />
          <BlinkSep />
          <CountUnit value={parts.mins} label="Min" />
          <BlinkSep />
          <CountUnit value={parts.secs} label="Sec" />
        </div>
        <span className="font-mono uppercase tracking-[0.25em] text-white/80" style={{ fontSize: "clamp(8px,1vw,10px)" }}>
          Every Friday @ 3 PM
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
      </div>

      {/* ── Two-column body ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

        {/* LEFT — Photo with red overlay */}
        <div className="relative overflow-hidden min-h-[280px] lg:min-h-0 group bg-red-600">
          <Image
            src="/tech-for-people.svg"
            alt="Team Friday Tech-for-People session"
            fill
            className="object-contain transition-all duration-[7000ms] ease-in-out group-hover:scale-105"
            // style={{ filter: "grayscale(1) contrast(1.1)", mixBlendMode: "multiply", opacity: 0.45 }}
            priority
          />
          {/* Red gradient overlay */}
          {/* <div className="absolute inset-0"
            style={{ background: "linear-gradient(135deg,rgba(185,28,28,0.88) 0%,rgba(120,10,10,0.96) 100%)" }} /> */}

          {/* Floating concept tags */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { label: "Consciousness",       style: { top: "17%", left: "10%",  animation: "floatTag 6s 0s ease-in-out infinite" } },
              { label: "Distributed Systems", style: { top: "35%", right: "12%", animation: "floatTag 6s 1.3s ease-in-out infinite" } },
              { label: "Free Will",           style: { top: "57%", left: "16%",  animation: "floatTag 6s 2.5s ease-in-out infinite" } },
              { label: "Neural Networks",     style: { top: "74%", right: "18%", animation: "floatTag 6s 0.9s ease-in-out infinite" } },
            ].map(t => <FloatTag key={t.label} {...t} />)}
          </div>

          {/* Time badge */}
          <div className="absolute bottom-7 left-6 z-10 pl-3.5" style={{ borderLeft: "2px solid rgba(255,255,255,0.6)" }}>
            <p className="font-mono uppercase mb-1 text-white/60" style={{ fontSize: "clamp(7px,0.9vw,9px)", letterSpacing: "0.28em" }}>
              Weekly ritual
            </p>
            <p className="text-white/95 mb-0.5" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(16px,2vw,22px)" }}>
              Friday, 3 PM
            </p>
            <p className="font-mono uppercase text-white/45" style={{ fontSize: "clamp(7px,0.85vw,9px)", letterSpacing: "0.2em" }}>
              Open to all — coffee included
            </p>
          </div>
        </div>

        {/* RIGHT — White content */}
        <div className="relative flex flex-col justify-center px-8 lg:px-14 py-12 lg:py-16 bg-white">

          {/* Faint whiteboard sketch */}
          <svg className="absolute bottom-5 right-5 pointer-events-none" style={{ opacity: 0.05 }}
            width="160" height="130" viewBox="0 0 180 140" fill="none"
            stroke="#b91c1c" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
            <rect x="10" y="10" width="160" height="120" rx="2"/>
            <line x1="90" y1="10" x2="90" y2="130"/>
            <text x="28" y="40" fontSize="10" fill="#b91c1c" fontFamily="monospace">TECH</text>
            <text x="108" y="40" fontSize="10" fill="#b91c1c" fontFamily="monospace">HUMAN</text>
            <circle cx="45" cy="78" r="20"/><circle cx="135" cy="78" r="20"/>
            <line x1="65" y1="68" x2="115" y2="68"/><line x1="65" y1="88" x2="115" y2="88"/>
          </svg>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-0.5 bg-red-600 flex-shrink-0" />
            <span className="font-mono uppercase text-red-600"
              style={{ fontSize: "clamp(9px,1vw,11px)", letterSpacing: "0.32em" }}>Friday Culture</span>
          </div>

          {/* Heading */}
          <h2 className="font-normal leading-tight text-gray-900 mb-1"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(24px,3.4vw,46px)" }}>
            Tech For People:
          </h2>
          <h2 className="font-normal italic leading-tight text-red-600 mb-7"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(24px,3.4vw,46px)" }}>
            {session.topic}
          </h2>

          {/* Body */}
          <div className="relative pl-5 mb-7" style={{ borderLeft: "2px solid #fca5a5" }}>
            <span className="absolute -top-3 left-0 select-none pointer-events-none text-red-200"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px,4vw,48px)", lineHeight: 1 }}
              aria-hidden>"</span>
            <p className="font-mono leading-[1.9] text-gray-500" style={{ fontSize: "clamp(11px,1.1vw,13px)" }}>
              {bodyText}
            </p>
          </div>

          {/* Perks */}
          <div className="flex flex-col gap-3 mb-9">
            <Perk icon="☕" label="Fresh coffee & refreshments provided" />
            <Perk icon="💬" label="Open discussion — no slides, no gatekeeping" />
            <Perk icon="🧠" label="Tech meets philosophy, ethics & the human experience" />
          </div>

          {/* CTA */}
          <div className="flex items-center gap-5 flex-wrap">
            <button onClick={handleJoin} disabled={joining}
              className="group flex items-center gap-2.5 font-mono uppercase text-white border-0 cursor-pointer transition-all duration-200 disabled:opacity-50"
              style={{ background: joined ? "#991b1b" : "#b91c1c",
                fontSize: "clamp(9px,1vw,11px)", letterSpacing: "0.25em",
                padding: "clamp(12px,1.4vw,15px) clamp(20px,2.4vw,30px)" }}
              onMouseEnter={e => { if (!joined) (e.currentTarget as HTMLElement).style.background = "#991b1b"; }}
              onMouseLeave={e => { if (!joined) (e.currentTarget as HTMLElement).style.background = "#b91c1c"; }}>
              {joined ? (
                <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Noted — see you Friday!</>
              ) : (
                <>Join next Friday
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </button>
            {session.joinClicks > 0 && (
              <span className="font-mono text-gray-400" style={{ fontSize: "clamp(9px,1vw,11px)", letterSpacing: "0.18em" }}>
                {session.joinClicks} interested
              </span>
            )}
          </div>

          <a href="/friday/archive"
            className="font-mono uppercase text-gray-400 hover:text-red-600 transition-colors duration-200 mt-4 w-fit block"
            style={{ fontSize: "clamp(9px,1vw,11px)", letterSpacing: "0.22em" }}>
            View past sessions →
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
        @keyframes floatTag { 0%,100%{transform:translateY(0);opacity:.5;} 50%{transform:translateY(-7px);opacity:.8;} }
      `}</style>
    </section>
  );
}
