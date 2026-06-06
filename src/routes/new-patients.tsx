import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { FileText, Clock, ListChecks } from "lucide-react";
import { absoluteUrl, breadcrumbSchema, ldJsonScript } from "@/lib/schema";

export const Route = createFileRoute("/new-patients")({
  head: () => ({
    meta: [
      { title: "New Patient Information — Unionville Dentist" },
      {
        name: "description",
        content:
          "Everything you need to know before your first visit to Dr. J. David Dudley & Associates in Unionville. Forms, what to expect, and your first appointment.",
      },
      { property: "og:title", content: "New Patient Information — Unionville Dentist" },
      {
        property: "og:description",
        content: "What to expect on your first visit, plus our new-patient intake form.",
      },
    ],
    scripts: [
      ldJsonScript({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": absoluteUrl("/new-patients#webpage"),
        name: "New Patient Information",
        url: absoluteUrl("/new-patients"),
        about: {
          "@id": absoluteUrl("/#dentist"),
        },
        mainEntity: {
          "@type": "MedicalClinic",
          "@id": absoluteUrl("/#dentist"),
          name: "Dr. J. David Dudley & Associates",
          medicalSpecialty: "Dentistry",
        },
        audience: {
          "@type": "Patient",
        },
      }),
      ldJsonScript(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "New Patients", path: "/new-patients" },
        ]),
      ),
    ],
  }),
  component: NewPatients,
});

function NewPatients() {
  return (
    <>
      <PageHeader
        eyebrow="New patients"
        title={<>Your first visit.</>}
        intro="Here is what to bring, when to arrive, and what usually happens during a first appointment at our Unionville office."
      />

      <section className="container-prose grid md:grid-cols-3 gap-5">
        {[
          [
            Clock,
            "Arrive 15 minutes early",
            "So your new-patient form can be completed before your appointment time.",
          ],
          [
            ListChecks,
            "Bring your medications",
            "A list of all current prescriptions and over-the-counter medications.",
          ],
          [
            FileText,
            "Review our protocols",
            "A quick look at our office policies and privacy protocol.",
          ],
        ].map(([Icon, t, d]) => {
          const I = Icon as typeof Clock;
          return (
            <div key={t as string} className="rounded-3xl border border-border bg-card p-7">
              <I className="h-5 w-5 text-[var(--clay)]" />
              <h3 className="mt-4 font-display text-2xl tracking-tight">{t as string}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d as string}</p>
            </div>
          );
        })}
      </section>

      <section className="container-prose mt-16 rounded-3xl bg-card border border-border p-8 md:p-12">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              New patient intake form
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
              Please fill in the form and bring it with you to your appointment. It saves time at
              the front desk and helps us focus on you from the moment you sit down.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="/forms/new-patient-information.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <FileText className="h-4 w-4" /> Download form (PDF · 2.4 MB)
            </a>
          </div>
        </div>
      </section>

      <section className="container-prose mt-24 grid lg:grid-cols-2 gap-8">
        <article className="rounded-3xl border border-border bg-card p-8">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Approx. 1 hour
          </div>
          <h2 className="mt-3 font-display text-3xl tracking-tight">Dental hygiene appointment</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Your initial one-hour appointment includes:
          </p>
          <ol className="mt-4 space-y-2 list-decimal pl-5 text-foreground/85 text-sm leading-relaxed">
            <li>
              Full periodontal assessment of your gums, surrounding tissues and supporting bone
            </li>
            <li>Full dental cleaning</li>
            <li>An individualized dental hygiene treatment plan — discussed with you</li>
            <li>Determination if periodontal therapy such as PERIOWAVE is needed</li>
            <li>Nutritional and oral-systemic health information</li>
          </ol>
        </article>

        <article className="rounded-3xl border border-border bg-card p-8">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Approx. 30 minutes
          </div>
          <h2 className="mt-3 font-display text-3xl tracking-tight">Dental examination</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The dentist examines all teeth and oral cavity health — including oral cancer screening
            and a TMJ (jaw joint) assessment. X-rays may be taken and study models discussed. An
            individualized treatment plan is then developed and reviewed together.
          </p>
          <p className="mt-4 italic text-foreground/80">
            "For your convenience the dental exam and dental hygiene appointment may be booked
            together."
          </p>
        </article>
      </section>

      <section className="container-prose mt-16 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Request your first appointment
        </Link>
      </section>
    </>
  );
}
