"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function Hero({ title, subtitle, imageUrl, buttonText, buttonHref }: HeroProps) {
  const hasImage = !!imageUrl;
  
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {hasImage ? (
        <Image
          src={imageUrl}
          alt="Claudia García - Personal Shopper"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-200" />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-8 md:py-20 max-w-6xl mx-auto">
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-base md:text-2xl text-white/90 mb-6 drop-shadow-md max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          {buttonText && buttonHref && (
            <motion.a
              href={buttonHref}
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-700 transition-colors transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText}
            </motion.a>
          )}
        </motion.div>
        
        <motion.div 
          className="flex-1 flex items-center justify-center w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {!hasImage && (
            <div className="w-full max-w-xs h-48 bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg shadow-lg border border-white/30">
              <span className="text-5xl text-white/80 mb-2">📷</span>
              <span className="text-white/70 text-sm">Imagen próximamente</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 