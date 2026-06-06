import { Link } from "@tanstack/react-router";
import logoImg100 from "@/assets/unionvilledental/logo-100.webp";
import logoImg142 from "@/assets/unionvilledental/logo-142.webp";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-[oklch(0.22_0.03_200)] text-[oklch(0.92_0.02_85)]">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logoImg100}
            srcSet={`${logoImg100} 100w, ${logoImg142} 142w`}
            sizes="99px"
            alt="Unionville Dental, Dr. Dudley & Associates"
            width={100}
            height={84}
            className="h-20 w-auto rounded bg-white/95 p-2"
          />
          <p className="mt-4 max-w-md text-sm opacity-75 leading-relaxed">
            A family dental practice serving Unionville and Markham for more than four decades.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <div className="uppercase tracking-widest text-xs opacity-60 mb-3">Practice</div>
          <Link to="/about" className="block min-h-11 py-2 hover:opacity-100 opacity-80">
            About
          </Link>
          <Link to="/team" className="block min-h-11 py-2 hover:opacity-100 opacity-80">
            Team
          </Link>
          <Link to="/services" className="block min-h-11 py-2 hover:opacity-100 opacity-80">
            Services
          </Link>
          <Link to="/questions" className="block min-h-11 py-2 hover:opacity-100 opacity-80">
            Questions
          </Link>
          <Link to="/cdcp" className="block min-h-11 py-2 hover:opacity-100 opacity-80">
            CDCP
          </Link>
        </div>
        <div className="text-sm space-y-2">
          <div className="uppercase tracking-widest text-xs opacity-60 mb-3">Visit</div>
          <p className="opacity-80">
            4359 Highway #7
            <br />
            Unionville, ON L3R 1M1
          </p>
          <p className="opacity-80">
            <a
              href="tel:9054775825"
              className="inline-flex min-h-11 items-center hover:opacity-100"
            >
              (905) 477-5825
            </a>
            <br />
            <a
              href="mailto:drdudley@bellnet.ca"
              className="inline-flex min-h-11 items-center hover:opacity-100"
            >
              drdudley@bellnet.ca
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col md:flex-row justify-between gap-2 py-6 text-xs opacity-60">
          <span>
            © {new Date().getFullYear()} Dr. J. David Dudley &amp; Associates. All rights reserved.
          </span>
          <span>Proudly serving Unionville · Markham · Ontario</span>
        </div>
      </div>
    </footer>
  );
}
