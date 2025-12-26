"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Brain, Palette, Database, Dna,Shield,Infinity, Book } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance.",
    features: ["React & Next.js", "Full-Stack Solutions", "API Integration", "Performance Optimization"],
    color: "green",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    color: "green",
  },
  {
    icon: Database,
    title: "IT Courses",
    description: "Industry driven training with Hands on Projects.",
    features: ["Python Programming with data Analysis", "MS Excel Training", "Prompting", "MERN Stack Development"],
    color: "green",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user engagement and drive conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "green",
  },
  {
    icon: Infinity,
    title: "Dev Ops",
    description: "Scalable and reliable infrastructure solutions to streamline your development and deployment processes.",
    features: ["Cloud Services", "CI/CD Pipelines", "Containerization", "Monitoring & Logging"],
    color: "green",
  },
  {
    icon: Dna,
    title: "Bioinformatics(Genome Analysis)",
    description: " Analyze and interpret biological data using Python programming and bioinformatics tools.",
    features: ["DNA Sequencing", "Protein Structure Prediction", "Bioinformatics Tools", "Data Visualization"],
    color: "green",
  },
  {
    icon: Book,
    title: "Content Writing and Assignments",
    description: "Professional content writing and academic assignments tailored to your needs.",
    features: ["SEO Writing", "Research Papers", "Blog Posts", "Editing & Proofreading"],
    color: "green",
  },
  // {
  //   icon: Shield,
  //   title: "Cybersecurity",
  //   description: "Comprehensive security solutions to protect your digital assets and data.",
  //   features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
  //   color: "blue",
  // },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-amber-50 bg-white-50"
     >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-black-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)
            const colorClass = service.color === "red" ? "bg-red-600" : "bg-red-600"
            const hoverColorClass = service.color === "red" ? "hover:text-red-700" : "hover:text-red-700"
            const hoverBgClass =
              service.color === "red"
                ? "hover:from-red-50 hover:to-red-100"
                : "hover:from-red-50 hover:to-red-100"


            return (
              <Card
                key={index}
                data-index={index}
                className={`group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br ${hoverBgClass} transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto w-12 h-12 sm:w-16 sm:h-16 ${colorClass} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle
                    className={`text-lg sm:text-xl font-bold text-gray-900 ${hoverColorClass} transition-colors`}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                        <div
                          className={`w-1.5 h-1.5 ${service.color === "green" ? "bg-red-600" : "bg-white-600"} rounded-full mr-2`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
