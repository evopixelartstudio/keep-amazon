/**
 * Retorna a URL base do site de forma flexível e segura.
 * Utiliza variáveis de ambiente oficiais sem inventar domínios definitivos fictícios.
 * Quando o domínio oficial for configurado (previsto para 28/10/2026),
 * basta definir NEXT_PUBLIC_SITE_URL no painel da hospedagem (ex: Vercel).
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // URL atual comprovada onde o projeto já está publicado
  return "https://keep-amazon-three.vercel.app";
}

