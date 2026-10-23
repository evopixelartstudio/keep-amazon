"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BadgeStamp } from "@/components/ui/BadgeStamp";

interface HeroProps {
  onExploreClick?: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById("sobre");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    if (onExploreClick) onExploreClick();
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[760px] lg:min-h-[820px] w-full flex items-center justify-start overflow-hidden bg-[#10171D] pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Imagem de Fundo Cinematográfica Monocromática */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/01_hero_floresta_rio.png"
          alt="Floresta amazônica com rio e pessoa indígena contemplando a paisagem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-[82%_center] grayscale brightness-[0.88] contrast-[1.08]"
        />

        {/* Gradiente escuro à esquerda para legibilidade impecável dos textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10171D] via-[#10171D]/80 md:via-[#10171D]/65 to-transparent" />

        {/* Vinheta inferior sutil */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#10171D]/50 to-transparent" />
      </div>

      {/* Conteúdo Central Alinhado à Grade do Mockup */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-[780px] space-y-6 sm:space-y-8">
          {/* Eyebrow superior com traço lime */}
          <div className="inline-flex items-center gap-2.5">
            <span
              className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              BIOECONOMIA · PRODUTOS REGIONAIS · INOVAÇÃO
            </span>
          </div>

          {/* Headline Principal: exatamente com a quebra visual do mockup */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-semibold text-white tracking-tight leading-[1.08]">
            A floresta
            <br />
            gera valor.
            <br />
            <span className="inline-flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <span>Nós</span>
              <span className="inline-block bg-[#C8F31D] text-[#10171D] px-4 sm:px-6 py-0.5 sm:py-1 rounded-full font-semibold align-middle transform transition-transform hover:scale-[1.02]">
                conectamos.
              </span>
            </span>
          </h1>

          {/* Copy descritiva com tipografia Inter */}
          <p className="text-base sm:text-[17px] text-slate-300 leading-relaxed max-w-[530px] font-normal">
            A Keep Amazon é uma iniciativa que aproxima a floresta da cidade,
            valorizando produtos regionais, saberes locais e novas oportunidades
            por meio da bioeconomia, da inovação e do consumo consciente.
          </p>

          {/* Botão de Ação: CTA Principal Lime */}
          <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-7">
            <Button
              variant="lime"
              size="lg"
              withArrow
              href="#sobre"
              onClick={handleScrollToAbout}
            >
              Conheça a iniciativa
            </Button>
          </div>
        </div>
      </div>

      {/* Selo circular gráfico editorial posicionado como no mockup */}
      <div className="hidden sm:block absolute bottom-8 lg:bottom-12 right-6 sm:right-12 lg:right-24 z-10">
        <BadgeStamp />
      </div>
    </section>
  );
}
