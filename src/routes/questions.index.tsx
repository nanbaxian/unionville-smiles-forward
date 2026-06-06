import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { qaCategories, qaItems } from "@/lib/qa-content";
import { breadcrumbSchema, faqPageSchema, itemListSchema, ldJsonScript } from "@/lib/schema";

export const Route = createFileRoute("/questions/")({
  head: () => ({
    meta: [
      { title: "Dental Questions in Unionville | Dr. J. David Dudley & Associates" },
      {
        name: "description",
        content:
          "Clear answers to common dental questions from Unionville and Markham-area patients, including CDCP, first visits, cleanings, services and choosing a dental office.",
      },
      { property: "og:title", content: "Dental Questions in Unionville" },
      {
        property: "og:description",
        content:
          "Practical dental answers for Unionville and Markham patients from Dr. J. David Dudley & Associates.",
      },
    ],
    scripts: [
      ldJsonScript(
        itemListSchema(
          "Dental questions answered by Dr. J. David Dudley & Associates",
          qaItems.map((item) => ({
            name: item.shortQuestion,
            path: `/questions/${item.slug}`,
          })),
          "/questions",
        ),
      ),
      ldJsonScript(
        faqPageSchema(
          qaItems.map((item) => ({
            question: item.shortQuestion,
            answer: item.directAnswer,
          })),
          "/questions",
        ),
      ),
      ldJsonScript(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Questions", path: "/questions" },
        ]),
      ),
    ],
  }),
  component: Questions,
});

function Questions() {
  return (
    <>
      <section className="container-prose pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
          Dental answers for Unionville and Markham
        </div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-foreground max-w-4xl">
          Common questions from patients.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          These answers cover family dental care, CDCP, first-visit expectations and treatment
          choices near Unionville and Markham.
        </p>
      </section>

      <section className="container-prose grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-3">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Topics</div>
            <div className="mt-4 space-y-2 text-sm">
              {qaCategories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
                  className="block text-foreground/80 hover:text-primary"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-12">
          {qaCategories.map((category) => (
            <section key={category} id={category.toLowerCase().replaceAll(" ", "-")}>
              <h2 className="font-display text-3xl tracking-tight">{category}</h2>
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                {qaItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      to={`/questions/${item.slug}`}
                      className="group rounded-lg border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {item.category}
                      </div>
                      <h3 className="mt-3 font-display text-2xl tracking-tight text-foreground">
                        {item.shortQuestion}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.directAnswer}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read the answer <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
