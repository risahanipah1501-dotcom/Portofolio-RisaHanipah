import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  category: 'catalog' | 'muse' | 'self' | string;
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ category, children, className }) => {
  const getBadgeStyle = (cat: string) => {
    switch (cat) {
      case 'catalog':
        return 'bg-blue-100 text-blue-900 border-blue-300 font-extrabold';
      case 'muse':
        return 'bg-purple-100 text-purple-900 border-purple-300 font-extrabold';
      case 'self':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300 font-extrabold';
      default:
        return 'bg-slate-100 text-slate-900 border-slate-300 font-extrabold';
    }
  };

  const labelMap: Record<string, string> = {
    catalog: 'Foto Katalog',
    muse: 'Muse MUA',
    self: 'Self Makeup',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md uppercase tracking-wider shadow-sm',
          getBadgeStyle(category),
          className
        )
      )}
    >
      {children || labelMap[category] || category}
    </span>
  );
};
