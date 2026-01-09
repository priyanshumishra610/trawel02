"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BRAND_CONFIG } from '@/lib/brand-config';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;
    const cta = ctaRef.current;
    
    if (nav && logo && links && cta) {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      
      gsap.set([logo, links.children, cta], { opacity: 0, y: -20 });
      
      tl.to(logo, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
        .to(links.children, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .to(cta, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");
    }

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
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-background/95 backdrop-blur-2xl py-3 border-b border-white/5' : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full relative">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link ref={logoRef} href="/" className="relative z-50 flex items-center group">
            <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white group-hover:text-primary transition-colors duration-300">
              Trawel<span className="text-primary">.in</span>
            </span>
          </Link>
        </div>

        {/* Desktop Links (Centered) */}
        <div ref={linksRef} className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] uppercase tracking-[0.45em] text-white/50 hover:text-white transition-all duration-500 font-bold relative group/link whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover/link:w-full opacity-0 group-hover/link:opacity-100" />
            </Link>
          ))}
        </div>

        {/* Right Section: Contact + CTA + Mobile Toggle */}
        <div ref={ctaRef} className="flex items-center gap-6 xl:gap-8">
          <div className="hidden xl:flex flex-col items-end">
            <span className="text-[7px] uppercase tracking-[0.6em] text-white/20 mb-1 font-bold">24/7 Elite Concierge</span>
            <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="flex items-center gap-2 text-[11px] text-white/90 hover:text-primary transition-colors font-bold tracking-widest">
              <Phone size={10} className="text-primary/70" />
              <span>{BRAND_CONFIG.contact.phone}</span>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center">
            <Link href="#contact" className="btn btn-primary text-[9px] uppercase tracking-[0.35em] px-6 py-2.5 font-bold border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-xl shadow-black/20">
              Get Consultation
            </Link>
          </div>

          <button 
            className="lg:hidden relative z-50 p-2 text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


        {/* Mobile Menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-40 flex flex-col pt-32 px-10"
                style={{ contain: "paint", willChange: "opacity" }}
              >
              {/* Decorative light */}
              <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="flex flex-col gap-8 relative z-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className="font-display text-5xl text-white hover:text-primary transition-colors tracking-tighter"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pb-16 flex flex-col gap-8 relative z-10"
              >
                <div className="h-px w-full bg-white/5" />
                
                <div className="flex flex-col gap-4">
                  <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="flex items-center gap-4 text-lg text-white/60 hover:text-primary transition-colors tracking-wide">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <span>{BRAND_CONFIG.contact.phone}</span>
                  </a>
                  <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="flex items-center gap-4 text-lg text-white/60 hover:text-primary transition-colors tracking-wide">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <span>{BRAND_CONFIG.contact.email}</span>
                  </a>
                </div>

                <Link 
                  href="#contact" 
                  className="btn btn-primary text-center py-5 text-xs uppercase tracking-[0.4em] font-bold shadow-2xl shadow-primary/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Your Elite Escape
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
};

export default Navigation;
