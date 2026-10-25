import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/site-content";

interface FooterProps {
  onOpenInterestModal?: () => void;
}

function PhoneIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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

function CalendarClockIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="12" cy="15" r="3" />
      <polyline points="12 14 12 15 13.5 15" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SouthAmericaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.5 4.5C9.5 3.5 12.5 3.5 14.5 4c2 .5 4.5 2.5 5.5 5 .8 2.2-.5 4.5-2.5 6-1.5 1.2-2.7 3-4 5.5-.7 1.3-2 1.5-2.5 1-.5-.5-.5-2-.2-3.5.4-2-1.3-4-2.8-6-1.5-2-2-4.5-.5-7.5Z" />
    </svg>
  );
}

export function Footer({ onOpenInterestModal }: FooterProps) {
  return (
    <footer id="contato" className="w-full bg-[#F1F5DC] text-[#10171D] pt-16 sm:pt-20 pb-12 border-t border-[#E0E5D0]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Grid de 3 Colunas: Marca, Navegue e Contatos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#10171D]/12 reveal-blur">
          {/* Coluna 1: Marca, Slogan e Redes Sociais */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5">
            <BrandLogo theme="dark" />

            <p className="text-[14.5px] sm:text-[15px] text-[#3F474E] leading-relaxed max-w-sm">
              Garantindo a valorização da bioeconomia e dos saberes locais com
              compromisso, transparência e sustentabilidade.
            </p>

            {/* Ícones em caixas escuras arredondadas (como na referência) */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="tel:+5592999999810"
                aria-label="Ligue para nós via Telefone"
                title="Telefone"
                className="w-9 h-9 rounded-lg bg-[#10171D] text-white flex items-center justify-center hover:bg-[#C8F31D] hover:text-[#10171D] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <PhoneIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5592999999810"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco pelo WhatsApp"
                title="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#10171D] text-white flex items-center justify-center hover:bg-[#C8F31D] hover:text-[#10171D] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/keepamazon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visite nosso perfil no Instagram"
                title="Instagram"
                className="w-9 h-9 rounded-lg bg-[#10171D] text-white flex items-center justify-center hover:bg-[#C8F31D] hover:text-[#10171D] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegue */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-[#10171D] text-base sm:text-[17px] tracking-tight">
              Navegue:
            </h4>
            <nav aria-label="Links rápidos do rodapé" className="flex flex-col space-y-2.5">
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
                  className="text-[14.5px] text-[#4B5563] hover:text-[#10171D] hover:translate-x-1 font-normal transition-all inline-block w-fit"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#tanamo"
                className="text-[14.5px] text-[#4B5563] hover:text-[#10171D] hover:translate-x-1 font-normal transition-all inline-block w-fit"
              >
                Tá na Mão
              </Link>
              <Link
                href="#contato"
                className="text-[14.5px] text-[#4B5563] hover:text-[#10171D] hover:translate-x-1 font-normal transition-all inline-block w-fit"
              >
                Contatos
              </Link>
            </nav>
          </div>

          {/* Coluna 3: Contatos */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-[#10171D] text-base sm:text-[17px] tracking-tight">
              Contatos
            </h4>
            <ul className="space-y-3.5 text-[14.5px] text-[#374151]">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/5592999999810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#10171D] transition-colors"
                >
                  <WhatsAppIcon className="w-[18px] h-[18px] text-[#10171D] flex-shrink-0" />
                  <span>(92) 99999-9810</span>
                </a>
              </li>

              {/* Telefone */}
              <li>
                <a
                  href="tel:+5592999999810"
                  className="flex items-center gap-3 hover:text-[#10171D] transition-colors"
                >
                  <PhoneIcon className="w-[18px] h-[18px] text-[#10171D] flex-shrink-0" />
                  <span>(92) 99999-9810</span>
                </a>
              </li>

              {/* Atendimento 24 horas / Urgências */}
              <li className="flex items-start gap-3">
                <CalendarClockIcon className="w-[18px] h-[18px] text-[#10171D] flex-shrink-0 mt-0.5" />
                <span>Atendimento 24 horas | Urgências</span>
              </li>

              {/* E-mail */}
              <li>
                <a
                  href="mailto:contato@keepamazon.com.br"
                  className="flex items-center gap-3 hover:text-[#10171D] transition-colors"
                >
                  <MailIcon className="w-[18px] h-[18px] text-[#10171D] flex-shrink-0" />
                  <span>contato@keepamazon.com.br</span>
                </a>
              </li>

              {/* Endereço */}
              <li className="flex items-start gap-3 leading-snug">
                <MapPinIcon className="w-[18px] h-[18px] text-[#10171D] flex-shrink-0 mt-0.5" />
                <span>Av. Djalma Batista, 1661 - Manaus, AM, 69050-010</span>
              </li>

              {/* Atendimento Online e para todo o Brasil */}
              <li className="flex items-start gap-3 leading-snug">
                <SouthAmericaIcon className="w-[18px] h-[18px] text-[#10171D] flex-shrink-0 mt-0.5" />
                <span>Atendimento Online e para todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior: Direitos Autorais */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] reveal-blur delay-100">
          <p>{SITE_CONFIG.copyright}</p>
          <p className="text-[#64748B]">
            Bioeconomia · Desenvolvimento Regional · Inovação
          </p>
        </div>
      </div>
    </footer>
  );
}
