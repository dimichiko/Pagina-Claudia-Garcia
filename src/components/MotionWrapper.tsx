"use client";

import { motion } from "framer-motion";

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function MotionWrapper({ children, className = "", delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
} 