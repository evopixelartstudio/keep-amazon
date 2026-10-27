import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Contato e Parcerias | Keep Amazon",
  description:
    "Fale com a Keep Amazon em Manaus. Conecte sua empresa a projetos sustentáveis, palestras sobre bioeconomia e produtos regionais da Amazônia.",
  keywords: [
    "contato Keep Amazon",
    "bioeconomia em Manaus",
    "projetos sustentáveis para empresas",
    "produtos amazônicos em Manaus",
    "parcerias sustentáveis Amazônia",
  ],
  alternates: {
    canonical: `${siteUrl}/contato`,
  },
  openGraph: {
    title: "Contato e Parcerias | Keep Amazon",
    description:
      "Fale com a Keep Amazon. Conecte sua iniciativa à floresta e faça parte da bioeconomia amazônica.",
    url: `${siteUrl}/contato`,
  },
};

export default function ContatoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contato e Parcerias - Keep Amazon",
    description: "Canais de contato oficial da Keep Amazon em Manaus/AM.",
    url: `${siteUrl}/contato`,
  };

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
              items={[{ label: "Contato e Parcerias" }]}
              theme="dark"
            />

            <div className="max-w-3xl pt-6 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
                  ATENDIMENTO · PARCERIAS · MANAUS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Fale com a Keep Amazon: Conecte sua Iniciativa à Floresta
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Estamos prontos para atender sua empresa, escola ou comunidade.
                Seja para implementar o projeto Tá na Mão, agendar palestras ou
                adquirir produtos da Amazônia com procedência garantida, nossa
                equipe terá prazer em conversar.
              </p>
            </div>
          </div>
        </section>

        {/* Canais de Contato e Informações */}
        <section className="w-full py-20 sm:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Canais Diretos */}
              <div className="lg:col-span-5 space-y-8">
                <SectionHeading
                  label="CANAIS DIRETOS"
                  title={
                    <>
                      Estamos à disposição para{" "}
                      <span className="text-[#84b306] font-semibold">
                        conversar.
                      </span>
                    </>
                  }
                  description="Escolha o canal mais ágil para seu primeiro contato com nosso time em Manaus."
                />

                <div className="space-y-5">
                  <div className="p-6 rounded-2xl bg-[#F9FAF6] border border-[#E8EBDD] space-y-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#84b306]">
                      WhatsApp & Telefone
                    </span>
                    <p className="text-lg font-bold text-[#10171D]">
                      (92) 99999-9810
                    </p>
                    <p className="text-xs text-[#666B70]">
                      Atendimento rápido para dúvidas, orçamentos e agendamentos.
                    </p>
                    <div className="pt-2">
                      <a
                        href="https://wa.me/5592999999810"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#84b306] hover:underline"
                      >
                        Abrir conversa no WhatsApp →
                      </a>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F9FAF6] border border-[#E8EBDD] space-y-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#84b306]">
                      E-mail Institucional
                    </span>
                    <p className="text-lg font-bold text-[#10171D]">
                      contato@keepamazon.com.br
                    </p>
                    <p className="text-xs text-[#666B70]">
                      Para envio de propostas, parcerias institucionais e projetos corporativos.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F9FAF6] border border-[#E8EBDD] space-y-2">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#84b306]">
                      Sede Regional
                    </span>
                    <p className="text-base font-bold text-[#10171D]">
                      Av. Djalma Batista, 1661 - Manaus, AM, 69050-010
                    </p>
                    <p className="text-xs text-[#666B70]">
                      Atendimento presencial em Manaus e remoto para todo o Brasil.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bloco de Mensagem e Áreas de Interesse */}
              <div className="lg:col-span-7 bg-[#F1F5DC] p-8 sm:p-12 rounded-3xl border border-[#E0E5D0] space-y-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#666B70]">
                    COMO PODEMOS AJUDAR?
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#10171D]">
                    Identifique seu perfil para um atendimento personalizado
                  </h3>
                  <p className="text-sm sm:text-base text-[#666B70] leading-relaxed">
                    Nossa atuação engloba empresas de diferentes portes, instituições de ensino, cooperativas locais e pessoas que valorizam os produtos da Amazônia.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="bg-white p-5 rounded-xl border border-[#E0E5D0]">
                      <h4 className="font-bold text-[#10171D] text-sm">Empresas e ESG</h4>
                      <p className="text-xs text-[#666B70] mt-1">Palestras, estantes vivas corporativas e brindes sustentáveis.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-[#E0E5D0]">
                      <h4 className="font-bold text-[#10171D] text-sm">Escolas e Universidades</h4>
                      <p className="text-xs text-[#666B70] mt-1">Ações educativas, oficinas de plantio e conscientização.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-[#E0E5D0]">
                      <h4 className="font-bold text-[#10171D] text-sm">Produtores e Parceiros</h4>
                      <p className="text-xs text-[#666B70] mt-1">Integração de cadeias produtivas e valorização regional.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-[#E0E5D0]">
                      <h4 className="font-bold text-[#10171D] text-sm">Consumo Consciente</h4>
                      <p className="text-xs text-[#666B70] mt-1">Informações sobre produtos da Amazônia e projeto Tá na Mão.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#10171D]/10 flex flex-wrap items-center gap-4">
                  <Button
                    variant="dark"
                    size="lg"
                    withArrow
                    href="https://wa.me/5592999999810"
                  >
                    Conversar via WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href="mailto:contato@keepamazon.com.br"
                  >
                    Enviar e-mail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

