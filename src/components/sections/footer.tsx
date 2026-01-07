"use client";

import React from 'react';
import Link from 'next/link';
import { BRAND_CONFIG } from '@/lib/brand-config';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-background pt-24 pb-12 overflow-hidden border-t">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-display text-3xl font-bold tracking-tight text-white">
                TRAWEL<span className="text-primary">.</span>IN
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 -mt-1">
                by InstaHelp
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              {BRAND_CONFIG.description}
            </p>
            <div className="flex gap-4">
              <a href={BRAND_CONFIG.socials.instagram} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href={BRAND_CONFIG.socials.facebook} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href={BRAND_CONFIG.socials.linkedin} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-4">
              {["Destinations", "Travel Themes", "Luxury Escapes", "Honeymoon Specials", "Family Packages"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-primary text-sm transition-colors flex items-center group">
                    <span>{item}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-4">
              {["Contact Us", "Why Choose Us", "About Trawel", "Terms & Conditions", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-primary text-sm transition-colors flex items-center group">
                    <span>{item}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>{BRAND_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="hover:text-primary transition-colors">
                  {BRAND_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="hover:text-primary transition-colors">
                  {BRAND_CONFIG.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-xs text-white/40 leading-relaxed">
                Experience luxury like never before. Handpicked destinations at prices that defy the industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved. Managed by {BRAND_CONFIG.owner}.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
