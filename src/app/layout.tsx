import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter( {
  variable: "--font-inter",
  subsets: [ "latin" ],
  weight: [ "400", "500", "600", "700" ],
} );

const jetbrains = JetBrains_Mono( {
  variable: "--font-jetbrains",
  subsets: [ "latin" ],
  weight: [ "400" ],
} );

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://vndigital.pe";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "VN Digital – Soluciones Web para Comunicación y Gestión Digital",
  description:
    "Desarrollamos soluciones web claras, funcionales y adaptadas para mejorar la comunicación, gestión y organización de procesos en instituciones y negocios. Especializados en educación y sectores estratégicos.",
  keywords: [
    "desarrollo web",
    "sistemas web",
    "soluciones digitales",
    "gestión educativa",
    "plataformas web",
    "VN Digital",
  ],
  authors: [ { name: "VN Digital" } ],
  creator: "VN Digital",
  publisher: "VN Digital",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL( baseUrl ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: baseUrl,
    siteName: "VN Digital",
    title: "VN Digital – Soluciones Web para Comunicación y Gestión Digital",
    description:
      "Desarrollamos soluciones web claras, funcionales y adaptadas para mejorar la comunicación, gestión y organización de procesos en instituciones y negocios.",
    images: [
      {
        url: `${ baseUrl }/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "VN Digital - Soluciones Web",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VN Digital – Soluciones Web",
    description:
      "Desarrollamos soluciones web para instituciones y negocios. Claras, funcionales y adaptadas.",
    images: [ `${ baseUrl }/og-image.jpg` ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "verification_token_if_available",
  },
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="es" className={ `${ inter.variable } ${ jetbrains.variable }` }>
      <head>
        {/* JSON-LD Schema */ }
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ {
            __html: JSON.stringify( {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VN Digital",
              url: "https://vndigital.pe",
              logo: "https://vndigital.pe/og-image.jpg",
              description:
                "Soluciones web para comunicación y gestión digital, adaptadas a las necesidades reales de instituciones y negocios.",
              email: `${ process.env.SMTP_TO }`,
              foundingDate: "2022",
              areaServed: [ "PE", "LA" ],
            } ),
          } }
        />
        {/* Preconnect a Google Fonts */ }
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        { children }
      </body>
    </html>
  );
}
