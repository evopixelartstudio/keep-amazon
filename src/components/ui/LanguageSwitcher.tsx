"use client";

import React, { useSyncExternalStore } from "react";
import { getInitialLang, LANG_EVENT, setLang, type Lang } from "@/lib/i18n";

function FlagBR() {
  return (
    <svg viewBox="0 0 28 20" aria-hidden="true" className="w-full h-full">
      <rect width="28" height="20" fill="#009C3B" />
      <polygon points="14,2.4 25.6,10 14,17.6 2.4,10" fill="#FFDF00" />
      <circle cx="14" cy="10" r="4.7" fill="#002776" />
      <path d="M9.5 9.1 Q14 7.4 18.6 10.6" stroke="#fff" strokeWidth="1" fill="none" />
    </svg>
  );
}

function FlagUS() {
  const stripes = Array.from({ length: 7 }, (_, i) => i * 2);
  const h = 20 / 13;
  return (
    <svg viewBox="0 0 28 20" aria-hidden="true" className="w-full h-full">
      <rect width="28" height="20" fill="#fff" />
      {stripes.map((s) => (
        <rect key={s} y={s * h} width="28" height={h} fill="#B22234" />
      ))}
      <rect width="12" height={h * 7} fill="#3C3B6E" />
      {[2, 5, 8].map((y) =>
        [2, 6, 10].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.7" fill="#fff" />)
      )}
    </svg>
  );
}

function FlagES() {
  return (
    <svg viewBox="0 0 28 20" aria-hidden="true" className="w-full h-full">
      <rect width="28" height="20" fill="#AA151B" />
      <rect y="5" width="28" height="10" fill="#F1BF00" />
    </svg>
  );
}

const OPTIONS: { lang: Lang; label: string; Flag: () => React.ReactElement }[] = [
  { lang: "pt", label: "Português", Flag: FlagBR },
  { lang: "en", label: "English", Flag: FlagUS },
  { lang: "es", label: "Español", Flag: FlagES },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const current = useSyncExternalStore<Lang>(
    (onChange) => {
      window.addEventListener(LANG_EVENT, onChange);
      return () => window.removeEventListener(LANG_EVENT, onChange);
    },
    getInitialLang,
    () => "pt"
  );

  return (
    <div
      role="group"
      aria-label="Idioma / Language / Idioma"
      data-no-translate
      className={`inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 ${className}`}
    >
      {OPTIONS.map(({ lang, label, Flag }) => {
        const active = current === lang;
        return (
          <button
            key={lang}
            type="button"
            lang={lang}
            onClick={() => setLang(lang)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`relative flex items-center justify-center w-9 h-7 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F31D] ${
              active ? "bg-[#C8F31D]" : "hover:bg-white/10"
            }`}
          >
            <span
              className={`block w-6 h-[17px] rounded-[3px] overflow-hidden shadow-sm ring-1 ring-black/20 transition-opacity ${
                active ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Flag />
            </span>
          </button>
        );
      })}
    </div>
  );
}
