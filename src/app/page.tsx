import React from 'react';
import { HeroSection } from '@/components/organisms/HeroSection';
import { FolderGridSection } from '@/components/organisms/FolderGridSection';
import { CATALOG_DATA } from '@/data/catalogData';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Portfolio Catalog Grid Section */}
      <FolderGridSection
        title="Katalog Folder Portofolio"
        subtitle="Eksplorasi 13 folder foto hasil sesi catalog fashion, riasan MUA profesional, dan karya mandiri Risa."
        items={CATALOG_DATA}
      />
    </div>
  );
}
