"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black tracking-tight">
            Claudia García
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/portafolio"
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              Sobre Claudia
            </Link>
            <Link
              href="/servicios"
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link
              href="/servicios#asesorias"
              className="text-gray-800 hover:text-black transition-colors font-medium"
            >
              Asesorías
            </Link>
            <Link
              href="/contacto"
              className="border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="text-gray-800 hover:text-black transition-colors font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/portafolio"
                className="text-gray-800 hover:text-black transition-colors font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Claudia
              </Link>
              <Link
                href="/servicios"
                className="text-gray-800 hover:text-black transition-colors font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/servicios#asesorias"
                className="text-gray-800 hover:text-black transition-colors font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Asesorías
              </Link>
              <Link
                href="/contacto"
                className="border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors font-medium mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 