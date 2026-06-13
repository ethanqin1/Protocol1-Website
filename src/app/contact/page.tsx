import type { Metadata } from "next";

import { PageHero, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a demo, contact sales, or schedule a discovery call with Corporate Readiness.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a demo"
        description="See how Corporate Readiness can reduce injuries and lower workers' compensation costs for your organization."
      />
      <Section>
        <p className="text-muted-foreground">
          A demo request and contact form will live here. Primary calls to action: Request
          a Demo, Contact Sales, and Schedule a Discovery Call.
        </p>
      </Section>
    </>
  );
}
