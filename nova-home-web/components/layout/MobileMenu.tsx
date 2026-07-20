"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { EASE_STANDARD } from "@/lib/motion";

type NavLink = { href: string; label: string };

export function MobileMenu({
  open,
  onClose,
  links,
  activeId,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  activeId: string | null;
}) {
  // Close on Escape, lock body scroll while open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-nova-bg/80 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: EASE_STANDARD }}
            className="glass fixed inset-x-4 top-[76px] z-50 rounded-2xl p-2 shadow-card md:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {links.map((link) => {
                  const isActive = activeId === link.href.replace("#", "");
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={clsx(
                          "block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors",
                          isActive
                            ? "bg-white/[0.04] text-nova-cyan"
                            : "text-nova-textMuted hover:bg-white/[0.03] hover:text-nova-text"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
