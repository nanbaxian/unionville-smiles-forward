import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Practice — Dr. J. David Dudley & Associates" },
      { name: "description", content: "Modern technology and gentle expertise in Unionville since 1980. Learn about our family dental practice on Highway 7." },
      { property: "og:title", content: "About Our Practice — Dr. J. David Dudley & Associates" },
      { property: "og:description", content: "Modern technology and gentle expertise in Unionville since 1980." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the practice"
        title={<>Healthy teeth, for a healthy smile.</>}
        intro="Modern technology, regular training, and an eye on current developments in dentistry research and health education — we do everything to ensure your dental health is our priority."
      />
      <Prose>
        <p>
          Our relaxed atmosphere and friendly service go hand in hand — naturally. Our expertise will meet your
          dental needs including <strong>self-care and lifestyle recommendations.</strong>
        </p>
        <p>
          For more than four decades, families across Unionville and Markham have trusted us with their smiles.
          We see grandparents, parents, and children all in the same week — and we wouldn't have it any other way.
        </p>
      </Prose>

      <section className="container-prose mt-20 grid md:grid-cols-3 gap-6">
        {[
          ["1980", "The doors opened on Highway 7 with Dr. David Dudley."],
          ["1988", "Dr. Meling Lee joined the practice."],
          ["Today", "A modern, friendly clinic serving four generations of patients."],
        ].map(([k, v]) => (
          <div key={k} className="rounded-3xl border border-border bg-card p-7">
            <div className="font-display text-4xl text-primary">{k}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v}</p>
          </div>
        ))}
      </section>
    </>
  );
}
