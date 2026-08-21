'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FolderOpen, ArrowRight, Camera, Sparkles, Video } from 'lucide-react';
import { CatalogItem } from '@/data/catalogData';
import { Badge } from '@/components/atoms/Badge';
import { LazyImage } from '@/components/atoms/LazyImage';

interface FolderCardProps {
  item: CatalogItem;
}

export const FolderCard: React.FC<FolderCardProps> = ({ item }) => {
  const previewPhotos = item.images.slice(0, 3);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col glass-panel rounded-3xl overflow-hidden glass-panel-hover border border-purple-200/90 shadow-md"
    >
      {/* Top Header Badge & Info */}
      <div className="p-4 flex items-center justify-between border-b border-purple-100 bg-white/70">
        <Badge category={item.category} />
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-mono text-purple-900 font-extrabold px-3 py-1 rounded-full bg-purple-100 border border-purple-200 flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-purple-700" />
            {item.imagesCount} Foto
          </span>
          {item.videosCount > 0 && (
            <span className="text-xs font-mono text-blue-900 font-extrabold px-3 py-1 rounded-full bg-blue-100 border border-blue-200 flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-blue-700" />
              {item.videosCount} Video
            </span>
          )}
        </div>
      </div>

      {/* Main Large Photo Preview */}
      <Link href={`/katalog/${item.id}`} className="block relative aspect-[3/4] w-full overflow-hidden bg-slate-100 group/img">
        <LazyImage
          src={item.coverImage}
          alt={item.title}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-extrabold bg-slate-950/75 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/20 shadow-lg">
          <span className="line-clamp-1">{item.title}</span>
          <ArrowRight className="w-4 h-4 text-cyan-300 flex-shrink-0 group-hover/img:translate-x-1 transition-transform" />
        </div>
      </Link>

      {/* Direct Photos Grid Thumbnails directly on card */}
      {previewPhotos.length > 1 && (
        <div className="p-3 bg-purple-50/60 border-t border-purple-100 flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase text-purple-800 font-bold tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-pink-500" /> Foto:
          </span>
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            {previewPhotos.map((photoSrc, idx) => (
              <Link
                key={idx}
                href={`/katalog/${item.id}`}
                className="relative aspect-square rounded-xl overflow-hidden border border-purple-200 hover:border-purple-500 transition-colors shadow-sm"
              >
                <img
                  src={photoSrc}
                  alt={`${item.title} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Card Content & Action Button */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <Link href={`/katalog/${item.id}`}>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-1">
            {item.title}
          </h3>
        </Link>
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
          {item.description}
        </p>

        <div className="pt-2 mt-auto">
          <Link
            href={`/katalog/${item.id}`}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl cheerful-blue-purple-bg text-white font-extrabold text-xs shadow-md shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <FolderOpen className="w-4 h-4" />
            <span>
              Buka Dan Lihat {item.imagesCount} Foto{item.videosCount > 0 ? ` & ${item.videosCount} Video` : ''} Lengkap
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
