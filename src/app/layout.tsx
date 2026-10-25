import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://keepamazon.org"),
  title: "Keep Amazon | Conectando a floresta a novas possibilidades",
  description:
    "Conheça a Keep Amazon, iniciativa dedicada à valorização regional, à bioeconomia e à conexão entre a floresta, as pessoas e novas oportunidades.",
  keywords: [
    "Keep Amazon",
    "Bioeconomia",
    "Amazônia",
    "Produtos Regionais",
    "Sustentabilidade",
    "Inovação",
    "Tá na Mão",
  ],
  authors: [{ name: "Keep Amazon" }],
  openGraph: {
    title: "Keep Amazon | Conectando a floresta a novas possibilidades",
    description:
      "Conheça a Keep Amazon, iniciativa dedicada à valorização regional, à bioeconomia e à conexão entre a floresta, as pessoas e novas oportunidades.",
    url: "https://keepamazon.org",
    siteName: "Keep Amazon",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero_manaus_map.jpg",
        width: 1200,
        height: 630,
        alt: "Keep Amazon - Bioeconomia, rios e inovação conectando a Amazônia",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10171D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="bg-white text-[#10171D] min-h-screen antialiased selection:bg-[#C8F31D] selection:text-[#10171D]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
