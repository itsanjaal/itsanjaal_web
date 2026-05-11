// import ContactSection from "@/components/contact-section";
import CTASection from "@/components/cta-section";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Team from "@/components/team";
import Values from "@/components/values";
import FeaturedCourses from "@/app/featuredcourses/page";
import ThreadCarousel from "@/components/threadCarousel";
import SmoothCarousel from "@/components/smoothCarousel";
import ShelbyHero from "@/components/sample";
import HeroSample from "@/components/heroo";
import ServicesSection from "@/components/services-section";
import RemarkableProjects from "@/components/RemarkableProjects";
import FridayCulture from "@/components/FridayCulture";
import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/serviceSection";
import HomeServices from "@/components/HomeServices";
import PartnersSection from "@/components/PartnersSection";
export default function Home() {
  return (
    <div className="bg-white">
      {/* <Hero /> */}
      {/* <ThreadCarousel /> */}
      <SmoothCarousel />
      {/* <HomeServices /> */}
      {/* <FeaturedCourses /> */}
      <ServicesSection />
      <RemarkableProjects />
      <PartnersSection/>
      {/* <Projects /> */}

      {/* <Values /> */}
      {/* <Team /> */}
      {/* <ContactSection /> */}
      {/* <ServiceSection /> */}
      <FridayCulture />
      <ContactSection />
      <CTASection />
    </div>
  );
}
