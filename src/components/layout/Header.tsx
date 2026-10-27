"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  onOpenInterestModal?: () => void;
}

export function Header({ onOpenInterestModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (hash: string) => {
    if (pathname === "/") return hash;
    return `/${hash}`;
  };

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: getHref("#sobre") },
    { label: "Iniciativas", href: "/projetos-sustentaveis" },
    { label: "Produtos", href: "/produtos-amazonicos" },
    { label: "Bioeconomia", href: "/bioeconomia-amazonica" },
    { label: "Tá na Mão", href: "/ta-na-mao" },
    { label: "Contato", href: "/contato" },
  ];

  // Fecha o menu móvel ao clicar em um link
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.includes("#adesao") && onOpenInterestModal) {
      e.preventDefault();
      onOpenInterestModal();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#10171D]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg"
            : "bg-[#10171D]/80 backdrop-blur-sm py-4 sm:py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logotipo Keep Amazon */}
          <BrandLogo theme="light" />

          {/* Navegação Desktop */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-slate-200 hover:text-[#C8F31D] transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Ações à Direita: Busca e CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Campo de Busca Visual Retrátil */}
            <div className="relative flex items-center">
              {searchOpen ? (
                <div className="flex items-center bg-[#10171D]/80 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200">
                  <Search className="w-4 h-4 text-slate-300 mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar no site..."
                    className="bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none w-32 lg:w-40"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) setSearchOpen(false);
                    }}
                  />
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                    className="text-slate-400 hover:text-white ml-1 p-0.5"
                    aria-label="Fechar busca"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Pesquisar"
                  className="p-2 text-white/80 hover:text-[#C8F31D] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
                >
                  <Search className="w-4 h-4 stroke-[2]" />
                </button>
              )}
            </div>

            {/* Botão Aderir Agora */}
            <Button
              variant="lime"
              size="md"
              withArrow
              onClick={onOpenInterestModal}
            >
              Aderir agora
            </Button>
          </div>

          {/* Botão Hamburger Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2 text-white hover:text-[#C8F31D] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F31D] cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#10171D]/98 backdrop-blur-lg pt-24 px-6 pb-8 lg:hidden flex flex-col justify-between animate-in fade-in duration-200">
          <nav
            aria-label="Navegação Mobile"
            className="flex flex-col space-y-4 overflow-y-auto max-h-[70vh]"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium text-slate-100 hover:text-[#C8F31D] transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 space-y-4">
            <Button
              variant="lime"
              size="lg"
              withArrow
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInterestModal) onOpenInterestModal();
              }}
            >
              Aderir agora
            </Button>
            <p className="text-center text-xs text-slate-400">
              Floresta · Pessoas · Futuro
            </p>
          </div>
        </div>
      )}
    </>
  );
}
