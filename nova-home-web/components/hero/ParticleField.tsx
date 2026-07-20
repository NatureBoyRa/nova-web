type Particle = {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

function seededParticles(count: number): Particle[] {
  // Deterministic pseudo-random so server and client render identical
  // markup (no hydration mismatch), and so this can stay a plain,
  // server-rendered component with zero client JS.
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  return Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    size: rand() * 2 + 1,
    duration: rand() * 8 + 6,
    delay: rand() * 5,
    opacity: rand() * 0.5 + 0.2,
  }));
}

/**
 * Ambient particle drift, entirely CSS-driven (see `particleDrift` in
 * tailwind.config.ts). No Framer Motion, no client JS, no per-frame React
 * work — 36 individually-timed loops handled by the compositor instead of
 * the main thread. `prefers-reduced-motion` freezes it globally.
 */
export function ParticleField({ count = 36 }: { count?: number }) {
  const particles = seededParticles(count);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-nova-cyan motion-safe:animate-particleDrift"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              boxShadow: "0 0 6px rgba(0,229,255,0.8)",
              "--p-duration": `${p.duration}s`,
              "--p-delay": `${p.delay}s`,
              "--p-opacity": p.opacity,
              "--p-opacity-peak": p.opacity * 1.6,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
