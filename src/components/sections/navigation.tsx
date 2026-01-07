import React from 'react';
import Image from 'next/image';

const Navigation = () => {
  return (
    <nav className="bg-black text-white w-full">
      {/* Desktop Navigation */}
      <div className="hidden min-[600px]:flex h-fit w-full items-center justify-around gap-12 bg-black px-4 py-12 font-display text-xl text-white">
        {/* Left Menu Items */}
        <div className="flex gap-5 items-center">
          <a href="/journeys" className="group relative tracking-tight">
            Journeys
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/destinations" className="group relative tracking-tight">
            Destination
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="https://www.aabee-india.in/" className="group relative tracking-tight">
            Explore India
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Centered Logo */}
        <a href="/" className="shrink-0">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/logo-white-1.svg" 
            alt="Aabee" 
            width={300} 
            height={48} 
            className="mx-2 hover:cursor-pointer object-contain h-[48.5px]"
            priority
          />
        </a>

        {/* Right Menu Items */}
        <div className="flex gap-5 items-center">
          <a href="https://www.aabee-india.in/whyinbound" className="group relative tracking-tight">
            Why Aabee
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/about" className="group relative tracking-tight">
            About
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/contact" className="group relative tracking-tight">
            Contact
            <span className="absolute left-0 top-full h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex min-[600px]:hidden h-fit w-full items-center justify-between gap-12 bg-white px-8 py-4 text-black">
        <a href="/">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/logo-black-2.svg" 
            alt="Aabee" 
            width={150} 
            height={24} 
            className="object-contain"
            priority
          />
        </a>
        <button type="button" className="p-0 border-none hover:bg-transparent">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/menu-icon-3.svg" 
            alt="Menu" 
            width={30} 
            height={30} 
            className="object-contain"
          />
        </button>
      </div>
      
      <style jsx global>{`
        @keyframes highlight {
          from { width: 0; }
          to { width: 100%; }
        }
        .group-hover\:animate-highlight:hover {
          animation: highlight 0.3s ease-in-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;