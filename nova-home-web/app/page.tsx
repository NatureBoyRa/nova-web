import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { FeatureGrid } from "@/components/features/FeatureGrid";

// Below-the-fold sections are code-split into their own chunks so the
// hero — the only thing visible on load — isn't waiting behind JS the
// user hasn't scrolled to yet. All still render on the server (ssr stays
// on) so content, SEO, and no-JS fallback are unaffected; this only
// changes how the client bundle is split and fetched.
const EcosystemSection = dynamic(() =>
  import("@/components/ecosystem/EcosystemSection").then((m) => m.EcosystemSection)
);
const ScreenshotsShowcase = dynamic(() =>
  import("@/components/screenshots/ScreenshotsShowcase").then((m) => m.ScreenshotsShowcase)
);
const RoadmapTimeline = dynamic(() =>
  import("@/components/roadmap/RoadmapTimeline").then((m) => m.RoadmapTimeline)
);
const FaqAccordion = dynamic(() =>
  import("@/components/faq/FaqAccordion").then((m) => m.FaqAccordion)
);
const ClosingCta = dynamic(() =>
  import("@/components/layout/ClosingCta").then((m) => m.ClosingCta)
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <FeatureGrid />
        <EcosystemSection />
        <ScreenshotsShowcase />
        <RoadmapTimeline />
        <FaqAccordion />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
