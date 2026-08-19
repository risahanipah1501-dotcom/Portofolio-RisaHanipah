import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant = 'glass',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none active:scale-90';

  const variants = {
    solid: 'bg-accent-gold text-background hover:bg-accent-gold-light shadow-md',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/10',
    glass: 'bg-surface-light/80 border border-slate-700/60 text-slate-200 hover:text-white hover:border-accent-gold/50 hover:bg-surface-hover backdrop-blur-sm',
  };

  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
};
