import type { Metadata } from "next";

import { PageHero, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Corporate Readiness is evolving from a marketing site into a workforce readiness and movement assessment platform.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Invested in keeping your workforce moving"
        description="Corporate Readiness helps employers reduce injuries and helps employees stay healthy, recover faster, and keep moving."
      />
      <Section>
        <p className="text-muted-foreground">
          Content coming soon. This page will cover the company story, mission, and team.
        </p>
      </Section>
    </>
  );
}
