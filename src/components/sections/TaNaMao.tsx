import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface TaNaMaoProps {
  onLearnMoreClick?: () => void;
}

export function TaNaMao({ onLearnMoreClick }: TaNaMaoProps) {
  return (
    <section id="produtos" className="w-full bg-[#F1F5DC] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna 1: Fotografia Monocromática da Muda em Mãos com elemento decorativo */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center reveal-scale-blur">
            <div className="relative w-full max-w-[360px] lg:max-w-none h-[320px] sm:h-[380px] lg:h-[400px]">
              {/* Elemento geométrico decorativo lime no canto superior esquerdo */}
              <div
                className="absolute -top-2 -left-2 w-7 h-7 sm:w-8 sm:h-8 bg-[#C8F31D] rounded-sm z-20 pointer-events-none shadow-sm"
                aria-hidden="true"
              />

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src="/images/03_muda_maos.png"
                  alt="Mãos segurando com cuidado uma pequena muda em terra fértil amazônica"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover grayscale contrast-110 brightness-95 group-hover:scale-102 transition-transform duration-500 rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Coluna 2: Conteúdo Central do Projeto Tá na Mão */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-6 text-center lg:text-left px-2 sm:px-4 reveal-blur delay-100">
            <SectionHeading
              label="PROJETO EM DESTAQUE"
              title={
                <>
                  Conheça o projeto{" "}
                  <span className="text-[#84b306] font-semibold">Tá na Mão</span>
                </>
              }
              align="left"
              className="[&>div]:justify-center lg:[&>div]:justify-start"
            />

            <p className="text-base sm:text-[16px] text-[#666B70] leading-relaxed">
              Uma estante viva, com hortaliças e produtos regionais, que une o
              útil ao educativo. O projeto Tá na Mão leva para perto das pessoas o
              que a Amazônia tem de melhor, com informações sobre origem, formas de
              uso e benefícios para o dia a dia.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start gap-4">
              <Button
                variant="dark"
                size="md"
                withArrow
                href="/ta-na-mao"
              >
                Ver detalhes do projeto
              </Button>
            </div>
          </div>

          {/* Coluna 3: Fotografia da Estante com elemento decorativo lime inferior */}
          <div className="lg:col-span-4 order-3 flex justify-center reveal-scale-blur delay-200">
            <div className="relative w-full max-w-[360px] lg:max-w-none h-[320px] sm:h-[380px] lg:h-[400px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src="/images/04_estante_hortalicas.jpg"
                  alt="Estante viva com hortaliças e produtos regionais amazônicos"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover grayscale contrast-110 brightness-95 group-hover:scale-102 transition-transform duration-500 rounded-2xl"
                />
              </div>

              {/* Elemento geométrico decorativo lime no canto inferior esquerdo */}
              <div
                className="absolute -bottom-2 -left-2 w-7 h-7 sm:w-8 sm:h-8 bg-[#C8F31D] rounded-sm z-20 pointer-events-none shadow-sm"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
