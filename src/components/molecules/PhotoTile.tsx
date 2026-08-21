'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PhotoTileProps {
  src: string;
  alt?: string;
  index: number;
}

export const PhotoTile: React.FC<PhotoTileProps> = ({
  src,
  alt = 'Foto Portofolio Risa',
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="group relative rounded-2xl overflow-hidden glass-panel border border-slate-800/80 shadow-xl bg-surface-light cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
          <span className="text-xs font-mono font-bold text-slate-200 bg-background/80 px-2.5 py-1 rounded-md border border-white/10">
            Foto #{index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
