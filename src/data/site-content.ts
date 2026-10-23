export interface NavItem {
  label: string;
  href: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  iconName: 'leaf' | 'book' | 'users' | 'shield';
}

export interface InitiativeItem {
  id: string;
  title: string;
  description: string;
  iconName: 'presentation' | 'wrench' | 'users' | 'calendar' | 'gift' | 'package';
}

export const SITE_CONFIG = {
  name: 'Keep Amazon',
  title: 'Keep Amazon | Conectando a floresta a novas possibilidades',
  description:
    'Conheça a Keep Amazon, iniciativa dedicada à valorização regional, à bioeconomia e à conexão entre a floresta, as pessoas e novas oportunidades.',
  url: 'https://keepamazon.org',
  tagline: 'Floresta · Pessoas · Futuro',
  copyright: '© 2026 Keep Amazon. Todos os direitos reservados.',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Iniciativas', href: '#iniciativas' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Adesão', href: '#adesao' },
  { label: 'Contato', href: '#contato' },
];

export const MARQUEE_ITEMS = [
  'Produtos da nossa terra',
  'Conhecimento que transforma',
  'Desenvolvimento regional',
  'Bioeconomia na prática',
  'Da floresta para o mundo',
];

export const PILLARS: PillarItem[] = [
  {
    id: 'produtos-regionais',
    title: 'Produtos regionais',
    description:
      'Comercialização de itens da nossa biodiversidade, com qualidade, procedência e padrão de excelência.',
    iconName: 'leaf',
  },
  {
    id: 'educacao-conhecimento',
    title: 'Educação e conhecimento',
    description:
      'Conteúdo e experiências que aproximam a população urbana da floresta, da agroecologia e das práticas sustentáveis.',
    iconName: 'book',
  },
  {
    id: 'conexao-parcerias',
    title: 'Conexão e parcerias',
    description:
      'Articulação entre produtores, empresas, instituições e o setor público para ampliar o impacto da bioeconomia.',
    iconName: 'users',
  },
  {
    id: 'certificacao-confianca',
    title: 'Certificação e confiança',
    description:
      'Incentivo à certificação de produtos e processos, garantindo segurança, transparência e valorização da produção regional.',
    iconName: 'shield',
  },
];

export const INITIATIVES: InitiativeItem[] = [
  {
    id: 'com-palestra',
    title: 'Com palestra',
    description: 'Conhecimento que conecta e inspira.',
    iconName: 'presentation',
  },
  {
    id: 'somente-instalacao',
    title: 'Somente instalação',
    description: 'Estrutura e suporte para sua operação.',
    iconName: 'wrench',
  },
  {
    id: 'palestra-instalacao',
    title: 'Palestra + instalação',
    description: 'Informação e implementação em uma proposta integrada.',
    iconName: 'users',
  },
  {
    id: 'manutencao-4-meses',
    title: 'Manutenção em 4 meses',
    description: 'Acompanhamento contínuo e suporte durante quatro meses.',
    iconName: 'calendar',
  },
  {
    id: 'com-brindes',
    title: 'Com brindes',
    description: 'Mais valor para sua experiência com itens exclusivos.',
    iconName: 'gift',
  },
  {
    id: 'unbox',
    title: 'Unbox',
    description: 'Uma experiência completa desde o primeiro contato.',
    iconName: 'package',
  },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/keepamazon', icon: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com/@keepamazon', icon: 'youtube' },
  { label: 'WhatsApp', href: 'https://wa.me/5592999999999', icon: 'message-circle' },
];

