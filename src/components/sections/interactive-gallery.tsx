"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/lib/brand-config";
import { ArrowRight } from "lucide-react";

const ThemeCard = ({ 
  title, 
  image, 
  index 
}: { 
  title: string; 
  image: string; 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5"
    >
      <Image
        src={`https://images.unsplash.com/photo-${index === 0 ? '1533719071182-182ed503083d' : 
               index === 1 ? '1583939003579-730e3918a45a' : 
               index === 2 ? '1511895426328-dc8714191300' : 
               index === 3 ? '1540541338287-41700207dee6' : 
               index === 4 ? '1469854523086-cc02fe5d8800' : 
               index === 5 ? '1544005313-94ddf0286df2' : 
               index === 6 ? '1544005313-94ddf0286df2' : '1504674900247-0877df9cc836'}?auto=format&fit=crop&q=80&w=800`}
        alt={title}
        fill
        className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <div className="overflow-hidden">
          <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-3 block transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
            Exclusive
          </span>
        </div>
        <h3 className="text-white text-3xl font-display font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
          <span>Explore Experiences</span>
          <div className="w-8 h-px bg-primary/40" />
          <ArrowRight size={14} className="text-primary" />
        </div>
      </div>
    </motion.div>
  );
};

const InteractiveGallery = () => {
  return (
    <section id="themes" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
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
                Curated Experiences
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-display"
            >
              Travel Themes Tailored <br className="hidden lg:block" />to Your <span className="italic text-primary/80">Unique Soul.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-sm pb-2"
          >
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Whether you seek high-octane adventure or a quiet spiritual retreat, our themes are designed to resonate with your personal journey.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_CONFIG.travelThemes.map((theme, i) => (
            <ThemeCard 
              key={theme.slug} 
              title={theme.title} 
              image={theme.image} 
              index={i} 
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 p-16 md:p-20 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center backdrop-blur-sm"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 tracking-tight">
            Seeking Something Entirely Bespoke?
          </h3>
          <p className="text-white/40 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed">
            Our private concierge experts specialize in designing completely custom itineraries that reflect your specific tastes, interests, and desires.
          </p>
          <button className="btn btn-primary px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-4 group">
            <span>Design My Journey</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveGallery;
