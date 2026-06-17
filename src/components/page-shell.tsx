import type { ReactNode } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

/**
 * Standard intro block for interior pages: eyebrow label, title, and lead text.
 * Keeps every page header consistent until wireframes are approved by Bill Bolster.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <section className={cn("border-b border-border bg-muted/30", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

/** Generic content section wrapper with consistent horizontal padding and width. */
export function Section({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 sm:px-6", className)}>
      {children}
    </section>
  )
}

/**
 * Labeled placeholder for imagery to be swapped in later. Drop a real
 * <next/image> in its place once assets are approved.
 */
export function ImagePlaceholder({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid place-items-center rounded-2xl border border-dashed border-border bg-muted/40 text-center text-sm text-muted-foreground",
        className
      )}
    >
      {label}
    </div>
  )
}

/** Small heading block: eyebrow + title + optional lead, used inside sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  centered,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--accent-orange)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  )
}

/** Reusable closing call-to-action band. */
export function CtaBand({
  title = `Ready to see how ${siteConfig.name} fits your workforce?`,
  description,
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="border-t border-border bg-muted/30">
      <Section className="py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{description}</p>
        )}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={siteConfig.cta.primary.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {siteConfig.cta.primary.label}
          </Link>
          <Link
            href={siteConfig.cta.secondary.href}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {siteConfig.cta.secondary.label}
          </Link>
        </div>
      </Section>
    </section>
  )
}
