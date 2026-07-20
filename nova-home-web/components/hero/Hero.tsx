"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AiOrb } from "@/components/hero/AiOrb";
import { ParticleField } from "@/components/hero/ParticleField";
import { transition } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48"
    >
      <div className="absolute inset-0 bg-nova-radial" aria-hidden="true" />
      <div className="absolute inset-0 bg-nova-radial-violet" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-nova-grid bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <ParticleField />

      <Container className="relative grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0, 0.7)}
          >
            <Image
              src="/logo/nova-mark.png"
              alt="Nova Home"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.1, 0.7)}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-nova-text md:text-6xl"
          >
            Nova <span className="text-gradient">Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.2, 0.7)}
            className="mt-4 text-lg font-medium text-nova-textMuted md:text-xl"
          >
            Your personal AI-powered smart home.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.3, 0.7)}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-nova-textMuted"
          >
            Nova isn&apos;t a single voice assistant — it&apos;s a modular
            ecosystem built around one central brain, Nova Core, connecting
            security, finance, voice, and every device in the house into a
            single coherent system.
          </motion.p>

          <motion.div
            id="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.4, 0.7)}
            className="mt-9 flex scroll-mt-24 flex-wrap items-center gap-4"
          >
            <Button href="#screenshots" icon={ArrowRight}>
              Download App
              <span className="ml-1 rounded-full bg-black/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                Soon
              </span>
            </Button>
            <Button href="#faq" variant="ghost" icon={FileText}>
              Documentation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-2 text-xs text-nova-textFaint"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-nova-cyan shadow-glow-cyan motion-safe:animate-pulse"
              aria-hidden="true"
            />
            <span className="eyebrow text-nova-textFaint">Nova Core</span>
            <span>online · 5 modules connected</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition(0.2, 0.9)}
          className="relative flex items-center justify-center"
        >
          <div className="motion-safe:animate-floatY">
            <AiOrb />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
