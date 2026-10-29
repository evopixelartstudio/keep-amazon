import React from "react";

const ANDROID_DOWNLOAD_URL =
  "https://drive.google.com/drive/folders/1TAFdggIPwaRMF7HIhsa_hN0I8i9a-82X";
const WINDOWS_DOWNLOAD_URL =
  "https://drive.google.com/drive/folders/124gMXnDEqdnZtVmuJpSFpoECYdx4aqPu";

function AndroidIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0002s.4482-.9997.9993-.9997c.5521 0 .9997.4481.9997.9997 0 .5516-.4476 1.0002-.9997 1.0002m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0002s.4482-.9997.9993-.9997c.5521 0 .9997.4481.9997.9997 0 .5516-.4476 1.0002-.9997 1.0002m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.0827 12 8.0827s-3.5902.3289-5.1368.867L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  );
}

function WindowsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75V22.05L0 20.7m10.949-8.1H24V24l-13.051-1.8" />
    </svg>
  );
}

function GamepadIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="6" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CheckIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function GameSection() {
  return (
    <section id="game" className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative rounded-[28px] bg-gradient-to-br from-[#10171D] via-[#121c24] to-[#162029] border border-[#C8F31D]/20 shadow-2xl p-7 sm:p-12 lg:p-14 overflow-hidden text-white reveal-scale-blur">
          {/* Luz radial decorativa no canto */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-[#C8F31D]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Coluna 1: Informações e Ações de Download */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge superior com indicador animado */}
              <div className="inline-flex items-center gap-2 bg-[#C8F31D]/10 border border-[#C8F31D]/30 text-[#C8F31D] text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C8F31D] animate-pulse shadow-[0_0_8px_#C8F31D]" />
                <span>JOGO EDUCATIVO · EXPERIÊNCIA INTERATIVA</span>
              </div>

              {/* Título */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Word Amazon{" "}
                <span className="text-[#C8F31D] font-extrabold">Gamer</span>
              </h2>

              {/* Descrição */}
              <p className="text-slate-300 text-base sm:text-[16px] leading-relaxed max-w-xl">
                Desafie seu conhecimento sobre a fauna, a flora e os saberes da
                Amazônia de forma dinâmica e interativa. Aprenda palavras da
                bioeconomia e mergulhe na floresta através de um jogo lúdico
                para todas as idades.
              </p>

              {/* Tags de Destaques */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-slate-200">
                  <CheckIcon className="text-[#C8F31D]" />
                  Vocabulário Regional
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-slate-200">
                  <CheckIcon className="text-[#C8F31D]" />
                  100% Gratuito
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-slate-200">
                  <CheckIcon className="text-[#C8F31D]" />
                  Android & Windows
                </span>
              </div>

              {/* Botões de Download */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Botão Android APK */}
                <a
                  href={ANDROID_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 min-w-[220px] inline-flex items-center justify-between gap-4 bg-[#C8F31D] text-[#10171D] hover:bg-[#d4fb3f] px-5 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#C8F31D]/20"
                  title="Baixar APK para Android no Google Drive"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#10171D] text-[#C8F31D] flex items-center justify-center flex-shrink-0">
                      <AndroidIcon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-bold tracking-wider opacity-75">
                        Download APK
                      </span>
                      <span className="block text-[15px] font-bold leading-tight">
                        Android
                      </span>
                    </div>
                  </div>
                  <ArrowUpRightIcon className="w-4 h-4 text-[#10171D] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Botão Windows Desktop */}
                <a
                  href={WINDOWS_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 min-w-[220px] inline-flex items-center justify-between gap-4 bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-[#C8F31D]/60 hover:text-[#C8F31D] px-5 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-black/30"
                  title="Baixar para Windows Desktop no Google Drive"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <WindowsIcon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-300">
                        Download PC
                      </span>
                      <span className="block text-[15px] font-bold leading-tight">
                        Windows Desktop
                      </span>
                    </div>
                  </div>
                  <ArrowUpRightIcon className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Mockup Visual das Letras do Jogo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] bg-black/50 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl">
                {/* Header do Dispositivo */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#C8F31D] tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#C8F31D] animate-ping" />
                    <span>DISPONÍVEL</span>
                  </div>
                  <span className="text-[11px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md">
                    v1.0 · Multiplataforma
                  </span>
                </div>

                {/* Grade Estilizada de Letras */}
                <div className="flex flex-col gap-2 items-center py-2 select-none">
                  {/* Linha 1 */}
                  <div className="flex gap-1.5">
                    {["A", "M", "A", "Z", "O", "N"].map((letter, idx) => (
                      <span
                        key={idx}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-white/15 text-white font-black text-sm sm:text-base flex items-center justify-center shadow-sm hover:-translate-y-0.5 transition-transform"
                      >
                        {letter}
                      </span>
                    ))}
                  </div>

                  {/* Linha 2 (Destaque em Lime) */}
                  <div className="flex gap-1.5">
                    {["B", "I", "O"].map((letter, idx) => (
                      <span
                        key={idx}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#C8F31D] text-[#10171D] font-black text-sm sm:text-base flex items-center justify-center shadow-md shadow-[#C8F31D]/20 hover:-translate-y-0.5 transition-transform"
                      >
                        {letter}
                      </span>
                    ))}
                    <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-white/30 font-black text-sm sm:text-base flex items-center justify-center">
                      •
                    </span>
                    {["E", "C", "O"].map((letter, idx) => (
                      <span
                        key={idx}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#C8F31D] text-[#10171D] font-black text-sm sm:text-base flex items-center justify-center shadow-md shadow-[#C8F31D]/20 hover:-translate-y-0.5 transition-transform"
                      >
                        {letter}
                      </span>
                    ))}
                  </div>

                  {/* Linha 3 */}
                  <div className="flex gap-1.5">
                    {["F", "L", "O", "R", "E", "S", "T", "A"].map((letter, idx) => (
                      <span
                        key={idx}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 border border-white/15 text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-sm hover:-translate-y-0.5 transition-transform"
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer do Dispositivo */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C8F31D]/15 text-[#C8F31D] flex items-center justify-center flex-shrink-0">
                    <GamepadIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <strong className="block text-xs font-bold text-white">
                      Aprenda jogando
                    </strong>
                    <span className="block text-[11px] text-slate-400">
                      Descubra a floresta letra por letra
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
