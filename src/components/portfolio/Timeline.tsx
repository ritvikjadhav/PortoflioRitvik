import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { timeline } from "./data";

export function Timeline() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 — Experience"
          title="Education & milestones."
          subtitle="A mix of formal IT education and self-taught engineering, one shipped project at a time."
        />

        <div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-5 sm:pl-12">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute top-2 -left-[2.3rem] h-3 w-3 rounded-full bg-cyan shadow-[0_0_16px_3px_var(--cyan)] sm:-left-[3.4rem]" />
                <span className="font-mono text-xs tracking-wider text-cyan">{item.period}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-indigo">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
