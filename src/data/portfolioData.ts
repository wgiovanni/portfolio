import { Project, ExperienceItem, TerminalTab } from '../types';
import { Language } from '../context/LanguageContext';

export const PERSONAL_INFO = {
  name: 'Wilkel Giovanni',
  title: {
    es: 'Ingeniero Full Stack y Backend',
    en: 'Full Stack & Backend Engineer'
  },
  status: {
    es: '+9 AÑOS DE EXPERIENCIA',
    en: '+9 YEARS EXPERIENCE'
  },
  bio: {
    es: 'Desarrollador Full Stack & Backend con +9 años de experiencia construyendo sistemas fintech de alto rendimiento, plataformas empresariales, canalizaciones de datos en la nube y APIs de microservicios. Especializado en Python (FastAPI), PHP (Laravel, Symfony), JavaScript/TypeScript (React.js, Next.js, Node.js, Vue.js) y AWS.',
    en: 'Full Stack & Backend Developer with +9 years of experience building high-performance fintech systems, enterprise platforms, cloud data pipelines, and microservices APIs. Specialized in Python (FastAPI), PHP (Laravel, Symfony), JavaScript/TypeScript (React.js, Next.js, Node.js, Vue.js), and AWS.'
  },
  aboutBio: {
    es: 'Ingeniero Full Stack y Backend con +9 años de experiencia. Actualmente trabajo como Associate Engineer - Backend en BITA GmbH (Frankfurt, Alemania), desarrollando infraestructura en la nube, APIs de microservicios y sistemas ETL para procesamiento masivo de datos de índices financieros. Mi stack incluye Python (FastAPI, Pandas, Dask), PHP (Laravel, Symfony), JavaScript (React.js, Next.js, Node.js), Docker, SQL y AWS. Me enfoco en confiabilidad, arquitecturas escalables y en aportar valor real de negocio.',
    en: 'Full Stack & Backend Engineer with +9 years of experience. Currently working as Associate Engineer - Backend at BITA GmbH (Frankfurt, Germany), developing cloud infrastructure, microservices APIs, and ETL systems for processing massive financial index data. My stack includes Python (FastAPI, Pandas, Dask), PHP (Laravel, Symfony), JavaScript (React.js, Next.js, Node.js), Docker, SQL, and AWS. I focus on reliability, scalable architectures, and delivering real business value.'
  },
  email: 'wilkelgiovanni@gmail.com',
  phone: '+58 412 765 8802',
  whatsappUrl: 'https://wa.me/584127658802',
  github: 'https://github.com/wgiovanni',
  linkedin: 'https://linkedin.com/in/wgiovanni',
  instagram: 'https://instagram.com/wgiovanni95',
  location: 'Valencia, Venezuela',
  education: {
    es: 'Licenciatura en Computación — Universidad de Carabobo (2012 — 2019)',
    en: 'Bachelor\'s Degree in Computer Science — University of Carabobo (2012 — 2019)'
  },
  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native / Bilingual' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'Competencia profesional de trabajo', en: 'Professional Working Proficiency' } }
  ]
};

