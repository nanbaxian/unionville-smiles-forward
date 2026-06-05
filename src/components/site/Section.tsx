import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="container-prose pt-16 pb-12 md:pt-24 md:pb-16">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">{eyebrow}</div>
      )}
      <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-foreground max-w-4xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
      )}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="container-prose max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85">
      {children}
    </div>
  );
}
