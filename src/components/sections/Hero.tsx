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
      className="relative w-full overflow-hidden bg-[#10171D] pt-24 sm:pt-28 pb-16 lg:min-h-[820px] lg:pt-36 lg:pb-24 lg:flex lg:items-center"
    >
      {/* Desktop: Imagem de Fundo Luminous Bio-Map Conectando Rios e Cidade */}
      <div className="hidden lg:block absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero_manaus_map.jpg"
          alt="Mapa luminoso e rios da Amazônia conectando a floresta e a cidade"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[85%_center] brightness-[0.95] contrast-[1.08]"
        />

        {/* Gradiente escuro à esquerda para legibilidade impecável dos textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10171D] via-[#10171D]/75 md:via-[#10171D]/55 to-transparent" />

        {/* Vinheta inferior sutil */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#10171D]/50 to-transparent" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Mobile: Imagem de fundo/destaque visual que aparece primeiro, antes do texto */}
        <div className="block lg:hidden w-full mb-6 sm:mb-8">
          <div className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b1014]">
            <Image
              src="/images/hero_manaus_map.jpg"
              alt="Mapa luminoso e rios da Amazônia conectando a floresta e a cidade"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-center brightness-[1.0] contrast-[1.08]"
            />
            {/* Gradiente inferior para transição elegante */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10171D]/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

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

          {/* Headline Principal: Preserva o slogan institucional visualmente e atende ao H1 recomendado de SEO */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-semibold text-white tracking-tight leading-[1.08]">
            <span className="sr-only">
              Bioeconomia Amazônica, Produtos Regionais e Soluções Sustentáveis —{" "}
            </span>
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

          {/* Subtítulo institucional com palavras-chave estratégicas */}
          <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-[#C8F31D]/90">
            Bioeconomia Amazônica, Produtos Regionais e Soluções Sustentáveis
          </p>

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
