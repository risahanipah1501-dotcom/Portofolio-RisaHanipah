'use client';

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Grid3X3, SearchX, Sparkles, Camera } from 'lucide-react';
import { CATALOG_DATA, CatalogItem } from '@/data/catalogData';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { FilterTabs } from '@/components/molecules/FilterTabs';
import { FolderCard } from '@/components/molecules/FolderCard';
import { SearchInput } from '@/components/atoms/SearchInput';
import { Heading } from '@/components/atoms/Heading';
import { IconButton } from '@/components/atoms/IconButton';

interface FolderGridSectionProps {
  title?: string;
  subtitle?: string;
  items?: CatalogItem[];
}

export const FolderGridSection: React.FC<FolderGridSectionProps> = ({
  title = 'Katalog Portofolio Risa',
  subtitle = 'Pilih folder di bawah ini untuk melihat seluruh hasil foto rincian karya.',
  items = CATALOG_DATA,
}) => {
  const { activeCategory, searchQuery, setSearchQuery, viewMode, setViewMode } =
    usePortfolioStore();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.rawFolderName.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [items, activeCategory, searchQuery]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-purple-200">
        <div className="space-y-2">
          <Heading as="h2" goldGradient className="flex items-center gap-2">
            <Camera className="w-8 h-8 text-purple-600 hidden sm:inline-block" />
            {title}
          </Heading>
          <p className="text-sm text-slate-600 max-w-xl font-normal">{subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />

          {/* View mode toggle */}
          <div className="hidden sm:flex items-center gap-1 p-1 bg-white border border-purple-200 rounded-full shadow-sm">
            <IconButton
              size="sm"
              variant={viewMode === 'grid' ? 'solid' : 'ghost'}
              onClick={() => setViewMode('grid')}
              title="Grid View (3 Kolom)"
            >
              <LayoutGrid className="w-4 h-4" />
            </IconButton>
            <IconButton
              size="sm"
              variant={viewMode === 'masonry' ? 'solid' : 'ghost'}
              onClick={() => setViewMode('masonry')}
              title="Compact View (4 Kolom)"
            >
              <Grid3X3 className="w-4 h-4" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex items-center justify-between gap-4">
        <FilterTabs catalogItems={items} />

        <div className="text-xs text-purple-900 font-mono font-bold hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-purple-200 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          Menampilkan <span className="text-purple-700 font-extrabold">{filteredItems.length}</span> dari {items.length} Folder
        </div>
      </div>

      {/* Folder Grid Cards */}
      {filteredItems.length > 0 ? (
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <FolderCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty Search State */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center p-12 text-center glass-panel rounded-3xl border border-purple-200 space-y-4 my-8"
        >
          <div className="p-4 rounded-2xl bg-purple-100 text-purple-700 border border-purple-200">
            <SearchX className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">Tidak ada folder ditemukan</h3>
          <p className="text-sm text-slate-600 max-w-md font-normal">
            Tidak dapat menemukan folder yang cocok dengan pencarian kata kunci &quot;{searchQuery}&quot;. Coba gunakan kata kunci lain atau reset filter.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs font-extrabold px-5 py-2.5 rounded-full cheerful-blue-purple-bg text-white shadow-md hover:scale-105 transition-all"
          >
            Reset Pencarian
          </button>
        </motion.div>
      )}
    </section>
  );
};
