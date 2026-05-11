import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/NewNavbar";
import WebDevIcon from "@/components/WebDevIcon";
import MobileAppIcon from "@/components/MobileAppIcon";
import ITCourseIcon from "@/components/ITCourseIcon";
import UIUXIcon from "@/components/UIUXIcon";
import DevOpsIcon from "@/components/DevOpsIcon";
import ContentWritingIcon from "@/components/ContentWritingIcon";
import AIStrategyIcon from "@/components/AIStrategyIcon";
import { getService, services } from "@/lib/services-data";

const iconMap: Record<string, React.ReactNode> = {
  "web-development": <WebDevIcon size={160} />,
  "mobile-app-development": <MobileAppIcon size={160} />,
  "it-course": <ITCourseIcon size={160} />,
  "ui-ux-design": <UIUXIcon size={160} />,
  "devops": <DevOpsIcon size={160} />,
  "content-writing": <ContentWritingIcon size={160} />,
  "ai-strategy-prompt-engineering": <AIStrategyIcon size={160} />,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  return {
    title: service ? `${service.title} — RedForge` : "Service Not Found",
    description: service?.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* BG shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50 skew-x-[-8deg] translate-x-24 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(229,26,26,0.05) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-[#e51a1a] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-[#e51a1a] transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[#e51a1a]">{service.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#e51a1a]" />
              <span className="tag bg-red-50 text-[#e51a1a]">Service</span>
            </div>

            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              className="text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide text-gray-900 mb-4">
              {service.title.split(" ").map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-[#e51a1a]" : ""}>{word} </span>
              ))}
            </h1>

            <p className="text-xl text-[#e51a1a] font-medium mb-6">{service.tagline}</p>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">{service.description}</p>

            <div className="flex flex-wrap gap-4">
              <div className="pt-1 flex justify-center">
                <button className="group flex items-center gap-3 p-4 text-[11px] lg:text-[14px] tracking-[0.25em] uppercase border-0 bg-destructive cursor-pointer text-white dark:text-gray-100 dark:hover:text-red-500 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed">
                  <span className="block w-8 h-[1.5px] bg-current transition-all duration-300 group-hover:w-14" />
                  <Link href="/contact">Start This Project</Link>
                </button>
              </div>
              <Link href="#process"
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold hover:border-[#e51a1a] hover:text-[#e51a1a] transition-all">
                See Our Process
              </Link>
            </div>
          </div>

          {/* Animated Icon */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-red-100 blur-3xl opacity-60 scale-150" />
              <div className="relative w-72 h-72 rounded-3xl bg-white shadow-2xl shadow-red-100 border border-red-100 flex items-center justify-center"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              >
                {iconMap[service.slug]}
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#e51a1a] opacity-80"
                style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}
              />
              <div className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-red-200"
                style={{ animation: 'float 3.5s ease-in-out infinite 1s' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      {/* <div className="bg-[#e51a1a] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-red-400">
            {[service.stat1, service.stat2, service.stat3].map((stat) => (
              <div key={stat.label} className="text-center px-6">
                <p style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-5xl text-white mb-1">{stat.value}</p>
                <p className="text-red-200 text-sm font-medium tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#e51a1a]" />
                <span className="tag bg-red-50 text-[#e51a1a]">What's Included</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                className="text-5xl text-gray-900 tracking-wide mb-6">
                EVERYTHING YOU <span className="text-[#e51a1a]">NEED</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                A complete, end-to-end service — no hidden fees, no scope creep surprises.
                We deliver the full package.
              </p>
            </div>

            <div className="grid gap-3">
              {service.features.map((feature, i) => (
                <div key={feature}
                  className="flex items-center gap-4 p-4 rounded-xl border border-red-50 hover:border-red-200 hover:bg-red-50/30 transition-all group"
                  style={{ animation: `slide-up 0.5s ease ${i * 0.08}s both` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#e51a1a] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-4xl text-gray-900 tracking-wide">
              TECH <span className="text-[#e51a1a]">STACK</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech, i) => (
              <div key={tech}
                className="px-6 py-3 bg-white border-2 border-red-100 rounded-xl font-bold text-gray-700 hover:border-[#e51a1a] hover:text-[#e51a1a] hover:-translate-y-1 transition-all cursor-default"
                style={{ animation: `scale-in 0.4s ease ${i * 0.1}s both` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#e51a1a]" />
              <span className="tag bg-red-50 text-[#e51a1a]">How We Work</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-5xl text-gray-900 tracking-wide">
              OUR <span className="text-[#e51a1a]">PROCESS</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-red-100 z-0" />

            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {service.process.map((step, i) => (
                <div key={step.step} className="group">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-red-200 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#e51a1a] group-hover:border-[#e51a1a] transition-all duration-300">
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      className="text-2xl text-[#e51a1a] group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-center font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-center text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-[#e51a1a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-5xl text-white tracking-wide mb-4">
                WHAT YOU RECEIVE
              </h2>
              <p className="text-red-200 leading-relaxed text-lg">
                Every engagement comes with these core deliverables — guaranteed.
              </p>
            </div>
            <div className="grid gap-4">
              {service.deliverables.map((d, i) => (
                <div key={d} className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-white font-medium">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 2l3 8h8l-6.5 4.7 2.5 8L14 18l-7 4.7 2.5-8L3 10h8z" fill="#e51a1a" />
              </svg>
            </div>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="text-6xl text-gray-900 tracking-wide mb-4">
            READY TO START YOUR <span className="text-[#e51a1a]">PROJECT?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Let's talk about your {service.title.toLowerCase()} needs. Free consultation, no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="pt-1 flex justify-center">
                <button className="group flex items-center gap-3 p-4 text-[11px] lg:text-[14px] tracking-[0.25em] uppercase border-0 bg-destructive cursor-pointer text-white dark:text-gray-100 dark:hover:text-red-500 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed">
                  <span className="block w-8 h-[1.5px] bg-current transition-all duration-300 group-hover:w-14" />
                  <Link href="/contact">Get Free Consultation</Link>
                </button>
              </div>
            <Link href="/#services"
              className="px-10 py-4 border-2 border-gray-200 text-gray-700 font-bold hover:border-[#e51a1a] hover:text-[#e51a1a] transition-all">
              ← All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related service */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">Also Explore</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-red-100 hover:border-[#e51a1a] card-hover">
                <div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-2xl text-gray-900 tracking-wide">
                    {s.title}
                  </h3>
                  <p className="text-[#e51a1a] mt-1 text-sm font-medium">{s.tagline}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-[#e51a1a] transition-colors shrink-0 ml-4">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="#e51a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#e51a1a" />
              <path d="M8 22 L16 10 L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="16" cy="22" r="2.5" fill="white" />
            </svg>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-xl tracking-widest">
              RED<span className="text-[#e51a1a]">FORGE</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 RedForge Digital Agency. All rights reserved.</p>
        </div>
      </footer> */}
    </main>
  );
}
