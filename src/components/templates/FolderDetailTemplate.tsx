'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, FolderHeart, Image as ImageIcon, Video } from 'lucide-react';
import { CatalogItem } from '@/data/catalogData';
import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { Badge } from '@/components/atoms/Badge';
import { Heading } from '@/components/atoms/Heading';
import { PhotoTile } from '@/components/molecules/PhotoTile';
import { VideoTile } from '@/components/molecules/VideoTile';

interface FolderDetailTemplateProps {
  item: CatalogItem;
  relatedItems?: CatalogItem[];
}

export const FolderDetailTemplate: React.FC<FolderDetailTemplateProps> = ({
  item,
  relatedItems = [],
}) => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Top Breadcrumb & Back Link */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb
          items={[
            { label: 'Katalog', href: '/katalog' },
            { label: item.title },
          ]}
        />

        <Link
          href="/katalog"
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-800 hover:text-purple-700 transition-colors px-4 py-2 rounded-full bg-white border border-purple-200 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog</span>
        </Link>
      </div>

      {/* Folder Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-200 space-y-4 relative overflow-hidden shadow-md bg-white/90"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge category={item.category} />
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
              <ImageIcon className="w-3.5 h-3.5 text-purple-700" />
              Total {item.imagesCount} Foto
            </span>
            {item.videos && item.videos.length > 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
                <Video className="w-3.5 h-3.5 text-blue-700" />
                Total {item.videos.length} Video
              </span>
            )}
          </div>
        </div>

        <Heading as="h1" goldGradient className="flex items-center gap-2">
          {item.title}
        </Heading>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-3xl">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200 font-bold"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Direct Videos Gallery Display (if folder has videos) */}
      {item.videos && item.videos.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-purple-200">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-blue-600" />
              Video Dokumentasi Dalam Folder ({item.videos.length} Video)
            </h2>
            <span className="text-xs text-slate-600 font-mono font-bold">
              Menampilkan {item.videos.length} dari {item.videos.length} Video
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {item.videos.map((vidSrc, index) => (
              <VideoTile
                key={index}
                src={vidSrc}
                title={`${item.title} - Video ${index + 1}`}
                index={index}
              />
            ))}
          </div>
        </div>
      )}

      {/* Direct Photos Gallery Display */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-purple-200">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Seluruh Foto Dalam Folder ({item.imagesCount} Foto)
          </h2>
          <span className="text-xs text-slate-600 font-mono font-bold">Menampilkan {item.imagesCount} dari {item.imagesCount} Foto</span>
        </div>

        {/* Display ALL photos directly on page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {item.images.map((imgSrc, index) => (
            <PhotoTile
              key={index}
              src={imgSrc}
              alt={`${item.title} - Foto ${index + 1}`}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Related Folders Section */}
      {relatedItems.length > 0 && (
        <div className="pt-12 border-t border-purple-200 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FolderHeart className="w-5 h-5 text-purple-600" />
            Folder Portofolio Lainnya
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.slice(0, 3).map((rel) => (
              <Link key={rel.id} href={`/katalog/${rel.id}`} className="group">
                <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:border-purple-400 transition-all shadow-sm bg-white/90">
                  <div className="relative w-16 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <Badge category={rel.category} className="mb-1 text-[10px]" />
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-1">
                      {rel.title}
                    </h4>
                    <span className="text-xs text-slate-600 font-mono font-bold">
                      {rel.imagesCount} Foto{rel.videosCount > 0 ? ` • ${rel.videosCount} Video` : ''}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
