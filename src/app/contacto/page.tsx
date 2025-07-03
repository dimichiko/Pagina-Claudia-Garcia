"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(8, "El teléfono debe tener al menos 8 dígitos"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black tracking-tight mb-6">
            Contacto
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
            ¿Lista para transformar tu estilo? Contáctame y conversemos sobre cómo puedo ayudarte 
            a descubrir tu mejor versión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight mb-8">
              Información de Contacto
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-black">WhatsApp</h3>
                  <a href="https://wa.me/56993000940" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">+56 9 9300 0940</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-black">Email</h3>
                  <a href="mailto:claugarc@gmail.com" className="text-black hover:text-gray-600 transition-colors">claugarc@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <Instagram size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-black">Instagram</h3>
                  <a href="https://instagram.com/claudiagarcia.cl" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">@claudiagarcia.cl</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-black">Ubicación</h3>
                  <span className="text-black">Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium text-black mb-4">Horarios de Atención</h3>
              <div className="space-y-2 text-gray-800">
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight mb-8">
              Envíame un Mensaje
            </h2>
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center"
              >
                <h3 className="text-lg font-medium text-black mb-2">
                  ¡Mensaje enviado exitosamente!
                </h3>
                <p className="text-gray-800">
                  Te responderé en las próximas 24 horas.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Nombre completo *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                    Teléfono *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="+56 9 9300 0940"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border border-black text-black py-3 px-6 rounded-full hover:bg-black hover:text-white transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 