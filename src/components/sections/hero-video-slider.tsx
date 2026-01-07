"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * HeroVideoSlider component
 * Replicates the complex window effect where images slide out as user scrolls
 * to reveal a central video background.
 */
export default function HeroVideoSlider() {
  const windowRef = useRef<HTMLDivElement>(null);
  const leftSliderRef = useRef<HTMLDivElement>(null);
  const rightSliderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!windowRef.current) return;

      const rect = windowRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on the 200vh height of the 'window' section
      // Progress goes from 0 at top of element to 1 when scrolled 100vh into it
      const start = rect.top;
      const totalDist = windowHeight; // We want to complete the animation over 1 viewport height
      
      let progress = -start / totalDist;
      progress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transformation values based on scroll progress
  const leftTranslate = -(scrollProgress * 100); // Slide left
  const rightTranslate = (scrollProgress * 100); // Slide right
  const videoScale = 0.5 + (0.5 * scrollProgress); // Scale video from 50% to 100%
  const videoOpacity = 0.2 + (0.8 * scrollProgress);

  return (
    <section className="bg-transparent">
      {/* Interactive Hero Window - Desktop Only (> 950px) */}
      <div 
        ref={windowRef} 
        id="window" 
        className="relative hidden h-[200vh] w-screen bg-black min-[950px]:block"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div id="sliders" className="relative h-full w-full">
            
            {/* Left Image Grid */}
            <div 
              ref={leftSliderRef}
              id="left" 
              className="absolute left-0 top-0 z-20 grid h-screen w-[45%] grid-cols-6 grid-rows-8 gap-4 p-4 transition-transform duration-100 ease-out"
              style={{ transform: `translateX(${leftTranslate}%)` }}
            >
              {/* Food Image */}
              <div className="relative col-span-3 col-start-4 row-span-5 overflow-clip rounded-sm">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_1.png" 
                  alt="Food" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              {/* Cliff Image */}
              <div className="relative col-span-3 row-span-5 row-start-3 overflow-clip rounded-sm">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_2.png" 
                  alt="Cliff" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Tower Image */}
              <div className="relative col-span-3 col-start-4 row-span-3 row-start-6 overflow-clip rounded-sm">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_3.png" 
                  alt="Tower" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Image Grid */}
            <div 
              ref={rightSliderRef}
              id="right" 
              className="absolute right-0 top-0 z-20 grid h-screen w-[45%] grid-cols-5 grid-rows-6 gap-4 p-4 transition-transform duration-100 ease-out"
              style={{ transform: `translateX(${rightTranslate}%)` }}
            >
              {/* Person Image */}
              <div className="relative col-span-2 row-span-3 overflow-clip rounded-sm">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_4.png" 
                  alt="Person" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Lake Image */}
              <div className="relative col-span-3 col-start-1 row-span-3 row-start-4 overflow-clip rounded-sm">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_5.png" 
                  alt="Lake" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Sky Image */}
              <div className="relative col-span-2 col-start-3 row-span-2 row-start-2 overflow-clip rounded-sm">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_6.png" 
                  alt="Sky" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Beach Image */}
              <div className="relative col-span-2 col-start-4 row-span-3 row-start-4 overflow-clip rounded-sm">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_7.png" 
                  alt="Beach" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Video Background Container */}
            <div className="sticky top-0 z-0 flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
              <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline 
                className="h-full w-full object-cover transition-all duration-100 ease-out"
                style={{ 
                  transform: `scale(${videoScale})`,
                  opacity: videoOpacity
                }}
              >
                <source src="https://aabee.in/test1.mp4" type="video/video/mp4" />
                <source src="https://aabee.in/test1.mp4" type="video/mp4" />
              </video>
              
              {/* Logo Overlay revealed as video scales up */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="flex flex-col items-center justify-center text-white text-center transition-opacity duration-300"
                  style={{ opacity: scrollProgress > 0.8 ? 1 : 0 }}
                >
                  <h1 className="font-display text-white text-6xl uppercase tracking-tighter mb-4">
                    ELEVATE YOUR EXPECTATIONS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Replacement Hero ( < 950px ) */}
      <div className="relative flex h-[75vh] flex-col items-center justify-center bg-white px-20 text-black min-[950px]:hidden overflow-hidden">
        <div className="absolute left-0 top-0 grid h-full w-full grid-cols-5 grid-rows-6 gap-4 p-4 opacity-30">
          <div className="relative col-span-2 row-span-3 overflow-hidden rounded-sm">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_1.png" 
              alt="Destination" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative col-span-3 col-start-1 row-span-3 row-start-4 overflow-hidden rounded-sm">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_5.png" 
              alt="Lake" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative col-span-2 col-start-4 row-span-3 row-start-4 overflow-hidden rounded-sm">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_4.png" 
              alt="Travel" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="z-10 flex flex-col items-center text-center">
          <h1 className="font-display text-4xl mb-2 text-black leading-tight">Travel With Aabee</h1>
          <p className="font-body text-xl mb-6 text-black/80">Where Luxury meets Opulence</p>
          <a href="/contact" className="w-fit border border-black px-6 py-3 transition duration-300 hover:bg-black hover:text-white uppercase text-sm tracking-widest font-semibold">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}