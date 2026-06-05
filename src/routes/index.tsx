import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-clinic.jpg";
import smileImg from "@/assets/smile.jpg";
import teamImg from "@/assets/team.jpg";
import { ArrowUpRight, Calendar, Clock, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unionville Family Dentist — Dr. J. David Dudley & Associates" },
      {
        name: "description",
        content:
          "A trusted Unionville dental practice since 1980. Family, cosmetic and preventative dentistry. CDCP accepted. Book at (905) 477-5825.",
      },
      { property: "og:title", content: "Unionville Family Dentist — Dr. J. David Dudley & Associates" },
      { property: "og:description", content: "Trusted family dentistry in Unionville since 1980. New patients welcome." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-prose pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay)]" /> Caring for Unionville since 1980
            </div>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-foreground">
              Healthy teeth <em className="text-[var(--clay)] not-italic font-display italic">·</em> for a healthier you.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Dr. David Dudley and his team offer gentle family and cosmetic dentistry on Highway 7 in Unionville.
              Forty-plus years of quiet expertise — and a welcome that feels like home.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
              >
                Book an appointment <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-foreground hover:text-primary">
                Explore our services
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["45+", "Years in Unionville"],
                ["CDCP", "Proudly accepted"],
                ["7 days", "To get you in"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-3xl text-foreground">{k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src={heroImg}
              alt="Sunlit modern dental treatment room with teal accent wall and plants"
              width={1600}
              height={1200}
              className="rounded-3xl aspect-[4/5] w-full object-cover shadow-2xl shadow-primary/10"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card border border-border p-4 shadow-xl max-w-[16rem]">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> Open today
              </div>
              <div className="mt-1 font-display text-xl">8:00 — 7:00</div>
              <a href="tel:9054775825" className="mt-2 inline-block text-sm font-medium text-primary">(905) 477-5825 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-card/60">
        <div className="container-prose py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {[
            [ShieldCheck, "CDCP accepted", "New federal coverage"],
            [Sparkles, "Modern techniques", "Updated continuously"],
            [Calendar, "Easy scheduling", "Evenings available"],
            [MapPin, "Wheelchair access", "On-site parking"],
          ].map(([Icon, title, sub]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={title as string} className="flex gap-3">
                <I className="h-5 w-5 text-[var(--clay)] mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-foreground">{title as string}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{sub as string}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROMISE / ABOUT */}
      <section className="container-prose py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <img src={smileImg} alt="Patient with a healthy, natural smile" width={1200} height={1400} loading="lazy" className="rounded-3xl w-full aspect-[4/5] object-cover" />
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our promise</div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Quiet expertise, with the time to listen.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Modern technology, regular training, and an eye on current developments — we do everything to ensure
            your dental health is our priority. Our relaxed atmosphere and friendly service go hand in hand, naturally.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5 max-w-2xl">
            {[
              ["Family & cosmetic", "Care that grows with every member of your family."],
              ["Preventative focus", "We treat the cause, not just the symptom."],
              ["Same dentists, decades on", "Continuity that builds real trust."],
              ["Self-care guidance", "Nutritional and lifestyle advice included."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-medium text-foreground">{t}</div>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Read about the practice <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container-prose pb-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What we do</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">A full range of gentle treatments.</h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-primary inline-flex items-center gap-1">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ["Family dentistry", "Comprehensive new-patient exams, hygiene, and preventative care."],
            ["Cosmetic dentistry", "Porcelain veneers, tooth whitening, and natural-looking restorations."],
            ["Crowns, bridges & implants", "Restoring strength and confidence to your smile."],
            ["TMJ & night guards", "Custom-fitted relief for jaw pain and grinding."],
            ["Endodontics & oral surgery", "Skilled, gentle care when you need it most."],
            ["Pediatric & orthodontics", "Healthy habits and straight smiles for younger patients."],
          ].map(([t, d], i) => (
            <article key={t} className="group rounded-3xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition">
              <div className="text-xs text-muted-foreground tabular-nums">0{i + 1}</div>
              <h3 className="mt-3 font-display text-2xl tracking-tight text-foreground">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CDCP banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.2em] opacity-70">Canadian Dental Care Program</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight">
              Proudly accepting CDCP.
            </h2>
            <p className="mt-5 text-lg opacity-85 max-w-2xl leading-relaxed">
              We are proud to provide CDCP-covered patients with the same quality, value and gentle service
              that has defined our practice for over four decades.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link to="/cdcp" className="inline-flex items-center gap-2 rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-medium text-white hover:opacity-90">
              Learn about CDCP <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/new-patients" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10">
              I'm a new patient
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM tease */}
      <section className="container-prose py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The people</div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight">A team you'll see for years.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Dr. Dudley has practiced here since 1980. Dr. Meling Lee joined in 1988. Our hygienists and assistants
            have grown with families across Markham — many patients have been with us their entire adult lives.
          </p>
          <Link to="/team" className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Meet the team <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <img src={teamImg} alt="The Dudley & Associates dental team" width={1600} height={1100} loading="lazy" className="rounded-3xl w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      {/* VISIT */}
      <section className="container-prose pb-24">
        <div className="rounded-[2rem] bg-card border border-border p-8 md:p-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">Come see us in Unionville.</h2>
            <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
              We're on Highway 7, with on-site parking and wheelchair access. Step in any time — or call ahead and
              we'll have everything ready for you.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                <p className="mt-2 text-foreground">4359 Highway #7<br/>Unionville, ON L3R 1M1</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                <p className="mt-2 text-foreground">Mon–Tue · 8am – 7pm<br/>Wed–Thu · 8am – 5pm<br/>Fri · 7:30am – 1pm</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            <a href="tel:9054775825" className="rounded-2xl bg-primary text-primary-foreground p-6 hover:bg-primary/90 transition">
              <div className="text-xs uppercase tracking-widest opacity-70">Call us</div>
              <div className="mt-1 font-display text-3xl">(905) 477-5825</div>
            </a>
            <Link to="/visit" className="rounded-2xl border border-border p-6 hover:border-primary/40">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Directions</div>
              <div className="mt-1 font-display text-2xl text-foreground">Find the office →</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
