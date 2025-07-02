export default function ContactoPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>
      <form
        action="https://formsubmit.co/tu-correo@gmail.com"
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://tudominio.com/gracias" />
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
        ></textarea>
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded-full"
        >
          Enviar mensaje
        </button>
      </form>
    </main>
  );
} 