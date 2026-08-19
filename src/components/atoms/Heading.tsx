import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  goldGradient?: boolean;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  as = 'h2',
  children,
  goldGradient = false,
  className,
}) => {
  const Component = as;

  const baseStyles = 'font-bold tracking-tight';

  const sizes = {
    h1: 'text-4xl md:text-6xl lg:text-7xl font-extrabold',
    h2: 'text-2xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-xl md:text-2xl font-semibold',
    h4: 'text-lg font-medium',
  };

  return (
    <Component
      className={twMerge(
        clsx(
          baseStyles,
          sizes[as],
          goldGradient ? 'gold-gradient-text' : 'text-slate-900',
          className
        )
      )}
    >
      {children}
    </Component>
  );
};
