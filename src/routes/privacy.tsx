import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/Section";
import { breadcrumbSchema, ldJsonScript } from "@/lib/schema";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Dr. J. David Dudley & Associates" },
      {
        name: "description",
        content:
          "Privacy information for patients contacting Dr. J. David Dudley & Associates in Unionville.",
      },
      { property: "og:title", content: "Privacy Policy | Unionville Dental Office" },
      {
        property: "og:description",
        content: "How our Unionville dental office handles website inquiries and patient privacy.",
      },
    ],
    scripts: [
      ldJsonScript(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]),
      ),
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title={<>Privacy policy.</>}
        intro="This page explains how website inquiries and patient information are handled by Dr. J. David Dudley & Associates."
      />

      <Prose>
        <p>
          Dr. J. David Dudley & Associates respects patient privacy. Information shared through this
          website, by phone, by email, or during a visit is used to respond to inquiries, schedule
          appointments, provide dental care, and manage office administration.
        </p>

        <h2 className="font-display text-3xl tracking-tight text-foreground">Website inquiries</h2>
        <p>
          The contact form opens your email app and sends your message to the office email address.
          Please avoid sending urgent medical information or highly sensitive details by email. For
          time-sensitive dental concerns, call the office directly at{" "}
          <a className="text-primary underline underline-offset-2" href="tel:9054775825">
            (905) 477-5825
          </a>
          .
        </p>

        <h2 className="font-display text-3xl tracking-tight text-foreground">Patient records</h2>
        <p>
          Dental records are maintained for clinical care, billing, insurance coordination, and
          regulatory requirements. Access to patient information is limited to people who need it
          for care or office administration.
        </p>

        <h2 className="font-display text-3xl tracking-tight text-foreground">
          Third-party programs
        </h2>
        <p>
          If you use insurance or the Canadian Dental Care Plan, coverage information may need to be
          shared with the relevant administrator to confirm eligibility, submit claims, or
          coordinate benefits.
        </p>

        <h2 className="font-display text-3xl tracking-tight text-foreground">Questions</h2>
        <p>
          For privacy questions, contact the office through the{" "}
          <Link className="text-primary underline underline-offset-2" to="/contact">
            contact page
          </Link>{" "}
          or call during office hours.
        </p>
      </Prose>
    </>
  );
}
