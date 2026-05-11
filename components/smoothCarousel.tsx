"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Innovative Design",
    desc: "The thread flows seamlessly, guiding you through our minimalist design philosophy.",
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800",
  },
  {
    id: 2,
    title: "Agile Development",
    desc: "Speed and precision define our process, keeping your project on the cutting edge.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
  },
  {
    id: 3,
    title: "Future Scale",
    desc: "We build with tomorrow in mind, ensuring your infrastructure grows with your vision.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
  },
];

export default function ForegroundThreadCarousel() {
  const [index, setIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Handle Screen Resize for Responsive Animations
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const isEven = index % 2 === 0;
  const leftZoneDelay = 0.5;
  const rightZoneDelay = 1.8;

  return (
    <div className="relative mx-auto w-full lg:w-screen min-h-screen h-dvh flex items-center justify-center overflow-hidden bg-white p-6 md:p-12 lg:pb-40">
      <svg
        viewBox="0 0 1000 400"
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-40 md:opacity-100"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          key={`foreground-thread-${index}`}
          d="M -50 200 C 150 200, 300 50, 500 200 S 850 350, 1050 200"
          stroke="#e11d48"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, ease: [0.45, 0, 0.55, 1] }}
        />
      </svg>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={`relative w-full max-w-7xl h-full flex flex-col-reverse lg:items-center justify-center lg:justify-between gap-10 lg:gap-20 ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Description Block */}
          <motion.div
            initial={{
              opacity: 0,
              y: isLargeScreen ? 0 : 20,
              x: isLargeScreen ? (isEven ? -30 : 30) : 0,
            }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              delay: isEven ? leftZoneDelay : rightZoneDelay,
              duration: 0.7,
            }}
            className="w-full lg:w-1/2 space-y-4 lg:space-y-6 z-20 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-700 font-semibold text-xs lg:text-sm">
              Slide {index + 1}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-tight tracking-tighter">
              {slides[index].title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              {slides[index].desc}
            </p>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: isEven ? rightZoneDelay : leftZoneDelay,
              duration: 0.9,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="w-full lg:w-1/2 z-20"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-[5/4] overflow-hidden rounded-2xl lg:rounded-[30px] shadow-2xl lg:shadow-3xl shadow-rose-950/10">
              <img
                src={slides[index].image}
                alt="Feature visual"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Navigation */}
      <div className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 flex items-center gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === i
                ? "w-10 lg:w-12 bg-rose-600"
                : "w-2 lg:w-3 bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
