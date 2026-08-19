import React from 'react';
import { FolderGridSection } from '@/components/organisms/FolderGridSection';
import { CATALOG_DATA } from '@/data/catalogData';

export const metadata = {
  title: 'Semua Katalog Portofolio — Risa Hanipah',
  description: 'Daftar lengkap 13 folder portofolio foto katalog, muse MUA, dan self makeup.',
};

export default function KatalogPage() {
  return (
    <div className="pt-8 pb-16">
      <FolderGridSection
        title="Daftar Lengkap Katalog Folder"
        subtitle="Temukan folder spesifik sesuai nama brand, MUA, atau kategori karya yang Anda inginkan."
        items={CATALOG_DATA}
      />
    </div>
  );
}
