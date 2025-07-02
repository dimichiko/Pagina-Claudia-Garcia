export default function EventosPage() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Eventos y Talleres</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Próximos Eventos</h2>
        <p>Próximas fechas serán anunciadas en mi Instagram: <a className="text-pink-600 underline" href="https://instagram.com/claudiagarcia.cl" target="_blank">@claudiagarcia.cl</a></p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-1">Eventos Realizados</h2>
        <ul className="list-disc list-inside">
          <li>Workshop "Descubre tu estilo" con MAC Cosmetics</li>
          <li>Taller de automaquillaje en Parque Arauco</li>
          <li>Evento de lanzamiento con Essie Chile</li>
        </ul>
      </section>
    </main>
  );
} 