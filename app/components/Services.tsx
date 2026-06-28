'use client';

import Link from 'next/link';
import { Compass, Layers, HardHat, Hammer, Box, Paintbrush, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number | string; strokeWidth?: number; className?: string }>;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: 'Surveying',
      description: 'Professional land surveying services using modern total station equipment for accurate site planning.',
      icon: Compass,
    },
    {
      title: 'Architectural Planning',
      description: 'Complete architectural blueprints, layouts, and engineering drawings ready for official approvals.',
      icon: Layers,
    },
    {
      title: 'Construction',
      description: 'End-to-end building construction and turn-key execution for residential and commercial sites.',
      icon: HardHat,
    },
    {
      title: 'Fabrication & Railing',
      description: 'Custom metal facades, glass claddings, roofing, and premium safety railing systems.',
      icon: Hammer,
    },
    {
      title: 'Design',
      description: 'Creative 3D elevation rendering, architectural design, and modern spatial planning.',
      icon: Box,
    },
    {
      title: 'Interior Works',
      description: 'Luxurious modular kitchens, false ceilings, wardrobes, and high-end wooden fit-outs.',
      icon: Paintbrush,
    },
  ];

  return (
    <section id="services" className="py-14 sm:py-28 bg-[#080C14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-5"
          >
            Elite Architectural &amp; Building Solutions
          </motion.h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 lg:gap-5 max-w-md sm:max-w-none mx-auto w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="glass-card p-6 sm:p-5 lg:p-6 rounded-[20px] flex flex-col justify-between items-start text-left cursor-default group h-full"
              >
                <div className="w-full flex-grow flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-2.5 lg:gap-3 text-[#D4AF37] mb-3 sm:mb-4 w-full">
                    <div className="shrink-0">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-white text-[15px] sm:text-[13px] lg:text-[14px] tracking-wide leading-tight min-w-0 flex-grow">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-[13px] sm:text-[11.5px] lg:text-[12.5px] text-[#8B95A5] leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
                
                <Link
                  href="/services"
                  className="mt-6 sm:mt-5 inline-flex items-center gap-1.5 text-[12px] sm:text-[11px] lg:text-[12px] font-bold text-[#D4AF37] hover:text-[#FBBF24] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
