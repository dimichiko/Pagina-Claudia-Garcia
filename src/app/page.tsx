"use client";

import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const serviciosDestacados = [
    {
      id: "diagnostico",
      titulo: "Diagnóstico Imagen Personal",
      descripcion: "Análisis completo de tu imagen actual, identificación de fortalezas y áreas de mejora.",
      valor: "$70.000"
    },
    {
      id: "colorimetria", 
      titulo: "Colorimetría",
      descripcion: "Descubre tu paleta de colores personal para ropa, maquillaje y accesorios.",
      valor: "$70.000"
    },
    {
      id: "detox-closet",
      titulo: "Detox de Clóset",
      descripcion: "Revisión completa de tu guardarropa para optimizar tu estilo personal.",
      valor: "$70.000"
    }
  ];

  const enviarWhatsApp = (servicio: string) => {
    const mensaje = `Hola Claudia, me interesa el servicio de ${servicio}. ¿Podrías darme más información?`;
    const url = `https://wa.me/56993000940?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="bg-white">
      <Hero />
      
      {/* Servicios Destacados */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black tracking-tight mb-4">
              Servicios Destacados
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Descubre cómo puedo ayudarte a transformar tu imagen y estilo personal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosDestacados.map((servicio) => (
              <div key={servicio.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-black mb-4">{servicio.titulo}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{servicio.descripcion}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold text-black">{servicio.valor}</span>
                  <span className="text-sm text-gray-500">1 hora</span>
                </div>
                
                <button
                  onClick={() => enviarWhatsApp(servicio.titulo)}
                  className="w-full border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors font-medium"
                >
                  Solicitar este servicio
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/servicios"
              className="border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors font-medium"
            >
              Ver Todos los Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black tracking-tight mb-4">
              Lo que dicen mis clientes
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Experiencias reales de transformación y empoderamiento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role="Cliente"
                content={testimonial.message}
                rating={5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-black tracking-tight mb-4">
            ¿Lista para transformar tu estilo?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Agenda tu consulta y descubre cómo podemos trabajar juntas para crear tu mejor versión
          </p>
          <a
            href="/contacto"
            className="border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors font-medium"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </main>
  );
}
