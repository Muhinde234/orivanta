'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, AlertCircle } from 'lucide-react';
import FAQ from '@/components/ui/FAQ';
import { BRAND, getServices } from '@/lib/data';
import { useLang } from '@/lib/LangContext';
import type { Lang } from '@/lib/locales';

const CONTACT_FAQS_I18N: Record<Lang, { q: string; a: string }[]> = {
  en: [
    { q: 'How can I request ORIVANTA services?', a: 'You can contact us through our online form, email, phone, or WhatsApp. Our team will review your request and respond with the next steps.' },
    { q: 'Can I schedule a meeting with an ORIVANTA consultant?', a: 'Yes. Clients can schedule physical or online consultations depending on their preference and availability.' },
    { q: 'Do you provide services outside Kigali?', a: 'Yes. ORIVANTA provides real estate solutions across Rwanda depending on client requirements and project scope.' },
    { q: 'How quickly will ORIVANTA respond?', a: 'We aim to respond to inquiries promptly and provide guidance on the appropriate next steps.' },
  ],
  fr: [
    { q: 'Comment puis-je demander les services d\'ORIVANTA?', a: "Vous pouvez nous contacter via notre formulaire en ligne, email, téléphone ou WhatsApp. Notre équipe examinera votre demande et vous répondra avec les prochaines étapes." },
    { q: 'Puis-je planifier une rencontre avec un consultant ORIVANTA?', a: "Oui. Les clients peuvent planifier des consultations physiques ou en ligne selon leur préférence et disponibilité." },
    { q: 'Fournissez-vous des services en dehors de Kigali?', a: "Oui. ORIVANTA fournit des solutions immobilières à travers le Rwanda selon les besoins du client et la portée du projet." },
    { q: 'À quelle vitesse ORIVANTA répondra-t-elle?', a: "Nous visons à répondre aux demandes rapidement et à fournir des conseils sur les prochaines étapes appropriées." },
  ],
  rw: [
    { q: 'Nasaba nte serivisi za ORIVANTA?', a: "Ushobora kutwandikira binyuze mu ifishi yacu iri kuri interineti, imeyili, telefoni, cyangwa WhatsApp. Itsinda ryacu rizasuzuma icyifuzo cyawe rikwereke intambwe zikurikira." },
    { q: 'Nshobora gusaba inama n\'umujyanama wa ORIVANTA?', a: "Yego. Abakiriya bashobora gusaba inama zisanzwe cyangwa izo kuri interineti bitewe n'ibyifuzo n'igihe bafite." },
    { q: 'Mutanga serivisi hanze ya Kigali?', a: "Yego. ORIVANTA itanga ibisubizo by'umutungo mu Rwanda hose bitewe n'ibyangombwa by'umukiriya n'ubunini bw'umushinga." },
    { q: 'ORIVANTA isubiza vuba gute?', a: "Dushaka gusubiza ibibazo vuba no gutanga ubuyobozi ku ntambwe zikurikira zikwiye." },
  ],
};

export default function ContactContent() {
  const { t, lang } = useLang();
  const CONTACT_FAQS = CONTACT_FAQS_I18N[lang];
  const SERVICES_LIST = [...getServices(lang).map((s) => s.title), t('form_other')];
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', location: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) setSubmitError(data.error ?? t('error_service_unavailable_contact'));
      else setSubmitted(true);
    } catch {
      setSubmitError(t('error_service_unavailable_contact'));
    }
    setSubmitting(false);
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
                { icon: MapPin, label: t('contact_label_location'), value: BRAND.address, href: undefined },
                { icon: Phone, label: t('contact_label_phone'), value: BRAND.phone, href: `tel:${BRAND.phone}` },
                { icon: Mail, label: t('contact_label_email'), value: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: MessageCircle, label: t('contact_label_whatsapp'), value: BRAND.whatsapp, href: `https://wa.me/${BRAND.whatsapp.replace(/\s/g, '')}` },
                { icon: Clock, label: t('contact_label_hours'), value: BRAND.hours, href: undefined },
              ].map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-5 bg-[#F8FAFC] border border-gray-100 rounded-sm hover:border-[#C9A227]/30 hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#10243B] flex items-center justify-center flex-shrink-0">
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
                      className="w-9 h-9 rounded-full bg-[#10243B] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300 text-white hover:text-[#10243B]">
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
                          placeholder={t('placeholder_name')}
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
                          placeholder={t('placeholder_email')}
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
                          placeholder={t('placeholder_phone')}
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
                          placeholder={t('placeholder_company')}
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
                        placeholder={t('placeholder_location')}
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
                        placeholder={t('placeholder_message')}
                      />
                    </div>

                    {submitError && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-100 text-red-600 text-sm rounded-sm px-4 py-3">
                        <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#C9A227] text-[#10243B] font-bold py-4 rounded-full hover:bg-[#b8911f] transition-colors duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-60"
                    >
                      <Send size={16} />
                      {submitting ? t('form_sending') : t('form_submit')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0 bg-white" aria-label="Office location map">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
              <h3 className="font-heading font-bold text-[#10243B] text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('contact_find_office')}
              </h3>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${BRAND.coords.lat},${BRAND.coords.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#10243B] hover:text-[#C9A227] transition-colors"
            >
              <MapPin size={15} className="text-[#C9A227]" />
              {t('get_directions')}
            </a>
          </div>
          <div className="w-full h-72 sm:h-[420px] rounded-sm overflow-hidden border border-gray-200">
            <iframe
              src={`https://www.google.com/maps?q=${BRAND.coords.lat},${BRAND.coords.lng}&z=17&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ORIVANTA PROPERTY LTD office location map"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FAQ items={CONTACT_FAQS} title={t('contact_faqs_title')} />
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
