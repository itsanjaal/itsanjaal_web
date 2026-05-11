'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient + Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#4f46e510_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white/80 tracking-widest">
            EARLY ACCESS NOW OPEN
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-[92px] leading-[1.05] font-semibold tracking-tighter text-white mb-6"
        >
          Global storage.<br />
          Built for AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12"
        >
          Decentralized hot storage that scales with intelligence.<br />
          Blazing fast. Truly sovereign.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-10 py-4 bg-white text-black rounded-2xl font-semibold text-lg hover:bg-white/90 transition-all duration-300"
          >
            Get Early Access
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-white/50 rounded-2xl font-medium text-lg text-white backdrop-blur-sm transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            Watch the film
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-white/40 text-sm tracking-widest"
        >
          BUILT ON APTOS • POWERING THE NEXT INTELLIGENCE LAYER
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </motion.div>

      {/* Decorative Hexagon Accent (bottom right) */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="w-48 h-48 border border-white/10 rounded-[40px] rotate-12" />
      </div>
    </section>
  );
}