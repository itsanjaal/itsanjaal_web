import ContactSection from "@/components/contact-section";
import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Team from "@/components/team";
import Values from "@/components/values";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Values />
      {/* <Team /> */}
      <ContactSection />
      <CTASection />
    </div>
  );
}
