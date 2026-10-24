import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PILLARS } from "@/data/site-content";

interface AboutProps {
  onLearnMoreClick?: () => void;
}

export function About({ onLearnMoreClick }: AboutProps) {
  return (
    <section id="sobre" className="w-full bg-white py-20 sm:py-28 lg:py-36">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Texto editorial e chamada */}
          <div className="lg:col-span-5 space-y-7">
            <div className="reveal-blur">
              <SectionHeading
                label="SOBRE A KEEP AMAZON"
                title={
                  <>
                    Mais que produtos,
                    <br />
                    um{" "}
                    <span className="text-[#84b306] font-semibold">
                      movimento.
                    </span>
                  </>
                }
              />
            </div>

            <div className="space-y-4 text-base sm:text-[16px] text-[#666B70] leading-relaxed reveal-blur delay-200">
              <p>
                Somos uma ponte entre a riqueza da Amazônia e o futuro sustentável.
                Atuamos para que produtos da floresta ganhem espaço, valor e novas
                possibilidades.
              </p>
              <p>
                Conectamos produtores, comunidades, empresas e consumidores,
                promovendo a bioeconomia como motor de desenvolvimento, inclusão
                e preservação.
              </p>
            </div>

            <div className="pt-2 reveal-blur delay-300">
              <Button
                variant="dark"
                size="md"
                withArrow
                href="#adesao"
                onClick={onLearnMoreClick}
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Coluna Direita: Grid 2x2 dos 4 Pilares Estratégicos */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {PILLARS.map((pillar, index) => (
                <div
                  key={pillar.id}
                  className={`reveal-blur delay-${(index + 1) * 100}`}
                >
                  <ServiceCard
                    variant="pillar"
                    title={pillar.title}
                    description={pillar.description}
                    iconName={pillar.iconName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
