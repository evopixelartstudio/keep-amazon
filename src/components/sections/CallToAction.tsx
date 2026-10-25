import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface CallToActionProps {
  onJoinClick?: () => void;
}

export function CallToAction({ onJoinClick }: CallToActionProps) {
  return (
    <section
      id="adesao"
      className="w-full bg-[#10171D] py-24 sm:py-32 lg:py-36 relative overflow-hidden text-white flex items-center min-h-[480px]"
    >
      {/* Imagem de Fundo com Degradê à Esquerda */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/02_maos_frutos.png"
          alt="Mãos segurando frutos regionais da biodiversidade amazônica"
          fill
          sizes="100vw"
          className="object-cover object-right grayscale contrast-115 brightness-90"
        />
        {/* Degradê escuro à esquerda para legibilidade e transição suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10171D] via-[#10171D]/90 to-[#10171D]/50 md:bg-gradient-to-r md:from-[#10171D] md:via-[#10171D]/90 md:via-55% md:to-[#10171D]/20" />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center max-w-[960px]">
          {/* Coluna Esquerda: Título com highlight lime */}
          <div className="reveal-blur">
            <SectionHeading
              theme="dark"
              label="FAÇA PARTE"
              title={
                <>
                  Juntos, podemos
                  <br />
                  ir{" "}
                  <span className="text-[#C8F31D] font-semibold">
                    mais longe.
                  </span>
                </>
              }
            />
          </div>

          {/* Coluna Direita: Texto de apoio e CTA Lime */}
          <div className="space-y-6 reveal-blur delay-100">
            <p className="text-base sm:text-[16px] text-slate-300 leading-relaxed font-normal">
              Seja um parceiro, um produtor, um apoiador ou um consumidor
              consciente. A Keep Amazon é para todos que acreditam em um futuro
              mais justo, sustentável e conectado com a nossa terra.
            </p>

            <div className="pt-2">
              <Button
                variant="lime"
                size="lg"
                withArrow
                onClick={onJoinClick}
              >
                Quero fazer parte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
