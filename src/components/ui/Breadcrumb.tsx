import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: "dark" | "light";
}

export function Breadcrumb({ items, theme = "dark" }: BreadcrumbProps) {
  const isDark = theme === "dark";

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              isDark
                ? "text-slate-400 hover:text-[#C8F31D]"
                : "text-slate-500 hover:text-[#84b306]"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-2">
              <ChevronRight
                className={`w-3.5 h-3.5 flex-shrink-0 ${
                  isDark ? "text-slate-600" : "text-slate-400"
                }`}
                aria-hidden="true"
              />
              {isLast || !item.href ? (
                <span
                  className={`font-medium ${
                    isDark ? "text-slate-200" : "text-[#10171D]"
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark
                      ? "text-slate-400 hover:text-[#C8F31D]"
                      : "text-slate-500 hover:text-[#84b306]"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

