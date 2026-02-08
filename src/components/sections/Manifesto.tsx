import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
                Beauty is common.<br />
                <span className="text-zinc-500">Strategy is rare.</span>
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col justify-between">
            <Reveal delay={0.4}>
              <div className="space-y-8">
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                  Most studios build templates. We build engines. Every pixel we place is calculated to guide your user from curiosity to commitment.
                </p>
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                  No fluff. No buzzwords. Just refined design psychology applied to your business goals.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6} className="mt-12">
              <div className="flex gap-12 border-t border-zinc-900 pt-8">
                <div>
                  <span className="block text-3xl font-medium text-white mb-2">3s</span>
                  <span className="text-zinc-600 text-sm uppercase tracking-widest">Avg. Capture Time</span>
                </div>
                <div>
                  <span className="block text-3xl font-medium text-white mb-2">2.5x</span>
                  <span className="text-zinc-600 text-sm uppercase tracking-widest">Conversion Uplift</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};