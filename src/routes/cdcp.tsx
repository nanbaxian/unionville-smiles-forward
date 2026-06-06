import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";

export const Route = createFileRoute("/cdcp")({
  head: () => ({
    meta: [
      { title: "Canadian Dental Care Program (CDCP) — Unionville Dentist" },
      {
        name: "description",
        content:
          "Our Unionville dental office accepts CDCP. Learn what to bring, how coverage questions are handled, and how to book a visit.",
      },
      {
        property: "og:title",
        content: "CDCP Accepted — Dr. J. David Dudley & Associates",
      },
      {
        property: "og:description",
        content: "CDCP information for patients booking dental care at our Unionville office.",
      },
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
                text: "Yes. Dr. J. David Dudley & Associates accepts CDCP coverage at our Unionville office.",
              },
            },
            {
              "@type": "Question",
              name: "What should I bring to a CDCP dental appointment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Please bring your CDCP coverage information, government ID, and any private insurance information you may have.",
              },
            },
            {
              "@type": "Question",
              name: "Does CDCP cover everything?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Coverage depends on your eligibility, the treatment needed, and CDCP rules. The office can help you understand what may be covered before treatment begins.",
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
        title={<>CDCP accepted at our Unionville office.</>}
        intro="Our office accepts patients covered by the Canadian Dental Care Program. Call before booking if you have questions about appointment type, documents or coverage."
      />

      <section className="container-prose grid md:grid-cols-3 gap-4">
        {[
          [
            "Bring coverage details",
            "CDCP information, government ID and private insurance details.",
          ],
          [
            "Ask before treatment",
            "Coverage can depend on eligibility, treatment needs and CDCP rules.",
          ],
          [
            "Book the right visit",
            "Call the office if you are unsure which appointment type you need.",
          ],
        ].map(([title, copy]) => (
          <div key={title} className="rounded-3xl border border-border bg-card p-8">
            <div className="font-display text-2xl text-primary">{title}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </section>

      <section className="container-prose mt-16 max-w-3xl space-y-5 text-foreground/85 leading-relaxed">
        <h2 className="font-display text-3xl tracking-tight text-foreground">Common questions</h2>
        <div>
          <h3 className="font-medium text-foreground">
            Do you accept the Canadian Dental Care Program (CDCP)?
          </h3>
          <p className="mt-1">
            Yes. Our Unionville office accepts patients covered by the Canadian Dental Care Program.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-foreground">What should I bring?</h3>
          <p className="mt-1">
            Please bring your CDCP coverage information, government ID, and any private insurance
            information you may have.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-foreground">Does CDCP cover everything?</h3>
          <p className="mt-1">
            Coverage depends on your eligibility, the treatment needed, and CDCP rules. We can help
            you understand what may be covered before treatment begins.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-foreground">How do I find out if I qualify?</h3>
          <p className="mt-1">
            Visit{" "}
            <a
              className="text-primary underline underline-offset-2"
              href="https://www.canada.ca/en/services/benefits/dental.html"
              target="_blank"
              rel="noopener"
            >
              canada.ca/dental
            </a>{" "}
            for eligibility and enrolment details.
          </p>
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
