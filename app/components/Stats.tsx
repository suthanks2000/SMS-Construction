'use client';

import { ShieldCheck, Clock, Award, Headphones } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) {
      setDisplayValue('0');
      return;
    }

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];

    const duration = 1500;
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);

      setDisplayValue(`${currentVal}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, isInView]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Stats() {
  const stats = [
    { value: '150+', label: 'Projects Completed', icon: Award },
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '100%', label: 'Quality Assured', icon: ShieldCheck },
    { value: '24/7', label: 'Client Support', icon: Headphones },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#080C14] relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Milestones
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-5">
            SMS Construction By The Numbers
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-[20px] text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gradient-gold mb-1">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-[12px] text-[#8B95A5] font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
