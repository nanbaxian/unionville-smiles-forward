import { Link } from "@tanstack/react-router";
import logoImg100 from "@/assets/unionvilledental/logo-100.webp";
import logoImg142 from "@/assets/unionvilledental/logo-142.webp";
import { PracticeAddressLink } from "@/components/site/AddressLink";
import { OFFICIAL_LINKS } from "@/lib/practice-info";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.22_0.03_200)] text-[oklch(0.92_0.02_85)]">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-4">
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
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-75">
            A family dental practice serving Unionville and Markham for more than four decades.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="mb-3 text-xs uppercase tracking-widest opacity-60">Practice</div>
          <Link to="/about" className="block min-h-11 py-2 opacity-80 hover:opacity-100">
            About
          </Link>
          <Link to="/team" className="block min-h-11 py-2 opacity-80 hover:opacity-100">
            Team
          </Link>
          <Link to="/services" className="block min-h-11 py-2 opacity-80 hover:opacity-100">
            Services
          </Link>
          <Link to="/questions" className="block min-h-11 py-2 opacity-80 hover:opacity-100">
            Questions
          </Link>
          <Link to="/cdcp" className="block min-h-11 py-2 opacity-80 hover:opacity-100">
            CDCP
          </Link>
          <Link to="/patient-rights" className="block min-h-11 py-2 opacity-80 hover:opacity-100">
            Patient Rights
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <div className="mb-3 text-xs uppercase tracking-widest opacity-60">Visit</div>
          <PracticeAddressLink className="block opacity-80 hover:opacity-100" />
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
          <div className="pt-2">
            <div className="mb-2 text-xs uppercase tracking-widest opacity-60">Languages</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link to="/zh" className="opacity-80 hover:opacity-100">
                中文
              </Link>
              <Link to="/fr" className="opacity-80 hover:opacity-100">
                Français
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose grid gap-4 py-6 text-xs leading-relaxed opacity-65 md:grid-cols-3">
          <span>CDCP accepted. Official program details are maintained by Canada.ca.</span>
          <a
            href={OFFICIAL_LINKS.cdcp}
            target="_blank"
            rel="noopener"
            className="hover:opacity-100"
          >
            Government of Canada CDCP information
          </a>
          <a
            href={OFFICIAL_LINKS.rcdsoFindDentist}
            target="_blank"
            rel="noopener"
            className="hover:opacity-100"
          >
            Verify Ontario dental registration through RCDSO
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col gap-3 py-6 text-xs opacity-60 md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Dr. J. David Dudley &amp; Associates. All rights
            reserved.
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>Proudly serving Unionville &middot; Markham &middot; Ontario</span>
            <Link to="/privacy" className="hover:opacity-100">
              Privacy
            </Link>
            <Link to="/accessibility" className="hover:opacity-100">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
