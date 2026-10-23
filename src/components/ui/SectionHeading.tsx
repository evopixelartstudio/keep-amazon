import React from "react";

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-4 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      {/* Label superior com traço lime */}
      <div
        className={`inline-flex items-center gap-2.5 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span
          className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
          aria-hidden="true"
        />
        <span
          className={`text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase ${
            isDark ? "text-slate-300" : "text-[#666B70]"
          }`}
        >
          {label}
        </span>
      </div>

      {/* Título com tipografia Plus Jakarta Sans */}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-[1.14] tracking-[-0.02em] ${
          isDark ? "text-white" : "text-[#10171D]"
        }`}
      >
        {title}
      </h2>

      {/* Descrição opcional */}
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            isDark ? "text-slate-300" : "text-[#666B70]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

