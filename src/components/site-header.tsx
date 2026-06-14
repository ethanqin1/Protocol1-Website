"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { mainNav, siteConfig } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  active && "text-primary"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={siteConfig.cta.secondary.href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "text-primary hover:text-primary hover:bg-primary/10"
            )}
          >
            {siteConfig.cta.secondary.label}
          </Link>
          <Link
            href={siteConfig.cta.primary.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {siteConfig.cta.primary.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Link
                href={siteConfig.cta.secondary.href}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-primary/40 text-primary hover:bg-primary/10"
                )}
              >
                {siteConfig.cta.secondary.label}
              </Link>
              <Link
                href={siteConfig.cta.primary.href}
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: "lg" }))}
              >
                {siteConfig.cta.primary.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
