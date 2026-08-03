import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN } from "./Contact";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          © 2026 Ritvik Jadhav. Built with passion &amp; precision.
        </p>
        <div className="flex items-center gap-2">
          {[
            { href: GITHUB, icon: Github, label: "GitHub" },
            { href: LINKEDIN, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl border border-white/10 p-2.5 text-muted-foreground transition-all hover:border-cyan/50 hover:text-foreground hover:shadow-[0_0_20px_-6px_var(--cyan)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
