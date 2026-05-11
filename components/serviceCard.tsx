"use client";
import { motion } from "framer-motion";
import { 
  Code2, Smartphone, GraduationCap, Palette, 
  Settings, Dna, PenTool, Terminal, Briefcase 
} from "lucide-react";

// This map lives on the client side
const ICON_MAP = {
  web: Code2,
  mobile: Smartphone,
  course: GraduationCap,
  design: Palette,
  devops: Settings,
  bio: Dna,
  writing: PenTool,
  ai: Terminal,
  career: Briefcase,
};

export const ServiceCard = ({ service, index }) => {
  const IconComponent = ICON_MAP[service.iconKey as keyof typeof ICON_MAP];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-red-500 transition-all group"
    >
      <div className="mb-6 inline-block p-4 rounded-xl bg-red-50 group-hover:bg-red-600 transition-colors duration-300">
        {IconComponent && (
          <motion.div
            animate={{ 
              y: [0, -4, 0],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <IconComponent className="w-10 h-10 text-red-600 group-hover:text-white" />
          </motion.div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Customized solutions in {service.title} to help your business scale effectively in the modern digital landscape.
      </p>
    </motion.div>
  );
};