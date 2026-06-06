import { createFileRoute } from "@tanstack/react-router";
import { QuestionPage } from "@/components/site/QuestionPage";
import { qaBySlug, questionSchema } from "@/lib/qa-content";
import { breadcrumbSchema, ldJsonScript } from "@/lib/schema";

const item = qaBySlug["cdcp-dentist-unionville"];

export const Route = createFileRoute("/questions/cdcp-dentist-unionville")({
  head: () => ({
    meta: [
      { title: item.metaTitle },
      { name: "description", content: item.metaDescription },
      { property: "og:title", content: item.metaTitle },
      { property: "og:description", content: item.metaDescription },
    ],
    scripts: [
      ldJsonScript(questionSchema(item)),
      ldJsonScript(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Questions", path: "/questions" },
          { name: item.shortQuestion, path: `/questions/${item.slug}` },
        ]),
      ),
    ],
  }),
  component: () => <QuestionPage item={item} />,
});
