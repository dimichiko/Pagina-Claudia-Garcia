"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Claudia García - Personal Shopper"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Claudia García
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium mb-8">
            Personal Shopper • Asesora de Imagen • Maquilladora
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto">
            Transforma tu estilo y descubre tu mejor versión con asesoría personalizada 
            en moda, imagen y maquillaje profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/servicios"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 font-medium"
            >
              Ver Servicios
            </Link>
            <Link
              href="/contacto"
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-medium"
            >
              Contactar
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 