import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneMockup } from "@/components/screenshots/PhoneMockup";

export function ScreenshotsShowcase() {
  return (
    <Section id="screenshots">
      <SectionHeading
        eyebrow="The App"
        title="A control plane, not a chat window."
        description="Dashboard, security, and finance — represented here with placeholder UI. Real product screenshots drop in without touching the layout."
      />

      <div className="mt-16 flex flex-wrap items-end justify-center gap-8 md:gap-6">
        <PhoneMockup variant="finance" tilt={-6} delay={0.1} />
        <PhoneMockup variant="dashboard" tilt={0} delay={0} />
        <PhoneMockup variant="security" tilt={6} delay={0.2} />
      </div>
    </Section>
  );
}
