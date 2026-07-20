import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novahome.my.id"),
  title: {
    default: "Nova Home — Your Personal AI-Powered Smart Home",
    template: "%s · Nova Home",
  },
  description:
    "Nova Home is a personal AI smart home ecosystem. One core, every module — Nova AI, Nova Voice, Nova Security, Nova Finance, and Home Assistant, connected through Nova Core.",
  keywords: [
    "Nova Home",
    "AI smart home",
    "Nova Core",
    "Home Assistant",
    "smart home ecosystem",
    "Nova Voice",
    "Nova Security",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nova Home — Your Personal AI-Powered Smart Home",
    description:
      "One core, every module. The AI ecosystem behind a truly personal smart home.",
    url: "https://novahome.my.id",
    siteName: "Nova Home",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Home — Your Personal AI-Powered Smart Home",
    description:
      "One core, every module. The AI ecosystem behind a truly personal smart home.",
  },
  icons: {
    icon: "/logo/nova-mark.png",
    shortcut: "/logo/nova-mark.png",
    apple: "/logo/nova-mark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nova Home",
  url: "https://novahome.my.id",
  logo: "https://novahome.my.id/logo/nova-mark.png",
  description:
    "A personal AI-powered smart home ecosystem — one core, every module.",
  founder: {
    "@type": "Person",
    name: "Ragil",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-nova-bg text-nova-text antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SkipLink />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
