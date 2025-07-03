"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg p-6"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className="flex text-black">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "text-black" : "text-gray-300"}>
              ★
            </span>
          ))}
        </div>
      </div>

      <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
        &ldquo;{content}&rdquo;
      </blockquote>

      <div className="border-t border-gray-200 pt-4">
        <div className="font-medium text-black">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </motion.div>
  );
} 