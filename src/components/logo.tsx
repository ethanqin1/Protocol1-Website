import { cn } from "@/lib/utils"

/**
 * Stylized recreation of the Afferent Influence mark: a charcoal star/arrow
 * crest with two sky-blue wings, matching the brand colors.
 *
 * NOTE: This is a hand-built approximation of the logo. For pixel-perfect
 * fidelity, drop the official asset at `public/afferent-logo.svg` (or .png)
 * and swap this <svg> for a <next/image>.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Afferent Influence logo"
      className={className}
    >
      {/* Charcoal star + arrow body (inherits text color) */}
      <g className="fill-current">
        <path d="M32 3 41 27 32 21 23 27Z" />
        <path d="M32 23 48 49 32 39 16 49Z" />
      </g>
      {/* Sky-blue wings */}
      <g className="fill-[var(--brand-blue)]">
        <path d="M9 39 24 44 19 55 6 50Z" />
        <path d="M55 39 40 44 45 55 58 50Z" />
      </g>
    </svg>
  )
}

/** Full lockup: mark + "Afferent Influence" wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="size-8 text-[var(--charcoal)] dark:text-zinc-100" />
      <span className="text-lg font-bold tracking-tight text-[var(--charcoal)] dark:text-zinc-100">
        Afferent Influence
      </span>
    </span>
  )
}
