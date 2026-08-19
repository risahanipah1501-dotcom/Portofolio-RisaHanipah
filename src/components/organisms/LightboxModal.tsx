'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import { IconButton } from '@/components/atoms/IconButton';

export const LightboxModal: React.FC = () => {
  const { lightbox, closeLightbox, nextImage, prevImage, setLightboxIndex } =
    usePortfolioStore();

  const { isOpen, images, currentIndex, title, folderId } = lightbox;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    },
    [isOpen, closeLightbox, nextImage, prevImage]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentSrc = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col justify-between bg-background/95 backdrop-blur-2xl p-4 sm:p-6 overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto py-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-accent-gold/20 text-accent-gold border border-accent-gold/30">
              {currentIndex + 1} / {images.length}
            </span>
            {title && (
              <h3 className="text-sm sm:text-base font-bold text-slate-100 hidden sm:block">
                {title}
              </h3>
            )}
          </div>

          <div className="flex items-center gap-2">
            {folderId && (
              <Link
                href={`/katalog/${folderId}`}
                onClick={closeLightbox}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span>Lihat Folder Lengkap</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            )}
            <IconButton onClick={closeLightbox} variant="glass" size="md" title="Tutup (Esc)">
              <X className="w-5 h-5" />
            </IconButton>
          </div>
        </div>

        {/* Center Main Image Container */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Previous Button */}
          {images.length > 1 && (
            <div className="absolute left-2 sm:left-6 z-20">
              <IconButton
                onClick={prevImage}
                variant="glass"
                size="lg"
                title="Foto Sebelumnya (Kiri)"
              >
                <ChevronLeft className="w-6 h-6" />
              </IconButton>
            </div>
          )}

          {/* Animated Image Wrapper */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-5xl max-h-[75vh] flex items-center justify-center"
          >
            <Image
              src={currentSrc}
              alt={title || 'Foto Lightbox'}
              fill
              className="object-contain drop-shadow-2xl rounded-lg"
              sizes="100vw"
              priority
            />
          </motion.div>

          {/* Next Button */}
          {images.length > 1 && (
            <div className="absolute right-2 sm:right-6 z-20">
              <IconButton
                onClick={nextImage}
                variant="glass"
                size="lg"
                title="Foto Selanjutnya (Kanan)"
              >
                <ChevronRight className="w-6 h-6" />
              </IconButton>
            </div>
          )}
        </div>

        {/* Bottom Thumbnail Strip */}
        {images.length > 1 && (
          <div className="w-full max-w-4xl mx-auto z-10 overflow-x-auto py-2 flex items-center justify-center gap-2 no-scrollbar">
            {images.map((imgSrc, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`relative w-12 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-accent-gold scale-110 shadow-lg shadow-accent-gold/40 opacity-100'
                    : 'border-transparent opacity-40 hover:opacity-80'
                }`}
              >
                <Image src={imgSrc} alt={`Thumb ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
