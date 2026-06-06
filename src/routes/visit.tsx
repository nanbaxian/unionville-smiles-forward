import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { PracticeAddressLink } from "@/components/site/AddressLink";
import { PRACTICE_ADDRESS, PRACTICE_MAP_EMBED_URL, PRACTICE_MAPS_URL } from "@/lib/practice-info";
import { breadcrumbSchema, ldJsonScript } from "@/lib/schema";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Office Hours, Directions & Parking" },
      {
        name: "description",
        content:
          "Office hours, directions and payment policies for Dr. J. David Dudley & Associates at 4359 Highway 7, Unionville, ON.",
      },
      { property: "og:title", content: "Visit Us — Unionville Dentist" },
      { property: "og:description", content: "Hours, directions, parking and payment options." },
    ],
    scripts: [
      ldJsonScript(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Visit", path: "/visit" },
        ]),
      ),
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <>
      <PageHeader
        eyebrow="Office information & directions"
        title={<>Finding us is easy.</>}
        intro="We're located on Highway 7 in the heart of Unionville, with on-site parking and full wheelchair accessibility."
      />

      <section className="container-prose grid lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl tracking-tight">Office hours</h2>
          <dl className="mt-5 space-y-3 text-sm">
            {[
              ["Monday – Tuesday", "8:00 am – 7:00 pm"],
              ["Wednesday – Thursday", "8:00 am – 5:00 pm"],
              ["Friday", "7:30 am – 1:00 pm"],
              ["Saturday – Sunday", "Closed"],
            ].map(([d, h]) => (
              <div key={d} className="flex justify-between border-b border-border/60 pb-2">
                <dt className="text-muted-foreground">{d}</dt>
                <dd className="font-medium text-foreground">{h}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm text-muted-foreground">
            Outside our regular business hours, please leave a message at the office.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl tracking-tight">Address & parking</h2>
          <PracticeAddressLink className="mt-5 block text-foreground hover:text-primary" />
          <p className="mt-1 text-foreground">{PRACTICE_ADDRESS.country}</p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li>· On-site parking available</li>
            <li>· Wheelchair accessible entrance</li>
            <li>· Steps from Unionville Main Street</li>
          </ul>
          <a
            href={PRACTICE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      <section className="container-prose mt-10">
        <div className="rounded-3xl overflow-hidden border border-border aspect-[16/8]">
          <iframe
            title="Map to Dr. J. David Dudley & Associates"
            src={PRACTICE_MAP_EMBED_URL}
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="container-prose mt-16 grid lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl tracking-tight">Payment policies</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            We assist you with your dental insurance claim — please bring your insurance card when
            you visit. In addition, we accept <strong>Visa, Mastercard, Debit Cards, Cash</strong>,
            and CDCP.
          </p>
        </div>
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between">
          <h2 className="font-display text-2xl">Ready to book?</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:9054775825"
              className="rounded-full bg-[var(--clay)] px-5 py-2.5 text-sm font-medium"
            >
              (905) 477-5825
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
            >
              Use the contact form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
