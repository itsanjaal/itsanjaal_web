"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
 
  {
    title: "Boxmandu",
    description:
      "A dynamic boxing gym in Kathmandu offering training, fitness programs, and coaching to build strength, discipline, and competitive sporting excellence.",
    image: "/projectt/boxmandu.jpg",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Node.js"],
    liveUrl: "https://www.boxmandu.com/",
  },
  {
    title: "Kodedristi Software",
    description:
      "A technology company specializing in software development, IT solutions, and digital transformation to empower businesses with innovation, efficiency, and reliability.",
    image: "/projectt/kodedristi-software.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://www.kodedristi.com/",
  },
  {
    title: "Farm2Door",
    description:
      "Connecting farmers directly with consumers, delivering fresh, organic, and locally sourced produce efficiently while empowering sustainable agriculture and rural livelihoods.",
    image: "/projectt/farm2door.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://www.farm2door.com/",
  },
  {
    title: "Mock UAS",
    description:
      "An advanced test preparation platform offering realistic mock exams, analytics, and guidance to help students excel in competitive UAS examinations.",
    image: "/projectt/mock-uas.jpg",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://www.mockuas.com/",
  },
  {
    title: "The Renaissance Library",
    description:
      "A modern knowledge hub providing diverse books, resources, and digital content to inspire learning, creativity, and intellectual growth worldwide.",
    image: "/projectt/renaissance-library.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://www.therenaissancelibrary.com/",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = Number(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleProjects((prev) =>
              prev.includes(projectIndex) ? prev : [...prev, projectIndex]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = sectionRef.current?.querySelectorAll("[data-index]");
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-900 mb-4">
            Our <span className="text-red-600">Remarkable Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-black-600 max-w-3xl mx-auto">
            Discover our portfolio of successful projects that showcase our
            expertise and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {projects.map((project, index) => {
            const isVisible = visibleProjects.includes(index);

            return (
              <Card
                key={index}
                data-index={index}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized // <--- add this to test
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-md text-sm font-medium transition"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </a>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-100 text-green-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
