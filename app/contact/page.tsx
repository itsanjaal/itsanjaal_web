"use client";

// app/contact/page.tsx  (or app/contact-us/page.tsx)
//
// A full Contact Us page — distinct from the homepage ContactSection.
// Layout: Hero banner → Full-bleed map → Info + form side-by-side
// Map: Google Maps embed for Buddhanagar, Kathmandu.

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendContactEmail } from "../actions/sendMail";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
const EMPTY: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

/* ─── Icon ───────────────────────────────────────────────── */
function Ico({
  path,
  path2,
  size = 18,
}: {
  path: string;
  path2?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
      {path2 && <path d={path2} />}
    </svg>
  );
}

/* ─── Info card ──────────────────────────────────────────── */
function InfoCard({
  icon,
  label,
  value,
  sub,
  href,
  ext,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  href: string;
  ext?: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target={ext ? "_blank" : undefined}
      rel={ext ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="group flex flex-col gap-3 p-6 border-2 no-underline transition-all duration-300"
      style={{
        borderColor: hov ? "#b91c1c" : "#e5e7eb",
        background: hov ? "#fff5f5" : "#fff",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hov ? "0 8px 30px rgba(185,28,28,0.1)" : "none",
      }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
        style={{
          background: hov ? "#b91c1c" : "#fff5f5",
          color: hov ? "#fff" : "#b91c1c",
        }}
      >
        {icon}
      </div>
      <div>
        <p
          className="font-mono uppercase mb-1"
          style={{ fontSize: "9px", letterSpacing: "0.25em", color: "#b91c1c" }}
        >
          {label}
        </p>
        <p
          className="font-mono font-medium text-gray-900 mb-0.5"
          style={{ fontSize: "clamp(12px,1.2vw,15px)" }}
        >
          {value}
        </p>
        {sub && (
          <p className="font-mono text-gray-400" style={{ fontSize: "10px" }}>
            {sub}
          </p>
        )}
      </div>
      <div
        className="flex items-center gap-1.5 font-mono uppercase text-red-600 transition-all duration-200"
        style={{
          fontSize: "9px",
          letterSpacing: "0.2em",
          opacity: hov ? 1 : 0,
          transform: hov ? "translateX(0)" : "translateX(-4px)",
        }}
      >
        Open{" "}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </a>
  );
}

/* ─── Animated number counter ────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0;
          const step = Math.ceil(to / 60);
          const id = setInterval(() => {
            start = Math.min(start + step, to);
            setVal(start);
            if (start >= to) clearInterval(id);
          }, 16);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const inputCls =
  "w-full bg-white border-0 border-b-2 border-gray-200 font-mono text-sm text-gray-900 py-3 px-0 placeholder:text-gray-300 focus:outline-none focus:border-red-600 transition-colors duration-300";

/* ─── Page ───────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [chars, setChars] = useState(0);

  const set = (k: keyof FormData, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (k === "message") setChars(v.length);
  };

  const notifySuccess = () =>
    toast("Message sent! We'll get back to you soon.", {
      style: {
        background: "#fff",
        color: "#111",
        border: "1.5px solid #b91c1c",
        // This targets the CSS variable used by the library for the progress bar
        "--toastify-color-progress-light": "#b91c1c",
        "--toastify-color-progress-dark": "#b91c1c",
      } as React.CSSProperties,
    });
  const notifyError = () =>
    toast("Something went wrong. Please try again.", {
      style: {
        background: "#fff",
        color: "#111",
        border: "1.5px solid #b91c1c",
        // This targets the CSS variable used by the library for the progress bar
        "--toastify-color-progress-light": "#b91c1c",
        "--toastify-color-progress-dark": "#b91c1c",
      } as React.CSSProperties,
    });

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    const result = await sendContactEmail(form); // Call the Server Action directly

    if (result.success) {
      notifySuccess();
      setStatus("success");
      setForm(EMPTY);
    } else {
      notifyError();
      setStatus("idle");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-red-600 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hg"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0H0M0 40V0"
                  stroke="#fff"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hg)" />
          </svg>
        </div>

        {/* Large faint text watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span
            className="font-mono font-bold text-white select-none"
            style={{
              fontSize: "clamp(80px,15vw,200px)",
              opacity: 0.05,
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
            }}
          >
            CONTACT
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5 bg-white/60 flex-shrink-0" />
              <span
                className="font-mono uppercase tracking-[0.32em] text-white/70"
                style={{ fontSize: "clamp(9px,1vw,11px)" }}
              >
                IT Sanjaal
              </span>
            </div>
            <h1
              className="font-normal leading-none text-white mb-6"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(36px,6vw,72px)",
              }}
            >
              Let's Build
              <br />
              <em className="italic text-red-200">Something Great</em>
            </h1>
            <p
              className="font-mono leading-relaxed text-white/70 max-w-md"
              style={{ fontSize: "clamp(11px,1.15vw,14px)" }}
            >
              Whether you have a project in mind, a question to ask, or just
              want to say hello — we're ready to listen and respond.
            </p>
          </div>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard
            icon={
              <Ico path="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            }
            label="Call Us"
            value="+977-9851444004"
            sub="Mon–Sat, 9 AM–6 PM"
            href="tel:9851444004"
          />
          <InfoCard
            icon={
              <Ico path="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            }
            label="WhatsApp"
            value="+977-9851444004"
            sub="Quick replies on WhatsApp"
            href="https://wa.me/9851444004"
            ext
          />
          <InfoCard
            icon={
              <Ico
                path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                path2="M22 6l-10 7L2 6"
              />
            }
            label="Email"
            value="info@itsanjaal.com"
            sub="We reply within 24 hours"
            href="mailto:info@itsanjaal.com"
          />
          <InfoCard
            icon={
              <Ico
                path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                path2="M12 10m-3 0a3 3 0 106 0 3 3 0 00-6 0"
              />
            }
            label="Visit Us"
            value="Buddhanagar, Kathmandu"
            sub="Open Google Maps"
            href="https://www.google.com/maps/place/M8PH%2B2J4,+Kathmandu+44600/@27.6849814,85.3281286,19z"
            ext
          />
        </div>
      </section>

      {/* ── MAP + FORM ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-gray-100 overflow-hidden">
          {/* MAP side */}
          <div className="relative min-h-[400px] lg:min-h-0">
            {/* Map label */}
            <div
              className="absolute top-4 left-4 z-10 bg-red-600 text-white font-mono uppercase px-3 py-1.5 flex items-center gap-2"
              style={{ fontSize: "9px", letterSpacing: "0.25em" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
              Our Office
            </div>

            {/* Google Maps embed — Buddhanagar, Kathmandu */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.3082!2d85.3281286!3d27.6849814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b8d4cbfd63%3A0xf9f973d44ed6236a!2sBuddhanagar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1699000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "400px",
                display: "block",
                filter: "saturate(0.85) contrast(1.05)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IT Sanjaal office location — Buddhanagar, Kathmandu"
            />

            {/* Overlay gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.4), transparent)",
              }}
            />

            {/* Address card pinned to bottom */}
            <div className="absolute bottom-4 left-4 right-4 z-10 bg-white border-l-4 border-red-600 px-4 py-3 shadow-lg">
              <p
                className="font-mono uppercase text-red-600 mb-1"
                style={{ fontSize: "8px", letterSpacing: "0.25em" }}
              >
                Address
              </p>
              <p
                className="font-mono text-gray-900 font-medium"
                style={{ fontSize: "13px" }}
              >
                Buddhanagar, Kathmandu 44600
              </p>
              <p
                className="font-mono text-gray-400"
                style={{ fontSize: "10px" }}
              >
                Nepal
              </p>
            </div>
          </div>

          {/* FORM side */}
          <div className="bg-white px-8 lg:px-12 py-10 border-l-2 border-gray-100">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-0.5 bg-red-600 flex-shrink-0" />
                <span
                  className="font-mono uppercase text-red-600 tracking-[0.3em]"
                  style={{ fontSize: "9px" }}
                >
                  Send a Message
                </span>
              </div>
              <h2
                className="font-normal text-gray-900 leading-tight"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(22px,3vw,36px)",
                }}
              >
                We'd love to hear{" "}
                <em className="italic text-red-600">from you</em>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="font-mono uppercase tracking-[0.25em] text-red-600 block mb-2"
                    style={{ fontSize: "9px" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={inputCls}
                  />
                  {errors.name && (
                    <p className="font-mono text-[9px] text-red-500 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="font-mono uppercase tracking-[0.25em] text-red-600 block mb-2"
                    style={{ fontSize: "9px" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+977-98XXXXXXXX"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label
                  className="font-mono uppercase tracking-[0.25em] text-red-600 block mb-2"
                  style={{ fontSize: "9px" }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputCls}
                />
                {errors.email && (
                  <p className="font-mono text-[9px] text-red-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="font-mono uppercase tracking-[0.25em] text-red-600 block mb-2"
                  style={{ fontSize: "9px" }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Web Development Project"
                  value={form.subject}
                  onChange={(e) => set("subject", e.target.value)}
                  className={inputCls}
                />
                {errors.subject && (
                  <p className="font-mono text-[9px] text-red-500 mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="font-mono uppercase tracking-[0.25em] text-red-600 block mb-2"
                  style={{ fontSize: "9px" }}
                >
                  Message *
                </label>
                <textarea
                  placeholder="Tell us about your project or how we can help…"
                  value={form.message}
                  onChange={(e) =>
                    set("message", e.target.value.slice(0, 1000))
                  }
                  rows={5}
                  className={`${inputCls} resize-none`}
                />
                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="font-mono text-[9px] text-red-500">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span
                    className="font-mono text-[9px] transition-colors duration-200"
                    style={{ color: chars > 900 ? "#b91c1c" : "#d1d5db" }}
                  >
                    {chars} / 1000
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-5 flex-wrap pt-1">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex items-center gap-3 font-mono uppercase text-white border-0 cursor-pointer transition-all duration-200 disabled:opacity-50"
                  style={{
                    background: "#b91c1c",
                    fontSize: "clamp(9px,1vw,11px)",
                    letterSpacing: "0.25em",
                    padding: "clamp(13px,1.5vw,16px) clamp(24px,2.8vw,36px)",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      (e.currentTarget as HTMLElement).style.background =
                        "#991b1b";
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateX(2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#b91c1c";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateX(0)";
                  }}
                >
                  {status === "loading" ? (
                    "Sending…"
                  ) : status === "success" ? (
                    <>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Message Sent
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>
                {status === "success" && (
                  <span
                    className="font-mono text-gray-400 flex items-center gap-2"
                    style={{
                      fontSize: "clamp(9px,1vw,11px)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    We'll be in touch soon.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── SOCIAL + HOURS ── */}
      <section className="border-t-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office hours */}
            <div>
              <p
                className="font-mono uppercase tracking-[0.3em] text-red-600 mb-5"
                style={{ fontSize: "9px" }}
              >
                Office Hours
              </p>
              {[
                { day: "Sunday – Friday", hours: "9:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
                { day: "Public Holidays", hours: "Closed" },
              ].map((r) => (
                <div
                  key={r.day}
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                >
                  <span
                    className="font-mono text-gray-600"
                    style={{ fontSize: "clamp(11px,1.1vw,13px)" }}
                  >
                    {r.day}
                  </span>
                  <span
                    className="font-mono font-medium"
                    style={{
                      fontSize: "clamp(11px,1.1vw,13px)",
                      color: r.hours === "Closed" ? "#9ca3af" : "#111",
                    }}
                  >
                    {r.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p
                className="font-mono uppercase tracking-[0.3em] text-red-600 mb-5"
                style={{ fontSize: "9px" }}
              >
                Follow Us
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    href: "https://www.facebook.com/itsanjaal",
                    label: "Facebook",
                    handle: "@itsanjaal",
                  },
                  {
                    href: "https://www.instagram.com/itsanjaal",
                    label: "Instagram",
                    handle: "@itsanjaal",
                  },
                ].map((s) => {
                  const [sh, setSh] = useState(false);
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setSh(true)}
                      onMouseLeave={() => setSh(false)}
                      className="flex items-center gap-4 p-4 border-2 no-underline transition-all duration-200"
                      style={{
                        borderColor: sh ? "#b91c1c" : "#f3f4f6",
                        background: sh ? "#fff5f5" : "#fff",
                      }}
                    >
                      <div
                        className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                        style={{
                          background: sh ? "#b91c1c" : "#fff5f5",
                          color: sh ? "#fff" : "#b91c1c",
                        }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {s.label === "Facebook" ? (
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          ) : (
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            />
                          )}
                        </svg>
                      </div>
                      <div>
                        <p
                          className="font-mono uppercase tracking-[0.15em] text-gray-900 font-medium mb-0.5"
                          style={{ fontSize: "12px" }}
                        >
                          {s.label}
                        </p>
                        <p
                          className="font-mono text-gray-400"
                          style={{ fontSize: "11px" }}
                        >
                          {s.handle}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer autoClose={3000} transition={Bounce} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
        input:-webkit-autofill, textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
          -webkit-text-fill-color: #111 !important;
        }
      `}</style>
    </main>
  );
}
