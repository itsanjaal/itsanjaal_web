"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Lightbulb, Award, Heart, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative digital solutions that drive growth and create lasting impact in the digital landscape.",
    color: "green",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends and continuously explore new possibilities to deliver cutting-edge solutions.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Our clients success is our success. We build long-term partnerships based on trust, transparency, and exceptional results.",
    color: "green",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in every project, ensuring robust, scalable, and maintainable solutions.",
    color: "blue",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description:
      "We love what we do and it shows in our work. Our passion for technology drives us to exceed expectations.",
    color: "green",
  },
  {
    icon: Zap,
    title: "Agile Approach",
    description:
      "We embrace agile methodologies to deliver projects efficiently while maintaining flexibility and adaptability.",
    color: "blue",
  },
]

const goals = [
  {
    title: "Global Expansion",
    description: "Expand our services to serve clients across 50+ countries by 2025",
    progress: 75,
    color: "green",
  },
  {
    title: "Team Growth",
    description: "Build a diverse team of 100+ talented professionals",
    progress: 60,
    color: "blue",
  },
  {
    title: "Innovation Hub",
    description: "Establish our own R&D center for emerging technologies",
    progress: 40,
    color: "green",
  },
  {
    title: "Sustainability",
    description: "Achieve carbon-neutral operations and promote green technology",
    progress: 85,
    color: "blue",
  },
]

export default function Values() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, itemIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="values" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Values Section */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="text-red-600">Values</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our company culture
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 px-4 sm:px-0">
          {values.map((value, index) => {
            const Icon = value.icon
            const isVisible = visibleItems.includes(index)
            const colorClass = value.color === "red" ? "bg-red-600" : "bg-red-600"
            const hoverBgClass =
              value.color === "red"
                ? "hover:from-red-50 hover:to-red-100"
                : "hover:from-red-50 hover:to-red-100"

            return (
              <Card
                key={index}
                data-index={index}
                className={`group text-center hover:shadow-xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br ${hoverBgClass} transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`mx-auto w-12 h-12 sm:w-16 sm:h-16 ${colorClass} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Goals Section */}
        
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="text-red-600">Goals</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ambitious targets that drive our continuous growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
          {goals.map((goal, index) => {
            const goalIndex = index + values.length
            const isVisible = visibleItems.includes(goalIndex)
            const progressColorClass =
              goal.color === "green" ? "from-green-600 to-green-500" : "from-blue-600 to-blue-500"
            const hoverColorClass = goal.color === "green" ? "group-hover:text-green-700" : "group-hover:text-blue-700"
            const textColorClass = goal.color === "green" ? "text-green-600" : "text-blue-600"

            return (
              <Card
                key={index}
                data-index={goalIndex}
                className={`group hover:shadow-xl transition-all duration-500 border-0 bg-white transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold text-gray-900 ${hoverColorClass} transition-colors`}>
                      {goal.title}
                    </h3>
                    <span className={`text-2xl font-bold ${textColorClass}`}>{goal.progress}%</span>
                  </div>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${progressColorClass} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: isVisible ? `${goal.progress}%` : "0%" }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
