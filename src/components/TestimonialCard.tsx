import { motion } from "framer-motion";

type TestimonialCardProps = {
  name: string;
  testimonial: string;
  imageUrl?: string;
};

export default function TestimonialCard({ name, testimonial, imageUrl }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-xs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      viewport={{ once: true }}
    >
      {imageUrl && (
        <motion.img 
          src={imageUrl} 
          alt={name} 
          className="w-20 h-20 rounded-full mb-4 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <p className="text-gray-700 italic mb-2">&ldquo;{testimonial}&rdquo;</p>
      <span className="font-semibold text-pink-600">{name}</span>
    </motion.div>
  );
} 