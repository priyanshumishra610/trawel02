"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    id: 1,
    name: "Priyanshu Mishra",
    location: "Raipur, Chhattisgarh",
    text:
      "The level of personalization provided by Trawel.in is unmatched. Our journey through the Swiss Alps was choreographed to perfection, from private chalet dinners to sunrise helicopter tours.",
    rating: 5,
    tag: "Choreographed Excellence",
  },
  {
    id: 2,
    name: "Prem Kumar",
    location: "Chennai, Tamil Nadu",
    text:
      "Navigating remote islands in Indonesia seemed daunting until we met this team. Every logistics hurdle was cleared before we even noticed it. Truly stress-free luxury.",
    rating: 5,
    tag: "Seamless Logistics",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    location: "Chandigarh, Punjab",
    text:
      "What struck me most was the curation. Instead of the typical tourist traps, we were introduced to private estates and local artisans that made our Amalfi coast trip feel deeply personal.",
    rating: 5,
    tag: "Bespoke Curation",
  },
  {
    id: 4,
    name: "Riya Jain",
    location: "Indore, Madhya Pradesh",
    text:
      "The 24/7 concierge was a lifesaver when we decided to extend our stay in Santorini. Within thirty minutes, our villa was booked and our return flights were updated. Remarkable service.",
    rating: 5,
    tag: "Elite Support",
  },
];

export function GuestReviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".reviews-header", {
        scrollTrigger: {
          trigger: ".reviews-header",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
      });

        // Card animations (PER CARD — FIXED)
        gsap.utils.toArray(".review-card").forEach((card: any, i) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 40,
              scale: 0.98,
              visibility: "hidden",
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              visibility: "visible",
              duration: 1.2,
              delay: i * 0.1,
              ease: "expo.out",
              onComplete: () => {
                gsap.set(card, {
                  clearProps: "all",
                  opacity: 1,
                  visibility: "visible",
                  transform: "none",
                });
              },
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-20 md:py-32 bg-background relative border-t border-white/5 overflow-visible"
      style={{ contain: "paint layout" }}
    >
      {/* Ambient premium light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1800px] px-6 md:px-12 mx-auto relative z-10">
        {/* Header */}
        <div className="reviews-header mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
              Client Testimonials
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-2xl leading-[1.1]">
              Stories from Our <br />
              <span className="italic font-serif text-primary">
                Happy Guests
              </span>
            </h2>

            <p className="text-base md:text-lg text-white/40 font-light max-w-md leading-relaxed">
              We take pride in crafting moments that linger in memory. Here’s
              how our travelers describe their Trawel.in experience.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="review-card group bg-white/[0.02] border border-white/[0.05] p-8 xl:p-10 rounded-3xl hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-700 flex flex-col justify-between h-full relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/30 transition-all duration-700" />

              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-primary text-primary opacity-80"
                    />
                  ))}
                </div>

                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-[9px] uppercase tracking-[0.2em] text-primary/70 mb-6 font-bold border border-primary/10">
                  {review.tag}
                </span>

                <p className="text-white/70 leading-relaxed mb-10 font-light text-base italic tracking-wide">
                  “{review.text}”
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-white/[0.03] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white tracking-tight text-lg">
                    {review.name}
                  </h4>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] mt-1.5 font-bold">
                    {review.location}
                  </p>
                </div>

                <Quote
                  className="text-white/[0.03] group-hover:text-primary/10 transition-all duration-700"
                  size={32}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

