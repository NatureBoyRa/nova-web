import type { LucideIcon } from "lucide-react";
import {
  Mic,
  ShieldCheck,
  LayoutDashboard,
  Sparkles,
  Camera,
  Wallet,
  Home,
  Radio,
  MessageSquare,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Home,
    title: "Smart Home Control",
    description:
      "One control plane for every light, lock, and sensor in the house, routed through Home Assistant without exposing a single device directly.",
  },
  {
    icon: Mic,
    title: "Nova Voice",
    description:
      "On-device wake word and speech pipeline that turns a spoken sentence into an action, no cloud round-trip required to know you're talking to it.",
  },
  {
    icon: ShieldCheck,
    title: "Nova Security",
    description:
      "Arm and disarm from anywhere, watch every door and motion sensor in real time, and get pushed the moment something needs your attention.",
  },
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description:
      "Every module's status, in one glance — healthy, warning, or offline — without digging through five different apps to find out why.",
  },
  {
    icon: Sparkles,
    title: "AI Assistant",
    description:
      "A Gemini-powered assistant that lives in Discord and understands the house — ask it what's on, what's due, or what changed.",
  },
  {
    icon: Camera,
    title: "CCTV Integration",
    description:
      "Live snapshots and history from every camera, streamed through Nova Core so the app never talks to a camera feed directly.",
  },
];

export type NodeId =
  | "core"
  | "app"
  | "ai"
  | "voice"
  | "security"
  | "finance"
  | "home"
  | "mqtt"
  | "discord";

export type EcosystemNode = {
  id: NodeId;
  label: string;
  sub: string;
  icon: LucideIcon;
  angle: number; // degrees around the core, 0 = top
};

export const ecosystemNodes: EcosystemNode[] = [
  { id: "app", label: "Nova App", sub: "React Native · Expo", icon: LayoutDashboard, angle: -90 },
  { id: "ai", label: "Nova AI", sub: "Discord Assistant", icon: Sparkles, angle: -45 },
  { id: "security", label: "Nova Security", sub: "WS + MQTT bridge", icon: ShieldCheck, angle: 0 },
  { id: "finance", label: "Nova Finance", sub: "Budgets & bills", icon: Wallet, angle: 45 },
  { id: "home", label: "Home Assistant", sub: "Devices & scenes", icon: Home, angle: 90 },
  { id: "mqtt", label: "MQTT", sub: "Event bus", icon: Radio, angle: 135 },
  { id: "voice", label: "Nova Voice", sub: "Wake word · STT/TTS", icon: Mic, angle: 180 },
  { id: "discord", label: "Discord Bot", sub: "Command channel", icon: MessageSquare, angle: -135 },
];

export type RoadmapItem = {
  status: "done" | "active" | "planned";
  title: string;
  description: string;
};

export const roadmap: RoadmapItem[] = [
  {
    status: "done",
    title: "Nova Core",
    description: "Central gateway routing every module through one authenticated API surface.",
  },
  {
    status: "done",
    title: "Nova App",
    description: "The control plane — dashboard, finance, home, and security in one place.",
  },
  {
    status: "active",
    title: "Nova Voice",
    description: "On-device wake word detection paired with a backend speech pipeline.",
  },
  {
    status: "active",
    title: "CCTV AI",
    description: "On-camera event detection layered on top of the existing CCTV bridge.",
  },
  {
    status: "planned",
    title: "Energy Monitoring",
    description: "Live power draw per circuit, with historical trends inside the dashboard.",
  },
  {
    status: "planned",
    title: "OTA Updates",
    description: "Ship module updates to the house without a manual redeploy.",
  },
  {
    status: "planned",
    title: "More AI Automations",
    description: "Cross-module routines — Nova AI reasoning across security, finance, and home state.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Is Nova Home a product I can buy today?",
    answer:
      "Not yet. Nova is a personal system currently running on one house. This site documents the architecture as it's built — the app is not publicly downloadable.",
  },
  {
    question: "What makes Nova different from Alexa or Google Home?",
    answer:
      "Nova isn't a single assistant — it's an ecosystem of independent modules (security, finance, voice, dashboard) that all speak through one central gateway, Nova Core, and it runs on infrastructure Ragil controls end to end.",
  },
  {
    question: "Does Nova depend on the cloud to work?",
    answer:
      "Core control — lights, locks, security state — runs locally through Home Assistant and Nova Core. Nova AI's language model and voice transcription currently use external APIs, with a fully local path on the roadmap.",
  },
  {
    question: "Can Nova modules run independently?",
    answer:
      "Yes — that's the core architectural rule. Every module is built to keep working even if Nova Core goes offline, and no module talks to another module directly.",
  },
  {
    question: "Is Nova built for multiple users or households?",
    answer:
      "No — by design. Nova is scoped to a single household and a single set of users. Multi-tenant support has been explicitly ruled out to keep the system simple and personal.",
  },
];
