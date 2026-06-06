# Advertising and Trust Content Guidelines

This document is a working reference for advertising, website copy, CDCP content, accessibility
claims, and trust signals for Dr. J. David Dudley & Associates.

It is not legal advice. Use it as an internal checklist before publishing website pages, landing
pages, search ads, social posts, printed ads, or CDCP-related copy. Escalate uncertain claims to the
practice owner or legal/regulatory advisor before publishing.

## Source References

- Government of Canada, Canadian Dental Care Plan:
  https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html
- Government of Canada, CDCP coverage:
  https://www.canada.ca/en/services/benefits/dental/dental-care-plan/coverage.html
- Ontario, website accessibility guidance:
  https://www.ontario.ca/page/how-make-websites-accessible
- RCDSO, professional advertising guidance:
  https://www.rcdso.org/en-ca/standards-guidelines-resources/standards-guidelines-advisories/advertising-guidelines

## Core Advertising Rules

Use clear, factual, verifiable language.

Good examples:

- "Dr. J. David Dudley & Associates accepts CDCP at our Unionville office."
- "The office is located at 4359 Highway 7 in Unionville."
- "Call before booking if you have CDCP coverage questions."
- "Coverage depends on eligibility, treatment needs, and CDCP rules."

Avoid unclear or risky language:

- "Free dental care for everyone"
- "Guaranteed CDCP coverage"
- "Best dentist in Markham"
- "Pain-free treatment guaranteed"
- "Government-approved dental office" unless explicitly verified and allowed

## CDCP Copy Rules

CDCP content should point patients to official Canada.ca pages for eligibility and coverage rules.

Required ideas to include when relevant:

- The office accepts patients covered by CDCP.
- Patients should bring CDCP coverage information, government ID, and any private insurance details.
- Coverage may depend on eligibility, treatment type, preauthorization, and current CDCP rules.
- Canada.ca is the source of truth for program rules.

Do not imply:

- CDCP covers every service.
- CDCP means no out-of-pocket cost.
- The dental office decides eligibility.
- The office can override Canada.ca, Health Canada, Sun Life, or plan administrator rules.

## Accessibility Claims

Website accessibility claims should be conservative and testable.

Allowed:

- "The office is wheelchair accessible."
- "If you have trouble accessing a page or document, contact the office and we will do our best to
  provide the information another way."
- "The site uses semantic headings, descriptive link text, image alt text, and responsive layouts."

Avoid:

- "Fully WCAG compliant" unless a formal audit supports it.
- "AODA certified" unless there is a real certification or formal legal basis.
- "100% accessible" because accessibility depends on user needs, technology, and ongoing testing.

## Trust Pages

The website should keep these trust pages available from the footer:

- `/privacy`
- `/accessibility`
- `/cdcp`
- `/contact`

When writing trust content, prefer direct facts:

- Who the practice is
- Where the office is located
- How patients can contact the office
- What patients should bring
- What external official source controls the rule
- What remains subject to change

## SEO, AEO, and GEO Checklist

For any public page or ad landing page:

- Use one clear H1.
- Include the entity name: "Dr. J. David Dudley & Associates."
- Include the location when relevant: "Unionville" and "Highway 7."
- Include phone number and contact path when conversion-focused.
- Answer common patient questions directly before long explanation.
- Link to official external sources for government program claims.
- Use schema only for facts the practice can verify.
- Do not add precise coordinates, awards, badges, ratings, or memberships unless verified.

## Pre-Publish Review Checklist

Before publishing advertising or public-facing dental copy:

- Is every clinical, coverage, or accessibility claim factual and supportable?
- Does CDCP copy link to Canada.ca when eligibility or coverage is discussed?
- Does the page avoid guarantees about outcomes, pain, coverage, or rankings?
- Are contact details consistent with the site footer and schema?
- Are images given descriptive alt text?
- Is the page usable on mobile?
- Does the page avoid unverified badges, certifications, rankings, or association claims?
- If fees, discounts, or promotions are mentioned, are conditions clear?

## Current Site Implementation Notes

As of the current project state:

- Root JSON-LD includes `Dentist` schema.
- CDCP content links to official Canada.ca CDCP and coverage pages.
- The footer links to privacy and accessibility pages.
- The sitemap includes `/privacy` and `/accessibility`.
- Coordinates are intentionally not included in schema until a reliable door-level source is
  verified.
