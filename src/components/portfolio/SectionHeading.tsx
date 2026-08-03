import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 max-w-2xl">
        <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">{eyebrow}</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
