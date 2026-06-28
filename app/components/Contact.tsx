'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', projectType: 'Luxury Residential', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', projectType: 'Luxury Residential', message: '' });
    }, 3000);
  };

  const projectTypes = [
    'Luxury Residential',
    'Commercial Estate',
    'Interior Renovation',
    'Land Survey & Engineering'
  ];

  const contactInfo = [
    { icon: MapPin, title: 'Headquarters', desc: '123 Construction Avenue, Nagercoil, Kanyakumari, Tamil Nadu', href: 'https://www.google.com/maps/place/SMS+CONSTRUCTION/@8.1806879,77.4308973,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f108ea52fa71:0x479afff108b86846!8m2!3d8.1806879!4d77.4308973!16s%2Fg%2F11jt3gf8tv' },
    { icon: Phone, title: 'Call Office', desc: '+91 94432 00000', href: 'tel:+919443200000' },
    { icon: MessageSquare, title: 'WhatsApp', desc: 'Chat with us instantly', href: 'https://wa.me/919443200000' },
    { icon: Mail, title: 'Email', desc: 'info@smsconstruction.in', href: 'mailto:info@smsconstruction.in' },
  ];

  return (
    <section id="contact" className="py-14 sm:py-28 bg-[#0A0F18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Contact</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-5">Start Your Luxury Build</h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left — Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-start gap-4 p-5 rounded-[16px] bg-white/[0.02] border border-white/[0.04] hover:border-[#D4AF37]/15 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[13px]">{item.title}</h4>
                    <p className="text-[12px] text-[#8B95A5] mt-0.5">{item.desc}</p>
                  </div>
                </a>
              );
            })}

            {/* Real Google Map Embed styled to fit dark theme */}
            <a
              href="https://www.google.com/maps/place/SMS+CONSTRUCTION/@8.1806879,77.4308973,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f108ea52fa71:0x479afff108b86846!8m2!3d8.1806879!4d77.4308973!16s%2Fg%2F11jt3gf8tv"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-[180px] rounded-[16px] overflow-hidden border border-white/[0.04] mt-2 group"
            >
              {/* Click Interceptor Overlay */}
              <div className="absolute inset-0 z-10 bg-transparent cursor-pointer" />

              {/* Styled Iframe Map Background */}
              <iframe
                title="SMS Construction Headquarters Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3204044390554!2d77.42832237587884!3d8.1806931918503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f108ea52fa71%3A0x479afff108b86846!2sSMS%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert-[0.9] contrast-[1.25] opacity-50 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Luxury Map Overlay Badge */}
              <div className="absolute bottom-3 left-3 bg-[#080C14]/90 backdrop-blur-sm border border-white/[0.06] group-hover:border-[#D4AF37]/30 px-3 py-1.5 rounded-lg text-[9px] font-bold text-[#D4AF37] tracking-wider transition-all duration-300 flex items-center gap-1.5 z-20">
                <span>OPEN IN GOOGLE MAPS</span>
              </div>
            </a>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              className="glass-card p-8 rounded-[24px] text-left h-full"
            >
              <h3 className="font-serif text-xl font-bold text-white mb-8">Request Consultation</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-semibold text-[#8B95A5] uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#0D1117] border border-white/[0.06] rounded-xl px-5 py-3.5 text-[13px] text-white placeholder-white/15 hover:border-white/10 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/30 focus:shadow-[0_0_15px_rgba(212,175,55,0.08)] transition-all duration-300"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-semibold text-[#8B95A5] uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-[#0D1117] border border-white/[0.06] rounded-xl px-5 py-3.5 text-[13px] text-white placeholder-white/15 hover:border-white/10 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/30 focus:shadow-[0_0_15px_rgba(212,175,55,0.08)] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Custom Project Dropdown */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-[11px] font-semibold text-[#8B95A5] uppercase tracking-wider">Project Type</label>
                  
                  {/* Dropdown Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full bg-[#0D1117] border border-white/[0.06] rounded-xl px-5 py-3.5 text-[13px] text-white text-left flex items-center justify-between hover:border-white/10 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/30 transition-all duration-300 cursor-pointer"
                  >
                    <span>{formState.projectType}</span>
                    <ChevronDown size={15} className={`text-[#D4AF37] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <>
                        {/* Outside Click Interceptor */}
                        <div className="fixed inset-0 z-20 cursor-default" onClick={() => setDropdownOpen(false)} />
                        
                        {/* Dropdown Options Box */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-[76px] left-0 w-full bg-[#0D1117] border border-white/[0.08] rounded-xl shadow-2xl z-30 py-2 mt-1 overflow-hidden"
                        >
                          {projectTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setFormState({ ...formState, projectType: type });
                                setDropdownOpen(false);
                              }}
                              className={`w-full text-left px-5 py-3 text-[13px] transition-colors ${
                                formState.projectType === type
                                  ? 'text-[#D4AF37] font-semibold bg-white/[0.02]'
                                  : 'text-white/80 hover:bg-white/[0.02] hover:text-[#D4AF37]'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold text-[#8B95A5] uppercase tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your vision..."
                    className="w-full bg-[#0D1117] border border-white/[0.06] rounded-xl px-5 py-3.5 text-[13px] text-white placeholder-white/15 hover:border-white/10 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/30 focus:shadow-[0_0_15px_rgba(212,175,55,0.08)] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#080C14] font-bold py-4 rounded-xl hover:bg-[#FBBF24] active:scale-[0.98] transition-all uppercase tracking-widest cursor-pointer text-[12px] group"
                >
                  {submitted ? (
                    <span>Thank You! Message Sent.</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
