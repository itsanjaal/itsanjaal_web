"use client";

import Link from "next/link";
import { EnhancedServiceIcon } from "@/components/ui/services-icons-enhanced";

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Build modern, responsive web applications with cutting-edge technologies and best practices.",
    category: "Development",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Create powerful iOS and Android applications that users love.",
    category: "Development",
  },
  {
    slug: "it-course",
    title: "IT Course",
    description:
      "Comprehensive training programs designed to enhance your technical skills.",
    category: "Education",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Design beautiful and intuitive user interfaces that drive engagement.",
    category: "Design",
  },
  {
    slug: "devops",
    title: "DevOps",
    description:
      "Streamline your development and deployment processes with modern DevOps practices.",
    category: "Infrastructure",
  },
  {
    slug: "bioinfo",
    title: "Bioinformatics (Genome Analysis)",
    description:
      "Advanced genomic data analysis and bioinformatics solutions for research.",
    category: "Specialized",
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    description: "Engaging and SEO-optimized content creation for your brand.",
    category: "Marketing",
  },
  {
    slug: "ai-strategy-prompt-engineering",
    title: "AI Strategy & Prompt Engineering",
    description:
      "Strategic implementation of AI solutions and optimized prompt engineering.",
    category: "AI/ML",
  },
  {
    slug: "it-career",
    title: "IT Career & Placement Support",
    description:
      "Guidance and support for advancing your IT career and landing your dream job.",
    category: "Career",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <Link
      href={
        service.slug === "bioinfo" || service.slug === "it-career"
          ? `/${service.slug}`
          : `/services/${service.slug}`
      }
    >
      <div className="group relative h-full overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-destructive hover:shadow-lg dark:border-destructive dark:bg-destructive dark:hover:border-destructive cursor-pointer">
        {/* Icon container */}
        <div className="mb-6 flex justify-center">
          <EnhancedServiceIcon service={service.slug} />
        </div>

        {/* Content */}
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
            {service.title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {service.category}
          </p>
          <p className="pt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {service.description}
          </p>
        </div>

        {/* Accent line on hover */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-destructive transition-all duration-300 group-hover:w-full dark:bg-white" />
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12 max-w-7xl mx-auto">
        <div>
          <p className=" text-[10px] tracking-[0.3em] text-red-600 uppercase mb-4">
            Our Services
          </p>
          <h2
            className="text-4xl lg:text-[3.2rem] font-normal leading-tight text-gray-900 dark:text-gray-50"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            What We <em>Offer</em>
          </h2>
          <div className="w-8 h-[2px] bg-red-600 mt-5" />
        </div>
        <span className=" text-[10px] tracking-widest text-gray-400 uppercase pb-2">
          9 services
        </span>
      </div>
      {/* <div className="text-center mb-12 sm:mb-16 px-4 border border-destructive p-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-900 mb-4">
          Our <span className="text-red-600">Services</span>
        </h2>
        <p className="text-lg sm:text-xl text-black-600 max-w-3xl mx-auto">
          Comprehensive IT solutions tailored to transform your business and
          accelerate your growth.
        </p>
      </div> */}
      {/* Services Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </main>
    </section>
  );
}
