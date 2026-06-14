import Link from "next/link";
import { Activity, CheckCircle2, HardHat, LineChart, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/page-shell";
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
            {siteConfig.tagline}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Workforce readiness and injury prevention, built for the people who do the work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
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
        </div>
      </section>

      {/* Employer value props */}
      <Section>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
            For employers
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Fewer injuries, lower costs, a readier workforce
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reduce injuries, lower workers&apos; compensation costs, and improve workforce
            readiness across your organization.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {employerValue.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Employee message — blue accent for the employee audience */}
      <section className="border-y border-border bg-[color-mix(in_oklch,var(--brand-blue),transparent_92%)]">
        <Section className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
              For employees
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
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
      <Section className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
          Get started
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance">
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
