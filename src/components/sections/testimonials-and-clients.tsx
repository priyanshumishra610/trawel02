"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background with luxury texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm40 24c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content Side */}
          <div className="flex-1 text-left">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Guest Experiences
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight"
            >
              What Our Discerning <br />
              <span className="text-secondary italic">Travelers Say</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 mb-8"
            >
              <button
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>

          {/* Slider Side */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="glass p-10 md:p-12 rounded-3xl relative h-full flex flex-col justify-center"
                >
                  <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
                  
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic mb-10 relative z-10">
                    "{BRAND_CONFIG.testimonials[activeIndex].quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-secondary" />
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {BRAND_CONFIG.testimonials[activeIndex].author}
                      </h4>
                      <p className="text-secondary text-sm uppercase tracking-widest font-medium">
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
        <div className="mt-32 pt-16 border-t border-white/10">
          <p className="text-center text-white/40 uppercase tracking-[0.3em] text-xs mb-12">
            Trusted by Leaders from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text-based logos for premium feel if images aren't perfect, or just keeping the structure */}
            <span className="text-2xl font-bold text-white/80 tracking-tighter">BECTOR'S</span>
            <span className="text-2xl font-serif text-white/80 italic">Bikaner</span>
            <span className="text-2xl font-black text-white/80">HALDIRAM</span>
            <span className="text-2xl font-display text-white/80">JAQUAR</span>
            <span className="text-2xl font-bold text-white/80 tracking-widest">TRIDENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndClients;
