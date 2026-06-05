import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import type { QaItem } from "@/lib/qa-content";

export function QuestionPage({ item }: { item: QaItem }) {
  return (
    <>
      <section className="container-prose pt-12 md:pt-20 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {item.category}
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl">
              {item.title}
            </h1>
            <div className="mt-7 rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Direct answer
              </div>
              <p className="mt-3 text-lg leading-relaxed text-foreground">{item.directAnswer}</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={item.image}
              alt={item.imageAlt}
              width={1600}
              height={1200}
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <section className="container-prose grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">TL;DR</div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
              {item.tldr.map((point) => (
                <li key={point} className="flex gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--clay)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Ask the office <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-14">
          <section>
            <h2 className="font-display text-3xl tracking-tight">{item.tableTitle}</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
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
          </section>

          {item.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-3xl tracking-tight">{section.heading}</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/85">{section.body}</p>
            </section>
          ))}

          <section>
            <h2 className="font-display text-3xl tracking-tight">Related questions</h2>
            <div className="mt-5 space-y-4">
              {item.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-medium text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-primary p-8 text-primary-foreground">
            <h2 className="font-display text-3xl tracking-tight">
              Talk with the Unionville office
            </h2>
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
        </div>
      </section>
    </>
  );
}
