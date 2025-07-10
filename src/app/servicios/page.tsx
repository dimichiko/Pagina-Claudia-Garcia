"use client";

export default function ServiciosPage() {
  const servicios = [
    {
      id: "diagnostico",
      titulo: "Diagnóstico Imagen Personal",
      descripcion: "Análisis completo de tu imagen actual, identificación de fortalezas y áreas de mejora. Incluye evaluación de colorimetría, morfología corporal y estilo personal.",
      lugar: "En tu hogar o mi estudio",
      duracion: "1 hora",
      valor: "$70.000",
      costoExtra: false
    },
    {
      id: "colorimetria",
      titulo: "Colorimetría",
      descripcion: "Descubre tu paleta de colores personal. Identificamos los tonos que más te favorecen para ropa, maquillaje y accesorios.",
      lugar: "En tu hogar o mi estudio",
      duracion: "1 hora",
      valor: "$70.000",
      costoExtra: false
    },
    {
      id: "detox-closet",
      titulo: "Detox de Clóset",
      descripcion: "Revisión completa de tu guardarropa. Identificamos qué conservar, qué donar y qué piezas necesitas para completar tu estilo.",
      lugar: "En tu hogar",
      duracion: "1 hora",
      valor: "$70.000",
      costoExtra: true
    },
    {
      id: "personal-shopper",
      titulo: "Personal Shopper",
      descripcion: "Acompañamiento en compras para encontrar las piezas perfectas según tu estilo, presupuesto y necesidades específicas.",
      lugar: "Centros comerciales o boutiques",
      duracion: "1 hora",
      valor: "$70.000",
      costoExtra: true
    },
    {
      id: "armado-looks",
      titulo: "Armado de Looks",
      descripcion: "Creación de outfits completos con las piezas que ya tienes. Aprende a combinar y crear looks para diferentes ocasiones.",
      lugar: "En tu hogar",
      duracion: "1 hora",
      valor: "$70.000",
      costoExtra: false
    },
    {
      id: "armado-maletas",
      titulo: "Armado de Maletas",
      descripcion: "Planificación y organización de maletas para viajes. Optimiza el espacio y lleva solo lo necesario para cada destino.",
      lugar: "En tu hogar",
      duracion: "1 hora",
      valor: "$70.000",
      costoExtra: false
    },
    {
      id: "asesorias-novias",
      titulo: "Asesorías a Novias",
      descripcion: "Asesoría especializada para novias. Desde el vestido hasta el maquillaje, te ayudo a crear el look perfecto para tu día especial.",
      lugar: "En tu hogar o mi estudio",
      duracion: "1 hora",
      valor: "$70.000",
      costoExtra: true
    },
    {
      id: "talleres-corporativos",
      titulo: "Talleres Corporativos",
      descripcion: "Talleres grupales para empresas sobre imagen personal, protocolo y comunicación no verbal. Ideal para equipos de trabajo.",
      lugar: "En tu empresa",
      duracion: "Variable",
      valor: "Solicita por correo",
      costoExtra: false,
      especial: true
    }
  ];

  const enviarWhatsApp = (servicio: string) => {
    const mensaje = `Hola Claudia, me interesa el servicio de ${servicio}. ¿Podrías darme más información?`;
    const url = `https://wa.me/56993000940?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="bg-white pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black tracking-tight mb-6">
            Mis Servicios
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Servicios personalizados para transformar tu imagen y estilo. 
            Cada sesión está diseñada para empoderarte y ayudarte a descubrir tu mejor versión.
          </p>
        </div>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-black mb-4">{servicio.titulo}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{servicio.descripcion}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium mr-2">📍 Lugar:</span>
                  {servicio.lugar}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium mr-2">⏱️ Duración:</span>
                  {servicio.duracion}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium mr-2">💰 Valor:</span>
                  <span className="font-bold text-black">{servicio.valor}</span>
                </div>
                {servicio.costoExtra && (
                  <div className="text-xs text-gray-500 italic">
                    Costo adicional por hora extra
                  </div>
                )}
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

        {/* Sección Asesorías */}
        <section id="asesorias" className="py-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black tracking-tight mb-4">
              Asesorías
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Galería de asesorías próximamente
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-gray-100 border border-gray-200 h-48 rounded-lg">
                <span className="text-4xl text-gray-400 mb-2">📷</span>
                <span className="text-gray-500 text-sm">Próximamente</span>
              </div>
            ))}
          </div>
        </section>

        {/* Información adicional */}
        <div className="bg-gray-50 rounded-lg p-8 mt-16">
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