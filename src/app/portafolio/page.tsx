

export default function PortafolioPage() {
  return (
    <main className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black tracking-tight mb-6">
            Portafolio
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explora algunos de mis trabajos más recientes. Cada transformación es única 
            y refleja la personalidad y objetivos de mis clientes.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-8 text-center">
            Transformaciones Recientes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-gray-100 border border-gray-200 h-48 rounded-lg">
                <span className="text-4xl text-gray-400 mb-2">📷</span>
                <span className="text-gray-500 text-sm">Próximamente</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorías de trabajo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Personal Shopper</h3>
            <p className="text-gray-700 leading-relaxed">
              Renovación de closet, selección de piezas clave y creación de outfits 
              que reflejan el estilo personal de cada cliente.
            </p>
          </div>
          
          <div className="text-center p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Asesoría de Imagen</h3>
            <p className="text-gray-700 leading-relaxed">
              Análisis de colorimetría, morfología y estilo para realzar la identidad 
              visual y crear confianza en cada presentación.
            </p>
          </div>
          
          <div className="text-center p-8 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Maquillaje Profesional</h3>
            <p className="text-gray-700 leading-relaxed">
              Maquillajes para eventos especiales, sesiones fotográficas y ocasiones 
              que requieren un look impecable y duradero.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-4">
            ¿Te gustaría ser mi próxima transformación?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            Cada cliente es único y merece una experiencia personalizada. 
            Contáctame para comenzar tu propia transformación.
          </p>
          <a
            href="/contacto"
            className="border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors font-medium"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </main>
  );
} 