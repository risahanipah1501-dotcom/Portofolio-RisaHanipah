import React from 'react';
import { notFound } from 'next/navigation';
import { CATALOG_DATA } from '@/data/catalogData';
import { FolderDetailTemplate } from '@/components/templates/FolderDetailTemplate';

interface FolderDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CATALOG_DATA.map((item) => ({
    slug: item.id,
  }));
}

export function generateMetadata({ params }: FolderDetailPageProps) {
  const item = CATALOG_DATA.find((i) => i.id === params.slug);
  if (!item) return { title: 'Folder Tidak Ditemukan' };

  return {
    title: `${item.title} — Portofolio Risa Hanipah`,
    description: item.description,
  };
}

export default function FolderDetailPage({ params }: FolderDetailPageProps) {
  const item = CATALOG_DATA.find((i) => i.id === params.slug);

  if (!item) {
    notFound();
  }

  const relatedItems = CATALOG_DATA.filter((i) => i.id !== item.id);

  return <FolderDetailTemplate item={item} relatedItems={relatedItems} />;
}
