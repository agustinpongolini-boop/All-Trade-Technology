import type { Metadata } from "next";
import { Outfit, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const SITE_URL = "https://www.alltradetechnology.com";

const defaultTitle =
  "All Trade Technology | Importaciones sin fricción — Comercio Exterior Argentina";
const description =
  "Primer operador híbrido del Cono Sur. Infraestructura logística propia en Argentina, EE.UU. y Europa. Tu departamento de comercio exterior, tecnificado y sin costos fijos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | All Trade Technology",
  },
  description,
  keywords: [
    "importaciones argentina",
    "comercio exterior",
    "logistica internacional",
    "despacho aduanero",
    "importar productos",
    "comex",
    "importar desde china",
    "logística puerta a puerta",
    "agente de comercio exterior",
  ],
  authors: [{ name: "All Trade Technology" }],
  creator: "All Trade Technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: defaultTitle,
    description,
    url: SITE_URL,
    siteName: "All Trade Technology",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "All Trade Technology — Importaciones sin fricción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All Trade Technology",
  description,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+54 9 3492 630909",
  email: "sales@alltradetechnology.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Casabella 985",
    addressLocality: "Rafaela",
    addressRegion: "Santa Fe",
    postalCode: "2300",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.2533,
    longitude: -61.4867,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "20:00",
  },
  sameAs: [],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -31.2533,
      longitude: -61.4867,
    },
    geoRadius: "50000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${libreBaskerville.variable} font-body antialiased bg-dark text-body`}
      >
        {children}
      </body>
    </html>
  );
}
