// components/Testimonials.tsx
//
// Server component — data is fetched at request time on the server.
// Drop this anywhere in your app:
//
//   import Testimonials from "@/components/Testimonials";
//   <Testimonials />

import { Star } from "lucide-react"; // npm install lucide-react

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  message: string;
  created: string;
}

/* ── Star display (static, server-safe) ──────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={s <= rating ? "#b91c1c" : "none"}
          stroke={s <= rating ? "#b91c1c" : "#d1d5db"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ── Single card ─────────────────────────────────────────── */
function TestimonialCard({
  t,
  index,
}: {
  t: Testimonial;
  index: number;
}) {
  // Stagger via inline CSS animation delay
  const delay = `${index * 80}ms`;

  return (
    <article
      className="group relative flex flex-col gap-5 p-8 border border-gray-100 dark:border-gray-800 hover:border-red-600/30 dark:hover:border-red-600/30 transition-colors duration-500"
      style={{
        animation: `fadeUp 0.5s ${delay} ease both`,
      }}
    >
      {/* Top row: stars + initial avatar */}
      <div className="flex items-center justify-between">
        <Stars rating={t.rating} />
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-mono text-red-600 border border-red-600/20"
          aria-hidden
        >
          {t.name.charAt(0).toUpperCase()}
        </span>
      </div>

      {/* Quote mark */}
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        className="text-red-600/25"
        aria-hidden
      >
        <path
          d="M0 14V8.4C0 3.76 2.56 1.04 7.68 0l.96 1.6C5.92 2.4 4.4 4.08 4 6.8H7.2V14H0Zm11.2 0V8.4C11.2 3.76 13.76 1.04 18.88 0l.96 1.6c-2.72.8-4.24 2.48-4.64 5.2H18.4V14H11.2Z"
          fill="currentColor"
        />
      </svg>

      {/* Message */}
      <p className="font-mono text-[12px] leading-[1.85] text-gray-600 dark:text-gray-400 flex-1">
        {t.message}
      </p>

      {/* Name + date */}
      <div className="flex items-end justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
        <span className="font-mono text-[10px] tracking-[0.2em] text-gray-900 dark:text-gray-100 uppercase">
          {t.name}
        </span>
        <time
          dateTime={t.created}
          className="font-mono text-[9px] tracking-widest text-gray-400 uppercase"
        >
          {t.created
            ? new Date(t.created).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })
            : ""}
        </time>
      </div>
    </article>
  );
}

/* ── Empty state ─────────────────────────────────────────── */
function Empty() {
  return (
    <div className="col-span-full flex flex-col items-center gap-4 py-20">
      <div className="w-8 h-[2px] bg-red-600" />
      <p className="font-mono text-[11px] tracking-widest text-gray-400 uppercase">
        No testimonials yet
      </p>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export default async function Testimonials() {
  let testimonials: Testimonial[] = [];

  try {
    // Absolute URL required for server-side fetch in Next.js
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/feedback`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const data = await res.json();
      testimonials = data.testimonials ?? [];
    }
  } catch (err) {
    console.error("Testimonials fetch error:", err);
    // Fail silently — section just shows empty state
  }

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-[10px] tracking-[0.3em] text-red-600 uppercase mb-4">
            Testimonials
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2
              className="text-4xl lg:text-5xl font-normal leading-tight text-gray-900 dark:text-gray-50"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              What our clients say
            </h2>
            {testimonials.length > 0 && (
              <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase pb-2">
                {testimonials.length} review{testimonials.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
          <div className="w-8 h-[2px] bg-red-600 mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 dark:bg-gray-800">
          {testimonials.length === 0 ? (
            <Empty />
          ) : (
            testimonials.map((t, i) => (
              <div key={t.id} className="bg-white dark:bg-black">
                <TestimonialCard t={t} index={i} />
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center gap-4">
          <div className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700" />
          <a
            href="/feedback"
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-gray-400 hover:text-red-600 transition-colors duration-300"
          >
            Leave your feedback →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}
