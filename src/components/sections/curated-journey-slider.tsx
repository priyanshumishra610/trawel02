import React, { useState } from 'react';
import Image from 'next/image';

const CuratedJourneySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Note: Based on the assets provided and screenshots, we use the main mosque reflection image.
  // In a real implementation with more assets, this would be an array of image URLs.
  const slides = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_16.png",
      alt: "Mosque reflection journey"
    },
    // Placeholders for other slides if they existed in the list
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_16.png",
      alt: "Luxury landscape"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_16.png",
      alt: "Exotic destination"
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-white py-16 lg:py-24 overflow-hidden" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'%3E%3Cpath d=\'M0 200c50-20 150-20 200 0s150 20 200 0M0 100c50-20 150-20 200 0s150 20 200 0M0 300c50-20 150-20 200 0s150 20 200 0\' fill=\'none\' stroke=\'%23f0f0f0\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '600px' }}>
      
      {/* Heading Container */}
      <div className="mb-12 px-6 text-center max-w-4xl">
        <h2 className="text-[#0a0a0a] font-display text-[2.5rem] md:text-[3rem] leading-[1.2] flex flex-col items-center">
          <span className="font-normal">Embark on a</span>
          <span className="font-bold">Curated Journey</span>
          <span className="font-normal italic">of Discovery</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full flex flex-col items-center px-4 md:px-0">
        <div className="relative w-full max-w-[80vw] lg:max-w-[50vw] h-[40vh] md:h-[50vh] overflow-hidden shadow-sm">
          <div 
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative min-w-full h-full">
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 900px) 80vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls - Absolute Positioning inside image container area as per layout */}
          <div className="absolute inset-0 z-20 flex items-center justify-between px-4 pointer-events-none">
            <button 
              onClick={handlePrev}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-black transition-transform hover:scale-110 shadow-md"
              aria-label="Previous slide"
            >
              <span className="text-xl">←</span>
            </button>
            <button 
              onClick={handleNext}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-black transition-transform hover:scale-110 shadow-md"
              aria-label="Next slide"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="relative z-30 -mt-16 md:-mt-20 flex w-full max-w-[85vw] md:max-w-[40vw] flex-col items-center justify-center gap-6 bg-white px-6 md:px-12 py-10 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-50">
          <p className="text-[#0a0a0a] font-body text-[0.95rem] md:text-[1rem] leading-relaxed max-w-lg">
            Unveil a world of enchantment as we craft a personalized voyage that transcends expectations. With meticulous attention to detail&lsquo; we invite you to explore new horizons like never before.
          </p>
          
          <a href="/journeys" className="block w-fit">
            <button className="mx-auto border border-black px-8 py-2.5 font-body text-sm uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95">
              Journeys
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .font-display { font-family: var(--font-display, "Playfair Display", serif); }
        .font-body { font-family: var(--font-body, "Inter", sans-serif); }
      `}</style>
    </section>
  );
};

export default CuratedJourneySlider;