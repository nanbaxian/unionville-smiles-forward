import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle } from "lucide-react";
import type { QaItem } from "@/lib/qa-content";

export function QuestionPage({ item }: { item: QaItem }) {
  return (
    <>
      <article>
        <section className="container-prose pt-10 md:pt-16 pb-10">
          <Link
            to="/questions"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All questions
          </Link>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.category}
              </div>
              <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl">
                {item.title}
              </h1>
              <div className="mt-7 border-l-4 border-[var(--clay)] pl-5">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Direct answer
                </div>
                <p className="mt-3 text-xl leading-relaxed text-foreground">{item.directAnswer}</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src={item.image}
                alt={item.imageAlt}
                width={1200}
                height={900}
                className="w-full rounded-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/35">
          <div className="container-prose py-7">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">TL;DR</div>
            <ul className="mt-4 grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm leading-relaxed text-foreground/85">
              {item.tldr.map((point) => (
                <li key={point} className="flex gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--clay)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-prose py-14 md:py-18">
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-3">
              <nav className="sticky top-24 space-y-4 text-sm">
                <a href="#criteria" className="block text-muted-foreground hover:text-primary">
                  Comparison criteria
                </a>
                {item.sections.map((section) => (
                  <a
                    key={section.heading}
                    href={`#${section.heading.toLowerCase().replaceAll(" ", "-")}`}
                    className="block text-muted-foreground hover:text-primary"
                  >
                    {section.heading}
                  </a>
                ))}
                <a
                  href="#related-questions"
                  className="block text-muted-foreground hover:text-primary"
                >
                  Common questions
                </a>
              </nav>
            </aside>

            <div className="lg:col-span-9 space-y-14">
              <section id="criteria">
                <h2 className="font-display text-3xl tracking-tight">{item.tableTitle}</h2>
                <div className="mt-5 hidden overflow-hidden rounded-lg border border-border bg-card md:block">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/60 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-medium">Factor</th>
                        <th className="px-4 py-3 font-medium">Why it matters</th>
                        <th className="px-4 py-3 font-medium">Local signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.criteria.map((row) => (
                        <tr key={row.factor} className="border-t border-border align-top">
                          <td className="px-4 py-4 font-medium text-foreground">{row.factor}</td>
                          <td className="px-4 py-4 text-muted-foreground">{row.whyItMatters}</td>
                          <td className="px-4 py-4 text-foreground/80">{row.localSignal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-5 grid gap-3 md:hidden">
                  {item.criteria.map((row) => (
                    <div key={row.factor} className="rounded-lg border border-border bg-card p-4">
                      <h3 className="font-medium text-foreground">{row.factor}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {row.whyItMatters}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                        {row.localSignal}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {item.sections.map((section) => (
                <section
                  key={section.heading}
                  id={section.heading.toLowerCase().replaceAll(" ", "-")}
                >
                  <h2 className="font-display text-3xl tracking-tight">{section.heading}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/85">
                    {section.body}
                  </p>
                </section>
              ))}

              <section id="related-questions">
                <h2 className="font-display text-3xl tracking-tight">Common questions</h2>
                <div className="mt-5 divide-y divide-border border-y border-border">
                  {item.faqs.map((faq) => (
                    <article key={faq.question} className="py-5">
                      <h3 className="font-medium text-foreground">{faq.question}</h3>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-lg bg-primary p-7 text-primary-foreground">
                <h2 className="font-display text-3xl tracking-tight">{item.ctaHeading}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed opacity-85">{item.cta}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:9054775825"
                    className="rounded-full bg-[var(--clay)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
                  >
                    Call (905) 477-5825
                  </a>
                  <Link
                    to="/questions"
                    className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
                  >
                    Browse all questions
                  </Link>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl tracking-tight">Helpful next pages</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.related.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Ask the office <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
