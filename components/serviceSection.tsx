"use client";

import React from "react";
import { motion } from "framer-motion";

interface Service {
  num: string;
  name: string;
  desc: string;
  href: string;
  icon: string;
}

// Keep your full SERVICES array (with original inline styles)
const SERVICES: Service[] = [
  // Paste all 9 services here from previous message
  // (I'm showing only first one for brevity - use the full one)
  {
    num: "01",
    name: "Web Development",
    desc: "Scalable, high-performance websites and web apps built with modern frameworks.",
    href: "/services/web-development",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="56" height="44" rx="3" stroke="#b91c1c" stroke-width="2" fill="none"/>
      <line x1="8" y1="24" x2="64" y2="24" stroke="#b91c1c" stroke-width="1.5"/>
      <circle cx="16" cy="19" r="2" fill="#b91c1c" style="animation:pulse 1.5s 0s ease-in-out infinite"/>
      <circle cx="23" cy="19" r="2" fill="#b91c1c" style="animation:pulse 1.5s .3s ease-in-out infinite"/>
      <circle cx="30" cy="19" r="2" fill="#b91c1c" style="animation:pulse 1.5s .6s ease-in-out infinite"/>
      <line x1="16" y1="33" x2="34" y2="33" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2s .2s ease-in-out infinite"/>
      <line x1="16" y1="39" x2="42" y2="39" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2s .5s ease-in-out infinite"/>
      <line x1="16" y1="45" x2="28" y2="45" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2s .8s ease-in-out infinite"/>
      <line x1="32" y1="45" x2="50" y2="45" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2s 1.1s ease-in-out infinite"/>
      <rect x="50" y="30" width="2" height="10" rx="1" fill="#b91c1c" style="animation:blink 1s step-end infinite"/>
    </svg></svg>`,
  },
  {
    num: "02",
    name: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps that users love and businesses rely on.",
    href: "/services/mobile-app-development",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="8" width="28" height="56" rx="5" stroke="#b91c1c" stroke-width="2" fill="none"/>
      <line x1="22" y1="18" x2="50" y2="18" stroke="#b91c1c" stroke-width="1.5"/>
      <line x1="22" y1="54" x2="50" y2="54" stroke="#b91c1c" stroke-width="1.5"/>
      <line x1="31" y1="13" x2="41" y2="13" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
      <circle cx="36" cy="59" r="2.5" stroke="#b91c1c" stroke-width="1.5" fill="none"/>
      <rect x="27" y="23" width="8" height="8" rx="2" fill="#b91c1c" style="animation:pulse 2s 0s ease-in-out infinite"/>
      <rect x="38" y="23" width="8" height="8" rx="2" fill="#fca5a5" style="animation:pulse 2s .4s ease-in-out infinite"/>
      <rect x="27" y="34" width="8" height="8" rx="2" fill="#fca5a5" style="animation:pulse 2s .8s ease-in-out infinite"/>
      <rect x="38" y="34" width="8" height="8" rx="2" fill="#b91c1c" style="animation:pulse 2s 1.2s ease-in-out infinite"/>
      <circle cx="46" cy="22" r="3" fill="#b91c1c" style="animation:pulse 1s ease-in-out infinite"/>
    </svg>`,
  },
  {
    num: "03",
    name: "IT Course",
    desc: "Structured, industry-aligned courses that build real-world technical skills fast.",
    href: "/services/it-course",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="36,14 60,26 36,38 12,26" stroke="#b91c1c" stroke-width="2" fill="none" style="animation:float 3s ease-in-out infinite"/>
      <path d="M20 30 L20 46 Q36 52 52 46 L52 30" stroke="#b91c1c" stroke-width="2" fill="none" stroke-linecap="round"/>
      <line x1="60" y1="26" x2="60" y2="40" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:float 3s .3s ease-in-out infinite"/>
      <circle cx="60" cy="43" r="3" fill="#b91c1c" style="animation:pulse 2s ease-in-out infinite"/>
      <rect x="24" y="58" width="24" height="3" rx="1.5" fill="#fca5a5"/>
      <rect x="24" y="58" width="16" height="3" rx="1.5" fill="#b91c1c" style="animation:fadeLoop 3s ease-in-out infinite"/>
    </svg>`,
  },
  {
    num: "04",
    name: "UI/UX Design",
    desc: "Intuitive, beautiful interfaces backed by user research and accessibility best practices.",
    href: "/services/ui-ux-design",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="36" cy="36" rx="22" ry="22" stroke="#fca5a5" stroke-width="1" fill="none" style="animation:spin 8s linear infinite"/>
      <ellipse cx="36" cy="36" rx="15" ry="15" stroke="#b91c1c" stroke-width="1.5" fill="none" style="animation:spinR 5s linear infinite"/>
      <path d="M29 43 L36 20 L43 43" stroke="#b91c1c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <line x1="31" y1="37" x2="41" y2="37" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="36" cy="20" r="2.5" fill="#b91c1c" style="animation:pulse 2s ease-in-out infinite"/>
      <circle cx="29" cy="43" r="2" fill="#fca5a5"/>
      <circle cx="43" cy="43" r="2" fill="#fca5a5"/>
      <circle cx="20" cy="55" r="4" fill="#b91c1c" style="animation:slideUp 2s 0s ease-in-out infinite"/>
      <circle cx="30" cy="55" r="4" fill="#fca5a5" style="animation:slideUp 2s .3s ease-in-out infinite"/>
      <circle cx="40" cy="55" r="4" fill="#fee2e2" stroke="#b91c1c" stroke-width="1" style="animation:slideUp 2s .6s ease-in-out infinite"/>
      <circle cx="50" cy="55" r="4" fill="#991b1b" style="animation:slideUp 2s .9s ease-in-out infinite"/>
    </svg>`,
  },
  {
    num: "05",
    name: "DevOps",
    desc: "Automated pipelines, container orchestration, and cloud infrastructure at scale.",
    href: "/services/devops",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 36 C20 28 28 22 36 22 C44 22 52 28 52 36 C52 44 44 50 36 50 C28 50 20 44 20 36 Z" stroke="#fca5a5" stroke-width="1" fill="none" stroke-dasharray="100" stroke-dashoffset="100" style="animation:dash 3s linear infinite"/>
      <g style="animation:spin 4s linear infinite;transform-origin:22px 36px">
        <circle cx="22" cy="36" r="7" stroke="#b91c1c" stroke-width="2" fill="none"/>
        <line x1="22" y1="27" x2="22" y2="24" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <line x1="22" y1="45" x2="22" y2="48" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <line x1="13" y1="36" x2="10" y2="36" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <line x1="31" y1="36" x2="34" y2="36" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <circle cx="22" cy="36" r="2.5" fill="#b91c1c"/>
      </g>
      <g style="animation:spinR 4s linear infinite;transform-origin:50px 36px">
        <circle cx="50" cy="36" r="7" stroke="#b91c1c" stroke-width="2" fill="none"/>
        <line x1="50" y1="27" x2="50" y2="24" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <line x1="50" y1="45" x2="50" y2="48" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <line x1="41" y1="36" x2="38" y2="36" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <line x1="59" y1="36" x2="62" y2="36" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
        <circle cx="50" cy="36" r="2.5" fill="#b91c1c"/>
      </g>
      <path d="M30 20 Q30 14 36 14 Q42 14 42 20 Q47 19 48 24 Q49 28 44 28 L28 28 Q24 28 24 24 Q24 20 30 20Z" stroke="#b91c1c" stroke-width="1.5" fill="none" style="animation:float 3s ease-in-out infinite"/>
    </svg>`,
  },
  {
    num: "06",
    name: "Bioinformatics",
    desc: "Genome analysis pipelines, variant calling, and clinical bioinformatics solutions.",
    href: "/services/bioinformatics",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 10 Q44 20 28 30 Q12 40 28 50 Q44 60 28 70" stroke="#b91c1c" stroke-width="2" fill="none" stroke-linecap="round" style="animation:pulse 3s ease-in-out infinite"/>
      <path d="M44 10 Q28 20 44 30 Q60 40 44 50 Q28 60 44 70" stroke="#fca5a5" stroke-width="2" fill="none" stroke-linecap="round" style="animation:pulse 3s .5s ease-in-out infinite"/>
      <line x1="28" y1="18" x2="44" y2="18" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2s 0s ease-in-out infinite"/>
      <line x1="28" y1="24" x2="44" y2="24" stroke="#fca5a5" stroke-width="1" stroke-linecap="round" style="animation:fadeLoop 2s .2s ease-in-out infinite"/>
      <line x1="28" y1="30" x2="44" y2="30" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2s .4s ease-in-out infinite"/>
      <line x1="28" y1="36" x2="44" y2="36" stroke="#fca5a5" stroke-width="1" stroke-linecap="round" style="animation:fadeLoop 2s .6s ease-in-out infinite"/>
      <line x1="28" y1="42" x2="44" y2="42" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2s .8s ease-in-out infinite"/>
      <line x1="28" y1="48" x2="44" y2="48" stroke="#fca5a5" stroke-width="1" stroke-linecap="round" style="animation:fadeLoop 2s 1s ease-in-out infinite"/>
      <circle cx="28" cy="36" r="4" fill="#b91c1c" style="animation:pulse 2s ease-in-out infinite"/>
      <circle cx="44" cy="36" r="4" fill="#fca5a5" style="animation:pulse 2s .4s ease-in-out infinite"/>
    </svg>`,
  },
  {
    num: "07",
    name: "Content Writing",
    desc: "SEO-optimised, brand-aligned content that engages audiences and drives conversions.",
    href: "/services/content-writing",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="10" width="36" height="46" rx="3" stroke="#b91c1c" stroke-width="2" fill="none"/>
      <path d="M50 10 L50 20 L58 20" stroke="#b91c1c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="14" y="10" width="44" height="56" rx="3" stroke="#fca5a5" stroke-width="1" fill="none" transform="translate(3,3)"/>
      <line x1="22" y1="24" x2="44" y2="24" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2.5s 0s ease-in-out infinite"/>
      <line x1="22" y1="30" x2="40" y2="30" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2.5s .3s ease-in-out infinite"/>
      <line x1="22" y1="36" x2="42" y2="36" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2.5s .6s ease-in-out infinite"/>
      <line x1="22" y1="42" x2="36" y2="42" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:fadeLoop 2.5s .9s ease-in-out infinite"/>
      <g style="animation:float 2.5s ease-in-out infinite">
        <path d="M48 46 L58 36 L60 38 L50 48 Z" stroke="#b91c1c" stroke-width="1.5" fill="#fff5f5" stroke-linejoin="round"/>
        <path d="M48 46 L46 52 L52 50 Z" stroke="#b91c1c" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
        <circle cx="47" cy="51" r="1.5" fill="#b91c1c"/>
      </g>
    </svg>`,
  },
  {
    num: "08",
    name: "AI Strategy & Prompt Engineering",
    desc: "LLM integration, custom AI workflows, and prompt frameworks that multiply your team's output.",
    href: "/services/ai-strategy",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 18 C28 18 20 23 20 32 C20 38 23 42 28 44 L28 54 L44 54 L44 44 C49 42 52 38 52 32 C52 23 44 18 36 18 Z" stroke="#b91c1c" stroke-width="2" fill="none"/>
      <path d="M28 28 Q32 24 36 28 Q40 32 44 28" stroke="#fca5a5" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M24 35 Q28 31 32 35" stroke="#fca5a5" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M40 35 Q44 31 48 35" stroke="#fca5a5" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <g style="transform-origin:36px 36px;animation:spin 3s linear infinite">
        <circle cx="58" cy="36" r="3" fill="#b91c1c" style="animation:pulse 1s ease-in-out infinite"/>
      </g>
      <g style="transform-origin:36px 36px;animation:spin 3s .5s linear infinite">
        <circle cx="14" cy="36" r="3" fill="#fca5a5" style="animation:pulse 1s .5s ease-in-out infinite"/>
      </g>
      <g style="transform-origin:36px 36px;animation:spinR 4s linear infinite">
        <circle cx="36" cy="10" r="2.5" fill="#b91c1c"/>
      </g>
      <line x1="36" y1="54" x2="36" y2="62" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" style="animation:blink 1.5s ease-in-out infinite"/>
    </svg>`,
  },
  {
    num: "09",
    name: "IT Career & Placement Support",
    desc: "Resume building, mock interviews, and direct placement with 120+ hiring partners.",
    href: "/services/it-career",
    icon: `<svg class="main-icon" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="28" width="48" height="34" rx="4" stroke="#b91c1c" stroke-width="2" fill="none"/>
      <path d="M24 28 L24 22 Q24 18 28 18 L44 18 Q48 18 48 22 L48 28" stroke="#b91c1c" stroke-width="2" fill="none" stroke-linejoin="round"/>
      <line x1="12" y1="42" x2="60" y2="42" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="3 3"/>
      <g style="animation:float 2.5s ease-in-out infinite">
        <circle cx="36" cy="11" r="5" stroke="#b91c1c" stroke-width="1.5" fill="none"/>
        <path d="M27 20 Q27 16 36 16 Q45 16 45 20" stroke="#b91c1c" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      </g>
      <path d="M54 20 L55 16 L56 20 L60 21 L56 22 L55 26 L54 22 L50 21 Z" fill="#b91c1c" style="animation:pulse 2s 0s ease-in-out infinite"/>
      <path d="M14 18 L15 15 L16 18 L19 19 L16 20 L15 23 L14 20 L11 19 Z" fill="#fca5a5" style="animation:pulse 2s .6s ease-in-out infinite"/>
    </svg>`,
  },
  // ... rest of the 8 services
];

