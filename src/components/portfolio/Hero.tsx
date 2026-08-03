import { useEffect, useState } from "react";
import { ArrowRight, Mail, Terminal } from "lucide-react";
import { Reveal } from "./Reveal";

const lines = [
  { text: "$ npx create-experience --stack modern", cls: "text-muted-foreground" },
  { text: "✓ frontend    react · next · tailwind", cls: "text-cyan" },
  { text: "✓ realtime    supabase · websockets", cls: "text-indigo" },
  { text: "✓ deployed    vercel · edge runtime", cls: "text-emerald" },
  { text: "→ status: building something great", cls: "text-foreground" },
];

const badges = ["React", "TypeScript", "Supabase", "Node.js", "Tailwind", "PostgreSQL"];

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
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Terminal className="h-3.5 w-3.5 text-cyan" />
              BSc IT Student · Full-Stack Developer
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">Hi, I&apos;m Ritvik Jadhav</span>
              <span className="text-gradient mt-2 block">
                Crafting Scalable Web Experiences &amp; Immersive Interfaces.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              BSc IT student and passionate full-stack web developer — obsessed with clean UI/UX,
              real-time systems and interfaces that feel effortless.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-ring hover:brightness-110"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
