"use client";

import { motion } from "framer-motion";
import type { Feature } from "@/lib/data";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

export function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={fadeUp((index % 3) * 0.08)}
      className="group relative overflow-hidden rounded-2xl border border-nova-border bg-nova-surface p-6 transition-colors duration-300 hover:-translate-y-1 hover:border-nova-cyan/30 hover:shadow-glow-cyan motion-safe:transition-transform"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-nova-cyan/0 blur-2xl transition-colors duration-500 group-hover:bg-nova-cyan/10"
        aria-hidden="true"
      />
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-nova-border bg-nova-surface2 text-nova-cyan transition-colors duration-300 group-hover:border-nova-cyan/40">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-[17px] font-semibold text-nova-text">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-nova-textMuted">
        {feature.description}
      </p>
    </motion.div>
  );
}
