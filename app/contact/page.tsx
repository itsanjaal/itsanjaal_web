import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactComponent from "@/components/contact-section"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with IT Sanjaal Pvt. Ltd. for software development, training, and digital solutions in Nepal.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ContactComponent />
      </main>
    </div>
  )
}
