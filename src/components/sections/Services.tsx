import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/types';
import { services } from '@/data/services';

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="expertise" className="py-32 px-6 md:px-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">Our Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">Outcomes over features.</h2>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border-t border-zinc-900 last:border-b transition-colors duration-500 hover:bg-zinc-900/30"
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="py-12 md:py-16 flex flex-col md:flex-row md:items-start gap-8 md:gap-24 cursor-pointer">
                <span className="text-zinc-600 font-mono text-sm pt-2">({service.id})</span>

                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl text-zinc-300 group-hover:text-white transition-colors duration-300 font-medium mb-6">
                    {service.title}
                  </h3>

                  <AnimatePresence>
                    {activeId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-400 max-w-xl text-lg font-light leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <div className="flex gap-4">
                          {service.tags.map(tag => (
                            <span key={tag} className="text-xs uppercase tracking-wider text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="hidden md:block pt-4">
                  <ArrowRight className={`w-6 h-6 text-white transition-transform duration-300 ${activeId === service.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};