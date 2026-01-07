"use client";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "The planning was absolutely seamless. Every detail of our Maldives retreat was handled with such care. Truly a premium experience from start to finish.",
    rating: 5,
    tag: "Smooth Planning"
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Singapore",
    text: "Responsive support that actually cares. When our flight was delayed, the team had already rearranged our private transfer before we even landed. Impressive.",
    rating: 5,
    tag: "Expert Support"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    text: "Exceeded all expectations in terms of hotel quality. The boutique properties they recommended were hidden gems we would never have found on our own.",
    rating: 5,
    tag: "Hotel Quality"
  },
  {
    id: 4,
    name: "David Wilson",
    location: "New York, USA",
    text: "Incredible value for money. For the level of luxury provided, the pricing was significantly better than what I found on major booking sites.",
    rating: 5,
    tag: "Great Value"
  }
];

export function GuestReviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".reviews-header", {
        scrollTrigger: {
          trigger: ".reviews-header",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Cards staggered animation
      if (cardsRef.current) {
        gsap.from(".review-card", {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="reviews-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Trusted by Travelers Across the World
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Discover why our guests choose us for their most precious moments. 
            Real stories of discovery, luxury, and seamless exploration.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="review-card group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-secondary text-secondary" />
                  ))}
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wider text-white/40 mb-4 font-medium border border-white/5">
                  {review.tag}
                </span>

                <p className="text-white/80 leading-relaxed mb-8 font-light italic">
                  &quot;{review.text}&quot;
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white group-hover:text-secondary transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest mt-1">
                    {review.location}
                  </p>
                </div>
                <Quote className="text-white/10 group-hover:text-secondary/20 transition-colors" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
