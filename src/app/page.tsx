"use client";

import Navigation from "@/components/sections/navigation";
import HeroVideoWindow from "@/components/sections/hero-video-window";
import { CinematicStorytelling } from "@/components/sections/cinematic-storytelling";
import { DestinationsShowcase } from "@/components/sections/destinations-showcase";
import WhyChooseUs from "@/components/sections/why-choose-us";
import About from "@/components/sections/about";
import InteractiveGallery from "@/components/sections/interactive-gallery";
import CuratedVoyageSlider from "@/components/sections/curated-voyage-slider";
import TestimonialsAndClients from "@/components/sections/testimonials-and-clients";
import Footer from "@/components/sections/footer";
import { LuxuryParticles } from "@/components/luxury-particles";
import { MagneticCursor } from "@/components/magnetic-cursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-primary-foreground">
      <MagneticCursor />
      <LuxuryParticles />
      <Navigation />
      <main>
        <HeroVideoWindow />
        <CinematicStorytelling />
        <DestinationsShowcase />
        <WhyChooseUs />
        <About />
        <InteractiveGallery />
        <CuratedVoyageSlider />
        <TestimonialsAndClients />
      </main>
      <Footer />
    </div>
  );
}