export default function ServiceSection() {
  const handleCardClick = (serviceName: string) => {
    console.log(`Tell me more about your ${serviceName} service`);
  };

  return (
    <section className="bg-white py-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#b91c1c]" />

      <div className="max-w-7xl mx-auto px-5 md:px-16">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-0.5 bg-[#b91c1c]" />
            <span className="font-mono text-xs tracking-[0.32em] uppercase text-[#b91c1c]">
              What we do
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[50px] leading-[1.08] text-[#111] font-normal mb-3">
            Our <em className="text-[#b91c1c] not-italic">Services</em>
          </h2>
          <p className="font-mono text-sm leading-relaxed text-gray-600 max-w-md">
            From code to strategy, we deliver end-to-end technology solutions
            that transform businesses and careers.
          </p>
          <div className="w-8 h-0.5 bg-[#b91c1c] mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(service.name)}
              whileHover={{ y: -4 }}
              className="group bg-white flex flex-col cursor-pointer hover:bg-[#fff5f5] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="h-[130px] flex items-center justify-center bg-gradient-to-br from-[#fff5f5] to-white border-b border-gray-100 group-hover:from-[#fee2e2] group-hover:to-[#fff5f5] transition-all duration-300 overflow-hidden">
                <motion.div
                  className="main-icon"
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  dangerouslySetInnerHTML={{ __html: service.icon }}
                />
              </div>

              <div className="p-6 pb-7 flex-1 flex flex-col">
                <p className="font-mono text-[10px] tracking-[0.3em] text-[#b91c1c] mb-2">
                  {service.num}
                </p>
                <h3 className="font-serif text-xl leading-tight text-[#111] mb-3 font-normal">
                  {service.name}
                </h3>
                <p className="font-mono text-[10px] leading-[1.8] text-gray-600 flex-1">
                  {service.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-[#b91c1c] font-mono text-[9px] tracking-[0.2em] uppercase group-hover:gap-2.5 transition-all duration-200">
                  Learn more
                  <svg
                    width="11"
                    height="11"
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
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#b91c1c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Keep your CSS animations in globals.css for the SVGs */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinR {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes fadeLoop {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        .main-icon * {
          animation: inherit !important;
        }
      `}</style>
    </section>
  );
}
