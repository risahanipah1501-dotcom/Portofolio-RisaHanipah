'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ClickRipple {
  id: number;
  x: number;
  y: number;
  color: string;
}

export const ClickAnimationListener: React.FC = () => {
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const colors = [
        'rgba(168, 85, 247, 0.6)', // Purple
        'rgba(59, 130, 246, 0.6)',  // Blue
        'rgba(236, 72, 153, 0.6)', // Pink
        'rgba(6, 182, 212, 0.6)',   // Cyan
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newRipple: ClickRipple = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
        color: randomColor,
      };

      setRipples((prev) => [...prev.slice(-8), newRipple]);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <React.Fragment key={ripple.id}>
            {/* Expanding Ripple Ring */}
            <motion.div
              initial={{ scale: 0.1, opacity: 0.8 }}
              animate={{ scale: 1.6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              style={{
                left: ripple.x - 24,
                top: ripple.y - 24,
                borderColor: ripple.color,
                boxShadow: `0 0 16px ${ripple.color}`,
              }}
              aria-hidden="true"
              className="absolute w-12 h-12 rounded-full border-2 border-purple-400 pointer-events-none"
            />

            {/* Micro Sparkle Burst */}
            <motion.div
              initial={{ scale: 0, opacity: 1, y: 0 }}
              animate={{ scale: 1.2, opacity: 0, y: -20 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{
                left: ripple.x - 6,
                top: ripple.y - 6,
              }}
              aria-hidden="true"
              className="absolute text-xs pointer-events-none select-none"
            >
              ✨
            </motion.div>
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
};
