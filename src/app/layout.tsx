import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

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
        url: "/images/01_hero_floresta_rio.png",
        width: 1200,
        height: 630,
        alt: "Keep Amazon - Bioeconomia e inovação na floresta",
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
      className={`${plusJakartaSans.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-white text-[#10171D] min-h-screen antialiased selection:bg-[#C8F31D] selection:text-[#10171D]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
