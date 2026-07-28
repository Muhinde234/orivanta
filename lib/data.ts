import {
  BarChart3, Building2, Users, Wrench, TrendingUp, Briefcase,
  MapPin, Scale, Award, Shield, Search, GraduationCap,
  CheckCircle, Clock, FileText, Handshake
} from 'lucide-react';

export const BRAND = {
  name: 'AXIOM Realty Consultant Ltd',
  shortName: 'AXIOM',
  tagline: 'Where Property Meets Professional Expertise',
  email: 'info@axiomrealty.rw',
  phone: '+250 XXX XXX XXX',
  whatsapp: '+250 XXX XXX XXX',
  address: 'Kigali, Rwanda',
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
  linkedin: '#',
  facebook: '#',
  instagram: '#',
  youtube: '#',
  twitter: '#',
};

export const SERVICES = [
  {
    slug: 'property-valuation',
    title: 'Property Valuation',
    shortDesc: 'Professional and reliable property valuation services to determine accurate market value for all property types.',
    icon: Scale,
    overview: 'AXIOM provides independent, accurate, and professional property valuation services for residential, commercial, industrial, agricultural, and specialized properties in accordance with recognized professional valuation standards.',
    whyNeed: ['Buying or selling property', 'Mortgage or bank financing', 'Insurance purposes', 'Bookkeeping purposes', 'Tax assessment', 'VISA Applications', 'Investment analysis', 'Court or legal matters', 'Compensation and acquisition', 'Asset management'],
    whoNeeds: ['Property owners', 'Home buyers', 'Property sellers', 'Banks and financial institutions', 'Insurance companies', 'Investors', 'Government institutions', 'Developers', 'Lawyers', 'Corporate organizations'],
    requirements: ['Copy of Land Title', "Property owner's identification", 'Building plans (if available)', 'Property location or GPS coordinates', 'Property photographs (optional)', 'Purpose of the valuation'],
    deliverables: ['Professional Valuation Report', 'Market Value Opinion', 'Property Description', 'Market Analysis', 'Valuation Methodology', 'Supporting Photographs', 'Professional Recommendations'],
    faqs: [
      { q: 'How long does a property valuation take?', a: 'Typically between 1 and 2 working days depending on the property\'s size, complexity, and the availability of required information.' },
      { q: 'Will someone visit my property?', a: 'Yes. Most valuations require a physical inspection to assess the property\'s condition, location, improvements, and surrounding environment.' },
      { q: 'Can AXIOM value land without a building?', a: 'Yes. We provide valuations for vacant land as well as developed properties.' },
      { q: 'Are your valuation reports accepted by banks?', a: 'Our reports are prepared according to professional standards. Acceptance by a specific bank depends on that institution\'s policies.' },
      { q: 'How much does valuation cost?', a: 'Fees vary depending on the property type, size, location, and purpose. Please contact AXIOM for a quotation.' },
    ],
    cta: 'Request a Property Valuation',
  },
  {
    slug: 'real-estate-consultancy',
    title: 'Real Estate Consultancy',
    shortDesc: 'Strategic real estate advice to help clients make informed decisions in property investment, development, and management.',
    icon: Briefcase,
    overview: 'Our consultancy services help clients understand market opportunities, evaluate risks, and develop effective property strategies through market research, analysis, and industry expertise.',
    whyNeed: ['Buying land', 'Buying property', 'Selling property', 'Starting a development project', 'Planning an investment', 'Evaluating risks', 'Expanding your property portfolio'],
    whoNeeds: ['Individual investors', 'Property developers', 'Corporate organizations', 'Foreign investors', 'Financial institutions'],
    requirements: ['Project description', 'Property location', 'Investment objectives', 'Available budget', 'Existing property documents', 'Questions or challenges you want addressed'],
    deliverables: ['Market Analysis Report', 'Strategic Recommendations', 'Risk Assessment', 'Investment Feasibility', 'Professional Advisory Report'],
    faqs: [
      { q: 'Can AXIOM help me decide whether a property is worth buying?', a: "Yes. We assess the property's market value, condition, legal considerations, location, and investment potential." },
      { q: 'Can you advise foreign investors?', a: 'Yes. We provide consultancy services to both local and international investors, subject to applicable laws and regulations.' },
    ],
    cta: 'Book a Consultation',
  },
  {
    slug: 'property-management',
    title: 'Property Management',
    shortDesc: 'Professional property management solutions that protect assets, improve performance, and maximize property returns.',
    icon: Building2,
    overview: 'AXIOM helps property owners maintain and manage their assets efficiently through tenant management, maintenance coordination, financial monitoring, and property performance improvement.',
    whyNeed: ['Maximize rental income', 'Professional tenant management', 'Maintenance coordination', 'Financial reporting', 'Asset preservation', 'Reduce vacancy rates'],
    whoNeeds: ['Property owners', 'Landlords', 'Investors', 'Developers', 'Corporate organizations'],
    requirements: ['Property ownership documents', 'Existing lease agreements', 'Tenant information', 'Property inventory', 'Maintenance records', "Owner's management instructions"],
    deliverables: ['Tenant Management', 'Rent Collection', 'Maintenance Coordination', 'Financial Reports', 'Occupancy Reports', 'Performance Analysis'],
    faqs: [
      { q: 'Will AXIOM collect rent?', a: 'Yes. If agreed under the management contract, we can manage rent collection, maintain records, and provide financial reports.' },
      { q: 'Will I receive regular reports?', a: 'Yes. Property owners receive periodic reports covering occupancy, maintenance activities, income, expenses, and other agreed performance indicators.' },
    ],
    cta: 'Discuss Property Management',
  },
  {
    slug: 'facility-management',
    title: 'Facility Management',
    shortDesc: 'Ensuring buildings and facilities operate efficiently through professional maintenance, management, and operational support.',
    icon: Wrench,
    overview: 'Our facility management solutions help organizations maintain safe, functional, and efficient properties while reducing operational costs and improving occupant satisfaction.',
    whyNeed: ['Reduce operational costs', 'Improve building efficiency', 'Ensure safety compliance', 'Enhance occupant satisfaction', 'Professional maintenance planning', 'Asset lifecycle management'],
    whoNeeds: ['Commercial property owners', 'Corporate organizations', 'Government institutions', 'Healthcare facilities', 'Educational institutions', 'Hospitality businesses'],
    requirements: ['Building documentation', 'Current maintenance records', 'Facility inventory', 'Operational requirements', 'Budget parameters'],
    deliverables: ['Maintenance Planning', 'Operational Management', 'Safety Compliance', 'Cost Optimization Reports', 'Vendor Management', 'Performance Monitoring'],
    faqs: [
      { q: 'What types of facilities does AXIOM manage?', a: 'We manage commercial buildings, office complexes, residential estates, and specialized facilities across various sectors.' },
      { q: 'Can AXIOM reduce our facility operating costs?', a: 'Yes. Through professional planning, vendor management, and operational optimization, we help reduce costs while maintaining quality.' },
    ],
    cta: 'Explore Facility Management',
  },
  {
    slug: 'real-estate-brokerage',
    title: 'Real Estate Brokerage',
    shortDesc: 'Connecting buyers, sellers, landlords, and tenants through professional property marketing and transaction support.',
    icon: Handshake,
    overview: 'AXIOM provides trusted brokerage services by assisting clients throughout property transactions with market knowledge, negotiation support, and professional guidance.',
    whyNeed: ['Buy property at fair market price', 'Sell property faster and more effectively', 'Find qualified buyers or tenants', 'Access professional market advice', 'Negotiate favourable terms', 'Reduce legal and financial risks'],
    whoNeeds: ['Property owners', 'Property buyers', 'Property sellers', 'Landlords', 'Tenants', 'Investors', 'Property developers', 'Corporate organizations'],
    requirements: ['Proof of ownership (for sellers)', 'Property details', 'Budget and preferences (for buyers)', 'Financing status', 'Property requirements'],
    deliverables: ['Property Marketing', 'Buyer/Tenant Sourcing', 'Negotiation Support', 'Transaction Management', 'Market Pricing Advice', 'Documentation Guidance'],
    faqs: [
      { q: 'Can AXIOM help me find a property?', a: 'Yes. We help clients identify properties that match their budget, location preferences, and investment objectives.' },
      { q: 'Does AXIOM charge brokerage commission?', a: 'Yes. Brokerage fees are agreed upon before the engagement and are clearly explained in the service agreement.' },
      { q: 'Can AXIOM negotiate on my behalf?', a: 'Yes. We represent your interests during negotiations to help achieve fair and favorable transaction terms.' },
    ],
    cta: 'Talk to a Brokerage Expert',
  },
  {
    slug: 'corporate-real-estate-advisory',
    title: 'Corporate Real Estate Advisory',
    shortDesc: 'Helping organizations manage their real estate assets strategically to support business growth and operational efficiency.',
    icon: BarChart3,
    overview: 'AXIOM supports organizations in making informed decisions regarding office space, commercial facilities, property portfolios, leasing, acquisitions, and workplace planning.',
    whyNeed: ['Align property decisions with business objectives', 'Optimize property portfolios', 'Reduce occupancy and operating costs', 'Improve workplace efficiency', 'Support business expansion', 'Make informed leasing and acquisition decisions'],
    whoNeeds: ['Corporations', 'Banks', 'Insurance companies', 'NGOs', 'Government institutions', 'Educational institutions', 'Healthcare organizations', 'Manufacturing companies', 'Hospitality businesses'],
    requirements: ['Company profile', 'Business objectives', 'Existing property portfolio', 'Lease agreements', 'Office space requirements', 'Expansion or relocation plans', 'Budget information'],
    deliverables: ['Portfolio Analysis', 'Strategic Recommendations', 'Cost Optimization Plan', 'Lease Advisory', 'Workplace Planning', 'Relocation Support'],
    faqs: [
      { q: 'Can AXIOM help my company reduce property costs?', a: 'Yes. We analyze your real estate portfolio and recommend strategies to improve efficiency and reduce occupancy-related costs.' },
      { q: 'Can AXIOM help us relocate our office?', a: 'Yes. We assist organizations with site selection, lease evaluation, workplace planning, and relocation advice.' },
      { q: 'Do you advise organizations with multiple properties?', a: 'Yes. We support clients in managing and optimizing multiple real estate assets across different locations.' },
      { q: 'Can AXIOM review commercial lease agreements?', a: 'Yes. We provide professional advice on lease terms and property-related implications.' },
    ],
    cta: 'Book a Corporate Consultation',
  },
  {
    slug: 'investment-advisory',
    title: 'Real Estate Investment Advisory',
    shortDesc: 'Supporting investors with professional analysis and strategic advice to identify opportunities and maximize investment performance.',
    icon: TrendingUp,
    overview: 'AXIOM helps investors evaluate real estate opportunities through market research, financial analysis, risk assessment, and investment planning.',
    whyNeed: ['Identify profitable opportunities', 'Assess investment risks', 'Evaluate market conditions', 'Optimize portfolio performance', 'Plan investment strategies', 'Maximize returns'],
    whoNeeds: ['Individual investors', 'Institutional investors', 'Property developers', 'Family offices', 'Foreign investors', 'Corporate investors'],
    requirements: ['Investment objectives', 'Available capital', 'Risk tolerance', 'Preferred property types', 'Target locations', 'Investment timeline'],
    deliverables: ['Market Research Reports', 'Investment Analysis', 'Risk Assessment', 'Financial Projections', 'Portfolio Strategy', 'Opportunity Identification'],
    faqs: [
      { q: 'Can AXIOM help me identify good investment properties?', a: 'Yes. We conduct market research and analysis to identify properties with strong investment potential.' },
      { q: 'Do you provide financial projections?', a: 'Yes. We provide financial analysis including projected returns, cash flow analysis, and investment performance metrics.' },
    ],
    cta: 'Discuss Your Investment Goals',
  },
  {
    slug: 'land-advisory',
    title: 'Land Advisory & Development Consultancy',
    shortDesc: 'Professional guidance for land acquisition, development planning, and real estate project success.',
    icon: MapPin,
    overview: 'We support developers and investors from the early stages of land identification to project implementation through professional analysis and strategic advice.',
    whyNeed: ['Land acquisition guidance', 'Development feasibility assessment', 'Planning and zoning advice', 'Project viability analysis', 'Risk identification', 'Development strategy'],
    whoNeeds: ['Property developers', 'Land investors', 'Government agencies', 'Corporate organizations', 'Individual investors', 'Construction companies'],
    requirements: ['Project description', 'Land location details', 'Development objectives', 'Budget parameters', 'Timeline requirements', 'Existing land documents'],
    deliverables: ['Land Assessment Report', 'Development Feasibility Study', 'Planning Advice', 'Risk Analysis', 'Development Strategy', 'Project Recommendations'],
    faqs: [
      { q: 'Can AXIOM help me assess land before purchase?', a: 'Yes. We conduct thorough land assessments covering location, access, planning considerations, and development potential.' },
      { q: 'Do you advise on development projects?', a: 'Yes. We provide consultancy from initial land identification through to project planning and implementation support.' },
    ],
    cta: 'Get Land Advisory Support',
  },
];

