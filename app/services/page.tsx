import Navbar from "@/components/NewNavbar";
import ServicesSection from "@/components/NewServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      

      {/* Services Section */}
      <ServicesSection />

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
