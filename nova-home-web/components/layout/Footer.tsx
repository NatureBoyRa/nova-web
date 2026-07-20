import Image from "next/image";
import Link from "next/link";
import { Github, FileText, Mail, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";

type FooterLink = { label: string; href: string; icon?: typeof FileText };

const linkGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Ecosystem", href: "#ecosystem" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#", icon: FileText },
      { label: "GitHub", href: "#", icon: Github },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#", icon: Shield },
      { label: "Contact", href: "#", icon: Mail },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-nova-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="#top" className="flex items-center gap-2.5">
              <Image
                src="/logo/nova-mark.png"
                alt="Nova Home logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-display text-[15px] font-semibold tracking-wide text-nova-text">
                NOVA
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-nova-textMuted">
              A personal AI smart home ecosystem — one core, every module.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="eyebrow">{group.title}</h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm text-nova-textMuted transition-colors hover:text-nova-text"
                    >
                      {link.icon && <link.icon size={13} />}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-nova-border pt-8 text-xs text-nova-textFaint md:flex-row">
          <span>&copy; {new Date().getFullYear()} Nova Home. All rights reserved.</span>
          <span>
            Built with <span className="text-nova-cyan">&hearts;</span> by Ragil
          </span>
        </div>
      </Container>
    </footer>
  );
}
