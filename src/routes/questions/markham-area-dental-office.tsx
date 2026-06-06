import { createFileRoute } from "@tanstack/react-router";
import { QuestionPage } from "@/components/site/QuestionPage";
import { qaBySlug, questionSchema } from "@/lib/qa-content";

const item = qaBySlug["markham-area-dental-office"];

export const Route = createFileRoute("/questions/markham-area-dental-office")({
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
