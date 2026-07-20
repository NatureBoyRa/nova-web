"use client";

import { motion } from "framer-motion";
import { Check, Loader2, Circle, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { roadmap, type RoadmapItem } from "@/lib/data";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

const statusMeta: Record<
  RoadmapItem["status"],
  { icon: LucideIcon; label: string; dot: string; text: string }
> = {
  done: { icon: Check, label: "Shipped", dot: "bg-nova-cyan", text: "text-nova-cyan" },
  active: {
    icon: Loader2,
    label: "In Progress",
    dot: "bg-nova-violet",
    text: "text-[#A594FF]",
  },
  planned: {
    icon: Circle,
    label: "Planned",
    dot: "bg-nova-textFaint",
    text: "text-nova-textFaint",
  },
};

export function RoadmapTimeline() {
  return (
    <Section id="roadmap">
      <SectionHeading
        eyebrow="Roadmap"
        title="Built in phases, in order."
        description="Nova ships module by module — nothing marked as done in this timeline is a mockup, and nothing planned is promised on a date."
      />

      <ol className="relative mt-16 space-y-10 pl-6">
        <div
          className="absolute bottom-0 left-[7px] top-1 w-px bg-gradient-to-b from-nova-cyan via-nova-violet/50 to-transparent"
          aria-hidden="true"
        />

        {roadmap.map((item, i) => {
          const meta = statusMeta[item.status];
          const Icon = meta.icon;
          return (
            <motion.li
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              variants={fadeUp(i * 0.05)}
              className="relative pl-8"
            >
              <span
                className={clsx(
                  "absolute -left-[1px] top-1 flex h-4 w-4 items-center justify-center rounded-full",
                  meta.dot
                )}
                aria-hidden="true"
              >
                {item.status === "done" && (
                  <Check size={10} className="text-nova-bg" strokeWidth={3} />
                )}
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-base font-semibold text-nova-text">
                  {item.title}
                </h3>
                <span
                  className={clsx(
                    "inline-flex items-center gap-1 rounded-full border border-nova-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide",
                    meta.text
                  )}
                >
                  <Icon
                    size={10}
                    aria-hidden="true"
                    className={item.status === "active" ? "motion-safe:animate-spin" : ""}
                  />
                  {meta.label}
                </span>
              </div>
              <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-nova-textMuted">
                {item.description}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
