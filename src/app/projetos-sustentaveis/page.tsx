import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { INITIATIVES } from "@/data/site-content";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Projetos Sustentáveis para Empresas | Keep Amazon",
  description:
    "Soluções e projetos sustentáveis para empresas: estantes vivas, palestras, manutenção contínua e kits exclusivos que conectam sua marca à bioeconomia amazônica.",
  keywords: [
    "projetos sustentáveis para empresas",
    "soluções sustentáveis para empresas",
    "horta vertical para empresas",
    "educação ambiental para empresas",
    "sustentabilidade na Amazônia",
    "bioeconomia amazônica",
    "sustentabilidade em Manaus",
  ],
  alternates: {
    canonical: `${siteUrl}/projetos-sustentaveis`,
  },
  openGraph: {
    title: "Projetos Sustentáveis para Empresas | Keep Amazon",
    description:
      "Implemente soluções sustentáveis reais na sua empresa com a Keep Amazon. Conheça nossos modelos de projeto.",
    url: `${siteUrl}/projetos-sustentaveis`,
    images: [
      {
        url: "/images/04_estante_hortalicas.jpg",
        width: 1200,
        height: 630,
        alt: "Projetos Sustentáveis Keep Amazon",
      },
    ],
  },
};

export default function ProjetosSustentaveisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Soluções e Projetos Sustentáveis para Empresas",
    description:
      "Modelos modulares de projetos de sustentabilidade: palestras, implantação de estantes vivas, acompanhamento de 4 meses e brindes de impacto socioambiental.",
    provider: {
      "@type": "Organization",
      name: "Keep Amazon",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
  };

  const etapasContratacao = [
    {
      etapa: "01",
      titulo: "Diagnóstico e Alinhamento",
      descricao:
        "Entendemos o espaço disponível na sua empresa, o perfil dos colaboradores e os objetivos de sustentabilidade ou metas ESG da instituição.",
    },
    {
      etapa: "02",
      titulo: "Personalização do Formato",
      descricao:
        "Você escolhe entre os módulos ideais: palestras de sensibilização, instalação de estante viva, kits corporativos ou o pacote integrado com manutenção.",
    },
    {
      etapa: "03",
      titulo: "Implementação e Experiência",
      descricao:
        "Nossa equipe executa a montagem, fornece as instruções de cuidado e realiza a ativação presencial para inspirar sua equipe desde o primeiro dia.",
    },
    {
      etapa: "04",
      titulo: "Acompanhamento Contínuo",
      descricao:
        "Garantia de saúde biológica das plantas durante os meses iniciais, com suporte técnico e renovação periódica.",
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
              items={[{ label: "Projetos Sustentáveis" }]}
              theme="dark"
            />

            <div className="max-w-3xl pt-6 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
                  SOLUÇÕES CORPORATIVAS · ESG NA PRÁTICA · MANAUS E BRASIL
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Soluções e Projetos Sustentáveis para Empresas
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Conecte a marca da sua empresa à conservação da floresta amazônica.
                Oferecemos formatos modulares que aliam educação ambiental, estruturas
                vivas no ambiente corporativo e experiências autênticas de bioeconomia.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="lime" size="md" withArrow href="/contato">
                  Solicitar proposta para minha empresa
                </Button>
                <Button variant="outline" size="md" href="/ta-na-mao">
                  Conhecer o projeto Tá na Mão
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos 6 Formatos de Iniciativas */}
        <section className="w-full py-20 sm:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl pb-14">
              <SectionHeading
                label="INICIATIVAS DISPONÍVEIS"
                title={
                  <>
                    Formatos modulares para atender{" "}
                    <span className="text-[#84b306] font-semibold">
                      à sua realidade.
                    </span>
                  </>
                }
                description="Escolha a composição que melhor atende à sua empresa, escritório ou instituição de ensino."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {INITIATIVES.map((item) => (
                <div key={item.id} className="h-full">
                  <ServiceCard
                    variant="initiative"
                    title={item.title}
                    description={item.description}
                    iconName={item.iconName}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona o processo */}
        <section className="w-full py-20 sm:py-28 bg-[#F1F5DC]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl pb-14">
              <SectionHeading
                label="PASSO A PASSO"
                title={
                  <>
                    Como funciona o processo de{" "}
                    <span className="text-[#84b306] font-semibold">
                      contratação e implantação.
                    </span>
                  </>
                }
                description="Etapas claras e transparentes para viabilizar sua iniciativa sustentável com agilidade."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {etapasContratacao.map((item) => (
                <div
                  key={item.etapa}
                  className="bg-white p-7 rounded-2xl border border-[#E0E5D0] shadow-sm space-y-3"
                >
                  <span className="text-2xl font-bold text-[#84b306]">
                    {item.etapa}
                  </span>
                  <h3 className="text-lg font-bold text-[#10171D]">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-[#666B70] leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#10171D] text-white flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <h3 className="text-2xl font-bold">
                  Pronto para transformar o ambiente da sua organização?
                </h3>
                <p className="text-sm text-slate-300">
                  Nossos consultores estão à disposição para desenhar a solução ideal para o seu time.
                </p>
              </div>
              <Button variant="lime" size="md" withArrow href="/contato">
                Iniciar atendimento
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

