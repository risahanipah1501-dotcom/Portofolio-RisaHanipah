import type { Metadata } from 'next';
import './globals.css';
import { MainLayoutTemplate } from '@/components/templates/MainLayoutTemplate';

export const metadata: Metadata = {
  title: 'Portofolio Risa Hanipah — Muse & Fashion Catalog',
  description:
    'Portofolio visual interaktif Risa Hanipah menampilkan 13 folder foto katalog fashion, kolaborasi Muse MUA, dan Self Makeup.',
  keywords: [
    'Risa Hanipah',
    'Portofolio Risa',
    'Model Muse',
    'Foto Katalog',
    'Makeup Artist',
    'Fashion Lookbook',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className="antialiased bg-background text-slate-100">
        <MainLayoutTemplate>{children}</MainLayoutTemplate>
      </body>
    </html>
  );
}
