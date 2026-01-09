"use client";

import { useEffect, useRef } from "react";

export function LuxuryParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDirection: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        this.opacity += this.fadeDirection * 0.002;
        if (this.opacity >= 0.4) this.fadeDirection = -1;
        if (this.opacity <= 0.05) this.fadeDirection = 1;

        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `rgba(212, 175, 55, ${this.opacity * 0.3})`);
        gradient.addColorStop(1, "rgba(212, 175, 55, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor(canvas.width / 30));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      // Check if tab is active
      if (document.hidden) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isMobile = window.innerWidth <= 768;

      particles.forEach((particle) => {
        particle.update();
        
        // Optimize drawing for mobile: skip radial gradient if on mobile
        if (isMobile) {
          if (!ctx) return;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
          ctx.fill();
        } else {
          particle.draw();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      init();
    };

    resize();
    init();
    animate();

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5] opacity-60"
      style={{ mixBlendMode: "screen", willChange: "transform" }}
    />
  );
}
