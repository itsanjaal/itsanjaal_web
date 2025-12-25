"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  const faqItems = [
    {
  question: "What IT courses do you offer?",
  answer:
    "We offer Python programming, UI/UX design, MS Excel, web development, and other professional IT training programs.",
},
{
  question: "How long are your courses?",
  answer:
    "Our courses typically range from 4 to 12 weeks depending on the course type and depth.",
},
{
  question: "Do you provide certificates after course completion?",
  answer:
    "Yes, all students receive an official completion certificate from IT Sanjaal.",
},
{
  question: "Do you offer real-world practical projects?",
  answer:
    "Yes, every course includes hands-on projects to help students apply what they learn in real scenarios.",
},
{
  question: "Do you provide support after course completion?",
  answer:
    "We generally keep the door open for any follow-up questions or light mentorship as you start applying what you've learned.",
},
{
  question: "How can I enroll in a course?",
  answer:
    "You can contact us through our website, phone, or visit our office to register directly.",
},

  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-4 p-5 ">
        <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
      <Accordion type="single" collapsible>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
