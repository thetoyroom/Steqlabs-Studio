import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectItem } from '@/types';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { useCardAnimation } from '@/hooks/useCardAnimation';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">Selected Work</h3>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">Recent Deployments</h2>
          </div>
          <div className="hidden md:block">
            <Button variant="outline">View Archive</Button>
          </div>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="md:hidden mt-16">
          <Button variant="outline" className="w-full justify-center">View Archive</Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { y, scale } = useCardAnimation(ref);

  return (
    <div ref={ref} className="group cursor-pointer">
      <div className="overflow-hidden rounded-sm mb-8 aspect-[16/9] bg-zinc-900 relative">
        <motion.div style={{ scale }} className="w-full h-full">
          <img
            src={project.image}
            srcSet={project.srcset}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={project.client}
            className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
        </motion.div>
        {/* Cinematic overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
      </div>

      <div className="flex justify-between items-start border-b border-zinc-900 pb-8 transition-colors duration-500 group-hover:border-zinc-700">
        <div>
          <h3 className="text-3xl text-white font-medium mb-2 group-hover:text-zinc-300 transition-colors">
            {project.client}
          </h3>
          <p className="text-zinc-500 text-sm uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
            {project.category}
          </p>
        </div>
        <div className="text-zinc-600 font-mono text-sm group-hover:text-white transition-colors">
          {project.year}
        </div>
      </div>
    </div>
  );
};