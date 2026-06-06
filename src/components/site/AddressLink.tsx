import type { ReactNode } from "react";
import { PRACTICE_ADDRESS, PRACTICE_MAPS_URL } from "@/lib/practice-info";

const ADDRESS_PATTERNS = [
  "4359 Highway #7, Unionville, ON L3R 1M1",
  "4359 Highway 7, Unionville, ON L3R 1M1",
  "4359 Highway #7 in Unionville",
  "4359 Highway 7 in Unionville",
];

export function AddressLink({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <a href={PRACTICE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function PracticeAddressLink({ className }: { className?: string }) {
  return (
    <AddressLink className={className}>
      {PRACTICE_ADDRESS.street}
      <br />
      {PRACTICE_ADDRESS.locality}, {PRACTICE_ADDRESS.region} {PRACTICE_ADDRESS.postalCode}
    </AddressLink>
  );
}

export function LinkablePracticeAddressText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const pattern = ADDRESS_PATTERNS.find((candidate) => text.includes(candidate));

  if (!pattern) {
    return <>{text}</>;
  }

  const [before, after] = text.split(pattern);

  return (
    <>
      {before}
      <AddressLink className={className}>{pattern}</AddressLink>
      {after}
    </>
  );
}
