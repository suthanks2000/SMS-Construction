'use client';

import { ShieldCheck, Trees, Award, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-luxury-gold" />,
      title: 'Structural Durability',
      description: 'Engineered using top-grade steel and custom high-strength concrete mixes formulated for coastal climates.'
    },
    {
      icon: <Trees className="w-6 h-6 text-luxury-gold" />,
      title: 'Ecological Balance',
      description: 'Integrating solar grids, rainwater recycling, and micro-gardens to respect the rich Kanyakumari greenery.'
    },
    {
      icon: <Award className="w-6 h-6 text-luxury-gold" />,
      title: 'Heritage Craftsmanship',
      description: 'Using authentic premium materials like local granites and curated seasoned teak wood for custom detailing.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-luxury-gold" />,
      title: 'Regulatory Perfection',
      description: '100% compliant with TN RERA, strict local building norms, and clear documentation guarantees.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Architectural Legacy' },
    { number: '200+', label: 'Luxury Residences Delivered' },
    { number: '100%', label: 'On-Time Completion Rate' },
    { number: '500+', label: 'Happy Coastal Families' }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-luxury-bg border-t border-luxury-graphite relative overflow-hidden"
    >
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-luxury-gold/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header Title */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">
              Our Legacy & Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-text-primary mt-2">
              The Standard of Luxury in Kanyakumari
            </h2>
            <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
          </div>

          {/* Narrative & Stats grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            {/* Left: Detailed text description */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl text-luxury-champagne font-medium">
                Elegance Grounded in Quality.
              </h3>
              <p className="text-sm md:text-base text-luxury-text-secondary font-light leading-relaxed">
                SMS Construction has spent over a decade reshaping the landscape of Nagercoil and Kanyakumari District. We believe luxury is not just visual; it is structural, material, and contextual. By selecting prime plots with magnificent views of the Western Ghats or fresh coastal breezes, we build spaces that celebrate the geographical beauty of Tamil Nadu.
              </p>
              <p className="text-sm md:text-base text-luxury-text-secondary font-light leading-relaxed">
                Every detail is meticulously planned. From foundations custom-engineered to withstand coastal salt moisture, to soaring high-ceiling architectural structures, our residential buildings combine traditional local materials with futuristic European finishes.
              </p>
            </div>

            {/* Right: Achievements stats display */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-luxury-secondary/40 border border-luxury-border-gold rounded-xl p-6 flex flex-col justify-center items-center text-center backdrop-blur-sm shadow-md transition-all duration-300 hover:border-luxury-gold/30 hover:bg-luxury-secondary/70 group"
                >
                  <span className="font-serif text-3xl md:text-4xl font-bold text-luxury-gold group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </span>
                  <span className="text-[10px] md:text-xs text-luxury-text-secondary uppercase tracking-wider mt-2 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Brand Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div 
                key={idx}
                className="bg-luxury-secondary/20 border border-luxury-graphite rounded-xl p-8 hover:border-luxury-border-gold hover:bg-luxury-secondary/40 transition-all duration-500 group shadow-sm flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-luxury-secondary border border-luxury-graphite flex items-center justify-center group-hover:border-luxury-gold/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-serif text-lg text-luxury-champagne font-medium group-hover:text-luxury-soft-gold transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-xs text-luxury-text-secondary leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
