import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg480 from "@/assets/unionvilledental/hero-couple-smile-480.webp";
import heroImg720 from "@/assets/unionvilledental/hero-couple-smile-720.webp";
import heroImg900 from "@/assets/unionvilledental/hero-couple-smile-900.webp";
import smileImg from "@/assets/unionvilledental/teaser_2571855904.webp";
import teamImg from "@/assets/unionvilledental/4112594913.webp";
import cleaningImg from "@/assets/photos/services/dental-cleaning-closeup.webp";
import xrayImg from "@/assets/photos/technology/dental-xray-review.webp";
import implantImg from "@/assets/photos/services/implant-model.webp";
import { ArrowUpRight, Calendar, Clock, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { PracticeAddressLink } from "@/components/site/AddressLink";
import {
  breadcrumbSchema,
  faqPageSchema,
  languageAlternateLinks,
  ldJsonScript,
} from "@/lib/schema";

const homeFaqs = [
  {
    question: "Does Dr. J. David Dudley & Associates accept new patients?",
    answer:
      "Yes. New patients can call the Unionville office at (905) 477-5825 to request an appointment and ask what to bring for a first visit.",
  },
  {
    question: "Does the office accept CDCP?",
    answer:
      "Yes. The office accepts the Canadian Dental Care Program. Patients should bring CDCP coverage information, government ID, and any private insurance details.",
  },
  {
    question: "Where is the dental office located?",
    answer:
      "The office is located at 4359 Highway #7, Unionville, ON L3R 1M1, serving Unionville and nearby Markham families.",
  },
  {
    question: "Is Chinese-language help available?",
    answer:
      "A Chinese information page is available for local Markham and Unionville patients. Patients can call the office to ask about language support before booking.",
  },
  {
    question: "How can patients verify Ontario dental registration or make a concern known?",
    answer:
      "Patients can use the Royal College of Dental Surgeons of Ontario public register to verify Ontario dentists and can review the RCDSO complaints and investigations process for concerns.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unionville Family Dentist — Dr. J. David Dudley & Associates" },
      {
        name: "description",
        content:
          "A trusted Unionville dental practice on Highway 7 since 1980. Family, cosmetic, preventative and restorative dentistry. CDCP accepted.",
      },
      {
        property: "og:title",
        content: "Unionville Family Dentist — Dr. J. David Dudley & Associates",
      },
      {
        property: "og:description",
        content: "Trusted family dentistry in Unionville since 1980. New patients welcome.",
      },
    ],
    links: languageAlternateLinks(),
    scripts: [
      {
        type: "application/ld+json",
        ...ldJsonScript(faqPageSchema(homeFaqs, "/")),
      },
      {
        ...ldJsonScript(breadcrumbSchema([{ name: "Home", path: "/" }])),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-prose pt-12 md:pt-18 lg:pt-16 pb-16 md:pb-20 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(480px,1.08fr)_minmax(360px,0.92fr)] lg:gap-10 xl:grid-cols-[minmax(560px,1.1fr)_minmax(420px,0.9fr)] xl:gap-14 items-center">
          <div className="max-w-[44rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay)]" /> On Highway 7 since 1980
            </div>
            <h1 className="mt-6 max-w-[12ch] sm:max-w-[14ch] md:max-w-[15ch] lg:max-w-[16ch] xl:max-w-[17ch] font-display text-[2.7rem] leading-[1.02] sm:text-[4.1rem] md:text-[4.7rem] lg:text-[4.05rem] lg:leading-[1.03] xl:text-[4.85rem] tracking-tight text-foreground">
              Family dentistry in Unionville for long-term oral health.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Preventive, restorative, and cosmetic care for children, adults, and seniors with Dr.
              J. David Dudley & Associates.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 sm:px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
              >
                Book an appointment <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-foreground hover:text-primary"
              >
                Explore our services
              </Link>
              <Link
                to="/questions"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-foreground hover:text-primary"
              >
                Common dental questions
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl">
              {[
                ["45+", "Years in Unionville"],
                ["CDCP", "Proudly accepted"],
                ["7 days", "To get you in"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-2xl sm:text-3xl text-foreground">{k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative lg:self-center lg:justify-self-end w-full max-w-[32rem] xl:max-w-[34rem]">
            <img
              src={heroImg720}
              srcSet={`${heroImg480} 480w, ${heroImg720} 720w, ${heroImg900} 900w`}
              sizes="(min-width: 1152px) 540px, (min-width: 1024px) 47vw, calc(100vw - 3rem)"
              alt="Smiling couple showing healthy teeth"
              width={720}
              height={616}
              decoding="async"
              fetchPriority="high"
              className="rounded-3xl aspect-[0.96/1] w-full object-cover object-center shadow-2xl shadow-primary/10"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card border border-border p-4 shadow-xl max-w-[16rem]">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> Open today
              </div>
              <div className="mt-1 font-display text-xl">8:00 — 7:00</div>
              <a
                href="tel:9054775825"
                className="mt-2 inline-block text-sm font-medium text-primary"
              >
                (905) 477-5825 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GEO ANSWER ENTRY */}
      <section className="container-prose pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-start border-y border-border py-14">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Choosing dental care locally
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">
              Looking for a dentist near Unionville or Markham?
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/85">
              Our office is located on Highway 7 with parking, wheelchair access, evening
              appointments on select days, and care for adults, seniors and children.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/questions/choose-family-dentist-unionville"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Choosing a Unionville dentist
              </Link>
              <Link
                to="/questions/cdcp-dentist-unionville"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
              >
                CDCP dentist questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-card/60">
        <div className="container-prose py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {[
            [ShieldCheck, "CDCP accepted", "New federal coverage"],
            [Sparkles, "Digital X-rays", "Current dental materials"],
            [Calendar, "Easy scheduling", "Evenings available"],
            [MapPin, "Wheelchair access", "On-site parking"],
          ].map(([Icon, title, sub]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={title as string} className="flex gap-3">
                <I className="h-5 w-5 text-[var(--clay)] mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-foreground">{title as string}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{sub as string}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROMISE / ABOUT */}
      <section className="container-prose py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <img
            src={smileImg}
            alt="Patient receiving dental care from Dr. J. David Dudley & Associates"
            width={1200}
            height={1400}
            loading="lazy"
            className="rounded-3xl w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Our promise
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            We take time to explain your options.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Before treatment begins, we explain what we see, what your options are, and what to
            expect next.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              ["Family & cosmetic", "Care that grows with every member of your family."],
              ["Preventative focus", "We treat the cause, not just the symptom."],
              ["Same dentists, decades on", "Continuity that builds real trust."],
              ["Self-care guidance", "Nutritional and lifestyle advice included."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-medium text-foreground">{t}</div>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Read about the practice <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container-prose pb-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              What we do
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
              Dental care for children, adults and seniors.
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-medium text-primary inline-flex items-center gap-1"
          >
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            [
              "Family dentistry",
              "Comprehensive new-patient exams, hygiene, and preventative care.",
            ],
            [
              "Cosmetic dentistry",
              "Porcelain veneers, tooth whitening, and natural-looking restorations.",
            ],
            ["Crowns, bridges & implants", "Restoring strength and confidence to your smile."],
            ["TMJ & night guards", "Custom-fitted relief for jaw pain and grinding."],
            ["Endodontics & oral surgery", "Skilled, gentle care when you need it most."],
            [
              "Pediatric & orthodontics",
              "Healthy habits and straight smiles for younger patients.",
            ],
          ].map(([t, d], i) => (
            <article
              key={t}
              className="group rounded-3xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition"
            >
              <div className="text-xs text-muted-foreground tabular-nums">0{i + 1}</div>
              <h3 className="mt-3 font-display text-2xl tracking-tight text-foreground">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              image: cleaningImg,
              title: "Dental cleaning and exam",
              copy: "Preventive hygiene visits, periodontal assessment and clear next steps.",
              href: "/questions/first-dental-visit-unionville",
            },
            {
              image: xrayImg,
              title: "Diagnosis and planning",
              copy: "Exams, X-rays and treatment discussions that help patients understand options.",
              href: "/new-patients",
            },
            {
              image: implantImg,
              title: "Restorative care",
              copy: "Crowns, bridges and implants for strength, comfort and long-term function.",
              href: "/services",
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <img
                src={item.image}
                alt={`${item.title} at Dr. J. David Dudley & Associates in Unionville`}
                width={1600}
                height={1067}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="grid gap-8 border-y border-border py-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Patient answers
            </div>
            <h2 className="mt-3 font-display text-4xl tracking-tight">
              Quick answers before you call.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-5 md:grid-cols-2">
              {homeFaqs.map((faq) => (
                <article key={faq.question}>
                  <h3 className="font-medium text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/zh"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
              >
                中文信息
              </Link>
              <Link
                to="/fr"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
              >
                Information en français
              </Link>
              <Link
                to="/patient-rights"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Patient rights and registration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CDCP banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.2em] opacity-70">
              Canadian Dental Care Program
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight">
              CDCP accepted at our Unionville office.
            </h2>
            <p className="mt-5 text-lg opacity-85 max-w-2xl leading-relaxed">
              Bring your CDCP coverage information, government ID, and any private insurance details
              you may have. We can help you understand coverage questions before treatment begins.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/cdcp"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-primary hover:bg-white/90"
            >
              Learn about CDCP <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/new-patients"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10"
            >
              I'm a new patient
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM tease */}
      <section className="container-prose py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The people</div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight">
            A team you'll see for years.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Dr. Dudley has practiced here since 1980. Dr. Meling Lee joined in 1988. Our hygienists
            and assistants have grown with families across Markham — many patients have been with us
            their entire adult lives.
          </p>
          <Link
            to="/team"
            className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Meet the team <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <img
            src={teamImg}
            alt="The Dudley & Associates dental team"
            width={1600}
            height={1100}
            loading="lazy"
            className="rounded-3xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* VISIT */}
      <section className="container-prose pb-24">
        <div className="rounded-[2rem] bg-card border border-border p-8 md:p-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Come see us in Unionville.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
              We're on Highway 7, with on-site parking and wheelchair access. Step in any time — or
              call ahead and we'll have everything ready for you.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Address
                </div>
                <PracticeAddressLink className="mt-2 block text-foreground hover:text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                <p className="mt-2 text-foreground">
                  Mon–Tue · 8am – 7pm
                  <br />
                  Wed–Thu · 8am – 5pm
                  <br />
                  Fri · 7:30am – 1pm
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            <a
              href="tel:9054775825"
              className="rounded-2xl bg-primary text-primary-foreground p-6 hover:bg-primary/90 transition"
            >
              <div className="text-xs uppercase tracking-widest opacity-70">Call us</div>
              <div className="mt-1 font-display text-3xl">(905) 477-5825</div>
            </a>
            <Link
              to="/visit"
              className="rounded-2xl border border-border p-6 hover:border-primary/40"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Directions
              </div>
              <div className="mt-1 font-display text-2xl text-foreground">Find the office →</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
