"use client";

import Navigation from "@/components/sections/navigation";
import HeroVideoWindow from "@/components/sections/hero-video-window";
import InteractiveGallery from "@/components/sections/interactive-gallery";
import CuratedVoyageSlider from "@/components/sections/curated-voyage-slider";
import TestimonialsAndClients from "@/components/sections/testimonials-and-clients";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroVideoWindow />
        <InteractiveGallery />
        <CuratedVoyageSlider />
        <TestimonialsAndClients />
      </main>
      <Footer />
    </div>
  );
}
