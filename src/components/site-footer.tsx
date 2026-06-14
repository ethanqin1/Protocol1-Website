import Link from "next/link"

import { Logo } from "@/components/logo"
import { footerNav, siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="space-y-3">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <Logo />
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>

        {footerNav.map((group) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-sm font-semibold">{group.title}</h3>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.title + link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
