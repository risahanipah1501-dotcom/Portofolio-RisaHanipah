import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label, className }) => {
  return (
    <div
      className={twMerge(
        clsx(
          'flex items-center gap-4 p-4.5 rounded-2xl glass-panel border border-purple-200 shadow-sm bg-white/90',
          className
        )
      )}
    >
      <div className="p-3 rounded-2xl bg-purple-100 text-purple-800 border border-purple-200">
        {icon}
      </div>
      <div className="text-left">
        <div className="text-2xl font-extrabold gold-gradient-text font-mono">{value}</div>
        <div className="text-xs text-slate-700 font-bold">{label}</div>
      </div>
    </div>
  );
};
