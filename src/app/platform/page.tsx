import type { Metadata } from "next";

import { PageHero, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Employee Assessment Platform",
  description:
    "Schedule assessments, upload movement videos, and track progress — the digital backbone of Corporate Readiness.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Employee Assessment Platform"
        title="Assessment, recommendations, and progress in one place"
        description="A secure portal where employees schedule assessments and upload movement videos, and practitioners review and respond."
      />
      <Section>
        <p className="text-muted-foreground">
          Content coming soon. The functional portal prototype is a Phase 2 deliverable.
        </p>
      </Section>
    </>
  );
}
