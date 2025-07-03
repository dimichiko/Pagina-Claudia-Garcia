import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Claudia García – Personal Shopper y Asesora de Imagen",
  description: "Transforma tu estilo con asesoría de imagen personalizada, personal shopper y eventos de maquillaje en Santiago. Vive tu mejor versión con Claudia García.",
  keywords: [
    "personal shopper",
    "asesoría de imagen",
    "maquillaje profesional",
    "Claudia García",
    "eventos de belleza",
    "Santiago",
    "Chile",
    "colorimetría",
    "estilo personal",
    "transformación de imagen"
  ],
  authors: [{ name: "Claudia García" }],
  creator: "Claudia García",
  publisher: "Claudia García",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://claudia-garcia.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Claudia García – Personal Shopper y Asesora de Imagen",
    description: "Transforma tu estilo con asesoría de imagen personalizada, personal shopper y eventos de maquillaje en Santiago.",
    url: 'https://claudia-garcia.vercel.app',
    siteName: 'Claudia García',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Claudia García - Personal Shopper',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Claudia García – Personal Shopper y Asesora de Imagen",
    description: "Transforma tu estilo con asesoría de imagen personalizada en Santiago.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
