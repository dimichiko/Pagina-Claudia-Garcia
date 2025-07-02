export default function PortafolioPage() {
  return (
    <main className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Portafolio</h1>

      <p className="text-center mb-6">
        Aquí encontrarás algunos de mis trabajos en maquillaje, asesoría de imagen, personal shopper y eventos con marcas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Reemplaza con <ImageGallery /> o <Image /> reales después */}
        <div className="bg-gray-200 h-48 rounded-lg" />
        <div className="bg-gray-200 h-48 rounded-lg" />
        <div className="bg-gray-200 h-48 rounded-lg" />
      </div>
    </main>
  );
} 