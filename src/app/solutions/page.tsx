import type { Metadata } from "next";
import {
  Activity,
  ClipboardCheck,
  HeartPulse,
  LineChart,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  CtaBand,
  ImagePlaceholder,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How Afferent Influence reduces injuries, lowers workers' compensation costs, and improves workforce readiness.",
};

const offerings = [
  {
    icon: ClipboardCheck,
    title: "Movement Assessment",
    body: "Objective, repeatable screening that flags injury risk before it becomes a claim.",
  },
  {
    icon: HeartPulse,
    title: "Injury Prevention Programs",
    body: "Personalized movement and mobility plans tailored to each role's physical demands.",
  },
  {
    icon: Activity,
    title: "Return-to-Work Support",
    body: "Structured recovery pathways that get injured employees back safely and faster.",
  },
  {
    icon: ShieldCheck,
    title: "Ergonomic Risk Review",
    body: "Identify high-risk tasks and workstations driving your soft-tissue injuries.",
  },
  {
    icon: LineChart,
    title: "Outcomes Reporting",
    body: "Track injury rates, claim spend, and readiness trends across your organization.",
  },
  {
    icon: Users,
    title: "Workforce Readiness",
    body: "Keep your people physically prepared for the demands of their roles, year-round.",
  },
];

const steps = [
  { n: "01", title: "Assess", body: "Screen employees with a guided movement assessment." },
  { n: "02", title: "Identify", body: "Pinpoint individual and team-level injury risk." },
  { n: "03", title: "Intervene", body: "Deliver targeted prevention and recovery programs." },
  { n: "04", title: "Measure", body: "Report on outcomes and continuously improve." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Reduce injuries and build a ready workforce"
        description="A movement assessment and injury-prevention program designed around the realities of physical work."
      />

      {/* Problem → solution intro */}
      <Section className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <SectionHeading
          eyebrow="The problem"
          title="Soft-tissue injuries are predictable — and preventable"
          description="Most workplace injuries trace back to movement risk that goes unnoticed until a claim is filed. Afferent Influence catches that risk early and gives your team a clear path to address it."
        />
        <ImagePlaceholder
          label="Solution overview graphic"
          className="aspect-[4/3] w-full"
        />
      </Section>

      {/* Offerings grid */}
      <section className="border-y border-border bg-muted/30">
        <Section className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="What we offer"
            title="A complete readiness toolkit"
            description="Modular solutions you can adopt individually or run as an integrated program."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
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
      </section>

      {/* Process */}
      <Section className="py-20 sm:py-24">
        <SectionHeading
          centered
          eyebrow="How it works"
          title="From assessment to measurable outcomes"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, title, body }) => (
            <div key={n} className="rounded-2xl border border-border bg-card p-6">
              <span className="text-2xl font-bold text-primary">{n}</span>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand description="See how the Afferent Influence solution set maps to your injury and cost goals." />
    </>
  );
}
