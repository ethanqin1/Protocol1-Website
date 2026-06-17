import type { Metadata } from "next";

import {
  CtaBand,
  ImagePlaceholder,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, research, and educational content on workforce readiness and injury prevention.",
};

const featured = {
  category: "Guide",
  title: "The EHS leader's guide to movement-based injury prevention",
  body: "A practical framework for reducing soft-tissue injuries before they become claims — what to measure, where to start, and how to prove ROI.",
};

const articles = [
  {
    category: "Research",
    title: "Why most workplace injuries are predictable",
    body: "The movement-risk signals that precede soft-tissue claims.",
  },
  {
    category: "Playbook",
    title: "Standing up a readiness program in 90 days",
    body: "A phased rollout plan for EHS, risk, and operations teams.",
  },
  {
    category: "Article",
    title: "Workers' comp costs: where the money actually goes",
    body: "Breaking down claim spend and the levers that move it.",
  },
  {
    category: "Case Study",
    title: "Cutting recordables on a manufacturing floor",
    body: "How early assessment changed outcomes for one production team.",
  },
  {
    category: "Webinar",
    title: "Return-to-work without re-injury",
    body: "Structuring recovery pathways that actually stick.",
  },
  {
    category: "Checklist",
    title: "Ergonomic risk review starter checklist",
    body: "The high-risk tasks to evaluate first.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights on readiness and injury prevention"
        description="Articles, guides, and research for EHS, risk, HR, and operations leaders."
      />

      {/* Featured */}
      <Section className="py-16">
        <div className="grid items-center gap-8 rounded-2xl border border-border bg-card p-6 shadow-sm lg:grid-cols-2 lg:p-8">
          <ImagePlaceholder
            label="Featured resource cover"
            className="aspect-video w-full"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
              Featured · {featured.category}
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{featured.title}</h2>
            <p className="mt-3 text-muted-foreground">{featured.body}</p>
            <p className="mt-4 text-sm font-medium text-primary">Read the guide →</p>
          </div>
        </div>
      </Section>

      {/* Article grid */}
      <Section className="pt-0 pb-20 sm:pb-24">
        <SectionHeading eyebrow="Library" title="Browse the latest" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map(({ category, title, body }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors hover:border-primary/40"
            >
              <ImagePlaceholder label="Thumbnail" className="aspect-video rounded-none border-0 border-b border-dashed" />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
                  {category}
                </p>
                <h3 className="mt-2 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Get readiness insights in your inbox"
        description="A newsletter signup and full resource library are upcoming. For now, request a demo to talk with our team."
      />
    </>
  );
}
