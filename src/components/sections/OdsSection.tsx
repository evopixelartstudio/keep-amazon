import React from "react";
import {
  HandHeart,
  Wheat,
  HeartPulse,
  GraduationCap,
  Venus,
  Droplets,
  Zap,
  TrendingUp,
  Factory,
  Equal,
  Building2,
  Recycle,
  CloudSun,
  Fish,
  TreePine,
  Landmark,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Ods {
  number: number;
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
}

/* Cores oficiais dos Objetivos de Desenvolvimento Sustentável (ONU / Agenda 2030) */
const ODS_LIST: Ods[] = [
  {
    number: 1,
    title: "Erradicação da Pobreza",
    description:
      "Acabar com a pobreza em todas as suas formas, em todos os lugares, garantindo acesso a recursos, serviços básicos e proteção social.",
    color: "#E5243B",
    icon: HandHeart,
  },
  {
    number: 2,
    title: "Fome Zero e Agricultura Sustentável",
    description:
      "Acabar com a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável e familiar.",
    color: "#DDA63A",
    icon: Wheat,
  },
  {
    number: 3,
    title: "Saúde e Bem-Estar",
    description:
      "Assegurar uma vida saudável e promover o bem-estar para todas as pessoas, em todas as idades.",
    color: "#4C9F38",
    icon: HeartPulse,
  },
  {
    number: 4,
    title: "Educação de Qualidade",
    description:
      "Garantir educação inclusiva, equitativa e de qualidade, promovendo oportunidades de aprendizagem ao longo da vida.",
    color: "#C5192D",
    icon: GraduationCap,
  },
  {
    number: 5,
    title: "Igualdade de Gênero",
    description:
      "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas, eliminando discriminação e violência.",
    color: "#FF3A21",
    icon: Venus,
  },
  {
    number: 6,
    title: "Água Potável e Saneamento",
    description:
      "Garantir disponibilidade e gestão sustentável da água e saneamento para todas as pessoas.",
    color: "#26BDE2",
    icon: Droplets,
  },
  {
    number: 7,
    title: "Energia Limpa e Acessível",
    description:
      "Garantir acesso a fontes de energia confiáveis, sustentáveis, modernas e a preço acessível para todos.",
    color: "#FCC30B",
    icon: Zap,
  },
  {
    number: 8,
    title: "Trabalho Decente e Crescimento Econômico",
    description:
      "Promover crescimento econômico inclusivo e sustentável, emprego pleno e produtivo e trabalho digno para todos.",
    color: "#A21942",
    icon: TrendingUp,
  },
  {
    number: 9,
    title: "Indústria, Inovação e Infraestrutura",
    description:
      "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
    color: "#FD6925",
    icon: Factory,
  },
  {
    number: 10,
    title: "Redução das Desigualdades",
    description:
      "Reduzir as desigualdades dentro dos países e entre eles, promovendo a inclusão social, econômica e política.",
    color: "#DD1367",
    icon: Equal,
  },
  {
    number: 11,
    title: "Cidades e Comunidades Sustentáveis",
    description:
      "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    color: "#FD9D24",
    icon: Building2,
  },
  {
    number: 12,
    title: "Consumo e Produção Responsáveis",
    description:
      "Assegurar padrões de produção e de consumo sustentáveis, reduzindo desperdícios e valorizando cadeias responsáveis.",
    color: "#BF8B2E",
    icon: Recycle,
  },
  {
    number: 13,
    title: "Ação Contra a Mudança Global do Clima",
    description:
      "Tomar medidas urgentes para combater a mudança climática e seus impactos, fortalecendo a resiliência e a adaptação.",
    color: "#3F7E44",
    icon: CloudSun,
  },
  {
    number: 14,
    title: "Vida na Água",
    description:
      "Conservar e usar de forma sustentável os oceanos, rios e recursos aquáticos para o desenvolvimento sustentável.",
    color: "#0A97D9",
    icon: Fish,
  },
  {
    number: 15,
    title: "Vida Terrestre",
    description:
      "Proteger, recuperar e promover o uso sustentável das florestas e ecossistemas, deter a perda de biodiversidade e combater a desertificação.",
    color: "#56C02B",
    icon: TreePine,
  },
  {
    number: 16,
    title: "Paz, Justiça e Instituições Eficazes",
    description:
      "Promover sociedades pacíficas e inclusivas, garantir acesso à justiça e construir instituições eficazes, responsáveis e transparentes.",
    color: "#00689D",
    icon: Landmark,
  },
  {
    number: 17,
    title: "Parcerias e Meios de Implementação",
    description:
      "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.",
    color: "#19486A",
    icon: Handshake,
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
        <div id="ods-heading" className="reveal-blur">
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
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {ODS_LIST.map(({ number, title, description, color, icon: Icon }) => (
            <li
              key={number}
              className="group flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-[#F9FAF6] border border-[#E8EBDD] transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_-12px_rgba(16,23,29,0.18)] hover:-translate-y-0.5"
            >
              {/* Ícone colorido no padrão visual oficial dos ODS */}
              <div
                className="relative flex-shrink-0 w-[84px] h-[84px] sm:w-24 sm:h-24 rounded-xl text-white flex flex-col justify-between p-2.5 shadow-sm"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              >
                <span className="font-heading font-extrabold text-[22px] sm:text-[26px] leading-none tracking-tight">
                  {number}
                </span>
                <Icon
                  className="w-8 h-8 sm:w-9 sm:h-9 self-center transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.8}
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
          Desenvolvimento Sustentável.
        </p>
      </div>
    </section>
  );
}
