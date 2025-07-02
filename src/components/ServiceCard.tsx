type ServiceCardProps = {
  title: string;
  description: string;
  image?: string;
  priceText?: string;
  pagofacilLink?: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({ title, description, image, priceText, pagofacilLink, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-xs">
      {image && (
        <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-3" />
      )}
      {icon && <div className="mb-4 text-4xl text-pink-500">{icon}</div>}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      {priceText && (
        <div className="text-2xl font-bold text-pink-600 mb-3">{priceText}</div>
      )}
      {pagofacilLink && (
        <a
          href={pagofacilLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white px-6 py-2 rounded-full mt-4 hover:bg-pink-700 transition-colors"
        >
          Comprar ahora
        </a>
      )}
    </div>
  );
} 