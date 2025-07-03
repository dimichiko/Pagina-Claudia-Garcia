"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simular envío (reemplazar con FormSubmit real)
    console.log("Datos del formulario:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Resetear mensaje de éxito después de 3 segundos
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="px-4 py-8 max-w-xl mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">Contáctame</h1>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-2"
          >
            <CheckCircle className="text-green-600" size={20} />
            <p className="text-green-800">¡Mensaje enviado exitosamente!</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre *
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Tu nombre completo"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="tu@email.com"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje *
            </label>
            <textarea
              {...register("message")}
              placeholder="Cuéntame sobre tu proyecto o consulta..."
              rows={4}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send size={16} />
                Enviar mensaje
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="mb-2">📞 WhatsApp: <a href="https://wa.me/56993000940" className="text-pink-600 underline">+56 9 9300 0940</a></p>
          <p className="mb-2">📧 Email: <a href="mailto:claugarc@gmail.com" className="text-pink-600 underline">claugarc@gmail.com</a></p>
          <p className="mb-2">📸 Instagram: <a href="https://instagram.com/claudiagarcia.cl" target="_blank" className="text-pink-600 underline">@claudiagarcia.cl</a></p>
        </div>
      </motion.div>
    </main>
  );
} 