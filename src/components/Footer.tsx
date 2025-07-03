import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 w-full">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-black tracking-tight mb-4">
              Claudia García
            </h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Personal Shopper, Asesora de Imagen y Maquilladora profesional. 
              Transformando estilos y creando confianza.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-medium text-black mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-gray-800 hover:text-black transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="text-gray-800 hover:text-black transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-800 hover:text-black transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/testimonios" className="text-gray-800 hover:text-black transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-800 hover:text-black transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-medium text-black mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={16} className="text-gray-600" />
                <span className="text-gray-800">+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail size={16} className="text-gray-600" />
                <span className="text-gray-800">claudia@ejemplo.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-gray-800">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Claudia García. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 