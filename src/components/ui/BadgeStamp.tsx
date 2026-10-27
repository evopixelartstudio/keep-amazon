import Image from "next/image";

interface BadgeStampProps {
  className?: string;
}

export function BadgeStamp({ className = "" }: BadgeStampProps) {
  return (
    <div
      className={`relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-full rounded-full overflow-hidden p-1 filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
        <Image
          src="/images/logo.png"
          alt="Keep Amazon Badge"
          fill
          sizes="128px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
