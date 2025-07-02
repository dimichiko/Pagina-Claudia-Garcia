export default function EventosPage() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto bg-pink-50 min-h-[70vh] rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">Eventos y Talleres</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Próximos Eventos</h2>
        <p>Próximas fechas serán anunciadas en mi Instagram: <a className="text-pink-600 underline" href="https://instagram.com/claudiagarcia.cl" target="_blank">@claudiagarcia.cl</a></p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-1">Eventos Realizados</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex items-center gap-2"><span className="text-2xl text-gray-300">🎤</span>Workshop &quot;Descubre tu estilo&quot; con MAC Cosmetics</li>
          <li className="flex items-center gap-2"><span className="text-2xl text-gray-300">💄</span>Taller de automaquillaje en Parque Arauco</li>
          <li className="flex items-center gap-2"><span className="text-2xl text-gray-300">✨</span>Evento de lanzamiento con Essie Chile</li>
        </ul>
      </section>
    </main>
  );
} 