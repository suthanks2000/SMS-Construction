'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityDirection: number;
}

export default function GoldParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 80;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const density = 0.00004; // scale with area
      const count = Math.min(maxParticles, Math.floor(canvas.width * canvas.height * density));
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw connecting faint architectural web lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.05;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // 2. Draw and update each particle
      particles.forEach((p) => {
        // Subtle drift movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundary coordinates
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Soft shimmer breathing effect
        p.opacity += p.opacityDirection * 0.003;
        if (p.opacity > 0.6) {
          p.opacityDirection = -1;
        } else if (p.opacity < 0.1) {
          p.opacityDirection = 1;
        }

        // Slight repulsion from the mouse cursor
        if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
          const distToMouse = Math.hypot(p.x - mouseRef.current.x, p.y - mouseRef.current.y);
          if (distToMouse < 100) {
            const force = (100 - distToMouse) * 0.02;
            const angle = Math.atan2(p.y - mouseRef.current.y, p.x - mouseRef.current.x);
            p.x += Math.cos(angle) * force;
            p.y += Math.sin(angle) * force;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Dynamic gradient for premium sparkle look
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        gradient.addColorStop(0, `rgba(245, 217, 142, ${p.opacity})`); // Soft Gold
        gradient.addColorStop(0.4, `rgba(212, 175, 55, ${p.opacity * 0.8})`); // Gold
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const update = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(update);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
    />
  );
}
