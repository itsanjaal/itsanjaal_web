"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";
import { TeamSlider } from "@/components/teamSlider";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-red-100 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="pt-10 pb-20 px-6 lg:px-24 max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 bg-red-50 text-[#FF3131] rounded-full text-sm font-bold tracking-widest uppercase">
            About Us
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
            Simplify With <span className="text-[#FF3131]">IT Sanjaal</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed max-w-md">
            At IT Sanjaal, our mission is to simplify the digital landscape. We
            specialize in transforming complex challenges into streamlined IT
            solutions, making work effortless for businesses ranging from local
            consultancies to specialized Bio-IT ventures. By focusing on
            intuitive web development and efficient CRM systems, we bridge the
            gap between technical intricacy and user-centric design. At
            itsanjaal, we handle the digital heavy lifting so you can focus on
            what matters most—your growth.
          </p>
          {/* <button className="bg-[#FF3131] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-200 hover:scale-105 transition-transform">
            Get Started
          </button> */}
          <div className="pt-1">
            <button className="group flex items-center gap-3 p-4 text-[11px] lg:text-[14px] tracking-[0.25em] uppercase border-0 bg-destructive cursor-pointer p-0 text-white dark:text-gray-100 dark:hover:text-red-500 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed">
              <span className="block w-8 h-[1.5px] bg-current transition-all duration-300 group-hover:w-14" />
              <Link href="/contact">Contact Our Team</Link>
            </button>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center p-4">
          {/* REFINED BORDER: sitting outside the 100% width container */}
          <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M -2,-2 L 102,-1 L 101,102 L -1,101 Z" // Basic rough rectangle
              fill="transparent"
              stroke="#FF3131"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: [0, 1],
                d: [
                  "M -2,-2 C 30,-3 70,1 102,-1 C 103,30 99,70 101,102 C 70,103 30,99 -1,101 C -2,70 1,30 -2,-2",
                  "M -1,-1 C 40,2 60,-2 101,1 C 102,40 101,60 99,99 C 60,101 40,102 1,101 C -1,60 2,40 -1,-1",
                  "M -2,-2 C 30,-3 70,1 102,-1 C 103,30 99,70 101,102 C 70,103 30,99 -1,101 C -2,70 1,30 -2,-2",
                ],
              }}
              transition={{
                pathLength: { duration: 3, ease: "easeInOut" },
                d: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </svg>
          <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-200">
            <Image
              src="/team/t5.webp"
              alt="Team Work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- DIRECTOR'S MESSAGE --- */}
      <section className="bg-slate-900 text-white py-28 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 items-center relative z-10">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <Image
                src="/team/mng-director.jpg"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-8">
            <Quote className="w-16 h-16 text-[#FF3131] opacity-50" />
            <h2 className="text-4xl font-bold">A Message From Our Director</h2>
            <div className="space-y-6 text-xl text-slate-300 leading-relaxed italic">
              <p>
                Social being shapes our consciousness. And through that
                consciousness, we transform manual effort into technology. We
                aim to de-esotericize the learning process and simplify every
                tech affair, including bio-IT and genome analysis. Join our
                journey to make innovation transparent, accessible, and
                affordable.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Dibash Gautam</p>
              <p className="text-[#FF3131] font-semibold tracking-widest uppercase text-sm">
                Managing Director
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- PATRON'S MESSAGE --- */}
      <section className="bg-[#FF3131] text-white py-28 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 items-center relative z-10">
          <div className="md:col-span-3 space-y-8">
            <Quote className="w-16 h-16 text-slate-950 opacity-50" />
            <h2 className="text-4xl font-bold">
              A Message From Our Chief Patron and Advisor
            </h2>
            <div className="space-y-6 text-xl text-slate-100 leading-relaxed italic">
              <p>
                I believe technology should empower people, not exclude them. As
                an advisor, I bridge the gap between complex IT systems and
                meaningful social impact. Your support fuels my commitment to
                community aid and making innovation accessible to all.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Partiman Dhamala</p>
              <p className="text-slate-900 font-semibold tracking-widest uppercase text-sm">
                Chief Patron & Advisor
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <Image
                src="/team/patrion.jpeg"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CO-DIRECTOR'S MESSAGE --- */}
      <section className="bg-slate-900 text-white py-28 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 items-center relative z-10">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <Image
                src="team/co-director.jpeg"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-8">
            <Quote className="w-16 h-16 text-[#FF3131] opacity-50" />
            <h2 className="text-4xl font-bold">A Message From Our Director</h2>
            <div className="space-y-6 text-xl text-slate-300 leading-relaxed italic">
              <p>
                As we navigate the evolving digital landscape, our focus remains
                on bridging the gap between cutting-edge IT solutions and
                academic excellence. I am committed to integrating advanced
                technology into the classroom to empower both educators and
                students with seamless, data-driven tools. By streamlining
                complex systems, we ensure that technology serves as a catalyst
                for learning rather than a barrier. Together, we are building a
                future where technical innovation and educational growth go hand
                in hand.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Bikash Bhujel</p>
              <p className="text-[#FF3131] font-semibold tracking-widest uppercase text-sm">
                Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIVELY STATS --- */}
      {/* <section className="py-20 bg-[#FF3131] relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-white relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black mb-1">{stat.value}</h3>
              <p className="text-red-100 font-bold uppercase tracking-tighter text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* --- CONTINUOUS TEAM SLIDER --- */}
      {/* <section className="py-32 bg-white overflow-hidden">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-black uppercase text-slate-900 tracking-tighter">
            Our Core Team
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Innovative minds working together to bridge the gap between
            technology and human growth.
          </p>
        </div>

        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div
            className="flex gap-8 w-max px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...team, ...team].map((member, idx) => (
              <div
                key={idx}
                className="w-80 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:border-red-100 transition-all duration-500"
              >
                <div className="w-28 h-28 relative mb-6">
                  <div className="absolute -inset-3 border border-dashed border-slate-300 rounded-full group-hover:rotate-180 group-hover:border-[#FF3131] transition-all duration-1000" />
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
                  />
                </div>
                <h4 className="font-bold text-2xl text-slate-900">
                  {member.name}
                </h4>
                <p className="text-[#FF3131] font-bold text-sm uppercase tracking-widest mb-6">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed italic">
                  &quot;{member.quote}&quot;
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section> */}
      <TeamSlider />
    </div>
  );
};

export default AboutPage;
