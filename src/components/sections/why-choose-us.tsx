"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '@/lib/brand-config';
import { CheckCircle2, ShieldCheck, Clock, BadgePercent, Globe } from 'lucide-react';

const icons = [Globe, Clock, BadgePercent, ShieldCheck];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="pb-24 md:pb-32 bg-background relative overflow-hidden pt-16 md:pt-24">
      {/* Background Motion Video (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-clouds-moving-slowly-under-the-sun-26462-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary/40" />
            <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold">
              The Trawel.in Difference
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white mb-8 tracking-tight font-display text-4xl md:text-5xl lg:text-6xl"
          >
            Luxury is in the details, <br className="hidden md:block" />and so are we.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              We don&apos;t just book trips; we craft experiences. Discover why thousands of travelers trust Trawel.in over big booking engines.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {BRAND_CONFIG.whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-700 backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-[1.25rem] bg-white/[0.03] flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 border border-white/5">
                  <Icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table / Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-1 md:p-1.5 rounded-[3.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 overflow-hidden"
        >
          <div className="bg-background/40 backdrop-blur-2xl rounded-[3.4rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Direct Partnerships</span>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                  Better Prices Than OTAs. <br />Guaranteed.
                </h3>
              <p className="text-white/50 text-lg mb-10 font-light leading-relaxed">
                    Through our exclusive direct partnerships with premium hotels and local operators, we&apos;re able to offer rates that you won&apos;t find on MakeMyTrip, Agoda, or Booking.com.
                  </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "No Hidden Booking Fees",
                    "Exclusive Perk Inclusions",
                    "Local Expert Pricing",
                    "Best Price Guarantee"
                  ].map((check, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/70">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium tracking-wide">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Resort" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 flex items-center justify-center">
                  <div className="text-center p-10 bg-background/60 backdrop-blur-2xl rounded-3xl border border-white/10 transform transition-transform duration-700 group-hover:scale-105">
                    <span className="text-primary text-5xl font-display font-bold block mb-2 tracking-tighter">SAVE UP TO 25%</span>
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Exclusive Premium Inventory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
