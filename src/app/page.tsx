import { hero } from "@/data/hero";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { contact } from "@/data/contact";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function HomePage() {
  return (
    <main>
      {/* Hero principal */}
      <Hero {...hero} />

      {/* Presentación breve */}
      <section className="text-center py-8 px-4 sm:px-2">
        <h2 className="text-2xl sm:text-3xl font-semibold">Soy Claudia García</h2>
        <p className="mt-2 text-lg sm:text-xl max-w-xl mx-auto">
          Personal shopper y maquilladora con más de 10 años ayudando a mujeres a encontrar su estilo con confianza y autenticidad.
        </p>
      </section>

      {/* Servicios destacados */}
      <section className="py-12 px-2">
        <h2 className="text-center text-3xl font-bold mb-6">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </section>

      {/* Galería Instagram (placeholder) */}
      <section className="py-8 px-4 text-center">
        <h3 className="text-xl font-bold mb-2">Sígueme en Instagram</h3>
        <p className="text-pink-600 font-medium">@claudiag...</p>
        {/* Aquí irá el embed real en Fase 4 */}
      </section>

      {/* Testimonios destacados */}
      <section className="py-12 text-center px-2 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} name={t.name} testimonial={t.message} />
          ))}
        </div>
      </section>

      {/* Llamado a la acción final */}
      <section className="bg-pink-100 py-10 text-center px-2">
        <h3 className="text-xl font-bold">¿Lista para transformar tu estilo?</h3>
        <a
          href={contact.whatsapp}
          className="mt-4 inline-block bg-pink-600 text-white px-6 py-2 rounded-full"
        >
          Escríbeme por WhatsApp
        </a>
      </section>
    </main>
  );
}
