import { FeaturesSection } from "@/components/featuresections";
import { HowItWorksSection } from "@/components/how-it-works";
import { AnimatedWave } from "@/components/ui/animated-wave";
import Link from "next/link";

export default function ItCareer() {
  return (
    <div className="relative min-h-screen overflow-x-hidden noise-overlay">
      <FeaturesSection />
      <HowItWorksSection />
      <section style={{ padding: "0 48px 96px" }}>
            <div
              style={{
                maxWidth: "860px",
                margin: "0 auto",
                background:
                  "linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(0,0,0,0.15) 100%)",
                border: "1px solid rgba(239,68,68,0.22)",
                borderRadius: "20px",
                padding: "60px 48px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* scan line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(239,68,68,0.38), transparent)",
                  animation: "bio-scan 3.5s linear infinite",
                  top: 0,
                }}
              />

              <p
                style={{
                  fontSize: "10px",
                  color: "rgba(239,68,68,0.65)",
                  letterSpacing: "0.22em",
                  marginBottom: "16px",
                }}
              >
                READY TO COLLABORATE?
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 42px)",
                  fontWeight: 400,
                  color: "#ff0000bf",
                  marginBottom: "14px",
                  lineHeight: 1.2,
                }}
              >
                Build Your Career With IT Sanjaal
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(93, 93, 100, 0.79)",
                  maxWidth: "440px",
                  margin: "0 auto 32px",
                  lineHeight: 1.65,
                }}
              >
                From dreaming to living in your dreams — our team of
                IT Career & Placement Support is ready to make your dream come true.
              </p>

              {/* CENTERED BUTTON WRAPPER */}
              <div className="pt-1 flex justify-center">
                <button className="group flex items-center gap-3 p-4 text-[11px] lg:text-[14px] tracking-[0.25em] uppercase border-0 bg-destructive cursor-pointer text-white dark:text-gray-100 dark:hover:text-red-500 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed">
                  <span className="block w-8 h-[1.5px] bg-current transition-all duration-300 group-hover:w-14" />
                  <Link href="/contact">Contact Our Team</Link>
                </button>
              </div>
            </div>
          </section>
      {/* <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div> */}
    </div>
  );
}
