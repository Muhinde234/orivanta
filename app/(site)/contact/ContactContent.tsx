'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import FAQ from '@/components/ui/FAQ';
import { BRAND } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

const CONTACT_FAQS = [
  { q: 'How can I request ORIVANTA services?', a: 'You can contact us through our online form, email, phone, or WhatsApp. Our team will review your request and respond with the next steps.' },
  { q: 'Can I schedule a meeting with an ORIVANTA consultant?', a: 'Yes. Clients can schedule physical or online consultations depending on their preference and availability.' },
  { q: 'Do you provide services outside Kigali?', a: 'Yes. ORIVANTA provides real estate solutions across Rwanda depending on client requirements and project scope.' },
  { q: 'How quickly will ORIVANTA respond?', a: 'We aim to respond to inquiries promptly and provide guidance on the appropriate next steps.' },
];

const SERVICES_LIST = [
  'Property Valuation',
  'Real Estate Consultancy',
  'Property Management',
  'Facility Management',
  'Real Estate Brokerage',
  'Corporate Real Estate Advisory',
  'Real Estate Investment Advisory',
  'Land Advisory & Development Consultancy',
  'Other',
];

export default function ContactContent() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', location: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Main contact section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">{t('contact_get_in_touch')}</span>
                <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-5" />
                <h2 className="font-heading font-bold text-[#10243B] text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('contact_ready')}
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {t('contact_body')}
                </p>
              </div>

              {/* Contact cards */}
              {[
                { icon: MapPin, label: 'Office Location', value: BRAND.address, href: undefined },
                { icon: Phone, label: 'Phone', value: BRAND.phone, href: `tel:${BRAND.phone}` },
                { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: MessageCircle, label: 'WhatsApp', value: BRAND.whatsapp, href: `https://wa.me/${BRAND.whatsapp.replace(/\s/g, '')}` },
                { icon: Clock, label: 'Business Hours', value: BRAND.hours, href: undefined },
              ].map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-5 bg-[#F8FAFC] border border-gray-100 rounded-sm hover:border-[#C9A227]/30 hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-sm bg-[#10243B] flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-[#C9A227]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-[#10243B] font-medium text-[15px]">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}

              {/* Social */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('contact_connect')}</div>
                <div className="flex gap-3">
                  {[
                    { title: 'LinkedIn', href: BRAND.linkedin, d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' },
                    { title: 'Facebook', href: BRAND.facebook, d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                    { title: 'Instagram', href: BRAND.instagram, d: null },
                    { title: 'YouTube', href: BRAND.youtube, d: null },
                    { title: 'X', href: BRAND.twitter, d: 'M18 6 6 18M6 6l12 12' },
                  ].map(({ title, href, d }) => (
                    <a key={title} href={href} aria-label={title}
                      className="w-9 h-9 rounded-sm bg-[#10243B] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300 text-white hover:text-[#10243B]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {title === 'Instagram' ? <><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></> :
                         title === 'YouTube' ? <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></> :
                         <path d={d!}/>}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-gray-100 rounded-sm shadow-lg p-8">
                <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
                <h3 className="font-heading font-bold text-[#10243B] text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('contact_send_message')}
                </h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-[#C9A227]" />
                    </div>
                    <h4 className="font-heading font-bold text-[#10243B] text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t('contact_sent_title')}
                    </h4>
                    <p className="text-gray-500 text-sm">{t('contact_sent_body')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                          {t('form_name')} <span className="text-[#C9A227]">*</span>
                        </label>
                        <input
                          id="name" type="text" required
                          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#10243B] focus:outline-none focus:border-[#C9A227] transition-colors placeholder-gray-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                          {t('form_email')} <span className="text-[#C9A227]">*</span>
                        </label>
                        <input
                          id="email" type="email" required
                          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#10243B] focus:outline-none focus:border-[#C9A227] transition-colors placeholder-gray-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                          {t('form_phone')} <span className="text-[#C9A227]">*</span>
                        </label>
                        <input
                          id="phone" type="tel" required
                          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#10243B] focus:outline-none focus:border-[#C9A227] transition-colors placeholder-gray-300"
                          placeholder="+250 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                          {t('form_company')} <span className="text-gray-300">({t('form_optional')})</span>
                        </label>
                        <input
                          id="company" type="text"
                          value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#10243B] focus:outline-none focus:border-[#C9A227] transition-colors placeholder-gray-300"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        {t('form_service')}
                      </label>
                      <select
                        id="service"
                        value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#10243B] focus:outline-none focus:border-[#C9A227] transition-colors bg-white"
                      >
                        <option value="">{t('form_select_service')}</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        {t('form_location')} <span className="text-gray-300">({t('form_optional')})</span>
                      </label>
                      <input
                        id="location" type="text"
                        value={form.location} onChange={e => setForm({ ...form, location: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#10243B] focus:outline-none focus:border-[#C9A227] transition-colors placeholder-gray-300"
                        placeholder="Property location or area"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        {t('form_message')} <span className="text-[#C9A227]">*</span>
                      </label>
                      <textarea
                        id="message" required rows={5}
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#10243B] focus:outline-none focus:border-[#C9A227] transition-colors placeholder-gray-300 resize-none"
                        placeholder="Describe your request or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#C9A227] text-[#10243B] font-bold py-4 rounded-full hover:bg-[#b8911f] transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <Send size={16} />
                      {t('form_submit')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0 bg-white" aria-label="Office location map">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
          <h3 className="font-heading font-bold text-[#10243B] text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('contact_find_office')}
          </h3>
          <div className="w-full h-72 bg-[#F8FAFC] border border-gray-200 rounded-sm flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-[#C9A227] mx-auto mb-3" />
              <p className="text-gray-400 text-sm font-medium">Google Maps — Kigali, Rwanda</p>
              <p className="text-gray-300 text-xs mt-1">Map integration available with Google Maps API key</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FAQ items={CONTACT_FAQS} title="Contact FAQs" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#10243B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mb-5" />
            <h2 className="font-heading font-bold text-white text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('contact_cta_title')}
            </h2>
            <p className="text-white/65 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
              {t('contact_cta_body')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors text-sm">
                <Phone size={16} />
                {t('contact_book')}
              </a>
              <a href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/5 transition-all text-sm">
                <Mail size={16} />
                {t('contact_quote')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
