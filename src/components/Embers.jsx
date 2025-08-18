import { useEffect, useRef } from "react";

/**
 * Ambient embers canvas 
 */
export default function Embers({
  enabled = true,
  /** particles per pixel (very small number) */
  density = 0.00012,
  /** hard cap */
  maxParticles = 90,
  /** target frame rate for animation (soft) */
  targetFPS = 45,
  /** clamp devicePixelRatio */
  maxDPR = 1.5,
  /** base size scaling */
  sizeMultiplier = 6,
  /** upward speed in px/sec (negative = up) */
  speedY = -10,
  /** horizontal sway strength */
  wind = 0.6,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let running = true;

    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

    const resize = () => {
      dpr = clamp(window.devicePixelRatio || 1, 1, maxDPR);
      width = Math.floor(window.innerWidth);
      height = Math.floor(window.innerHeight);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // recompute particle count from area
      const want = Math.min(
        maxParticles,
        Math.floor(width * height * density)
      );

      // grow/shrink pool
      if (particles.length < want) {
        while (particles.length < want) particles.push(makeParticle());
      } else if (particles.length > want) {
        particles.length = want;
      }
    };

    const rand = (a, b) => a + Math.random() * (b - a);

    const makeParticle = () => {
      const sz = rand(0.4, 1.0) * sizeMultiplier;
      return {
        x: rand(0, width),
        y: rand(0, height),
        vy: rand(speedY * 0.6, speedY * 1.2), // negative = up
        baseSize: sz,
        alpha: rand(0.45, 0.9),
        seed: Math.random() * 1000,
      };
    };

    let last = performance.now();
    const frameInterval = 1000 / targetFPS;

    const tick = (now) => {
      if (!running) return;

      const dtMs = now - last;
      if (dtMs < frameInterval - 2) {
        requestAnimationFrame(tick);
        return;
      }
      last = now;

      // clear
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // sway + rise
        const t = (now + p.seed * 1000) * 0.001;
        const sway = Math.sin(t * 0.6) * wind; // gentle left/right
        p.x += sway;
        p.y += (p.vy * dtMs) / 1000;

        // wrap around
        if (p.y < -10) {
          p.y = height + rand(4, 20);
          p.x = rand(0, width);
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // draw ember
        const size = p.baseSize * (0.85 + 0.15 * Math.sin(t * 2));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        g.addColorStop(0, `rgba(255,200,160,${0.9 * p.alpha})`);
        g.addColorStop(0.45, `rgba(255,150,110,${0.55 * p.alpha})`);
        g.addColorStop(1, "rgba(255,120,80,0)");

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
    };

    resize();
    window.addEventListener("resize", onResize);
    requestAnimationFrame(tick);

    return () => {
      running = false;
      window.removeEventListener("resize", onResize);
    };
  }, [enabled, density, maxParticles, targetFPS, maxDPR, sizeMultiplier, speedY, wind]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0, // behind your content; bg image is even lower
      }}
    />
  );
}
