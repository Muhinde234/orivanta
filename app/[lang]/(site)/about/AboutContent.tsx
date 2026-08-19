'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, BookOpen, Mail, User, CheckCircle } from 'lucide-react';
import { useCMS } from '@/lib/useCMS';
import { useLang } from '@/lib/LangContext';
import type { Lang } from '@/lib/locales';

const TIMELINE_I18N: Record<Lang, { year: string; title: string; desc: string }[]> = {
  en: [
    { year: 'Founded', title: 'ORIVANTA Established', desc: 'ORIVANTA PROPERTY LTD was established with a vision to transform how individuals, investors, and organizations approach real estate decisions.' },
    { year: 'Growth', title: 'Expanding Services', desc: 'Expanded service offerings to cover the full real estate lifecycle — from valuation and consultancy to investment advisory and facility management.' },
    { year: 'Today', title: "Rwanda's Trusted Advisor", desc: 'Serving individuals, businesses, investors, and institutions across Rwanda with professional expertise and client-focused solutions.' },
    { year: 'Vision', title: 'Pan-African Reach', desc: "Working toward becoming Africa's most trusted real estate consulting firm, delivering innovative solutions that create lasting value." },
  ],
  fr: [
    { year: 'Fondation', title: "Création d'ORIVANTA", desc: "ORIVANTA PROPERTY LTD a été créée avec la vision de transformer la façon dont les particuliers, investisseurs et organisations abordent les décisions immobilières." },
    { year: 'Croissance', title: 'Élargissement des Services', desc: "Élargissement de l'offre de services pour couvrir l'ensemble du cycle de vie immobilier — de l'évaluation et du conseil au conseil en investissement et à la gestion des installations." },
    { year: "Aujourd'hui", title: 'Le Conseiller de Confiance du Rwanda', desc: 'Au service des particuliers, entreprises, investisseurs et institutions à travers le Rwanda avec une expertise professionnelle et des solutions centrées sur le client.' },
    { year: 'Vision', title: 'Rayonnement Panafricain', desc: "En marche vers devenir le cabinet de conseil immobilier le plus fiable d'Afrique, en offrant des solutions innovantes qui créent une valeur durable." },
  ],
  rw: [
    { year: 'Ishingwa', title: 'Ishingwa rya ORIVANTA', desc: "ORIVANTA PROPERTY LTD yashinzwe ifite icyerekezo cyo guhindura uburyo abantu, abashoramari, n'imiryango bafata ibyemezo by'umutungo." },
    { year: 'Iterambere', title: 'Kwagura Serivisi', desc: "Kwagura serivisi kugira ngo zirimbe inzira yose y'umutungo — kuva mu gusuzuma agaciro n'inama kugeza ku nama z'ishoramari no gucunga ibikorwa remezo." },
    { year: 'Uyu munsi', title: 'Umujyanama Wizewe mu Rwanda', desc: "Dukorera abantu, amasosiyete, abashoramari, n'inzego mu Rwanda hose, dufite ubunararibonye bw'inzobere n'ibisubizo byibanda ku mukiriya." },
    { year: 'Icyerekezo', title: 'Kugera muri Afurika Yose', desc: "Dukomeza kuba sosiyete y'inama z'umutungo yizewe cyane muri Afurika, dutanga ibisubizo bishya biremera agaciro karamba." },
  ],
};

