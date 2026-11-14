/**
 * Retorna a URL base oficial do site (sem barra no final).
 * Pode ser sobrescrita pela variável de ambiente NEXT_PUBLIC_SITE_URL.
 */
export const OFFICIAL_SITE_URL = "https://keepamazon.com.br";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return OFFICIAL_SITE_URL;
}
