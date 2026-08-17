import type { LucideIcon } from 'lucide-react';
import {
  BarChart3, Building2, Users, Wrench, TrendingUp, Briefcase,
  MapPin, Scale, Award, Shield,
  CheckCircle, Clock, FileText, Handshake,
  Target, ShieldCheck, Eye, ClipboardCheck, Lightbulb
} from 'lucide-react';
import type { Lang } from './locales';

export const BRAND = {
  name: 'ORIVANTA PROPERTY LTD',
  shortName: 'ORIVANTA',
  tagline: 'Where property potential becomes lasting value',
  email: 'olivantaproperty@gmail.com',
  phone: '+250 787 072 060',
  whatsapp: '+250 733 148 047',
  address: 'KN 82 St, Nyarugenge, NDAMAGE Building, 3rd Floor (opposite T2000 Building), Kigali, Rwanda',
  // Exact office pin. Searching Google Maps by the address string alone drops
  // the marker on the wrong side of Nyarugenge, so map embeds and directions
  // links use these coordinates instead.
  coords: { lat: -1.9432884, lng: 30.0583393 },
  hours: 'Monday – Friday: 9:00 AM – 7:00 PM',
  linkedin: 'https://www.linkedin.com/company/143042072/',
  facebook: 'https://web.facebook.com/profile.php?id=61592361462367',
  instagram: 'https://www.instagram.com/orivanta_property/',
  youtube: 'https://www.youtube.com/@ORIVANTAPROPERTYLTD',
  twitter: 'https://x.com/OrivantaPro',
};

// ── Services ──────────────────────────────────────────────────────────────

