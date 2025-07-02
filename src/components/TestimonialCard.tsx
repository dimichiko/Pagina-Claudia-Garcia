type TestimonialCardProps = {
  name: string;
  testimonial: string;
  imageUrl?: string;
};

export default function TestimonialCard({ name, testimonial, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-xs">
      {imageUrl && (
        <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover" />
      )}
      <p className="text-gray-700 italic mb-2">&ldquo;{testimonial}&rdquo;</p>
      <span className="font-semibold text-pink-600">{name}</span>
    </div>
  );
} 