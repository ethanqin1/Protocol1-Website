import type { Metadata } from "next";

import { PageHero, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, research, and educational content on workforce readiness and injury prevention.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights on readiness and injury prevention"
        description="Articles, guides, and research for EHS, risk, HR, and operations leaders."
      />
      <Section>
        <p className="text-muted-foreground">
          Content coming soon. This section will host articles and downloadable resources.
        </p>
      </Section>
    </>
  );
}
