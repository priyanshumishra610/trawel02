import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Great service! The team is structured clearly. Communication system is clear and works from get go. From CEO to client managers, everyone takes your call. Stuff gets done.",
    author: "Juju Basu"
  },
  {
    quote: "Highly recommended....best location of hotels and excellent travel deals. Full assistance during travel to solve any issues.",
    author: "Richa Luthra"
  },
  {
    quote: "Unbelievable attention to detail and personalized service that truly redefines the concept of premium travel experiences.",
    author: "Anshul Sharma"
  }
];

const clientLogos = [
  { name: 'Bector', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_21.png', width: 160, height: 40 },
  { name: 'Bikaner', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_22.png', width: 160, height: 50 },
  { name: 'EO', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_23.png', width: 160, height: 100 },
  { name: 'Haldiram', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_24.png', width: 160, height: 50 },
  { name: 'HFCL', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_25.png', width: 120, height: 50 },
  { name: 'Jaquar', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/jaquar-4.svg', width: 160, height: 75 },
  { name: 'Khanna', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_27.png', width: 120, height: 40 },
  { name: 'RK', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_28.png', width: 160, height: 20 },
  { name: 'Trident', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/Trident-5.svg', width: 160, height: 20 },
];

const TestimonialsAndClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <div className="relative bg-background overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_20.png"
          alt="Luxury Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto section-padding">
        {/* Testimonials Section */}
        <section id="testimonials" className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-24">
          <div className="flex flex-col items-start gap-6 max-w-xl text-left">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-white drop-shadow-luxury">
              <span className="font-bold">Discover the World</span>
              <br /> of Luxury Travel
              <br /> through Our Clients&apos; Eyes
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Here&apos;s what some of our valued clients have to say about their extraordinary journeys with us.
            </p>
            <div className="flex gap-0.5">
              <button
                onClick={prevTestimonial}
                className="h-10 w-10 flex items-center justify-center rounded-l-full bg-stone-950 text-white border-none hover:bg-white hover:text-black transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="h-10 w-10 flex items-center justify-center rounded-r-full bg-stone-950 text-white border-none hover:bg-white hover:text-black transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-[480px] h-[280px] flex items-center justify-center">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex h-full w-full flex-col justify-between gap-4 rounded-sm bg-card p-8 text-center text-white drop-shadow-2xl transition-all duration-500 transform ${
                  idx === activeIndex
                    ? 'opacity-100 translate-y-0 scale-100 z-10'
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}
              >
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-lg font-body font-light leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="self-end text-sm font-body tracking-widest uppercase opacity-70">
                  - {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marquee Section */}
        <div className="flex flex-col items-center gap-12 pt-12">
          <h2 className="font-display text-4xl font-bold text-white text-center">Our Clients</h2>
          
          <div className="relative w-full overflow-hidden py-10">
            {/* Gradient Fades for Marquee */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-fit animate-[marquee_40s_linear_infinite] group">
              {/* Double the logos for seamless scroll */}
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex shrink-0 items-center justify-around gap-20 px-10">
                  {clientLogos.map((logo, idx) => (
                    <div key={`${groupIdx}-${idx}`} className="flex shrink-0 items-center justify-center w-[180px] h-[100px] grayscale brightness-200 transition-all hover:grayscale-0 hover:scale-110">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain max-h-full"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-display text-4xl font-normal text-white text-center mt-8">Our Partners</h2>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsAndClients;