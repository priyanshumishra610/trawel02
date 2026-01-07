"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BRAND_CONFIG } from '@/lib/brand-config';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "Themes", href: "#themes" },
    { name: "Why Us", href: "#why-us" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg py-4 border-b' : 'bg-transparent py-6'
      }`}
    >
        <div className="container flex items-center h-full">
          {/* Logo Column */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="relative z-50 flex flex-col group">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                TRAWEL<span className="text-primary group-hover:text-white">.</span>IN
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 -mt-1 font-medium">
                by InstaHelp
              </span>
            </Link>
          </div>

          {/* Desktop Links Column (Centered) */}
          <div className="hidden lg:flex items-center justify-center gap-12 flex-initial">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-primary transition-all duration-300 font-semibold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Column */}
          <div className="flex-1 flex items-center justify-end gap-10">
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-[9px] uppercase tracking-widest text-white/30 mb-0.5">Expert Concierge</span>
              <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors font-medium">
                <Phone size={14} className="text-primary" />
                <span>{BRAND_CONFIG.contact.phone}</span>
              </a>
            </div>
            
            <div className="hidden lg:flex items-center h-full">
              <Link href="#contact" className="btn btn-primary text-[11px] uppercase tracking-widest px-8 py-3 h-fit flex items-center justify-center">
                Get Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden relative z-50 p-2 text-white hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-40 flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="font-display text-4xl text-white hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pb-12 flex flex-col gap-6">
              <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="flex items-center gap-4 text-xl text-white/80">
                <Phone className="text-primary" />
                <span>{BRAND_CONFIG.contact.phone}</span>
              </a>
              <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="flex items-center gap-4 text-xl text-white/80">
                <Mail className="text-primary" />
                <span>{BRAND_CONFIG.contact.email}</span>
              </a>
              <Link 
                href="#contact" 
                className="btn btn-primary text-center py-4 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Your Escape
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
