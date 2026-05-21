import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Trade Technology · Instagram",
  description:
    "Importaciones sin fricción — Courier, marítimo y aéreo. Reservá una llamada de 15 minutos sin costo.",
  alternates: {
    canonical: "https://www.alltradetechnology.com/ig",
  },
  openGraph: {
    title: "All Trade Technology · Instagram",
    description:
      "Importaciones sin fricción — Reservá una llamada de 15 minutos sin costo.",
    url: "https://www.alltradetechnology.com/ig",
    siteName: "All Trade Technology",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function IGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
