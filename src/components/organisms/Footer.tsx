import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, MessageCircle, Camera } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-purple-200 bg-white/85 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl cheerful-blue-purple-bg flex items-center justify-center text-white font-black text-sm shadow-sm">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-lg font-serif gold-gradient-text">
                RISA <span className="text-purple-700 font-sans text-xs font-black">HANIPAH</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed font-normal">
              Portofolio resmi Risa sebagai model muse & fashion catalog. Menghadirkan eksplorasi riasan kecantikan dan busana terbaik bersama MUA ternama.
            </p>
            <div className="pt-1 flex items-center gap-3 flex-wrap">
              <a
                href="https://wa.me/6285174232225?text=Halo%20Risa%20Hanipah,%20saya%20tertarik%20berkolaborasi%20untuk%20sesi%20foto%20/%20MUA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold px-4 py-2 rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-purple-900 font-bold px-3 py-1 rounded-full bg-purple-100 border border-purple-200">
                <Sparkles className="w-3 h-3 text-purple-600" />
                13 Folder Katalog • 68 HD Photos
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 font-mono">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-purple-700 transition-colors font-bold">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-purple-700 transition-colors font-bold">
                  Katalog Lengkap
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-700 transition-colors font-bold">
                  Profil Risa
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 font-mono">
              Kategori Portofolio
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li className="flex items-center justify-between">
                <span>Foto Katalog</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-100 text-blue-900 border border-blue-200">2 Folder</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Muse MUA</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-purple-100 text-purple-900 border border-purple-200">10 Folder</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Self Makeup</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">1 Folder</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Portofolio Risa Hanipah. All rights reserved.</p>
          <div className="flex items-center gap-1 font-bold">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-600" />
            <span>Next.js & Bright Cheerful Theme</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
