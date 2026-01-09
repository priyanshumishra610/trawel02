"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  index: number;
}

const destinationVideos: Record<string, string> = {
  "Maldives": "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beach-resort-in-the-maldives-4066-large.mp4",
  "Swiss Alps": "https://assets.mixkit.co/videos/preview/mixkit-mountains-and-a-pine-forest-in-winter-2744-large.mp4",
  "Amalfi Coast": "https://assets.mixkit.co/videos/preview/mixkit-blue-sea-with-waves-on-a-summer-day-43159-large.mp4",
  "Kyoto": "https://assets.mixkit.co/videos/preview/mixkit-traditional-japanese-temple-surrounded-by-autumn-trees-40778-large.mp4",
};

export function DestinationHoverCard({
  title,
  description,
  image,
  index,
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = destinationVideos[title];

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: "translateZ(0)" }}
    >
        <div className="absolute inset-0 w-full h-full" style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}>
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-1000 ease-out ${
              isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100"
            }`}
            style={{ willChange: "transform, opacity" }}
          />
          
          {videoUrl && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
                isHovered ? "scale-105 opacity-100" : "scale-110 opacity-0"
              }`}
              style={{ willChange: "transform, opacity" }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
        </div>

      <div 
        className={`absolute inset-0 transition-all duration-700 ${
          isHovered 
            ? "bg-gradient-to-t from-background via-background/60 to-transparent" 
            : "bg-gradient-to-t from-background via-background/40 to-transparent"
        }`} 
      />

      <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
        <div className="flex items-center gap-3 mb-4">
          <MapPin size={14} className="text-primary" />
          <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold">
            Featured Destination
          </span>
        </div>
        
        <h3 
          className={`font-display text-4xl font-bold text-white mb-4 tracking-tight transition-all duration-500 ${
            isHovered ? "translate-y-0" : "translate-y-2"
          }`}
        >
          {title}
        </h3>
        
        <p 
          className={`text-white/50 text-sm leading-relaxed mb-6 max-w-xs transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {description}
        </p>
        
        <div 
          className={`flex items-center gap-4 transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">
            Explore
          </span>
          <div className="h-px w-8 bg-primary/40" />
          <ArrowRight size={14} className="text-primary" />
        </div>
      </div>

      <div 
        className={`absolute top-6 right-6 w-3 h-3 rounded-full transition-all duration-500 ${
          isHovered ? "bg-primary scale-100" : "bg-white/20 scale-75"
        }`}
      />
    </motion.div>
  );
}
