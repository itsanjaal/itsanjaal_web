"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Slide data ─────────────────────────────────────── */
const SLIDES = [
  {
    label: "01",
    title: "Craft with intention",
    description:
      "Every pixel, every word — placed with purpose. Great design isn't decoration, it's clarity made visible. We obsess over details so the big picture feels effortless.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80",
  },
  {
    label: "02",
    title: "Motion as meaning",
    description:
      "Animation isn't vanity — it's narrative. When elements move with purpose, they guide attention, communicate hierarchy, and make complexity feel intuitive.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    label: "03",
    title: "Built to scale",
    description:
      "Systems thinking over one-off solutions. Patterns that hold under pressure, architecture that breathes, codebases your team will love working in.",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=600&q=80",
  },
  {
    label: "04",
    title: "Human at the core",
    description:
      "Technology serves people, not the other way around. Every decision traced to a real person with a real need. Empathy is our most important engineering tool.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  },
];

// Zones where content is revealed (as fraction of canvas width)
const DESC_TRIGGER = 0.28;
const IMG_TRIGGER = 0.62;

interface Pt { x: number; y: number }

/* ─── Thread segment generator ───────────────────────
   Appends a new wandering segment starting from wherever
   the thread currently ends, so it continues seamlessly. */
function appendSegment(
  allPts: Pt[],
  W: number,
  H: number
): number /* points added */ {
  let sx: number, sy: number, vy = 0;

  if (allPts.length > 0) {
    const last = allPts[allPts.length - 1];
    sx = last.x;
    sy = last.y;
    if (allPts.length > 1) {
      const prev = allPts[allPts.length - 2];
      vy = (last.y - prev.y) * 0.4; // carry momentum
    }
  } else {
    sx = -20;
    sy = H * (0.38 + Math.random() * 0.24);
  }

  const steps = 90;
  const endX = sx + W + 20; // travel one full screen width
  let y = sy;

  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const x = sx + (endX - sx) * t;
    vy += (Math.random() - 0.5) * H * 0.065;
    vy *= 0.62;
    y += vy;
    y = Math.max(H * 0.10, Math.min(H * 0.90, y));
    allPts.push({ x, y });
  }

  return steps;
}

/* ─── Smooth Catmull-Rom spline draw ─────────────────── */
function drawSpline(
  ctx: CanvasRenderingContext2D,
  pts: Pt[],
  endIdx: number
) {
  if (endIdx < 1) return;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 0; i < endIdx; i++) {
    const p0 = pts[Math.max(i - 1, 0)];
    const p1 = pts[i];
    const p2 = pts[Math.min(i + 1, endIdx)];
    const p3 = pts[Math.min(i + 2, endIdx)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
  }
}

