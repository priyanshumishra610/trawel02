import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const HeroVideoWindow = () => {
  const leftShuttersRef = useRef<HTMLDivElement>(null);
  const rightShuttersRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !leftShuttersRef.current || !rightShuttersRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.min(Math.max(-rect.top / rect.height, 0), 1);

      // Parallax and sliding effect for shutters
      const translateX = scrollProgress * 100; // Shift outwards
      const opacity = Math.max(1 - scrollProgress * 1.5, 0);

      leftShuttersRef.current.style.transform = `translateX(-${translateX}%)`;
      leftShuttersRef.current.style.opacity = `${opacity}`;

      rightShuttersRef.current.style.transform = `translateX(${translateX}%)`;
      rightShuttersRef.current.style.opacity = `${opacity}`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftImages = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_1.png", col: "col-span-3 col-start-4", row: "row-span-5" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_2.png", col: "col-span-3", row: "row-span-5 row-start-3" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_3.png", col: "col-span-3 col-start-4", row: "row-span-3 row-start-6" },
  ];

  const rightImages = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_4.png", col: "col-span-2", row: "row-span-3" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_5.png", col: "col-span-3 col-start-1", row: "row-span-3 row-start-4" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_6.png", col: "col-span-2 col-start-3", row: "row-span-2 row-start-2" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_7.png", col: "col-span-2 col-start-4", row: "row-span-3 row-start-4" },
  ];

  return (
    <section 
      ref={containerRef}
      className="max-[950px]:hidden relative h-[200vh] w-full bg-black overflow-hidden" 
      id="window"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video Window */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            className="h-full w-full object-cover"
            playsInline
          >
            <source src="https://aabee.in/test1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Left Shutters */}
        <div 
          ref={leftShuttersRef}
          className="absolute left-0 top-0 z-10 grid h-screen w-[45%] grid-cols-6 grid-rows-8 gap-4 p-4 transition-transform duration-100 ease-out will-change-transform"
        >
          {leftImages.map((img, i) => (
            <div key={i} className={`relative overflow-hidden ${img.col} ${img.row}`}>
              <Image 
                src={img.src} 
                alt="Luxury Travel Scene" 
                fill 
                className="object-cover"
                sizes="33vw"
                priority
              />
            </div>
          ))}
        </div>

        {/* Right Shutters */}
        <div 
          ref={rightShuttersRef}
          className="absolute right-0 top-0 z-10 grid h-screen w-[45%] grid-cols-5 grid-rows-6 gap-4 p-4 transition-transform duration-100 ease-out will-change-transform"
        >
          {rightImages.map((img, i) => (
            <div key={i} className={`relative overflow-hidden ${img.col} ${img.row}`}>
              <Image 
                src={img.src} 
                alt="Luxury Travel Scene" 
                fill 
                className="object-cover"
                sizes="33vw"
                priority
              />
            </div>
          ))}
        </div>

        {/* Overlay Fade to Black */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      {/* Decorative Text that appears during scroll */}
      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col items-center justify-center pointer-events-none pb-20">
        <div className="flex items-center gap-12 font-display text-5xl tracking-[1rem] uppercase text-white opacity-40">
          Experience
        </div>
      </div>
    </section>
  );
};

export default HeroVideoWindow;