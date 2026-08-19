'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES, CatalogItem } from '@/data/catalogData';
import { CategoryType, usePortfolioStore } from '@/store/usePortfolioStore';

interface FilterTabsProps {
  catalogItems?: CatalogItem[];
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ catalogItems = [] }) => {
  const { activeCategory, setActiveCategory } = usePortfolioStore();

  const getItemCount = (catId: CategoryType) => {
    if (catId === 'all') return catalogItems.length;
    return catalogItems.filter((item) => item.category === catId).length;
  };

  return (
    <div className="flex items-center gap-1.5 p-1.5 bg-white/90 border border-purple-200 rounded-full overflow-x-auto no-scrollbar shadow-sm">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category.id;
        const count = catalogItems.length > 0 ? getItemCount(category.id as CategoryType) : null;

        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as CategoryType)}
            className={`relative px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-colors whitespace-nowrap focus:outline-none ${
              isActive ? 'text-white font-extrabold' : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 cheerful-blue-purple-bg rounded-full shadow-md shadow-purple-500/25"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {category.label}
              {count !== null && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-purple-100 text-purple-900'
                  }`}
                >
                  {count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};
