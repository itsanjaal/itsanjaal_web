"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import contact from "@/app/contact/page";
const backgroundImages = [
  { url: "/hero/background1.png" },
  { url: "/hero/background2.jpeg" },
  // { url: "/hero/background03.jpg" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 100);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentBg) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBg(index);
        setIsTransitioning(false);
      }, 3000);
    }
  };

  const nextSlide = () => {
    goToSlide((currentBg + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    goToSlide(
      (currentBg - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentBg
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

    

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBg
                ? "bg-green-400 scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Current Slide Info */}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-red-600">IT Sanjaal</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Transforming businesses through innovative digital solutions,
            cutting-edge technology, and visionary design
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center items-center px-4 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group shadow-lg"
            >
              <Link href="/contact">Start Your Project</Link>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group bg-white/10 backdrop-blur-sm"
              >
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8 px-4 transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "2+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
