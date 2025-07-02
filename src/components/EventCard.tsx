type EventCardProps = {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
};

export default function EventCard({ title, date, description, imageUrl }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col max-w-xs">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md mb-3" />
      )}
      <span className="text-xs text-pink-500 font-semibold mb-1">{date}</span>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
} 