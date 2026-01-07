"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react";
import { BRAND_CONFIG } from "@/lib/brand-config";

const CuratedVoyageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % BRAND_CONFIG.destinations.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + BRAND_CONFIG.destinations.length) % BRAND_CONFIG.destinations.length);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.2,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
  };

  const currentDestination = BRAND_CONFIG.destinations[currentIndex];

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold">
                Global Destinations
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-display"
            >
              Extraordinary Places, <br className="hidden lg:block" />Curated for <span className="italic text-primary/80">Discerning Souls.</span>
            </motion.h2>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/8] rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5 group">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 30 },
                  opacity: { duration: 0.8 },
                  scale: { duration: 1.2 }
                }}
                className="absolute inset-0"
              >
                <Image
                  src={currentDestination.image}
                  alt={currentDestination.title}
                  fill
                  className="object-cover transition-transform duration-[4000ms] ease-out scale-105 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-1000" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 right-12 flex gap-6 z-20">
              <button
                onClick={slidePrev}
                className="h-16 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-700 group/btn"
              >
                <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={slideNext}
                className="h-16 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-700 group/btn"
              >
                <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Floating Info Box */}
          <motion.div
            key={currentIndex + "-info"}
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute -bottom-12 left-6 md:left-20 max-w-lg w-[calc(100%-3rem)] md:w-auto bg-white/5 backdrop-blur-3xl p-12 md:p-16 rounded-[2.5rem] border border-white/10 shadow-luxury z-30"
          >
            <div className="flex items-center gap-4 text-primary mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Featured Boutique Property
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              {currentDestination.title}
            </h3>
            <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
              {currentDestination.description}
            </p>
            <button className="btn btn-primary px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-4 group">
              <span>View Full Itinerary</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none animate-pulse" />
    </section>
  );
};

export default CuratedVoyageSlider;
