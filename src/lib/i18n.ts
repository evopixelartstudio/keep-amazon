export type Lang = "pt" | "en" | "es";

export const LANGS: Lang[] = ["pt", "en", "es"];
export const LANG_STORAGE_KEY = "keepamazon-lang";
export const LANG_EVENT = "keepamazon:langchange";
export const HTML_LANG: Record<Lang, string> = { pt: "pt-BR", en: "en", es: "es" };

function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as string[]).includes(value);
}

/**
 * Idioma inicial: ?lang= na URL > escolha salva > idioma do navegador > português.
 */
export function getInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (isLang(fromUrl)) {
      localStorage.setItem(LANG_STORAGE_KEY, fromUrl);
      return fromUrl;
    }
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // localStorage indisponível (modo privado etc.)
  }
  const nav = (navigator.language || "").slice(0, 2).toLowerCase();
  if (nav === "en" || nav === "es") return nav;
  return "pt";
}

export function setLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // ignora
  }
  window.dispatchEvent(new CustomEvent<Lang>(LANG_EVENT, { detail: lang }));
}
