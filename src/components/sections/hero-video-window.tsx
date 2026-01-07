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
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Video/Image */}
      <motion.div 
        style={{ scale, y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://aabee.in/test1.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-white/80 text-xs uppercase tracking-[0.2em] font-medium">
              Trusted by {BRAND_CONFIG.stats[2].value} Travelers
            </span>
          </div>

          <h1 className="text-white mb-8">
            {BRAND_CONFIG.tagline.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-primary italic" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed">
            {BRAND_CONFIG.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="btn btn-primary group">
              <span>Get Free Travel Consultation</span>
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="btn btn-secondary flex items-center justify-center gap-3 group">
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
        className="absolute bottom-0 left-0 w-full z-30"
      >
        <div className="container pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10 backdrop-blur-sm bg-black/20 rounded-t-3xl px-8">
            {BRAND_CONFIG.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">
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
