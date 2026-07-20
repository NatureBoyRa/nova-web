import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          bg: "#05070C",
          bgElevated: "#080B13",
          surface: "#0C1019",
          surface2: "#111726",
          border: "rgba(255,255,255,0.08)",
          borderStrong: "rgba(255,255,255,0.14)",
          cyan: "#00E5FF",
          cyanDim: "#0AA8BD",
          violet: "#6E56CF",
          violetDim: "#4C3B99",
          text: "#EAF0FB",
          textMuted: "#8A93A8",
          textFaint: "#565E70",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "nova-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,255,0.14), transparent 60%)",
        "nova-radial-violet":
          "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(110,86,207,0.16), transparent 60%)",
        "nova-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        "glow-cyan": "0 0 40px rgba(0,229,255,0.25)",
        "glow-violet": "0 0 40px rgba(110,86,207,0.25)",
        "card": "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        pulseLine: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        orbSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbSpinReverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        corePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        particleDrift: {
          "0%, 100%": { transform: "translateY(0)", opacity: "var(--p-opacity, 0.4)" },
          "50%": { transform: "translateY(-18px)", opacity: "var(--p-opacity-peak, 0.7)" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        orbSpin: "orbSpin 40s linear infinite",
        orbSpinReverse: "orbSpinReverse 26s linear infinite",
        nodeOrbit: "orbSpin 14s linear infinite",
        corePulse: "corePulse 4s ease-in-out infinite",
        particleDrift: "particleDrift var(--p-duration, 8s) ease-in-out var(--p-delay, 0s) infinite",
        pulseLine: "pulseLine 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
