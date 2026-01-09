"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyPanels = [
  {
    tagline: "Where Dreams Take Flight",
    headline: "Discover the World",
    subtext: "Through the Eyes of Experts",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000",
  },
  {
    tagline: "Handcrafted Journeys",
    headline: "Every Detail Matters",
    subtext: "From First Thought to Final Memory",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000",
  },
  {
    tagline: "Luxury Redefined",
    headline: "Beyond Expectations",
    subtext: "Experiences That Transform",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000",
  },
];

export function CinematicStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const panels = panelsRef.current;
    if (!section || panels.length === 0) return;

    const ctx = gsap.context(() => {
      panels.forEach((panel) => {
        const image = panel.querySelector(".panel-image");
        const tagline = panel.querySelector(".panel-tagline");
        const headline = panel.querySelector(".panel-headline");
        const subtext = panel.querySelector(".panel-subtext");
        const overlay = panel.querySelector(".panel-overlay");

        gsap.set([tagline, headline, subtext], { 
          opacity: 0, 
          y: 80,
          filter: "blur(10px)"
        });
        gsap.set(image, { scale: 1.3 });
        gsap.set(overlay, { opacity: 0.7 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
        });

        tl.to(image, { scale: 1, duration: 1.5, ease: "power2.out" }, 0)
          .to(overlay, { opacity: 0.4, duration: 1 }, 0)
          .to(tagline, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, 0.2)
          .to(headline, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }, 0.4)
          .to(subtext, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, 0.6);

        gsap.to(image, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background">
      {storyPanels.map((panel, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) panelsRef.current[i] = el;
              }}
                className="relative h-auto min-h-[600px] py-24 md:py-0 md:h-screen w-full overflow-hidden flex items-center justify-center"
                style={{ contain: "paint layout" }}
              >
                <div className="panel-image absolute inset-0 w-full h-full" style={{ willChange: "transform", transform: "translateZ(0)" }}>

                <img
                  src={panel.image}
                  alt={panel.headline}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="panel-overlay absolute inset-0 bg-black" style={{ willChange: "opacity" }} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
    
              <div className="relative z-10 text-center px-6 max-w-5xl">
                <span className="panel-tagline block text-primary text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-bold mb-6" style={{ willChange: "transform, opacity, filter" }}>
                  {panel.tagline}
                </span>
                <h2 className="panel-headline font-display text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none" style={{ willChange: "transform, opacity, filter" }}>
                  {panel.headline}
                </h2>
                <p className="panel-subtext text-white/60 text-lg md:text-2xl font-light tracking-wide" style={{ willChange: "transform, opacity, filter" }}>
                  {panel.subtext}
                </p>
              </div>
            </div>
      ))}
    </section>
  );
}
