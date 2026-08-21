'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, FolderHeart, Camera, Flower2, MessageCircle, ArrowRight } from 'lucide-react';
import { Heading } from '@/components/atoms/Heading';
import { Button } from '@/components/atoms/Button';
import { StatsCard } from '@/components/molecules/StatsCard';
import { FloatingClouds } from '@/components/atoms/FloatingClouds';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 lg:py-20">
      {/* Animated Floating Clouds Elements */}
      <FloatingClouds />

      {/* Bright Ambient Purple-Blue-Pink Gradient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-300/40 via-blue-300/40 to-pink-300/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200/50 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Clean Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full glass-panel border border-purple-300 text-xs font-extrabold text-purple-900 mb-6 shadow-sm bg-white/90"
        >
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>Portofolio Resmi Risa Hanipah — High-Fashion Muse & Beauty Catalog</span>
        </motion.div>

        {/* Clean & Sharp Main Title with Bright Purple-Blue-Pink Text Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-4xl"
        >
          <Heading as="h1" goldGradient className="font-extrabold leading-tight text-3xl sm:text-5xl lg:text-6xl drop-shadow-sm">
            Elegansi & Seni Riasan Dalam Satu Portofolio.
          </Heading>

          <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Menampilkan 13 koleksi folder eksklusif yang mencakup <span className="text-blue-900 font-bold bg-blue-100 px-2.5 py-0.5 rounded-lg">Foto Katalog Fashion</span>, <span className="text-purple-900 font-bold bg-purple-100 px-2.5 py-0.5 rounded-lg">Muse MUA Collaboration</span>, dan <span className="text-emerald-900 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-lg">Self Makeup</span>.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/katalog">
            <Button variant="primary" size="lg" icon={<FolderHeart className="w-5 h-5" />}>
              Jelajahi Semua Folder
            </Button>
          </Link>

          <a
            href="https://wa.me/6285174232225?text=Halo%20Risa%20Hanipah,%20saya%20tertarik%20berkolaborasi%20untuk%20sesi%20foto%20/%20MUA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp (+62 851-7423-2225)</span>
          </a>

          <Link href="/about">
            <Button variant="glass" size="lg" icon={<ArrowRight className="w-4 h-4 text-purple-700" />}>
              Profil & Bio Risa
            </Button>
          </Link>
        </motion.div>

        {/* Metric Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
        >
          <StatsCard
            icon={<FolderHeart className="w-5 h-5 text-purple-700" />}
            value="13"
            label="Folder Portofolio"
          />
          <StatsCard
            icon={<Camera className="w-5 h-5 text-blue-700" />}
            value="68+ Foto & 7 Video"
            label="Koleksi Media High-Res"
          />
          <StatsCard
            icon={<Flower2 className="w-5 h-5 text-pink-700" />}
            value="10+"
            label="MUA Collaborations"
          />
        </motion.div>
      </div>
    </section>
  );
};
