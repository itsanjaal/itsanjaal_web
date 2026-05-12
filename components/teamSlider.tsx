"use client";

import Image from "next/image";
import { useRef } from "react";

/* ─── Team data ──────────────────────────────────────────────
   Kept here so the component is self-contained.
   If you ever want to pass team data from outside, see the
   comment on the TeamSlider prop below.
──────────────────────────────────────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  quote: string;
  img: string;
}

const DEFAULT_TEAM: TeamMember[] = [
  {
    name: "Som Bahadur Tamang",
    role: "Lead Developer",
    quote:
      "I don't just care that the button works; I care that the data it sends is secure, the response is instant, and the team that built it is proud of the code.",
    img: "/team/t1.webp",
  },
  {
    name: "Pragya Khatiwada",
    role: "Frontend Developer",
    quote:
      "In the beginning, you feel like you're just moving boxes. Eventually, you realize you're building the window through which the world sees the data.",
    img: "/team/t2.webp",
  },
  
  {
    name: "Gaurav Deol",
    role: "DevOps & Backend Developer",
    quote:
      "Efficiency isn't just about speed; it's about making the most complex operation in the world feel like a single, effortless heartbeat to the user.",
    img: "/team/t4.webp",
  },
  {
    name: "Robin Sharma",
    role: "Senior Advisor",
    quote: "Genius is 1% talent and 99% percent hard work.",
    img: "/team/t3.webp",
  },
  
  {
    name: "Rupesh Chaulagain",
    role: "Senior Backend Developer",
    quote:
      "A senior developer doesn't just build the bridge; they design the way it fails so the city doesn't go dark.",
    img: "/team/t4.webp",
  },
  {
    name: "Gobinda Bhandara",
    role: "Devops Engineer",
    quote:
      "A great DevOps engineer doesn't just build pipelines; they build empathy between teams, turning the friction of 'us vs. them' into the momentum of 'we'.",
    img: "/team/t7.jpeg",
  },
  {
    name: "Rakshya Bastola",
    role: "Mobile App Developer",
    quote:
      "On a desktop, a crash is a tab. On mobile, a crash is a betrayal. Your code is the last thing a user sees before they decide to delete you forever.",
    img: "/team/t6.jpeg",
  },
];

/* ─── TeamSlider ─────────────────────────────────────────────
   Usage (no props needed — uses built-in team data):
     <TeamSlider />

   Usage (pass your own data from a parent):
     <TeamSlider team={myTeamArray} />
──────────────────────────────────────────────────────────── */
interface TeamSliderProps {
  team?: TeamMember[]; // optional — defaults to DEFAULT_TEAM above
}

export function TeamSlider({ team = DEFAULT_TEAM }: TeamSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl font-black uppercase text-destructive tracking-tighter">
          Our Core Team
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto">
          Innovative minds working together to bridge the gap between technology
          and human growth.
        </p>
      </div>

      {/* Edge-fade wrapper */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
        }}
      >
        {/* Scrolling track — CSS animation, zero JS on every frame */}
        <div
          ref={trackRef}
          className="flex gap-8 w-max px-4 team-track"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Duplicate once for a seamless infinite loop */}
          {[...team, ...team].map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>

      <style>{`
        .team-track {
          animation: team-scroll 30s linear infinite;
          will-change: transform;
        }
        @keyframes team-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ─── TeamCard ───────────────────────────────────────────────
   Separate component → only re-renders when its own props
   change, never when the track position updates.
──────────────────────────────────────────────────────────── */
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="w-80 flex-shrink-0 bg-slate-50 p-10 rounded-[2.5rem] border-3 border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:border-red-100 transition-colors duration-300">
      {/* Avatar */}
      <div className="w-28 h-28 relative mb-6 flex-shrink-0">
        {/* Dashed ring — only colour transitions, no rotation (avoids repaint) */}
        <div
          className="absolute -inset-3 rounded-full border-2 border-dashed border-slate-300 group-hover:border-[#FF3131]"
          style={{ transition: "border-color 500ms" }}
        />
        <Image
          src={member.img}
          alt={member.name}
          fill
          sizes="112px"
          className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
        />
      </div>

      {/* Text */}
      <h4 className="font-bold text-2xl text-slate-900">{member.name}</h4>
      <p className="text-[#FF3131] font-bold text-sm uppercase tracking-widest mb-6">
        {member.role}
      </p>
      <p className="text-slate-500 text-sm leading-relaxed italic">
        &ldquo;{member.quote}&rdquo;
      </p>
    </div>
  );
}
