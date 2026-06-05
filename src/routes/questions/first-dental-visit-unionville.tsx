import { createFileRoute } from "@tanstack/react-router";
import { QuestionPage } from "@/components/site/QuestionPage";
import { qaBySlug, questionSchema } from "@/lib/qa-content";

const item = qaBySlug["first-dental-visit-unionville"];

export const Route = createFileRoute("/questions/first-dental-visit-unionville")({
  head: () => ({
    meta: [
      { title: item.metaTitle },
      { name: "description", content: item.metaDescription },
      { property: "og:title", content: item.metaTitle },
      { property: "og:description", content: item.metaDescription },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(questionSchema(item)) }],
  }),
  component: () => <QuestionPage item={item} />,
});
