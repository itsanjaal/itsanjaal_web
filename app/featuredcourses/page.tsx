'use client';

import React from 'react';
import Link from 'next/link';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Python Programming",
      description: "Master the fundamentals of Python, one of the most popular programming languages. Learn variables, loops, functions, OOP, and build real-world projects.",
      duration: "4 weeks",
      gradient: "from-red-500 to-red-600",
      icon: (
        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      buttonColor: "bg-red-600 hover:bg-red-700",
      path: "/pythonn",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Learn user-centered design principles, wireframing, prototyping with Figma, and create beautiful, intuitive interfaces for web and mobile apps.",
      duration: "4 weeks",
      gradient: "from-purple-500 to-pink-600",
      icon: (
        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2H7" />
        </svg>
      ),
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      path: "/ui",
    },
    {
      id: 3,
      title: "MS Excel Course",
      description: "From basics to advanced: formulas, pivot tables, charts, data analysis, macros, and automation to boost your productivity and career.",
      duration: "4 weeks",
      gradient: "from-green-500 to-teal-600",
      icon: (
        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M4 18h16M6 15h12M5 3v16h14V3H5z" />
        </svg>
      ),
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      path: "/msexcel",
    },
  ];

  return (
    <section className="featured-courses py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Featured Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className={`bg-gradient-to-br ${course.gradient} h-48 flex items-center justify-center`}
              >
                {course.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Duration: {course.duration}
                  </span>
                  <Link
                    href={course.path}
                    className={`inline-block text-white px-5 py-2 rounded-md ${course.buttonColor} transition`}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;