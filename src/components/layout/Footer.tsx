import React from 'react';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start gap-12 mb-24">
          <h2 className="text-[10vw] leading-[0.9] font-medium tracking-tighter text-white">
            Let's build<br />
            <span className="text-zinc-600">the standard.</span>
          </h2>
          <Button className="text-lg px-10 py-5">Start Your Project</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-t border-zinc-900 pt-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold tracking-tighter text-white block mb-4">STEQLABS</span>
            <p className="text-zinc-500 text-sm max-w-xs">
              A digital product studio engineering brands for the next decade.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#method" className="hover:text-white transition-colors">Method</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Socials</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex justify-between items-end text-xs text-zinc-700 uppercase tracking-widest">
          <span>© 2024 STEQLABS</span>
          <span>London — New York</span>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-[0.03] pointer-events-none translate-y-1/2 -translate-x-1/2" />
    </footer>
  );
};