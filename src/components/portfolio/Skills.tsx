import { useState } from "react";
import { Code2, Database, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "./data";

const tabs = [
  { key: "Frontend", icon: Code2, color: "cyan" },
  { key: "Backend & Realtime", icon: Database, color: "indigo" },
  { key: "Tools & DevOps", icon: Wrench, color: "emerald" },
] as const;

export function Skills() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("Frontend");
  const items = skillGroups[active];

  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Skills"
          title="The stack I build with."
          subtitle="A categorised look at the tools I reach for daily — from pixel-level interfaces to realtime data layers."
        />

        <Reveal>
          <div className="glass inline-flex flex-wrap gap-1 rounded-2xl p-1.5">
            {tabs.map((t) => {
              const Icon = t.icon;
              const on = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    on
                      ? "bg-white/[0.07] text-foreground shadow-[0_0_24px_-8px_var(--cyan)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${on ? "text-cyan" : ""}`} />
                  {t.key}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((skill, i) => (
            <div
              key={skill}
              style={{ animationDelay: `${i * 60}ms` }}
              className="glass glass-hover animate-in fade-in slide-in-from-bottom-3 group rounded-2xl p-5 duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-foreground">{skill}</span>
                <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_14px_2px_var(--cyan)] transition-transform group-hover:scale-150" />
              </div>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${72 + ((i * 7) % 26)}%`,
                    background: "linear-gradient(90deg, var(--cyan), var(--indigo))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
