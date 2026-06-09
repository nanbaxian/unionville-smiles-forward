import { Link } from "@tanstack/react-router";
import { Languages, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import logoImg100 from "@/assets/unionvilledental/logo-100.webp";
import logoImg142 from "@/assets/unionvilledental/logo-142.webp";
import { PracticeAddressLink } from "@/components/site/AddressLink";
import { OFFICIAL_LINKS } from "@/lib/practice-info";

const practiceLinks = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/services", label: "Services" },
  { to: "/questions", label: "Questions" },
  { to: "/new-patients", label: "New Patients" },
  { to: "/contact", label: "Contact" },
];

const patientLinks = [
  { to: "/cdcp", label: "CDCP accepted" },
  { to: "/patient-rights", label: "Patient rights" },
  { to: "/privacy", label: "Privacy" },
  { to: "/accessibility", label: "Accessibility" },
];

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="border-t border-border bg-[oklch(0.21_0.035_195)] text-[oklch(0.93_0.018_85)]"
    >
      <div className="container-prose py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.95fr_0.8fr_1fr] lg:gap-10">
          <div>
            <img
              src={logoImg100}
              srcSet={`${logoImg100} 100w, ${logoImg142} 142w`}
              sizes="99px"
              alt="Unionville Dental, Dr. Dudley & Associates"
              width={100}
              height={84}
              className="h-20 w-auto rounded bg-white/95 p-2"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Dr. J. David Dudley & Associates has served Unionville and Markham families for more
              than four decades.
            </p>
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Language resources">
              <Link
                to="/fr"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-white/85 hover:bg-white/10"
              >
                <Languages className="h-4 w-4" /> Français
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-white/55">Visit</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/75">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <PracticeAddressLink className="hover:text-white" />
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <div>
                  <a href="tel:9054775825" className="block hover:text-white">
                    (905) 477-5825
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <Link to="/contact" className="hover:text-white">
                  Email the office
                </Link>
              </div>
              <p>
                Mon-Tue 8am-7pm
                <br />
                Wed-Thu 8am-5pm
                <br />
                Fri 7:30am-1pm
              </p>
            </div>
          </div>

          <nav aria-label="Footer practice navigation">
            <h2 className="text-xs uppercase tracking-[0.18em] text-white/55">Practice</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-1 text-sm lg:grid-cols-1">
              {practiceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex min-h-9 items-center text-white/75 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-white/55">Patient resources</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-1 text-sm lg:grid-cols-1">
              {patientLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex min-h-9 items-center text-white/75 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/60">
              <p className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
                CDCP accepted. Official program details are maintained by Canada.ca.
              </p>
              <a
                href={OFFICIAL_LINKS.cdcp}
                target="_blank"
                rel="noopener"
                className="block hover:text-white"
              >
                Government of Canada CDCP information
              </a>
              <a
                href={OFFICIAL_LINKS.rcdsoFindDentist}
                target="_blank"
                rel="noopener"
                className="block hover:text-white"
              >
                Verify Ontario dental registration through RCDSO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col gap-3 py-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Dr. J. David Dudley &amp; Associates. All rights
            reserved.
          </span>
          <span>Proudly serving Unionville, Markham and nearby Ontario communities.</span>
        </div>
      </div>
    </footer>
  );
}
