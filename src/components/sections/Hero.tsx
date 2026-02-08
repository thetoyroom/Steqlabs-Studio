import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useParallax } from '@/hooks/useParallax';

export const Hero: React.FC = () => {
  const { y, opacity } = useParallax();

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-zinc-900 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

        <div className="lg:col-span-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold border border-zinc-800 px-3 py-1 rounded-full">
              Design for Revenue
            </span>
          </motion.div>

          <h1 className="text-[14vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter text-white mb-8">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="block"
            >
              Turn attention
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="block text-zinc-500"
            >
              into revenue.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12"
          >
            <Button>Inquire Now</Button>
            <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
              We engineer high-performance websites for founders who value brand equity and conversion data.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ y, opacity }}
          className="lg:col-span-4 hidden lg:flex flex-col justify-end h-full pb-12 border-l border-zinc-900 pl-12"
        >
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-600 text-xs uppercase tracking-widest">Available</span>
              <span className="text-white font-medium">Q4 2024</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-600 text-xs uppercase tracking-widest">Specialty</span>
              <span className="text-white font-medium">SaaS & FinTech</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-600 text-xs uppercase tracking-widest">Location</span>
              <span className="text-white font-medium">Global / Remote</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />
    </section>
  );
};