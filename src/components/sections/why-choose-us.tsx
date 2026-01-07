"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '@/lib/brand-config';
import { CheckCircle2, ShieldCheck, Clock, BadgePercent, Globe } from 'lucide-react';

const icons = [Globe, Clock, BadgePercent, ShieldCheck];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container">
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4 block"
          >
            The Trawel.in Difference
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
          >
            Luxury is in the details, and so are we.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            We don't just book trips; we craft experiences. Discover why thousands of travelers trust Trawel.in over big booking engines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_CONFIG.whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table / Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[2rem] bg-gradient-to-br from-primary/20 via-background to-secondary/10 border border-white/10 relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Better Prices Than OTAs. Guaranteed.
              </h3>
              <p className="text-white/70 mb-8">
                Through our exclusive direct partnerships with premium hotels and local operators, we're able to offer rates that you won't find on MakeMyTrip, Agoda, or Booking.com.
              </p>
              <div className="space-y-4">
                {[
                  "No Hidden Booking Fees",
                  "Exclusive Perk Inclusions",
                  "Local Expert Pricing",
                  "Best Price Guarantee"
                ].map((check, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Resort" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-primary/30">
                  <span className="text-primary text-4xl font-display font-bold block mb-1">SAVE UP TO 25%</span>
                  <span className="text-white/60 text-xs uppercase tracking-widest">Compared to standard OTA rates</span>
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
