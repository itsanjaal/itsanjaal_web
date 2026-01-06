"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import EnrollModal from "@/components/EnrollModal";
import { useState } from "react";
import { Star } from "lucide-react";
import "./coursebg.css";

interface Instructor {
  name: string;
  imageUrl: string;
}

interface Feature {
  title: string;
  text: string;
}

interface PythonSpecializationProps {
  image: string;
  backgroundImage: string;
  title: string;
  description: string;
  instructor: Instructor;
  enrollButtonText: string;
  enrolledCount: string;
  features: Feature[];
}

export default function PythonSpecializationCombined({
  backgroundImage,
  image,
  title,
  description,
  instructor,
  enrollButtonText,
  enrolledCount,
  features,
}: PythonSpecializationProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleEnroll = (data: { name: string; email: string; phone: string }) => {
    console.log("Enrollment Data:", data);
  };

  return (
    <section className="relative py-16 px-5 sm:px-10 lg:px-16 bg-[#E2ECF7] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#306998" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <svg className="absolute -top-20 right-0 w-[400px] sm:w-[600px] opacity-30" viewBox="0 0 600 600">
          <path d="M0 300 C150 200 300 400 450 300 C600 200 750 400 900 300" stroke="#FFD43B" strokeWidth="50" fill="none" />
        </svg>

        <svg className="absolute bottom-0 left-10 w-[200px] sm:w-[300px] opacity-40">
          <circle cx="20" cy="20" r="5" fill="#306998" />
          <circle cx="60" cy="40" r="5" fill="#FFD43B" />
          <circle cx="100" cy="70" r="5" fill="#4B8BBE" />
          <circle cx="140" cy="30" r="5" fill="#1E3A8A" />
        </svg>

        <div className="absolute inset-0 bg opacity-30">
          <Image src={backgroundImage} alt="Background" fill className="object-cover " />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="pt-16 sm:pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2E59] leading-tight mb-4">{title}</h1>
          <p className="text-base sm:text-lg text-[#0B2E59]/80 leading-relaxed mb-6">{description}</p>

          <div className="flex items-center gap-3 mb-6">
            <p className="text-[#0B2E59] font-medium">Instructor: {instructor.name}</p>
          </div>

          <div className="rating mb-6">
            <ul className="list-disc pl-5">
              {features.map((feature, index) => (
                <li key={index} className="mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[#0B2E59] text-base sm:text-lg">{feature.title}</h3>
                    {index === 0 && <Star fill="#C4710D" stroke="0" className="w-4 h-4" />}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Button onClick={() => setOpenModal(true)} className="bg-red-600 text-white px-5 py-2 sm:px-6 sm:py-3 mb-4 hover:bg-white hover:text-red-600 hover:border-red-600 border-1 ">
            {enrollButtonText}
          </Button>

          <EnrollModal open={openModal} setOpen={setOpenModal} onSubmit={handleEnroll} />

          <p className="text-[#0B2E59] text-sm sm:text-base">{enrolledCount}</p>
        </div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end">
          <div className="course-bg w-full max-w-md sm:max-w-lg lg:max-w-full p-5 sm:p-10 rounded-xl  overflow-hidden">
            <img src={image} alt="Course" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
