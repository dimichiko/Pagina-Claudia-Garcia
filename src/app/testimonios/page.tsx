export default function TestimoniosPage() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Testimonios</h1>

      <div className="space-y-6">
        <blockquote className="border-l-4 border-pink-500 pl-4">
          <p>“Gracias a Claudia aprendí a vestirme para mí, no para otros. Mi seguridad cambió completamente.”</p>
          <cite className="block mt-2 text-sm text-gray-500">– Camila A.</cite>
        </blockquote>

        <blockquote className="border-l-4 border-pink-500 pl-4">
          <p>“Su asesoría me hizo entender cómo usar el color y la forma a mi favor. Increíble experiencia.”</p>
          <cite className="block mt-2 text-sm text-gray-500">– Valeria T.</cite>
        </blockquote>
      </div>
    </main>
  );
} 