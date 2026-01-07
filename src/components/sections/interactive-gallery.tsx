"use client";

import React from "react";
import Image from "next/image";

const GalleryItem = ({
  className,
  imageSrc,
  children,
  speed = "0.8",
}: {
  className?: string;
  imageSrc?: string;
  children: React.ReactNode;
  speed?: string;
}) => {
  return (
    <div className={`group relative overflow-hidden h-full w-full ${className}`}>
      {imageSrc && (
        <div className="absolute inset-0 z-10 overflow-hidden">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            style={{
              transform: `translateY(0%) scale(1.15)`,
            }}
            priority
          />
        </div>
      )}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-black transition-all duration-500 ease-in-out">
        {children}
      </div>
    </div>
  );
};

const InteractiveGallery = () => {
  return (
    <section className="bg-background">
      <div
        id="gallery"
        className="grid min-h-[150vh] w-full grid-cols-10 grid-rows-10 gap-4 bg-[#0a0a0a] p-4 text-white"
      >
        {/* Item 1: Trees/Empty reveal */}
        <GalleryItem
          className="col-span-3 col-start-4 row-span-3"
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_8.png"
        >
          <div className="text-xl">..</div>
        </GalleryItem>

        {/* Item 2: Gates / About Us */}
        <GalleryItem
          className="col-span-3 col-start-1 row-span-4 row-start-3"
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_9.png"
        >
          <div className="flex flex-col items-center justify-center gap-5 px-8 text-center text-xl font-body font-light leading-relaxed">
            <p>
              We redefine travel as an art form. With a legacy of crafting
              unforgettable experiences, we invite you to learn more about our
              story and commitment on our About page.
            </p>
            <a href="/about" className="no-underline">
              <button className="btn rounded-sm border px-4 py-2 hover:bg-white hover:text-black">
                About Us
              </button>
            </a>
          </div>
        </GalleryItem>

        {/* Item 3: Mountain / Craft Journey (Main Bento Piece) */}
        <GalleryItem
          className="col-span-5 col-start-4 row-span-3 row-start-4"
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_10.png"
        >
          <div className="flex flex-col items-center justify-center gap-5 px-10 text-center text-xl">
            <div className="flex items-start">
              <span className="ampersand text-8xl leading-none">&amp;</span>
              <span className="text-left font-body ml-2">
                Escape the Ordinary, Elevate Your Travel <br />
                Craft Your Unforgettable Experience with <br />
                AABEE
              </span>
            </div>
            <a href="/journeys">
              <button className="btn rounded-sm border px-6 py-2 hover:bg-white hover:text-black">
                Start Crafting Your Journey
              </button>
            </a>
          </div>
        </GalleryItem>

        {/* Item 4: City / Dolortur */}
        <GalleryItem
          className="col-span-3 col-start-7 row-span-3 row-start-1"
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_11.png"
        >
          <div className="text-xl font-display italic">Dolortur</div>
        </GalleryItem>

        {/* Item 5: CliffCity / Newsletter Signup */}
        <GalleryItem
          className="col-span-3 col-start-3 row-span-3 row-start-7"
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_12.png"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="mb-4 text-lg font-body">Sign Up to Our Newsletter</span>
            <form
              className="flex flex-wrap justify-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="rounded-sm border border-foreground bg-transparent p-2 text-foreground font-body focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="Email"
              />
              <button
                type="submit"
                className="btn rounded-sm border border-foreground bg-transparent p-2 hover:bg-white hover:text-black"
              >
                Submit
              </button>
            </form>
          </div>
        </GalleryItem>

        {/* Item 6: Boats / 30 Years */}
        <GalleryItem
          className="col-span-2 col-start-9 row-span-4 row-start-5"
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_13.png"
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-body text-xl">
              Celebrating <span className="text-3xl font-display">30 Years</span>{" "}
              <br /> of Excellence
            </span>
            <a href="/about">
              <button className="btn rounded-sm border px-4 py-2 hover:bg-white hover:text-black">
                Explore Our Story
              </button>
            </a>
          </div>
        </GalleryItem>

        {/* Item 7: LakeCity / Get In Touch */}
        <GalleryItem
          className="col-span-3 col-start-6 row-span-4 row-start-7"
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_14.png"
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <a href="/contact">
              <button className="btn rounded-sm border px-6 py-2 hover:bg-white hover:text-black">
                Get In Touch
              </button>
            </a>
            <p className="font-body text-xl">
              Let&apos;s Plan Your Next Adventure <br />
              Together
            </p>
          </div>
        </GalleryItem>

        {/* Item 8: House / Testimonials */}
        <GalleryItem
          className="col-span-2 row-span-3 row-start-7"
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_15.png"
        >
          <div className="flex flex-col items-center justify-center gap-2 p-2 text-center text-xl font-body">
            <p>
              See us through <br /> Our Client&apos;s Eyes
            </p>
            <button className="btn rounded-sm border px-4 py-2 hover:bg-white hover:text-black">
              See Testimonials
            </button>
          </div>
        </GalleryItem>

        {/* Empty / Decorative Grid Cells */}
        <div className="row-start-9 col-span-2 col-start-9 row-span-2 flex items-center justify-center font-display text-4xl tracking-widest"></div>
        <div className="row-start-10 col-span-5 col-start-1 flex items-center justify-center text-center font-display text-5xl tracking-[0.2em] uppercase">
          Elevate Your Expectations
        </div>
        <div className="col-start-10 row-span-3 row-start-1 whitespace-nowrap text-center font-display text-6xl"></div>
        <div className="col-span-3 col-start-1 row-span-2 row-start-1 flex items-center justify-center font-display text-5xl tracking-[1rem] uppercase">
          Experience
        </div>
        <div className="col-span-1 col-start-9 row-start-4 flex items-center justify-center font-display text-8xl tracking-widest"></div>
      </div>
    </section>
  );
};

export default InteractiveGallery;