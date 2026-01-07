"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Highly recommended....best location of hotels and excellent travel deals. Full assistance during travel to solve any issues.",
    author: "richa luthra",
  },
  {
    quote: "Great service! The team is structured clearly. Communication system is clear and works from get go. From CEO to client managers, everyone takes your call. Stuff gets done.",
    author: "Raghav Khosla",
  },
  {
    quote: "Very professional and responsive. Good rates and quality options.",
    author: "Raghav Khosla",
  },
];

const clientLogos = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_17.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_18.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_19.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_20.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_21.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/jaquar-4.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_22.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_23.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/Trident-5.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_24.png",
];

const partnerLogos = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_25.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_26.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_27.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_28.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_29.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_30.png",
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto px-8 py-20">
      <div className="flex-1 text-white z-10">
        <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
          <span className="font-bold">Discover the World</span><br />
          of Luxury Travel <br />
          through Our Clients&apos; Eyes
        </h2>
        <p className="text-gray-300 max-w-md mb-8">
          Here&apos;s what some of our valued clients have to say about their extraordinary journeys with us.
        </p>
        <div className="flex gap-1">
          <button 
            onClick={prev}
            className="flex items-center justify-center w-12 h-10 bg-black/80 hover:bg-white hover:text-black transition-all rounded-l-full border border-white/20"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="flex items-center justify-center w-12 h-10 bg-black/80 hover:bg-white hover:text-black transition-all rounded-r-full border border-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md perspective-1000">
        <div className="relative h-[250px] transition-all duration-500 ease-in-out">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-[#1a1b1b] p-10 flex flex-col justify-between shadow-2xl transition-all duration-500 border border-white/5 ${
                idx === current 
                  ? 'opacity-100 scale-100 translate-x-0 z-20' 
                  : 'opacity-0 scale-95 translate-x-10 z-10 pointer-events-none'
              }`}
            >
              <p className="text-lg text-gray-200 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="text-right">
                <span className="text-white font-medium text-lg">- {t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LogoScroller = ({ logos, reverse = false }: { logos: string[], reverse?: boolean }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div 
        ref={scrollerRef}
        className={`flex whitespace-nowrap gap-16 items-center px-8 transition-transform ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <Image 
              src={logo} 
              alt="Brand Logo" 
              width={160} 
              height={60} 
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

const TestimonialsAndBrands = () => {
  return (
    <div className="relative overflow-hidden bg-black w-full">
      {/* Sunset Background Layer */}
      <div className="relative w-full min-h-screen">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_17.png" // Fallback reference from content/screenshot match for the sunset footer image
          alt="Sunset Background"
          fill
          className="object-cover pointer-events-none -z-20 opacity-90"
          priority
        />
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent -z-10" />

        <section id="testimonials" className="relative z-10 pt-20">
          <TestimonialCarousel />
        </section>

        <section className="relative z-10 pb-20">
          <div className="text-center mb-8">
            <h3 className="font-display text-4xl font-bold text-white mb-2">Our Clients</h3>
            <div className="w-16 h-0.5 bg-white/20 mx-auto" />
          </div>
          <LogoScroller logos={clientLogos} />

          <div className="text-center mt-12 mb-8">
            <h3 className="font-display text-4xl font-bold text-white mb-2">Our Partners</h3>
            <div className="w-16 h-0.5 bg-white/20 mx-auto" />
          </div>
          <LogoScroller logos={partnerLogos} reverse />
        </section>
      </div>
    </div>
  );
};

export default TestimonialsAndBrands;