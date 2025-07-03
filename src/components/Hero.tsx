"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Imagen de fondo opcional con overlay negro claro */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Claudia García - Personal Shopper"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div> */}

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-black tracking-tight mb-6">
            Claudia García
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 font-medium mb-8">
            Personal Shopper • Asesora de Imagen • Maquilladora
          </p>
          <p className="text-base sm:text-lg text-gray-800 mb-12 leading-relaxed max-w-2xl mx-auto">
            Transforma tu estilo y descubre tu mejor versión con asesoría personalizada en moda, imagen y maquillaje profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/servicios"
              className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition font-medium"
            >
              Ver Servicios
            </Link>
            <Link
              href="/contacto"
              className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition font-medium"
            >
              Contactar
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 