export interface ServiceDetail {
  id: string;
  num: string;
  name: string;
  desc: string;
  longDesc: string;
  href: string;
  icon: string;
  features: string[];
  benefits: string[];
  process?: string[];
  color: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "web-development",
    num: "01",
    name: "Web Development",
    desc: "Scalable, high-performance websites and web apps built with modern frameworks.",
    longDesc: "We build fast, secure, and scalable web applications tailored to your business goals using the latest technologies.",
    href: "/services/web-development",
    color: "#b91c1c",
    icon: `...paste the web development svg here...`,
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "Performance Optimization",
      "SEO-Friendly Architecture"
    ],
    benefits: [
      "Lightning-fast load times",
      "Mobile-first responsive design",
      "Scalable & maintainable code",
      "Excellent user experience"
    ]
  },
  // Add the other 8 services similarly...
];

export const getServiceBySlug = (slug: string) => 
  SERVICES.find(s => s.id === slug);