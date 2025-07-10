"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/Claudia Garcia Por Casa Emma_-6.jpg",
    "/Claudia Garcia Por Casa Emma_-7.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Claudia García - Imagen ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
            Claudia García
          </h1>
          <p className="text-lg sm:text-xl text-white font-medium mb-8 drop-shadow-lg">
            Asesora de Imagen · Periodista · Mujer Real
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/servicios"
              className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition font-medium"
            >
              Ver Servicios
            </Link>
            <Link
              href="/contacto"
              className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition font-medium"
            >
              Contactar
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 