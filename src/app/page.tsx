import Link from "next/link";
import {
  Activity,
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  LineChart,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ImagePlaceholder, Section } from "@/components/page-shell";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const employerValue = [
  {
    icon: ShieldCheck,
    title: "Reduce injuries",
    body: "Catch movement risk early and prevent the soft-tissue injuries that drive claims.",
  },
  {
    icon: LineChart,
    title: "Lower workers' comp costs",
    body: "Fewer injuries and faster recovery translate directly into lower claim spend.",
  },
  {
    icon: HardHat,
    title: "Improve workforce readiness",
    body: "Keep your people physically prepared for the demands of their roles.",
  },
  {
    icon: Activity,
    title: "Support employee health",
    body: "Give employees a clear, supported path to staying healthy and moving well.",
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: "Assess",
    body: "Employees complete a guided movement assessment — no clinic visit required.",
  },
  {
    icon: Video,
    title: "Analyze",
    body: "Upload movement videos and get an objective read on injury risk and readiness.",
  },
  {
    icon: Sparkles,
    title: "Improve",
    body: "Receive personalized recommendations and track progress over time.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-[var(--accent-orange)]" />
              {siteConfig.tagline}
            </span>
            <h1 className="mt-6 text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
              Workforce readiness and injury prevention, built for the people who do the work.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={siteConfig.cta.primary.href}
                className={cn(buttonVariants({ size: "lg" }))}
              >
                {siteConfig.cta.primary.label}
              </Link>
              <Link
                href="/solutions"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Explore Solutions
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Trusted by teams who can&apos;t afford downtime.
            </p>
          </div>
          <ImagePlaceholder
            label="Hero image"
            className="aspect-[4/3] w-full lg:aspect-square"
          />
        </div>
      </section>

      {/* Employer value props */}
      <Section className="py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
            For employers
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Fewer injuries, lower costs, a readier workforce
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reduce injuries, lower workers&apos; compensation costs, and improve workforce
            readiness across your organization.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {employerValue.map(({ icon: Icon, title, body }) => (
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

      {/* How it works */}
      <section className="border-y border-border bg-muted/30">
        <Section className="py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
              How it works
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Getting started is easy
            </h2>
            <p className="mt-3 text-muted-foreground">
              A simple, three-step path from assessment to measurable improvement.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Employee message — blue accent for the employee audience */}
      <section className="bg-[color-mix(in_oklch,var(--brand-blue),transparent_92%)]">
        <Section className="grid gap-10 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
              For employees
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              We&apos;ve got your back
            </h2>
            <p className="mt-3 text-muted-foreground">
              Your employer and {siteConfig.name} are invested in helping you stay healthy,
              recover faster, and keep moving. Schedule an assessment, upload movement
              videos, and track your progress — all in one place.
            </p>
            <div className="mt-6">
              <Link
                href="/portal"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Go to Employee Portal
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "Schedule your assessment",
              "Upload movement videos securely",
              "Get personalized recommendations",
              "Track your progress over time",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
              >
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </section>

      {/* Closing CTA */}
      <Section className="py-20 text-center sm:py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
          Get started
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
          Ready to see how {siteConfig.name} fits your workforce?
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href={siteConfig.cta.primary.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {siteConfig.cta.primary.label}
          </Link>
        </div>
      </Section>
    </>
  );
}
