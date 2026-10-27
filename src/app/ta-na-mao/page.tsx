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
  title: "Projeto Tá na Mão | Experiências Sustentáveis | Keep Amazon",
  description:
    "Conheça o Projeto Tá na Mão: estantes vivas com hortaliças e produtos regionais amazônicos que unem o cultivo, o educativo e o consumo sustentável.",
  keywords: [
    "projeto tá na mão",
    "estante viva",
    "horta vertical para empresas",
    "hortaliças amazônicas",
    "produtos regionais amazônicos",
    "educação ambiental para empresas",
    "bioeconomia amazônica",
    "sustentabilidade em Manaus",
  ],
  alternates: {
    canonical: `${siteUrl}/ta-na-mao`,
  },
  openGraph: {
    title: "Projeto Tá na Mão | Experiências Sustentáveis | Keep Amazon",
    description:
      "Uma estante viva com hortaliças e produtos regionais que aproxima as pessoas do que a Amazônia tem de melhor.",
    url: `${siteUrl}/ta-na-mao`,
    images: [
      {
        url: "/images/04_estante_hortalicas.jpg",
        width: 1200,
        height: 630,
        alt: "Projeto Tá na Mão - Estante Viva Keep Amazon",
      },
    ],
  },
};

export default function TaNaMaoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Projeto Tá na Mão - Estante Viva e Cultivo Regional",
    description:
      "Solução sustentável de estante viva com hortaliças e produtos regionais para ambientes corporativos, educativos e residenciais.",
    brand: {
      "@type": "Brand",
      name: "Keep Amazon",
    },
    url: `${siteUrl}/ta-na-mao`,
    image: `${siteUrl}/images/04_estante_hortalicas.jpg`,
  };

  const diferenciaisTaNaMao = [
    {
      titulo: "Estante Viva e Design Biofílico",
      descricao:
        "Mobiliário planejado que integra hortaliças frescas e plantas amazônicas ao cotidiano de empresas, escolas e recepções, melhorando o clima e o bem-estar visual.",
    },
    {
      titulo: "Educação e Origem em Foco",
      descricao:
        "Cada espécie cultivada acompanha informações claras sobre seus benefícios nutricionais, história botânica regional e formas de consumo saudável.",
    },
    {
      titulo: "Instalação Completa e Suporte",
      descricao:
        "A equipe Keep Amazon realiza toda a estruturação inicial, fornecimento de substrato fértil e orientações técnicas de luminosidade e rega.",
    },
    {
      titulo: "Manutenção Periódica Garantida",
      descricao:
        "Opção de acompanhamento técnico continuado com substituição e poda de hortaliças durante 4 meses ou períodos personalizados.",
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
              items={[{ label: "Projeto Tá na Mão" }]}
              theme="dark"
            />

            <div className="max-w-3xl pt-6 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
                  ESTANTES VIVAS · HORTALIÇAS REGIONAIS · CULTIVO URBANO
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Tá na Mão: Cultivo, Educação e Sustentabilidade
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Uma estante viva, com hortaliças frescas e produtos regionais,
                que une o útil ao educativo. O projeto Tá na Mão leva para perto
                das pessoas o que a Amazônia tem de melhor, promovendo saúde,
                conscientização e bioeconomia ativa.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="lime" size="md" withArrow href="/contato">
                  Quero o Tá na Mão no meu espaço
                </Button>
                <Button variant="outline" size="md" href="/projetos-sustentaveis">
                  Ver pacotes com palestra e instalação
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria e Detalhes do Projeto */}
        <section className="w-full py-20 sm:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <SectionHeading
                  label="A EXPERIÊNCIA DO CULTIVO"
                  title={
                    <>
                      Aproximando a floresta do{" "}
                      <span className="text-[#84b306] font-semibold">
                        dia a dia das pessoas.
                      </span>
                    </>
                  }
                />
                <div className="space-y-4 text-base text-[#666B70] leading-relaxed">
                  <p>
                    O projeto Tá na Mão nasceu da constatação de que o distanciamento entre
                    os centros urbanos e os alimentos da terra prejudica a saúde e apaga
                    a valorização dos nossos produtores locais.
                  </p>
                  <p>
                    Com estantes inteligentes e modulares, levamos hortaliças frescas,
                    plantas alimentícias e saberes amazônicos para empresas, escolas e
                    organizações públicas. Uma verdadeira sala de aula viva que inspira
                    pausas conscientes e alimentação de verdade.
                  </p>
                </div>

                <div className="pt-2">
                  <Button variant="dark" size="md" withArrow href="/contato">
                    Solicitar implantação
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#E8EBDD] shadow-sm">
                  <Image
                    src="/images/04_estante_hortalicas.jpg"
                    alt="Estante viva com hortaliças e produtos regionais amazônicos"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#E8EBDD] shadow-sm">
                  <Image
                    src="/images/03_muda_maos.png"
                    alt="Muda sendo cultivada para a estante viva Tá na Mão"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 4 Diferenciais */}
            <div className="mt-20">
              <div className="max-w-2xl pb-10">
                <SectionHeading
                  label="CARACTERÍSTICAS PRINCIPAIS"
                  title={
                    <>
                      Tudo o que o projeto{" "}
                      <span className="text-[#84b306] font-semibold">
                        entrega para você.
                      </span>
                    </>
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {diferenciaisTaNaMao.map((item, index) => (
                  <div
                    key={item.titulo}
                    className="p-8 rounded-2xl bg-[#F9FAF6] border border-[#E8EBDD] space-y-3"
                  >
                    <span className="text-xl font-bold text-[#84b306]">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#10171D]">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-[#666B70] leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="w-full py-16 sm:py-20 bg-[#F1F5DC]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10171D]">
              Transforme seu ambiente com uma Estante Viva Tá na Mão
            </h2>
            <p className="text-base text-[#666B70] max-w-2xl mx-auto leading-relaxed">
              Consulte nossa disponibilidade de instalação em Manaus e planos com acompanhamento de manutenção.
            </p>
            <div className="pt-2">
              <Button variant="dark" size="lg" withArrow href="/contato">
                Conversar sobre o Tá na Mão
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

