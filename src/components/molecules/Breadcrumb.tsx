import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-xs text-slate-600 font-bold py-2">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-purple-700 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Beranda</span>
      </Link>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-purple-700 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-950 font-extrabold line-clamp-1">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
