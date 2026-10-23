import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export function BrandLogo({ className = "", theme = "light" }: BrandLogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="#inicio"
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Keep Amazon - Página Inicial"
    >
      {/* Folha estilizada baseada no mockup */}
      <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform group-hover:scale-105 duration-300"
          aria-hidden="true"
        >
          {/* Contorno orgânico da folha */}
          <path
            d="M7 26.5C6.5 19.5 10 10.5 29 7C29 7 28.5 21 21.5 26.5C15.5 31.5 8 28.5 7 26.5Z"
            stroke="#C8F31D"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Nervura central */}
          <path
            d="M10 24C15 21 21 16 26.5 9.5"
            stroke="#C8F31D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Nervuras secundárias sutis */}
          <path
            d="M16 20C17.5 17.5 20 16.5 22 16"
            stroke="#C8F31D"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12.5 22.5C14 21 16 20.5 17.5 20.5"
            stroke="#C8F31D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Tipografia da Marca: Keep Amazon em duas linhas como no mockup */}
      <div className="flex flex-col leading-none">
        <span
          className={`text-[17px] font-semibold tracking-tight ${
            isDark ? "text-[#10171D]" : "text-white"
          }`}
        >
          Keep
        </span>
        <span
          className={`text-[17px] font-semibold tracking-tight ${
            isDark ? "text-[#10171D]" : "text-white"
          }`}
        >
          Amazon
        </span>
      </div>
    </Link>
  );
}

