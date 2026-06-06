import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import cleaningImg from "@/assets/photos/services/dental-cleaning-closeup.webp";
import alignerImg from "@/assets/photos/services/orthodontic-aligner.webp";
import implantImg from "@/assets/photos/services/implant-model.webp";
import xrayImg from "@/assets/photos/technology/dental-xray-review.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Dr. J. David Dudley & Associates" },
      {
        name: "description",
        content:
          "Preventive, restorative, cosmetic, family, night guard and TMJ-related dental services at a Unionville dental office on Highway 7.",
      },
      { property: "og:title", content: "Our Services — Unionville Dentist" },
      {
        property: "og:description",
        content:
          "Dental services for Unionville and Markham-area patients, including cleanings, exams, restorations, cosmetic care and night guards.",
      },
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
    title: "Care by patient need",
    items: [
      [
        "Preventive care",
        "Cleanings, exams, gum assessment, oral cancer screening and home-care guidance.",
      ],
      [
        "Restorative care",
        "Fillings, crowns, bridges and implant restorations to repair damaged or missing teeth.",
      ],
      [
        "Cosmetic dentistry",
        "Whitening, veneers and tooth-coloured restorations for patients who want to improve the appearance of their smile.",
      ],
      ["Children and families", "Dental visits for children, teens, adults and seniors."],
      [
        "Night guards and TMJ concerns",
        "Custom guards for grinding, clenching and jaw discomfort.",
      ],
    ],
  },
  {
    title: "Additional services",
    items: [
      [
        "Comprehensive new-patient exams",
        "A review of teeth, gums, oral tissues and X-rays when needed.",
      ],
      ["Endodontic treatments", "Root canal treatment when a tooth can be treated and maintained."],
      ["Oral surgery", "Dental surgery procedures with instructions for follow-up care."],
      [
        "Pediatric & orthodontic questions",
        "Guidance for younger patients and alignment concerns.",
      ],
      ["Custom sport mouth guards", "Made-to-fit protection for active lifestyles."],
      ["Nutritional consultations", "Food and home-care guidance related to oral health."],
    ],
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our range of treatments"
        title={<>Dental services for Unionville families.</>}
        intro="We provide preventive, restorative, cosmetic and family dental care from our Highway 7 office. If you are unsure where to start, call the office and we can help you book the right type of visit."
      />

      <section className="container-prose grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Choosing the right service
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">
            Not sure what type of appointment you need?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Call us and we can help you book the right visit. Some patients need a cleaning and
            exam; others need a cosmetic, orthodontic or restorative consultation.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {[
            [cleaningImg, "Cleaning & exams", "Routine hygiene, gum assessment and prevention."],
            [xrayImg, "Diagnosis", "X-rays and exams to understand what is happening first."],
            [
              implantImg,
              "Restorative care",
              "Crowns, bridges and implants for damaged or missing teeth.",
            ],
            [
              alignerImg,
              "Orthodontic questions",
              "Guidance for alignment concerns and younger patients.",
            ],
          ].map(([image, title, copy]) => (
            <article
              key={title as string}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={image as string}
                alt={`${title} at a Unionville dental office`}
                width={1600}
                height={1067}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-xl tracking-tight">{title as string}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {copy as string}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-prose mt-16">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight">
          Which dental service should I ask about?
        </h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/60 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Patient question</th>
                <th className="px-4 py-3 font-medium">Likely starting point</th>
                <th className="px-4 py-3 font-medium">Helpful page</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "I have not seen a dentist in a while.",
                  "New patient exam and hygiene assessment",
                  "/questions/first-dental-visit-unionville",
                ],
                [
                  "I want a brighter smile.",
                  "Cosmetic consultation, whitening or veneers discussion",
                  "/services",
                ],
                [
                  "I may need a tooth replaced.",
                  "Restorative exam for crowns, bridges or implants",
                  "/services",
                ],
                [
                  "I have CDCP coverage.",
                  "Coverage-aware appointment planning",
                  "/questions/cdcp-dentist-unionville",
                ],
              ].map(([question, start, href]) => (
                <tr key={question} className="border-t border-border align-top">
                  <td className="px-4 py-4 text-foreground">{question}</td>
                  <td className="px-4 py-4 text-muted-foreground">{start}</td>
                  <td className="px-4 py-4">
                    <a href={href} className="font-medium text-primary">
                      Read more
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {groups.map((g) => (
        <section key={g.title} className="container-prose mt-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight border-b border-border pb-5">
            {g.title}
          </h2>
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
            <p className="mt-2 opacity-80">
              Call the office if you are unsure which appointment type to request.
            </p>
          </div>
          <a
            href="tel:9054775825"
            className="rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-medium hover:opacity-90"
          >
            Call (905) 477-5825
          </a>
        </div>
      </section>
    </>
  );
}
