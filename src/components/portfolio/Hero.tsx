import { useEffect, useState } from "react";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

const lines = [
  { text: "$ npx init-engineer --stack backend", cls: "text-muted-foreground" },
  { text: "✓ runtime     node.js · express · postgresql", cls: "text-cyan" },
  { text: "✓ realtime    websockets · webrtc · redis", cls: "text-indigo" },
  { text: "✓ languages   typescript · python · java · sql", cls: "text-emerald" },
  { text: "→ status: open for backend & engineering roles", cls: "text-foreground" },
];

const badges = ["TypeScript", "Node.js", "PostgreSQL", "Supabase", "WebSockets", "WebRTC", "Express"];

export function Hero() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 520);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <section id="top" className="relative px-4 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">Hi, I&apos;m Ritvik Jadhav</span>
              <span className="text-gradient mt-2 block">
                Crafting Low-Latency Backend Systems &amp; Real-Time Interfaces.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Software engineer building scalable backend architectures, real-time systems, and
              high-performance web applications with clean, production-ready code.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-ring hover:brightness-110"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-cyan/50"
              >
                <FileText className="h-4 w-4 text-cyan" />
                Download CV
              </a>

              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-indigo/50"
              >
                <Mail className="h-4 w-4 text-indigo" />
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="glass glass-hover rounded-3xl p-1.5">
            <div className="rounded-[1.15rem] bg-black/40 p-4 font-mono text-[12.5px] leading-relaxed sm:text-sm">
              <div className="mb-4 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald/70" />
                <span className="ml-3 text-[11px] text-muted-foreground">ritvik@portfolio: ~</span>
              </div>
              {lines.slice(0, shown).map((l) => (
                <div key={l.text} className={`${l.cls} animate-in fade-in slide-in-from-left-2`}>
                  {l.text}
                </div>
              ))}
              <span className="inline-block h-4 w-2 animate-caret bg-cyan align-middle" />
            </div>
            <div className="flex flex-wrap gap-2 p-4">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-cyan/50 hover:text-foreground hover:shadow-[0_0_18px_-4px_var(--cyan)]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
