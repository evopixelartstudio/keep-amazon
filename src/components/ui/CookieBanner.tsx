"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const COOKIE_CONSENT_KEY = "ka_cookie_consent";
export const OPEN_COOKIE_BANNER_EVENT = "ka:open-cookie-banner";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsent(choice: Choice) {
  window.gtag?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });
  window.dispatchEvent(new Event("ka:consent-updated"));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch {}
    if (stored !== "granted" && stored !== "denied") setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_BANNER_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_BANNER_EVENT, reopen);
  }, []);

  const choose = (choice: Choice) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    } catch {}
    applyConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-[960px] rounded-2xl border border-white/10 bg-[#10171D]/95 backdrop-blur-md shadow-2xl px-5 py-5 sm:px-7 sm:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-sm text-slate-300 leading-relaxed flex-1">
          Usamos cookies para entender como o site é utilizado e melhorar sua
          experiência. Você pode aceitar ou recusar os cookies de medição. Saiba
          mais na nossa{" "}
          <Link
            href="/politica-de-privacidade#cookies"
            className="text-[#C8F31D] underline underline-offset-2 hover:text-white"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="flex-1 md:flex-none rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F31D]"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="flex-1 md:flex-none rounded-full bg-[#C8F31D] px-5 py-2.5 text-sm font-semibold text-[#10171D] hover:brightness-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_BANNER_EVENT))}
      className={className}
    >
      Preferências de cookies
    </button>
  );
}
