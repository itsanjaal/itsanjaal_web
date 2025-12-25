"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface QA {
  question: string;
  answer: string;
}

interface InstructorProfileProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  qas: QA[];
}

export default function InstructorProfile({
  name,
  title,
  bio,
  imageUrl,
  qas,
}: InstructorProfileProps) {
  return (
    <div className="px-20 w-full mx-auto  shadow-md rounded-xl p-6">
      {/* Profile Header */}
      <h2 className="text-3xl font-bold text-center mb-10">
            Meet Your Instructor.
          </h2>
      <div className="flex items-center space-x-4 mb-6">
        <Image
          src="/placeholder-user.jpg"
          alt={name}
          width={100}
          height={100}
          className="rounded-full object-cover border-2 border-red-500"
        />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-red-600 font-medium">{title}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-gray-700 mb-6">{bio}</p>

      {/* Accordion for Questions & Answers */}
      <Accordion type="single" collapsible className="space-y-2">
        {qas.map((qa, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="font-medium text-gray-800">
              {qa.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {qa.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
