import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PILLARS } from "@/data/site-content";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Bioeconomia Amazônica: Sustentabilidade e Desenvolvimento | Keep Amazon",
  description:
    "Compreenda o conceito de bioeconomia amazônica: modelo econômico que preserva a floresta em pé, valoriza os povos tradicionais e gera oportunidades de inovação.",
  keywords: [
    "bioeconomia amazônica",
    "o que é bioeconomia amazônica",
    "desenvolvimento sustentável na Amazônia",
    "economia sustentável na Amazônia",
    "biodiversidade amazônica",
    "bioeconomia em Manaus",
    "sustentabilidade na Amazônia",
    "consumo consciente",
  ],
  alternates: {
    canonical: `${siteUrl}/bioeconomia-amazonica`,
  },
  openGraph: {
    title: "Bioeconomia Amazônica: Sustentabilidade e Desenvolvimento | Keep Amazon",
    description:
      "A bioeconomia amazônica une floresta em pé, inovação e renda sustentável para as comunidades locais.",
    url: `${siteUrl}/bioeconomia-amazonica`,
    images: [
      {
        url: "/images/08_rio_amazonia.png",
        width: 1200,
        height: 630,
        alt: "Bioeconomia Amazônica - Rios e Floresta Keep Amazon",
      },
    ],
  },
};

export default function BioeconomiaAmazonicaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bioeconomia Amazônica: Valor para a Floresta e para as Pessoas",
    description:
      "Guia completo sobre a bioeconomia na Amazônia, seus fundamentos, relevância global e papel da Keep Amazon no desenvolvimento regional.",
    url: `${siteUrl}/bioeconomia-amazonica`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bioeconomia Amazônica",
          item: `${siteUrl}/bioeconomia-amazonica`,
        },
      ],
    },
  };

  const blocosEducativos = [
    {
      title: "O que é Bioeconomia Amazônica?",
      description:
        "É o modelo de desenvolvimento socioeconômico baseado na utilização responsável e inovadora dos recursos biológicos da Amazônia, mantendo a floresta viva, os rios preservados e os saberes tradicionais no centro das decisões.",
    },
    {
      title: "Floresta em Pé e Renda Digna",
      description:
        "Diferente dos modelos predatórios, a bioeconomia comprova que a conservação da biodiversidade gera mais valor a médio e longo prazo do que o desmatamento, gerando autonomia financeira para ribeirinhos, indígenas e produtores familiares.",
    },
    {
      title: "Conexão com os Mercados Urbanos",
      description:
        "O grande gargalo histórico da Amazônia sempre foi a logística e o acesso justo aos centros consumidores. A Keep Amazon atua exatamente nessa ponte, transformando potencial biológico em oportunidades concretas de consumo consciente.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-white">
        <Header />

        {/* Hero */}
        <section className="relative bg-[#10171D] text-white pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <Breadcrumb
              items={[{ label: "Bioeconomia Amazônica" }]}
              theme="dark"
            />

            <div className="max-w-3xl pt-6 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
                  DESENVOLVIMENTO SUSTENTÁVEL · FLORESTA EM PÉ · MANAUS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Bioeconomia Amazônica: Valor para a Floresta e para as Pessoas
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Acreditamos que o futuro sustentável do planeta passa pela valorização
                da maior floresta tropical do mundo. A bioeconomia não é apenas uma teoria:
                é a prática diária de aproximar saberes ancestrais, ciência e mercado.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="lime" size="md" withArrow href="/projetos-sustentaveis">
                  Conheça nossas soluções
                </Button>
                <Button variant="outline" size="md" href="/produtos-amazonicos">
                  Ver produtos da região
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Conceito e Relevância */}
        <section className="w-full py-20 sm:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <SectionHeading
                  label="FUNDAMENTOS E VISÃO"
                  title={
                    <>
                      Por que a bioeconomia é a{" "}
                      <span className="text-[#84b306] font-semibold">
                        chave da Amazônia?
                      </span>
                    </>
                  }
                />
                <div className="space-y-4 text-base text-[#666B70] leading-relaxed">
                  <p>
                    A Amazônia abriga mais de 20% da biodiversidade do planeta e desempenha
                    papel decisivo no equilíbrio climático global. Desenvolver a bioeconomia
                    significa gerar prosperidade econômica respeitando os limites ecológicos
                    e fortalecendo quem vive e cuida desse território.
                  </p>
                  <p>
                    Na Keep Amazon, nosso compromisso é ser o elo que transforma o valor da
                    floresta em bem-estar social, produtos rastreados e experiências de
                    aprendizado para organizações de todo o país.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-[#E8EBDD]">
                  <Image
                    src="/images/08_rio_amazonia.png"
                    alt="Rios e floresta da Amazônia símbolo da bioeconomia viva"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Grid dos 3 pilares conceituais */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {blocosEducativos.map((bloco) => (
                <div
                  key={bloco.title}
                  className="p-8 rounded-2xl bg-[#F9FAF6] border border-[#E8EBDD] space-y-3"
                >
                  <h3 className="text-xl font-bold text-[#10171D]">
                    {bloco.title}
                  </h3>
                  <p className="text-sm text-[#666B70] leading-relaxed">
                    {bloco.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares da Keep Amazon no Ecossistema */}
        <section className="w-full py-20 sm:py-28 bg-[#F1F5DC]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl pb-14">
              <SectionHeading
                label="NOSSA ATUAÇÃO"
                title={
                  <>
                    Como a Keep Amazon constrói a{" "}
                    <span className="text-[#84b306] font-semibold">
                      bioeconomia na prática.
                    </span>
                  </>
                }
                description="Quatro frentes integradas para transformar relações e valorizar o que é genuinamente amazônico."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {PILLARS.map((pillar) => (
                <div key={pillar.id}>
                  <ServiceCard
                    variant="pillar"
                    title={pillar.title}
                    description={pillar.description}
                    iconName={pillar.iconName}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button variant="dark" size="lg" withArrow href="/contato">
                Faça parte desse movimento
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

