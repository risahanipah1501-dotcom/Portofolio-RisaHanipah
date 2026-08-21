'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

interface VideoTileProps {
  src: string;
  title?: string;
  index: number;
}

export const VideoTile: React.FC<VideoTileProps> = ({
  src,
  title = 'Video Dokumentasi Portofolio',
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="group relative rounded-2xl overflow-hidden glass-panel border border-purple-200/90 shadow-lg bg-slate-950"
    >
      <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] overflow-hidden bg-slate-950 flex items-center justify-center">
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-contain sm:object-cover rounded-2xl"
        >
          Browser Anda tidak mendukung pemutar video.
        </video>
        <div className="absolute top-3 left-3 pointer-events-none z-10 flex items-center gap-1.5 text-xs font-mono font-extrabold text-purple-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-purple-200 shadow-sm">
          <Video className="w-3.5 h-3.5 text-purple-700" />
          <span>Video #{index + 1}</span>
        </div>
      </div>
    </motion.div>
  );
};
