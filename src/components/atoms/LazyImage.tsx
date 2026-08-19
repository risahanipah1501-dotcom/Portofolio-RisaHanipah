'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto';
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt = 'Foto Portofolio Risa',
  aspectRatio = 'auto',
  className,
  ...props
}) => {
  const aspectMap = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    auto: '',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'relative overflow-hidden bg-surface-light w-full h-full',
          aspectMap[aspectRatio],
          className
        )
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        {...props}
      />
    </div>
  );
};
