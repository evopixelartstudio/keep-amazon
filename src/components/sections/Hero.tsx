"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
      {/* Imagem de fundo: mapa luminoso da cidade (mobile e desktop) */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/hero_city_map.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Mobile: véu escuro vertical para legibilidade do texto sobre a imagem */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-[#10171D]/70 via-[#10171D]/80 to-[#10171D]/95" />

        {/* Desktop: degradê suave da esquerda (texto) para a direita (imagem) */}
        <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,rgba(16,23,29,0.96)_0%,rgba(16,23,29,0.88)_30%,rgba(16,23,29,0.55)_55%,rgba(16,23,29,0.15)_80%,rgba(16,23,29,0)_100%)]" />

        {/* Vinheta inferior sutil */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#10171D]/60 to-transparent" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-[780px] space-y-6 sm:space-y-8">
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

          {/* Copy descritiva com tipografia Inter */}
          <p className="text-base sm:text-[17px] text-slate-300 leading-relaxed max-w-[530px] font-normal">
            A Keep Amazon é uma iniciativa que aproxima a floresta da cidade,
            valorizando produtos regionais, saberes locais e novas oportunidades
            por meio da bioeconomia, da inovação e do consumo consciente.
          </p>

          {/* Botões de Ação: CTA principal + contato via WhatsApp */}
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
            <a
              href="https://wa.me/5568981000548?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Keep%20Amazon%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entrar em contato pelo WhatsApp"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C8F31D] hover:text-[#C8F31D] hover:shadow-[0_0_20px_rgba(200,243,29,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F31D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10171D] active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#C8F31D]" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
