import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Dr. J. David Dudley & Associates" },
      { name: "description", content: "Gentle family, cosmetic, restorative and preventative dental services in Unionville. From hygiene to implants — we cover the full range." },
      { property: "og:title", content: "Our Services — Unionville Dentist" },
      { property: "og:description", content: "Full-service gentle dentistry: hygiene, restorations, implants, cosmetic, TMJ and more." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Dr. J. David Dudley & Associates",
          medicalSpecialty: "Dentistry",
          availableService: [
            "Full Dental Hygiene Services",
            "Comprehensive New Patient Exams",
            "Restorative Treatments",
            "Crowns and Bridges",
            "Porcelain Veneers",
            "Tooth Implants",
            "TMJ Treatments",
            "Endodontic Treatments",
            "Oral Surgery",
            "Pediatric and Orthodontics",
            "Tooth Whitening",
            "Oral Cancer Screening",
            "Custom Sport Mouth Guards",
            "Night Guards",
          ].map((n) => ({ "@type": "MedicalProcedure", name: n })),
        }),
      },
    ],
  }),
  component: Services,
});

const groups = [
  {
    title: "Gentle dentistry",
    items: [
      ["Full dental hygiene services", "Cleanings, scaling, and personalized hygiene plans."],
      ["Comprehensive new-patient exams", "A complete picture of your oral health, head to toe."],
      ["Latest restorative treatments", "Modern materials, natural-looking results."],
      ["Crowns & bridges", "Durable restorations that feel like your own teeth."],
      ["Porcelain veneers", "Beautiful, conservative cosmetic transformations."],
      ["Tooth implants", "Long-term replacement that restores function and confidence."],
      ["TMJ treatments", "Relief for jaw pain, clicking, and tension headaches."],
      ["Endodontic treatments", "Comfortable root canal therapy when needed."],
      ["Oral surgery", "Skilled, careful procedures with thorough aftercare."],
      ["Pediatric & orthodontics", "Friendly care that builds lifelong healthy habits."],
      ["Tooth whitening", "Safe, professional whitening for a brighter smile."],
    ],
  },
  {
    title: "Preventative services",
    items: [
      ["Oral hygiene education", "Practical coaching for home care that actually works."],
      ["Oral cancer screening", "Routine screening at every recall visit."],
      ["Custom sport mouth guards", "Made-to-fit protection for active lifestyles."],
      ["Night guards", "Custom guards for grinding and clenching."],
      ["Nutritional consultations", "Food choices that support a healthy mouth."],
    ],
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our range of treatments"
        title={<>Gentle services — for every smile, at every stage.</>}
        intro="Our goal is to create and maintain a healthy mouth, with overall wellness advice for your optimal health. When you walk into our office, you're made to feel at ease — we give you our full attention and answer any questions you have along the way."
      />

      {groups.map((g) => (
        <section key={g.title} className="container-prose mt-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight border-b border-border pb-5">{g.title}</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {g.items.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl tracking-tight text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="container-prose mt-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-wrap justify-between items-center gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Have questions about a treatment?</h2>
            <p className="mt-2 opacity-80">We're happy to talk you through any procedure before you book.</p>
          </div>
          <a href="tel:9054775825" className="rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-medium hover:opacity-90">
            Call (905) 477-5825
          </a>
        </div>
      </section>
    </>
  );
}
