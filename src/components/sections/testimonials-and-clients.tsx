"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/brand-config";

const TestimonialsAndClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % BRAND_CONFIG.testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + BRAND_CONFIG.testimonials.length) % BRAND_CONFIG.testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Background Motion (Subtle) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hand-pouring-sparkling-wine-into-a-glass-23024-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          {/* Content Side */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold">
                Guest Chronicles
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-10 leading-tight tracking-tight"
            >
              The Voices of Our <br />
              <span className="text-primary/80 italic">Global Community.</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 mb-8"
            >
              <button
                onClick={prevTestimonial}
                className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-700 group/btn"
              >
                <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextTestimonial}
                className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-700 group/btn"
              >
                <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Slider Side */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/[0.02] border border-white/5 p-12 md:p-16 rounded-[3rem] relative h-full flex flex-col justify-center backdrop-blur-3xl"
                >
                  <Quote className="absolute top-12 right-12 w-16 h-16 text-primary/10" />
                  
                  <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light italic mb-12 relative z-10">
                      &ldquo;{BRAND_CONFIG.testimonials[activeIndex].quote}&rdquo;
                    </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="h-px w-12 bg-primary/40" />
                    <div>
                      <h4 className="text-white font-bold text-xl tracking-tight">
                        {BRAND_CONFIG.testimonials[activeIndex].author}
                      </h4>
                      <p className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mt-1">
                        {BRAND_CONFIG.testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Brand Trust Section */}
        <div className="mt-40 pt-20 border-t border-white/5">
          <p className="text-center text-white/30 uppercase tracking-[0.5em] text-[9px] font-bold mb-16">
            Trusted by Visionaries From
          </p>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter hover:text-primary transition-colors cursor-default">BECTOR&apos;S</span>
            <span className="text-2xl md:text-3xl font-serif text-white italic hover:text-primary transition-colors cursor-default">Bikaner</span>
            <span className="text-2xl md:text-3xl font-black text-white hover:text-primary transition-colors cursor-default">HALDIRAM</span>
            <span className="text-2xl md:text-3xl font-display text-white hover:text-primary transition-colors cursor-default">JAQUAR</span>
            <span className="text-2xl md:text-3xl font-bold text-white tracking-[0.3em] hover:text-primary transition-colors cursor-default">TRIDENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndClients;
