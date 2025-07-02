import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4 gap-y-2 text-center">
        <span className="font-bold text-xl tracking-tight text-pink-600">Claudia García</span>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-pink-500 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 