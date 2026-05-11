"use client";

import { sendContactEmail } from "@/app/actions/sendMail";
// components/ContactSection.tsx
// Red & white theme — drop-in replacement for your original.
// All original logic preserved: POST /api/contact, react-toastify, same contact details.

import type React from "react";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData { name: string; email: string; phone: string; message: string; }
const EMPTY: FormData = { name: "", email: "", phone: "", message: "" };

/* ── Thin SVG icons ── */
const Icon = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />{d2 && <path d={d2} />}
  </svg>
);
const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const CONTACTS = [
  { label: "Phone",    value: "+977-9851444004",    href: "tel:9851444004",             ext: false,
    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 14.92z" },
  { label: "WhatsApp", value: "+977-9851444004",    href: "https://wa.me/9851444004",   ext: true,
    d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" },
  { label: "Email",    value: "info@itsanjaal.com", href: "mailto:info@itsanjaal.com",  ext: false,
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    d2: "M22 6l-10 7L2 6" },
  { label: "Location", value: "Buddhanagar, Kathmandu",
    href: "https://www.google.com/maps/place/M8PH%2B2J4,+Kathmandu+44600/@27.6849814,85.3281286,19z", ext: true,
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z", d2: "M12 10m-3 0a3 3 0 106 0 3 3 0 00-6 0" },
];

function ContactItem({ label, value, href, ext, d, d2 }: typeof CONTACTS[0]) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="flex items-center gap-4 py-4 border-b border-gray-100 no-underline transition-colors duration-200 group"
      style={{ background: hov ? "#fff5f5" : "#fff" }}>
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center transition-colors duration-200"
        style={{ background: hov ? "#991b1b" : "#b91c1c", color: "#fff" }}>
        <Icon d={d} d2={d2} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-mono uppercase mb-0.5"
          style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#b91c1c" }}>{label}</p>
        <span className="font-mono transition-colors duration-200 block truncate"
          style={{ fontSize: "clamp(12px,1.2vw,14px)", color: hov ? "#b91c1c" : "#111" }}>{value}</span>
      </div>
      <div className="flex-shrink-0 transition-all duration-200"
        style={{ color: "#b91c1c", opacity: hov ? 1 : 0, transform: hov ? "translateX(0)" : "translateX(-5px)" }}>
        <ArrowRight />
      </div>
    </a>
  );
}

const inputCls = "w-full bg-transparent border-0 border-b-2 border-gray-200 font-mono text-sm text-gray-900 py-2.5 px-0 placeholder:text-gray-300 focus:outline-none focus:border-red-600 transition-colors duration-300";

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [chars, setChars] = useState(0);

  const set = (k: keyof FormData, v: string) => {
    setForm(f => ({ ...f, [k]: v }));
    if (k === "message") setChars(v.length);
  };

  const notifySuccess = () => toast("Message sent successfully!", {
    style: { background: "#fff", color: "#111", border: "1.5px solid #b91c1c" },
    progressStyle: { background: "#b91c1c" },
  });
  const notifyError = () => toast("Error sending message. Please try again.", {
    style: { background: "#fff", color: "#111", border: "1.5px solid #ef4444" },
    progressStyle: { background: "#ef4444" },
  });

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e); return !Object.keys(e).length;
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validate()) return;
  //   setStatus("loading");
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });
  //     if (!res.ok) { notifyError(); setStatus("idle"); return; }
  //     notifySuccess();
  //     setStatus("success");
  //     setForm(EMPTY); setChars(0);
  //     setTimeout(() => setStatus("idle"), 4000);
  //   } catch (err) { console.error(err); notifyError(); setStatus("idle"); }
  // };
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
    <section id="contact" className="relative w-full bg-white overflow-hidden py-20 lg:py-28">
      {/* Top red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

      {/* Light red corner decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, #b91c1c, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-0.5 bg-red-600 flex-shrink-0" />
            <span className="font-mono uppercase tracking-[0.32em] text-red-600"
              style={{ fontSize: "clamp(9px,1vw,11px)" }}>Let's talk</span>
          </div>
          <h2 className="font-normal leading-none mb-3 text-gray-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px,4.5vw,52px)" }}>
            Get In <em className="italic text-red-600">Touch</em>
          </h2>
          <p className="font-mono leading-relaxed text-gray-500 max-w-lg"
            style={{ fontSize: "clamp(11px,1.1vw,13px)" }}>
            Ready to start your next project? Reach out and let's discuss how we can help transform your business.
          </p>
          <div className="w-8 h-0.5 bg-red-600 mt-6" />
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-px bg-gray-100">

          {/* LEFT */}
          <div className="bg-white pt-2 pb-10 lg:pr-12">
            <p className="font-mono uppercase tracking-[0.3em] text-red-600 mb-5"
              style={{ fontSize: "9px" }}>Contact Information</p>
            <div className="border-t border-gray-100">
              {CONTACTS.map(c => <ContactItem key={c.label} {...c} />)}
            </div>

            {/* Socials */}
            <div className="mt-8">
              <p className="font-mono uppercase tracking-[0.28em] text-red-600 mb-4"
                style={{ fontSize: "9px" }}>Follow Us</p>
              <div className="flex gap-2">
                {[
                  { href: "https://www.facebook.com/itsanjaal", label: "Facebook",
                    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { href: "https://www.instagram.com/itsanjaal", label: "Instagram",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                ].map(s => {
                  const [sh, setSh] = useState(false);
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      aria-label={s.label}
                      onMouseEnter={() => setSh(true)} onMouseLeave={() => setSh(false)}
                      className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                      style={{ border: `1.5px solid ${sh ? "#b91c1c" : "#e5e7eb"}`,
                        background: sh ? "#b91c1c" : "#fff", color: sh ? "#fff" : "#9ca3af" }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path} fillRule="evenodd" clipRule="evenodd" />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="bg-white pt-2 pb-10 lg:pl-12">
            <p className="font-mono uppercase tracking-[0.3em] text-red-600 mb-5"
              style={{ fontSize: "9px" }}>Send a Message</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono uppercase tracking-[0.28em] text-red-600 block mb-2"
                    style={{ fontSize: "9px" }}>Full Name *</label>
                  <input type="text" placeholder="Jane Smith" value={form.name}
                    onChange={e => set("name", e.target.value)} className={inputCls} />
                  {errors.name && <p className="font-mono text-[9px] text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="font-mono uppercase tracking-[0.28em] text-red-600 block mb-2"
                    style={{ fontSize: "9px" }}>Phone</label>
                  <input type="tel" placeholder="+977-98XXXXXXXX" value={form.phone}
                    onChange={e => set("phone", e.target.value)} className={inputCls} />
                </div>
              </div>

              <div>
                <label className="font-mono uppercase tracking-[0.28em] text-red-600 block mb-2"
                  style={{ fontSize: "9px" }}>Email Address *</label>
                <input type="email" placeholder="you@company.com" value={form.email}
                  onChange={e => set("email", e.target.value)} className={inputCls} />
                {errors.email && <p className="font-mono text-[9px] text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="font-mono uppercase tracking-[0.28em] text-red-600 block mb-2"
                  style={{ fontSize: "9px" }}>Message *</label>
                <textarea placeholder="Tell us about your project…" value={form.message}
                  onChange={e => set("message", e.target.value.slice(0, 1000))}
                  rows={5} className={`${inputCls} resize-none`} />
                <div className="flex justify-between mt-1">
                  {errors.message
                    ? <p className="font-mono text-[9px] text-red-500">{errors.message}</p>
                    : <span />}
                  <span className="font-mono text-[9px] transition-colors duration-200"
                    style={{ color: chars > 900 ? "#b91c1c" : "#d1d5db" }}>{chars} / 1000</span>
                </div>
              </div>

              <div className="flex items-center gap-5 flex-wrap pt-2">
                <button type="submit" disabled={status === "loading"}
                  className="group flex items-center gap-3 font-mono uppercase text-white border-0 cursor-pointer transition-all duration-200 disabled:opacity-50"
                  style={{ background: "#b91c1c", fontSize: "clamp(9px,1vw,11px)", letterSpacing: "0.25em",
                    padding: "clamp(12px,1.5vw,15px) clamp(22px,2.5vw,32px)" }}
                  onMouseEnter={e => { if (status !== "loading") { (e.currentTarget as HTMLElement).style.background = "#991b1b"; (e.currentTarget as HTMLElement).style.transform = "translateX(2px)"; }}}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#b91c1c"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}>
                  {status === "loading" ? "Sending…"
                    : status === "success" ? <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Sent!
                      </>
                    : <>Send Message
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="transition-transform duration-200 group-hover:translate-x-1">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </>}
                </button>
                {status === "success" && (
                  <span className="font-mono flex items-center gap-2 text-gray-400"
                    style={{ fontSize: "clamp(9px,1vw,11px)", letterSpacing: "0.12em" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    We'll be in touch soon.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer autoClose={3000} transition={Bounce} />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');`}</style>
    </section>
  );
}
