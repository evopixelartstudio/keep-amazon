/**
 * KEEP AMAZON — TRADUÇÕES (PT / EN / ES)
 *
 * O português é o texto original do index.html: ele é lido do próprio DOM
 * na inicialização, então só as versões em inglês e espanhol ficam aqui.
 * Elementos traduzíveis usam:
 *   data-i18n="chave"                -> innerHTML
 *   data-i18n-placeholder="chave"    -> atributo placeholder
 *   data-i18n-aria-label="chave"     -> atributo aria-label
 *   data-i18n-alt="chave"            -> atributo alt
 *   data-i18n-title="chave"          -> atributo title
 */
(function () {
  'use strict';

  var SUPPORTED = ['pt', 'en', 'es'];
  var STORAGE_KEY = 'keepamazon-lang';
  var HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };
  var ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];

  // Textos usados apenas pelo JavaScript (mensagens do formulário) e metadados
  var SCRIPT_STRINGS = {
    pt: {
      'meta.title': 'Keep Amazon | Bioeconomia e Produtos da Amazônia',
      'meta.description': 'Conheça a Keep Amazon: produtos amazônicos, educação ambiental e soluções sustentáveis que conectam a floresta a novas oportunidades.',
      'aria.openMenu': 'Abrir menu',
      'aria.closeMenu': 'Fechar menu',
      'ods.tag': 'ODS {n}',
      'js.errName': 'Informe seu nome completo (mínimo de 3 caracteres).',
      'js.errEmail': 'Informe um endereço de e-mail válido.',
      'js.errPhone': 'Informe um WhatsApp válido com DDD (mínimo 10 dígitos).',
      'js.errConsent': 'É necessário concordar com a política de privacidade.',
      'js.sending': 'Validando...',
      'js.successTitle': 'Manifestação enviada com sucesso!',
      'js.successDefault': 'Seus dados foram validados pela infraestrutura Keep Amazon.',
      'js.successTech': 'Status técnico: Pronto para conexão com CRM/Webhook.',
      'js.errProcess': 'Ocorreu um erro ao processar. Tente novamente.',
      'js.localTitle': 'Validação concluída localmente!',
      'js.localBody': 'Todos os campos atendem aos critérios de integridade da Keep Amazon.',
      'js.localNote': 'Em ambiente de produção com servidor, a requisição é despachada para /api/interest.',
      'js.errNetwork': 'Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.'
    },
    en: {
      'meta.title': 'Keep Amazon | Bioeconomy and Amazon Products',
      'meta.description': 'Meet Keep Amazon: Amazon products, environmental education and sustainable solutions that connect the forest to new opportunities.',
      'aria.closeMenu': 'Close menu',
      'js.errName': 'Enter your full name (at least 3 characters).',
      'js.errEmail': 'Enter a valid email address.',
      'js.errPhone': 'Enter a valid WhatsApp number with area code (at least 10 digits).',
      'js.errConsent': 'You must agree to the privacy policy.',
      'js.sending': 'Validating...',
      'js.successTitle': 'Your request was sent successfully!',
      'js.successDefault': 'Your details were validated by the Keep Amazon platform.',
      'js.successTech': 'Technical status: ready to connect to a CRM/Webhook.',
      'js.errProcess': 'Something went wrong while processing. Please try again.',
      'js.localTitle': 'Validation completed locally!',
      'js.localBody': 'All fields meet the Keep Amazon integrity criteria.',
      'js.localNote': 'In a production environment with a server, the request is sent to /api/interest.',
      'js.errNetwork': 'Could not connect to the server. Check your connection and try again.'
    },
    es: {
      'meta.title': 'Keep Amazon | Bioeconomía y Productos de la Amazonía',
      'meta.description': 'Conoce Keep Amazon: productos amazónicos, educación ambiental y soluciones sostenibles que conectan la selva con nuevas oportunidades.',
      'aria.closeMenu': 'Cerrar menú',
      'js.errName': 'Ingresa tu nombre completo (mínimo 3 caracteres).',
      'js.errEmail': 'Ingresa una dirección de correo electrónico válida.',
      'js.errPhone': 'Ingresa un WhatsApp válido con código de área (mínimo 10 dígitos).',
      'js.errConsent': 'Es necesario aceptar la política de privacidad.',
      'js.sending': 'Validando...',
      'js.successTitle': '¡Solicitud enviada con éxito!',
      'js.successDefault': 'Tus datos fueron validados por la plataforma Keep Amazon.',
      'js.successTech': 'Estado técnico: listo para conectarse a un CRM/Webhook.',
      'js.errProcess': 'Ocurrió un error al procesar. Inténtalo de nuevo.',
      'js.localTitle': '¡Validación completada localmente!',
      'js.localBody': 'Todos los campos cumplen los criterios de integridad de Keep Amazon.',
      'js.localNote': 'En un entorno de producción con servidor, la solicitud se envía a /api/interest.',
      'js.errNetwork': 'No fue posible conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.'
    }
  };

  var STAR = ' <span class="star">✱</span>';

  var TRANSLATIONS = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.initiatives': 'Initiatives',
      'nav.products': 'Products',
      'nav.join': 'Join',
      'nav.contact': 'Contact',
      'nav.contacts': 'Contact',
      'nav.ods': 'Goals (SDGs)',
      'nav.tanamao': 'Tá na Mão Project',
      'cta.joinNow': 'Join now',
      'cta.learnMore': 'Learn more',
      'aria.search': 'Search',
      'aria.openMenu': 'Open menu',
      'aria.whatsappContact': 'Contact us on WhatsApp',
      'aria.whatsappTalk': 'Talk to us on WhatsApp',
      'aria.close': 'Close window',
      'drawer.tagline': 'Forest · People · Future',

      'hero.title': 'The forest<br>\n            creates value.<br>\n            <span class="title-pill-wrap">\n              <span>We</span>\n              <span class="title-pill">connect it.</span>\n            </span>',
      'hero.desc': 'Keep Amazon is an initiative that brings the forest closer to the city, valuing regional products, local knowledge and new opportunities through the bioeconomy, innovation and conscious consumption.',
      'hero.cta': 'Discover the initiative',
      'hero.contact': 'Get in touch',

      'marquee.1': 'Products from our land' + STAR,
      'marquee.2': 'Knowledge that transforms' + STAR,
      'marquee.3': 'Regional development' + STAR,
      'marquee.4': 'Bioeconomy in practice' + STAR,
      'marquee.5': 'From the forest to the world' + STAR,

      'about.eyebrow': 'ABOUT KEEP AMAZON',
      'about.title': 'More than products,<br>\n              a <span class="text-lime-highlight">movement.</span>',
      'about.p1': 'We are a bridge between the richness of the Amazon and a sustainable future. We work so that forest products gain space, value and new possibilities.',
      'about.p2': 'We connect producers, communities, companies and consumers, promoting the bioeconomy as a driver of development, inclusion and preservation.',
      'pillar.1.title': 'Regional products',
      'pillar.1.desc': 'Sale of items from our biodiversity, with quality, traceable origin and a standard of excellence.',
      'pillar.2.title': 'Education and knowledge',
      'pillar.2.desc': 'Content and experiences that bring urban populations closer to the forest, agroecology and sustainable practices.',
      'pillar.3.title': 'Connection and partnerships',
      'pillar.3.desc': 'Bringing together producers, companies, institutions and the public sector to expand the impact of the bioeconomy.',
      'pillar.4.title': 'Certification and trust',
      'pillar.4.desc': 'Encouraging the certification of products and processes, ensuring safety, transparency and recognition of regional production.',

      'alt.seedling': 'Hands carefully holding a small seedling in fertile Amazon soil',
      'alt.shelf': 'Living shelf growing vegetables and regional Amazon products',
      'tanamao.eyebrow': 'FEATURED PROJECT',
      'tanamao.desc': 'A living shelf with vegetables and regional products that combines the useful with the educational. The Tá na Mão project brings the best of the Amazon closer to people, with information about origin, ways to use them and everyday benefits.',

      'init.eyebrow': 'OUR INITIATIVES',
      'init.title': 'Solutions for a<br>\n              more <span class="text-lime-highlight">sustainable</span> future.',
      'init.intro': 'Keep Amazon offers different ways to take part in and access our products and projects. Choose the one that makes the most sense for you and be part of this transformation.',
      'init.cta': 'See all options',
      'card.1.title': 'With a talk',
      'card.1.desc': 'Knowledge that connects and inspires.',
      'card.2.title': 'Installation only',
      'card.2.desc': 'Structure and support for your operation.',
      'card.3.title': 'Talk + installation',
      'card.3.desc': 'Information and implementation in one integrated proposal.',
      'card.4.title': '4-month maintenance',
      'card.4.desc': 'Ongoing follow-up and support for four months.',
      'card.5.title': 'With gifts',
      'card.5.desc': 'More value for your experience with exclusive items.',
      'card.6.title': 'Unbox',
      'card.6.desc': 'A complete experience from the very first contact.',

      'ods.eyebrow': '2030 AGENDA · UN',
      'ods.title': 'The 17 <span class="text-lime-highlight">Sustainable Development</span> Goals',
      'ods.intro': 'The SDGs are a global call from the UN to end poverty, protect the environment and the climate, and ensure that people everywhere can enjoy peace and prosperity. Keep Amazon guides its initiatives by these commitments.',
      'alt.odsWheel': 'Colorful wheel of the 17 UN SDGs',
      'ods.badge': '2030 Agenda<br>United Nations',
      'ods.tag': 'SDG {n}',
      'ods.1.title': 'No Poverty',
      'ods.1.desc': 'End poverty in all its forms everywhere, ensuring access to resources, basic services and social protection.',
      'ods.2.title': 'Zero Hunger',
      'ods.2.desc': 'End hunger, achieve food security, improve nutrition and promote sustainable and family farming.',
      'ods.3.title': 'Good Health and Well-Being',
      'ods.3.desc': 'Ensure healthy lives and promote well-being for all at all ages.',
      'ods.4.title': 'Quality Education',
      'ods.4.desc': 'Ensure inclusive, equitable and quality education and promote lifelong learning opportunities.',
      'ods.5.title': 'Gender Equality',
      'ods.5.desc': 'Achieve gender equality and empower all women and girls, eliminating discrimination and violence.',
      'ods.6.title': 'Clean Water and Sanitation',
      'ods.6.desc': 'Ensure availability and sustainable management of water and sanitation for all.',
      'ods.7.title': 'Affordable and Clean Energy',
      'ods.7.desc': 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
      'ods.8.title': 'Decent Work and Economic Growth',
      'ods.8.desc': 'Promote inclusive and sustainable economic growth, full and productive employment and decent work for all.',
      'ods.9.title': 'Industry, Innovation and Infrastructure',
      'ods.9.desc': 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
      'ods.10.title': 'Reduced Inequalities',
      'ods.10.desc': 'Reduce inequality within and among countries, promoting social, economic and political inclusion.',
      'ods.11.title': 'Sustainable Cities and Communities',
      'ods.11.desc': 'Make cities and human settlements inclusive, safe, resilient and sustainable.',
      'ods.12.title': 'Responsible Consumption and Production',
      'ods.12.desc': 'Ensure sustainable consumption and production patterns, reducing waste and valuing responsible supply chains.',
      'ods.13.title': 'Climate Action',
      'ods.13.desc': 'Take urgent action to combat climate change and its impacts, strengthening resilience and adaptation.',
      'ods.14.title': 'Life Below Water',
      'ods.14.desc': 'Conserve and sustainably use oceans, rivers and aquatic resources for sustainable development.',
      'ods.15.title': 'Life on Land',
      'ods.15.desc': 'Protect, restore and promote sustainable use of forests and ecosystems, halt biodiversity loss and combat desertification.',
      'ods.16.title': 'Peace, Justice and Strong Institutions',
      'ods.16.desc': 'Promote peaceful and inclusive societies, provide access to justice for all and build effective, accountable and transparent institutions.',
      'ods.17.title': 'Partnerships for the Goals',
      'ods.17.desc': 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.',
      'ods.source': 'Source: United Nations (UN) — 2030 Agenda for Sustainable Development. Official images of the Sustainable Development Goals.',

      'game.badge': 'EDUCATIONAL GAME · INTERACTIVE EXPERIENCE',
      'game.desc': 'Test your knowledge of the Amazon’s wildlife, plants and traditional knowledge in a dynamic, interactive way. Learn bioeconomy words and dive into the forest through a playful game for all ages.',
      'game.f1': 'Regional vocabulary',
      'game.f2': '100% Free',
      'game.f3': 'Android & PC',
      'game.titleAndroid': 'Download the Android APK from Google Drive',
      'game.titleWindows': 'Download for Windows Desktop from Google Drive',
      'game.available': 'AVAILABLE',
      'game.version': 'v1.0 · Cross-platform',
      'game.learn': 'Learn by playing',
      'game.discover': 'Discover the forest letter by letter',

      'alt.fruits': 'Hands holding regional fruits from Amazon biodiversity',
      'join.eyebrow': 'GET INVOLVED',
      'join.title': 'Together, we can<br>\n              go <span class="text-lime-bright">further.</span>',
      'join.desc': 'Be a partner, a producer, a supporter or a conscious consumer. Keep Amazon is for everyone who believes in a fairer, more sustainable future connected to our land.',
      'join.cta': 'I want to join',

      'modal.eyebrow': 'MEMBERSHIP & PARTNERSHIPS',
      'modal.title': 'Join Keep Amazon',
      'modal.desc': 'Fill in the details below to express your interest in our bioeconomy initiatives.',
      'form.name': 'Full name *',
      'form.namePh': 'Your name or your organization’s',
      'form.email': 'Email *',
      'form.profile': 'Area of interest *',
      'form.opt.consumer': 'Conscious consumer',
      'form.opt.producer': 'Regional / community producer',
      'form.opt.company': 'Partner company',
      'form.opt.institution': 'Educational or research institution',
      'form.opt.other': 'Other interest',
      'form.message': 'Message (optional)',
      'form.messagePh': 'Tell us a little about how you would like to collaborate...',
      'form.consent': 'I agree to share my details to be contacted about Keep Amazon initiatives, in line with good privacy practices.',
      'form.cancel': 'Cancel',
      'form.submit': 'Send request',

      'footer.slogan': 'Championing the bioeconomy and local knowledge with commitment, transparency and sustainability.',
      'footer.navigate': 'Explore:',
      'footer.contacts': 'Contact',
      'footer.support24': '24-hour service | Emergencies',
      'footer.location': 'Amazon - Brazil',
      'footer.online': 'Online service throughout Brazil',
      'footer.rights': '© 2026 Keep Amazon. All rights reserved.',
      'footer.tagline': 'Bioeconomy · Regional Development · Innovation'
    },

    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Nosotros',
      'nav.initiatives': 'Iniciativas',
      'nav.products': 'Productos',
      'nav.join': 'Adhesión',
      'nav.contact': 'Contacto',
      'nav.contacts': 'Contacto',
      'nav.ods': 'Objetivos (ODS)',
      'nav.tanamao': 'Proyecto Tá na Mão',
      'cta.joinNow': 'Únete ahora',
      'cta.learnMore': 'Saber más',
      'aria.search': 'Buscar',
      'aria.openMenu': 'Abrir menú',
      'aria.whatsappContact': 'Contáctanos por WhatsApp',
      'aria.whatsappTalk': 'Habla con nosotros por WhatsApp',
      'aria.close': 'Cerrar ventana',
      'drawer.tagline': 'Selva · Personas · Futuro',

      'hero.title': 'La selva<br>\n            genera valor.<br>\n            <span class="title-pill-wrap">\n              <span>Nosotros</span>\n              <span class="title-pill">conectamos.</span>\n            </span>',
      'hero.desc': 'Keep Amazon es una iniciativa que acerca la selva a la ciudad, valorando los productos regionales, los saberes locales y nuevas oportunidades a través de la bioeconomía, la innovación y el consumo consciente.',
      'hero.cta': 'Conoce la iniciativa',
      'hero.contact': 'Contáctanos',

      'marquee.1': 'Productos de nuestra tierra' + STAR,
      'marquee.2': 'Conocimiento que transforma' + STAR,
      'marquee.3': 'Desarrollo regional' + STAR,
      'marquee.4': 'Bioeconomía en la práctica' + STAR,
      'marquee.5': 'De la selva para el mundo' + STAR,

      'about.eyebrow': 'SOBRE KEEP AMAZON',
      'about.title': 'Más que productos,<br>\n              un <span class="text-lime-highlight">movimiento.</span>',
      'about.p1': 'Somos un puente entre la riqueza de la Amazonía y un futuro sostenible. Trabajamos para que los productos de la selva ganen espacio, valor y nuevas posibilidades.',
      'about.p2': 'Conectamos productores, comunidades, empresas y consumidores, promoviendo la bioeconomía como motor de desarrollo, inclusión y preservación.',
      'pillar.1.title': 'Productos regionales',
      'pillar.1.desc': 'Comercialización de artículos de nuestra biodiversidad, con calidad, procedencia y un estándar de excelencia.',
      'pillar.2.title': 'Educación y conocimiento',
      'pillar.2.desc': 'Contenidos y experiencias que acercan a la población urbana a la selva, la agroecología y las prácticas sostenibles.',
      'pillar.3.title': 'Conexión y alianzas',
      'pillar.3.desc': 'Articulación entre productores, empresas, instituciones y el sector público para ampliar el impacto de la bioeconomía.',
      'pillar.4.title': 'Certificación y confianza',
      'pillar.4.desc': 'Fomento de la certificación de productos y procesos, garantizando seguridad, transparencia y valorización de la producción regional.',

      'alt.seedling': 'Manos sosteniendo con cuidado un pequeño brote en tierra fértil amazónica',
      'alt.shelf': 'Estantería viva con cultivo de hortalizas y productos regionales amazónicos',
      'tanamao.eyebrow': 'PROYECTO DESTACADO',
      'tanamao.desc': 'Una estantería viva, con hortalizas y productos regionales, que une lo útil con lo educativo. El proyecto Tá na Mão acerca a las personas lo mejor de la Amazonía, con información sobre su origen, formas de uso y beneficios para el día a día.',

      'init.eyebrow': 'NUESTRAS INICIATIVAS',
      'init.title': 'Soluciones para un<br>\n              futuro más <span class="text-lime-highlight">sostenible.</span>',
      'init.intro': 'Keep Amazon ofrece diferentes formas de participar y acceder a nuestros productos y proyectos. Elige la que más sentido tenga para ti y forma parte de esta transformación.',
      'init.cta': 'Ver todas las opciones',
      'card.1.title': 'Con charla',
      'card.1.desc': 'Conocimiento que conecta e inspira.',
      'card.2.title': 'Solo instalación',
      'card.2.desc': 'Estructura y soporte para tu operación.',
      'card.3.title': 'Charla + instalación',
      'card.3.desc': 'Información e implementación en una propuesta integrada.',
      'card.4.title': 'Mantenimiento por 4 meses',
      'card.4.desc': 'Acompañamiento continuo y soporte durante cuatro meses.',
      'card.5.title': 'Con obsequios',
      'card.5.desc': 'Más valor para tu experiencia con artículos exclusivos.',
      'card.6.title': 'Unbox',
      'card.6.desc': 'Una experiencia completa desde el primer contacto.',

      'ods.eyebrow': 'AGENDA 2030 · ONU',
      'ods.title': 'Los 17 Objetivos de <span class="text-lime-highlight">Desarrollo Sostenible</span>',
      'ods.intro': 'Los ODS son un llamado global de la ONU para poner fin a la pobreza, proteger el medio ambiente y el clima, y garantizar que las personas puedan disfrutar de paz y prosperidad. Keep Amazon orienta sus iniciativas por estos compromisos.',
      'alt.odsWheel': 'Rueda colorida de los 17 ODS de la ONU',
      'ods.badge': 'Agenda 2030<br>Naciones Unidas',
      'ods.tag': 'ODS {n}',
      'ods.1.title': 'Fin de la Pobreza',
      'ods.1.desc': 'Poner fin a la pobreza en todas sus formas y en todo el mundo, garantizando acceso a recursos, servicios básicos y protección social.',
      'ods.2.title': 'Hambre Cero',
      'ods.2.desc': 'Poner fin al hambre, lograr la seguridad alimentaria, mejorar la nutrición y promover la agricultura sostenible y familiar.',
      'ods.3.title': 'Salud y Bienestar',
      'ods.3.desc': 'Garantizar una vida sana y promover el bienestar de todas las personas, en todas las edades.',
      'ods.4.title': 'Educación de Calidad',
      'ods.4.desc': 'Garantizar una educación inclusiva, equitativa y de calidad, y promover oportunidades de aprendizaje durante toda la vida.',
      'ods.5.title': 'Igualdad de Género',
      'ods.5.desc': 'Lograr la igualdad de género y empoderar a todas las mujeres y niñas, eliminando la discriminación y la violencia.',
      'ods.6.title': 'Agua Limpia y Saneamiento',
      'ods.6.desc': 'Garantizar la disponibilidad y la gestión sostenible del agua y el saneamiento para todas las personas.',
      'ods.7.title': 'Energía Asequible y no Contaminante',
      'ods.7.desc': 'Garantizar el acceso a una energía asequible, fiable, sostenible y moderna para todos.',
      'ods.8.title': 'Trabajo Decente y Crecimiento Económico',
      'ods.8.desc': 'Promover el crecimiento económico inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.',
      'ods.9.title': 'Industria, Innovación e Infraestructura',
      'ods.9.desc': 'Construir infraestructuras resilientes, promover la industrialización inclusiva y sostenible y fomentar la innovación.',
      'ods.10.title': 'Reducción de las Desigualdades',
      'ods.10.desc': 'Reducir la desigualdad en los países y entre ellos, promoviendo la inclusión social, económica y política.',
      'ods.11.title': 'Ciudades y Comunidades Sostenibles',
      'ods.11.desc': 'Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.',
      'ods.12.title': 'Producción y Consumo Responsables',
      'ods.12.desc': 'Garantizar modalidades de consumo y producción sostenibles, reduciendo el desperdicio y valorando cadenas responsables.',
      'ods.13.title': 'Acción por el Clima',
      'ods.13.desc': 'Adoptar medidas urgentes para combatir el cambio climático y sus efectos, fortaleciendo la resiliencia y la adaptación.',
      'ods.14.title': 'Vida Submarina',
      'ods.14.desc': 'Conservar y utilizar de forma sostenible los océanos, ríos y recursos acuáticos para el desarrollo sostenible.',
      'ods.15.title': 'Vida de Ecosistemas Terrestres',
      'ods.15.desc': 'Proteger, restaurar y promover el uso sostenible de los bosques y ecosistemas, detener la pérdida de biodiversidad y luchar contra la desertificación.',
      'ods.16.title': 'Paz, Justicia e Instituciones Sólidas',
      'ods.16.desc': 'Promover sociedades pacíficas e inclusivas, facilitar el acceso a la justicia y construir instituciones eficaces, responsables y transparentes.',
      'ods.17.title': 'Alianzas para Lograr los Objetivos',
      'ods.17.desc': 'Fortalecer los medios de implementación y revitalizar la alianza mundial para el desarrollo sostenible.',
      'ods.source': 'Fuente: Organización de las Naciones Unidas (ONU) — Agenda 2030 para el Desarrollo Sostenible. Imágenes oficiales de los Objetivos de Desarrollo Sostenible.',

      'game.badge': 'JUEGO EDUCATIVO · EXPERIENCIA INTERACTIVA',
      'game.desc': 'Pon a prueba tus conocimientos sobre la fauna, la flora y los saberes de la Amazonía de forma dinámica e interactiva. Aprende palabras de la bioeconomía y sumérgete en la selva a través de un juego lúdico para todas las edades.',
      'game.f1': 'Vocabulario regional',
      'game.f2': '100% Gratis',
      'game.f3': 'Android y PC',
      'game.titleAndroid': 'Descargar APK para Android en Google Drive',
      'game.titleWindows': 'Descargar para Windows Desktop en Google Drive',
      'game.available': 'DISPONIBLE',
      'game.version': 'v1.0 · Multiplataforma',
      'game.learn': 'Aprende jugando',
      'game.discover': 'Descubre la selva letra por letra',

      'alt.fruits': 'Manos sosteniendo frutos regionales de la biodiversidad amazónica',
      'join.eyebrow': 'FORMA PARTE',
      'join.title': 'Juntos, podemos<br>\n              llegar <span class="text-lime-bright">más lejos.</span>',
      'join.desc': 'Sé un aliado, un productor, un colaborador o un consumidor consciente. Keep Amazon es para todos los que creen en un futuro más justo, sostenible y conectado con nuestra tierra.',
      'join.cta': 'Quiero formar parte',

      'modal.eyebrow': 'ADHESIÓN Y ALIANZAS',
      'modal.title': 'Forma parte de Keep Amazon',
      'modal.desc': 'Completa los datos a continuación para manifestar tu interés en las iniciativas de bioeconomía.',
      'form.name': 'Nombre completo *',
      'form.namePh': 'Tu nombre o el de tu organización',
      'form.email': 'Correo electrónico *',
      'form.profile': 'Perfil de interés *',
      'form.opt.consumer': 'Consumidor consciente',
      'form.opt.producer': 'Productor regional / comunitario',
      'form.opt.company': 'Empresa aliada',
      'form.opt.institution': 'Institución educativa o de investigación',
      'form.opt.other': 'Otro interés',
      'form.message': 'Mensaje (opcional)',
      'form.messagePh': 'Cuéntanos un poco cómo te gustaría colaborar...',
      'form.consent': 'Acepto compartir mis datos para ser contactado sobre las iniciativas de Keep Amazon, de acuerdo con las buenas prácticas de privacidad.',
      'form.cancel': 'Cancelar',
      'form.submit': 'Enviar solicitud',

      'footer.slogan': 'Impulsando la valorización de la bioeconomía y de los saberes locales con compromiso, transparencia y sostenibilidad.',
      'footer.navigate': 'Navega:',
      'footer.contacts': 'Contacto',
      'footer.support24': 'Atención 24 horas | Urgencias',
      'footer.location': 'Amazonía - Brasil',
      'footer.online': 'Atención en línea y para todo Brasil',
      'footer.rights': '© 2026 Keep Amazon. Todos los derechos reservados.',
      'footer.tagline': 'Bioeconomía · Desarrollo Regional · Innovación'
    }
  };

  // Português: capturado do HTML original na primeira execução
  var original = { pt: {} };
  var currentLang = 'pt';

  function captureOriginal() {
    var pt = original.pt;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key === 'ods.tag') return;
      if (!(key in pt)) pt[key] = el.innerHTML.trim();
    });
    ATTRS.forEach(function (attr) {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(function (el) {
        var key = el.getAttribute('data-i18n-' + attr);
        if (!(key in pt)) pt[key] = el.getAttribute(attr) || '';
      });
    });
  }

  function t(key, lang) {
    lang = lang || currentLang;
    var dict = lang === 'pt' ? original.pt : TRANSLATIONS[lang] || {};
    var scripts = SCRIPT_STRINGS[lang] || {};
    if (key in scripts) return scripts[key];
    if (key in dict) return dict[key];
    if (key in SCRIPT_STRINGS.pt) return SCRIPT_STRINGS.pt[key];
    return original.pt[key] !== undefined ? original.pt[key] : key;
  }

  function normalize(lang) {
    if (!lang) return null;
    lang = String(lang).toLowerCase().slice(0, 2);
    return SUPPORTED.indexOf(lang) !== -1 ? lang : null;
  }

  function detectLang() {
    try {
      var fromUrl = normalize(new URLSearchParams(window.location.search).get('lang'));
      if (fromUrl) return fromUrl;
    } catch (e) { /* ignora */ }
    try {
      var saved = normalize(window.localStorage.getItem(STORAGE_KEY));
      if (saved) return saved;
    } catch (e) { /* ignora */ }
    var langs = navigator.languages || [navigator.language];
    for (var i = 0; i < langs.length; i++) {
      var l = normalize(langs[i]);
      if (l) return l;
    }
    return 'pt';
  }

  function apply(lang) {
    lang = normalize(lang) || 'pt';
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key === 'ods.tag') {
        el.textContent = t('ods.tag').replace('{n}', el.getAttribute('data-n'));
        return;
      }
      var value = t(key);
      if (el.innerHTML.trim() !== value) el.innerHTML = value;
    });

    ATTRS.forEach(function (attr) {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(function (el) {
        el.setAttribute(attr, t(el.getAttribute('data-i18n-' + attr)));
      });
    });

    // Texto alternativo dos ícones ODS acompanha a tag + título do card
    document.querySelectorAll('.ods-card').forEach(function (card) {
      var img = card.querySelector('.ods-card-img');
      var tag = card.querySelector('[data-i18n="ods.tag"]');
      var title = card.querySelector('.ods-card-title');
      if (img && tag && title) img.alt = tag.textContent.trim() + ' - ' + title.textContent.trim();
    });

    document.documentElement.lang = HTML_LANG[lang];
    document.title = t('meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignora */ }

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  function init() {
    captureOriginal();
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.getAttribute('data-lang'));
      });
    });
    apply(detectLang());
  }

  window.KeepAmazonI18n = {
    t: function (key) { return t(key); },
    setLanguage: apply,
    getLanguage: function () { return currentLang; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
