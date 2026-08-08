import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { label: "Projects Built", value: 4, suffix: "+" },
  { label: "Technologies Mastered", value: 7, suffix: "" },
  { label: "Code Commits", value: 1400, suffix: "+" },
  { label: "Cups of Coffee", value: 890, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-gradient text-3xl font-extrabold sm:text-4xl">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 — About" title="Engineering with intent." />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="glass glass-hover space-y-5 rounded-3xl p-7 text-[15px] leading-relaxed text-muted-foreground sm:p-9">
              <p>
                I&apos;m a BSc Information Technology student who fell in love with the web the
                moment I realised a few lines of code could become something people actually{" "}
                <span className="text-foreground">feel</span>. Since then I&apos;ve been building
                interfaces that are fast, accessible and unapologetically detailed.
              </p>
              <p>
                My focus sits at the intersection of{" "}
                <span className="text-cyan">clean UI/UX design</span>,{" "}
                <span className="text-indigo">real-time networking</span> and modern
                frontend/backend architectures — React and TypeScript on the surface, Node,
                Supabase and PostgreSQL underneath, with WebSockets keeping everything in sync.
              </p>
              <p>
                I care about the small things: motion curves that feel physical, empty states that
                explain themselves, and query patterns that stay fast when the data grows.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="glass glass-hover flex h-full flex-col justify-center rounded-2xl p-6">
                  <Counter value={s.value} suffix={s.suffix} />
                  <span className="mt-2 text-xs font-medium tracking-wide text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
