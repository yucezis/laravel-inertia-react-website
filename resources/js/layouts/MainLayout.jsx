import React from 'react';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';

const menuItems = [
  { name: 'HOME', href: '/' },
  { name: 'PORTFOLIO CATEGORIES', href: '/portfolioCategories' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'BLOG', href: '/blog' },
  { name: 'SHOP', href: '/shop' },
];

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 relative z-50 bg-white shadow">
        <div className="text-lg font-serif tracking-widest">GINEVRA</div>
        <div className="flex gap-8 font-medium text-sm relative">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              <Link
                href={item.href}
                className={`relative hover:text-yellow-500 transition ${
                  item.name === 'HOME' ? 'text-black' : 'text-gray-500'
                }`}
              >
                {item.name}
                {item.name === 'HOME' && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-500"></span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </nav>

      <main className="p-10">{children}</main>
      <Footer />
    </div>
  );
}
