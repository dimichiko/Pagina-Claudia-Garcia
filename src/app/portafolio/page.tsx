export default function PortafolioPage() {
  return (
    <main className="px-4 py-8 max-w-5xl mx-auto bg-pink-50 min-h-[70vh] rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">Portafolio</h1>

      <p className="text-center mb-6 text-gray-700">
        Aquí encontrarás algunos de mis trabajos en maquillaje, asesoría de imagen, personal shopper y eventos con marcas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Placeholder visual */}
        {[1,2,3].map((i) => (
          <div key={i} className="flex flex-col items-center justify-center bg-white border border-gray-200 h-48 rounded-lg shadow gap-2">
            <span className="text-4xl text-gray-300">📷</span>
            <span className="text-gray-400 text-sm">Próximamente foto real</span>
          </div>
        ))}
      </div>
    </main>
  );
} 