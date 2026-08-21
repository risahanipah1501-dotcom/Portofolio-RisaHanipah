'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary: 'bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 hover:from-purple-600 hover:to-pink-500 text-white font-extrabold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-md',
    outline: 'border-2 border-purple-500/50 text-purple-900 hover:bg-purple-50 hover:border-purple-600 font-extrabold',
    ghost: 'text-slate-700 hover:text-slate-950 hover:bg-purple-100/50',
    glass: 'bg-white/90 border border-purple-200 text-purple-950 hover:text-purple-700 hover:border-purple-400 hover:bg-white shadow-sm font-bold',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {icon && <span className="text-current">{icon}</span>}
      {children}
    </motion.button>
  );
};

