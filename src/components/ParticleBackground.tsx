import React, { useEffect, useRef } from 'react';
import bgImage from '../assets/images/tech_particles_bg_1786564004621.jpg';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  symbol?: string;
  isSymbol?: boolean;
}

const CODE_SYMBOLS = [
  'const', '=>', 'import', 'async', 'await', '<Component />', '0101',
  '{...props}', 'function', 'return', 'interface', 'React', 'FastAPI',
  'Docker', 'Python', 'SQL'
];

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext('2d');
    if (!canvas || !parent || !context) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth || window.innerWidth;
      height = parent.clientHeight || window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
      particles = Array.from({ length: particleCount }, () => {
        const isSymbol = Math.random() < 0.25;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 - (isSymbol ? 0.15 : 0),
          radius: isSymbol ? 12 : Math.random() * 2 + 1,
          color: Math.random() > 0.4 ? '#4cd7f6' : '#38bdf8',
          alpha: Math.random() * 0.5 + 0.2,
          isSymbol,
          symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)]
        };
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const resetMouse = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const render = () => {
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index += 1) {
        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const particle = particles[index];
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(particle.x - nextParticle.x, particle.y - nextParticle.y);
          if (distance < 130) {
            context.strokeStyle = `rgba(76, 215, 246, ${(1 - distance / 130) * 0.22})`;
            context.lineWidth = 0.8;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        const mouseDistance = Math.hypot(particle.x - mouseX, particle.y - mouseY);
        if (mouseDistance < 160) {
          context.strokeStyle = `rgba(76, 215, 246, ${(1 - mouseDistance / 160) * 0.4})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(mouseX, mouseY);
          context.stroke();
        }

        context.save();
        if (particle.isSymbol && particle.symbol) {
          context.font = '11px "JetBrains Mono", monospace';
          context.fillStyle = `rgba(76, 215, 246, ${particle.alpha * 0.6})`;
          context.fillText(particle.symbol, particle.x, particle.y);
        } else {
          context.beginPath();
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          context.fillStyle = particle.color;
          context.globalAlpha = particle.alpha;
          context.shadowBlur = 8;
          context.shadowColor = '#4cd7f6';
          context.fill();
        }
        context.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    document.addEventListener('mouseleave', resetMouse);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mouseleave', resetMouse);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.12] mix-blend-luminosity saturate-150 blur-[1px] scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/65 via-[#131313]/80 to-[#131313]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4cd7f6]/10 via-transparent to-transparent" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
    </div>
  );
};
