"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Calendar, Users } from "lucide-react";
import PythonSpecializationCombined from "@/components/pythonclass/hero";
import FAQAccordion from "@/components/pythonclass/Accordin";
import InstructorProfile from "@/components/pythonclass/instructor";

export default function PythonProgrammingPage() {
  const instructorQAs = [
    {
      question: "What is your teaching philosophy?",
      answer:
        "I believe in interactive learning with hands-on practice to ensure concepts stick.",
    },
    {
      question: "How many years of experience do you have?",
      answer:
        "I have 8 years of experience teaching programming and data analysis.",
    },
    {
      question: "What makes you different from other instructors?",
      answer:
        "I focus on practical problem-solving and personal mentorship for each student.",
    },
    {
      question: "What is your favorite topic to teach?",
      answer:
        "Data visualization and making sense of data through graphs and patterns.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* <Header /> */}
      {/* Hero Section */}
      <PythonSpecializationCombined
        image="/ui_ux.png"
        backgroundImage="/course/python-bg.jpg"
        pythonLogo="/python-logo.png"
        title="UI/UX beginner to Advanced"
        description="Learn to program, analyze data, and visualize insights using Python."
        instructor={{
          name: "Suman Sapkota",
          imageUrl: "/team/instructors/charles.png",
        }}
        enrollButtonText="Enroll for Rs. 1499/-"
        enrolledCount=""
        features={[
          { title: "4.8", text: "217,459 reviews" },
          { title: "5 course series", text: "In-depth knowledge of a subject" },
          { title: "Beginner level", text: "No prior experience required" },
          { title: "Flexible schedule", text: "Learn at your own pace" },
        ]}
      />
      {/* About Course */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Course Overview</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <Calendar className="w-10 h-10 text-red-600" />
            <h3 className="text-xl font-semibold mt-3">Duration</h3>
            <p className="mt-2 text-gray-700">4 Weeks • 1 hour per class</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <BookOpen className="w-10 h-10 text-red-600" />
            <h3 className="text-xl font-semibold mt-3">Mode</h3>
            <p className="mt-2 text-gray-700">Online / Offline</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <Users className="w-10 h-10 text-red-600" />
            <h3 className="text-xl font-semibold mt-3">Level</h3>
            <p className="mt-2 text-gray-700">Beginner to Intermediate</p>
          </div>
        </div>
      </section>
      {/* What You Will Learn */}
      <section className="bg-white py-16 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            What You Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Foundations of UI/UX design principles",
              "User research, personas & user journey mapping",
              "Wireframing and low-fidelity prototyping",
              "High-fidelity UI design using modern tools",
              "Design systems, typography & color theory",
              "Usability testing and real-world UI/UX projects",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-red-600 w-6 h-6 mt-1" />
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Instructor */}
      <div className="container mx-auto px-4 py-16">
        <InstructorProfile
          name="Suman Sapkota"
          title="Senior UI/UX Instructor"
          bio="Passionate about visuals into designs and helping students achieve their goals in Designing and prototyping."
          imageUrl="/suman.jpg"
          qas={instructorQAs}
        />
      </div>
      ;{/* CTA */}
      {/* <section className="w-full bg-red-700 text-white py-14 text-center">
        <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
        <p className="mt-3 opacity-90">
          Join our Python Programming with Data Analysis class today.
        </p>
        <Button className="mt-6 bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-xl">
          Enroll Now
        </Button>
      </section> */}
      <FAQAccordion />
    </main>
  );
}
