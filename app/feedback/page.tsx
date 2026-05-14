"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ─── Constants ──────────────────────────────────────────── */
const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "IT Course",
  "UI/UX Design",
  "DevOps",
  "Bioinformatics",
  "Content Writing",
  "AI Strategy & Prompt Engineering",
  "IT Career & Placement Support",
];

const RATING_CATEGORIES = [
  { key: "qualityRating", label: "Quality of Work & Technical Expertise" },
  { key: "timelinessRating", label: "Timeliness & Project Management" },
  { key: "commRating", label: "Communication & Politeness" },
  { key: "valueRating", label: "Value Addition & Product Impact" },
] as const;

type RatingKey = (typeof RATING_CATEGORIES)[number]["key"];
const STAR_LABELS = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

/* ─── Types ──────────────────────────────────────────────── */
interface FormData {
  company: string;
  email: string;
  services: string[];
  qualityRating: number;
  timelinessRating: number;
  commRating: number;
  valueRating: number;
  message: string;
}

interface Testimonial {
  id: string;
  company: string;
  services: string;
  qualityRating: number;
  timelinessRating: number;
  commRating: number;
  valueRating: number;
  overallRating: number;
  message: string;
  created: string;
}

type Errors = Partial<Record<keyof FormData | "server", string>>;

const EMPTY: FormData = {
  company: "",
  email: "",
  services: [],
  qualityRating: 0,
  timelinessRating: 0,
  commRating: 0,
  valueRating: 0,
  message: "",
};

/* ─── Star icon ──────────────────────────────────────────── */
function StarIcon({ filled, size = 24 }: { filled: boolean; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "#b91c1c" : "none"}
      stroke={filled ? "#b91c1c" : "currentColor"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ─── Mini star picker (one row per category) ────────────── */
function MiniStarPicker({
  value,
  onChange,
  error,
}: {
  value: number;
  onChange: (v: number) => void;
  error?: string;
}) {
  const [hov, setHov] = useState(0);
  const d = hov || value;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            onMouseEnter={() => setHov(s)}
            onMouseLeave={() => setHov(0)}
            aria-label={`${s} star`}
            className="border-0 bg-transparent cursor-pointer p-0 leading-none transition-transform duration-100"
            style={{ transform: s <= d ? "scale(1.15)" : "scale(1)" }}
          >
            <span
              className={
                s <= d ? "text-red-700" : "text-gray-300 dark:text-gray-600"
              }
            >
              <StarIcon filled={s <= d} size={22} />
            </span>
          </button>
        ))}
        {d > 0 && (
          <span className=" text-[9px] tracking-widest text-red-600 uppercase ml-2">
            {STAR_LABELS[d]}
          </span>
        )}
      </div>
      {error && <p className=" text-[9px] text-red-500">{error}</p>}
    </div>
  );
}

/* ─── Overall rating display ─────────────────────────────── */
function OverallBadge({ value }: { value: number }) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-3 p-3 border border-red-600/20 bg-red-600/[0.03]">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <StarIcon key={s} filled={s <= Math.round(value)} size={14} />
        ))}
      </div>
      <span className=" text-[16px] tracking-widest text-red-600 uppercase">
        Overall {value.toFixed(1)} / 5
      </span>
    </div>
  );
}

