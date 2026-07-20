import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EcosystemDiagram } from "@/components/ecosystem/EcosystemDiagram";

export function EcosystemSection() {
  return (
    <Section id="ecosystem" className="overflow-hidden" containerClassName="relative">
      <div
        className="absolute inset-0 -z-10 bg-nova-radial opacity-60"
        aria-hidden="true"
      />
      <SectionHeading
        eyebrow="Architecture"
        align="center"
        title="One core. Every module."
        description="Nova App never talks to a module directly. Every request — home, security, finance, voice — is routed through Nova Core, so any module can go down without taking the rest of the house with it."
      />

      <div className="mt-16">
        <EcosystemDiagram />
      </div>

      <p className="mx-auto mt-14 max-w-xl text-center font-mono text-xs leading-relaxed text-nova-textFaint">
        rule — no module depends on another module directly. all
        communication is routed through nova core.
      </p>
    </Section>
  );
}
