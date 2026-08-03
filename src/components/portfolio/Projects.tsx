import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { filters, projects } from "./data";

const accentVar: Record<string, string> = {
  cyan: "var(--cyan)",
  indigo: "var(--indigo)",
  emerald: "var(--emerald)",
};

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const list = projects.filter((p) => filter === "All" || p.categories.includes(filter));

  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've shipped."
          subtitle="Selected work spanning luxury commerce, realtime messaging and decentralized networking."
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "border-cyan/50 bg-cyan/10 text-foreground shadow-[0_0_22px_-6px_var(--cyan)]"
                    : "border-white/10 text-muted-foreground hover:border-white/25 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-3xl p-7">
                <div
                  className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: accentVar[p.accent] }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm" style={{ color: accentVar[p.accent] }}>
                      {p.tagline}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-cyan"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