/* ─── Multi-select dropdown ──────────────────────────────── */
function ServiceSelect({
  value,
  onChange,
  error,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (s: string) => {
    onChange(value.includes(s) ? value.filter((x) => x !== s) : [...value, s]);
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full ml-8 flex items-center justify-between bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 py-2.5 px-0  text-sm text-left cursor-pointer focus:outline-none focus:border-red-600 transition-colors duration-300 group"
        style={{ borderBottomColor: open ? "#b91c1c" : undefined }}
      >
        <span
          className={
            value.length
              ? "text-gray-900 dark:text-gray-100"
              : "text-gray-300 dark:text-gray-700"
          }
        >
          {value.length === 0
            ? "Select services…"
            : value.length === 1
              ? value[0]
              : `${value.length} services selected`}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 transition-transform duration-200 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg max-h-64 overflow-y-auto">
          {SERVICES.map((s) => {
            const checked = value.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggle(s)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-150 cursor-pointer border-0 bg-transparent"
              >
                {/* Checkbox */}
                <span
                  className="w-4 h-4 flex-shrink-0 border flex items-center justify-center transition-colors duration-150"
                  style={{
                    borderColor: checked ? "#b91c1c" : "#d1d5db",
                    background: checked ? "#b91c1c" : "transparent",
                  }}
                >
                  {checked && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span className=" text-[11px] text-gray-700 dark:text-gray-300">
                  {s}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Selected chips */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {value.map((s) => (
            <span
              key={s}
              className="flex items-center gap-1.5  text-[9px] tracking-wide text-red-600 border border-red-600/25 px-2 py-0.5"
            >
              {s}
              <button
                type="button"
                onClick={() => toggle(s)}
                className="border-0 bg-transparent cursor-pointer text-red-400 hover:text-red-700 leading-none p-0 transition-colors"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {error && <p className=" text-[16px] text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}

/* ─── Field wrapper ──────────────────────────────────────── */
function Field({
  label,
  index,
  error,
  children,
}: {
  label: string;
  index: string;
  error?: string;
  children: React.ReactNode;
  labelClassName?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-3">
        <span className=" text-[9px] tracking-[0.3em] text-red-600 uppercase flex-shrink-0">
          {index}
        </span>
        <label className=" text-[16px] tracking-[0.15em] text-black dark:text-gray-500 uppercase">
          {label}
        </label>
      </div>
      {children}
      {error && <p className=" text-[16px] text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

const inputCls =
  " ml-7 w-full bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 text-black" +
  " text-sm text-gray-900 dark:text-gray-100 py-2.5 px-0 " +
  "placeholder:text-gray-300 dark:placeholder:text-gray-700 " +
  "focus:outline-none focus:border-red-600 transition-colors duration-300";

/* ─── Testimonial card ───────────────────────────────────── */
function TCard({ t, fresh }: { t: Testimonial; fresh: boolean }) {
  const [visible, setVisible] = useState(!fresh);
  useEffect(() => {
    if (fresh) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true)),
      );
      return () => cancelAnimationFrame(id);
    }
  }, [fresh]);

  const initials = t.company
    .split(" ")
    .map((w) => w[0] ?? "")
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const fmtDate = (iso: string) =>
    iso
      ? new Date(iso).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
      : "";

  const serviceList = t.services
    ? t.services
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <article
      className="flex flex-col gap-3 p-4 border border-2 border-gray-400 dark:border-gray-800 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-12px)",
      }}
    >
      {/* Top: overall stars + avatar */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <StarIcon
                key={s}
                filled={s <= Math.round(t.overallRating)}
                size={20}
              />
            ))}
          </div>
          <span className=" text-[9px] lg:text-[12px] text-red-600 tracking-wide">
            {t.overallRating.toFixed(1)} / 5 overall
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {t.created && (
            <span className=" text-[9px] lg:text-[12px] tracking-widest text-gray-400 uppercase">
              {fmtDate(t.created)}
            </span>
          )}
          <span className="w-7 h-7 rounded-full border border-red-600/25 flex items-center justify-center  text-[16px] text-red-600 flex-shrink-0">
            {initials}
          </span>
        </div>
      </div>

      {/* Category ratings */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-1 py-2 border-y border-gray-100 dark:border-gray-800">
        {[
          { label: "Quality", val: t.qualityRating },
          { label: "Timeliness", val: t.timelinessRating },
          { label: "Comm.", val: t.commRating },
          { label: "Value", val: t.valueRating },
        ].map(({ label, val }) => (
          <div key={label} className="flex items-center justify-between gap-1">
            <span className=" text-[9px] lg:text-[12px] text-gray-400 uppercase tracking-wide truncate">
              {label}
            </span>
            <div className="flex gap-0.5 flex-shrink-0">
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} filled={s <= val} size={10} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Message */}
      <p
        className=" text-[11px] lg:text-[14px] leading-[1.8] text-gray-600 dark:text-gray-400"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {t.message}
      </p>

      {/* Services */}
      {serviceList.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {serviceList.map((s) => (
            <span
              key={s}
              className=" text-[9px] lg:text-[12px] text-gray-400 border border-2 border-gray-400 dark:border-gray-800 px-1.5 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {/* Company */}
      <p className=" text-[16px] tracking-[0.18em] uppercase text-gray-900 dark:text-gray-100">
        — {t.company}
      </p>
    </article>
  );
}

/* ─── Skeleton loader ────────────────────────────────────── */
function Skeleton() {
  return (
    <div className="flex flex-col gap-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="p-4 border border-gray-100 dark:border-gray-800 flex flex-col gap-3 animate-pulse"
        >
          <div className="h-3 w-24 bg-gray-100 dark:bg-gray-800 rounded" />
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded" />
          <div className="h-2 w-4/5 bg-gray-100 dark:bg-gray-800 rounded" />
          <div className="h-2 w-1/3 bg-gray-100 dark:bg-gray-800 rounded" />
        </div>
      ))}
    </div>
  );
}

/* ─── Success state ──────────────────────────────────────── */
function Success({
  company,
  overall,
  onReset,
}: {
  company: string;
  overall: number;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col gap-7">
      <svg
        viewBox="0 0 56 56"
        fill="none"
        width="48"
        height="48"
        stroke="#b91c1c"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="28" cy="28" r="24" strokeOpacity="0.2" />
        <polyline
          points="18,30 25,37 39,21"
          style={{
            strokeDasharray: 40,
            strokeDashoffset: 0,
            animation: "drawCheck 0.55s 0.08s ease both",
          }}
        />
      </svg>
      <div>
        <p className=" text-[9px] tracking-[0.3em] text-red-600 uppercase mb-3">
          Received
        </p>
        <h2
          className="text-2xl lg:text-3xl font-normal leading-tight text-gray-900 dark:text-gray-50 mb-2"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Thank you, {company}.
        </h2>
        {overall > 0 && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} filled={s <= Math.round(overall)} size={14} />
              ))}
            </div>
            <span className=" text-[16px] text-red-600 tracking-wide">
              {overall.toFixed(2)} / 5 overall
            </span>
          </div>
        )}
        <p className=" text-[11px] leading-[1.9] text-gray-500 dark:text-gray-400">
          We read every response and use it to improve what we do.
        </p>
      </div>
      <button
        onClick={onReset}
        className=" text-[16px] tracking-[0.25em] uppercase text-gray-400 hover:text-red-600 transition-colors duration-300 border-0 bg-transparent cursor-pointer p-0 flex items-center gap-2 w-fit"
      >
        ← Submit another
      </button>
      <style>{`@keyframes drawCheck{from{stroke-dashoffset:40}to{stroke-dashoffset:0}}`}</style>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function FeedbackPage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [overallResult, setOverall] = useState(0);
  const [testimonials, setT] = useState<Testimonial[]>([]);
  const [freshId, setFreshId] = useState<string | null>(null);
  const [loadingT, setLoadingT] = useState(true);

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  // Computed overall from the four category ratings
  const liveOverall = (() => {
    const {
      qualityRating: q,
      timelinessRating: t,
      commRating: c,
      valueRating: v,
    } = form;
    const filled = [q, t, c, v].filter((x) => x > 0);
    if (!filled.length) return 0;
    return parseFloat((filled.reduce((a, b) => a + b, 0) / 4).toFixed(2));
  })();

  const fetchT = useCallback(async () => {
    try {
      const res = await fetch("/api/feedback");
      if (!res.ok) return;
      const data = await res.json();
      setT(data.testimonials ?? []);
    } catch {
      /* silent */
    } finally {
      setLoadingT(false);
    }
  }, []);

  useEffect(() => {
    fetchT();
  }, [fetchT]);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.company.trim()) e.company = "Company name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.services.length)
      e.services = "Please select at least one service.";
    if (!form.qualityRating) e.qualityRating = "Required.";
    if (!form.timelinessRating) e.timelinessRating = "Required.";
    if (!form.commRating) e.commRating = "Required.";
    if (!form.valueRating) e.valueRating = "Required.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Please write at least 10 characters.";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, services: form.services }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(
          data.errors ?? { server: data.error ?? "Something went wrong." },
        );
        setStatus("idle");
        return;
      }
      const overall = data.overallRating ?? liveOverall;
      setOverall(overall);

      const newId = `local-${Date.now()}`;
      const optimistic: Testimonial = {
        id: newId,
        company: form.company.trim(),
        services: form.services.join(", "),
        qualityRating: form.qualityRating,
        timelinessRating: form.timelinessRating,
        commRating: form.commRating,
        valueRating: form.valueRating,
        overallRating: overall,
        message: form.message.trim(),
        created: new Date().toISOString(),
      };
      setT((prev) => [optimistic, ...prev].slice(0, 5));
      setFreshId(newId);
      setStatus("success");
    } catch {
      setErrors({ server: "Network error — please check your connection." });
      setStatus("idle");
    }
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus("idle");
    setOverall(0);
    setFreshId(null);
  };

  return (
    <main className="min-h-screen w-full py-16 lg:py-10">
      {/* Header */}
      <div className="mb-5 p-5 lg:px-45">
        <p className="text-[16px] tracking-[0.3em] text-red-600 uppercase mb-4">
          Client Feedback
        </p>

        <h1
          className="text-4xl lg:text-5xl font-normal leading-tight text-gray-900 dark:text-gray-50 mb-3"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          How did we do?
        </h1>
        <p className=" text-[11px] leading-[1.9] text-gray-500 dark:text-gray-400 max-w-md">
          Rate us across key areas. Your honest opinion helps us grow.
        </p>
        <div className="w-8 h-[2px] bg-red-600 mt-6" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">
          {/* LEFT — Form */}
          <div className="lg:pr-14 pb-14 p-5 border border-destructive border-1">
            {status === "success" ? (
              <Success
                company={form.company.trim()}
                overall={overallResult}
                onReset={reset}
              />
            ) : (
              <div className="flex flex-col gap-8 ">
                <div>
                  {" "}
                  <p className=" text-[14px] tracking-[0.3em] text-red-600 uppercase">
                    FEEDBACK FORM
                  </p>
                  <div className="w-5 h-[2px] bg-red-600 mt-3" />
                </div>

                {/* Company */}
                <Field
                  label="Company name"
                  labelClassName="text-red"
                  index="01"
                  error={errors.company}
                >
                  <input
                    type="text"
                    placeholder="company name"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    className={inputCls}
                    autoComplete="organization"
                  />
                </Field>

                {/* Email */}
                <Field label="Email address" index="02" error={errors.email}>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={inputCls}
                    autoComplete="email"
                  />
                </Field>

                {/* Services */}
                <Field label="Services used" index="03" error={errors.services}>
                  <ServiceSelect
                    value={form.services}
                    onChange={(v) => set("services", v)}
                    error={undefined}
                  />
                  {errors.services && (
                    <p className=" text-[16px] text-red-500">
                      {errors.services}
                    </p>
                  )}
                </Field>

                {/* Category ratings */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className=" text-[9px] tracking-[0.3em] text-red-600 uppercase">
                      04
                    </span>
                    <span className=" text-[16px] tracking-[0.15em] text-black dark:text-gray-500 uppercase">
                      Ratings
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 pl-0">
                    {RATING_CATEGORIES.map((cat) => (
                      <div key={cat.key} className="flex flex-col gap-1 ml-8">
                        <span className=" text-[16px] text-gray-600 dark:text-gray-400 leading-snug">
                          {cat.label}
                        </span>
                        <MiniStarPicker
                          value={form[cat.key]}
                          onChange={(v) => set(cat.key, v)}
                          error={errors[cat.key] as string | undefined}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Live overall */}
                  {liveOverall > 0 && (
                    <div className="mt-4">
                      <OverallBadge value={liveOverall} />
                    </div>
                  )}
                </div>

                {/* Feedback */}
                <Field
                  label="Written feedback"
                  index="05"
                  error={errors.message}
                >
                  <textarea
                    placeholder="Tell us what we did well, or where we can improve…"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    rows={4}
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {errors.server && (
                  <p className=" text-[11px] text-red-500 -mt-3">
                    {errors.server}
                  </p>
                )}

                {/* Submit */}
                <div className="pt-1">
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="group flex items-center gap-3 p-4 text-[11px] lg:text-[14px] tracking-[0.25em] uppercase border-0 bg-destructive cursor-pointer p-0 text-white dark:text-gray-100 dark:hover:text-red-500 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="block w-8 h-[1.5px] bg-current transition-all duration-300 group-hover:w-14" />
                    {status === "loading" ? "Sending…" : "Submit feedback"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-gray-100 dark:bg-gray-800" />

          {/* RIGHT — Testimonials */}
          <div className="p-4 lg:pt-0 lg:ml-5 mt-4 lg:mt-0 md:mt-0 border border-1 border-destructive   dark:border-gray-800   ">
            <p className=" text-[14px] tracking-[0.3em] text-red-600 uppercase mb-3 mt-4">
              What clients say
            </p>
            <div className="w-5 h-[2px] bg-red-600 mb-7" />
            {loadingT ? (
              <Skeleton />
            ) : testimonials.length === 0 ? (
              <p className=" text-[16px] tracking-widest text-gray-300 dark:text-gray-700 uppercase py-8">
                No reviews yet
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {testimonials.map((t) => (
                  <TCard key={t.id} t={t} fresh={t.id === freshId} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500&display=swap');
        ::-webkit-scrollbar{display:none;}
      `}</style>
    </main>
  );
}
