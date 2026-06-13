import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

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
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
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
