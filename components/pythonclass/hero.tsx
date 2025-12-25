"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import EnrollModal from "@/components/EnrollModal";
import { useState } from "react";

interface Instructor {
  name: string;
  imageUrl: string;
}

interface Feature {
  title: string;
  text: string;
}

interface PythonSpecializationProps {
  backgroundImage: string;
  pythonLogo: string;
  title: string;
  description: string;
  instructor: Instructor;
  enrollButtonText: string;
  enrolledCount: string;
  features: Feature[];
}

export default function PythonSpecializationCombined({
  backgroundImage,
  // pythonLogo,
  title,
  description,
  instructor,
  enrollButtonText,
  enrolledCount,
  features,
}: PythonSpecializationProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleEnroll = (data: {
    name: string;
    email: string;
    phone: string;
  }) => {
    console.log("Enrollment Data:", data);
    // 👉 You can call your backend API here
    // fetch("/api/enroll", { method: "POST", body: JSON.stringify(data) })
  };
  return (
    <section className="relative h-screen py-16 px-10 mt-10 overflow-hidden bg-[#E2ECF7]">
      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Grid */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#306998"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Wavy Pattern */}
        <svg
          className="absolute -top-20 right-0 w-[600px] opacity-30"
          viewBox="0 0 600 600"
        >
          <path
            d="M0 300 C150 200 300 400 450 300 C600 200 750 400 900 300"
            stroke="#FFD43B"
            strokeWidth="50"
            fill="none"
          />
        </svg>

        {/* Dots */}
        <svg className="absolute bottom-0 left-10 w-[300px] opacity-40">
          <circle cx="20" cy="20" r="5" fill="#306998" />
          <circle cx="60" cy="40" r="5" fill="#FFD43B" />
          <circle cx="100" cy="70" r="5" fill="#4B8BBE" />
          <circle cx="140" cy="30" r="5" fill="#1E3A8A" />
        </svg>

        {/* Dynamic Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="max-w-2xl pt-24">
          {/* Dynamic Logo */}
          <div className="flex items-center gap-3 mb-4">
            {/* <Image
              // src={pythonLogo}
              alt="Course Logo"
              width={80}
              height={80}
              className="object-contain"
            /> */}
          </div>

          {/* Dynamic Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2E59] leading-tight mb-4">
            {title}
          </h1>

          {/* Dynamic Description */}
          <p className="text-lg text-[#0B2E59]/80 leading-relaxed mb-6">
            {description}
          </p>

          {/* Dynamic Instructor */}
          <div className="flex items-center gap-3 mb-6">
            {/* <Image
              src={instructor.imageUrl}
              width={48}
              height={48}
              alt={instructor.name}
              className="rounded-full"
            /> */}
            <p className="text-[#0B2E59] font-medium">
              Instructor: {instructor.name}
            </p>
          </div>

          {/* Dynamic Button */}
          <div className="mb-6">
            <Button
              onClick={() => setOpenModal(true)}
              className="bg-[#306998] text-white px-6 py-3"
            >
              {enrollButtonText}
            </Button>

            <EnrollModal
              open={openModal}
              setOpen={setOpenModal}
              onSubmit={handleEnroll}
            />
          </div>

          {/* Dynamic Enrolled Count */}
          <p className="text-[#0B2E59] mb-6">
            {enrolledCount} 
          </p>
        </div>

        {/* Dynamic Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, text }: Feature) {
  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-[#0B2E59] text-lg">{title}</h3>
      <p className="text-[#0B2E59]/80 text-sm mt-1">{text}</p>
    </div>
  );
}
