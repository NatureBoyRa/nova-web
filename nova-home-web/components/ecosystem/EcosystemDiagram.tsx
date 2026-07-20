"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ecosystemNodes, type EcosystemNode } from "@/lib/data";
import { fadeScale, VIEWPORT_ONCE } from "@/lib/motion";

const RADIUS = 40; // percent of container

function positionFor(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = 50 + RADIUS * Math.cos(rad);
  const y = 50 + RADIUS * Math.sin(rad);
  return { x, y };
}

function ConnectorLine({ node, index }: { node: EcosystemNode; index: number }) {
  const { x, y } = positionFor(node.angle);
  return (
    <line
      x1={50}
      y1={50}
      x2={x}
      y2={y}
      stroke="url(#lineGradient)"
      strokeWidth="0.35"
      strokeDasharray="1.4 1.4"
      className="motion-safe:animate-pulseLine"
      style={{ animationDelay: `${index * 0.15}s` }}
    />
  );
}

function ModuleNode({ node, index }: { node: EcosystemNode; index: number }) {
  const { x, y } = positionFor(node.angle);
  const Icon = node.icon;

  return (
    <motion.li
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      variants={fadeScale(0.4 + index * 0.06)}
      className="absolute flex w-[132px] -translate-x-1/2 -translate-y-1/2 list-none flex-col items-center gap-2 text-center"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-nova-border bg-nova-surface text-nova-cyan shadow-card">
        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div>
        <p className="font-display text-[12.5px] font-semibold text-nova-text">
          {node.label}
        </p>
        <p className="font-mono text-[10px] text-nova-textFaint">{node.sub}</p>
      </div>
    </motion.li>
  );
}

export function EcosystemDiagram() {
  return (
    <div className="relative">
      {/* Desktop / tablet: radial hub-and-spoke */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[640px] md:block">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#6E56CF" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          {ecosystemNodes.map((node, i) => (
            <ConnectorLine key={node.id} node={node} index={i} />
          ))}
        </svg>

        {/* Core */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          variants={fadeScale()}
          className="absolute left-1/2 top-1/2 flex h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-nova-cyan/30 bg-nova-surface2 shadow-glow-cyan"
        >
          <Image
            src="/logo/nova-mark.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="font-display text-[11px] font-semibold text-nova-text">
            Nova Core
          </span>
        </motion.div>

        <ul aria-label="Modules connected to Nova Core">
          {ecosystemNodes.map((node, i) => (
            <ModuleNode key={node.id} node={node} index={i} />
          ))}
        </ul>
      </div>

      {/* Mobile: vertical flow */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-nova-cyan/30 bg-nova-surface2 px-6 py-4 shadow-glow-cyan">
          <Image
            src="/logo/nova-mark.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="font-display text-sm font-semibold text-nova-text">
            Nova Core
          </span>
        </div>
        <div className="h-6 w-px bg-gradient-to-b from-nova-cyan/60 to-transparent" aria-hidden="true" />
        <ul className="grid grid-cols-2 gap-3" aria-label="Modules connected to Nova Core">
          {ecosystemNodes.map((node) => {
            const Icon = node.icon;
            return (
              <li
                key={node.id}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-nova-border bg-nova-surface px-3 py-4 text-center"
              >
                <Icon size={16} className="text-nova-cyan" strokeWidth={1.75} aria-hidden="true" />
                <p className="font-display text-[11px] font-semibold text-nova-text">
                  {node.label}
                </p>
                <p className="font-mono text-[9px] text-nova-textFaint">{node.sub}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
