import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { INITIATIVES } from "@/data/site-content";

interface SolutionsProps {
  onExploreOptionsClick?: () => void;
}

export function Solutions({ onExploreOptionsClick }: SolutionsProps) {
  return (
    <section id="iniciativas" className="w-full bg-white py-20 sm:py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho da Seção em Duas Colunas */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-[#E8EBDD]/60">
          <div className="max-w-xl reveal-blur">
            <SectionHeading
              label="NOSSAS INICIATIVAS"
              title={
                <>
                  Soluções para um
                  <br />
                  futuro mais{" "}
                  <span className="text-[#84b306] font-semibold">
                    sustentável.
                  </span>
                </>
              }
            />
          </div>

          <div className="max-w-md space-y-5 reveal-blur delay-100">
            <p className="text-sm sm:text-[15px] text-[#666B70] leading-relaxed">
              A Keep Amazon oferece diferentes formas de participação e acesso aos
              nossos produtos e projetos. Escolha a que mais faz sentido para
              você e faça parte dessa transformação.
            </p>
            <Button
              variant="dark"
              size="md"
              withArrow
              href="#adesao"
              onClick={onExploreOptionsClick}
            >
              Ver todas as opções
            </Button>
          </div>
        </div>

        {/* Grade com os 6 Cards Horizontais */}
        <div className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {INITIATIVES.map((item, index) => (
            <div
              key={item.id}
              className={`reveal-blur delay-${(index + 1) * 100}`}
            >
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
  );
}
