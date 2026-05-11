"use client";
import Link from "next/link";
import { useState } from "react";
import WebDevIcon from "./WebDevIcon";
import MobileAppIcon from "./MobileAppIcon";
import { services } from "@/lib/services-data";

const iconMap: Record<string, React.ReactNode> = {
  "web-development": <WebDevIcon size={100} />,
  "mobile-app-development": <MobileAppIcon size={100} />,
};

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-28 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-red-50 blur-2xl opacity-40 pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(229,26,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(229,26,26,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#e51a1a]" />
            <span className="tag bg-red-50 text-[#e51a1a]">What We Do</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="text-6xl md:text-7xl text-gray-900 leading-none tracking-wide">
            OUR <span className="text-[#e51a1a]">SERVICES</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl">
            End-to-end digital craftsmanship — from concept to launch and beyond.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block"
              onMouseEnter={() => setHovered(service.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative overflow-hidden rounded-3xl border border-red-100 bg-white p-10 card-hover cursor-pointer"
                style={{
                  background: hovered === service.slug
                    ? 'linear-gradient(135deg, #fff1f1 0%, #ffffff 60%)'
                    : 'white',
                  transition: 'background 0.4s ease',
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e51a1a] to-[#ff6b6b] rounded-t-3xl"
                  style={{
                    transform: hovered === service.slug ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  }}
                />

                {/* Number */}
                <div className="absolute top-8 right-10"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="text-8xl text-red-50 leading-none select-none">
                    0{idx + 1}
                  </span>
                </div>

                {/* Icon with floating animation on hover */}
                <div className={`mb-8 w-28 h-28 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  hovered === service.slug ? 'bg-red-50 scale-105' : 'bg-gray-50'
                }`}
                  style={{
                    animation: hovered === service.slug ? 'float 3s ease-in-out infinite' : 'none',
                  }}
                >
                  {iconMap[service.slug]}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    className="text-3xl text-gray-900 tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#e51a1a] font-medium text-sm mb-4">{service.tagline}</p>
                  <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.slice(0, 4).map((f) => (
                      <span key={f} className="px-3 py-1 bg-red-50 text-[#c11212] text-xs font-medium rounded-full">
                        {f}
                      </span>
                    ))}
                    {service.features.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                        +{service.features.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#e51a1a] font-semibold text-sm group-hover:gap-4 transition-all">
                    <span>Explore Service</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 rounded-3xl bg-[#e51a1a] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
            }}
          />
          <div>
            <p className="text-red-200 text-sm font-medium tracking-widest uppercase mb-2">Ready to build?</p>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl md:text-5xl text-white tracking-wide">
              LET'S CREATE SOMETHING EXTRAORDINARY
            </h3>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-8 py-4 bg-white text-[#e51a1a] font-bold rounded-full hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
