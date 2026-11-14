import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const LAST_UPDATED = "13 de novembro de 2026";
const CONTACT_EMAIL = "contato@keepamazon.com.br";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Keep Amazon coleta, utiliza, armazena e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: {
    canonical: `${siteUrl}/politica-de-privacidade`,
  },
  openGraph: {
    title: "Política de Privacidade | Keep Amazon",
    description:
      "Transparência no tratamento de dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
    url: `${siteUrl}/politica-de-privacidade`,
  },
};

interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

const SECTIONS: PolicySection[] = [
  {
    id: "introducao",
    title: "1. Introdução",
    content: (
      <>
        <p>
          A <strong>Keep Amazon</strong> (&quot;nós&quot;) respeita a sua
          privacidade e está comprometida com a proteção dos dados pessoais de
          todas as pessoas que acessam este site, utilizam nossos formulários,
          baixam o jogo <em>Word Amazon Gamer</em> ou se relacionam com nossas
          iniciativas.
        </p>
        <p>
          Esta Política explica, de forma clara e transparente, quais dados
          coletamos, por que os coletamos, como os utilizamos e quais são os
          seus direitos, em conformidade com a Lei Geral de Proteção de Dados
          Pessoais (<strong>LGPD — Lei nº 13.709/2018</strong>) e com o Marco
          Civil da Internet (Lei nº 12.965/2014).
        </p>
      </>
    ),
  },
  {
    id: "controlador",
    title: "2. Quem é o controlador dos dados",
    content: (
      <>
        <p>
          A Keep Amazon é a controladora dos dados pessoais tratados por meio
          deste site, com sede na Av. Djalma Batista, 1661 — Manaus/AM, CEP
          69050-010.
        </p>
        <p>
          Para qualquer assunto relacionado a privacidade e proteção de dados,
          entre em contato pelo e-mail{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, indicando no
          assunto &quot;Privacidade / LGPD&quot;.
        </p>
      </>
    ),
  },
  {
    id: "dados-coletados",
    title: "3. Quais dados coletamos",
    content: (
      <>
        <p>
          <strong>Dados fornecidos por você</strong>, ao preencher o formulário
          de adesão e interesse ou entrar em contato conosco:
        </p>
        <ul>
          <li>Nome completo;</li>
          <li>Endereço de e-mail;</li>
          <li>Número de WhatsApp/telefone;</li>
          <li>
            Perfil de interesse (consumidor, produtor, empresa, instituição ou
            outro);
          </li>
          <li>Mensagem opcional que você decidir nos enviar.</li>
        </ul>
        <p>
          <strong>Dados coletados automaticamente</strong>, de forma técnica e
          necessária ao funcionamento do site: endereço IP, tipo de navegador e
          dispositivo, páginas acessadas, data e horário de acesso. Esses
          registros são mantidos pelo período mínimo exigido pelo Marco Civil
          da Internet.
        </p>
        <p>
          Não coletamos intencionalmente dados pessoais sensíveis (como origem
          racial, convicção religiosa, opinião política ou dados de saúde) nem
          dados de crianças e adolescentes sem o consentimento de um dos pais
          ou responsável legal.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "4. Para que usamos seus dados",
    content: (
      <>
        <p>Utilizamos seus dados pessoais exclusivamente para:</p>
        <ul>
          <li>
            Responder a solicitações, dúvidas, orçamentos e pedidos de
            parceria;
          </li>
          <li>
            Entrar em contato sobre as iniciativas da Keep Amazon, como o
            Projeto Tá na Mão, palestras, educação ambiental e produtos
            amazônicos;
          </li>
          <li>
            Organizar eventos, ações educativas e projetos sustentáveis dos
            quais você tenha manifestado interesse;
          </li>
          <li>
            Garantir a segurança do site, prevenir fraudes e cumprir obrigações
            legais e regulatórias;
          </li>
          <li>
            Melhorar a experiência de navegação e o conteúdo oferecido.
          </li>
        </ul>
        <p>
          Não vendemos, alugamos ou comercializamos seus dados pessoais.
        </p>
      </>
    ),
  },
  {
    id: "bases-legais",
    title: "5. Bases legais para o tratamento",
    content: (
      <>
        <p>
          O tratamento de dados pela Keep Amazon se apoia nas seguintes bases
          legais previstas no art. 7º da LGPD:
        </p>
        <ul>
          <li>
            <strong>Consentimento</strong> — quando você marca a caixa de
            concordância no formulário de adesão;
          </li>
          <li>
            <strong>Execução de contrato ou procedimentos preliminares</strong>{" "}
            — para elaborar propostas e atender pedidos feitos por você;
          </li>
          <li>
            <strong>Cumprimento de obrigação legal</strong> — como a guarda de
            registros de acesso;
          </li>
          <li>
            <strong>Legítimo interesse</strong> — para garantir a segurança do
            site e aprimorar nossos serviços, sempre respeitando seus direitos
            e expectativas.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "6. Compartilhamento de dados",
    content: (
      <>
        <p>
          Seus dados podem ser compartilhados apenas com prestadores de
          serviço que nos apoiam na operação do site e no atendimento, como
          provedores de hospedagem, ferramentas de e-mail e sistemas de gestão
          de contatos (CRM). Esses parceiros tratam os dados somente conforme
          nossas instruções e sob obrigações de confidencialidade e segurança.
        </p>
        <p>
          Também poderemos compartilhar dados quando exigido por lei, ordem
          judicial ou autoridade competente. Alguns desses fornecedores podem
          estar localizados fora do Brasil; nesses casos, adotamos as
          salvaguardas previstas nos arts. 33 a 36 da LGPD.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "7. Cookies e tecnologias semelhantes",
    content: (
      <>
        <p>
          Este site utiliza apenas cookies e armazenamento local estritamente
          necessários ao seu funcionamento. Atualmente não utilizamos cookies
          de publicidade ou rastreamento de terceiros.
        </p>
        <p>
          Caso passemos a utilizar ferramentas de análise ou marketing, esta
          Política será atualizada e, quando exigido, solicitaremos o seu
          consentimento. Você pode, a qualquer momento, gerenciar ou bloquear
          cookies nas configurações do seu navegador.
        </p>
      </>
    ),
  },
  {
    id: "links-externos",
    title: "8. Links externos e downloads",
    content: (
      <p>
        Nosso site contém links para serviços de terceiros, como WhatsApp,
        Instagram, YouTube e Google Drive (utilizado para disponibilizar os
        arquivos do jogo <em>Word Amazon Gamer</em>). Ao acessá-los, você
        estará sujeito às políticas de privacidade dessas plataformas, pelas
        quais a Keep Amazon não se responsabiliza.
      </p>
    ),
  },
  {
    id: "armazenamento",
    title: "9. Armazenamento e segurança",
    content: (
      <>
        <p>
          Mantemos seus dados pessoais apenas pelo tempo necessário para
          cumprir as finalidades descritas nesta Política ou para atender
          obrigações legais. Após esse período, os dados são eliminados ou
          anonimizados.
        </p>
        <p>
          Adotamos medidas técnicas e administrativas razoáveis para proteger
          seus dados contra acessos não autorizados, perda, alteração ou
          divulgação indevida, incluindo conexão criptografada (HTTPS) e
          controle de acesso às informações.
        </p>
      </>
    ),
  },
  {
    id: "direitos",
    title: "10. Seus direitos como titular",
    content: (
      <>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
        <ul>
          <li>Confirmação da existência de tratamento dos seus dados;</li>
          <li>Acesso aos dados que mantemos sobre você;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            Anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desconformidade com a lei;
          </li>
          <li>Portabilidade dos dados a outro fornecedor;</li>
          <li>
            Eliminação dos dados tratados com base no seu consentimento;
          </li>
          <li>
            Informação sobre com quem compartilhamos seus dados;
          </li>
          <li>Revogação do consentimento, a qualquer momento.</li>
        </ul>
        <p>
          Para exercer seus direitos, envie um e-mail para{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Responderemos
          em prazo razoável, conforme a legislação. Você também pode apresentar
          reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "11. Alterações nesta Política",
    content: (
      <p>
        Esta Política pode ser atualizada periodicamente para refletir
        mudanças em nossas práticas ou na legislação. A versão vigente estará
        sempre disponível nesta página, com a data da última atualização
        indicada no topo.
      </p>
    ),
  },
];

export default function PoliticaDePrivacidadePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Política de Privacidade - Keep Amazon",
    description:
      "Política de Privacidade da Keep Amazon em conformidade com a LGPD.",
    url: `${siteUrl}/politica-de-privacidade`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-white">
        <Header />

        {/* Hero */}
        <section className="relative bg-[#10171D] text-white pt-28 sm:pt-36 pb-16 lg:pb-20 overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <Breadcrumb
              items={[{ label: "Política de Privacidade" }]}
              theme="dark"
            />

            <div className="max-w-3xl pt-6 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="w-5 h-[2.5px] bg-[#C8F31D] rounded-full flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
                  LGPD · TRANSPARÊNCIA · SEGURANÇA
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Política de Privacidade
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Cuidar da floresta também é cuidar das pessoas. Aqui explicamos
                como tratamos seus dados pessoais com responsabilidade e
                transparência.
              </p>

              <p className="text-sm text-slate-400">
                Última atualização: {LAST_UPDATED}
              </p>
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="w-full py-16 sm:py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Sumário */}
              <aside className="lg:col-span-4">
                <nav
                  aria-label="Sumário da política"
                  className="lg:sticky lg:top-28 p-6 rounded-2xl bg-[#F1F5DC] border border-[#E0E5D0]"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#666B70]">
                    Nesta página
                  </span>
                  <ol className="mt-4 space-y-2.5">
                    {SECTIONS.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm text-[#3F474E] hover:text-[#10171D] hover:underline underline-offset-4"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>

              {/* Texto da política */}
              <article className="lg:col-span-8 max-w-[72ch] space-y-12">
                {SECTIONS.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 space-y-4 text-[15px] sm:text-base text-[#3F474E] leading-relaxed [&_a]:text-[#5f8a00] [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-[#10171D] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-[#10171D] tracking-tight">
                      {section.title}
                    </h2>
                    {section.content}
                  </section>
                ))}

                <div className="p-6 sm:p-8 rounded-2xl bg-[#10171D] text-white space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold">
                    Ficou com alguma dúvida?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Fale com a nossa equipe pelo e-mail{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-[#C8F31D] underline underline-offset-4"
                    >
                      {CONTACT_EMAIL}
                    </a>{" "}
                    ou acesse a página de{" "}
                    <Link
                      href="/contato"
                      className="text-[#C8F31D] underline underline-offset-4"
                    >
                      Contato e Parcerias
                    </Link>
                    .
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
