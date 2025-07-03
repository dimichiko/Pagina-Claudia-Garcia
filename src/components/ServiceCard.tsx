"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  features,
  buttonText,
  buttonHref,
  isPopular = false,
}: ServiceCardProps) {
  return (
    <motion.div
      className={`relative bg-white border border-gray-200 rounded-lg p-6 ${
        isPopular ? "border-black" : ""
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
            Más Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-black tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-gray-800 leading-relaxed mb-4">
          {description}
        </p>
        <div className="text-3xl font-bold text-black mb-2">
          {price}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-800">
            <span className="text-black mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={buttonHref}
        className="w-full text-center border border-black text-black py-3 px-6 rounded-full hover:bg-black hover:text-white transition font-medium"
      >
        {buttonText}
      </Link>
    </motion.div>
  );
} 