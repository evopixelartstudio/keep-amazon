import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Desativa completamente o indicador flutuante do Next.js dev ("N 1 Issue") */
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
