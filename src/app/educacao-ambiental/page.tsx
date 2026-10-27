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
  title: "Educação Ambiental para Empresas | Keep Amazon",
  description:
    "Palestras sobre sustentabilidade e ações de educação ambiental para empresas. Conecte sua equipe à bioeconomia, ESG e conservação da Amazônia.",
  keywords: [
    "educação ambiental para empresas",
    "palestras sobre sustentabilidade",
    "projetos sustentáveis para empresas",
    "soluções sustentáveis para empresas",
    "bioeconomia amazônica",
    "sustentabilidade na Amazônia",
  ],
  alternates: {
    canonical: `${siteUrl}/educacao-ambiental`,
  },
  openGraph: {
    title: "Educação Ambiental para Empresas | Keep Amazon",
    description:
      "Ações educativas corporativas, palestras e experiências práticas que conectam empresas à preservação da Amazônia.",
    url: `${siteUrl}/educacao-ambiental`,
    images: [
      {
        url: "/images/09_palestra.png",
        width: 1200,
        height: 630,
        alt: "Palestras e Educação Ambiental Keep Amazon",
      },
    ],
  },
};

export default function EducacaoAmbientalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Educação Ambiental e Experiências Sustentáveis para Empresas",
    description:
      "Palestras sobre sustentabilidade, oficinas de cultivo consciente e capacitação corporativa para metas ESG.",
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

  const formatosEducacao = [
    {
      title: "Palestras Inspiradoras sobre Sustentabilidade",
      description:
        "Apresentações imersivas conduzidas por especialistas que abordam os desafios climáticos, a importância da floresta em pé e como as empresas podem agir com responsabilidade real e impacto mensurável.",
      icon: "01",
    },
    {
      title: "Educação Integrada com Estantes Vivas",
      description:
        "A horta e as plantas regionais como ferramentas de aprendizado diário no ambiente corporativo, estimulando a alimentação saudável, o cuidado contínuo e a conexão com a terra.",
      icon: "02",
    },
    {
      title: "Workshops Práticos e Vivências ESG",
      description:
        "Dinâmicas que engajam colaboradores em práticas de consumo consciente, descarte responsável e valorização da biodiversidade brasileira no cotidiano da organização.",
      icon: "03",
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
              items={[{ label: "Educação Ambiental" }]}
              theme="dark"
            />

            <div className="max-w-3xl pt-6 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
                  ESG · FORMAÇÃO CORPORATIVA · SENSIBILIZAÇÃO
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Educação Ambiental e Experiências Sustentáveis para Empresas
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Transforme a cultura da sua empresa aproximando sua equipe da realidade
                amazônica. Nossas ações de educação ambiental traduzem os princípios ESG
                em conhecimento prático, engajamento e transformação sustentável.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="lime" size="md" withArrow href="/contato">
                  Agendar palestra para minha empresa
                </Button>
                <Button variant="outline" size="md" href="/projetos-sustentaveis">
                  Ver projetos sustentáveis completos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Apresentação do Serviço com Imagem Real */}
        <section className="w-full py-20 sm:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <SectionHeading
                  label="APRENDIZADO QUE TRANSFORMA"
                  title={
                    <>
                      Conhecimento que conecta{" "}
                      <span className="text-[#84b306] font-semibold">
                        pessoas e propósito.
                      </span>
                    </>
                  }
                />
                <div className="space-y-4 text-base text-[#666B70] leading-relaxed">
                  <p>
                    A sustentabilidade empresarial não começa em relatórios técnicos,
                    mas na consciência de cada colaborador. Através de palestras e
                    ações educativas, desmistificamos a bioeconomia e mostramos como as
                    escolhas diárias impactam a conservação da Amazônia.
                  </p>
                  <p>
                    Nossas intervenções combinam conteúdo técnico atualizado sobre clima,
                    biodiversidade e economia circular com experiências sensoriais que
                    aproximam a floresta do dia a dia da sua organização.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-[#E8EBDD]">
                  <Image
                    src="/images/09_palestra.png"
                    alt="Palestra de sustentabilidade e educação ambiental da Keep Amazon"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Formatos */}
            <div className="mt-20">
              <div className="max-w-2xl pb-10">
                <SectionHeading
                  label="FORMATOS DISPONÍVEIS"
                  title={
                    <>
                      Soluções educativas sob medida para o{" "}
                      <span className="text-[#84b306] font-semibold">
                        seu time.
                      </span>
                    </>
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {formatosEducacao.map((item) => (
                  <div
                    key={item.title}
                    className="p-8 rounded-2xl bg-[#F9FAF6] border border-[#E8EBDD] space-y-4"
                  >
                    <span className="text-xl font-mono font-bold text-[#84b306] bg-[#84b306]/10 px-3 py-1 rounded-md inline-block">
                      {item.icon}
                    </span>
                    <h3 className="text-xl font-bold text-[#10171D]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666B70] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA para Contato */}
        <section className="w-full py-16 sm:py-20 bg-[#F1F5DC]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#10171D]">
              Leve uma experiência transformadora para sua instituição
            </h2>
            <p className="text-base text-[#666B70] max-w-2xl mx-auto leading-relaxed">
              Atendemos empresas em Manaus e em todo o território nacional com opções presenciais e projetos integrados de sustentabilidade.
            </p>
            <div className="pt-2">
              <Button variant="dark" size="lg" withArrow href="/contato">
                Fale conosco para agendar
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

