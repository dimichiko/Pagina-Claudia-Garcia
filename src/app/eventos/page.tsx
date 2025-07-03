import EventCard from "@/components/EventCard";

export default function EventosPage() {
  return (
    <main className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black tracking-tight mb-6">
            Eventos
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Participa en mis workshops, eventos especiales y colaboraciones con marcas. 
            Una oportunidad única para aprender y conectarte con otras personas apasionadas por el estilo.
          </p>
        </div>

        {/* Próximos eventos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-8 text-center">
            Próximos Eventos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Workshop: Estilo Personal"
              date="15 de Diciembre, 2024"
              time="10:00 - 14:00"
              location="Buenos Aires, Argentina"
              description="Aprende a identificar tu estilo personal y crear outfits que te hagan sentir segura y auténtica."
              price="$25.000"
              buttonText="Inscribirse"
              buttonHref="/contacto"
            />
            <EventCard
              title="Evento con Marca X"
              date="20 de Diciembre, 2024"
              time="18:00 - 21:00"
              location="Showroom Centro"
              description="Maquillajes en vivo y demostraciones de productos con la nueva colección de Marca X."
              price="Gratuito"
              buttonText="Reservar Lugar"
              buttonHref="/contacto"
            />
            <EventCard
              title="Masterclass Online"
              date="28 de Diciembre, 2024"
              time="19:00 - 21:00"
              location="Zoom"
              description="Sesión virtual sobre colorimetría y cómo elegir los colores que más te favorecen."
              price="$15.000"
              buttonText="Comprar Entrada"
              buttonHref="/contacto"
            />
          </div>
        </div>

        {/* Eventos pasados */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-8 text-center">
            Eventos Pasados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-2">Workshop: Closet Capsule</h3>
              <p className="text-sm text-gray-600 mb-3">10 de Noviembre, 2024</p>
              <p className="text-gray-700 text-sm">
                Aprendimos a crear un closet versátil con pocas piezas que se combinan perfectamente.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-2">Evento: Fashion Week</h3>
              <p className="text-sm text-gray-600 mb-3">25 de Octubre, 2024</p>
              <p className="text-gray-700 text-sm">
                Participación en el Fashion Week local con maquillajes para las modelos.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-2">Masterclass: Maquillaje</h3>
              <p className="text-sm text-gray-600 mb-3">15 de Octubre, 2024</p>
              <p className="text-gray-700 text-sm">
                Técnicas profesionales de maquillaje para diferentes ocasiones y tipos de piel.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-4">
            ¿Te interesa organizar un evento?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            Trabajo con marcas, empresas y organizaciones para crear eventos únicos 
            que conecten con su audiencia y objetivos.
          </p>
          <a
            href="/contacto"
            className="border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors font-medium"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </main>
  );
} 