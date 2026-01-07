"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
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
    const timer = setInterval(slideNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const currentDestination = BRAND_CONFIG.destinations[currentIndex];

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Exclusive Escapes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Curated Journeys of Discovery
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-px w-24 bg-primary mx-auto"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.7 }
                }}
                className="absolute inset-0"
              >
                <Image
                  src={currentDestination.image}
                  alt={currentDestination.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 flex gap-4 z-20">
              <button
                onClick={slidePrev}
                className="h-12 w-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={slideNext}
                className="h-12 w-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Floating Info Box */}
          <motion.div
            key={currentIndex + "-info"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-12 left-4 md:left-12 max-w-md w-[calc(100%-2rem)] md:w-auto glass p-8 rounded-2xl shadow-luxury z-30"
          >
            <div className="flex items-center gap-2 text-primary mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                Top Destination
              </span>
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              {currentDestination.title}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
              {currentDestination.description}
            </p>
            <button className="btn btn-primary w-full md:w-auto">
              Explore Journey
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default CuratedVoyageSlider;
