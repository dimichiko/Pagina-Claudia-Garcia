type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-xs">
      {icon && <div className="mb-4 text-4xl text-pink-500">{icon}</div>}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 