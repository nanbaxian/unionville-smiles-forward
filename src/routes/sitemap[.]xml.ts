import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const routes = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.9" },
  { path: "/team", priority: "0.9" },
  { path: "/services", priority: "0.9" },
  { path: "/questions", priority: "0.9" },
  { path: "/questions/choose-family-dentist-unionville", priority: "0.8" },
  { path: "/questions/markham-area-dental-office", priority: "0.8" },
  { path: "/questions/cdcp-dentist-unionville", priority: "0.8" },
  { path: "/questions/first-dental-visit-unionville", priority: "0.8" },
  { path: "/new-patients", priority: "0.8" },
  { path: "/cdcp", priority: "0.8" },
  { path: "/visit", priority: "0.7" },
  { path: "/contact", priority: "0.7" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...routes.map(
            (r) =>
              `  <url><loc>${BASE_URL}${r.path}</loc><changefreq>monthly</changefreq><priority>${r.priority}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
