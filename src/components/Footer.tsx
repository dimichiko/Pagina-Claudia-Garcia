import Link from "next/link";
import { Instagram, Mail, Phone, Heart } from "lucide-react";
import { contact } from "@/data/contact";

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-10 px-6 border-t border-gray-200">
      <div className="container mx-auto">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Columna 1: Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-pink-600 mb-3">Claudia García</h3>
            <p className="text-gray-600 text-sm mb-4">
              Empodera tu estilo con propósito
            </p>
            <p className="text-gray-500 text-xs">
              Personal shopper y maquilladora profesional
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-800 mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-pink-600 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-800 mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href={contact.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-pink-600 text-sm transition-colors"
              >
                <Phone size={16} />
                <span>+56 9 9300 0940</span>
              </a>
              <a 
                href="mailto:claugarc@gmail.com"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-pink-600 text-sm transition-colors"
              >
                <Mail size={16} />
                <span>claugarc@gmail.com</span>
              </a>
              <a 
                href={contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-pink-600 text-sm transition-colors"
              >
                <Instagram size={16} />
                <span>@claudiagarcia.cl</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Claudia García. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-1">
              Hecho con <Heart size={12} className="text-pink-500" /> para empoderar tu estilo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 