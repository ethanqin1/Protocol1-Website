import type { Metadata } from "next";
import {
  BarChart3,
  CalendarClock,
  FileVideo,
  Lock,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import {
  CtaBand,
  ImagePlaceholder,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Employee Assessment Platform",
  description:
    "Schedule assessments, upload movement videos, and track progress — the digital backbone of Afferent Influence.",
};

const features = [
  {
    icon: CalendarClock,
    title: "Schedule assessments",
    body: "Employees book movement assessments in a few taps — no clinic visit needed.",
  },
  {
    icon: FileVideo,
    title: "Secure video upload",
    body: "Capture and upload movement videos for objective, asynchronous review.",
  },
  {
    icon: Sparkles,
    title: "Personalized recommendations",
    body: "Each employee receives a tailored movement and prevention plan.",
  },
  {
    icon: BarChart3,
    title: "Progress tracking",
    body: "Visualize readiness and improvement over time at the individual and team level.",
  },
  {
    icon: MessageSquare,
    title: "Practitioner review",
    body: "Specialists review submissions and respond with guidance inside the portal.",
  },
  {
    icon: Lock,
    title: "Private & secure",
    body: "Role-based access keeps employee health data protected end to end.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Employee Assessment Platform"
        title="Assessment, recommendations, and progress in one place"
        description="A secure portal where employees schedule assessments and upload movement videos, and practitioners review and respond."
      />

      {/* Product preview */}
      <Section className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="The experience"
            title="A guided flow from screening to improvement"
            description="The platform walks each employee through assessment, recommendations, and ongoing progress — while giving practitioners the tools to review at scale."
          />
        </div>
        <ImagePlaceholder
          label="Platform dashboard screenshot"
          className="aspect-video w-full"
        />
      </Section>

      {/* Feature grid */}
      <section className="border-y border-border bg-muted/30">
        <Section className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything the program needs to run"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
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

      {/* Build note */}
      <Section className="py-16">
        <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-sm text-muted-foreground">
          <strong className="font-semibold text-foreground">Phase 2 deliverable:</strong>{" "}
          the functional portal — authenticated login, video uploads, and practitioner
          review — is built in the next phase. This page previews the intended experience.
        </div>
      </Section>

      <CtaBand description="Want a walkthrough of the assessment platform? Request a demo." />
    </>
  );
}
