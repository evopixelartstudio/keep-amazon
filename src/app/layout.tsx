import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Keep Amazon | Bioeconomia e Produtos da Amazônia",
    template: "%s | Keep Amazon",
  },
  description:
    "Conheça a Keep Amazon: produtos amazônicos, educação ambiental e soluções sustentáveis que conectam a floresta a novas oportunidades.",
  keywords: [
    "produtos da Amazônia",
    "bioeconomia amazônica",
    "produtos regionais amazônicos",
    "produtos sustentáveis",
    "sustentabilidade na Amazônia",
    "produtos naturais da Amazônia",
    "educação ambiental para empresas",
    "palestras sobre sustentabilidade",
    "projetos sustentáveis para empresas",
    "horta vertical para empresas",
    "soluções sustentáveis para empresas",
    "bioeconomia em Manaus",
    "produtos amazônicos em Manaus",
    "sustentabilidade em Manaus",
    "o que é bioeconomia amazônica",
    "desenvolvimento sustentável na Amazônia",
    "consumo consciente",
    "valorização dos produtos amazônicos",
    "biodiversidade amazônica",
    "economia sustentável na Amazônia",
  ],
  authors: [{ name: "Keep Amazon" }],
  creator: "Keep Amazon",
  publisher: "Keep Amazon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Keep Amazon | Bioeconomia e Produtos da Amazônia",
    description:
      "Conheça a Keep Amazon: produtos amazônicos, educação ambiental e soluções sustentáveis que conectam a floresta a novas oportunidades.",
    url: siteUrl,
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
  twitter: {
    card: "summary_large_image",
    title: "Keep Amazon | Bioeconomia e Produtos da Amazônia",
    description:
      "Conheça a Keep Amazon: produtos amazônicos, educação ambiental e soluções sustentáveis que conectam a floresta a novas oportunidades.",
    images: ["/images/hero_manaus_map.jpg"],
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
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Keep Amazon",
    description:
      "Iniciativa dedicada à bioeconomia amazônica, valorização de produtos regionais e soluções sustentáveis para empresas e sociedade.",
    url: siteUrl,
    logo: `${siteUrl}/images/hero_manaus_map.jpg`,
    sameAs: [
      "https://instagram.com/keepamazon",
      "https://youtube.com/@keepamazon",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manaus",
      addressRegion: "AM",
      addressCountry: "BR",
    },
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Keep Amazon",
    url: siteUrl,
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />
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
