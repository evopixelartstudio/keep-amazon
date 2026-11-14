import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Ods {
  number: number;
  title: string;
  description: string;
  color: string;
  image: string;
}

/* 17 Objetivos de Desenvolvimento Sustentável (ONU / Agenda 2030) com as imagens oficiais originais */
const ODS_LIST: Ods[] = [
  {
    number: 1,
    title: "Erradicação da Pobreza",
    description:
      "Acabar com a pobreza em todas as suas formas, em todos os lugares, garantindo acesso a recursos, serviços básicos e proteção social.",
    color: "#E5243B",
    image: "/images/ods/ods-1.svg",
  },
  {
    number: 2,
    title: "Fome Zero e Agricultura Sustentável",
    description:
      "Acabar com a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável e familiar.",
    color: "#DDA63A",
    image: "/images/ods/ods-2.svg",
  },
  {
    number: 3,
    title: "Saúde e Bem-Estar",
    description:
      "Assegurar uma vida saudável e promover o bem-estar para todas as pessoas, em todas as idades.",
    color: "#4C9F38",
    image: "/images/ods/ods-3.svg",
  },
  {
    number: 4,
    title: "Educação de Qualidade",
    description:
      "Garantir educação inclusiva, equitativa e de qualidade, promovendo oportunidades de aprendizagem ao longo da vida.",
    color: "#C5192D",
    image: "/images/ods/ods-4.svg",
  },
  {
    number: 5,
    title: "Igualdade de Gênero",
    description:
      "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas, eliminando discriminação e violência.",
    color: "#FF3A21",
    image: "/images/ods/ods-5.svg",
  },
  {
    number: 6,
    title: "Água Potável e Saneamento",
    description:
      "Garantir disponibilidade e gestão sustentável da água e saneamento para todas as pessoas.",
    color: "#26BDE2",
    image: "/images/ods/ods-6.svg",
  },
  {
    number: 7,
    title: "Energia Limpa e Acessível",
    description:
      "Garantir acesso a fontes de energia confiáveis, sustentáveis, modernas e a preço acessível para todos.",
    color: "#FCC30B",
    image: "/images/ods/ods-7.svg",
  },
  {
    number: 8,
    title: "Trabalho Decente e Crescimento Econômico",
    description:
      "Promover crescimento econômico inclusivo e sustentável, emprego pleno e produtivo e trabalho digno para todos.",
    color: "#A21942",
    image: "/images/ods/ods-8.svg",
  },
  {
    number: 9,
    title: "Indústria, Inovação e Infraestrutura",
    description:
      "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
    color: "#FD6925",
    image: "/images/ods/ods-9.svg",
  },
  {
    number: 10,
    title: "Redução das Desigualdades",
    description:
      "Reduzir as desigualdades dentro dos países e entre eles, promovendo a inclusão social, econômica e política.",
    color: "#DD1367",
    image: "/images/ods/ods-10.svg",
  },
  {
    number: 11,
    title: "Cidades e Comunidades Sustentáveis",
    description:
      "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    color: "#FD9D24",
    image: "/images/ods/ods-11.svg",
  },
  {
    number: 12,
    title: "Consumo e Produção Responsáveis",
    description:
      "Assegurar padrões de produção e de consumo sustentáveis, reduzindo desperdícios e valorizando cadeias responsáveis.",
    color: "#BF8B2E",
    image: "/images/ods/ods-12.svg",
  },
  {
    number: 13,
    title: "Ação Contra a Mudança Global do Clima",
    description:
      "Tomar medidas urgentes para combater a mudança climática e seus impactos, fortalecendo a resiliência e a adaptação.",
    color: "#3F7E44",
    image: "/images/ods/ods-13.svg",
  },
  {
    number: 14,
    title: "Vida na Água",
    description:
      "Conservar e usar de forma sustentável os oceanos, rios e recursos aquáticos para o desenvolvimento sustentável.",
    color: "#0A97D9",
    image: "/images/ods/ods-14.svg",
  },
  {
    number: 15,
    title: "Vida Terrestre",
    description:
      "Proteger, recuperar e promover o uso sustentável das florestas e ecossistemas, deter a perda de biodiversidade e combater a desertificação.",
    color: "#56C02B",
    image: "/images/ods/ods-15.svg",
  },
  {
    number: 16,
    title: "Paz, Justiça e Instituições Eficazes",
    description:
      "Promover sociedades pacíficas e inclusivas, garantir acesso à justiça e construir instituições eficazes, responsáveis e transparentes.",
    color: "#00689D",
    image: "/images/ods/ods-16.svg",
  },
  {
    number: 17,
    title: "Parcerias e Meios de Implementação",
    description:
      "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.",
    color: "#19486A",
    image: "/images/ods/ods-17.svg",
  },
];

export function OdsSection() {
  return (
    <section
      id="ods"
      aria-labelledby="ods-heading"
      className="w-full py-20 sm:py-28 bg-white border-t border-[#E8EBDD]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        <div id="ods-heading" className="reveal-blur flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            label="AGENDA 2030 · ONU"
            title={
              <>
                Os 17 Objetivos de{" "}
                <span className="text-[#84b306] font-semibold">
                  Desenvolvimento Sustentável
                </span>
              </>
            }
            description="Os ODS são um apelo global da ONU para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas possam desfrutar de paz e prosperidade. A Keep Amazon orienta suas iniciativas por esses compromissos."
          />
          <div className="hidden md:flex items-center gap-3 flex-shrink-0 pb-2">
            <Image
              src="/images/ods/ods-wheel.png"
              alt="Mandala colorida dos 17 ODS da ONU"
              width={56}
              height={56}
              unoptimized
              className="w-14 h-14 object-contain"
            />
            <span className="text-xs font-semibold text-[#666B70] tracking-wider uppercase">
              Agenda 2030
              <br />
              Nações Unidas
            </span>
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {ODS_LIST.map(({ number, title, description, color, image }) => (
            <li
              key={number}
              className="group flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-[#F9FAF6] border border-[#E8EBDD] transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_-12px_rgba(16,23,29,0.18)] hover:-translate-y-0.5"
            >
              {/* Imagem original oficial do ODS */}
              <div className="relative flex-shrink-0 w-[84px] h-[84px] sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={image}
                  alt={`ODS ${number} - ${title}`}
                  width={96}
                  height={96}
                  unoptimized
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="space-y-1.5 pt-0.5 min-w-0">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#666B70]">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  ODS {number}
                </span>
                <h3 className="font-heading font-bold text-[#10171D] text-[15.5px] sm:text-base leading-snug">
                  {title}
                </h3>
                <p className="text-[13.5px] sm:text-sm text-[#666B70] leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="text-xs text-[#8A9096]">
          Fonte: Organização das Nações Unidas (ONU) — Agenda 2030 para o
          Desenvolvimento Sustentável. Imagens oficiais dos Objetivos de Desenvolvimento Sustentável.
        </p>
      </div>
    </section>
  );
}
