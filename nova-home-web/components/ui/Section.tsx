import clsx from "clsx";
import { Container } from "@/components/ui/Container";

export function Section({
  id,
  children,
  className,
  containerClassName,
  bleed = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  /** Render children directly without the max-width Container (for full-bleed backgrounds). */
  bleed?: boolean;
}) {
  return (
    <section id={id} className={clsx("relative py-24 md:py-32", className)}>
      {bleed ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
