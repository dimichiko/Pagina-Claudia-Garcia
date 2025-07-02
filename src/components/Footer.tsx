import { contact } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-8 mt-12 border-t border-gray-200">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 text-center">
        <span className="text-base font-semibold text-pink-600 mb-2">Claudia García</span>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mb-2">
          <a href={contact.instagram} target="_blank" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 underline"><span>📸</span>Instagram</a>
          <a href={contact.whatsapp} target="_blank" className="flex items-center gap-1 text-gray-700 hover:text-pink-600 underline"><span>💬</span>WhatsApp</a>
        </div>
        <div className="w-full text-center mt-2">
          <a href={contact.instagram} target="_blank" className="text-pink-600 underline font-medium">
            Sígueme en Instagram
          </a>
        </div>
        <span className="text-xs text-gray-400 mt-2">© {new Date().getFullYear()} Claudia García. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
} 