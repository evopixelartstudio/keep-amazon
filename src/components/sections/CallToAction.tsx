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
      className="w-full bg-[#10171D] py-20 sm:py-28 lg:py-32 relative overflow-hidden text-white"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna Esquerda: Título com highlight lime */}
          <div className="lg:col-span-4 reveal-blur">
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

          {/* Coluna Central: Texto de apoio e CTA Lime */}
          <div className="lg:col-span-4 space-y-6 reveal-blur delay-100">
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

          {/* Coluna Direita: Fotografia Monocromática Mãos com Frutos Regionais */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end reveal-scale-blur delay-200">
            <div className="relative w-full max-w-[340px] h-[240px] sm:h-[280px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/images/02_maos_frutos.png"
                alt="Mãos segurando frutos regionais da biodiversidade amazônica"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover object-center grayscale contrast-115 brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Vinheta escura na borda esquerda para fusão elegante com o fundo Dark Ink */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#10171D] to-transparent pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_24px_rgba(16,23,29,0.7)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