export const UI_TRANSLATIONS = {
  es: {
    navHome: 'Inicio',
    navAbout: 'Sobre mí',
    navExperience: 'Experiencia',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    navContactBtn: 'Contactar',
    viewProjects: 'Ver Proyectos',
    contactDetails: 'Datos de Contacto',
    consoleHeader: 'Consola',
    executeBtn: 'Ejecutar',
    executingBtn: 'Ejecutando...',
    copyCode: 'Copiar Código',
    resetCode: 'Reiniciar Código',
    aboutTag: 'Ingeniero Full Stack y Backend',
    aboutHeadline: 'Desarrollo de software robusto, escalable y enfocado en resultados.',
    educationTitle: 'Educación Universitaria',
    langTitle: 'Idiomas',
    expTitle: 'Experiencia Profesional (+9 Años)',
    expSub: 'Trayectoria comprobada desarrollando soluciones web full stack, microservicios, arquitecturas empresariales y sistemas de datos.',
    projectsTag: 'Portafolio de Soluciones',
    projectsTitle: 'Proyectos y Sistemas Desarrollados',
    projectsSub: 'Plataformas web, microservicios, canalizaciones de datos e integraciones empresariales construidas con Python, PHP y JavaScript.',
    keyHighlights: 'Puntos Clave',
    detailsBtn: 'Detalles del Proyecto',
    contactTag: 'Contacto Directo',
    contactTitle: 'Datos de Contacto',
    contactSub: 'Ponte en contacto directamente a través de cualquiera de estos canales. Disponible para nuevos proyectos, consultas técnicas o colaboraciones.',
    emailLabel: 'Correo Electrónico',
    phoneLabel: 'Teléfono / WhatsApp',
    locationLabel: 'Ubicación',
    linkedinLabel: 'Perfil de LinkedIn',
    githubLabel: 'Repositorios GitHub',
    instagramLabel: 'Seguir en Instagram',
    sendEmail: 'Enviar Correo',
    openWhatsapp: 'Abrir WhatsApp',
    waDirect: 'WhatsApp Directo',
    copyTooltip: 'Copiar al portapapeles',
    overview: 'Descripción General',
    architectureHighlights: 'Puntos Arquitectónicos',
    techUsed: 'Tecnologías Utilizadas',
    close: 'Cerrar',
    copyright: 'Full Stack & Backend Engineer.'
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Me',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
    navContactBtn: 'Contact',
    viewProjects: 'View Projects',
    contactDetails: 'Contact Info',
    consoleHeader: 'Console',
    executeBtn: 'Run',
    executingBtn: 'Executing...',
    copyCode: 'Copy Code',
    resetCode: 'Reset Code',
    aboutTag: 'Full Stack & Backend Engineer',
    aboutHeadline: 'Building robust, scalable, and impact-driven software solutions.',
    educationTitle: 'University Education',
    langTitle: 'Languages',
    expTitle: 'Professional Experience (+9 Years)',
    expSub: 'Proven track record building full-stack web solutions, microservices, enterprise architectures, and cloud data systems.',
    projectsTag: 'Solutions Portfolio',
    projectsTitle: 'Featured Projects & Developed Systems',
    projectsSub: 'Web platforms, microservices, data pipelines, and enterprise integrations built with Python, PHP, and JavaScript.',
    keyHighlights: 'Key Highlights',
    detailsBtn: 'Project Details',
    contactTag: 'Direct Contact',
    contactTitle: 'Contact Details',
    contactSub: 'Get in touch directly through any of these channels. Open for new projects, technical consulting, or collaborations.',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone / WhatsApp',
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn Profile',
    githubLabel: 'GitHub Repositories',
    instagramLabel: 'Follow on Instagram',
    sendEmail: 'Send Email',
    openWhatsapp: 'Open WhatsApp',
    waDirect: 'Direct WhatsApp',
    copyTooltip: 'Copy to clipboard',
    overview: 'Overview',
    architectureHighlights: 'Architecture Highlights',
    techUsed: 'Technologies Used',
    close: 'Close',
    copyright: 'Full Stack & Backend Engineer.'
  }
};

export const SEO_CONTENT = {
  es: {
    title: 'Wilkel Giovanni | Ingeniero Full Stack y Backend',
    description: 'Portfolio de Wilkel Giovanni, ingeniero Full Stack y Backend especializado en Python, FastAPI, PHP, React, Node.js, AWS y sistemas fintech escalables.',
    ogDescription: 'Ingeniero Full Stack y Backend especializado en sistemas fintech, APIs de microservicios, datos en la nube y arquitecturas escalables.',
    ogLocale: 'es_ES'
  },
  en: {
    title: 'Wilkel Giovanni | Full Stack & Backend Engineer',
    description: 'Portfolio of Wilkel Giovanni, a Full Stack and Backend Engineer specializing in Python, FastAPI, PHP, React, Node.js, AWS, and scalable fintech systems.',
    ogDescription: 'Full Stack and Backend Engineer specializing in fintech systems, microservices APIs, cloud data, and scalable architectures.',
    ogLocale: 'en_US'
  }
} as const;

