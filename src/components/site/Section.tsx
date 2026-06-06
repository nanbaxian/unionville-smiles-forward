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
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
          {eyebrow}
        </div>
      )}
      <h1 className="font-display max-w-4xl break-words text-4xl leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-7xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-2xl break-words text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </section>
  );
}

export function Prose({ children, bleed = false }: { children: ReactNode; bleed?: boolean }) {
  return (
    <div
      className={`${bleed ? "max-w-3xl" : "container-prose max-w-3xl"} space-y-5 text-base leading-relaxed text-foreground/85`}
    >
      {children}
    </div>
  );
}
