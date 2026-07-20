import { ArrowRight, FileText } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function ClosingCta() {
  return (
    <Section className="py-0 pb-24 pt-0">
      <div className="relative overflow-hidden rounded-3xl border border-nova-border bg-nova-surface px-8 py-16 text-center">
        <div className="absolute inset-0 bg-nova-radial opacity-70" aria-hidden="true" />
        <div className="relative">
          <span className="eyebrow">Nova Home</span>
          <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl font-semibold text-nova-text md:text-4xl">
            Built for one house. Documented for anyone building the next one.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#hero-cta" icon={ArrowRight}>
              Download App
              <span className="ml-1 rounded-full bg-black/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                Soon
              </span>
            </Button>
            <Button href="#faq" variant="ghost" icon={FileText}>
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
