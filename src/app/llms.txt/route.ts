import { getSiteUrl } from "@/lib/site-url";

/**
 * /llms.txt — resumo em Markdown do site para assistentes e buscadores de IA
 * (ChatGPT, Claude, Perplexity, Gemini etc.). Padrão proposto em https://llmstxt.org
 */
export function GET() {
  const url = getSiteUrl();

  const body = `# Keep Amazon

> Iniciativa da Amazônia (Brasil) dedicada à bioeconomia amazônica: valoriza produtos regionais da Amazônia, promove educação ambiental e leva soluções sustentáveis, como estantes vivas de hortaliças, a empresas, escolas e comunidades.

A Keep Amazon conecta a floresta, as pessoas e novas oportunidades. Atua em quatro frentes: produtos regionais com procedência, educação e conhecimento, conexão e parcerias com produtores locais, e certificação e confiança. Orienta suas iniciativas pelos 17 Objetivos de Desenvolvimento Sustentável (ODS) da ONU.

- Localização: Amazônia - Brasil
- Atendimento: na Amazônia e online para todo o Brasil
- E-mail: keepamazonfullspectrum@gmail.com
- WhatsApp/Telefone: +55 (68) 98100-0548
- Instagram: https://instagram.com/keepamazon

## Páginas principais

- [Início](${url}/): visão geral da Keep Amazon, iniciativas, ODS e o jogo educativo Word Amazon Gamer
- [Bioeconomia Amazônica](${url}/bioeconomia-amazonica): o que é bioeconomia amazônica, um modelo econômico que mantém a floresta em pé, valoriza povos tradicionais e gera inovação
- [Produtos da Amazônia](${url}/produtos-amazonicos): produtos regionais amazônicos com procedência, valorização de comunidades e respeito à biodiversidade
- [Projetos Sustentáveis para Empresas](${url}/projetos-sustentaveis): estantes vivas, palestras, manutenção contínua e kits que conectam marcas à bioeconomia amazônica (ESG)
- [Educação Ambiental](${url}/educacao-ambiental): palestras sobre sustentabilidade e ações de educação ambiental para empresas e escolas
- [Projeto Tá na Mão](${url}/ta-na-mao): estantes vivas com hortaliças e produtos regionais que unem cultivo, educação e consumo sustentável
- [Contato e Parcerias](${url}/contato): canais de atendimento para empresas, escolas, produtores e consumidores

## Soluções para empresas

- Com palestra: conhecimento que conecta e inspira
- Somente instalação: estrutura e suporte para a operação da estante viva
- Palestra + instalação: informação e implementação em uma proposta integrada
- Manutenção em 4 meses: acompanhamento contínuo e suporte
- Com brindes: itens exclusivos de produtos regionais
- Unbox: experiência completa desde o primeiro contato

## Opcional

- [Política de Privacidade](${url}/politica-de-privacidade): tratamento de dados pessoais conforme a LGPD
- [Sitemap](${url}/sitemap.xml)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