export const VALUES = [
  { letter: 'A', title: 'Accountability', desc: 'We take ownership of every assignment and remain responsible for delivering reliable solutions that create value for our clients.', icon: Scale },
  { letter: 'X', title: 'eXcellence', desc: 'We pursue the highest professional standards by combining technical expertise, innovation, and dedication to delivering exceptional results.', icon: Award },
  { letter: 'I', title: 'Integrity', desc: 'We operate with honesty, transparency, and confidentiality, ensuring that every client receives trustworthy professional guidance.', icon: Shield },
  { letter: 'O', title: 'Opportunity', desc: 'We identify opportunities others may overlook by applying market intelligence, analysis, and forward-thinking strategies.', icon: Search },
  { letter: 'M', title: 'Mastery', desc: 'We pursue continuous learning, innovation, and technical excellence to deliver solutions based on professional expertise.', icon: GraduationCap },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Understand Client Needs', desc: 'We begin by identifying client goals, challenges, and expectations through detailed consultation.', icon: Users },
  { step: '02', title: 'Analyze Property Information', desc: 'We evaluate property characteristics, market conditions, and investment factors with precision.', icon: FileText },
  { step: '03', title: 'Professional Recommendations', desc: 'We deliver clear, practical, and evidence-based advice tailored to your specific situation.', icon: CheckCircle },
  { step: '04', title: 'Support Decision Making', desc: 'We assist clients in implementing successful real estate strategies from start to finish.', icon: Clock },
];

