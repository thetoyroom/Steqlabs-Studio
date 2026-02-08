import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  icon = true
}) => {
  const baseStyles = "relative inline-flex items-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all duration-300 ease-out overflow-hidden group";

  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
    outline: "border border-zinc-800 text-zinc-400 hover:text-white hover:border-white/50"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};