import type { Metadata } from "next";

import { PageHero, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Corporate Readiness supports physically demanding industries where injury prevention matters most.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for physically demanding work"
        description="Manufacturing, logistics, construction, and other industries where workforce readiness drives safety and cost outcomes."
      />
      <Section>
        <p className="text-muted-foreground">
          Content coming soon. This page will break down industry-specific use cases once
          wireframes are approved.
        </p>
      </Section>
    </>
  );
}
