import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
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
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                price={service.priceText}
                features={[
                  "Sesión personalizada",
                  "Análisis de estilo",
                  "Recomendaciones específicas",
                  "Seguimiento post-sesión"
                ]}
                buttonText="Ver Detalles"
                buttonHref="/servicios"
                isPopular={index === 1}
              />
            ))}
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
            Agenda tu consulta gratuita y descubre cómo podemos trabajar juntas para crear tu mejor versión
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
