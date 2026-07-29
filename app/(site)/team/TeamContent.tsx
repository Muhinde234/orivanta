'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, User, CheckCircle } from 'lucide-react';
import { useCMS } from '@/lib/useCMS';

const TEAM = [
  {
    name: 'Daniel NGARUKIYIMANA',
    role: 'Founder & Managing Director',
    bio: 'As the Founder and Managing Director of AXIOM Realty Consultant Ltd, Daniel provides strategic leadership and oversees the company\'s vision, operations, and professional service delivery. With a background in Estate Management and Valuation, he focuses on delivering innovative real estate solutions through professional advisory, market analysis, and client-focused strategies.',
    responsibilities: [
      'Company strategy and leadership',
      'Client relationship management',
      'Real estate consultancy',
      'Property valuation oversight',
      'Business development',
      'Quality assurance of services',
    ],
    expertise: ['Property Valuation', 'Real Estate Consultancy', 'Investment Advisory', 'Market Analysis', 'Property Strategy'],
    linkedin: '#',
    email: 'daniel@axiomrealty.rw',
  },
];

export default function TeamContent() {
  const { data } = useCMS(['team_name','team_role','team_bio','team_photo','team_email','team_linkedin']);

  const members = [{
    name: data.team_name || TEAM[0].name,
    role: data.team_role || TEAM[0].role,
    bio: data.team_bio || TEAM[0].bio,
    photo: data.team_photo || '/images/PXL_20231128_151335702.PORTRAIT~2.jpg',
    responsibilities: TEAM[0].responsibilities,
    expertise: TEAM[0].expertise,
    linkedin: data.team_linkedin || TEAM[0].linkedin,
    email: data.team_email || TEAM[0].email,
  }];
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured member */}
              {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-3 gap-12 mb-20"
            >
              {/* Portrait */}
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#C9A227]/20 rounded-sm" />
                <div className="relative rounded-sm aspect-[3/4] overflow-hidden group">
                  <Image src={member.photo} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
                </div>
                {/* Social */}
                <div className="flex gap-3 mt-5 justify-center">
                                  <a href={member.linkedin} aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#10243B] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300 text-white hover:text-[#10243B] text-xs font-bold">
                    in
                  </a>
                  <a href={`mailto:${member.email}`} aria-label="Email" className="w-10 h-10 rounded-full bg-[#10243B] flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300">
                    <Mail size={16} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-2">
                <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">{member.role}</span>
                <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-4" />
                <h2 className="font-heading font-bold text-[#10243B] text-3xl mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {member.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">{member.bio}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-[#10243B] text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2">
                      {member.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#10243B] text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((e, j) => (
                        <span key={j} className="bg-[#F8FAFC] border border-gray-200 text-[#10243B] text-xs font-medium px-3 py-1.5 rounded-sm">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for future team members */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-dashed border-gray-200 rounded-sm p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#F8FAFC] border-2 border-dashed border-gray-300 flex items-center justify-center mx-auto mb-4">
              <User size={24} className="text-gray-300" />
            </div>
            <h3 className="font-heading font-bold text-gray-400 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Growing Our Team
            </h3>
            <p className="text-gray-400 text-sm">Additional team members will be featured here as AXIOM continues to grow.</p>
          </motion.div>
        </div>
      </section>

      {/* Team commitment */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mb-5" />
            <h2 className="font-heading font-bold text-[#10243B] text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Team Commitment
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed italic mb-2">
              &ldquo;Working together to create real estate value&rdquo;
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
              At AXIOM Realty Consultant Ltd, we continuously develop our knowledge, embrace innovation, and maintain professional standards to provide clients with trusted real estate solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
