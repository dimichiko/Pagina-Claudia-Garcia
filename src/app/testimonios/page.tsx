import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimoniosPage() {
  return (
    <main className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black tracking-tight mb-6">
            Testimonios
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubre las experiencias de mis clientes y cómo han transformado su estilo 
            y confianza a través de mis servicios.
          </p>
        </div>

        {/* Testimonios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role="Cliente"
              content={testimonial.message}
              rating={5}
            />
          ))}
          
          {/* Testimonios adicionales */}
          <TestimonialCard
            name="María L."
            role="Ejecutiva"
            content="Claudia me ayudó a crear un guardarropa profesional que me hace sentir segura en todas las reuniones importantes."
            rating={5}
          />
          <TestimonialCard
            name="Ana C."
            role="Emprendedora"
            content="Su asesoría de imagen fue un antes y después en mi vida. Ahora me siento más confiada y profesional."
            rating={5}
          />
          <TestimonialCard
            name="Sofía R."
            role="Estudiante"
            content="El maquillaje para mi graduación fue perfecto. Me sentí hermosa y natural, exactamente como quería."
            rating={5}
          />
        </div>

        {/* Estadísticas */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-8 text-center">
            Números que Hablan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">200+</div>
              <p className="text-gray-700">Clientes Satisfechas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">5</div>
              <p className="text-gray-700">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">50+</div>
              <p className="text-gray-700">Eventos Realizados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">98%</div>
              <p className="text-gray-700">Satisfacción</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-4">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            Únete a las cientos de mujeres que han transformado su estilo y confianza 
            con mi asesoría personalizada.
          </p>
          <a
            href="/contacto"
            className="border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors font-medium"
          >
            Comenzar Ahora
          </a>
        </div>
      </div>
    </main>
  );
} 