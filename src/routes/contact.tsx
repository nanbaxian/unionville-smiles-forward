import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/Section";
import { Phone, Mail, MapPin } from "lucide-react";
import { PRACTICE_ADDRESS, PRACTICE_MAPS_URL } from "@/lib/practice-info";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Dr. J. David Dudley & Associates" },
      {
        name: "description",
        content:
          "Contact our Unionville dental practice. Call (905) 477-5825, email drdudley@bellnet.ca, or send us a message.",
      },
      { property: "og:title", content: "Contact — Unionville Dentist" },
      {
        property: "og:description",
        content: "Call, email, or send a message to book your appointment.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={<>Contact our Unionville dental office.</>}
        intro="You can reach us by phone during consultation hours, by email, or by sending us a quick message — we typically respond the same business day."
      />

      <section className="container-prose grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4">
          <a
            href="tel:9054775825"
            className="block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition"
          >
            <Phone className="h-5 w-5 text-[var(--clay)]" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Phone
            </div>
            <div className="mt-1 font-display text-2xl">(905) 477-5825</div>
          </a>
          <a
            href="mailto:drdudley@bellnet.ca"
            className="block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition"
          >
            <Mail className="h-5 w-5 text-[var(--clay)]" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Email
            </div>
            <div className="mt-1 font-display text-2xl break-all">drdudley@bellnet.ca</div>
          </a>
          <a
            href={PRACTICE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition"
          >
            <MapPin className="h-5 w-5 text-[var(--clay)]" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Address
            </div>
            <div className="mt-1 text-foreground">
              {PRACTICE_ADDRESS.street}
              <br />
              {PRACTICE_ADDRESS.locality}, {PRACTICE_ADDRESS.region} {PRACTICE_ADDRESS.postalCode}
            </div>
          </a>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(
                "Appointment request — " + (data.get("name") || ""),
              );
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:drdudley@bellnet.ca?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Are you a new patient?" name="newpatient" placeholder="Yes / No" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                How can we help?
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Send message
            </button>
            {sent && (
              <p className="text-sm text-[var(--clay)]">
                Thanks — your mail app should now be open with your message ready to send.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}
