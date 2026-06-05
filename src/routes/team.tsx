import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Dr. J. David Dudley & Associates" },
      { name: "description", content: "Meet Dr. David Dudley, Dr. Meling Lee, and the dedicated hygienists and assistants of our Unionville dental team." },
      { property: "og:title", content: "Our Team — Dr. J. David Dudley & Associates" },
      { property: "og:description", content: "Meet the dentists and hygienists of our Unionville dental team." },
    ],
  }),
  component: Team,
});

const dentists = [
  {
    name: "Dr. David Dudley, DDS",
    role: "Founding Dentist · Family & Cosmetic Dentistry",
    bio: "A 1980 licensed graduate of The University of Western School of Dentistry, Dave has been practicing at Dr. J.D. Dudley & Associates for over 30 years. He specializes in family and cosmetic dentistry; his commitment to continuing education keeps him on top of every trend. Dave meets all his patients with a friendly and relaxed style that makes for an enjoyable dental experience.",
  },
  {
    name: "Dr. Meling Lee, DDS",
    role: "Associate Dentist",
    bio: "Dr. Lee graduated in 1988 from the University of Toronto, Faculty of Dentistry, and has since been an integral member of the practice. She strongly believes in putting patients at ease through her calm and gentle demeanor. Dedication to the oral health of her patients is of utmost importance to her.",
  },
];

function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Let us introduce ourselves"
        title={<>The hands behind every healthy smile.</>}
        intro="A healthy smile coupled with a healthy body lets our patients live to their full potential. Get to know the dentists, hygienists and assistants who make that possible."
      />

      <section className="container-prose grid lg:grid-cols-2 gap-8 mt-8">
        {dentists.map((d, i) => (
          <article key={d.name} className="rounded-3xl border border-border bg-card p-8">
            <div className="flex items-start gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-display text-2xl">
                {i === 0 ? "DD" : "ML"}
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-tight">{d.name}</h2>
                <div className="mt-1 text-sm text-[var(--clay)] font-medium">{d.role}</div>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">{d.bio}</p>
          </article>
        ))}
      </section>

      <section className="container-prose mt-24">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Hygienists & assistants</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">A few of our dedicated dental team members.</h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Our hygienists — Alison, Sheryl, Shannon — and certified dental assistants like Shamilee are the
          friendly faces you'll see most often. Many have been with the practice for over a decade.
        </p>
        <img src={teamImg} alt="The Dudley & Associates team in clinic" width={1600} height={1100} loading="lazy" className="mt-10 rounded-3xl w-full aspect-[16/9] object-cover" />
      </section>
    </>
  );
}
