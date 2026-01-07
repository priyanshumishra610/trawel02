"use client";

import Navigation from "@/components/sections/navigation";
import HeroVideoWindow from "@/components/sections/hero-video-window";
import WhyChooseUs from "@/components/sections/why-choose-us";
import About from "@/components/sections/about";
import InteractiveGallery from "@/components/sections/interactive-gallery";
import CuratedVoyageSlider from "@/components/sections/curated-voyage-slider";
import TestimonialsAndClients from "@/components/sections/testimonials-and-clients";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <main>
        <HeroVideoWindow />
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
