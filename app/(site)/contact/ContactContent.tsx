'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ExternalLink } from 'lucide-react';
import FAQ from '@/components/ui/FAQ';
import { BRAND } from '@/lib/data';

const CONTACT_FAQS = [
  { q: 'How can I request AXIOM services?', a: 'You can contact us through our online form, email, phone, or WhatsApp. Our team will review your request and respond with the next steps.' },
  { q: 'Can I schedule a meeting with an AXIOM consultant?', a: 'Yes. Clients can schedule physical or online consultations depending on their preference and availability.' },
  { q: 'Do you provide services outside Kigali?', a: 'Yes. AXIOM provides real estate solutions across Rwanda depending on client requirements and project scope.' },
  { q: 'How quickly will AXIOM respond?', a: 'We aim to respond to inquiries promptly and provide guidance on the appropriate next steps.' },
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
                <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
                <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-5" />
                <h2 className="font-heading font-bold text-[#10243B] text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  We&apos;re Ready to Help
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Whether you require property valuation, consultancy, property management, investment advice, brokerage services, or corporate real estate solutions, our team is available to provide expert guidance.
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
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Connect With AXIOM</div>
                <div className="flex gap-3">
                  {[
                    { label: 'in', href: BRAND.linkedin, title: 'LinkedIn' },
                    { label: 'f', href: BRAND.facebook, title: 'Facebook' },
                    { label: 'ig', href: BRAND.instagram, title: 'Instagram' },
                    { label: 'yt', href: BRAND.youtube, title: 'YouTube' },
                    { label: 'x', href: BRAND.twitter, title: 'X (Twitter)' },
                  ].map(({ label, href, title }) => (
                    <a key={title} href={href} aria-label={title}
                      className="w-9 h-9 rounded-sm bg-[#10243B] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300 text-white hover:text-[#10243B] text-xs font-bold">
                      {label}
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
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-[#C9A227]" />
                    </div>
                    <h4 className="font-heading font-bold text-[#10243B] text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Message Sent Successfully
                    </h4>
                    <p className="text-gray-500 text-sm">Thank you for reaching out. Our team will respond to your inquiry promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                          Full Name <span className="text-[#C9A227]">*</span>
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
                          Email Address <span className="text-[#C9A227]">*</span>
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
                          Phone Number <span className="text-[#C9A227]">*</span>
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
                          Company Name <span className="text-gray-300">(Optional)</span>
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
                        Service Required
                      </label>
                      <select
                        id="service"
                        value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#10243B] focus:outline-none focus:border-[#C9A227] transition-colors bg-white"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Property Location <span className="text-gray-300">(Optional)</span>
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
                        Message <span className="text-[#C9A227]">*</span>
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
                      Submit Inquiry
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
            Find Our Office
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
              Let&apos;s Discuss Your Real Estate Goals
            </h2>
            <p className="text-white/65 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
              Whether you are planning to invest, manage, develop, buy, or sell property, AXIOM Realty Consultant Ltd is ready to provide professional support and strategic guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors text-sm">
                <Phone size={16} />
                Book a Consultation
              </a>
              <a href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/5 transition-all text-sm">
                <Mail size={16} />
                Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