export const STATS = [
  { value: '8+', label: 'Service Areas' },
  { value: '100%', label: 'Client Focus' },
  { value: 'Pan-Africa', label: 'Vision' },
  { value: 'ISO', label: 'Standards' },
];

export const WHY_CHOOSE = [
  { title: 'Professional Expertise', desc: 'Our team applies technical knowledge, industry experience, and professional standards to deliver reliable solutions.', icon: Award },
  { title: 'Reliable Property Information', desc: 'We provide accurate analysis based on market research, valuation principles, and professional assessment.', icon: Shield },
  { title: 'Client-Focused Approach', desc: 'Every service is customized according to the needs and objectives of our clients.', icon: Users },
  { title: 'Innovation & Technology', desc: 'We use modern tools and approaches to improve efficiency and decision-making.', icon: TrendingUp },
  { title: 'Integrity & Transparency', desc: 'We maintain honesty, confidentiality, and professionalism in every assignment.', icon: CheckCircle },
  { title: 'Market Intelligence', desc: 'Deep understanding of local and regional real estate markets to guide your decisions.', icon: BarChart3 },
];

export const TESTIMONIALS = [
  { name: 'James Mutabazi', role: 'Property Investor', company: 'Kigali', quote: 'AXIOM provided exceptional valuation services that gave us the confidence to proceed with our investment. Their professionalism and accuracy are unmatched.', rating: 5 },
  { name: 'Sarah Uwimana', role: 'Managing Director', company: 'Horizon Developments Ltd', quote: 'The corporate real estate advisory from AXIOM transformed how we manage our property portfolio. Strategic, insightful, and truly professional.', rating: 5 },
  { name: 'Emmanuel Habimana', role: 'CEO', company: 'East Africa Holdings', quote: 'Working with AXIOM on our land development project was a seamless experience. Their expertise and market knowledge are exceptional.', rating: 5 },
];
