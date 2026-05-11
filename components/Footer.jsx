import Link from "next/link";
import { services } from "./services-site/data/services";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-[#e51d1d] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                T
              </span>
              <span className="font-display text-2xl tracking-widest text-[#e51d1d]">
                TECHPULSE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital excellence, one project at a time. From code to
              strategy.
            </p>
            <div className="flex gap-3 mt-5">
              {["TW", "LI", "GH", "YT"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e51d1d] flex items-center justify-center text-xs font-bold cursor-pointer transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#e51d1d] mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#e51d1d] mb-4">
              More Services
            </h4>
            <ul className="space-y-2">
              {services.slice(5).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-[#e51d1d] mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>hello@techpulse.io</li>
              <li>+1 (555) 000-0000</li>
              <li>Remote-first, worldwide</li>
            </ul>
            <div className="mt-5">
              <input
                placeholder="Your email"
                className="w-full bg-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-[#e51d1d] mb-2"
              />
              <button className="w-full bg-[#e51d1d] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#c11414] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-gray-500 text-xs">
        © 2025 TechPulse. All rights reserved.
      </div>
    </footer>
  );
}
