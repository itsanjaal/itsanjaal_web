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
        backgroundImage="/course/python-bg.jpg"
        pythonLogo="/python-logo.png"
        title="Bioinformatics with Python"
        description="learn Python programming and biodata analysis from scratch to advanced level."
        instructor={{
          name: "Dibash Gautam",
          imageUrl: "/team/instructors/charles.png",
        }}
        enrollButtonText="Enroll for Rs. 1499/-"
        enrolledCount=""
        features={[
          { title: "5 course series", text: "In-depth knowledge of a subject" },
          { title: "4.8 ★", text: "217,459 reviews" },
          { title: "Beginner level", text: "No prior experience required" },
          { title: "Flexible schedule", text: "Learn at your own pace" },
        ]}
      />
      {/* About Course */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Course Overview</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <Calendar className="w-10 h-10 text-blue-600" />
            <h3 className="text-xl font-semibold mt-3">Duration</h3>
            <p className="mt-2 text-gray-700">6 Weeks • 1.5 hours per class</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <BookOpen className="w-10 h-10 text-blue-600" />
            <h3 className="text-xl font-semibold mt-3">Mode</h3>
            <p className="mt-2 text-gray-700">Online / Offline</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <Users className="w-10 h-10 text-blue-600" />
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
              "This program provides a complete foundation in Python programming and data analysis.",
              "Learners begin with the basics of Python — variables, loops, and functions — building strong logical thinking and coding skills.",
              "The course advances into file handling, error management, and object-oriented programming (OOP) to help students write clean and scalable applications.",
              "Students gain hands-on experience with NumPy for numerical computing and Pandas for data cleaning and manipulation.",
              "Data visualization is covered using Matplotlib and Seaborn to produce insightful and professional charts.",
              "Real-world mini data analysis projects help learners apply their skills to practical problems and prepare for careers in data science and analytics.",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Instructor */}
      <div className="container mx-auto px-4 py-16">
        <InstructorProfile
          name="Dibash Gautam"
          title="Senior Data Science Instructor"
          bio="Passionate about turning data into insights and helping students achieve their goals in programming and analytics."
          imageUrl="/placelolder-user.jpg"
          qas={instructorQAs}
        />
      </div>
      ;{/* CTA */}
      {/* <section className="w-full bg-blue-700 text-white py-14 text-center">
        <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
        <p className="mt-3 opacity-90">
          Join our Python Programming with Data Analysis class today.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-xl">
          Enroll Now
        </Button>
      </section> */}
      <FAQAccordion />
    </main>
  );
}
