import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServiciosPage() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">Servicios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <section className="text-center bg-pink-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">¿Tienes dudas sobre algún servicio?</h2>
        <p className="text-gray-600 mb-4">
          Escríbeme por WhatsApp y te ayudo a elegir el servicio perfecto para ti.
        </p>
        <a
          href="https://wa.me/56993000940"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
        >
          Consultar por WhatsApp
        </a>
      </section>
    </main>
  );
} 