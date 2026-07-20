/**
 * The hero's signature visual. Every loop here (the two rings, the
 * orbiting node, the core's breathing pulse) is a plain CSS `animation`
 * defined in tailwind.config.ts, not a Framer Motion tween — ambient,
 * always-on motion runs cheapest on the compositor thread and doesn't need
 * React re-renders to keep going. `prefers-reduced-motion` freezes all of
 * it globally (see globals.css). Framer Motion is reserved for the
 * meaningful, one-shot entrance in Hero.tsx.
 */
export function AiOrb() {
  return (
    <div
      className="relative flex h-[320px] w-[320px] items-center justify-center md:h-[420px] md:w-[420px]"
      role="img"
      aria-label="Animated representation of the Nova AI core"
    >
      {/* outer glow */}
      <div className="absolute h-full w-full rounded-full bg-nova-cyan/10 blur-3xl" aria-hidden="true" />

      {/* rotating dashed ring */}
      <svg
        viewBox="0 0 200 200"
        className="absolute h-[92%] w-[92%] motion-safe:animate-orbSpin"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="0.6"
          strokeDasharray="2 6"
        />
        <defs>
          <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6E56CF" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* counter-rotating thin ring */}
      <svg
        viewBox="0 0 200 200"
        className="absolute h-[70%] w-[70%] motion-safe:animate-orbSpinReverse"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="none"
          stroke="#00E5FF"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />
      </svg>

      {/* core */}
      <div
        className="relative h-[46%] w-[46%] rounded-full motion-safe:animate-corePulse"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(150,240,255,0.95), rgba(0,229,255,0.55) 40%, rgba(110,86,207,0.4) 75%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full shadow-glow-cyan" />
        <div className="absolute inset-[18%] rounded-full bg-white/90 blur-md" />
      </div>

      {/* orbiting node */}
      <div
        className="absolute h-full w-full motion-safe:animate-nodeOrbit"
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-[6%] h-2 w-2 -translate-x-1/2 rounded-full bg-nova-cyan shadow-glow-cyan" />
      </div>
    </div>
  );
}
