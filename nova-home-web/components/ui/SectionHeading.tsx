"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={fadeUp()}
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <Heading className="mt-3 font-display text-3xl font-semibold leading-tight text-nova-text md:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-nova-textMuted">
          {description}
        </p>
      )}
    </motion.div>
  );
}
