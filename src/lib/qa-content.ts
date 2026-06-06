import clinicConsultImg from "@/assets/photos/clinic/treatment-room-consult.webp";
import firstVisitImg from "@/assets/photos/technology/dental-xray-review.webp";
import markhamImg from "@/assets/photos/patients/natural-smile-profile.webp";
import cdcpImg from "@/assets/photos/patients/warm-smile-closeup.webp";

export type QaItem = {
  slug: string;
  category: string;
  title: string;
  shortQuestion: string;
  metaTitle: string;
  metaDescription: string;
  directAnswer: string;
  tldr: string[];
  image: string;
  imageAlt: string;
  tableTitle: string;
  criteria: Array<{
    factor: string;
    whyItMatters: string;
    localSignal: string;
  }>;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  related: Array<{
    label: string;
    href: string;
  }>;
  ctaHeading: string;
  cta: string;
};

export const qaItems: QaItem[] = [
  {
    slug: "choose-family-dentist-unionville",
    category: "Choosing a dentist",
    title: "How do I choose a family dentist in Unionville?",
    shortQuestion: "How do I choose a family dentist in Unionville?",
    metaTitle: "How to Choose a Family Dentist in Unionville",
    metaDescription:
      "Compare Unionville dentists using practical criteria: experience, services, location, CDCP, accessibility, and long-term continuity of care.",
    directAnswer:
      "When choosing a family dentist in Unionville, compare practical details: location, parking, accessibility, appointment times, services for different ages, CDCP and insurance handling, and how clearly the office explains treatment options. Dr. J. David Dudley & Associates is a Highway 7 Unionville dental practice serving local families since 1980.",
    tldr: [
      "Look for a dentist with verifiable local history and complete family dental services.",
      "Prioritize practical access: Highway 7 location, parking, wheelchair accessibility, and clear hours.",
      "Use reviews, referrals, service fit, and first-visit communication to decide.",
      "Avoid choosing only by advertising claims; compare facts that matter to your household.",
    ],
    image: clinicConsultImg,
    imageAlt: "Dentist consultation in a treatment room for Unionville dental patients",
    tableTitle: "Things to ask before booking",
    criteria: [
      {
        factor: "Local history",
        whyItMatters: "A long-standing clinic is easier to verify through community presence.",
        localSignal: "Dr. J. David Dudley & Associates has served Unionville since 1980.",
      },
      {
        factor: "Services in one clinic",
        whyItMatters:
          "Families often need hygiene, exams, cosmetic, restorative and preventive care.",
        localSignal: "The practice offers family, cosmetic, preventive and restorative dentistry.",
      },
      {
        factor: "Access",
        whyItMatters: "Convenience affects whether patients keep regular recall visits.",
        localSignal: "The office is on Highway 7 in Unionville with parking and wheelchair access.",
      },
      {
        factor: "Payment clarity",
        whyItMatters:
          "Patients need to understand insurance, CDCP and payment options before treatment.",
        localSignal: "The office accepts CDCP and helps with dental insurance claims.",
      },
    ],
    sections: [
      {
        heading: "What makes a dental office easier to visit",
        body: "A useful comparison looks at experience, service range, communication, accessibility, continuity of care, and whether the clinic can support both routine visits and treatment planning when care is needed.",
      },
      {
        heading: "Seeing the same team over time",
        body: "Dental care is built over time. A practice that has treated multiple generations can often offer stronger continuity because the team understands patient history, family needs, and the importance of preventive maintenance across many years.",
      },
      {
        heading: "Local fit for Unionville patients",
        body: "For Unionville families, practical location matters. A Highway 7 office with on-site parking, wheelchair access, and clear weekday hours makes it easier to maintain regular dental hygiene appointments and follow-up care.",
      },
    ],
    faqs: [
      {
        question: "What should I compare before choosing a Unionville dentist?",
        answer:
          "Compare verifiable facts such as services offered, location, accessibility, appointment availability, payment handling, and whether the clinic is a practical fit for your family.",
      },
      {
        question: "Does Dr. J. David Dudley & Associates accept new patients?",
        answer:
          "Yes. New patients can contact the office to request an appointment and review first-visit details before booking.",
      },
      {
        question: "Where is the clinic located?",
        answer:
          "The office is located at 4359 Highway #7, Unionville, ON L3R 1M1, serving Unionville and nearby Markham families.",
      },
    ],
    related: [
      { label: "Explore dental services", href: "/services" },
      { label: "New patient information", href: "/new-patients" },
      { label: "Office hours and directions", href: "/visit" },
    ],
    ctaHeading: "Have a question before booking?",
    cta: "Call (905) 477-5825 to ask whether our Unionville office is the right fit for your family.",
  },
  {
    slug: "markham-area-dental-office",
    category: "Choosing a dentist",
    title: "What Markham families should look for when choosing a dentist",
    shortQuestion: "What should I look for in a Markham-area dental office?",
    metaTitle: "Choosing a Markham-Area Dental Office",
    metaDescription:
      "A practical guide for Markham families comparing nearby dentists, including access, continuity, services, CDCP and first-visit expectations.",
    directAnswer:
      "For Markham-area families, a practical dental office is usually close enough for regular visits, clear about first-visit expectations, able to see adults and children, and straightforward about insurance or CDCP questions. Dr. J. David Dudley & Associates is located on Highway 7 in Unionville and has served Unionville and Markham-area patients since 1980.",
    tldr: [
      "Choose a dentist close enough for routine hygiene visits and follow-up care.",
      "Compare service fit for adults, children, seniors, cosmetic concerns, and restorative needs.",
      "Look for transparent first-visit expectations and payment information.",
      "A Unionville clinic can be a practical fit for many Markham families because of Highway 7 access.",
    ],
    image: markhamImg,
    imageAlt: "Natural patient smile for Markham families comparing local dental care",
    tableTitle: "Dentist comparison checklist for Markham families",
    criteria: [
      {
        factor: "Travel fit",
        whyItMatters: "Dental care works best when regular appointments are easy to keep.",
        localSignal: "The office is on Highway 7 in Unionville, near Markham communities.",
      },
      {
        factor: "Family service range",
        whyItMatters:
          "Households often need one office for exams, hygiene, restoration and cosmetic questions.",
        localSignal: "The clinic provides family, cosmetic, preventive and restorative services.",
      },
      {
        factor: "First visit process",
        whyItMatters: "A clear intake process reduces uncertainty for new patients.",
        localSignal:
          "New patient details, forms, exam timing and hygiene expectations are published on the site.",
      },
      {
        factor: "Coverage and payment",
        whyItMatters: "CDCP and insurance details affect affordability and planning.",
        localSignal: "The office accepts CDCP and supports dental insurance claim handling.",
      },
    ],
    sections: [
      {
        heading: "Why Markham patients compare Unionville dentists",
        body: "Markham and Unionville are closely connected communities. Many families choose dental care based on route convenience, continuity of care, and whether the clinic can serve adults, children, and older family members in one place.",
      },
      {
        heading: "What to ask before booking",
        body: "Ask whether the office accepts new patients, how long the first appointment takes, whether hygiene and exam visits can be coordinated, what services are provided in-house, and how the clinic handles insurance or CDCP questions.",
      },
      {
        heading: "How to judge fit after the first visit",
        body: "A good first visit should leave you with a clear understanding of your oral health, recommended next steps, timing, costs where available, and what preventive care will help maintain your teeth and gums.",
      },
    ],
    faqs: [
      {
        question: "Is Unionville a practical location for Markham dental patients?",
        answer:
          "For many Markham families, yes. A Highway 7 Unionville location can be convenient for regular hygiene appointments, follow-ups, and family scheduling.",
      },
      {
        question: "What should I ask a dentist before becoming a new patient?",
        answer:
          "Ask about appointment availability, first-visit timing, hygiene services, treatment planning, insurance, CDCP, parking, accessibility, and how urgent issues are handled.",
      },
      {
        question: "Does the clinic provide cosmetic and restorative dentistry?",
        answer:
          "Yes. The practice provides family, cosmetic, preventive and restorative dental services, including crowns, bridges, veneers, implants and whitening.",
      },
    ],
    related: [
      { label: "Contact the office", href: "/contact" },
      { label: "Read about the practice", href: "/about" },
      { label: "See first visit details", href: "/new-patients" },
    ],
    ctaHeading: "Book a visit at our Unionville office",
    cta: "Markham-area patients can call (905) 477-5825 to ask about appointment availability at our Unionville office.",
  },
  {
    slug: "cdcp-dentist-unionville",
    category: "CDCP",
    title: "Finding a CDCP dentist in Unionville",
    shortQuestion: "Which Unionville dentist accepts CDCP?",
    metaTitle: "CDCP Dentist in Unionville | Dr. J. David Dudley & Associates",
    metaDescription:
      "Dr. J. David Dudley & Associates accepts CDCP at its Unionville dental office. Learn what to ask before booking a CDCP dental appointment.",
    directAnswer:
      "Dr. J. David Dudley & Associates accepts the Canadian Dental Care Program at its Unionville office. CDCP patients receive the same careful dental care as other patients, with support for understanding coverage questions and booking the right type of visit.",
    tldr: [
      "The Unionville office accepts CDCP.",
      "Call before booking to confirm appointment type and any coverage questions.",
      "CDCP can support eligible patients, but coverage details may vary by treatment.",
      "Bring relevant coverage and medication information to your appointment.",
    ],
    image: cdcpImg,
    imageAlt: "Smiling dental patient for CDCP dental care in Unionville",
    tableTitle: "What CDCP patients should ask before booking",
    criteria: [
      {
        factor: "Eligibility",
        whyItMatters: "CDCP eligibility is determined through the federal program.",
        localSignal:
          "The clinic can help patients understand what to bring and where to verify eligibility.",
      },
      {
        factor: "Appointment type",
        whyItMatters: "New patients, hygiene visits and examinations may require different timing.",
        localSignal: "The site explains new patient exams and hygiene appointments.",
      },
      {
        factor: "Treatment coverage",
        whyItMatters: "Not every dental service is covered the same way.",
        localSignal:
          "Patients should call the office before treatment planning to discuss next steps.",
      },
      {
        factor: "Location",
        whyItMatters: "Regular care is easier when the clinic is accessible.",
        localSignal: "The office is located at 4359 Highway #7 in Unionville.",
      },
    ],
    sections: [
      {
        heading: "What CDCP patients should know",
        body: "CDCP helps eligible Canadians access dental care, but patients should still confirm appointment needs, coverage questions, and documentation before visiting. Calling ahead helps the clinic prepare and helps you understand the next step.",
      },
      {
        heading: "Care is based on need, not coverage type",
        body: "CDCP patients should expect the same clinical attention as other patients. The focus remains on oral health, hygiene, examination findings, prevention, and treatment planning when care is needed.",
      },
      {
        heading: "Unionville access for CDCP patients",
        body: "The office is located on Highway 7 in Unionville, with parking and wheelchair accessibility. New patients can contact the office to ask about scheduling and what information to bring.",
      },
    ],
    faqs: [
      {
        question: "Does Dr. J. David Dudley & Associates accept CDCP?",
        answer: "Yes. The practice accepts CDCP at its Unionville dental office.",
      },
      {
        question: "Can the office tell me if I qualify for CDCP?",
        answer:
          "Eligibility is managed by the federal program. The office can guide patients on where to check eligibility and what to bring for a dental visit.",
      },
      {
        question: "Should CDCP patients call before booking?",
        answer:
          "Yes. Calling first helps confirm appointment type, documentation, timing and any coverage-related questions before the visit.",
      },
    ],
    related: [
      { label: "CDCP information", href: "/cdcp" },
      { label: "New patient details", href: "/new-patients" },
      { label: "Book or call the office", href: "/contact" },
    ],
    ctaHeading: "Not sure what to bring?",
    cta: "Call (905) 477-5825 to ask about booking a CDCP dental visit in Unionville.",
  },
  {
    slug: "first-dental-visit-unionville",
    category: "New patients",
    title: "What happens at a first dental visit in Unionville?",
    shortQuestion: "What happens at my first dental visit?",
    metaTitle: "First Dental Visit in Unionville | What New Patients Can Expect",
    metaDescription:
      "Learn what happens during a first dental visit at a Unionville family dental office, including forms, hygiene assessment, exam, X-rays and treatment planning.",
    directAnswer:
      "A first dental visit usually includes intake forms, a review of medical and dental history, a hygiene assessment, a dental examination, possible X-rays, oral cancer screening, and a discussion of recommended next steps. At Dr. J. David Dudley & Associates, new patients are asked to arrive early and bring current medication information.",
    tldr: [
      "Arrive about 15 minutes early for forms and front-desk intake.",
      "Bring a list of current prescription and over-the-counter medications.",
      "The first visit may include hygiene assessment, cleaning, dental exam and X-rays.",
      "Your dentist reviews findings and discusses a treatment or prevention plan.",
    ],
    image: firstVisitImg,
    imageAlt: "Dentist reviewing X-rays during a first dental visit in Unionville",
    tableTitle: "Typical first visit steps",
    criteria: [
      {
        factor: "Intake",
        whyItMatters: "Accurate health information helps the dental team plan safe care.",
        localSignal: "New patients are asked to arrive early and bring medication details.",
      },
      {
        factor: "Hygiene assessment",
        whyItMatters: "Gum and bone health guide cleaning and preventive recommendations.",
        localSignal: "Initial hygiene appointments include periodontal assessment and cleaning.",
      },
      {
        factor: "Dental examination",
        whyItMatters:
          "The dentist checks teeth, oral tissues, TMJ and signs of oral health concerns.",
        localSignal: "The first dental exam is typically about 30 minutes.",
      },
      {
        factor: "Treatment planning",
        whyItMatters: "Patients need a clear explanation of findings and next steps.",
        localSignal: "The office reviews individualized care recommendations with patients.",
      },
    ],
    sections: [
      {
        heading: "Before your appointment",
        body: "New patients should arrive early enough to complete forms and provide accurate contact, medical, insurance and medication information. This helps the team prepare for your visit and avoid rushing through intake.",
      },
      {
        heading: "During hygiene and examination",
        body: "Your visit may include periodontal assessment, cleaning, dental examination, oral cancer screening, TMJ assessment, X-rays or study models depending on your needs and appointment type.",
      },
      {
        heading: "After the exam",
        body: "The dentist reviews findings, answers questions, and explains recommended prevention or treatment steps. The goal is to leave with a clear understanding of your oral health and practical next actions.",
      },
    ],
    faqs: [
      {
        question: "How early should I arrive for a first dental visit?",
        answer:
          "Arrive about 15 minutes early so intake forms and front-desk details can be completed before the appointment time.",
      },
      {
        question: "Can my dental exam and hygiene appointment be booked together?",
        answer:
          "In many cases, the dental exam and hygiene appointment may be booked together for convenience. Call the office to confirm availability.",
      },
      {
        question: "Should I bring medication information?",
        answer:
          "Yes. Bring a list of all current prescription and over-the-counter medications to your first visit.",
      },
    ],
    related: [
      { label: "New patient information", href: "/new-patients" },
      { label: "Contact the office", href: "/contact" },
      { label: "Office hours and directions", href: "/visit" },
    ],
    ctaHeading: "Call us before your first visit",
    cta: "Call (905) 477-5825 to request your first appointment at our Unionville dental office.",
  },
];

export const qaBySlug = Object.fromEntries(qaItems.map((item) => [item.slug, item])) as Record<
  string,
  QaItem
>;

export const qaCategories = Array.from(new Set(qaItems.map((item) => item.category)));

export function questionSchema(item: QaItem) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
