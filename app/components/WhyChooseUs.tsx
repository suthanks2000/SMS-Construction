'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const steps = [
    { number: '01', title: 'Planning', description: 'Detailed CAD drafting, structural modeling, and securing approvals.' },
    { number: '02', title: 'Sourcing', description: 'Procuring high-grade materials and verifying safety certifications.' },
    { number: '03', title: 'Construction', description: 'Expert site engineering with real-time client video updates.' },
    { number: '04', title: 'Handover', description: 'Final inspections, interior finish checks, and key handover.' },
  ];

  return (
    <section className="py-14 sm:py-28 bg-[#080C14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Process Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-5">
            Our Methodical Process
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/15 to-[#D4AF37]/0 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-[#0D1117] border border-white/[0.06] flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold mb-5 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{step.title}</h3>
              <p className="text-[13px] text-[#8B95A5] leading-relaxed max-w-[220px]">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
