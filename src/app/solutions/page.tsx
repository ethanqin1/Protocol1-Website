import type { Metadata } from "next";

import { PageHero, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How Corporate Readiness reduces injuries, lowers workers' compensation costs, and improves workforce readiness.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Reduce injuries and build a ready workforce"
        description="A movement assessment and injury-prevention program designed around the realities of physical work."
      />
      <Section>
        <p className="text-muted-foreground">
          Content coming soon. This page will detail the Corporate Readiness solution set
          once wireframes are approved.
        </p>
      </Section>
    </>
  );
}
