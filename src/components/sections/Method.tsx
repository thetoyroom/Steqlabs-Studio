import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { ProcessStep } from '@/types';
import { steps } from '@/data/process';

export const Method: React.FC = () => {
  return (
    <section id="method" className="py-32 px-6 md:px-12 bg-zinc-900 text-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="sticky top-32">
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">The Method</h3>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
                Precision is<br />predictable.
              </h2>
              <p className="text-zinc-400 text-lg max-w-md font-light">
                We replaced the chaotic creative process with a linear, outcome-focused workflow.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {steps.map((step, idx) => (
            <div key={step.number} className="group">
              <Reveal delay={idx * 0.1}>
                <div className="border-l border-zinc-700 pl-8 py-2 transition-all duration-300 group-hover:border-white group-hover:pl-12">
                  <span className="block text-zinc-600 font-mono text-sm mb-4">/{step.number}</span>
                  <h3 className="text-2xl font-medium text-white mb-4">{step.title}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};