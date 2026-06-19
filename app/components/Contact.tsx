'use client';

import { useState, useRef } from 'react';
import { animate } from 'animejs';
import { Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'Palms Oceanfront Duplex',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger anime.js success reveal animation
      setTimeout(() => {
        if (successRef.current) {
          animate(successRef.current, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            ease: 'outBack'
          });
        }
      }, 50);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-luxury-secondary border-t border-luxury-graphite relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-luxury-gold" />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-luxury-gold" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-luxury-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">
            Inquire Privately
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-text-primary mt-2">
            Begin Your Legacy Journey
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl text-luxury-champagne font-medium">
                Schedule a Consultation.
              </h3>
              <p className="text-sm text-luxury-text-secondary leading-relaxed font-light">
                Request a private viewing, ask for structural blueprints, or coordinate a consultation with our Principal Architect. Our experience team based in Nagercoil is here to guide you.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full border border-luxury-graphite flex items-center justify-center text-luxury-gold bg-luxury-bg shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-text-secondary">Direct Liaison</p>
                  <a href="tel:+919443423345" className="text-sm font-semibold text-luxury-text-primary hover:text-luxury-soft-gold transition-colors duration-300 font-serif">
                    +91 94434 23345
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full border border-luxury-graphite flex items-center justify-center text-luxury-gold bg-luxury-bg shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-text-secondary">Digital Correspondence</p>
                  <a href="mailto:sales@smsconstruction.in" className="text-sm font-semibold text-luxury-text-primary hover:text-luxury-soft-gold transition-colors duration-300 font-serif">
                    sales@smsconstruction.in
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full border border-luxury-graphite flex items-center justify-center text-luxury-gold bg-luxury-bg shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-text-secondary">Experience Lounge</p>
                  <p className="text-sm font-semibold text-luxury-text-primary font-serif">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="border-t border-luxury-graphite pt-6 text-[10px] text-luxury-text-secondary font-light leading-relaxed">
              * By submitting this dossier request, you authorize SMS Construction to coordinate contact and provide detailed floor files. Your data remains strictly confidential and secure.
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-luxury-bg/50 border border-luxury-border-gold rounded-2xl p-8 shadow-2xl relative min-h-[450px] flex items-center justify-center">
            
            {!isSubmitted ? (
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-luxury-soft-gold font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Anand Kumar"
                      className="bg-luxury-secondary/50 border border-luxury-graphite text-sm rounded-lg p-3 text-luxury-text-primary placeholder:text-luxury-text-secondary/35 focus:outline-none focus:border-luxury-gold hover:border-luxury-gold/50 transition-colors duration-300"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-luxury-soft-gold font-bold">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 94434 23345"
                      className="bg-luxury-secondary/50 border border-luxury-graphite text-sm rounded-lg p-3 text-luxury-text-primary placeholder:text-luxury-text-secondary/35 focus:outline-none focus:border-luxury-gold hover:border-luxury-gold/50 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-luxury-soft-gold font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. anand@example.com"
                    className="bg-luxury-secondary/50 border border-luxury-graphite text-sm rounded-lg p-3 text-luxury-text-primary placeholder:text-luxury-text-secondary/35 focus:outline-none focus:border-luxury-gold hover:border-luxury-gold/50 transition-colors duration-300"
                  />
                </div>

                {/* Project selector */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="project" className="text-[10px] uppercase tracking-widest text-luxury-soft-gold font-bold">
                    Property of Interest
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="bg-luxury-secondary/50 border border-luxury-graphite text-sm rounded-lg p-3 text-luxury-text-primary focus:outline-none focus:border-luxury-gold hover:border-luxury-gold/50 transition-colors duration-300"
                  >
                    <option value="Palms Oceanfront Duplex">The Palms Oceanfront Estate</option>
                    <option value="Oasis Royal Pavilion">Oasis Royal Pavilion</option>
                    <option value="Summit Penthouses">The Summit Penthouses</option>
                    <option value="Teakwood Manor">The Teakwood Manor</option>
                    <option value="Aura Grand Crest">Aura Grand Crest</option>
                    <option value="Bespoke Custom Villa">Bespoke Custom Villa Design</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-luxury-soft-gold font-bold">
                    Message / Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your architectural ideas or structural preferences..."
                    className="bg-luxury-secondary/50 border border-luxury-graphite text-sm rounded-lg p-3 text-luxury-text-primary placeholder:text-luxury-text-secondary/35 focus:outline-none focus:border-luxury-gold hover:border-luxury-gold/50 transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-2 bg-luxury-gold border border-luxury-gold text-luxury-bg hover:bg-transparent hover:text-luxury-gold px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Dossier...' : 'Request Private Dossier'}
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            ) : (
              // Success Message Layout
              <div 
                ref={successRef}
                className="w-full text-center space-y-6 py-10 opacity-0"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold mx-auto flex items-center justify-center text-luxury-gold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-luxury-text-primary">
                    Dossier Requested
                  </h3>
                  <p className="text-sm text-luxury-gold font-mono uppercase tracking-wider">
                    Registration ID: SMS-{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>

                <p className="text-xs text-luxury-text-secondary font-light max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-luxury-soft-gold font-semibold">{formData.name}</span>. 
                  Our luxury concierge liaison based in Nagercoil will contact you via <span className="text-luxury-soft-gold font-semibold">{formData.phone}</span> or <span className="text-luxury-soft-gold font-semibold">{formData.email}</span> within 2 hours.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', project: 'Palms Oceanfront Duplex', message: '' });
                    }}
                    className="group flex items-center justify-center gap-2 border border-luxury-graphite hover:border-luxury-gold text-luxury-text-secondary hover:text-luxury-gold px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 mx-auto"
                  >
                    Submit New Inquiry
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

        </motion.div>
      </div>
    </section>
  );
}
