import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Our Team" },
  { to: "/services", label: "Services" },
  { to: "/new-patients", label: "New Patients" },
  { to: "/cdcp", label: "CDCP" },
  { to: "/visit", label: "Visit" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">D</span>
          <span className="font-display text-xl tracking-tight text-foreground">
            Dudley<span className="text-muted-foreground"> &amp; Associates</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-foreground transition-colors [&.active]:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:9054775825" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> (905) 477-5825
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Book a visit
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-prose flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/80 hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:9054775825" className="py-2 text-base font-medium">(905) 477-5825</a>
          </nav>
        </div>
      )}
    </header>
  );
}
