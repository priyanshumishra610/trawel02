"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/lib/brand-config";
import { ArrowRight } from "lucide-react";

type ThemeCardProps = {
  title: string;
  image?: string;
  index: number;
};

const UNSPLASH_FALLBACKS = [
  // Adventure – mountains / hiking
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600",

  // Honeymoon
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1600",
  // Family
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1600",
  // Luxury
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1600",
  // Budget
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600",
  // Spiritual
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1600",
  // Wildlife
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1600",
  // Food & Culture
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600",
];

  const ThemeCard = ({ title, image, index }: ThemeCardProps) => {
    let imageUrl =
      image && image.trim().length > 0
        ? image
        : UNSPLASH_FALLBACKS[index % UNSPLASH_FALLBACKS.length];

    // Surgical Override for Adventure
    if (title.toLowerCase() === "adventure") {
      imageUrl = "/images/adventure.jpg";
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.9, ease: "easeOut" }}
        className="group relative h-[420px] w-full rounded-[2.5rem] cursor-pointer border border-white/5 overflow-hidden bg-muted"
      >
      {/* IMAGE — FORCE RENDER */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 z-0"
        loading={index === 0 ? "eager" : "lazy"}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A44] via-[#0A1A44]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700 z-10" />

      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
        <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-3 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
          Exclusive
        </span>

        <h3 className="text-white text-3xl font-display font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>

        <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
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
    <section
      id="themes"
      className="section-padding bg-background relative overflow-visible"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold">
                Curated Experiences
              </span>
            </div>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-display">
              Travel Themes Tailored <br className="hidden lg:block" />
              to Your{" "}
              <span className="italic text-primary/80">Unique Soul.</span>
            </h2>
          </div>

          <p className="max-w-sm text-white/40 text-lg font-light leading-relaxed">
            Whether you seek high-octane adventure or a quiet spiritual retreat,
            our themes resonate with your personal journey.
          </p>
        </div>

        {/* GRID */}
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

        {/* CTA */}
        <div className="mt-24 p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            Seeking Something Entirely Bespoke?
          </h3>
          <p className="text-white/40 text-lg font-light mb-12 max-w-2xl mx-auto">
            Our private concierge experts design completely custom itineraries
            reflecting your tastes, interests, and desires.
          </p>
          <button className="btn btn-primary px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold inline-flex items-center gap-4 group">
            <span>Design My Journey</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform duration-500"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGallery;

