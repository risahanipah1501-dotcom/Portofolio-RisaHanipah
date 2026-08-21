import React from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { LightboxModal } from '@/components/organisms/LightboxModal';
import { FloatingClouds } from '@/components/atoms/FloatingClouds';
import { ClickAnimationListener } from '@/components/atoms/ClickAnimationListener';

interface MainLayoutTemplateProps {
  children: React.ReactNode;
}

export const MainLayoutTemplate: React.FC<MainLayoutTemplateProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-slate-900 selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Global Animated Moving Clouds Layer Across Full Page */}
      <FloatingClouds />

      {/* Global Action Event Listener for Click Animation */}
      <ClickAnimationListener />

      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <LightboxModal />
      <Footer />
    </div>
  );
};
