import React from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "dark" | "outline" | "play";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "lime",
  size = "md",
  withArrow = false,
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    lime: "bg-[#C8F31D] text-[#10171D] hover:bg-[#d4f73e] hover:shadow-[0_0_20px_rgba(200,243,29,0.35)] focus-visible:ring-[#C8F31D]",
    dark: "bg-[#10171D] text-white hover:bg-[#1a2530] border border-[#22303c] focus-visible:ring-[#10171D]",
    outline:
      "bg-transparent text-[#10171D] border border-[#10171D]/20 hover:bg-[#10171D]/5 focus-visible:ring-[#10171D]",
    play: "bg-transparent text-white hover:text-[#C8F31D] p-0 gap-3 border-none shadow-none font-normal",
  };

  const content = (
    <>
      {variant === "play" ? (
        <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-white/5 backdrop-blur-xs transition-transform group-hover:scale-105 group-hover:border-[#C8F31D]">
          <Play className="w-4 h-4 fill-white text-white ml-0.5" />
        </span>
      ) : null}

      <span>{children}</span>

      {withArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${
    variant === "play" ? "" : sizeStyles[size]
  } ${variantStyles[variant]} group ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

