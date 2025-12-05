"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Get In <span className="text-red-700">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-black-700 max-w-3xl mx-auto">
            Ready to start your next project? Contact us today and let's discuss
            how we can help transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Contact Information
              </h3>
              <p className="text-black-700 mb-8">
                We're here to help you bring your digital vision to life. Reach
                out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a
                        href="tel:9863459299"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                      >
                        9863459299
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                      <a
                        href="https://wa.me/9819477357"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-700 transition-colors"
                      >
                        +977-9819477357
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black-900">Email</h4>
                      <a
                        href="mailto:info@itsanjaal.com"
                        className="text-black-600 hover:text-red-600 transition-colors"
                      >
                        info@itsanjaal.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black-700">Location</h4>
                      <p className="text-black-700">
                        <a
                          href="https://www.google.com/maps/place/M8PH%2B2J4,+Kathmandu+44600/@27.6849814,85.3281286,19z/data=!4m9!1m2!2m1!1sit+Sanjaal!3m5!1s0x39eb19b8d4cbfd63:0xf9f973d44ed6236a!8m2!3d27.6849814!4d85.329109!16s%2Fg%2F11j6tcqg8h?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-red-700 transition-colors"
                        >
                          Buddhanagar, Kathmandu
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-red-700 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/itsanjaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/itsanjaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your project or how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-700 text-white py-3 text-lg font-semibold group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
