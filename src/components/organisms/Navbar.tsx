'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FolderOpen, User, Home, MessageCircle, Camera } from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Beranda', icon: <Home className="w-4 h-4 text-purple-700" /> },
    { href: '/katalog', label: 'Katalog Portofolio', icon: <FolderOpen className="w-4 h-4 text-blue-700" /> },
    { href: '/about', label: 'Tentang Risa', icon: <User className="w-4 h-4 text-pink-700" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-purple-200 backdrop-blur-xl bg-white/85 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl cheerful-blue-purple-bg flex items-center justify-center text-white font-black shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-slate-900 font-serif">
              RISA <span className="text-purple-700 font-sans text-xs font-black tracking-widest">HANIPAH</span>
            </span>
            <span className="text-[10px] text-purple-800 tracking-widest uppercase -mt-1 font-extrabold">
              Muse & Fashion Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/95 p-1.5 rounded-full border border-purple-200 shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4.5 py-2 text-xs font-extrabold rounded-full transition-all ${
                  isActive
                    ? 'cheerful-blue-purple-bg text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-purple-50'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact/Booking Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/6285174232225?text=Halo%20Risa%20Hanipah,%20saya%20tertarik%20berkolaborasi%20untuk%20sesi%20foto%20/%20MUA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp (+62 851)</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-purple-50"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-200 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-extrabold transition-colors ${
                pathname === link.href ? 'cheerful-blue-purple-bg text-white border border-purple-400' : 'text-slate-700 hover:bg-purple-50'
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
