import Link from "next/link";

function SuccessBanner() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center">
        <span className="text-2xl mr-2">✅</span>
        <p className="text-green-800 font-medium">
          ¡Pago procesado exitosamente! Tu compra ha sido confirmada.
        </p>
      </div>
    </div>
  );
}

export default function GraciasCompraPage({
  searchParams,
}: {
  searchParams: { compra?: string };
}) {
  const isSuccessfulPurchase = searchParams.compra === "ok";

  return (
    <main className="container mx-auto py-20 px-4 text-center bg-white min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto">
        {isSuccessfulPurchase && <SuccessBanner />}
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-pink-700 mb-4">¡Gracias por tu compra!</h1>
        <p className="text-lg text-gray-600 mb-8">
          En breve te contactaremos para coordinar tu sesión y comenzar a transformar tu estilo.
        </p>
        <div className="bg-pink-50 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Próximos pasos:</strong><br />
            1. Recibirás un email de confirmación<br />
            2. Te contactaremos en las próximas 24 horas<br />
            3. Coordinaremos fecha y lugar de tu sesión
          </p>
        </div>
        <Link
          href="/"
          className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors inline-block"
        >
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
} 