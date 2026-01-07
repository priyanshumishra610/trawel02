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
        isScrolled ? 'bg-background/90 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
          <div className="container flex items-center justify-between h-full">
            {/* Logo Column */}
            <div className="flex-1 flex items-center justify-start">
              <Link ref={logoRef} href="/" className="relative z-50 flex flex-col group">
                <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                  TRAWEL<span className="text-primary group-hover:text-white">.</span>IN
                  </span>
                </Link>
            </div>

            {/* Desktop Links Column (Centered) */}
            <div ref={linksRef} className="hidden lg:flex items-center justify-center gap-14 xl:gap-20">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all duration-300 font-bold relative after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Column */}
            <div ref={ctaRef} className="flex-1 flex items-center justify-end gap-12">
              <div className="hidden xl:flex flex-col items-end">
                <span className="text-[8px] uppercase tracking-[0.5em] text-white/30 mb-0.5">Global Concierge</span>
                <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="flex items-center gap-2 text-[13px] text-white hover:text-primary transition-colors font-semibold">
                  <Phone size={12} className="text-primary" />
                  <span className="tracking-widest">{BRAND_CONFIG.contact.phone}</span>
                </a>
              </div>
              
              <div className="hidden lg:flex items-center">
                <Link href="#contact" className="btn btn-primary text-[9px] uppercase tracking-[0.3em] px-10 py-4 font-bold border-white/10 hover:border-primary/50 transition-all duration-500">
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