export const SERVICE_SLUGS = [
  'property-valuation',
  'real-estate-consultancy',
  'property-management',
  'facility-management',
  'real-estate-brokerage',
  'corporate-real-estate-advisory',
  'investment-advisory',
  'land-advisory',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

const SERVICE_ICONS: Record<ServiceSlug, LucideIcon> = {
  'property-valuation': Scale,
  'real-estate-consultancy': Briefcase,
  'property-management': Building2,
  'facility-management': Wrench,
  'real-estate-brokerage': Handshake,
  'corporate-real-estate-advisory': BarChart3,
  'investment-advisory': TrendingUp,
  'land-advisory': MapPin,
};

interface ServiceFAQ { q: string; a: string }
interface ServiceI18n {
  title: string;
  shortDesc: string;
  overview: string;
  whyNeed: string[];
  whoNeeds: string[];
  requirements: string[];
  deliverables: string[];
  faqs: ServiceFAQ[];
  cta: string;
}

const SERVICES_I18N: Record<Lang, Record<ServiceSlug, ServiceI18n>> = {
  en: {
    'property-valuation': {
      title: 'Property Valuation',
      shortDesc: 'Professional and reliable property valuation services to determine accurate market value for all property types.',
      overview: 'ORIVANTA provides independent, accurate, and professional property valuation services for residential, commercial, industrial, agricultural, and specialized properties in accordance with recognized professional valuation standards.',
      whyNeed: ['Buying or selling property', 'Mortgage or bank financing', 'Insurance purposes', 'Bookkeeping purposes', 'Tax assessment', 'VISA Applications', 'Investment analysis', 'Court or legal matters', 'Compensation and acquisition', 'Asset management'],
      whoNeeds: ['Property owners', 'Home buyers', 'Property sellers', 'Banks and financial institutions', 'Insurance companies', 'Investors', 'Government institutions', 'Developers', 'Lawyers', 'Corporate organizations'],
      requirements: ['Copy of Land Title', "Property owner's identification", 'Building plans (if available)', 'Property location or GPS coordinates', 'Property photographs (optional)', 'Purpose of the valuation'],
      deliverables: ['Professional Valuation Report', 'Market Value Opinion', 'Property Description', 'Market Analysis', 'Valuation Methodology', 'Supporting Photographs', 'Professional Recommendations'],
      faqs: [
        { q: 'How long does a property valuation take?', a: 'Typically between 1 and 2 working days depending on the property\'s size, complexity, and the availability of required information.' },
        { q: 'Will someone visit my property?', a: 'Yes. Most valuations require a physical inspection to assess the property\'s condition, location, improvements, and surrounding environment.' },
        { q: 'Can ORIVANTA value land without a building?', a: 'Yes. We provide valuations for vacant land as well as developed properties.' },
        { q: 'Are your valuation reports accepted by banks?', a: 'Our reports are prepared according to professional standards. Acceptance by a specific bank depends on that institution\'s policies.' },
        { q: 'How much does valuation cost?', a: 'Fees vary depending on the property type, size, location, and purpose. Please contact ORIVANTA for a quotation.' },
      ],
      cta: 'Request a Property Valuation',
    },
    'real-estate-consultancy': {
      title: 'Real Estate Consultancy',
      shortDesc: 'Strategic real estate advice to help clients make informed decisions in property investment, development, and management.',
      overview: 'Our consultancy services help clients understand market opportunities, evaluate risks, and develop effective property strategies through market research, analysis, and industry expertise.',
      whyNeed: ['Buying land', 'Buying property', 'Selling property', 'Starting a development project', 'Planning an investment', 'Evaluating risks', 'Expanding your property portfolio'],
      whoNeeds: ['Individual investors', 'Property developers', 'Corporate organizations', 'Foreign investors', 'Financial institutions'],
      requirements: ['Project description', 'Property location', 'Investment objectives', 'Available budget', 'Existing property documents', 'Questions or challenges you want addressed'],
      deliverables: ['Market Analysis Report', 'Strategic Recommendations', 'Risk Assessment', 'Investment Feasibility', 'Professional Advisory Report'],
      faqs: [
        { q: 'Can ORIVANTA help me decide whether a property is worth buying?', a: "Yes. We assess the property's market value, condition, legal considerations, location, and investment potential." },
        { q: 'Can you advise foreign investors?', a: 'Yes. We provide consultancy services to both local and international investors, subject to applicable laws and regulations.' },
      ],
      cta: 'Book a Consultation',
    },
    'property-management': {
      title: 'Property Management',
      shortDesc: 'Professional property management solutions that protect assets, improve performance, and maximize property returns.',
      overview: 'ORIVANTA helps property owners maintain and manage their assets efficiently through tenant management, maintenance coordination, financial monitoring, and property performance improvement.',
      whyNeed: ['Maximize rental income', 'Professional tenant management', 'Maintenance coordination', 'Financial reporting', 'Asset preservation', 'Reduce vacancy rates'],
      whoNeeds: ['Property owners', 'Landlords', 'Investors', 'Developers', 'Corporate organizations'],
      requirements: ['Property ownership documents', 'Existing lease agreements', 'Tenant information', 'Property inventory', 'Maintenance records', "Owner's management instructions"],
      deliverables: ['Tenant Management', 'Rent Collection', 'Maintenance Coordination', 'Financial Reports', 'Occupancy Reports', 'Performance Analysis'],
      faqs: [
        { q: 'Will ORIVANTA collect rent?', a: 'Yes. If agreed under the management contract, we can manage rent collection, maintain records, and provide financial reports.' },
        { q: 'Will I receive regular reports?', a: 'Yes. Property owners receive periodic reports covering occupancy, maintenance activities, income, expenses, and other agreed performance indicators.' },
      ],
      cta: 'Discuss Property Management',
    },
    'facility-management': {
      title: 'Facility Management',
      shortDesc: 'Ensuring buildings and facilities operate efficiently through professional maintenance, management, and operational support.',
      overview: 'Our facility management solutions help organizations maintain safe, functional, and efficient properties while reducing operational costs and improving occupant satisfaction.',
      whyNeed: ['Reduce operational costs', 'Improve building efficiency', 'Ensure safety compliance', 'Enhance occupant satisfaction', 'Professional maintenance planning', 'Asset lifecycle management'],
      whoNeeds: ['Commercial property owners', 'Corporate organizations', 'Government institutions', 'Healthcare facilities', 'Educational institutions', 'Hospitality businesses'],
      requirements: ['Building documentation', 'Current maintenance records', 'Facility inventory', 'Operational requirements', 'Budget parameters'],
      deliverables: ['Maintenance Planning', 'Operational Management', 'Safety Compliance', 'Cost Optimization Reports', 'Vendor Management', 'Performance Monitoring'],
      faqs: [
        { q: 'What types of facilities does ORIVANTA manage?', a: 'We manage commercial buildings, office complexes, residential estates, and specialized facilities across various sectors.' },
        { q: 'Can ORIVANTA reduce our facility operating costs?', a: 'Yes. Through professional planning, vendor management, and operational optimization, we help reduce costs while maintaining quality.' },
      ],
      cta: 'Explore Facility Management',
    },
    'real-estate-brokerage': {
      title: 'Real Estate Brokerage',
      shortDesc: 'Connecting buyers, sellers, landlords, and tenants through professional property marketing and transaction support.',
      overview: 'ORIVANTA provides trusted brokerage services by assisting clients throughout property transactions with market knowledge, negotiation support, and professional guidance.',
      whyNeed: ['Buy property at fair market price', 'Sell property faster and more effectively', 'Find qualified buyers or tenants', 'Access professional market advice', 'Negotiate favourable terms', 'Reduce legal and financial risks'],
      whoNeeds: ['Property owners', 'Property buyers', 'Property sellers', 'Landlords', 'Tenants', 'Investors', 'Property developers', 'Corporate organizations'],
      requirements: ['Proof of ownership (for sellers)', 'Property details', 'Budget and preferences (for buyers)', 'Financing status', 'Property requirements'],
      deliverables: ['Property Marketing', 'Buyer/Tenant Sourcing', 'Negotiation Support', 'Transaction Management', 'Market Pricing Advice', 'Documentation Guidance'],
      faqs: [
        { q: 'Can ORIVANTA help me find a property?', a: 'Yes. We help clients identify properties that match their budget, location preferences, and investment objectives.' },
        { q: 'Does ORIVANTA charge brokerage commission?', a: 'Yes. Brokerage fees are agreed upon before the engagement and are clearly explained in the service agreement.' },
        { q: 'Can ORIVANTA negotiate on my behalf?', a: 'Yes. We represent your interests during negotiations to help achieve fair and favorable transaction terms.' },
      ],
      cta: 'Talk to a Brokerage Expert',
    },
    'corporate-real-estate-advisory': {
      title: 'Corporate Real Estate Advisory',
      shortDesc: 'Helping organizations manage their real estate assets strategically to support business growth and operational efficiency.',
      overview: 'ORIVANTA supports organizations in making informed decisions regarding office space, commercial facilities, property portfolios, leasing, acquisitions, and workplace planning.',
      whyNeed: ['Align property decisions with business objectives', 'Optimize property portfolios', 'Reduce occupancy and operating costs', 'Improve workplace efficiency', 'Support business expansion', 'Make informed leasing and acquisition decisions'],
      whoNeeds: ['Corporations', 'Banks', 'Insurance companies', 'NGOs', 'Government institutions', 'Educational institutions', 'Healthcare organizations', 'Manufacturing companies', 'Hospitality businesses'],
      requirements: ['Company profile', 'Business objectives', 'Existing property portfolio', 'Lease agreements', 'Office space requirements', 'Expansion or relocation plans', 'Budget information'],
      deliverables: ['Portfolio Analysis', 'Strategic Recommendations', 'Cost Optimization Plan', 'Lease Advisory', 'Workplace Planning', 'Relocation Support'],
      faqs: [
        { q: 'Can ORIVANTA help my company reduce property costs?', a: 'Yes. We analyze your real estate portfolio and recommend strategies to improve efficiency and reduce occupancy-related costs.' },
        { q: 'Can ORIVANTA help us relocate our office?', a: 'Yes. We assist organizations with site selection, lease evaluation, workplace planning, and relocation advice.' },
        { q: 'Do you advise organizations with multiple properties?', a: 'Yes. We support clients in managing and optimizing multiple real estate assets across different locations.' },
        { q: 'Can ORIVANTA review commercial lease agreements?', a: 'Yes. We provide professional advice on lease terms and property-related implications.' },
      ],
      cta: 'Book a Corporate Consultation',
    },
    'investment-advisory': {
      title: 'Real Estate Investment Advisory',
      shortDesc: 'Supporting investors with professional analysis and strategic advice to identify opportunities and maximize investment performance.',
      overview: 'ORIVANTA helps investors evaluate real estate opportunities through market research, financial analysis, risk assessment, and investment planning.',
      whyNeed: ['Identify profitable opportunities', 'Assess investment risks', 'Evaluate market conditions', 'Optimize portfolio performance', 'Plan investment strategies', 'Maximize returns'],
      whoNeeds: ['Individual investors', 'Institutional investors', 'Property developers', 'Family offices', 'Foreign investors', 'Corporate investors'],
      requirements: ['Investment objectives', 'Available capital', 'Risk tolerance', 'Preferred property types', 'Target locations', 'Investment timeline'],
      deliverables: ['Market Research Reports', 'Investment Analysis', 'Risk Assessment', 'Financial Projections', 'Portfolio Strategy', 'Opportunity Identification'],
      faqs: [
        { q: 'Can ORIVANTA help me identify good investment properties?', a: 'Yes. We conduct market research and analysis to identify properties with strong investment potential.' },
        { q: 'Do you provide financial projections?', a: 'Yes. We provide financial analysis including projected returns, cash flow analysis, and investment performance metrics.' },
      ],
      cta: 'Discuss Your Investment Goals',
    },
    'land-advisory': {
      title: 'Land Advisory & Development Consultancy',
      shortDesc: 'Professional guidance for land acquisition, development planning, and real estate project success.',
      overview: 'We support developers and investors from the early stages of land identification to project implementation through professional analysis and strategic advice.',
      whyNeed: ['Land acquisition guidance', 'Development feasibility assessment', 'Planning and zoning advice', 'Project viability analysis', 'Risk identification', 'Development strategy'],
      whoNeeds: ['Property developers', 'Land investors', 'Government agencies', 'Corporate organizations', 'Individual investors', 'Construction companies'],
      requirements: ['Project description', 'Land location details', 'Development objectives', 'Budget parameters', 'Timeline requirements', 'Existing land documents'],
      deliverables: ['Land Assessment Report', 'Development Feasibility Study', 'Planning Advice', 'Risk Analysis', 'Development Strategy', 'Project Recommendations'],
      faqs: [
        { q: 'Can ORIVANTA help me assess land before purchase?', a: 'Yes. We conduct thorough land assessments covering location, access, planning considerations, and development potential.' },
        { q: 'Do you advise on development projects?', a: 'Yes. We provide consultancy from initial land identification through to project planning and implementation support.' },
      ],
      cta: 'Get Land Advisory Support',
    },
  },
  fr: {
    'property-valuation': {
      title: 'Évaluation Immobilière',
      shortDesc: "Services d'évaluation immobilière professionnels et fiables pour déterminer la valeur marchande exacte de tous types de biens.",
      overview: "ORIVANTA propose des services d'évaluation immobilière indépendants, précis et professionnels pour les biens résidentiels, commerciaux, industriels, agricoles et spécialisés, conformément aux normes professionnelles d'évaluation reconnues.",
      whyNeed: ['Achat ou vente d\'un bien', 'Financement hypothécaire ou bancaire', "Besoins d'assurance", 'Besoins comptables', 'Évaluation fiscale', 'Demandes de VISA', "Analyse d'investissement", 'Questions judiciaires ou juridiques', 'Indemnisation et acquisition', "Gestion d'actifs"],
      whoNeeds: ['Propriétaires', 'Acheteurs de maison', 'Vendeurs de biens', 'Banques et institutions financières', "Compagnies d'assurance", 'Investisseurs', 'Institutions gouvernementales', 'Promoteurs', 'Avocats', "Organisations d'entreprise"],
      requirements: ['Copie du titre foncier', 'Pièce d\'identité du propriétaire', 'Plans du bâtiment (si disponibles)', 'Emplacement du bien ou coordonnées GPS', 'Photographies du bien (facultatif)', "Objet de l'évaluation"],
      deliverables: ["Rapport d'évaluation professionnel", 'Avis de valeur marchande', 'Description du bien', 'Analyse de marché', "Méthodologie d'évaluation", "Photographies à l'appui", 'Recommandations professionnelles'],
      faqs: [
        { q: "Combien de temps prend une évaluation immobilière?", a: "Généralement entre 1 et 2 jours ouvrables selon la taille, la complexité du bien et la disponibilité des informations requises." },
        { q: "Quelqu'un viendra-t-il visiter mon bien?", a: "Oui. La plupart des évaluations nécessitent une inspection physique pour évaluer l'état, l'emplacement, les améliorations et l'environnement du bien." },
        { q: "ORIVANTA peut-elle évaluer un terrain sans construction?", a: "Oui. Nous évaluons aussi bien les terrains vacants que les biens développés." },
        { q: "Vos rapports d'évaluation sont-ils acceptés par les banques?", a: "Nos rapports sont préparés selon des normes professionnelles. L'acceptation par une banque spécifique dépend des politiques de cette institution." },
        { q: "Combien coûte une évaluation?", a: "Les frais varient selon le type de bien, sa taille, son emplacement et l'objectif. Veuillez contacter ORIVANTA pour un devis." },
      ],
      cta: 'Demander une Évaluation Immobilière',
    },
    'real-estate-consultancy': {
      title: 'Conseil Immobilier',
      shortDesc: "Conseils immobiliers stratégiques pour aider les clients à prendre des décisions éclairées en matière d'investissement, de développement et de gestion immobilière.",
      overview: "Nos services de conseil aident les clients à comprendre les opportunités du marché, évaluer les risques et élaborer des stratégies immobilières efficaces grâce à la recherche de marché, l'analyse et l'expertise sectorielle.",
      whyNeed: ['Acheter un terrain', 'Acheter un bien', 'Vendre un bien', 'Démarrer un projet de développement', 'Planifier un investissement', 'Évaluer les risques', 'Élargir votre portefeuille immobilier'],
      whoNeeds: ['Investisseurs individuels', 'Promoteurs immobiliers', "Organisations d'entreprise", 'Investisseurs étrangers', 'Institutions financières'],
      requirements: ['Description du projet', 'Emplacement du bien', "Objectifs d'investissement", 'Budget disponible', 'Documents de propriété existants', 'Questions ou défis à aborder'],
      deliverables: ['Rapport d\'analyse de marché', 'Recommandations stratégiques', 'Évaluation des risques', "Faisabilité de l'investissement", 'Rapport consultatif professionnel'],
      faqs: [
        { q: 'ORIVANTA peut-elle m\'aider à décider si un bien vaut la peine d\'être acheté?', a: "Oui. Nous évaluons la valeur marchande du bien, son état, les aspects juridiques, l'emplacement et le potentiel d'investissement." },
        { q: 'Pouvez-vous conseiller les investisseurs étrangers?', a: "Oui. Nous fournissons des services de conseil aux investisseurs locaux et internationaux, sous réserve des lois et réglementations applicables." },
      ],
      cta: 'Réserver une Consultation',
    },
    'property-management': {
      title: 'Gestion Immobilière',
      shortDesc: "Solutions professionnelles de gestion immobilière qui protègent les actifs, améliorent la performance et maximisent les rendements.",
      overview: "ORIVANTA aide les propriétaires à entretenir et gérer efficacement leurs biens grâce à la gestion des locataires, la coordination de la maintenance, le suivi financier et l'amélioration des performances.",
      whyNeed: ['Maximiser les revenus locatifs', 'Gestion professionnelle des locataires', 'Coordination de la maintenance', 'Rapports financiers', 'Préservation des actifs', 'Réduire les taux de vacance'],
      whoNeeds: ['Propriétaires', 'Bailleurs', 'Investisseurs', 'Promoteurs', "Organisations d'entreprise"],
      requirements: ['Documents de propriété', 'Contrats de bail existants', 'Informations sur les locataires', 'Inventaire du bien', 'Registres de maintenance', 'Instructions de gestion du propriétaire'],
      deliverables: ['Gestion des locataires', 'Collecte des loyers', 'Coordination de la maintenance', 'Rapports financiers', "Rapports d'occupation", 'Analyse de performance'],
      faqs: [
        { q: 'ORIVANTA collectera-t-elle les loyers?', a: "Oui. Si cela est convenu dans le contrat de gestion, nous pouvons gérer la collecte des loyers, tenir des registres et fournir des rapports financiers." },
        { q: 'Recevrai-je des rapports réguliers?', a: "Oui. Les propriétaires reçoivent des rapports périodiques couvrant l'occupation, les activités de maintenance, les revenus, les dépenses et d'autres indicateurs convenus." },
      ],
      cta: 'Discuter de la Gestion Immobilière',
    },
    'facility-management': {
      title: 'Gestion des Installations',
      shortDesc: "Garantir le fonctionnement efficace des bâtiments et installations grâce à une maintenance, une gestion et un soutien opérationnel professionnels.",
      overview: "Nos solutions de gestion des installations aident les organisations à maintenir des biens sûrs, fonctionnels et efficaces tout en réduisant les coûts opérationnels et en améliorant la satisfaction des occupants.",
      whyNeed: ['Réduire les coûts opérationnels', "Améliorer l'efficacité du bâtiment", 'Assurer la conformité en matière de sécurité', 'Améliorer la satisfaction des occupants', 'Planification professionnelle de la maintenance', 'Gestion du cycle de vie des actifs'],
      whoNeeds: ['Propriétaires de biens commerciaux', "Organisations d'entreprise", 'Institutions gouvernementales', 'Établissements de santé', "Établissements d'enseignement", "Entreprises d'hôtellerie"],
      requirements: ['Documentation du bâtiment', 'Registres de maintenance actuels', 'Inventaire des installations', 'Exigences opérationnelles', 'Paramètres budgétaires'],
      deliverables: ['Planification de la maintenance', 'Gestion opérationnelle', 'Conformité en matière de sécurité', "Rapports d'optimisation des coûts", 'Gestion des fournisseurs', 'Suivi de la performance'],
      faqs: [
        { q: "Quels types d'installations ORIVANTA gère-t-elle?", a: "Nous gérons des bâtiments commerciaux, des complexes de bureaux, des domaines résidentiels et des installations spécialisées dans divers secteurs." },
        { q: "ORIVANTA peut-elle réduire nos coûts d'exploitation?", a: "Oui. Grâce à une planification professionnelle, une gestion des fournisseurs et une optimisation opérationnelle, nous aidons à réduire les coûts tout en maintenant la qualité." },
      ],
      cta: 'Découvrir la Gestion des Installations',
    },
    'real-estate-brokerage': {
      title: 'Courtage Immobilier',
      shortDesc: "Mettre en relation acheteurs, vendeurs, bailleurs et locataires grâce à un marketing immobilier professionnel et un accompagnement des transactions.",
      overview: "ORIVANTA offre des services de courtage fiables en accompagnant les clients tout au long des transactions immobilières grâce à sa connaissance du marché, son soutien à la négociation et ses conseils professionnels.",
      whyNeed: ['Acheter un bien à un prix juste', 'Vendre un bien plus rapidement et efficacement', 'Trouver des acheteurs ou locataires qualifiés', 'Accéder à des conseils de marché professionnels', 'Négocier des conditions favorables', 'Réduire les risques juridiques et financiers'],
      whoNeeds: ['Propriétaires', 'Acheteurs de biens', 'Vendeurs de biens', 'Bailleurs', 'Locataires', 'Investisseurs', 'Promoteurs immobiliers', "Organisations d'entreprise"],
      requirements: ['Preuve de propriété (pour les vendeurs)', 'Détails du bien', 'Budget et préférences (pour les acheteurs)', 'Statut de financement', 'Exigences relatives au bien'],
      deliverables: ['Marketing immobilier', "Recherche d'acheteurs/locataires", 'Soutien à la négociation', 'Gestion des transactions', 'Conseils de tarification du marché', 'Accompagnement documentaire'],
      faqs: [
        { q: 'ORIVANTA peut-elle m\'aider à trouver un bien?', a: "Oui. Nous aidons les clients à identifier des biens correspondant à leur budget, leurs préférences de localisation et leurs objectifs d'investissement." },
        { q: 'ORIVANTA facture-t-elle une commission de courtage?', a: "Oui. Les frais de courtage sont convenus avant l'engagement et clairement expliqués dans le contrat de service." },
        { q: 'ORIVANTA peut-elle négocier en mon nom?', a: "Oui. Nous représentons vos intérêts lors des négociations pour obtenir des conditions de transaction justes et favorables." },
      ],
      cta: 'Parler à un Expert en Courtage',
    },
    'corporate-real-estate-advisory': {
      title: "Conseil Immobilier d'Entreprise",
      shortDesc: "Aider les organisations à gérer stratégiquement leurs actifs immobiliers pour soutenir la croissance et l'efficacité opérationnelle.",
      overview: "ORIVANTA accompagne les organisations dans la prise de décisions éclairées concernant les espaces de bureaux, les installations commerciales, les portefeuilles immobiliers, la location, les acquisitions et l'aménagement des espaces de travail.",
      whyNeed: ['Aligner les décisions immobilières sur les objectifs commerciaux', 'Optimiser les portefeuilles immobiliers', "Réduire les coûts d'occupation et d'exploitation", "Améliorer l'efficacité du lieu de travail", "Soutenir l'expansion de l'entreprise", "Prendre des décisions éclairées en matière de location et d'acquisition"],
      whoNeeds: ['Entreprises', 'Banques', "Compagnies d'assurance", 'ONG', 'Institutions gouvernementales', "Établissements d'enseignement", 'Organisations de santé', 'Entreprises manufacturières', "Entreprises d'hôtellerie"],
      requirements: ["Profil de l'entreprise", 'Objectifs commerciaux', 'Portefeuille immobilier existant', 'Contrats de bail', 'Besoins en espace de bureau', 'Plans d\'expansion ou de relocalisation', 'Informations budgétaires'],
      deliverables: ['Analyse de portefeuille', 'Recommandations stratégiques', "Plan d'optimisation des coûts", 'Conseil en matière de bail', 'Aménagement du lieu de travail', 'Soutien à la relocalisation'],
      faqs: [
        { q: 'ORIVANTA peut-elle aider mon entreprise à réduire ses coûts immobiliers?', a: "Oui. Nous analysons votre portefeuille immobilier et recommandons des stratégies pour améliorer l'efficacité et réduire les coûts liés à l'occupation." },
        { q: 'ORIVANTA peut-elle nous aider à relocaliser notre bureau?', a: "Oui. Nous accompagnons les organisations dans la sélection de sites, l'évaluation des baux, l'aménagement du lieu de travail et les conseils de relocalisation." },
        { q: 'Conseillez-vous les organisations possédant plusieurs biens?', a: "Oui. Nous accompagnons les clients dans la gestion et l'optimisation de plusieurs actifs immobiliers situés dans différents lieux." },
        { q: 'ORIVANTA peut-elle examiner les contrats de bail commercial?', a: "Oui. Nous fournissons des conseils professionnels sur les conditions de bail et leurs implications immobilières." },
      ],
      cta: "Réserver une Consultation d'Entreprise",
    },
    'investment-advisory': {
      title: 'Conseil en Investissement Immobilier',
      shortDesc: "Accompagner les investisseurs grâce à une analyse professionnelle et des conseils stratégiques pour identifier les opportunités et maximiser la performance des investissements.",
      overview: "ORIVANTA aide les investisseurs à évaluer les opportunités immobilières grâce à la recherche de marché, l'analyse financière, l'évaluation des risques et la planification des investissements.",
      whyNeed: ['Identifier des opportunités rentables', "Évaluer les risques d'investissement", 'Évaluer les conditions du marché', 'Optimiser la performance du portefeuille', "Planifier des stratégies d'investissement", 'Maximiser les rendements'],
      whoNeeds: ['Investisseurs individuels', 'Investisseurs institutionnels', 'Promoteurs immobiliers', 'Family offices', 'Investisseurs étrangers', "Investisseurs d'entreprise"],
      requirements: ["Objectifs d'investissement", 'Capital disponible', 'Tolérance au risque', 'Types de biens préférés', 'Emplacements cibles', "Calendrier d'investissement"],
      deliverables: ['Rapports de recherche de marché', "Analyse d'investissement", 'Évaluation des risques', 'Projections financières', 'Stratégie de portefeuille', "Identification d'opportunités"],
      faqs: [
        { q: 'ORIVANTA peut-elle m\'aider à identifier de bons biens d\'investissement?', a: "Oui. Nous menons des recherches et analyses de marché pour identifier des biens à fort potentiel d'investissement." },
        { q: 'Fournissez-vous des projections financières?', a: "Oui. Nous fournissons une analyse financière incluant les rendements projetés, l'analyse des flux de trésorerie et les indicateurs de performance des investissements." },
      ],
      cta: 'Discuter de Vos Objectifs d\'Investissement',
    },
    'land-advisory': {
      title: 'Conseil Foncier & Développement',
      shortDesc: "Accompagnement professionnel pour l'acquisition de terrains, la planification du développement et la réussite des projets immobiliers.",
      overview: "Nous accompagnons les promoteurs et investisseurs dès les premières étapes d'identification du terrain jusqu'à la mise en œuvre du projet, grâce à une analyse professionnelle et des conseils stratégiques.",
      whyNeed: ['Conseil en acquisition de terrain', 'Évaluation de la faisabilité du développement', 'Conseils en planification et zonage', 'Analyse de viabilité du projet', 'Identification des risques', 'Stratégie de développement'],
      whoNeeds: ['Promoteurs immobiliers', 'Investisseurs fonciers', 'Agences gouvernementales', "Organisations d'entreprise", 'Investisseurs individuels', 'Entreprises de construction'],
      requirements: ['Description du projet', "Détails de l'emplacement du terrain", 'Objectifs de développement', 'Paramètres budgétaires', 'Exigences de calendrier', 'Documents fonciers existants'],
      deliverables: ['Rapport d\'évaluation du terrain', 'Étude de faisabilité du développement', 'Conseils en planification', 'Analyse des risques', 'Stratégie de développement', 'Recommandations de projet'],
      faqs: [
        { q: "ORIVANTA peut-elle m'aider à évaluer un terrain avant l'achat?", a: "Oui. Nous effectuons des évaluations foncières approfondies couvrant l'emplacement, l'accès, les considérations de planification et le potentiel de développement." },
        { q: 'Conseillez-vous sur les projets de développement?', a: "Oui. Nous fournissons des conseils depuis l'identification initiale du terrain jusqu'à la planification et le soutien à la mise en œuvre du projet." },
      ],
      cta: 'Obtenir un Accompagnement Foncier',
    },
  },
  rw: {
    'property-valuation': {
      title: "Gusuzuma Agaciro k'Umutungo",
      shortDesc: "Serivisi z'inzobere zo gusuzuma agaciro k'umutungo mu buryo bwizewe kugira ngo hamenyekane agaciro nyakuri ku isoko ku bwoko bwose bw'imitungo.",
      overview: "ORIVANTA itanga serivisi zigenga, z'ukuri kandi z'inzobere zo gusuzuma agaciro k'imitungo yo guturamo, iy'ubucuruzi, iy'inganda, iy'ubuhinzi n'indi mitungo yihariye, hakurikijwe amahame mpuzamahanga yo gusuzuma agaciro.",
      whyNeed: ['Kugura cyangwa kugurisha umutungo', "Kubona inguzanyo cyangwa ifasha ry'ibanki", "Impamvu z'ubwishingizi", "Impamvu z'ibaruramari", 'Gusuzuma imisoro', 'Gusaba viza', "Isesengura ry'ishoramari", "Ibibazo by'urukiko cyangwa amategeko", 'Indishyi n\'iyegurira', 'Gucunga umutungo'],
      whoNeeds: ["Ba nyir'umutungo", 'Abagura amazu', 'Abagurisha imitungo', "Amabanki n'inzego z'imari", "Amasosiyete y'ubwishingizi", 'Abashoramari', 'Inzego za Leta', 'Abateza imbere imitungo', 'Abavoka', 'Amasosiyete'],
      requirements: ["Kopi y'impapuro z'ubutaka", "Indangamuntu y'unyir'umutungo", 'Ibishushanyo mbonera by\'inyubako (niba bihari)', 'Aho umutungo uherereye cyangwa GPS', "Amafoto y'umutungo (si ngombwa)", 'Impamvu yo gusuzuma'],
      deliverables: ["Raporo y'inzobere yo gusuzuma agaciro", "Igitekerezo ku giciro ku isoko", "Ibisobanuro by'umutungo", "Isesengura ry'isoko", 'Uburyo bwakoreshejwe mu gusuzuma', 'Amafoto agaragaza umutungo', "Inama z'inzobere"],
      faqs: [
        { q: 'Gusuzuma umutungo bimara igihe kingana iki?', a: "Bisanzwe bimara hagati y'umunsi 1 na 2 y'akazi bitewe n'ubunini bw'umutungo, uburemere bwawo, n'uko amakuru akenewe aboneka." },
        { q: 'Hari uzasura umutungo wanjye?', a: "Yego. Kenshi gusuzuma bisaba gusura umutungo kugira ngo hasuzumwe imiterere yawo, aho uherereye, ivugururwa ryawo n'ibidukikije." },
        { q: 'ORIVANTA ishobora gusuzuma ubutaka budafite inyubako?', a: "Yego. Dusuzuma ubutaka budafite inyubako ndetse n'imitungo yubatswe." },
        { q: 'Raporo zanyu zo gusuzuma zemerwa n\'amabanki?', a: "Raporo zacu zikorwa hakurikijwe amahame y'inzobere. Kwemerwa n'ibanki runaka bishingiye ku mahame yayo bwite." },
        { q: 'Gusuzuma umutungo bihenda bite?', a: "Ikiguzi kiratandukanye bitewe n'ubwoko bw'umutungo, ubunini bwawo, aho uherereye n'impamvu yo gusuzuma. Duhamagare kugira ngo tuguhe igiciro." },
      ],
      cta: 'Saba Gusuzuma Umutungo Wawe',
    },
    'real-estate-consultancy': {
      title: "Inama z'Ubucuruzi bw'Umutungo",
      shortDesc: "Inama z'ingamba ku mutungo zifasha abakiriya gufata ibyemezo byiza mu ishoramari, iterambere n'ubuyobozi bw'imitungo.",
      overview: "Serivisi zacu z'inama zifasha abakiriya gusobanukirwa amahirwe ari ku isoko, gusuzuma ibyago, no guteza imbere ingamba nziza z'umutungo binyuze mu bushakashatsi bw'isoko, isesengura, n'ubunararibonye bw'urwego.",
      whyNeed: ['Kugura ubutaka', 'Kugura umutungo', 'Kugurisha umutungo', "Gutangira umushinga w'iterambere", 'Gutegura ishoramari', 'Gusuzuma ibyago', 'Kwagura umutungo wawe'],
      whoNeeds: ['Abashoramari ku giti cyabo', 'Abateza imbere imitungo', 'Amasosiyete', "Abashoramari b'amahanga", "Inzego z'imari"],
      requirements: ["Ibisobanuro by'umushinga", 'Aho umutungo uherereye', "Intego z'ishoramari", "Ingengo y'imari ihari", "Inyandiko z'umutungo zihari", 'Ibibazo cyangwa imbogamizi ushaka gukemura'],
      deliverables: ["Raporo y'isesengura ry'isoko", "Inama z'ingamba", "Isuzuma ry'ibyago", "Ubushobozi bw'ishoramari", "Raporo y'inama y'inzobere"],
      faqs: [
        { q: "ORIVANTA ishobora kunyunganira mu gufata icyemezo niba umutungo ukwiye kuguzwa?", a: "Yego. Dusuzuma agaciro k'umutungo ku isoko, imiterere yawo, ibirebana n'amategeko, aho uherereye n'ubushobozi bwo gushora imari." },
        { q: 'Mushobora kugira inama abashoramari b\'amahanga?', a: "Yego. Dutanga serivisi z'inama ku bashoramari bo mu gihugu no hanze, hakurikijwe amategeko abigenga." },
      ],
      cta: 'Saba Inama',
    },
    'property-management': {
      title: 'Gucunga Umutungo',
      shortDesc: "Ibisubizo by'inzobere byo gucunga umutungo birinda ibintu by'agaciro, byongera imikorere kandi bikuza inyungu z'umutungo.",
      overview: "ORIVANTA ifasha ba nyir'umutungo kubungabunga no gucunga neza ibintu byabo binyuze mu gucunga abakode, guhuza ivugururwa, gukurikirana imari, no kongera imikorere y'umutungo.",
      whyNeed: ['Kongera inyungu zo gukodesha', 'Gucunga abakode mu buryo bw\'inzobere', 'Guhuza ivugururwa', "Gutanga raporo z'imari", "Kubungabunga ibintu by'agaciro", 'Kugabanya ubusa mu bakode'],
      whoNeeds: ["Ba nyir'umutungo", 'Abakodesha', 'Abashoramari', 'Abateza imbere', 'Amasosiyete'],
      requirements: ["Inyandiko z'ubwiyandikishe bw'umutungo", "Amasezerano y'ubukode ahari", "Amakuru y'abakode", "Urutonde rw'ibintu by'umutungo", "Inyandiko z'ivugururwa", "Amabwiriza y'ubuyobozi ava ku mutungo"],
      deliverables: ['Gucunga Abakode', 'Gukusanya Ubukode', 'Guhuza Ivugururwa', "Raporo z'Imari", "Raporo z'Ubwikorezi", "Isesengura ry'Imikorere"],
      faqs: [
        { q: 'ORIVANTA izakusanya ubukode?', a: "Yego. Niba byemejwe mu masezerano y'ubuyobozi, dushobora gucunga gukusanya ubukode, kubika inyandiko, no gutanga raporo z'imari." },
        { q: 'Nzahabwa raporo buri gihe?', a: "Yego. Ba nyir'umutungo bahabwa raporo z'igihe gito zigaragaza ubwikorezi, ivugururwa, inyungu, ikoreshwa ry'amafaranga n'ibindi bipimo byemejwe." },
      ],
      cta: 'Ganira ku Gucunga Umutungo',
    },
    'facility-management': {
      title: "Gucunga Ibikorwa Remezo by'Inyubako",
      shortDesc: "Kwemeza ko inyubako n'ibikoresho by'ibanze bikora neza binyuze mu ivugururwa ry'inzobere, ubuyobozi, n'inkunga y'imikorere.",
      overview: "Ibisubizo byacu byo gucunga ibikorwa remezo bifasha imiryango kubungabunga imitungo yizewe, ikora neza kandi yifashisha neza, mu gihe bigabanya ikiguzi cy'imikorere no kongera kwishimira kw'abayikoreramo.",
      whyNeed: ['Kugabanya ikiguzi cy\'imikorere', "Kongera imikorere y'inyubako", 'Kwemeza kubahiriza umutekano', "Kongera kwishimira kw'abayikoreramo", "Gutegura ivugururwa mu buryo bw'inzobere", "Gucunga igihe cyose cy'ikoreshwa ry'ibintu"],
      whoNeeds: ["Ba nyir'imitungo y'ubucuruzi", 'Amasosiyete', 'Inzego za Leta', "Ibigo by'ubuvuzi", "Ibigo by'uburezi", "Ubucuruzi bw'ubukerarugendo"],
      requirements: ["Inyandiko z'inyubako", 'Inyandiko z\'ivugururwa ziriho', 'Urutonde rw\'ibikoresho', 'Ibisabwa mu mikorere', "Ingengo y'imari"],
      deliverables: ['Gutegura Ivugururwa', 'Gucunga Imikorere', 'Kubahiriza Umutekano', 'Raporo zo Kugabanya Ikiguzi', 'Gucunga Abatanga Serivisi', 'Gukurikirana Imikorere'],
      faqs: [
        { q: "Ni ubuhe bwoko bw'ibikorwa remezo ORIVANTA icunga?", a: "Ducunga inyubako z'ubucuruzi, za biro, imitungo yo gutura, n'ibindi bikorwa byihariye mu byiciro bitandukanye." },
        { q: 'ORIVANTA ishobora kugabanya ikiguzi cy\'imikorere yacu?', a: "Yego. Binyuze mu gutegura mu buryo bw'inzobere, gucunga abatanga serivisi, no kunoza imikorere, dufasha kugabanya ikiguzi hatabuze ubwiza." },
      ],
      cta: 'Menya Byinshi ku Gucunga Ibikorwa Remezo',
    },
    'real-estate-brokerage': {
      title: "Ubucuruzi bw'Imitungo",
      shortDesc: "Guhuza abagura, abagurisha, abakodesha n'abakode binyuze mu kwamamaza umutungo mu buryo bw'inzobere no gufasha mu masoko.",
      overview: "ORIVANTA itanga serivisi z'ubucuruzi zizewe binyuze mu kunganira abakiriya mu masoko y'umutungo, ifite ubumenyi bw'isoko, inkunga mu ivugurwa, n'ubuyobozi bw'inzobere.",
      whyNeed: ['Kugura umutungo ku giciro gikwiye ku isoko', 'Kugurisha umutungo vuba kandi neza', 'Kubona abagura cyangwa abakode bafite ubushobozi', "Kubona inama z'inzobere ku isoko", 'Kuvugurwa amabwiriza meza', "Kugabanya ibyago by'amategeko n'iby'imari"],
      whoNeeds: ["Ba nyir'umutungo", 'Abagura umutungo', 'Abagurisha umutungo', 'Abakodesha', 'Abakode', 'Abashoramari', 'Abateza imbere imitungo', 'Amasosiyete'],
      requirements: ["Icyemezo cy'ubwiyandikishe (ku bagurisha)", "Ibisobanuro by'umutungo", "Ingengo y'imari n'ibyifuzo (ku bagura)", 'Uko ifasha ry\'imari rihagaze', "Ibisabwa ku mutungo"],
      deliverables: ['Kwamamaza Umutungo', 'Gushaka Abagura/Abakode', 'Inkunga mu Ivugurwa', 'Gucunga Amasoko', "Inama ku Giciro cy'Isoko", 'Ubuyobozi mu Nyandiko'],
      faqs: [
        { q: 'ORIVANTA ishobora kunfasha kubona umutungo?', a: "Yego. Dufasha abakiriya kubona imitungo ihuye n'ingengo y'imari yabo, aho bifuza n'intego zabo z'ishoramari." },
        { q: 'ORIVANTA isaba komisiyo y\'ubucuruzi?', a: "Yego. Amafaranga y'ubucuruzi yumvikanwaho mbere y'akazi kandi asobanurwa neza mu masezerano y'akazi." },
        { q: 'ORIVANTA ishobora kuvugurwa mu izina ryanjye?', a: "Yego. Duhagarariye inyungu zawe mu ivugurwa kugira ngo dufatane amasezerano meza kandi akwiye." },
      ],
      cta: "Ganira n'Inzobere mu Bucuruzi bw'Imitungo",
    },
    'corporate-real-estate-advisory': {
      title: "Inama z'Umutungo ku Masosiyete",
      shortDesc: "Gufasha imiryango gucunga mu buryo bw'ingamba ibintu byabo by'umutungo kugira ngo bishyigikire iterambere ry'ubucuruzi n'imikorere myiza.",
      overview: "ORIVANTA ishyigikira imiryango mu gufata ibyemezo byiza birebana n'ibyumba bya biro, ibikorwa remezo by'ubucuruzi, imitungo bafite, ubukode, kugura imitungo, no gutegura ahantu ho gukorera.",
      whyNeed: ["Guhuza ibyemezo by'umutungo n'intego z'ubucuruzi", 'Kunoza imitungo bafite', 'Kugabanya ikiguzi cyo gutura no gukoresha', "Kongera imikorere y'ahantu ho gukorera", "Gushyigikira iterambere ry'ubucuruzi", 'Gufata ibyemezo byiza ku bukode no kugura'],
      whoNeeds: ['Amasosiyete', 'Amabanki', "Amasosiyete y'ubwishingizi", 'Imiryango itari iya Leta', 'Inzego za Leta', "Ibigo by'uburezi", "Imiryango y'ubuvuzi", 'Amasosiyete akora ibicuruzwa', "Ubucuruzi bw'ubukerarugendo"],
      requirements: ["Amakuru y'isosiyete", "Intego z'ubucuruzi", 'Imitungo isanzwe ifitwe', "Amasezerano y'ubukode", 'Ibisabwa ku byumba bya biro', 'Gahunda zo kwaguka cyangwa kwimuka', "Amakuru ku ngengo y'imari"],
      deliverables: ["Isesengura ry'Imitungo", "Inama z'Ingamba", 'Gahunda yo Kugabanya Ikiguzi', 'Inama ku Bukode', 'Gutegura Ahantu ho Gukorera', 'Inkunga yo Kwimuka'],
      faqs: [
        { q: 'ORIVANTA ishobora gufasha isosiyete yanjye kugabanya ikiguzi cy\'umutungo?', a: "Yego. Dusesengura imitungo yanyu maze tugatanga ingamba zo kunoza imikorere no kugabanya ikiguzi cyo gutura." },
        { q: 'ORIVANTA ishobora kudufasha kwimura biro yacu?', a: "Yego. Dufasha imiryango guhitamo ahantu, gusuzuma amasezerano y'ubukode, gutegura ahantu ho gukorera, no kugira inama ku kwimuka." },
        { q: 'Mutanga inama ku miryango ifite imitungo myinshi?', a: "Yego. Dufasha abakiriya gucunga no kunoza imitungo myinshi iri ahantu hatandukanye." },
        { q: 'ORIVANTA ishobora gusuzuma amasezerano y\'ubukode bw\'ubucuruzi?', a: "Yego. Dutanga inama z'inzobere ku bipimo by'ubukode n'ingaruka zabyo ku mutungo." },
      ],
      cta: 'Saba Inama y\'Isosiyete Yawe',
    },
    'investment-advisory': {
      title: "Inama z'Ishoramari mu Mutungo",
      shortDesc: "Gushyigikira abashoramari binyuze mu isesengura ry'inzobere n'inama z'ingamba kugira ngo bamenye amahirwe no kongera umusaruro w'ishoramari.",
      overview: "ORIVANTA ifasha abashoramari gusuzuma amahirwe y'umutungo binyuze mu bushakashatsi bw'isoko, isesengura ry'imari, gusuzuma ibyago, no gutegura ishoramari.",
      whyNeed: ['Kumenya amahirwe atanga inyungu', "Gusuzuma ibyago by'ishoramari", "Gusuzuma imiterere y'isoko", 'Kunoza umusaruro w\'imitungo bafite', "Gutegura ingamba z'ishoramari", 'Kongera inyungu'],
      whoNeeds: ['Abashoramari ku giti cyabo', "Abashoramari b'ibigo", 'Abateza imbere imitungo', "Ibigo by'imiryango", "Abashoramari b'amahanga", "Abashoramari b'amasosiyete"],
      requirements: ["Intego z'ishoramari", 'Umutungo uhari', 'Ubushobozi bwo kwihanganira ibyago', 'Ubwoko bw\'umutungo bushakwa', 'Ahantu hagenwe', "Igihe cy'ishoramari"],
      deliverables: ["Raporo z'Ubushakashatsi bw'Isoko", "Isesengura ry'Ishoramari", "Isuzuma ry'Ibyago", "Iteganyagihe ry'Imari", 'Ingamba z\'Imitungo', 'Kumenya Amahirwe'],
      faqs: [
        { q: 'ORIVANTA ishobora kunfasha kubona imitungo myiza yo gushoramo?', a: "Yego. Dukora ubushakashatsi n'isesengura ry'isoko kugira ngo dumenye imitungo ifite ubushobozi bwinshi bw'ishoramari." },
        { q: 'Mutanga iteganyagihe ry\'imari?', a: "Yego. Dutanga isesengura ry'imari harimo inyungu ziteganyijwe, isesengura ry'imari yinjira n'isohoka, n'ibindi bipimo by'imikorere y'ishoramari." },
      ],
      cta: 'Ganira ku Ntego zawe z\'Ishoramari',
    },
    'land-advisory': {
      title: 'Inama ku Butaka & Iterambere',
      shortDesc: "Ubuyobozi bw'inzobere mu kugura ubutaka, gutegura iterambere, no gutsinda imishinga y'umutungo.",
      overview: "Dushyigikira abateza imbere n'abashoramari kuva mu ntangiriro yo kumenya ubutaka kugeza mu gushyira mu bikorwa umushinga, binyuze mu isesengura ry'inzobere n'inama z'ingamba.",
      whyNeed: ['Ubuyobozi bwo kugura ubutaka', "Isuzuma ry'ubushobozi bw'iterambere", "Inama ku gutegura no ku migabane y'ubutaka", "Isesengura ry'ubushobozi bw'umushinga", 'Kumenya ibyago', "Ingamba z'iterambere"],
      whoNeeds: ['Abateza imbere imitungo', 'Abashoramari mu butaka', 'Inzego za Leta', 'Amasosiyete', 'Abashoramari ku giti cyabo', "Amasosiyete y'ubwubatsi"],
      requirements: ["Ibisobanuro by'umushinga", 'Ibisobanuro ku hantu ubutaka buherereye', "Intego z'iterambere", "Ingengo y'imari", 'Ibisabwa ku gihe', 'Inyandiko z\'ubutaka zihari'],
      deliverables: ['Raporo yo Gusuzuma Ubutaka', "Ubushakashatsi bw'Ubushobozi bw'Iterambere", 'Inama ku Gutegura', "Isesengura ry'Ibyago", "Ingamba z'Iterambere", 'Inama ku Mushinga'],
      faqs: [
        { q: 'ORIVANTA ishobora kunfasha gusuzuma ubutaka mbere yo kubugura?', a: "Yego. Dukora isuzuma ryimbitse ry'ubutaka ririmo aho buherereye, uko bugerwaho, ibirebana no gutegura, n'ubushobozi bw'iterambere." },
        { q: 'Mutanga inama ku mishinga y\'iterambere?', a: "Yego. Dutanga inama kuva mu kumenya ubutaka bwa mbere kugeza mu gutegura umushinga no kuwushyira mu bikorwa." },
      ],
      cta: 'Saba Inama ku Butaka',
    },
  },
};

export function getServices(lang: Lang) {
  return SERVICE_SLUGS.map((slug) => ({ slug, icon: SERVICE_ICONS[slug], ...SERVICES_I18N[lang][slug] }));
}

export function getService(lang: Lang, slug: string) {
  if (!(SERVICE_SLUGS as readonly string[]).includes(slug)) return undefined;
  const s = slug as ServiceSlug;
  return { slug: s, icon: SERVICE_ICONS[s], ...SERVICES_I18N[lang][s] };
}

// ── Core Values (ORIVANTA acronym) ──────────────────────────────────────────

const VALUE_LETTERS = ['O', 'R', 'I', 'V', 'A', 'N', 'T', 'A'] as const;
const VALUE_ICONS: LucideIcon[] = [Target, ShieldCheck, Scale, Eye, ClipboardCheck, Lightbulb, Handshake, TrendingUp];

const VALUES_I18N: Record<Lang, { title: string; desc: string }[]> = {
  en: [
    { title: 'Opportunity', desc: 'We identify, unlock, and deliver valuable property opportunities for clients, investors, and communities.' },
    { title: 'Reliability', desc: 'We provide consistent, accurate, and professional real estate services built on expertise and commitment.' },
    { title: 'Integrity', desc: 'We operate with honesty, transparency, and ethical responsibility in every transaction and advisory service.' },
    { title: 'Vision', desc: 'We apply strategic thinking and market insight to create sustainable real estate solutions for the future.' },
    { title: 'Accountability', desc: 'We accept responsibility for our actions and ensure quality results through professional standards.' },
    { title: 'Novelty (Innovation)', desc: 'We embrace technology, creativity, and modern approaches to deliver smarter property solutions.' },
    { title: 'Trust', desc: 'Trust is the foundation of every partnership we create with clients, investors, and stakeholders.' },
    { title: 'Advancement', desc: 'We continuously improve our knowledge, services, and solutions to remain competitive in the evolving real estate industry.' },
  ],
  fr: [
    { title: 'Opportunité', desc: "Nous identifions, révélons et concrétisons des opportunités immobilières précieuses pour nos clients, investisseurs et communautés." },
    { title: 'Fiabilité', desc: "Nous offrons des services immobiliers cohérents, précis et professionnels fondés sur l'expertise et l'engagement." },
    { title: 'Intégrité', desc: "Nous agissons avec honnêteté, transparence et responsabilité éthique dans chaque transaction et service de conseil." },
    { title: 'Vision', desc: "Nous appliquons une réflexion stratégique et une connaissance du marché pour créer des solutions immobilières durables pour l'avenir." },
    { title: 'Responsabilité', desc: "Nous assumons la responsabilité de nos actions et garantissons des résultats de qualité grâce à des normes professionnelles." },
    { title: 'Innovation', desc: "Nous adoptons la technologie, la créativité et des approches modernes pour offrir des solutions immobilières plus intelligentes." },
    { title: 'Confiance', desc: "La confiance est le fondement de chaque partenariat que nous créons avec nos clients, investisseurs et parties prenantes." },
    { title: 'Avancement', desc: "Nous améliorons continuellement nos connaissances, nos services et nos solutions pour rester compétitifs dans un secteur immobilier en constante évolution." },
  ],
  rw: [
    { title: 'Amahirwe', desc: "Dumenya, dukingura, kandi dutanga amahirwe y'agaciro y'umutungo ku bakiriya, abashoramari, n'imiryango." },
    { title: 'Kwizerwa', desc: "Dutanga serivisi z'umutungo zihamye, z'ukuri kandi z'inzobere, zishingiye ku bunararibonye n'ubwitange." },
    { title: 'Ubudakemwa', desc: "Dukora dufite ubunyangamugayo, ukuri, n'inshingano z'imyitwarire muri buri masoko n'ikorwa ry'inama." },
    { title: 'Icyerekezo', desc: "Dukoresha ubwenge bw'ingamba n'ubumenyi bw'isoko kugira ngo turemere ibisubizo by'umutungo birambye ku bw'ejo hazaza." },
    { title: 'Inshingano', desc: "Twemera inshingano z'ibikorwa byacu kandi dukemeza umusaruro mwiza binyuze mu mahame y'inzobere." },
    { title: 'Ubushya', desc: "Twakira ikoranabuhanga, ubushishozi, n'inzira zigezweho kugira ngo dutange ibisubizo by'umutungo byiza kurushaho." },
    { title: 'Ikizere', desc: "Ikizere ni umusingi wa buri bufatanye dushyiraho n'abakiriya, abashoramari, n'abafatanyabikorwa." },
    { title: 'Iterambere', desc: "Dukomeza kuzamura ubumenyi bwacu, serivisi zacu, n'ibisubizo byacu kugira ngo dukomeze guhagarara neza mu rwego rw'umutungo rugenda ruhinduka." },
  ],
};

export function getValues(lang: Lang) {
  return VALUE_LETTERS.map((letter, i) => ({ letter, icon: VALUE_ICONS[i], ...VALUES_I18N[lang][i] }));
}

// ── Process Steps ────────────────────────────────────────────────────────

const PROCESS_STEP_NUMS = ['01', '02', '03', '04'] as const;
const PROCESS_ICONS: LucideIcon[] = [Users, FileText, CheckCircle, Clock];

const PROCESS_I18N: Record<Lang, { title: string; desc: string }[]> = {
  en: [
    { title: 'Understand Client Needs', desc: 'We begin by identifying client goals, challenges, and expectations through detailed consultation.' },
    { title: 'Analyze Property Information', desc: 'We evaluate property characteristics, market conditions, and investment factors with precision.' },
    { title: 'Professional Recommendations', desc: 'We deliver clear, practical, and evidence-based advice tailored to your specific situation.' },
    { title: 'Support Decision Making', desc: 'We assist clients in implementing successful real estate strategies from start to finish.' },
  ],
  fr: [
    { title: 'Comprendre les Besoins du Client', desc: "Nous commençons par identifier les objectifs, défis et attentes du client à travers une consultation détaillée." },
    { title: 'Analyser les Informations sur le Bien', desc: "Nous évaluons avec précision les caractéristiques du bien, les conditions du marché et les facteurs d'investissement." },
    { title: 'Recommandations Professionnelles', desc: "Nous fournissons des conseils clairs, pratiques et fondés sur des données, adaptés à votre situation spécifique." },
    { title: 'Accompagner la Prise de Décision', desc: "Nous aidons les clients à mettre en œuvre des stratégies immobilières réussies du début à la fin." },
  ],
  rw: [
    { title: "Gusobanukirwa Ibyifuzo by'Umukiriya", desc: "Dutangira dumenya intego, imbogamizi, n'ibyiringiro by'umukiriya binyuze mu nama irambuye." },
    { title: "Gusesengura Amakuru y'Umutungo", desc: "Dusuzuma neza imiterere y'umutungo, imiterere y'isoko, n'ibipimo by'ishoramari." },
    { title: "Inama z'Inzobere", desc: "Dutanga inama zumvikana, zifatika kandi zishingiye ku bimenyetso, zihuye n'imiterere yawe bwite." },
    { title: 'Gufasha mu Gufata Ibyemezo', desc: "Dufasha abakiriya gushyira mu bikorwa ingamba z'umutungo zitsinda kuva ku ntangiriro kugeza kw'iherezo." },
  ],
};

export function getProcessSteps(lang: Lang) {
  return PROCESS_STEP_NUMS.map((step, i) => ({ step, icon: PROCESS_ICONS[i], ...PROCESS_I18N[lang][i] }));
}

// ── Stats ────────────────────────────────────────────────────────────────

const STATS_I18N: Record<Lang, { value: string; label: string }[]> = {
  en: [
    { value: '8+', label: 'Service Areas' },
    { value: '100%', label: 'Client Focus' },
    { value: 'Pan-Africa', label: 'Vision' },
    { value: 'ISO', label: 'Standards' },
  ],
  fr: [
    { value: '8+', label: 'Domaines de Services' },
    { value: '100%', label: 'Orientation Client' },
    { value: 'Panafricaine', label: 'Vision' },
    { value: 'ISO', label: 'Normes' },
  ],
  rw: [
    { value: '8+', label: 'Ibice by\'Serivisi' },
    { value: '100%', label: 'Kwibanda ku Mukiriya' },
    { value: 'Afurika Yose', label: 'Icyerekezo' },
    { value: 'ISO', label: 'Amahame' },
  ],
};

export function getStats(lang: Lang) {
  return STATS_I18N[lang];
}

// ── Why Choose ───────────────────────────────────────────────────────────

const WHY_CHOOSE_ICONS: LucideIcon[] = [Award, Shield, Users, TrendingUp, CheckCircle, BarChart3];

const WHY_CHOOSE_I18N: Record<Lang, { title: string; desc: string }[]> = {
  en: [
    { title: 'Professional Expertise', desc: 'Our team applies technical knowledge, industry experience, and professional standards to deliver reliable solutions.' },
    { title: 'Reliable Property Information', desc: 'We provide accurate analysis based on market research, valuation principles, and professional assessment.' },
    { title: 'Client-Focused Approach', desc: 'Every service is customized according to the needs and objectives of our clients.' },
    { title: 'Innovation & Technology', desc: 'We use modern tools and approaches to improve efficiency and decision-making.' },
    { title: 'Integrity & Transparency', desc: 'We maintain honesty, confidentiality, and professionalism in every assignment.' },
    { title: 'Market Intelligence', desc: 'Deep understanding of local and regional real estate markets to guide your decisions.' },
  ],
  fr: [
    { title: 'Expertise Professionnelle', desc: "Notre équipe applique des connaissances techniques, une expérience sectorielle et des normes professionnelles pour fournir des solutions fiables." },
    { title: 'Informations Immobilières Fiables', desc: "Nous fournissons des analyses précises fondées sur la recherche de marché, les principes d'évaluation et l'évaluation professionnelle." },
    { title: 'Approche Centrée sur le Client', desc: "Chaque service est personnalisé selon les besoins et objectifs de nos clients." },
    { title: 'Innovation & Technologie', desc: "Nous utilisons des outils et approches modernes pour améliorer l'efficacité et la prise de décision." },
    { title: 'Intégrité & Transparence', desc: "Nous maintenons l'honnêteté, la confidentialité et le professionnalisme dans chaque mission." },
    { title: 'Intelligence de Marché', desc: "Une compréhension approfondie des marchés immobiliers locaux et régionaux pour guider vos décisions." },
  ],
  rw: [
    { title: "Ubunararibonye bw'Inzobere", desc: "Itsinda ryacu rikoresha ubumenyi bw'ikoranabuhanga, uburambe mu rwego, n'amahame y'inzobere kugira ngo dutange ibisubizo byizewe." },
    { title: "Amakuru y'Umutungo Yizewe", desc: "Dutanga isesengura ry'ukuri rishingiye ku bushakashatsi bw'isoko, amahame yo gusuzuma agaciro, n'isuzuma ry'inzobere." },
    { title: 'Uburyo Bwibanda ku Mukiriya', desc: "Buri serivisi ikorerwa hakurikijwe ibyifuzo n'intego by'abakiriya bacu." },
    { title: 'Ubushya n\'Ikoranabuhanga', desc: "Dukoresha ibikoresho n'inzira zigezweho kugira ngo tunoze imikorere no gufata ibyemezo." },
    { title: "Ubudakemwa n'Ukuri", desc: "Dukomeza ubunyangamugayo, ibanga, n'imyitwarire y'inzobere muri buri kazi." },
    { title: "Ubumenyi bw'Isoko", desc: "Kumenya neza amasoko y'umutungo yo mu gihugu no mu karere kugira ngo tuyobore ibyemezo byanyu." },
  ],
};

export function getWhyChoose(lang: Lang) {
  return WHY_CHOOSE_I18N[lang].map((item, i) => ({ ...item, icon: WHY_CHOOSE_ICONS[i] }));
}

// ── Testimonials ─────────────────────────────────────────────────────────

const TESTIMONIALS_META = [
  { name: 'James Mutabazi', company: 'Kigali', rating: 5 },
  { name: 'Sarah Uwimana', company: 'Horizon Developments Ltd', rating: 5 },
  { name: 'Emmanuel Habimana', company: 'East Africa Holdings', rating: 5 },
];

const TESTIMONIALS_I18N: Record<Lang, { role: string; quote: string }[]> = {
  en: [
    { role: 'Property Investor', quote: 'ORIVANTA provided exceptional valuation services that gave us the confidence to proceed with our investment. Their professionalism and accuracy are unmatched.' },
    { role: 'Managing Director', quote: 'The corporate real estate advisory from ORIVANTA transformed how we manage our property portfolio. Strategic, insightful, and truly professional.' },
    { role: 'CEO', quote: 'Working with ORIVANTA on our land development project was a seamless experience. Their expertise and market knowledge are exceptional.' },
  ],
  fr: [
    { role: 'Investisseur Immobilier', quote: "ORIVANTA a fourni des services d'évaluation exceptionnels qui nous ont donné la confiance nécessaire pour poursuivre notre investissement. Leur professionnalisme et leur précision sont inégalés." },
    { role: 'Directrice Générale', quote: "Le conseil immobilier d'entreprise d'ORIVANTA a transformé la façon dont nous gérons notre portefeuille immobilier. Stratégique, pertinent et véritablement professionnel." },
    { role: 'PDG', quote: "Travailler avec ORIVANTA sur notre projet de développement foncier a été une expérience fluide. Leur expertise et leur connaissance du marché sont exceptionnelles." },
  ],
  rw: [
    { role: 'Umushoramari mu Mutungo', quote: "ORIVANTA yatanze serivisi zidasanzwe zo gusuzuma agaciro zaduhaye icyizere cyo gukomeza ishoramari ryacu. Ubunararibonye bwabo n'ukuri kwabo ntibisanzwe." },
    { role: 'Umuyobozi Mukuru', quote: "Inama z'umutungo ku masosiyete ORIVANTA yaduhaye zahinduye uburyo ducunga imitungo yacu. Byari iby'ingamba, iby'ubushishozi, kandi by'inzobere by'ukuri." },
    { role: 'Umuyobozi Mukuru (CEO)', quote: "Gukorana na ORIVANTA ku mushinga wacu w'iterambere ry'ubutaka byari uburambe bwiza cyane. Ubunararibonye bwabo n'ubumenyi bw'isoko ntibisanzwe." },
  ],
};

export function getTestimonials(lang: Lang) {
  return TESTIMONIALS_META.map((meta, i) => ({ ...meta, ...TESTIMONIALS_I18N[lang][i] }));
}
