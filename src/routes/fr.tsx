import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { PracticeAddressLink } from "@/components/site/AddressLink";

export const Route = createFileRoute("/fr")({
  head: () => ({
    meta: [
      { title: "Information en français | Dentiste à Unionville" },
      {
        name: "description",
        content:
          "Information de base en français pour les patients de Dr. J. David Dudley & Associates à Unionville : rendez-vous, CDCP, adresse et accessibilité.",
      },
      { property: "og:title", content: "Information en français | Dentiste à Unionville" },
      {
        property: "og:description",
        content:
          "Information de base en français pour les patients de notre clinique dentaire à Unionville.",
      },
    ],
    links: [
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "zh-Hans", href: "/zh" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
    ],
  }),
  component: FrenchInfo,
});

function FrenchInfo() {
  return (
    <>
      <PageHeader
        eyebrow="Information en français"
        title={<>Renseignements de base pour les patients francophones.</>}
        intro="Cette page donne les renseignements essentiels en français. Pour les soins, les rendez-vous et les dossiers cliniques, veuillez appeler la clinique afin de confirmer les détails et les besoins linguistiques."
      />

      <section className="container-prose grid gap-4 md:grid-cols-3">
        {[
          ["Nouveaux patients", "Appelez le (905) 477-5825 pour demander un rendez-vous."],
          [
            "CDCP accepté",
            "Apportez vos renseignements CDCP, une pièce d'identité et vos assurances.",
          ],
          [
            "Accès pratique",
            "La clinique est située sur Highway 7 avec stationnement et accès fauteuil roulant.",
          ],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl tracking-tight text-primary">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </article>
        ))}
      </section>

      <section className="container-prose mt-16 max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85">
        <h2 className="font-display text-3xl tracking-tight text-foreground">Services dentaires</h2>
        <p>
          Dr. J. David Dudley & Associates offre des soins dentaires familiaux, préventifs,
          restaurateurs et esthétiques pour les enfants, les adultes et les aînés.
        </p>
        <p>
          La clinique accepte le Régime canadien de soins dentaires (CDCP). La couverture peut
          varier selon l'admissibilité et le traitement requis; les pages officielles du
          gouvernement du Canada demeurent la source de référence.
        </p>
        <p>
          Adresse : <PracticeAddressLink className="text-primary underline underline-offset-2" />.
          Téléphone :{" "}
          <a className="text-primary underline underline-offset-2" href="tel:9054775825">
            (905) 477-5825
          </a>
          .
        </p>
        <div className="pt-4 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Contact
          </Link>
          <Link
            to="/accessibility"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/50"
          >
            Accessibilité
          </Link>
        </div>
      </section>
    </>
  );
}
