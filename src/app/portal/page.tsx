import type { Metadata } from "next";

import { PageHero, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Employee Portal",
  description:
    "Schedule assessments, upload movement videos, access programs, and track your progress.",
};

export default function PortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Employee Portal"
        title="Your readiness, all in one place"
        description="Schedule assessments, upload assessment videos, access programs, and track progress."
      />
      <Section>
        <p className="text-muted-foreground">
          Secure login and the employee portal experience are Phase 2 deliverables
          (authentication via Clerk, video uploads via UploadThing).
        </p>
      </Section>
    </>
  );
}
