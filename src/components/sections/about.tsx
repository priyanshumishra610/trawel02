"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONFIG } from '@/lib/brand-config';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Travel Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full z-0" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-[200px]"
            >
              <span className="text-4xl font-display font-bold text-background block mb-1">10+</span>
              <span className="text-background/60 text-xs uppercase tracking-widest font-bold">Years of Excellence in Luxury Travel</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Story</span>
            <h2 className="text-white mb-8">
              Redefining Luxury Travel for the Modern Explorer.
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed mb-10">
              <p>
                {BRAND_CONFIG.name} was born from a simple realization: luxury travel shouldn't be gated behind exorbitant OTA commissions and cookie-cutter itineraries.
              </p>
              <p>
                As a tech-driven curated travel brand managed by {BRAND_CONFIG.owner}, we bridge the gap between high-end hospitality and local expertise. We believe that true luxury is personal, handpicked, and perfectly executed.
              </p>
              <p>
                Based in Bangalore, we serve a global community of discerning travelers who seek more than just a destination—they seek stories, comfort, and unmatched value.
              </p>
            </div>
            <button className="btn btn-primary group">
              <span>Learn More About Us</span>
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
