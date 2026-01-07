"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '@/lib/brand-config';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Motion (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-aerial-view-of-a-resort-in-the-maldives-24710-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Travel Experience" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 blur-[120px] rounded-full z-0 animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/10 blur-[120px] rounded-full z-0 animate-pulse" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/20 shadow-2xl z-20 max-w-[240px]"
            >
              <span className="text-5xl font-display font-bold text-white block mb-2 tracking-tighter">10+</span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold leading-relaxed">Years of Curating Extraordinary Journeys</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold">
                Our Heritage
              </span>
            </div>
            <h2 className="text-white mb-10 text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-display">
              Redefining Travel for the <span className="text-primary/80 italic">Modern Explorer.</span>
            </h2>
            <div className="space-y-8 text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12">
              <p>
                  {BRAND_CONFIG.name} was born from a simple realization: luxury travel shouldn&apos;t be gated behind exorbitant commissions and cookie-cutter itineraries.
                </p>
              <p>
                As a tech-driven curated travel brand managed by <span className="text-white/80 font-medium">{BRAND_CONFIG.owner}</span>, we bridge the gap between high-end hospitality and local expertise. We believe that true luxury is personal, handpicked, and perfectly executed.
              </p>
              <p>
                Based in Bangalore, we serve a global community of discerning travelers who seek more than just a destination—they seek stories, comfort, and unmatched value.
              </p>
            </div>
            <button className="btn btn-primary group px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-4">
              <span>Experience Excellence</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
