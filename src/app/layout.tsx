import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-url";
import { CookieBanner } from "@/components/ui/CookieBanner";

const siteUrl = getSiteUrl();
const GTM_ID = "GTM-WT3738HT";
const GA_MEASUREMENT_ID = "G-9EBGZ876D9";

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
  verification: {
    google: "oLUprP4hg57nitK-biaped5I9csiG57b_nCarLjR3Qg",
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
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/hero_manaus_map.jpg`,
    email: "keepamazonfullspectrum@gmail.com",
    telephone: "+55-92-99999-9810",
    sameAs: [
      "https://instagram.com/keepamazon",
      "https://youtube.com/@keepamazon",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Djalma Batista, 1661",
      addressLocality: "Manaus",
      addressRegion: "AM",
      postalCode: "69050-010",
      addressCountry: "BR",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+55-92-99999-9810",
      email: "keepamazonfullspectrum@gmail.com",
      availableLanguage: ["Portuguese"],
    },
    knowsAbout: [
      "Bioeconomia amazônica",
      "Produtos regionais da Amazônia",
      "Educação ambiental",
      "Horta vertical e agricultura urbana",
      "Projetos sustentáveis para empresas (ESG)",
      "Objetivos de Desenvolvimento Sustentável (ODS)",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Keep Amazon",
    url: siteUrl,
    inLanguage: "pt-BR",
    publisher: { "@type": "Organization", name: "Keep Amazon" },
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}

        <CookieBanner />

        {/* dataLayer + Consent Mode v2 (LGPD) + Google Analytics 4 (gtag) + evento inicial do GTM */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var kaConsent = 'denied';
try { if (localStorage.getItem('ka_cookie_consent') === 'granted') kaConsent = 'granted'; } catch (e) {}
gtag('consent', 'default', {
  analytics_storage: kaConsent,
  ad_storage: kaConsent,
  ad_user_data: kaConsent,
  ad_personalization: kaConsent,
  wait_for_update: 500
});
dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          id="ga4-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-loader"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
