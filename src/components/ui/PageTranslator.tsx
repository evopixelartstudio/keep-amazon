"use client";

import { useEffect } from "react";
import { TRANSLATIONS } from "@/data/translations";
import { getInitialLang, HTML_LANG, LANG_EVENT, type Lang } from "@/lib/i18n";

const ATTRS = ["placeholder", "aria-label", "alt", "title"];
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "CODE", "svg"]);

type Record_ = { pt: string; out: string };

const normalize = (s: string) => s.replace(/\s+/g, " ").trim();

/**
 * Traduz o site no navegador.
 * O português é o texto original renderizado pelo React; cada texto/atributo
 * que existe no dicionário (src/data/translations.ts) é trocado pela versão
 * em inglês ou espanhol. Um MutationObserver traduz também o que o React
 * renderiza depois (menu mobile, modal, mudança de página, etc.).
 */
export function PageTranslator() {
  useEffect(() => {
    let lang: Lang = getInitialLang();
    const textOrig = new WeakMap<Text, Record_>();
    const attrOrig = new WeakMap<Element, Record<string, Record_>>();

    const translate = (pt: string): string | null => {
      if (lang === "pt") return null;
      const entry = TRANSLATIONS[normalize(pt)];
      return entry ? entry[lang === "en" ? 0 : 1] : null;
    };

    const withSpacing = (pt: string, tr: string) =>
      (pt.match(/^\s*/)?.[0] ?? "") + tr + (pt.match(/\s*$/)?.[0] ?? "");

    const handleText = (node: Text) => {
      const current = node.nodeValue ?? "";
      const rec = textOrig.get(node);
      const pt = rec && current === rec.out ? rec.pt : current;
      const tr = translate(pt);
      const out = tr ? withSpacing(pt, tr) : pt;
      if (!rec && !tr) return;
      textOrig.set(node, { pt, out });
      if (out !== current) node.nodeValue = out;
    };

    const handleAttrs = (el: Element) => {
      for (const attr of ATTRS) {
        const current = el.getAttribute(attr);
        if (current === null) continue;
        const recs = attrOrig.get(el) ?? {};
        const rec = recs[attr];
        const pt = rec && current === rec.out ? rec.pt : current;
        const tr = translate(pt);
        const out = tr ?? pt;
        if (!rec && !tr) continue;
        recs[attr] = { pt, out };
        attrOrig.set(el, recs);
        if (out !== current) el.setAttribute(attr, out);
      }
    };

    const isSkipped = (el: Element) =>
      SKIP_TAGS.has(el.tagName) || el.hasAttribute("data-no-translate");

    const walk = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) {
        const parent = root.parentElement;
        if (parent && !parent.closest("[data-no-translate], script, style, textarea, svg")) {
          handleText(root as Text);
        }
        return;
      }
      if (root.nodeType !== Node.ELEMENT_NODE) return;
      const rootEl = root as Element;
      if (isSkipped(rootEl) || rootEl.closest("[data-no-translate]")) return;
      handleAttrs(rootEl);

      const walker = document.createTreeWalker(
        rootEl,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
        {
          acceptNode: (n) =>
            n.nodeType === Node.ELEMENT_NODE && isSkipped(n as Element)
              ? NodeFilter.FILTER_REJECT
              : NodeFilter.FILTER_ACCEPT,
        }
      );
      let n = walker.nextNode();
      while (n) {
        if (n.nodeType === Node.TEXT_NODE) handleText(n as Text);
        else handleAttrs(n as Element);
        n = walker.nextNode();
      }
    };

    const apply = () => {
      document.documentElement.lang = HTML_LANG[lang];
      walk(document.body);
    };

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "childList") {
          m.addedNodes.forEach(walk);
        } else if (m.type === "characterData") {
          walk(m.target);
        } else if (m.type === "attributes" && m.target.nodeType === Node.ELEMENT_NODE) {
          const el = m.target as Element;
          if (!el.closest("[data-no-translate]")) handleAttrs(el);
        }
      }
      // descarta as mutações geradas pela própria tradução
      observer.takeRecords();
    });

    apply();
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRS,
    });

    const onLangChange = (e: Event) => {
      lang = (e as CustomEvent<Lang>).detail;
      apply();
      observer.takeRecords();
    };
    window.addEventListener(LANG_EVENT, onLangChange);

    return () => {
      observer.disconnect();
      window.removeEventListener(LANG_EVENT, onLangChange);
    };
  }, []);

  return null;
}
