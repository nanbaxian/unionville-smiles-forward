import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { OFFICIAL_LINKS, PRACTICE_TRUST_SIGNALS } from "@/lib/practice-info";

export const Route = createFileRoute("/patient-rights")({
  head: () => ({
    meta: [
      { title: "Patient Rights and Registration | Unionville Dental Office" },
      {
        name: "description",
        content:
          "How patients can verify Ontario dental registration, review CDCP official information, request accessibility help, and contact Dr. J. David Dudley & Associates.",
      },
      {
        property: "og:title",
        content: "Patient Rights and Registration | Dr. J. David Dudley & Associates",
      },
      {
        property: "og:description",
        content:
          "Registration, patient rights, CDCP and accessibility references for Unionville dental patients.",
      },
    ],
  }),
  component: PatientRights,
});

function PatientRights() {
  return (
    <>
      <PageHeader
        eyebrow="Patient rights and registration"
        title={<>Patient verification and support.</>}
        intro="Patients should be able to verify dental registration, ask questions before treatment, and know where to go if they have a concern."
      />

      <section className="container-prose grid gap-4 md:grid-cols-3">
        {PRACTICE_TRUST_SIGNALS.map((signal) => (
          <article key={signal} className="rounded-3xl border border-border bg-card p-7">
            <p className="text-sm leading-relaxed text-foreground/85">{signal}</p>
          </article>
        ))}
      </section>

      <section className="container-prose mt-16 max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Ontario dental registration
          </h2>
          <p className="mt-3">
            The Royal College of Dental Surgeons of Ontario (RCDSO) regulates dentists in Ontario.
            Patients can use the RCDSO public register to verify a dentist's current registration
            status and practice information.
          </p>
          <p className="mt-3">
            This website does not publish registration numbers until the clinic has confirmed the
            exact public-register details to display. Patients can verify current information
            through the official RCDSO register.
          </p>
          <a
            href={OFFICIAL_LINKS.rcdsoFindDentist}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Search the RCDSO public register
          </a>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Questions or concerns
          </h2>
          <p className="mt-3">
            If you have a concern about your visit, start by contacting the office so the team can
            review the issue and respond. Patients can also review the RCDSO complaints and
            investigations process for Ontario dental care concerns.
          </p>
          <a
            href={OFFICIAL_LINKS.rcdsoComplaints}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
          >
            Review the RCDSO complaints process
          </a>
        </div>

        <div>
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            CDCP and accessibility
          </h2>
          <p className="mt-3">
            The office accepts CDCP. Program eligibility and coverage rules are maintained by the
            Government of Canada, so patients should use Canada.ca for official CDCP details.
          </p>
          <p className="mt-3">
            For website or office accessibility support, contact the clinic before your appointment
            or review the accessibility statement.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={OFFICIAL_LINKS.cdcp}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
            >
              Official CDCP information
            </a>
            <Link
              to="/accessibility"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
            >
              Accessibility statement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
