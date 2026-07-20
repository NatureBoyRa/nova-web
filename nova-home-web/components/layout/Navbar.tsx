"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { EASE_STANDARD } from "@/lib/motion";

const links = [
  { href: "#features", label: "Features" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#screenshots", label: "App" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
];

const sectionIds = links.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu automatically if the viewport grows past the
  // mobile breakpoint (e.g. rotating a tablet).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_STANDARD }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={clsx(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-colors duration-300 md:mt-4 md:px-6",
          scrolled ? "glass shadow-card" : "bg-transparent"
        )}
      >
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo/nova-mark.png"
            alt="Nova Home"
            width={30}
            height={30}
            className="h-7 w-7 object-contain"
          />
          <span className="font-display text-[15px] font-semibold tracking-wide text-nova-text">
            NOVA
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={clsx(
                  "relative text-[13px] font-medium transition-colors",
                  isActive ? "text-nova-text" : "text-nova-textMuted hover:text-nova-text"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-nova-cyan"
                    transition={{ duration: 0.3, ease: EASE_STANDARD }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#hero-cta"
            className="hidden rounded-full border border-nova-border px-4 py-2 text-[13px] font-medium text-nova-text transition-colors hover:border-nova-cyan/50 hover:text-nova-cyan md:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-nova-border text-nova-text transition-colors hover:border-nova-cyan/50 hover:text-nova-cyan md:hidden"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
        activeId={activeId}
      />
    </motion.header>
  );
}
