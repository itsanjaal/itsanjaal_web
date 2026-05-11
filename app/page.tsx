// import ContactSection from "@/components/contact-section";
import CTASection from "@/components/cta-section";
import SmoothCarousel from "@/components/smoothCarousel";
import ServicesSection from "@/components/services-section";
import RemarkableProjects from "@/components/RemarkableProjects";
import FridayCulture from "@/components/FridayCulture";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";
export default function Home() {
  return (
    <div className="bg-white">

      <SmoothCarousel />

      <ServicesSection />
      <RemarkableProjects />
      <PartnersSection/>
  
      <FridayCulture />
      <ContactSection />
      <CTASection />
    </div>
  );
}
