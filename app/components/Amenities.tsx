'use client';

import { useRef } from 'react';
import { animate } from 'animejs';
import { Cpu, Waves, Activity, Sparkles, SunDim, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface Amenity {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Amenities() {
  const iconRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const amenities: Amenity[] = [
    {
      id: 1,
      icon: <Cpu className="w-6 h-6 text-luxury-gold" />,
      title: 'Crestron Smart Automation',
      description: 'Lutron light settings, dynamic climate controls, and high-fidelity multi-room acoustics managed from central wall interfaces.'
    },
    {
      id: 2,
      icon: <Waves className="w-6 h-6 text-luxury-gold" />,
      title: 'Ocean-Facing Infinity Pool',
      description: 'A heated structural glass swimming pool elevated on structural cantilevers, providing seamless visual integration with the sea.'
    },
    {
      id: 3,
      icon: <Activity className="w-6 h-6 text-luxury-gold" />,
      title: 'High-Tech Wellness Spa',
      description: 'Custom therapeutic massage suites, dedicated yoga chambers looking onto the Western Ghats, and cardiovascular gym facilities.'
    },
    {
      id: 4,
      icon: <Sparkles className="w-6 h-6 text-luxury-gold" />,
      title: 'Teakwood Reception Lounge',
      description: 'Double-height visitor reception lounge with custom local stonework, 24/7 dedicated residential concierge assistance.'
    },
    {
      id: 5,
      icon: <SunDim className="w-6 h-6 text-luxury-gold" />,
      title: 'High-Capacity Solar Grid',
      description: '12KW hybrid micro-inverter setup, backup clean generators, rainwater filtration reservoirs, and greywater reclamation loops.'
    },
    {
      id: 6,
      icon: <ShieldCheck className="w-6 h-6 text-luxury-gold" />,
      title: 'Elite Multi-Tier Security',
      description: 'Biometric locks, high-definition thermal imaging perimeter loops, 24/7 armed patrols, and private secure parking garages.'
    }
  ];

  const handleMouseEnter = (id: number) => {
    const el = iconRefs.current[id];
    if (el) {
      // Trigger smooth anime.js micro animation
      animate(el, {
        rotate: '1turn',
        scale: [1, 1.15, 1],
        duration: 800,
        ease: 'inOutBack'
      });
    }
  };

  const handleMouseLeave = (id: number) => {
    const el = iconRefs.current[id];
    if (el) {
      // Reset smoothly
      animate(el, {
        rotate: '0deg',
        scale: 1,
        duration: 400,
        ease: 'outQuad'
      });
    }
  };

  return (
    <section 
      id="amenities" 
      className="py-24 bg-luxury-secondary border-t border-luxury-graphite relative overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-luxury-gold/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-luxury-gold/[0.02] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-luxury-champagne/[0.02] blur-[120px] pointer-events-none" />

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
            Bespoke Comforts
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-text-primary mt-2">
            The Amenities of Distinction
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div 
              key={amenity.id}
              onMouseEnter={() => handleMouseEnter(amenity.id)}
              onMouseLeave={() => handleMouseLeave(amenity.id)}
              className="bg-luxury-bg/40 border border-luxury-graphite rounded-xl p-8 hover:border-luxury-border-gold hover:bg-luxury-bg/85 transition-all duration-500 shadow-md group flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon wrapper animated with anime.js */}
                <div 
                  ref={(el) => { iconRefs.current[amenity.id] = el; }}
                  className="w-12 h-12 rounded-lg bg-luxury-secondary border border-luxury-graphite flex items-center justify-center group-hover:border-luxury-gold/50 transition-colors duration-300"
                >
                  {amenity.icon}
                </div>
                
                <h3 className="font-serif text-xl text-luxury-champagne font-semibold group-hover:text-luxury-soft-gold transition-colors duration-300">
                  {amenity.title}
                </h3>
                
                <p className="text-xs text-luxury-text-secondary leading-relaxed font-light">
                  {amenity.description}
                </p>
              </div>

              {/* Decorative mini gold underline that expands on hover */}
              <div className="w-8 h-[1px] bg-luxury-graphite group-hover:w-16 group-hover:bg-luxury-gold transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>

        </motion.div>
      </div>
    </section>
  );
}