const TEAM_I18N: Record<Lang, {
  name: string; role: string; bio: string; responsibilities: string[]; expertise: string[]; linkedin: string; email: string;
}[]> = {
  en: [{
    name: 'Daniel NGARUKIYIMANA',
    role: 'Founder & Managing Director',
    bio: 'As the Founder and Managing Director of ORIVANTA PROPERTY LTD, Daniel provides strategic leadership and oversees the company\'s vision, operations, and professional service delivery. With a background in Estate Management and Valuation, he focuses on delivering innovative real estate solutions through professional advisory, market analysis, and client-focused strategies.',
    responsibilities: ['Company strategy and leadership', 'Client relationship management', 'Real estate consultancy', 'Property valuation oversight', 'Business development', 'Quality assurance of services'],
    expertise: ['Property Valuation', 'Real Estate Consultancy', 'Investment Advisory', 'Market Analysis', 'Property Strategy'],
    linkedin: '#',
    email: 'olivantaproperty@gmail.com',
  }],
  fr: [{
    name: 'Daniel NGARUKIYIMANA',
    role: 'Fondateur & Directeur Général',
    bio: "En tant que Fondateur et Directeur Général d'ORIVANTA PROPERTY LTD, Daniel assure un leadership stratégique et supervise la vision, les opérations et la prestation de services professionnels de l'entreprise. Fort d'une formation en gestion immobilière et en évaluation, il se concentre sur la fourniture de solutions immobilières innovantes grâce au conseil professionnel, à l'analyse de marché et à des stratégies centrées sur le client.",
    responsibilities: ["Stratégie et leadership de l'entreprise", 'Gestion des relations clients', 'Conseil immobilier', "Supervision de l'évaluation immobilière", 'Développement commercial', 'Assurance qualité des services'],
    expertise: ['Évaluation Immobilière', 'Conseil Immobilier', 'Conseil en Investissement', 'Analyse de Marché', 'Stratégie Immobilière'],
    linkedin: '#',
    email: 'olivantaproperty@gmail.com',
  }],
  rw: [{
    name: 'Daniel NGARUKIYIMANA',
    role: 'Uwashinze & Umuyobozi Mukuru',
    bio: "Nk'Uwashinze kandi Umuyobozi Mukuru wa ORIVANTA PROPERTY LTD, Daniel atanga ubuyobozi bw'ingamba kandi akurikirana icyerekezo cy'isosiyete, imikorere yayo, no gutanga serivisi z'inzobere. Afite ubumenyi mu gucunga no gusuzuma agaciro k'umutungo, yibanda ku gutanga ibisubizo bishya by'umutungo binyuze mu nama z'inzobere, isesengura ry'isoko, n'ingamba zibanda ku mukiriya.",
    responsibilities: ["Ingamba n'ubuyobozi by'isosiyete", 'Gucunga umubano n\'abakiriya', "Inama z'umutungo", "Kugenzura gusuzuma agaciro k'umutungo", "Iterambere ry'ubucuruzi", 'Kwemeza ubwiza bwa serivisi'],
    expertise: ["Gusuzuma Agaciro k'Umutungo", "Inama z'Umutungo", "Inama z'Ishoramari", "Isesengura ry'Isoko", "Ingamba z'Umutungo"],
    linkedin: '#',
    email: 'olivantaproperty@gmail.com',
  }],
};

