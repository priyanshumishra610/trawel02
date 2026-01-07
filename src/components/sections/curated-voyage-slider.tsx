import React from 'react';
import Image from 'next/image';

/**
 * CuratedVoyageSlider component
 * 
 * Clones the "Embark on a Curated Journey" section with pixel-perfect accuracy.
 * Features:
 * - Serif headline "Embark on a Curated Journey of Discovery"
 * - Centered horizontal image slider with navigation arrows
 * - Descriptive overlapping paragraph box with a "Journeys" button
 * - Clean white background with subtle texture (as seen in screenshots)
 */
const CuratedVoyageSlider = () => {
  // Using the provided asset for the slider image
  const sliderImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_1.png";

  return (
    <section className="relative flex flex-col items-center justify-center bg-white py-16 px-4 md:py-20 md:px-20 overflow-hidden">
      {/* Background Texture Placeholder - replicating the subtle wavy lines from the screenshot */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.125c-.566-.209-1.123-.423-1.673-.644l-2.738-1.096C68.65 13.957 61.82 12 50 12c-11.82 0-18.65 1.957-29.098 5.26l-2.738 1.096c-.55.221-1.107.435-1.673.644h6.125c.881-.332 1.795-.689 2.75-1.072l.144-.058c.245-.094.49-.188.736-.282.25-.096.502-.192.756-.288l.182-.069z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 80px'
        }}
      ></div>

      {/* Section Headline */}
      <div className="relative z-10 text-center mb-8 md:mb-12">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
          Embark on a <br className="md:hidden" />
          <span className="font-bold">Curated Journey</span> <br />
          of Discovery
        </h2>
      </div>

      {/* Main Slider Container */}
      <div className="relative z-10 w-full max-w-[900px]">
        <div className="relative aspect-[16/9] w-full overflow-hidden shadow-sm">
          {/* Main Image */}
          <Image
            src={sliderImage}
            alt="Curated Journey Discovery"
            fill
            className="object-cover"
            priority
          />

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 pointer-events-none">
            <button 
              id="prevButton"
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-black transition-transform hover:scale-110 active:scale-95 shadow-sm"
              aria-label="Previous slide"
            >
              <span className="text-xl">←</span>
            </button>
            <button 
              id="nextButton"
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-black transition-transform hover:scale-110 active:scale-95 shadow-sm"
              aria-label="Next slide"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Overlapping Content Box */}
        <div className="relative mx-auto mt-[-40px] md:mt-[-60px] w-[85%] md:w-[70%] lg:w-[60%] bg-white p-6 md:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center text-center gap-6">
          <p className="font-body text-sm md:text-base text-zinc-800 leading-relaxed font-light">
            Unveil a world of enchantment as we craft a personalized voyage that transcends expectations. With meticulous attention to detail&lsquo; we invite you to explore new horizons like never before.
          </p>
          
          <a href="/journeys" className="inline-block">
            <button className="border border-black px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
              Journeys
            </button>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .font-display {
          font-family: var(--font-display, "Playfair Display", serif);
        }
        .font-body {
          font-family: var(--font-body, "Inter", sans-serif);
        }
      `}</style>
    </section>
  );
};

export default CuratedVoyageSlider;