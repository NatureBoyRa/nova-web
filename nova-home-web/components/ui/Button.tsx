import Link from "next/link";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  icon?: LucideIcon;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  external,
  className,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 motion-safe:transition-transform focus-visible:outline-offset-4";

  const styles = {
    primary:
      "bg-nova-cyan text-[#03141A] shadow-[0_0_0_1px_rgba(0,229,255,0.4)_inset] hover:shadow-glow-cyan motion-safe:hover:-translate-y-0.5",
    ghost:
      "border border-nova-border text-nova-text hover:border-nova-borderStrong hover:bg-white/[0.03] motion-safe:hover:-translate-y-0.5",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={clsx(base, styles[variant], className)}
    >
      {children}
      {Icon && (
        <Icon
          size={16}
          aria-hidden="true"
          className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
