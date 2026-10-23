interface BadgeStampProps {
  className?: string;
}

export function BadgeStamp({ className = "" }: BadgeStampProps) {
  return (
    <div
      className={`relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Círculo rotativo com texto tipográfico */}
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id="textcircle"
            d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          />
        </defs>

        {/* Borda circular externa pontilhada sutil */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#C8F31D"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        {/* Borda interna contínua */}
        <circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke="#C8F31D"
          strokeWidth="0.8"
          opacity="0.3"
        />

        {/* Texto ao longo do caminho circular */}
        <text
          fill="#C8F31D"
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="2.2"
          className="uppercase"
        >
          <textPath href="#textcircle" startOffset="0%">
            FLORESTA • PESSOAS • FUTURO •
          </textPath>
        </text>
      </svg>

      {/* Ícone de folha central estático ou com leve pulso */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
          >
            <path
              d="M5 19C4.5 13.5 7.5 6.5 19 4C19 4 18.5 15 13.5 19C9.5 22.5 5.5 20.5 5 19Z"
              stroke="#C8F31D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 17C10.5 15 14.5 11.5 18 6.5"
              stroke="#C8F31D"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

