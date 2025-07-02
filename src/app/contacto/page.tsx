export default function ContactoPage() {
  return (
    <main className="px-4 py-8 max-w-xl mx-auto bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Contáctame</h1>

      <form
        action="https://formsubmit.co/claugarc@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://claudia-garcia.vercel.app/gracias" />

        <input
          name="name"
          type="text"
          placeholder="Tu nombre"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Tu correo"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded-full"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="mb-2">📞 WhatsApp: <a href="https://wa.me/56993000940" className="text-pink-600 underline">+56 9 9300 0940</a></p>
        <p className="mb-2">📧 Email: <a href="mailto:claugarc@gmail.com" className="text-pink-600 underline">claugarc@gmail.com</a></p>
        <p className="mb-2">📸 Instagram: <a href="https://instagram.com/claudiagarcia.cl" target="_blank" className="text-pink-600 underline">@claudiagarcia.cl</a></p>
      </div>
    </main>
  );
} 