export default function AboutContent() {
  const { data } = useCMS(['about_who_we_are', 'about_who_we_are_2', 'about_vision', 'about_mission', 'team_name', 'team_role', 'team_bio', 'team_photo', 'team_email', 'team_linkedin']);
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState('vision');
  const TIMELINE = TIMELINE_I18N[lang];
  const TEAM = TEAM_I18N[lang];

  const teamMember = {
    name: data.team_name || TEAM[0].name,
    role: data.team_role || TEAM[0].role,
    bio: data.team_bio || TEAM[0].bio,
    photo: data.team_photo || '/images/PXL_20231128_151335702.PORTRAIT~2.jpg',
    responsibilities: TEAM[0].responsibilities,
    expertise: TEAM[0].expertise,
    linkedin: data.team_linkedin || TEAM[0].linkedin,
    email: data.team_email || TEAM[0].email,
  };

  const TABS = [
    { key: 'vision', label: t('about_vision_tab'), icon: Eye },
    { key: 'mission', label: t('about_mission_tab'), icon: Target },
    { key: 'story', label: t('about_story_tab'), icon: BookOpen },
  ];

  const tabContent: Record<string, { icon: React.ElementType; heading: string; body: string; image: string }> = {
    vision: {
      icon: Eye,
      heading: t('about_vision_tab'),
      body: data.about_vision || t('about_vision_body'),
      image: '/images/7.jpg',
    },
    mission: {
      icon: Target,
      heading: t('about_mission_tab'),
      body: data.about_mission || t('about_mission_body'),
      image: '/images/8.jpg',
    },
    story: {
      icon: BookOpen,
      heading: t('about_story_tab'),
      body: t('about_story_body'),
      image: '/images/9.jpg',
    },
  };

  const current = tabContent[activeTab];
  const Icon = current.icon;

  return (
    <>
      {/* ── Who We Are ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">{t('about_who_badge')}</span>
              <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-6" />
              <h2 className="font-heading font-bold text-[#10243B] leading-tight mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
                {t('about_who_title')}
              </h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                {data.about_who_we_are || t('about_who_body_1')}
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-4">
                {data.about_who_we_are_2 || t('about_who_body_2')}
              </p>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                {t('about_third_para')}
              </p>
            </motion.div>

            {/* Stacked image collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[480px]"
            >
              <div className="absolute top-0 right-0 w-[75%] h-[340px] rounded-sm overflow-hidden shadow-xl">
                <Image src="/images/3.jpg" alt="ORIVANTA advisory" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[240px] rounded-sm overflow-hidden shadow-xl border-4 border-white">
                <Image src="/images/4.jpg" alt="Property consulting" fill className="object-cover" />
              </div>
              <div className="absolute bottom-10 right-4 w-20 h-20 bg-[#C9A227] rounded-sm flex items-center justify-center shadow-lg">
                <span className="text-[#10243B] font-black text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>OP</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Story tabs ──────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {TABS.map(tab => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#10243B] text-white shadow-lg'
                      : 'bg-white border border-gray-200 text-gray-500 hover:border-[#C9A227] hover:text-[#10243B]'
                  }`}
                >
                  <TabIcon size={15} className={isActive ? 'text-[#C9A227]' : ''} />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl order-2 lg:order-1">
                <Image src={current.image} alt={current.heading} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243B]/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center">
                    <Icon size={18} className="text-[#10243B]" />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="w-10 h-0.5 bg-[#C9A227] mb-5" />
                <h2 className="font-heading font-bold text-[#10243B] mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                  {current.heading}
                </h2>
                <div className="text-[#C9A227]/20 font-black leading-none mb-2 select-none"
                  style={{ fontSize: '6rem', fontFamily: 'Georgia, serif', lineHeight: 0.8 }}>
                  &ldquo;
                </div>
                <p className="text-gray-600 leading-relaxed text-[17px]">
                  {current.body}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">{t('about_journey_badge')}</span>
            <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mt-3 mb-5" />
            <h2 className="font-heading font-bold text-[#10243B]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              {t('about_journey_title')}
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#10243B] border-4 border-[#C9A227]/30 flex items-center justify-center mb-5 flex-shrink-0 shadow-md">
                    <span className="text-[#C9A227] font-black text-xs tracking-widest uppercase"
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[#10243B] text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[17px] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]" id="team">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">{t('about_team_badge')}</span>
            <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mt-3 mb-5" />
            <h2 className="font-heading font-bold text-[#10243B]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              {t('about_team_title')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-3 gap-12 mb-16"
          >
            {/* Portrait */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#C9A227]/20 rounded-sm" />
              <div className="relative rounded-sm aspect-[3/4] overflow-hidden group">
                <Image src={teamMember.photo} alt={teamMember.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
              </div>
              {/* Social */}
              <div className="flex gap-3 mt-5 justify-center">
                <a href={teamMember.linkedin} aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#10243B] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300 text-white hover:text-[#10243B]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={`mailto:${teamMember.email}`} aria-label="Email" className="w-10 h-10 rounded-full bg-[#10243B] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300 text-white hover:text-[#10243B]">
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">{teamMember.role}</span>
              <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-4" />
              <h3 className="font-heading font-bold text-[#10243B] text-3xl mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {teamMember.name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-8">{teamMember.bio}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-heading font-bold text-[#10243B] text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t('team_responsibilities')}
                  </h4>
                  <ul className="space-y-2">
                    {teamMember.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-[15px] text-gray-600">
                        <CheckCircle size={14} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#10243B] text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t('team_expertise')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMember.expertise.map((e, j) => (
                      <span key={j} className="bg-white border border-gray-200 text-[#10243B] text-xs font-medium px-3 py-1.5 rounded-sm">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

         
        </div>
      </section>
    </>
  );
}
