'use client';

import React from 'react';
import { motion } from 'framer-motion';

type CloudVariant = 1 | 2 | 3;
type PastelTint = 'purple' | 'blue' | 'pink' | 'cyan';

interface RealisticCloudProps {
  variant?: CloudVariant;
  tint?: PastelTint;
  className?: string;
}

// Realistic 3D Puffy Fluffy Cloud SVG matching the user's reference image
const RealisticCloud: React.FC<RealisticCloudProps> = ({
  variant = 1,
  tint = 'purple',
  className = 'w-32 h-20',
}) => {
  const tintStroke: Record<PastelTint, string> = {
    purple: 'rgba(168, 85, 247, 0.35)',
    blue: 'rgba(59, 130, 246, 0.35)',
    pink: 'rgba(236, 72, 153, 0.35)',
    cyan: 'rgba(6, 182, 212, 0.35)',
  };

  const tintGlow: Record<PastelTint, string> = {
    purple: 'drop-shadow(0 10px 18px rgba(168, 85, 247, 0.18)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.04))',
    blue: 'drop-shadow(0 10px 18px rgba(59, 130, 246, 0.18)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.04))',
    pink: 'drop-shadow(0 10px 18px rgba(236, 72, 153, 0.18)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.04))',
    cyan: 'drop-shadow(0 10px 18px rgba(6, 182, 212, 0.18)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.04))',
  };

  // Realistic Puffy Cumulus SVG Paths based on reference photo
  const pathVariants = {
    1: 'M 22 46 H 78 C 88 46 96 38 96 28 C 96 19 89 12 80 11 C 77 4 70 0 60 0 C 51 0 43 5 38 12 C 34 8 28 6 22 6 C 11 6 2 15 2 26 C 2 37 11 46 22 46 Z',
    2: 'M 18 44 C 9 44 2 36 2 26 C 2 16 9 8 18 7 C 22 3 28 0 34 0 C 44 0 53 7 55 17 C 58 15 62 14 66 14 C 76 14 84 21 84 31 C 84 41 76 44 66 44 H 18 Z',
    3: 'M 20 48 H 82 C 90 48 97 41 97 32 C 97 24 91 17 83 16 C 80 7 71 0 60 0 C 51 0 43 5 38 12 C 33 8 27 6 20 6 C 9 6 0 15 0 27 C 0 38 9 48 20 48 Z',
  };

  return (
    <svg
      viewBox="0 0 100 52"
      className={className}
      style={{ filter: tintGlow[tint] }}
    >
      <defs>
        <linearGradient id={`realCloudGrad-${tint}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#F8FAFC" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <path
        d={pathVariants[variant]}
        fill={`url(#realCloudGrad-${tint})`}
        stroke={tintStroke[tint]}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const FloatingClouds: React.FC = () => {
  const clouds: {
    top: string;
    left: string;
    variant: CloudVariant;
    tint: PastelTint;
    size: string;
    duration: number;
    delay: number;
    xOffset: number[];
    yOffset: number[];
  }[] = [
    // 1. Hero Top Left (Puffy Cumulus)
    { top: '3%', left: '5%', variant: 1, tint: 'purple', size: 'w-32 h-20', duration: 11, delay: 0, xOffset: [0, 22, 0], yOffset: [0, -12, 0] },
    // 2. Hero Top Right (Puffy Cumulus 2)
    { top: '6%', left: '76%', variant: 2, tint: 'blue', size: 'w-36 h-22', duration: 13, delay: 1, xOffset: [0, -26, 0], yOffset: [0, -14, 0] },
    // 3. Hero Mid Left
    { top: '15%', left: '10%', variant: 3, tint: 'pink', size: 'w-28 h-18', duration: 10, delay: 2, xOffset: [0, 18, 0], yOffset: [0, -10, 0] },
    // 4. Hero Mid Right
    { top: '22%', left: '82%', variant: 1, tint: 'cyan', size: 'w-30 h-19', duration: 12, delay: 0.5, xOffset: [0, -20, 0], yOffset: [0, -12, 0] },

    // 5. Folder Grid Area Top Left
    { top: '38%', left: '5%', variant: 2, tint: 'purple', size: 'w-34 h-21', duration: 14, delay: 1.5, xOffset: [0, 24, 0], yOffset: [0, -15, 0] },
    // 6. Folder Grid Area Mid Right
    { top: '48%', left: '78%', variant: 3, tint: 'blue', size: 'w-32 h-20', duration: 11.5, delay: 2.5, xOffset: [0, -22, 0], yOffset: [0, -12, 0] },

    // 7. Lower Section Left
    { top: '65%', left: '7%', variant: 1, tint: 'pink', size: 'w-30 h-19', duration: 12, delay: 0.8, xOffset: [0, 20, 0], yOffset: [0, -12, 0] },
    // 8. Lower Section Right
    { top: '78%', left: '80%', variant: 2, tint: 'cyan', size: 'w-36 h-22', duration: 13, delay: 1.8, xOffset: [0, -25, 0], yOffset: [0, -14, 0] },
    // 9. Footer Area Center
    { top: '92%', left: '28%', variant: 3, tint: 'purple', size: 'w-40 h-24', duration: 15, delay: 0.3, xOffset: [0, 26, 0], yOffset: [0, -16, 0] },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 min-h-full">
      {clouds.map((c, idx) => (
        <motion.div
          key={idx}
          style={{ top: c.top, left: c.left }}
          animate={{
            x: c.xOffset,
            y: c.yOffset,
          }}
          transition={{
            duration: c.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: c.delay,
          }}
          className="absolute opacity-85"
        >
          <RealisticCloud variant={c.variant} tint={c.tint} className={c.size} />
        </motion.div>
      ))}
    </div>
  );
};
