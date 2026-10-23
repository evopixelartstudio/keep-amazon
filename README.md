# Keep Amazon — Landing Page Oficial

Landing page completa da **Keep Amazon**, reproduzindo fielmente o design system e a composição editorial do mockup de referência.

O projeto foi disponibilizado em duas abordagens para máxima flexibilidade técnica:

1. **Versão HTML5, CSS3 e JavaScript Vanilla** (Direta, sem dependências, pronta para abrir direto no navegador ou hospedar em qualquer servidor estático).
2. **Versão Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS** (Arquitetura modular baseada em componentes e API Route para processamento de leads).

---

## 📁 Estrutura de Arquivos

```
Keep Amazon/
├── index.html                 # Página principal em HTML5 semântico
├── css/
│   └── style.css              # Design system, variáveis CSS e responsividade
├── js/
│   └── main.js                # Interatividade (menu mobile, scroll, modal e validação)
├── assets/                    # Fotografias monocromáticas originais
│   ├── 01_hero_floresta_rio.png
│   ├── 02_maos_frutos.png
│   ├── 03_muda_maos.png
│   └── 04_estante_hortalicas.png
│
├── src/                       # Versão Next.js App Router
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── api/interest/route.ts
│   ├── components/
│   │   ├── layout/ (Header, Footer)
│   │   ├── sections/ (Hero, Marquee, About, TaNaMao, Solutions, CallToAction, InterestModal)
│   │   └── ui/ (Button, BrandLogo, BadgeStamp, SectionHeading, ServiceCard)
│   └── data/site-content.ts
└── public/images/             # Imagens otimizadas para o Next.js
```

---

## 🌿 Design System & Cores Oficiais

- **Primary Lime**: `#C8F31D` (Destaque em cápsulas, botões primários e elementos geométricos)
- **Dark Ink**: `#10171D` (Hero, contraste de seções, textos e rodapé)
- **Soft Lime**: `#F1F5DC` (Seção do Projeto Tá na Mão e fundos de ícones)
- **White**: `#FFFFFF` (Sobre e Nossas Iniciativas)
- **Gray Text**: `#666B70` (Subtítulos e apoio)
- **Border**: `#E8EBDD` (Bordas de cards de 16px)

### Tipografia
- **Títulos**: Plus Jakarta Sans
- **Textos e Interface**: Inter

---

## ⚡ Como Visualizar e Testar

### Opção 1: Versão HTML, CSS e JavaScript (Sem necessidade de Node.js)
Basta dar dois cliques no arquivo [`index.html`](file:///c:/Users/souza/OneDrive/Desktop/alan/Keep%20Amazon/index.html) ou abri-lo diretamente em qualquer navegador moderno.

### Opção 2: Servidor de Desenvolvimento Next.js
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000).

### Opção 3: Build de Produção Next.js
```bash
npm run build
npm start
```
