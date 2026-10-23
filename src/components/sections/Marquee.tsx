import React from "react";
import { MARQUEE_ITEMS } from "@/data/site-content";

export function Marquee() {
  // Duplicamos os itens para garantir um scroll contínuo e perfeito
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="w-full bg-[#C8F31D] py-3 sm:py-3.5 overflow-hidden select-none border-y border-[#b5de16]"
      aria-label="Destaques da iniciativa Keep Amazon"
    >
      <div className="flex animate-marquee items-center whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center mx-5 sm:mx-7">
            <span className="text-[13px] sm:text-sm font-semibold tracking-wide text-[#10171D] uppercase">
              {item}
            </span>
            <span
              className="ml-5 sm:ml-7 text-[#10171D] text-xs font-bold"
              aria-hidden="true"
            >
              ✱
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

