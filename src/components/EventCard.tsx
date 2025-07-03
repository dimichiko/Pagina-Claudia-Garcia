"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  price: string;
  buttonText: string;
  buttonHref: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  price,
  buttonText,
  buttonHref,
}: EventCardProps) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg p-6"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-black tracking-tight mb-2">
          {title}
        </h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p>{date}</p>
          <p>{time}</p>
          <p>{location}</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-black">{price}</span>
      </div>

      <Link
        href={buttonHref}
        className="w-full text-center border border-black text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition-colors font-medium"
      >
        {buttonText}
      </Link>
    </motion.div>
  );
} 