type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function Hero({ title, subtitle, imageUrl = "/claudia-placeholder.jpg", buttonText, buttonHref }: HeroProps) {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-20 gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-600">{title}</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-6">{subtitle}</p>
        {buttonText && buttonHref && (
          <a
            href={buttonHref}
            className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-pink-700 transition-colors"
          >
            {buttonText}
          </a>
        )}
      </div>
      {imageUrl && (
        <img src={imageUrl} alt="Hero" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-cover" />
      )}
    </section>
  );
} 