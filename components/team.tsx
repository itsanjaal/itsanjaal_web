"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Nabin Dhami",
    role: "Senior Developer",
    bio: "Expert in modern web technologies and cloud infrastructure solutions.",
    image: "/team/nabin-dhami.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Bipan Pandey",
    role: "Graphics Designer",
    bio: "Expert graphics designer.",
    image: "/team/bipan-panday.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Suman Sapkota",
    role: "Lead Designer",
    bio: "Creative director with expertise in UX/UI design and brand development.",
    image: "/team/suman-sapkota.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    bio: "Expert in modern web technologies and cloud infrastructure solutions.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Lisa Thompson",
    role: "Project Manager",
    bio: "Agile expert ensuring smooth project delivery and client satisfaction.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Alex Martinez",
    role: "AI Specialist",
    bio: "Machine learning engineer focused on innovative AI solutions and automation.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export default function Team() {
  const [visibleMembers, setVisibleMembers] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const memberIndex = Number.parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleMembers((prev) => [...prev, memberIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const memberCards = sectionRef.current?.querySelectorAll("[data-index]");
    memberCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-green-500 bg-clip-text ">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {teamMembers.map((member, index) => {
            const isVisible = visibleMembers.includes(index);

            return (
              <Card
                key={index}
                data-index={index}
                className={`group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 overflow-hidden rounded-full group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Social Links */}
                    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={member.social.linkedin}
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                      <a
                        href={member.social.github}
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
