import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/Section";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility | Dr. J. David Dudley & Associates" },
      {
        name: "description",
        content:
          "Accessibility information for Dr. J. David Dudley & Associates, a Unionville dental office on Highway 7.",
      },
      { property: "og:title", content: "Accessibility | Unionville Dental Office" },
      {
        property: "og:description",
        content: "Website and office accessibility information for Unionville dental patients.",
      },
    ],
  }),
  component: Accessibility,
});

function Accessibility() {
  return (
    <>
      <PageHeader
        eyebrow="Accessibility"
        title={<>Accessibility statement.</>}
        intro="We want patients to be able to use this website and visit the office with clear, practical access information."
      />

      <Prose>
        <p>
          Dr. J. David Dudley & Associates aims to keep this website readable, navigable, and usable
          across modern devices. The site uses semantic headings, descriptive link text, image alt
          text, visible focus states from browser controls, and responsive layouts.
        </p>

        <h2 className="font-display text-3xl tracking-tight text-foreground">Office access</h2>
        <p>
          The office is located at 4359 Highway 7 in Unionville. Parking is available, and the
          office is wheelchair accessible. If you need help planning a visit, call{" "}
          <a className="text-primary underline underline-offset-2" href="tel:9054775825">
            (905) 477-5825
          </a>{" "}
          before your appointment.
        </p>

        <h2 className="font-display text-3xl tracking-tight text-foreground">Website feedback</h2>
        <p>
          If you have trouble using a page, reading content, opening a form, or accessing a
          document, please contact the office and describe the page or file that caused difficulty.
          We will do our best to provide the information another way.
        </p>

        <h2 className="font-display text-3xl tracking-tight text-foreground">Request assistance</h2>
        <p>
          Use the{" "}
          <Link className="text-primary underline underline-offset-2" to="/contact">
            contact page
          </Link>{" "}
          or call the office for accessibility questions before your appointment.
        </p>
      </Prose>
    </>
  );
}
