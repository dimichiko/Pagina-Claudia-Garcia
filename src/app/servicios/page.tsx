import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServiciosPage() {
  return (
    <main className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black tracking-tight mb-6">
            Mis Servicios
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ofrezco servicios personalizados para transformar tu imagen y estilo. 
            Cada sesión está diseñada para empoderarte y ayudarte a descubrir tu mejor versión.
          </p>
        </div>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
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
              buttonText="Comprar Ahora"
              buttonHref={service.pagofacilLink}
              isPopular={index === 1}
            />
          ))}
        </div>

        {/* Información adicional */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-6 text-center">
            ¿Cómo funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-3">1</div>
              <h3 className="text-lg font-medium text-black mb-2">Consulta Inicial</h3>
              <p className="text-gray-700">
                Conversamos sobre tus objetivos, estilo actual y lo que quieres lograr
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-3">2</div>
              <h3 className="text-lg font-medium text-black mb-2">Sesión Personalizada</h3>
              <p className="text-gray-700">
                Trabajamos juntas para transformar tu imagen y crear tu nuevo estilo
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-3">3</div>
              <h3 className="text-lg font-medium text-black mb-2">Seguimiento</h3>
              <p className="text-gray-700">
                Te acompaño en el proceso de implementar los cambios y consolidar tu nuevo look
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 