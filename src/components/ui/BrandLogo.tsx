import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export function BrandLogo({ className = "", theme = "light" }: BrandLogoProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Keep Amazon - Página Inicial"
    >
      {/* Emblema Oficial Keep Amazon */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center transform transition-transform group-hover:scale-105 duration-300">
        <Image
          src="/images/logo.png"
          alt="Keep Amazon Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Tipografia da Marca */}
      <div className="flex flex-col leading-none">
        <span
          className={`text-[16px] sm:text-[17px] font-bold tracking-tight ${
            isDark ? "text-[#10171D]" : "text-white"
          }`}
        >
          Keep
        </span>
        <span
          className={`text-[16px] sm:text-[17px] font-bold tracking-tight ${
            isDark ? "text-[#10171D]" : "text-white"
          }`}
        >
          Amazon
        </span>
      </div>
    </Link>
  );
}
