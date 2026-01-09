"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BRAND_CONFIG } from '@/lib/brand-config';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroVideoWindow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen md:h-screen w-full overflow-hidden bg-black flex flex-col md:block"
    >
        {/* Background Video/Image */}
            <motion.div 
              style={{ scale, y, willChange: "transform, scale" }}
              className="absolute inset-0 z-[1]"
            >
            {/* Dark Overlay Gradient (40-55% for readability) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-[2]" />
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/travel-hero.mp4" type="video/mp4" />
                </video>
          </motion.div>

      {/* Content */}
      <div className="container relative z-20 flex-1 md:h-full flex flex-col justify-center pt-32 pb-16 md:pt-20 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
              Trusted by {BRAND_CONFIG.stats[2].value} Travelers
            </span>
          </div>

            <h1 className="text-white mb-6 md:mb-8 tracking-tight font-bold text-4xl md:text-7xl lg:text-8xl">
              {BRAND_CONFIG.tagline.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-primary italic font-serif" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>

            <p className="text-base md:text-xl text-white/80 mb-10 md:mb-12 max-w-2xl leading-relaxed tracking-wide font-light">
              {BRAND_CONFIG.description}
            </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <button className="btn btn-primary group tracking-[0.25em] text-[10px] py-5 px-10 w-full sm:w-auto min-h-[56px] flex items-center justify-center">
              <span>Get Free Travel Consultation</span>
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="btn btn-secondary flex items-center justify-center gap-3 group tracking-[0.25em] text-[10px] py-5 px-10 w-full sm:w-auto min-h-[56px]">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Play size={14} fill="currentColor" />
              </div>
              <span>Explore Luxury Escapes</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Trust Bar / Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative md:absolute md:bottom-0 md:left-0 w-full z-30 px-6 md:px-0 pb-12 md:pb-0 mt-8 md:mt-0"
        >
          <div className="container px-0 md:px-[inherit]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 py-10 md:py-12 border border-white/10 md:border-0 md:border-t border-white/10 backdrop-blur-3xl bg-white/5 md:bg-black/30 rounded-3xl md:rounded-none md:rounded-t-[3rem] px-8 md:px-12 shadow-2xl">
            {BRAND_CONFIG.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-xl md:text-3xl font-display font-bold text-primary tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-white/40 font-semibold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroVideoWindow;
