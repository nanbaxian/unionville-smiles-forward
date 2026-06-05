import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/cdcp")({
  head: () => ({
    meta: [
      { title: "Canadian Dental Care Program (CDCP) — Unionville Dentist" },
      { name: "description", content: "We proudly accept the Canadian Dental Care Program (CDCP) at our Unionville office. Experience, reliability and expertise for every covered patient." },
      { property: "og:title", content: "CDCP Accepted — Dr. J. David Dudley & Associates" },
      { property: "og:description", content: "Proudly accepting the Canadian Dental Care Program in Unionville." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you accept the Canadian Dental Care Program (CDCP)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Dr. J. David Dudley & Associates proudly accepts CDCP coverage at our Unionville office.",
              },
            },
            {
              "@type": "Question",
              name: "How do I find out if I qualify for CDCP?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Visit canada.ca/dental for eligibility and enrolment, or call our office at (905) 477-5825 and we'll help guide you.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: CDCP,
});

function CDCP() {
  return (
    <>
      <PageHeader
        eyebrow="Canadian Dental Care Program"
        title={<>Proudly accepting CDCP.</>}
        intro="We make every effort to provide our patients with the best value and quality service — including those covered by the new Canadian Dental Care Program."
      />

      <section className="container-prose grid md:grid-cols-3 gap-4">
        {["Experience", "Reliability", "Expertise"].map((w) => (
          <div key={w} className="rounded-3xl border border-border bg-card p-8 text-center">
            <div className="font-display text-4xl text-primary">{w}</div>
          </div>
        ))}
      </section>

      <section className="container-prose mt-16 max-w-3xl space-y-5 text-foreground/85 leading-relaxed">
        <h2 className="font-display text-3xl tracking-tight text-foreground">Common questions</h2>
        <div>
          <h3 className="font-medium text-foreground">Do you accept the Canadian Dental Care Program (CDCP)?</h3>
          <p className="mt-1">Yes — we proudly accept CDCP at our Unionville office.</p>
        </div>
        <div>
          <h3 className="font-medium text-foreground">How do I find out if I qualify?</h3>
          <p className="mt-1">
            Visit{" "}
            <a className="text-primary underline underline-offset-2" href="https://www.canada.ca/en/services/benefits/dental.html" target="_blank" rel="noopener">
              canada.ca/dental
            </a>{" "}
            for eligibility and enrolment, or call us at (905) 477-5825 and we'll guide you.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-foreground">Will I receive the same care as other patients?</h3>
          <p className="mt-1">Absolutely. Every patient receives the same gentle, thorough care that has defined our practice for over 40 years.</p>
        </div>
      </section>

      <section className="container-prose mt-16">
        <a
          href="https://www.canada.ca/en/services/benefits/dental.html"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Learn more about CDCP →
        </a>
      </section>
    </>
  );
}
