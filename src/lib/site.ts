export const siteConfig = {
  name: "Afferent Influence",
  tagline: "We've Got Your Back",
  description:
    "Workforce readiness, injury prevention, and movement assessment — reducing injuries and workers' compensation costs while keeping employees healthy and moving.",
  // Primary calls to action used across the marketing site.
  cta: {
    primary: { label: "Request a Demo", href: "/contact" },
    secondary: { label: "Employee Portal", href: "/portal" },
  },
} as const

// Top-level marketing navigation. Order matters — it drives the header nav.
export const mainNav: { title: string; href: string }[] = [
  { title: "Solutions", href: "/solutions" },
  { title: "Industries", href: "/industries" },
  { title: "Platform", href: "/platform" },
  { title: "Resources", href: "/resources" },
  { title: "About", href: "/about" },
]

// Grouped links for the footer.
export const footerNav: { title: string; links: { title: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { title: "Solutions", href: "/solutions" },
      { title: "Industries", href: "/industries" },
      { title: "Assessment Platform", href: "/platform" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Resources", href: "/resources" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "For Employees",
    links: [
      { title: "Employee Portal", href: "/portal" },
      { title: "Schedule Assessment", href: "/portal" },
      { title: "Track Progress", href: "/portal" },
    ],
  },
]
