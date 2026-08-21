import React from 'react';
import Link from 'next/link';
import { Sparkles, Camera, Heart, CheckCircle2, ArrowRight, FolderHeart, MessageCircle } from 'lucide-react';
import { Heading } from '@/components/atoms/Heading';
import { Button } from '@/components/atoms/Button';
import { CATALOG_DATA } from '@/data/catalogData';

export const metadata = {
  title: 'Tentang Risa Hanipah — Fashion Muse & Beauty Model',
  description: 'Profil dan profil profesional Risa sebagai muse fashion & beauty model.',
};

export default function AboutPage() {
  const featuredCover = CATALOG_DATA[0]?.coverImage || '/Katalog/FotoKatalog_Kairo/WhatsApp Image 2026-08-19 at 11.42.39.jpeg';

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-xs font-extrabold text-purple-900 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600 animate-spin-slow" />
            <span>Beauty & Fashion Muse Profile</span>
          </div>

          <Heading as="h1" goldGradient>
            Risa Hanipah
          </Heading>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Pengalaman dalam dunia <span className="text-purple-900 font-bold bg-purple-100 px-2.5 py-0.5 rounded-lg">Fashion Catalog Shoot</span> dan <span className="text-blue-900 font-bold bg-blue-100 px-2.5 py-0.5 rounded-lg">Beauty Makeup Muse</span>. Berpengalaman berkolaborasi dengan berbagai Makeup Artist (MUA) ternama serta brand busana Muslimah & modern.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl glass-panel border border-purple-200 shadow-sm bg-white/90">
              <div className="text-2xl font-black gold-gradient-text font-mono">13</div>
              <div className="text-xs text-slate-700 font-bold">Total Project Folder</div>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-purple-200 shadow-sm bg-white/90">
              <div className="text-xl sm:text-2xl font-black gold-gradient-text font-mono">71 Foto & 8 Video</div>
              <div className="text-xs text-slate-700 font-bold">Koleksi Media High-Res</div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/katalog">
              <Button variant="primary" size="md" icon={<FolderHeart className="w-4 h-4" />}>
                Lihat Katalog Foto
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Avatar Box */}
        <div className="md:col-span-5 relative">
          <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden glass-panel border-2 border-purple-300 shadow-xl bg-white">
            <img
              src={featuredCover}
              alt="Profil Risa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/40 backdrop-blur-md bg-white/85">
              <div className="text-sm font-extrabold text-slate-900 font-serif">Risa Hanipah</div>
              <div className="text-xs text-purple-700 font-extrabold">Fashion Model & Makeup Muse</div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialization Cards */}
      <div className="space-y-6 pt-8 border-t border-purple-200">
        <Heading as="h2" goldGradient className="text-center">
          Keahlian & Bidang Sesi Foto
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl glass-panel border border-blue-200 space-y-3 shadow-md bg-white/90">
            <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold border border-blue-200">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">Foto Katalog Fashion</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Pemotretan busana katalog brand, hijab modern, outfit daily & formal look dengan pose profesional.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2 font-bold">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Kairo Fashion Lookbook</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>RNW Hijab Modest Collection</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-purple-200 space-y-3 shadow-md bg-white/90">
            <div className="w-11 h-11 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold border border-purple-200">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">Muse MUA Collaboration</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Model muse untuk karya riasan kecantikan Makeup Artist (Soft Glam, Bridal Glam, Editorial, & Traditional).
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2 font-bold">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>10+ MUA Collaborators</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Flawless & High Glam Beauty Shoot</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-pink-200 space-y-3 shadow-md bg-white/90">
            <div className="w-11 h-11 rounded-2xl bg-pink-100 text-pink-800 flex items-center justify-center font-bold border border-pink-200">
              <Heart className="w-6 h-6 fill-pink-600" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">Self Makeup Artistry</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Eksperimen seni riasan wajah mandiri untuk gaya personal, daily glow, dan tren kecantikan terkini.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2 font-bold">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" />
                <span>Personal Makeup Style</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" />
                <span>Fresh Glow & Modern Touch</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-300 text-center space-y-4 relative overflow-hidden shadow-xl bg-white/90">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/40 rounded-full blur-[90px] pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-extrabold gold-gradient-text">Tertarik Berkolaborasi Sesi Foto & MUA?</h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
          Lihat seluruh rincian folder portofolio atau hubungi langsung via WhatsApp untuk penjadwalan photoshoot catalog dan muse MUA.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/6285174232225?text=Halo%20Risa%20Hanipah,%20saya%20tertarik%20berkolaborasi%20untuk%20sesi%20foto%20/%20MUA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp</span>
          </a>

          <Link href="/katalog">
            <Button variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Buka Katalog Portofolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
