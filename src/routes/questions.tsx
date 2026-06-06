import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/questions")({
  component: QuestionsLayout,
});

function QuestionsLayout() {
  return <Outlet />;
}
