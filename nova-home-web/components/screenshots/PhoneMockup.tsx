"use client";

import { motion } from "framer-motion";
import { VIEWPORT_ONCE, EASE_STANDARD } from "@/lib/motion";

const statuses = [
  { label: "Nova AI", color: "bg-nova-cyan" },
  { label: "Nova Home", color: "bg-nova-cyan" },
  { label: "Nova Finance", color: "bg-nova-cyan" },
  { label: "Nova Security", color: "bg-amber-400" },
];

export function PhoneMockup({
  variant = "dashboard",
  tilt = 0,
  delay = 0,
}: {
  variant?: "dashboard" | "security" | "finance";
  tilt?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: tilt - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.7, delay, ease: EASE_STANDARD }}
      className="relative mx-auto w-[240px] shrink-0 md:w-[260px]"
      style={{ transformOrigin: "bottom center" }}
      // Illustrative placeholder UI, not real content — the surrounding
      // section heading already describes what these screens represent.
      aria-hidden="true"
    >
      <div className="relative rounded-[2.2rem] border-[6px] border-[#1A1F2E] bg-nova-bgElevated p-1.5 shadow-card">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#1A1F2E]" />
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.7rem] bg-nova-bg">
          <div className="absolute inset-0 bg-nova-radial opacity-70" />
          <div className="relative flex h-full flex-col gap-3 px-3.5 pb-4 pt-9">
            <div className="flex items-center justify-between">
              <span className="font-display text-[11px] font-semibold text-nova-text">
                Nova
              </span>
              <div className="flex gap-1.5">
                <span className="h-4 w-4 rounded-full bg-nova-surface2" />
                <span className="h-4 w-4 rounded-full bg-nova-surface2" />
              </div>
            </div>

            {variant === "dashboard" && (
              <>
                <div className="grid grid-cols-2 gap-1.5">
                  {statuses.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-1.5 rounded-lg border border-nova-border bg-nova-surface px-2 py-1.5"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
                      <span className="font-mono text-[8px] text-nova-textMuted">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border border-nova-border bg-nova-surface"
                    />
                  ))}
                </div>
                <div className="rounded-xl border border-nova-border bg-nova-surface p-3">
                  <p className="font-mono text-[8px] text-nova-textFaint">
                    balance
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-nova-text">
                    Rp 4.280.000
                  </p>
                  <div className="mt-2 flex h-8 items-end gap-0.5">
                    {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-nova-cyan/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-nova-border bg-nova-surface px-2.5 py-2"
                    >
                      <span className="h-1.5 w-16 rounded-full bg-nova-surface2" />
                      <span className="font-mono text-[8px] text-nova-textFaint">
                        {i}m ago
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {variant === "security" && (
              <>
                <div className="flex items-center justify-between rounded-xl border border-nova-cyan/30 bg-nova-surface px-3 py-2.5">
                  <span className="font-mono text-[9px] text-nova-cyan">ARMED</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-nova-cyan shadow-glow-cyan" />
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-video rounded-lg border border-nova-border bg-nova-surface2"
                    />
                  ))}
                </div>
                <div className="space-y-1.5">
                  {["Front Door", "Motion — Living Room"].map((label) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-lg border border-nova-border bg-nova-surface px-2.5 py-2"
                    >
                      <span className="font-mono text-[8px] text-nova-textMuted">
                        {label}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-nova-cyan" />
                    </div>
                  ))}
                </div>
              </>
            )}

            {variant === "finance" && (
              <>
                <div className="rounded-xl border border-nova-border bg-nova-surface p-3">
                  <p className="font-mono text-[8px] text-nova-textFaint">
                    this month
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-nova-text">
                    − Rp 1.120.000
                  </p>
                </div>
                {["Groceries", "Utilities", "Subscriptions"].map((cat, i) => (
                  <div key={cat} className="space-y-1">
                    <div className="flex justify-between font-mono text-[8px] text-nova-textMuted">
                      <span>{cat}</span>
                      <span>{[72, 45, 30][i]}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-nova-surface2">
                      <div
                        className="h-full rounded-full bg-nova-cyan"
                        style={{ width: `${[72, 45, 30][i]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
