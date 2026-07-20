"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";
import { EASE_STANDARD } from "@/lib/motion";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section id="faq" containerClassName="max-w-3xl">
      <SectionHeading eyebrow="FAQ" title="Questions worth answering upfront." align="center" />

      <div className="mt-14 divide-y divide-nova-border border-y border-nova-border">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-trigger-${index}`;

          return (
            <div key={faq.question}>
              <h3>
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-[15px] font-medium text-nova-text">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE_STANDARD }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-nova-border text-nova-cyan"
                    aria-hidden="true"
                  >
                    <Plus size={14} />
                  </motion.span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE_STANDARD }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-nova-textMuted">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
