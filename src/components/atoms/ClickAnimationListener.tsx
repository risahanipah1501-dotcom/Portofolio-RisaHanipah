'use client';

import React, { useEffect, useRef } from 'react';

interface ClickParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  rotation: number;
  vRot: number;
}

interface ClickRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  color: string;
  alpha: number;
  decay: number;
}

export const ClickAnimationListener: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: ClickParticle[] = [];
    const ripples: ClickRipple[] = [];

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(168, 85, 247, ',  // Purple
      'rgba(59, 130, 246, ',   // Blue
      'rgba(236, 72, 153, ',   // Pink
      'rgba(234, 179, 8, ',    // Gold
      'rgba(139, 92, 246, ',   // Indigo
    ];

    const handleClick = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Add Expanding Ripple Ring
      const chosenColor = colors[Math.floor(Math.random() * colors.length)];
      ripples.push({
        x: clientX,
        y: clientY,
        radius: 6,
        maxRadius: 36,
        color: chosenColor,
        alpha: 0.8,
        decay: 0.035,
      });

      // Add Burst Sparkle Particles
      const particleCount = 8;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 0.4 - 0.2);
        const speed = Math.random() * 2.5 + 1.5;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x: clientX,
          y: clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 2,
          color: color,
          alpha: 1,
          decay: Math.random() * 0.03 + 0.02,
          rotation: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.1,
        });
      }
    };

    // Attach Event Listeners
    window.addEventListener('click', handleClick, { passive: true });
    window.addEventListener('touchstart', handleClick, { passive: true });

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render & Update Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${r.color}${r.alpha})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();

        r.radius += (r.maxRadius - r.radius) * 0.18 + 1;
        r.alpha -= r.decay;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // Render & Update Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw 4-point Sparkle Star
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        const s = p.size;
        ctx.moveTo(0, -s * 1.5);
        ctx.quadraticCurveTo(0, 0, s * 1.5, 0);
        ctx.quadraticCurveTo(0, 0, 0, s * 1.5);
        ctx.quadraticCurveTo(0, 0, -s * 1.5, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s * 1.5);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.rotation += p.vRot;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[99999] select-none"
    />
  );
};
