import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoImg from "@/assets/unionvilledental/logo.webp";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. J. David Dudley & Associates — Unionville Family Dentist" },
      {
        name: "description",
        content:
          "Trusted Unionville family dental practice serving Markham since 1980. Gentle, modern dentistry. CDCP accepted. New patients welcome. Call (905) 477-5825.",
      },
      { name: "author", content: "Dr. J. David Dudley & Associates" },
      {
        property: "og:title",
        content: "Dr. J. David Dudley & Associates — Unionville Family Dentist",
      },
      {
        property: "og:description",
        content:
          "Trusted family dentistry in Unionville since 1980. CDCP accepted. New patients welcome.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Dr. J. David Dudley & Associates",
          image: logoImg,
          telephone: "+1-905-477-5825",
          email: "drdudley@bellnet.ca",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4359 Highway 7",
            addressLocality: "Unionville",
            addressRegion: "ON",
            postalCode: "L3R 1M1",
            addressCountry: "CA",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday"],
              opens: "08:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Wednesday", "Thursday"],
              opens: "08:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "07:30",
              closes: "13:00",
            },
          ],
          areaServed: ["Unionville", "Markham", "Ontario"],
          description:
            "Family and cosmetic dentistry in Unionville since 1980. Accepting the Canadian Dental Care Program (CDCP). New patients welcome.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
