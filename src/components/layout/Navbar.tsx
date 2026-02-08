import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types';
import { navItems } from '@/data/navigation';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-full pl-6 pr-2 py-2 shadow-2xl shadow-black/50 flex items-center gap-4 md:gap-8 transition-all duration-300 hover:scale-[1.01] hover:bg-[#111]/90 hover:border-white/20 group"
        >
          <a href="#" className="text-lg font-bold tracking-tighter text-white mix-blend-difference relative z-10">
            STEQ<span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">LABS</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-5 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide rounded-full hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-zinc-200 transition-colors duration-300"
            >
              START PROJECT
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition-colors active:scale-95"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 50% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 50% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 50% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-6"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                  className="text-4xl font-light tracking-tighter text-zinc-300 hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl font-light tracking-tighter text-white mt-8 border-b border-white pb-1"
              >
                Start Project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};