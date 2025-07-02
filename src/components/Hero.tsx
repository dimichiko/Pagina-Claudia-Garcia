type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function Hero({ title, subtitle, imageUrl, buttonText, buttonHref }: HeroProps) {
  const hasImage = !!imageUrl;
  return (
    <section className={`w-full flex flex-col md:flex-row items-center justify-between py-8 md:py-20 gap-8 ${!hasImage ? 'bg-pink-50' : ''}`}>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 py-6 bg-white/80 rounded-lg shadow-md max-w-xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-pink-600">{title}</h1>
        <p className="text-base md:text-2xl text-gray-700 mb-6">{subtitle}</p>
        {buttonText && buttonHref && (
          <a
            href={buttonHref}
            className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-pink-700 transition-colors"
          >
            {buttonText}
          </a>
        )}
      </div>
      <div className="flex-1 flex items-center justify-center w-full">
        {hasImage ? (
          <img src={imageUrl} alt="Hero" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-cover" />
        ) : (
          <div className="w-full max-w-xs h-48 bg-gray-100 flex flex-col items-center justify-center rounded-lg shadow">
            <span className="text-5xl text-gray-300 mb-2">📷</span>
            <span className="text-gray-400 text-sm">Imagen próximamente</span>
          </div>
        )}
      </div>
    </section>
  );
} 