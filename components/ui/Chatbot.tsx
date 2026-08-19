'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useLang } from '@/lib/LangContext';
import { Lang } from '@/lib/translations';

// ── Knowledge base ────────────────────────────────────────────────────────────
const KB: Record<Lang, { patterns: string[]; answer: string }[]> = {
  en: [
    { patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'], answer: "Hello! Welcome to ORIVANTA PROPERTY LTD. How can I assist you today? You can ask me about our services, location, contact details, or how to book a consultation." },
    { patterns: ['service', 'what do you do', 'offer', 'provide'], answer: "ORIVANTA offers 8 professional services:\n1. Property Valuation\n2. Real Estate Consultancy\n3. Property Management\n4. Facility Management\n5. Real Estate Brokerage\n6. Corporate Real Estate Advisory\n7. Real Estate Investment Advisory\n8. Land Advisory & Development Consultancy\n\nWhich service would you like to know more about?" },
    { patterns: ['valuation', 'value', 'worth', 'price property'], answer: "Our Property Valuation service provides independent, accurate, and professional valuations for residential, commercial, industrial, agricultural, and specialized properties. We follow recognized professional standards. Contact us at olivantaproperty@gmail.com to request a valuation." },
    { patterns: ['management', 'manage', 'property management'], answer: "ORIVANTA's Property Management service helps property owners maintain and manage their assets efficiently — covering tenant management, maintenance coordination, financial monitoring, and performance improvement." },
    { patterns: ['investment', 'invest', 'advisory', 'portfolio'], answer: "Our Real Estate Investment Advisory helps investors evaluate opportunities through market research, financial analysis, risk assessment, and investment planning. We help identify profitable properties and maximize returns." },
    { patterns: ['brokerage', 'buy', 'sell', 'broker', 'agent'], answer: "ORIVANTA's Real Estate Brokerage connects buyers, sellers, landlords, and tenants through professional property marketing and transaction support. We represent your interests during negotiations." },
    { patterns: ['land', 'development', 'develop', 'plot'], answer: "Our Land Advisory & Development Consultancy supports developers and investors from land identification through project implementation — covering feasibility, planning, zoning, and risk analysis." },
    { patterns: ['facility', 'building', 'maintenance', 'operations'], answer: "Our Facility Management solutions help organizations maintain safe, functional, and efficient properties while reducing operational costs and improving occupant satisfaction." },
    { patterns: ['corporate', 'company', 'office', 'lease', 'relocation'], answer: "ORIVANTA's Corporate Real Estate Advisory helps organizations manage their real estate assets strategically — covering portfolio optimization, lease advisory, workplace planning, and relocation support." },
    { patterns: ['contact', 'reach', 'phone', 'email', 'call', 'whatsapp'], answer: "You can reach ORIVANTA at:\n📧 olivantaproperty@gmail.com\n📍 Kigali, Rwanda\n🕐 Monday – Friday: 9:00 AM – 7:00 PM\n\nOr visit our Contact page to send a message directly." },
    { patterns: ['location', 'where', 'address', 'office', 'kigali'], answer: "ORIVANTA PROPERTY LTD is based in Kigali, Rwanda. We serve clients across Rwanda and have a Pan-African vision." },
    { patterns: ['consultation', 'book', 'appointment', 'meeting', 'schedule'], answer: "To book a consultation, visit our Contact page or email us at olivantaproperty@gmail.com. Our team will respond promptly to schedule a meeting at your convenience." },
    { patterns: ['who', 'founder', 'director', 'daniel', 'team'], answer: "ORIVANTA was founded by Daniel NGARUKIYIMANA, who serves as Founder & Managing Director. He has a background in Estate Management and Valuation and leads the company's vision and professional service delivery." },
    { patterns: ['vision', 'mission', 'goal', 'aim'], answer: "ORIVANTA's Vision: To become Africa's most trusted real estate consulting firm.\n\nMission: To provide reliable, ethical and innovative real estate solutions that empower clients to make informed decisions and achieve sustainable investment growth." },
    { patterns: ['cost', 'fee', 'price', 'charge', 'how much'], answer: "Our fees vary depending on the service type, property size, location, and scope of work. Please contact us at olivantaproperty@gmail.com for a personalized quotation." },
    { patterns: ['thank', 'thanks', 'merci', 'murakoze'], answer: "You're welcome! Feel free to ask if you have any other questions. We're here to help." },
  ],
  fr: [
    { patterns: ['bonjour', 'salut', 'bonsoir', 'hello'], answer: "Bonjour! Bienvenue chez ORIVANTA PROPERTY LTD. Comment puis-je vous aider aujourd'hui? Vous pouvez me poser des questions sur nos services, notre localisation ou comment réserver une consultation." },
    { patterns: ['service', 'que faites', 'offrez', 'proposez'], answer: "ORIVANTA offre 8 services professionnels:\n1. Évaluation immobilière\n2. Conseil immobilier\n3. Gestion immobilière\n4. Gestion des installations\n5. Courtage immobilier\n6. Conseil immobilier d'entreprise\n7. Conseil en investissement immobilier\n8. Conseil foncier et développement\n\nSur quel service souhaitez-vous en savoir plus?" },
    { patterns: ['évaluation', 'valeur', 'estimation', 'prix'], answer: "Notre service d'évaluation immobilière fournit des évaluations indépendantes, précises et professionnelles pour les propriétés résidentielles, commerciales, industrielles et agricoles. Contactez-nous à olivantaproperty@gmail.com." },
    { patterns: ['contact', 'joindre', 'téléphone', 'email', 'appeler'], answer: "Vous pouvez contacter ORIVANTA:\n📧 olivantaproperty@gmail.com\n📍 Kigali, Rwanda\n🕐 Lundi – Vendredi: 9h00 – 19h00\n\nOu visitez notre page Contact pour envoyer un message directement." },
    { patterns: ['consultation', 'rendez-vous', 'réserver', 'rencontre'], answer: "Pour réserver une consultation, visitez notre page Contact ou envoyez-nous un email à olivantaproperty@gmail.com. Notre équipe vous répondra rapidement." },
    { patterns: ['vision', 'mission', 'objectif'], answer: "Vision d'ORIVANTA: Devenir le cabinet de conseil immobilier le plus fiable d'Afrique.\n\nMission: Fournir des solutions immobilières fiables, éthiques et innovantes qui permettent aux clients de prendre des décisions éclairées." },
    { patterns: ['coût', 'frais', 'prix', 'tarif', 'combien'], answer: "Nos honoraires varient selon le type de service, la taille de la propriété et la portée des travaux. Contactez-nous à olivantaproperty@gmail.com pour un devis personnalisé." },
    { patterns: ['merci', 'thank'], answer: "De rien! N'hésitez pas à poser d'autres questions. Nous sommes là pour vous aider." },
  ],
  rw: [
    { patterns: ['muraho', 'mwaramutse', 'mwiriwe', 'hello'], answer: "Muraho! Murakaza neza kuri ORIVANTA PROPERTY LTD. Nakugirira inama ite uyu munsi? Ushobora kubaza ibyerekeye serivisi zacu, aho tubarizwa, cyangwa uburyo bwo gusaba inama." },
    { patterns: ['serivisi', 'akazi', 'dukora', 'gutanga'], answer: "ORIVANTA itanga serivisi 8 z'inzobere:\n1. Gusuzuma agaciro k'umutungo\n2. Inama z'umutungo\n3. Gucunga umutungo\n4. Gucunga inyubako\n5. Kugurisha no kugura umutungo\n6. Inama z'umutungo ku masosiyete\n7. Inama z'ishoramari mu mutungo\n8. Inama z'ubutaka n'iterambere\n\nUshaka kumenya byinshi ku serivisi iyihe?" },
    { patterns: ['gusuzuma', 'agaciro', 'igiciro', 'umutungo'], answer: "Serivisi yacu yo gusuzuma agaciro k'umutungo itanga ibisubizo by'inzobere, by'ukuri kandi by'umwuga ku mutungo wo guturamo, wa komerisi, wa inganda n'ubuhinzi. Twandikire kuri olivantaproperty@gmail.com." },
    { patterns: ['twandikire', 'telefoni', 'imeyili', 'aho', 'kigali'], answer: "Ushobora kugera kuri ORIVANTA:\n📧 olivantaproperty@gmail.com\n📍 Kigali, Rwanda\n🕐 Kuwa mbere – Kuwa gatanu: 9:00 – 19:00\n\nCyangwa sura paji yacu ya Contact." },
    { patterns: ['saba', 'inama', 'guterana', 'gahunda'], answer: "Kugira ngo usabe inama, sura paji yacu ya Contact cyangwa twandikire kuri olivantaproperty@gmail.com. Itsinda ryacu rizasubiza vuba." },
    { patterns: ['icyerekezo', 'intego', 'mission', 'vision'], answer: "Icyerekezo cya ORIVANTA: Kuba sosiyete y'inama z'umutungo yizewe cyane mu Afurika.\n\nIntego: Gutanga ibisubizo by'umutungo byizewe, by'uburinganire kandi bishya bifasha abakiriya gufata ibyemezo by'ubwenge." },
    { patterns: ['amafaranga', 'igiciro', 'angahe', 'kwishyura'], answer: "Amafaranga yacu ahinduka bitewe na serivisi, ingano y'umutungo n'akazi. Twandikire kuri olivantaproperty@gmail.com kugira ngo ubone igiciro cyihariye." },
    { patterns: ['murakoze', 'urakoze', 'thank'], answer: "Nta kibazo! Baza ikibazo icyo aricyo cyose. Turi hafi gufasha." },
  ],
};

function getAnswer(input: string, lang: Lang): string {
  const lower = input.toLowerCase();
  const entries = KB[lang];
  for (const entry of entries) {
    if (entry.patterns.some(p => lower.includes(p))) return entry.answer;
  }
  // fallback
  const fallbacks: Record<Lang, string> = {
    en: "I'm not sure about that, but our team can help! Please contact us at olivantaproperty@gmail.com or visit our Contact page.",
    fr: "Je ne suis pas sûr de cela, mais notre équipe peut vous aider! Contactez-nous à olivantaproperty@gmail.com.",
    rw: "Sinzi neza iby'ibyo, ariko itsinda ryacu rishobora gufasha! Twandikire kuri olivantaproperty@gmail.com.",
  };
  return fallbacks[lang];
}

// ── Component ─────────────────────────────────────────────────────────────────
interface Message { role: 'user' | 'bot'; text: string; }

export default function Chatbot() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset greeting when language changes
  useEffect(() => {
    setMessages([{ role: 'bot', text: t('chat_greeting') }]);
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsidePanel = panelRef.current?.contains(target);
      const clickedToggleButton = (event.target as HTMLElement)?.closest('button[aria-label="' + t('chat_open_aria') + '"]');

      if (!clickedInsidePanel && !clickedToggleButton) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, t]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { role: 'user', text };
    const botMsg: Message = { role: 'bot', text: getAnswer(text, lang) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={t('chat_open_aria')}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#C9A227] text-[#10243B] shadow-xl flex items-center justify-center hover:bg-[#b8911f] transition-all duration-300 hover:scale-110"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><MessageCircle size={22} /></motion.span>
          }
        </AnimatePresence>
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 22, scale: 0.96, rotateX: -8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 18, scale: 0.96, rotateX: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-white rounded-xl shadow-[0_18px_60px_rgba(16,36,59,0.18)] border border-gray-100 flex flex-col overflow-hidden"
            style={{ maxHeight: '520px', transformOrigin: 'bottom right' }}
          >
            {/* Header */}
            <div className="bg-[#10243B] px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C9A227] flex items-center justify-center flex-shrink-0">
                <Bot size={18} className="text-[#10243B]" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">{t('chat_title')}</div>
                <div className="text-white/50 text-xs">{t('chat_subtitle')}</div>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-white/40 text-xs">{t('chat_online')}</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F8FAFC]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-[#10243B] flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                      <Bot size={13} className="text-[#C9A227]" />
                    </div>
                  )}
                  <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-[#10243B] text-white rounded-br-sm'
                      : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder={t('chat_placeholder')}
                className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A227] transition-colors"
              />
              <button
                onClick={send}
                aria-label={t('chat_send')}
                className="w-10 h-10 rounded-full bg-[#C9A227] text-[#10243B] flex items-center justify-center hover:bg-[#b8911f] transition-colors flex-shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
