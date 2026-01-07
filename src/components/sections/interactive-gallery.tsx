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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer"
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
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          Discover
        </span>
        <h3 className="text-white text-2xl font-display font-bold group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>
        <div className="mt-4 flex items-center gap-2 text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span>Explore Theme</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

const InteractiveGallery = () => {
  return (
    <section id="themes" className="section-padding bg-background relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4 block"
            >
              Curated Experiences
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              Travel Themes Tailored to Your Soul.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-sm mb-2"
          >
            Whether you seek high-octane adventure or a quiet spiritual retreat, we have the perfect itinerary waiting for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          className="mt-20 flex flex-col items-center text-center"
        >
          <p className="text-white/60 text-lg mb-8 max-w-xl">
            Can't find what you're looking for? Our experts can design a completely custom theme just for you.
          </p>
          <button className="btn btn-secondary px-10 py-4">
            Request Custom Theme
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveGallery;
