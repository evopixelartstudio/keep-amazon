import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Produtos da Amazônia | Produtos Regionais | Keep Amazon",
  description:
    "Descubra produtos da Amazônia com procedência, valorização de comunidades e respeito à biodiversidade regional. Hortaliças, bioeconomia e sustentabilidade.",
  keywords: [
    "produtos da Amazônia",
    "produtos regionais amazônicos",
    "produtos sustentáveis",
    "produtos naturais da Amazônia",
    "produtos amazônicos em Manaus",
    "bioeconomia amazônica",
    "biodiversidade amazônica",
  ],
  alternates: {
    canonical: `${siteUrl}/produtos-amazonicos`,
  },
  openGraph: {
    title: "Produtos da Amazônia | Produtos Regionais | Keep Amazon",
    description:
      "Descubra produtos da Amazônia com procedência, valorização de comunidades e respeito à biodiversidade regional.",
    url: `${siteUrl}/produtos-amazonicos`,
    images: [
      {
        url: "/images/07_produtos_regionais.png",
        width: 1200,
        height: 630,
        alt: "Produtos da Amazônia - Keep Amazon",
      },
    ],
  },
};

export default function ProdutosAmazonicosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Produtos da Amazônia: Origem, Biodiversidade e Sustentabilidade",
    description:
      "Apresentação das categorias de produtos da Amazônia valorizados pela Keep Amazon, com procedência e conexão sustentável.",
    url: `${siteUrl}/produtos-amazonicos`,
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
          name: "Produtos da Amazônia",
          item: `${siteUrl}/produtos-amazonicos`,
        },
      ],
    },
  };

  const categorias = [
    {
      title: "Cultivo e Hortaliças Regionais",
      description:
        "Espécies frescas cultivadas de maneira agroecológica, integradas às estantes vivas do projeto Tá na Mão, trazendo o frescor e os saberes amazônicos para o ambiente urbano.",
      tag: "Tá na Mão",
      image: "/images/06_cultivo_hortalicas.png",
    },
    {
      title: "Produtos da Nossa Terra",
      description:
        "Itens oriundos da sociobiodiversidade amazônica colhidos por produtores e comunidades tradicionais, valorizando o manejo ético e a floresta em pé.",
      tag: "Origem Regional",
      image: "/images/07_produtos_regionais.png",
    },
    {
      title: "Kits e Experiências Corporativas (Unbox)",
      description:
        "Seleções sustentáveis com produtos amazônicos autênticos, desenvolvidos para empresas que desejam presentear com propósito, história e valorização cultural.",
      tag: "Experiências ESG",
      image: "/images/02_maos_frutos.png",
    },
  ];

  const pilaresGarantia = [
    {
      title: "Procedência Verificada",
      description:
        "Cada item é mapeado desde sua colheita ou cultivo local, garantindo rastreabilidade e respeito aos ciclos naturais da Amazônia.",
    },
    {
      title: "Incentivo aos Produtores Locais",
      description:
        "Remuneração justa e apoio direto às famílias e cooperativas da região de Manaus e do Amazonas, fortalecendo a economia de base.",
    },
    {
      title: "Conservação e Manejo Consciente",
      description:
        "Incentivamos métodos produtivos que preservam a floresta em pé e os ecossistemas aquáticos e terrestres da região amazônica.",
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

        {/* Hero da Página de Produtos */}
        <section className="relative bg-[#10171D] text-white pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <Breadcrumb
              items={[{ label: "Produtos da Amazônia" }]}
              theme="dark"
            />

            <div className="max-w-3xl pt-6 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
                  PRODUTOS REGIONAIS · SOCIOBIODIVERSIDADE · MANAUS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Produtos da Amazônia: Origem, Biodiversidade e Sustentabilidade
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                A Keep Amazon atua como a ponte entre a riqueza natural da floresta
                e quem busca produtos autênticos com procedência comprovada. Valorizamos
                cada cadeia produtiva regional, unindo bioeconomia, qualidade e respeito
                socioambiental.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="lime" size="md" withArrow href="/contato">
                  Solicitar informações de produtos
                </Button>
                <Button variant="outline" size="md" href="/ta-na-mao">
                  Conhecer o projeto Tá na Mão
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categorias e Produtos Reais */}
        <section className="w-full py-20 sm:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl pb-14">
              <SectionHeading
                label="LINHAS E EXPERIÊNCIAS"
                title={
                  <>
                    Categorias que unem{" "}
                    <span className="text-[#84b306] font-semibold">
                      tradição e futuro.
                    </span>
                  </>
                }
                description="Conheça como a Keep Amazon estrutura suas frentes de produtos regionais com impacto positivo."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categorias.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E8EBDD] bg-[#F9FAF6] overflow-hidden flex flex-col hover:border-[#84b306]/40 transition-colors shadow-sm"
                >
                  <div className="relative h-56 sm:h-64 w-full bg-[#10171D]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-[#10171D]/90 backdrop-blur-sm text-[#C8F31D] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#10171D]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#666B70] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais e Procedência */}
        <section className="w-full py-20 sm:py-28 bg-[#F1F5DC]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl pb-14">
              <SectionHeading
                label="COMPROMISSO E ORIGEM"
                title={
                  <>
                    Por que escolher produtos da{" "}
                    <span className="text-[#84b306] font-semibold">
                      Amazônia com a Keep Amazon?
                    </span>
                  </>
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pilaresGarantia.map((pilar, index) => (
                <div
                  key={pilar.title}
                  className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E0E5D0] shadow-sm space-y-3"
                >
                  <span className="text-2xl font-bold text-[#84b306]">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#10171D]">
                    {pilar.title}
                  </h3>
                  <p className="text-sm text-[#666B70] leading-relaxed">
                    {pilar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#10171D] text-white flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <h3 className="text-2xl font-bold">
                  Sua empresa quer levar produtos amazônicos e sustentabilidade para seu dia a dia?
                </h3>
                <p className="text-sm text-slate-300">
                  Fale conosco para projetos sob medida, fornecimento corporativo ou experiências educativas.
                </p>
              </div>
              <Button variant="lime" size="md" withArrow href="/contato">
                Fale com nossos especialistas
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

