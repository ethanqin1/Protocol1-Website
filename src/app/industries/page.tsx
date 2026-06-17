import type { Metadata } from "next";
import {
  Building2,
  Factory,
  HardHat,
  Hospital,
  Package,
  Truck,
} from "lucide-react";

import {
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Afferent Influence supports physically demanding industries where injury prevention matters most.",
};

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    body: "Repetitive motion and heavy lifting make assembly and production lines a top source of soft-tissue claims.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    body: "Loading, unloading, and long shifts put drivers and dock workers at elevated injury risk.",
  },
  {
    icon: HardHat,
    title: "Construction",
    body: "High physical demand and variable job sites require proactive readiness and injury prevention.",
  },
  {
    icon: Package,
    title: "Warehousing & Distribution",
    body: "Picking, packing, and material handling drive cumulative strain across the workforce.",
  },
  {
    icon: Hospital,
    title: "Healthcare & Long-Term Care",
    body: "Patient handling and on-feet shifts create persistent musculoskeletal risk for staff.",
  },
  {
    icon: Building2,
    title: "Facilities & Field Services",
    body: "Mobile, hands-on work demands consistent movement readiness across distributed teams.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for physically demanding work"
        description="Manufacturing, logistics, construction, and other industries where workforce readiness drives safety and cost outcomes."
      />

      <Section className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Who we serve"
          title="Wherever physical demand drives injury risk"
          description="Afferent Influence adapts to the movement profile and risk drivers of each industry."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
            >
              <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stat band — placeholder figures */}
      <section className="border-y border-border bg-muted/30">
        <Section className="py-16">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "30%+", label: "potential reduction in soft-tissue injuries" },
              { stat: "$1M+", label: "in avoidable annual workers' comp spend" },
              { stat: "Days", label: "faster return-to-work after injury" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-4xl font-bold text-primary">{stat}</p>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Illustrative placeholder figures — final benchmarks pending program data.
          </p>
        </Section>
      </section>

      <CtaBand description="Tell us about your industry and we'll show you where the biggest risk reductions are." />
    </>
  );
}
