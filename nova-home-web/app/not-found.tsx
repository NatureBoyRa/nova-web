import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-nova-bg px-6 text-center">
      <span className="eyebrow">404</span>
      <h1 className="font-display text-3xl font-semibold text-nova-text md:text-4xl">
        This module isn&apos;t registered.
      </h1>
      <p className="max-w-sm text-sm text-nova-textMuted">
        The page you&apos;re looking for doesn&apos;t exist, or hasn&apos;t
        been connected to Nova Core yet.
      </p>
      <Button href="/">Back to home</Button>
    </main>
  );
}