export const getTerminalTabs = (lang: Language): TerminalTab[] => [
  {
    id: 'dev_env',
    filename: 'developer.ts',
    language: 'typescript',
    content: `const developer = {
  name: 'Wilkel Giovanni',
  role: 'Associate Engineer - Backend',
  company: 'BITA GmbH (Frankfurt, Germany)',
  experience: '+9 Years',
  location: 'Valencia, Venezuela',
  stack: {
    backend: ['FastAPI', 'Python', 'Node.js', 'PHP', 'Laravel', 'Symfony'],
    frontend: ['React.js', 'Next.js', 'Vue.js', 'JavaScript'],
    data_and_cloud: ['AWS', 'Docker', 'Pandas', 'Dask', 'Coiled', 'SQL']
  },
  execute: () => {
    return "${lang === 'es' ? 'Procesando datos financieros a gran escala y construyendo microservicios.' : 'Processing large-scale financial data & building enterprise microservices.'}";
  }
};

developer.execute();`
  },
  {
    id: 'skills',
    filename: 'skills.json',
    language: 'json',
    content: `{
  "developer": "Wilkel Giovanni",
  "current_role": "Associate Engineer - Backend at BITA GmbH",
  "backend": ["FastAPI", "Python", "Node.js", "PHP", "Laravel", "Symfony", "Spring Boot"],
  "frontend": ["React.js", "Next.js", "Vue.js", "JavaScript", "Bootstrap"],
  "data_and_etl": ["Pandas", "Jupyter", "Dask", "Coiled", "ETL Pipelines"],
  "databases": ["SQL", "MySQL", "PostgreSQL", "MS SQL Server"],
  "cloud_and_devops": ["AWS", "Docker", "Git", "GitHub", "Microservices"]
}`
  },
  {
    id: 'terminal',
    filename: 'terminal.sh',
    language: 'bash',
    content: `# Wilkel Giovanni CLI v2.0
$ wilkel status
[OK] Current Role: Associate Engineer - Backend at BITA GmbH (Frankfurt, Germany)
[OK] Core Tech Stack: FastAPI | Python | React.js | Node.js | AWS | Docker | PHP
[OK] Primary Location: Valencia, Venezuela
[OK] Email: wilkelgiovanni@gmail.com
[OK] Phone/WhatsApp: +58 412 765 8802

$ wilkel skills --summary
> ${lang === 'es' ? '+9 Años de Experiencia en Backend, Full Stack y Sistemas de Datos' : '+9 Years Experience in Backend, Full Stack & Data Systems'}
> ${lang === 'es' ? 'Fintech (Índices Financieros, Microservicios, ETL), Inmobiliario, Sistemas Empresariales y Bancarios' : 'Fintech (Financial Indices, Microservices, ETL), Real Estate, Enterprise & Banking Systems'}`
  }
];
export const getProjects = (lang: Language): Project[] => [
  {
    id: 'bita-fintech-engine',
    title: lang === 'es' ? 'Microservicios de Datos e Índices Financieros' : 'Enterprise Financial Index & Data Microservices',
    subtitle: lang === 'es' ? 'Infraestructura de datos financieros a gran escala, canalizaciones ETL y microservicios en BITA GmbH (Frankfurt, Alemania).' : 'High-scale financial data infrastructure, ETL pipelines, and microservices at BITA GmbH (Frankfurt, Germany).',
    description: lang === 'es' 
      ? 'Planificación, gestión, desarrollo y mantenimiento de sistemas que procesan grandes cantidades de datos financieros para inversión pasiva y cuantitativa. Desarrollo de APIs orientadas a microservicios, interfaces de usuario y procesamiento de datos ETL.'
      : 'Planning, management, development, and maintenance of systems processing large quantities of financial data for passive and quantitative investing. Built microservices APIs, user interfaces, and big data ETL pipelines.',
    category: 'Fintech / Data',
    badge: lang === 'es' ? 'Plataforma Cloud Fintech' : 'Fintech Cloud Platform',
    tags: ['FastAPI', 'Python', 'Docker', 'Node.js', 'React.js', 'SQL', 'AWS', 'Pandas', 'Jupyter', 'Dask', 'Coiled'],
    architectureHighlights: lang === 'es' ? [
      'Desarrollo y mantenimiento de APIs orientadas a microservicios con FastAPI y Python',
      'Procesamiento masivo de datos financieros y flujos ETL con Pandas, Dask y Coiled',
      'Desarrollo de interfaz de usuario y dashboards con React.js y Node.js',
      'Gestión de infraestructura cloud empresarial en AWS y entornos Docker'
    ] : [
      'Development & maintenance of microservices-oriented APIs using FastAPI & Python',
      'High-throughput financial data processing & ETL pipelines using Pandas, Dask, and Coiled',
      'User interface & dashboard development with React.js and Node.js',
      'Enterprise-level cloud infrastructure management on AWS and Docker'
    ],
    metrics: [
      { label: lang === 'es' ? 'Sector' : 'Domain', value: lang === 'es' ? 'Fintech e Índices Financieros' : 'Fintech & Financial Indices' },
      { label: lang === 'es' ? 'Sede' : 'HQ', value: lang === 'es' ? 'Frankfurt, Alemania' : 'Frankfurt, Germany' }
    ],
  },
  {
    id: 'porta-srl-erp',
    title: lang === 'es' ? 'Sistema ERP y Pasarela de Pagos Empresarial' : 'Business ERP & Payment Ingestion System',
    subtitle: lang === 'es' ? 'Gestión completa de procesos de negocio e integración automatizada de cobros para Agencia Web Porta S.R.L.' : 'Full-stack business process management and automated payment gateway integrations for Agencia Web Porta S.R.L.',
    description: lang === 'es'
      ? 'Desarrollo y mantenimiento de procesos de negocio desde rentabilidad hasta cobro. Conexión en tiempo real con sistemas ERP y múltiples pasarelas de pago (BANCARD, TIGO MONEY, ZIMPLE) y agencias de logística (AEX).'
      : 'Developed and maintained core business operations from profitability to collections. Created ERP connections for real-time data collection and integrated multiple payment gateways (BANCARD, TIGO MONEY, ZIMPLE) and shipping agencies (AEX).',
    category: 'Full-Stack',
    badge: lang === 'es' ? 'Plataforma Empresarial' : 'Enterprise Platform',
    tags: ['Vue.js', 'ReactJS', 'Laravel', 'MySQL', 'Payment Gateways', 'AEX Logistics'],
    architectureHighlights: lang === 'es' ? [
      'Procesamiento multipasarela de pagos (BANCARD, Tigo Money, Zimple)',
      'Sincronización en tiempo real con ERP e integración API con agencia de envíos AEX',
      'Seguimiento integral de rentabilidad y facturación automatizada'
    ] : [
      'Multi-gateway payment processing (BANCARD, Tigo Money, Zimple)',
      'Real-time ERP synchronization and shipping agency API integration',
      'End-to-end profitability tracking and automated invoicing'
    ],
    metrics: [
      { label: lang === 'es' ? 'Pasarelas' : 'Gateways', value: lang === 'es' ? '3 redes de pago activas' : '3 Active Payment Networks' },
      { label: lang === 'es' ? 'Sincronización' : 'Sync', value: lang === 'es' ? 'Datos ERP en tiempo real' : 'Real-Time ERP Data' }
    ],
  },
  {
    id: 'swiftflats-platform',
    title: lang === 'es' ? 'Plataforma de Alquiler de Viviendas SWIFTFLATS' : 'SWIFTFLATS Online Housing Rental Engine',
    subtitle: lang === 'es' ? 'Plataforma segura de alquiler para estudiantes universitarios y becarios.' : 'Secure housing rental platform for university students and interns.',
    description: lang === 'es'
      ? 'Plataforma web para búsqueda y reserva de habitaciones en pisos compartidos o residencias. Integración con Stripe para cobros y Elasticsearch para búsquedas de alta velocidad.'
      : 'Built a web platform allowing tenants to safely search and rent rooms in shared flats or university residences. Integrated Stripe for automated payments and Elasticsearch for fast room filter queries.',
    category: 'Full-Stack',
    badge: lang === 'es' ? 'Mercado de Viviendas' : 'Housing Marketplace',
    tags: ['Symfony 3.4', 'ReactJS', 'Laravel', 'Stripe', 'Elasticsearch', 'Docker', 'PostgreSQL'],
    architectureHighlights: lang === 'es' ? [
      'Motor de Búsqueda ágil de catálogo con Elasticsearch 7.5.2',
      'Procesamiento de pagos recurrentes y de reserva con Stripe',
      'Despliegue en contenedores Docker'
    ] : [
      'Fast catalog search utilizing Elasticsearch 7.5.2',
      'Stripe recurring and one-time payment processing',
      'Containerized deployment using Docker'
    ],
    metrics: [
      { label: lang === 'es' ? 'Plataforma' : 'Platform', value: lang === 'es' ? 'Viviendas en varias ciudades' : 'Multi-city Housing' },
      { label: lang === 'es' ? 'Buscador' : 'Search Engine', value: 'Elasticsearch 7.5.2' }
    ],
  },
  {
    id: 'clx-samsung-enterprise',
    title: lang === 'es' ? 'Suite de Aplicaciones Corporativas CLX Samsung' : 'CLX Samsung Corporate Systems Suite',
    subtitle: lang === 'es' ? 'Suite de aplicaciones web internas para departamentos operativos corporativos.' : 'Suite of internal web applications powering corporate business departments.',
    description: lang === 'es'
      ? 'Plataformas web para gestión de divisa extranjera, data warehouse de ventas e inventario, activo fijo, garantías, servicio técnico y crédito de sistema (Credimax).'
      : 'Designed and deployed web platforms for CLX Samsung handling Foreign Currency Management, Sales and Inventory Data Warehousing, Fixed Assets, Guarantee Systems, Technical Support, and System Credit Management (Credimax).',
    category: 'Enterprise',
    badge: lang === 'es' ? 'Suite de Intranet Corporativa' : 'Corporate Intranet Suite',
    tags: ['PHP 7', 'Laravel', 'ReactJS', 'MySQL', 'Bootstrap v4.4', 'Docker'],
    architectureHighlights: lang === 'es' ? [
      'Motor del sistema de crédito de compras Credimax',
      'Módulos de Data Warehouse para inventario y divisas',
      'Automatización de departamentos operativos'
    ] : [
      'Credimax System Credit Management engine',
      'Foreign Currency and Inventory Data Warehouse modules',
      'Internal department automation reducing manual processing time'
    ],
  },
  {
    id: 'intelix-banking-platform',
    title: lang === 'es' ? 'Plataforma Bancaria y Datos Intelix Synergy' : 'Intelix Synergy Banking & Data Platform',
    subtitle: lang === 'es' ? 'Suite de aplicaciones empresariales para operaciones bancarias.' : 'Full-stack enterprise application suite for banking operations.',
    description: lang === 'es'
      ? 'Aplicaciones bancarias con generación automatizada de reportes, configurador dinámico de DataSources y envío masivo de mensajería construidos con Spring Boot y Vaadin.'
      : 'Built banking applications including automated report generation, dynamic DataSources configuration engine, and automated customer messaging systems using Spring Boot and Vaadin.',
    category: 'Enterprise',
    badge: lang === 'es' ? 'Soluciones Bancarias' : 'Banking Solutions',
    tags: ['Spring Boot', 'Vaadin', 'MS SQL Server', 'MongoDB', 'REST & SOAP', 'Spring Data JPA'],
  }
];
export const getExperiences = (lang: Language): ExperienceItem[] => [
  {
    id: 'exp-bita',
    role: 'ASSOCIATE ENGINEER - BACKEND',
    company: 'BITA GmbH',
    period: lang === 'es' ? '12/2022 — Presente' : '12/2022 — Present',
    location: lang === 'es' ? 'Frankfurt, Alemania (Remoto)' : 'Frankfurt, Germany (Remote)',
    description: lang === 'es'
      ? 'BITA (conocida como The Index Technology Company) es una empresa fintech con sede en Frankfurt, Alemania, que ofrece infraestructura cloud empresarial, datos e índices financieros para inversión pasiva y cuantitativa.'
      : 'BITA (known as The Index Technology Company) is a fintech company headquartered in Frankfurt, Germany, that provides enterprise-level cloud infrastructure, data, and financial indices for passive and quantitative investing.',
    highlights: lang === 'es' ? [
      'Planificación, gestión, desarrollo y mantenimiento de sistemas que procesan grandes cantidades de datos.',
      'Desarrollo y mantenimiento de APIs orientadas a microservicios con FastAPI y Python.',
      'Desarrollo de interfaces de usuario y dashboards interactivos.',
      'Análisis de datos y optimización de procesos ETL procesando información financiera a gran escala.'
    ] : [
      'Planning, management, development, and maintenance of systems processing large quantities of data.',
      'Development and maintenance of microservices-oriented APIs with FastAPI and Python.',
      'User interface and interactive dashboard development.',
      'Data analysis and ETL pipeline optimization for large-scale financial index data.'
    ],
    techStack: ['FastAPI', 'Python', 'Docker', 'Node.js', 'React.js', 'SQL', 'AWS', 'Pandas', 'Jupyter', 'Dask', 'Coiled']
  },
  {
    id: 'exp-porta',
    role: 'FULL STACK WEB DEVELOPER',
    company: 'Agencia Web Porta S.R.L.',
    period: '06/2022 — 12/2022',
    location: 'Freelance',
    description: lang === 'es'
      ? 'Creación, mantenimiento y control de procesos de negocio desde la rentabilidad hasta el cobro con procedimientos automatizados. Múltiples conexiones ERP para captura de datos en tiempo real.'
      : 'Created, maintained, and controlled all business processes, from profitability to collection, through automated procedures. Engineered multiple ERP system connections for real-time data collection and recording.',
    highlights: lang === 'es' ? [
      'Integración de pasarelas de pago como BANCARD, TIGO MONEY y ZIMPLE.',
      'Conectividad API con agencias de logística y envíos AEX.',
      'Uso de Vue.js, ReactJS, JavaScript, Laravel y MySQL para desarrollo de punta a punta.'
    ] : [
      'Integrated payment gateways including BANCARD, TIGO MONEY, and ZIMPLE.',
      'Developed API connectivity with AEX shipping logistics agencies.',
      'Utilized Vue.js, ReactJS, JavaScript, Laravel, and MySQL for end-to-end features.'
    ],
    techStack: ['Vue.js', 'ReactJS', 'JavaScript', 'Laravel', 'MySQL', 'Payment Gateways', 'AEX Logistics']
  },
  {
    id: 'exp-swiftflats',
    role: 'FULL STACK WEB DEVELOPER',
    company: 'SWIFTFLATS',
    period: '06/2020 — 08/2022',
    location: 'Freelance',
    description: lang === 'es'
      ? 'Desarrollo de plataforma web de alquileres para estudiantes e ingenieros en prácticas para búsqueda y reserva eficiente de alojamientos.'
      : 'Engineered an online housing rental platform for university students and interns to safely and efficiently browse and book accommodation across shared flats and residences.',
    highlights: lang === 'es' ? [
      'Integración de la API de Stripe para pagos recurrentes y reservas.',
      'Buscador acelerado con Elasticsearch 7.5.2 para catálogo y filtros.',
      'Construido con Symfony 3.4, Twig, Laravel, ReactJS, Docker, PostgreSQL y MySQL.'
    ] : [
      'Integrated Stripe API for secure student payments and booking reservations.',
      'Implemented Elasticsearch 7.5.2 to power instant room search and catalog filtering.',
      'Built with Symfony 3.4, Twig, Laravel, ReactJS, Docker, PostgreSQL, and MySQL.'
    ],
    techStack: ['Symfony 3.4', 'ReactJS', 'Laravel', 'Stripe', 'Elasticsearch 7.5.2', 'Docker', 'PostgreSQL']
  },
  {
    id: 'exp-clx',
    role: 'FULL STACK WEB DEVELOPER',
    company: 'CLX Samsung',
    period: '08/2018 — 05/2022',
    location: 'Valencia, Venezuela',
    description: lang === 'es'
      ? 'Arquitectura y mantenimiento de aplicaciones web internas operativas para departamentos en CLX Samsung.'
      : 'Architected and maintained internal web applications facilitating operations across departments at CLX Samsung.',
    highlights: lang === 'es' ? [
      'Sistemas de gestión de divisas, data warehouse de ventas e inventario y activos fijos.',
      'Sistema de servicio técnico, módulo de garantías y Credimax (crédito de compra).',
      'Desarrollado con PHP 7, Laravel, ReactJS, Bootstrap v4.4, MySQL y Docker.'
    ] : [
      'Developed Foreign Currency Management, Sales & Inventory Data Warehouse, and Fixed Assets systems.',
      'Built Technical Service Management, Guarantee System, and Credimax System Credit Management.',
      'Utilized PHP 7, Laravel, ReactJS, Bootstrap v4.4, Git, GitHub, MySQL, and Docker.'
    ],
    techStack: ['PHP 7', 'Laravel', 'ReactJS', 'MySQL', 'Bootstrap v4.4', 'Docker', 'Git']
  },
  {
    id: 'exp-intelix',
    role: 'FULL STACK WEB DEVELOPER',
    company: 'Intelix Synergy C.A.',
    period: '01/2017 — 08/2018',
    location: 'Valencia, Venezuela',
    description: lang === 'es'
      ? 'Desarrollo de aplicaciones empresariales para el sector bancario.'
      : 'Developed full stack business applications tailored for a banking entity.',
    highlights: lang === 'es' ? [
      'Generación automatizada de reportes, configurador de DataSources y motores de mensajería.',
      'Diseño de servicios REST & SOAP con Spring Boot 1.5+ y frontend con Vaadin.',
      'Manejo de MS SQL Server, MongoDB y documentación Swagger.'
    ] : [
      'Built automated report generation, dynamic DataSources configuration system, and messaging engines.',
      'Designed REST & SOAP Web Services using Spring Boot 1.5+ and component interfaces with Vaadin.',
      'Managed MS SQL Server, MongoDB databases, and documentation via Springfox Swagger.'
    ],
    techStack: ['Spring Boot', 'Vaadin', 'Java', 'REST & SOAP', 'MS SQL Server', 'MongoDB', 'Swagger']
  }
];
