import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/site-content";

interface FooterProps {
  onOpenInterestModal?: () => void;
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function Footer({ onOpenInterestModal }: FooterProps) {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "instagram":
        return <InstagramIcon />;
      case "youtube":
        return <YoutubeIcon />;
      case "message-circle":
        return <WhatsAppIcon />;
      default:
        return null;
    }
  };

  return (
    <footer id="contato" className="w-full bg-[#10171D] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Linha Superior: Marca, Navegação, Redes e Frase */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10 text-center lg:text-left">
          {/* Logotipo Keep Amazon */}
          <div>
            <BrandLogo theme="light" />
          </div>

          {/* Menu de Navegação Horizontal */}
          <nav
            aria-label="Navegação do Rodapé"
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={
                  item.href === "#adesao" && onOpenInterestModal
                    ? (e) => {
                        e.preventDefault();
                        onOpenInterestModal();
                      }
                    : undefined
                }
                className="text-xs sm:text-sm text-slate-300 hover:text-[#C8F31D] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Redes Sociais e Frase Conceitual */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Acessar canal da Keep Amazon no ${social.label}`}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#C8F31D] hover:border-[#C8F31D] hover:bg-white/10 transition-colors"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            <div className="hidden sm:block w-px h-5 bg-white/20" />

            <span className="text-xs text-slate-400 tracking-wider">
              {SITE_CONFIG.tagline}
            </span>
          </div>
        </div>

        {/* Linha Inferior: Direitos Autorais */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{SITE_CONFIG.copyright}</p>
          <p className="text-slate-500">
            Bioeconomia · Desenvolvimento Regional · Inovação
          </p>
        </div>
      </div>
    </footer>
  );
}

