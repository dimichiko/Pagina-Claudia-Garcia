import { contact } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <span className="text-sm text-gray-500">© {new Date().getFullYear()} Claudia García. Todos los derechos reservados.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">WhatsApp</a>
        </div>
        <div className="w-full text-center mt-4">
          <a href={contact.instagram} target="_blank" className="text-pink-600 underline">
            Sígueme en Instagram
          </a>
        </div>
      </div>
    </footer>
  );
} 