'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
      scrolled 
        ? 'glass-strong shadow-soft border-b border-primary-100/30' 
        : 'bg-white/80 backdrop-blur-sm border-b border-primary-100/20'
    }`}>
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity">
          Sisilia Sinaga
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMenu} 
          className="block md:hidden p-2 hover:bg-primary-50 rounded-lg transition-all duration-200 text-gray-700 hover:text-primary-600"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="space-y-3 pb-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block text-lg px-2 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-primary-600 bg-primary-50 font-semibold' 
                    : 'text-gray-700 hover:text-primary-500 hover:bg-primary-50/50'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}