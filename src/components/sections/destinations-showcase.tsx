"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND_CONFIG } from "@/lib/brand-config";
import { DestinationHoverCard } from "@/components/destination-hover-card";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function DestinationsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    const ctx = gsap.context(() => {
      const chars = heading.querySelectorAll(".char");
      
      gsap.set(chars, { opacity: 0, y: 50 });
      
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "expo.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

    return (
      <section ref={sectionRef} id="destinations" className="py-20 md:py-32 bg-background relative overflow-hidden" style={{ contain: "paint" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-[1px] w-12 bg-primary/40" />
                <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold">
                  Curated Destinations
                </span>
              </motion.div>
              <h2 
                ref={headingRef}
                className="text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-display"
              >
                {splitText("Where Will Your")}
                <br className="hidden md:block" />
                <span className="text-primary/80 italic">
                  {splitText("Journey Begin?")}
                </span>
              </h2>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-sm pb-2"
            >
              <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
                Hover to preview the cinematic beauty of each destination. Every location is hand-selected for its extraordinary character.
              </p>
            </motion.div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_CONFIG.destinations.map((destination, i) => (
              <DestinationHoverCard
                key={destination.title}
                title={destination.title}
                description={destination.description}
                image={destination.image}
                index={i}
              />
            ))}
          </div>
  
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <button className="btn btn-secondary px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-4 group border border-white/10 hover:border-primary/50 transition-all duration-500">
              <span>View All Destinations</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
            </button>
          </motion.div>
        </div>
      </section>
    );
}