function paint(
  ctx: CanvasRenderingContext2D,
  pts: Pt[],
  drawnLen: number,
  W: number,
  H: number
) {
  ctx.clearRect(0, 0, W, H);
  if (pts.length < 2 || drawnLen < 1) return;

  const endIdx = Math.min(Math.floor(drawnLen), pts.length - 1);

  // Soft halo
  ctx.save();
  ctx.strokeStyle = "rgba(185,28,28,0.13)";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  drawSpline(ctx, pts, endIdx);
  ctx.stroke();
  ctx.restore();

  // Main crisp line
  ctx.save();
  ctx.strokeStyle = "#b91c1c";
  ctx.lineWidth = 1.8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  drawSpline(ctx, pts, endIdx);
  ctx.stroke();
  ctx.restore();

  // Interpolated tip dot
  const frac = drawnLen - Math.floor(drawnLen);
  const i = Math.min(Math.floor(drawnLen), pts.length - 2);
  const tipX = pts[i].x + (pts[i + 1].x - pts[i].x) * frac;
  const tipY = pts[i].y + (pts[i + 1].y - pts[i].y) * frac;
  ctx.save();
  ctx.beginPath();
  ctx.arc(tipX, tipY, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = "#ef4444";
  ctx.fill();
  ctx.restore();
}

const ease = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

/* ─── Component ──────────────────────────────────────── */
export default function ThreadCarousel() {
  const [active, setActive] = useState(0);
  const [descVisible, setDescVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const autoRef = useRef<ReturnType<typeof setTimeout>>();

  // Persistent thread state across slides
  const allPtsRef = useRef<Pt[]>([]);
  const drawnLenRef = useRef(0);
  const animatingRef = useRef(false);

  const runSlide = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const W = canvas.width;
    const H = canvas.height;

    animatingRef.current = true;

    // Append the next segment — thread continues from where it ended
    const startPtIdx = allPtsRef.current.length;
    appendSegment(allPtsRef.current, W, H);
    const endPtIdx = allPtsRef.current.length - 1;

    const startDrawn = drawnLenRef.current;
    const targetDrawn = endPtIdx;

    let descShown = false;
    let imgShown = false;

    const ctx = canvas.getContext("2d")!;
    const dur = 2000;
    const t0 = performance.now();

    const frame = (now: number) => {
      const raw = Math.min((now - t0) / dur, 1);
      const p = ease(raw);
      drawnLenRef.current = startDrawn + (targetDrawn - startDrawn) * p;

      paint(ctx, allPtsRef.current, drawnLenRef.current, W, H);

      // Tip x position
      const i = Math.min(
        Math.floor(drawnLenRef.current),
        allPtsRef.current.length - 2
      );
      const frac = drawnLenRef.current - Math.floor(drawnLenRef.current);
      const tipX =
        allPtsRef.current[i].x +
        (allPtsRef.current[i + 1].x - allPtsRef.current[i].x) * frac;

      if (!descShown && tipX >= W * DESC_TRIGGER) {
        descShown = true;
        setDescVisible(true);
      }
      if (!imgShown && tipX >= W * IMG_TRIGGER) {
        imgShown = true;
        setImgVisible(true);
      }

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        drawnLenRef.current = targetDrawn;
        animatingRef.current = false;

        // Trim old points to prevent unbounded memory growth
        const keep = 300;
        if (allPtsRef.current.length > keep + 100) {
          const trim = allPtsRef.current.length - keep;
          allPtsRef.current = allPtsRef.current.slice(trim);
          drawnLenRef.current = Math.max(0, drawnLenRef.current - trim);
        }

        autoRef.current = setTimeout(() => {
          const next = (idx + 1) % SLIDES.length;
          setActive(next);
          setDescVisible(false);
          setImgVisible(false);
          runSlide(next);
        }, 3200);
      }
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(frame);
  }, []);

  // Init canvas size and start
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    canvas.width = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    runSlide(0);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(autoRef.current);
    };
  }, [runSlide]);

  // Resize handler
  useEffect(() => {
    const obs = new ResizeObserver(() => {
      const canvas = canvasRef.current;
      const wrap = wrapRef.current;
      if (canvas && wrap) {
        canvas.width = wrap.offsetWidth;
        canvas.height = wrap.offsetHeight;
        // Re-paint existing thread at new size
        const ctx = canvas.getContext("2d");
        if (ctx) {
          paint(ctx, allPtsRef.current, drawnLenRef.current, canvas.width, canvas.height);
        }
      }
    });
    if (wrapRef.current) obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  const goTo = (idx: number) => {
    if (animatingRef.current || idx === active) return;
    clearTimeout(autoRef.current);
    cancelAnimationFrame(rafRef.current);
    setActive(idx);
    setDescVisible(false);
    setImgVisible(false);
    runSlide(idx);
  };

  const slide = SLIDES[active];

  return (
    <section
      ref={wrapRef}
      className="relative w-full min-h-[520px] flex items-center overflow-hidden py-16"
    >
      {/* Thread canvas — z-0, sits behind all content */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Content — z-10, floats above the thread */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-12 grid grid-cols-2 gap-14 items-center">

        {/* LEFT — Description */}
        <div
          className={`transition-all duration-600 ease-out ${
            descVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <p className="font-mono text-[10px] tracking-[0.25em] text-red-600 uppercase mb-4">
            {slide.label}
          </p>
          <h2 className="font-serif text-4xl lg:text-[2.6rem] font-normal leading-tight text-gray-900 dark:text-gray-50 mb-5">
            {slide.title}
          </h2>
          <p className="font-mono text-[11px] leading-[1.9] text-gray-500 dark:text-gray-400">
            {slide.description}
          </p>
        </div>

        {/* RIGHT — Image */}
        <div
          className={`transition-all duration-600 ease-out ${
            imgVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
            <span className="absolute top-0 left-0 w-8 h-[2px] bg-red-600 z-10" />
            <span className="absolute top-0 left-0 w-[2px] h-8 bg-red-600 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.8) contrast(1.05)" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom bar — counter + arrows */}
      <div className="absolute bottom-6 left-12 right-12 z-20 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest text-gray-400">
          {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => goTo((active - 1 + SLIDES.length) % SLIDES.length)}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center cursor-pointer hover:border-gray-500 dark:hover:border-gray-400 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => goTo((active + 1) % SLIDES.length)}
            aria-label="Next slide"
            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center cursor-pointer hover:border-gray-500 dark:hover:border-gray-400 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}