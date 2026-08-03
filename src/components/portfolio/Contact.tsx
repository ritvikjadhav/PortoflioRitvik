import { useState, type FormEvent } from "react";
import { Check, Copy, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const EMAIL = "hello@ritvikjadhav.dev";
export const GITHUB = "https://github.com/ritvikjadhav";
export const LINKEDIN = "https://linkedin.com/in/ritvikjadhav";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-cyan/60 focus:shadow-[0_0_24px_-8px_var(--cyan)]";

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setValues({ name: "", email: "", message: "" });
    toast.success("Message sent!", {
      description: "Thanks for reaching out — I'll get back to you within 24 hours.",
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy it manually.");
    }
  };

  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 — Contact"
          title="Let's build something."
          subtitle="Have a project, a role or an idea worth chasing? My inbox is always open."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    value={values.name}
                    maxLength={100}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={fieldClass}
                  />
                  {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    maxLength={255}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={fieldClass}
                  />
                  {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={1000}
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className={`${fieldClass} resize-none`}
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-ring hover:brightness-110 disabled:opacity-60"
              >
                {sending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Reveal>

          <div className="grid content-start gap-4">
            <Reveal delay={90}>
              <button
                onClick={copyEmail}
                className="glass glass-hover flex w-full items-center gap-4 rounded-2xl p-5 text-left"
              >
                <span className="rounded-xl border border-cyan/30 bg-cyan/10 p-2.5">
                  <Mail className="h-4 w-4 text-cyan" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-foreground">{EMAIL}</span>
                  <span className="text-xs text-muted-foreground">Click to copy</span>
                </span>
                {copied ? (
                  <Check className="h-4 w-4 text-emerald" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </Reveal>

            <Reveal delay={160}>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer noopener"
                className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                  <Github className="h-4 w-4 text-foreground" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">GitHub</span>
                  <span className="text-xs text-muted-foreground">@ritvikjadhav</span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={230}>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer noopener"
                className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="rounded-xl border border-indigo/30 bg-indigo/10 p-2.5">
                  <Linkedin className="h-4 w-4 text-indigo" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">LinkedIn</span>
                  <span className="text-xs text-muted-foreground">Let&apos;s connect</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
