import type { Metadata } from "next";
import { Compass, HeartHandshake, ShieldCheck, TrendingUp } from "lucide-react";

import {
  CtaBand,
  ImagePlaceholder,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Afferent Influence is evolving from a marketing site into a workforce readiness and movement assessment platform.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Prevention first",
    body: "We'd rather stop an injury than manage a claim. Everything starts upstream.",
  },
  {
    icon: HeartHandshake,
    title: "People over paperwork",
    body: "Employees are partners in their own readiness, not case numbers.",
  },
  {
    icon: TrendingUp,
    title: "Measurable outcomes",
    body: "If we can't show the impact on injuries and cost, it doesn't count.",
  },
  {
    icon: Compass,
    title: "Built for the field",
    body: "Designed around the realities of physical work, not the clinic.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Invested in keeping your workforce moving"
        description="Afferent Influence helps employers reduce injuries and helps employees stay healthy, recover faster, and keep moving."
      />

      {/* Mission */}
      <Section className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Our mission"
            title="Make injury prevention the default, not the afterthought"
            description="We combine movement assessment with personalized prevention so employers can cut injuries and costs — and employees can keep doing the work they're proud of, safely."
          />
        </div>
        <ImagePlaceholder label="Team / mission photo" className="aspect-[4/3] w-full" />
      </Section>

      {/* Values */}
      <section className="border-y border-border bg-muted/30">
        <Section className="py-20 sm:py-24">
          <SectionHeading eyebrow="What we believe" title="Our values" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
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

      {/* Team */}
      <Section className="py-20 sm:py-24">
        <SectionHeading centered eyebrow="Our team" title="The people behind Afferent Influence" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center">
              <ImagePlaceholder label="Headshot" className="mx-auto aspect-square w-full rounded-full" />
              <p className="mt-4 font-semibold">Team Member</p>
              <p className="text-sm text-muted-foreground">Role / Title</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand description="Want to learn more about our approach? Let's talk." />
    </>
  );
}
