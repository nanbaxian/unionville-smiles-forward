import logoImg from "@/assets/unionvilledental/logo.webp";
import {
  OFFICIAL_LINKS,
  PRACTICE_ADDRESS,
  PRACTICE_MAPS_URL,
  PRACTICE_NAME,
  SITE_URL,
} from "@/lib/practice-info";

type QuestionAnswer = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function languageAlternateLinks() {
  return [
    { rel: "alternate", hrefLang: "en", href: absoluteUrl("/") },
    { rel: "alternate", hrefLang: "fr", href: absoluteUrl("/fr") },
    { rel: "alternate", hrefLang: "x-default", href: absoluteUrl("/") },
  ];
}

export function ldJsonScript(schema: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(schema),
  };
}

export function practiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": absoluteUrl("/#dentist"),
    name: PRACTICE_NAME,
    url: absoluteUrl("/"),
    image: absoluteUrl(logoImg),
    logo: absoluteUrl(logoImg),
    telephone: "+1-905-477-5825",
    priceRange: "$$",
    paymentAccepted: ["Cash", "Debit Card", "Mastercard", "Visa", "CDCP"],
    acceptsInsurance: "Canadian Dental Care Program (CDCP)",
    knowsLanguage: ["English", "French"],
    medicalSpecialty: "Dentistry",
    address: {
      "@type": "PostalAddress",
      streetAddress: PRACTICE_ADDRESS.streetSchema,
      addressLocality: PRACTICE_ADDRESS.locality,
      addressRegion: PRACTICE_ADDRESS.region,
      postalCode: PRACTICE_ADDRESS.postalCode,
      addressCountry: "CA",
    },
    hasMap: PRACTICE_MAPS_URL,
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
    sameAs: [OFFICIAL_LINKS.rcdso, OFFICIAL_LINKS.cdcp],
    employee: dentistPersonSchemas(),
    description:
      "Family and cosmetic dentistry in Unionville since 1980. Accepting the Canadian Dental Care Program (CDCP). New patients welcome.",
  };
}

export function dentistPersonSchemas() {
  return [
    {
      "@type": "Physician",
      "@id": absoluteUrl("/team#dr-david-dudley"),
      name: "Dr. David Dudley",
      honorificPrefix: "Dr.",
      honorificSuffix: "DDS",
      medicalSpecialty: "Dentistry",
      alumniOf: "University of Western School of Dentistry",
      description:
        "A 1980 licensed graduate of The University of Western School of Dentistry, practicing at Dr. J. David Dudley & Associates for over 30 years with a focus on family and cosmetic dentistry.",
      worksFor: {
        "@id": absoluteUrl("/#dentist"),
      },
    },
    {
      "@type": "Physician",
      "@id": absoluteUrl("/team#dr-meling-lee"),
      name: "Dr. Meling Lee",
      honorificPrefix: "Dr.",
      honorificSuffix: "DDS",
      medicalSpecialty: "Dentistry",
      alumniOf: "University of Toronto Faculty of Dentistry",
      description:
        "A 1988 graduate of the University of Toronto Faculty of Dentistry and an integral member of Dr. J. David Dudley & Associates.",
      worksFor: {
        "@id": absoluteUrl("/#dentist"),
      },
    },
  ];
}

export function faqPageSchema(faqs: QuestionAnswer[], idPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl(`${idPath}#faq`),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListSchema(
  name: string,
  items: Array<{ name: string; path: string }>,
  idPath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl(`${idPath}#item-list`),
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
