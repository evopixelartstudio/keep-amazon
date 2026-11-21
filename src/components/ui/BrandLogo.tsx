import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  /** "light" = logo para fundos escuros (texto branco); "dark" = logo para fundos claros (texto escuro) */
  theme?: "light" | "dark";
}

export function BrandLogo({ className = "", theme = "light" }: BrandLogoProps) {
  const src =
    theme === "dark"
      ? "/images/logo-keep-amazon-dark.png"
      : "/images/logo-keep-amazon.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center flex-shrink-0 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Keep Amazon - Página Inicial"
    >
      <Image
        src={src}
        alt="Keep Amazon"
        width={800}
        height={417}
        sizes="120px"
        className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
        priority
      />
    </Link>
  );
}
