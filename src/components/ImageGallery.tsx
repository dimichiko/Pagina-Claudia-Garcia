type ImageGalleryProps = {
  images: { src: string; alt?: string }[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt || `Imagen ${idx + 1}`}
          className="w-full h-48 object-cover rounded-lg shadow"
        />
      ))}
    </div>
  );
} 