import React from "react";
import {
  Volume2,
  Wrench,
  Users,
  CalendarCheck,
  Gift,
  Package,
  Sprout,
  BookOpen,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  variant?: "initiative" | "pillar";
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  presentation: Volume2,
  wrench: Wrench,
  users: Users,
  calendar: CalendarCheck,
  gift: Gift,
  package: Package,
  leaf: Sprout,
  book: BookOpen,
  shield: ShieldCheck,
};

export function ServiceCard({
  title,
  description,
  iconName,
  variant = "initiative",
  className = "",
}: ServiceCardProps) {
  const IconComponent = iconMap[iconName] || Sprout;

  if (variant === "pillar") {
    return (
      <div className={`flex flex-col space-y-3 p-1 sm:p-2 group ${className}`}>
        {/* Ícone com fundo soft lime circular verde sutil conforme mockup */}
        <div className="w-11 h-11 rounded-full bg-[#F1F5DC] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
          <IconComponent className="w-5 h-5 text-[#7ca605] stroke-[1.8]" />
        </div>

        {/* Título do Pilar */}
        <h3 className="text-lg sm:text-[19px] font-semibold text-[#10171D] tracking-tight">
          {title}
        </h3>

        {/* Descrição */}
        <p className="text-sm leading-relaxed text-[#666B70]">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-white border border-[#E8EBDD] rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#C8F31D] hover:shadow-[0_8px_24px_rgba(16,23,29,0.06)] hover:-translate-y-1 group ${className}`}
    >
      <div className="space-y-4">
        {/* Ícone com fundo soft lime arredondado */}
        <div className="w-10 h-10 rounded-xl bg-[#F1F5DC] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
          <IconComponent className="w-5 h-5 text-[#10171D] stroke-[1.8]" />
        </div>

        <div className="space-y-1.5">
          {/* Título do Card */}
          <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#10171D] tracking-tight">
            {title}
          </h3>

          {/* Descrição */}
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#666B70]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

