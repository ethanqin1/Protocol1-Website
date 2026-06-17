import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Employee Portal Login",
  description:
    "Sign in to schedule assessments, upload movement videos, access programs, and track your progress.",
};

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30";
const labelClass = "mb-1.5 block text-sm font-medium";

export default function PortalPage() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md flex-col justify-center px-4 py-16 sm:px-6">
        {/* Login card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center text-center">
            <Logo />
            <h1 className="mt-6 text-2xl font-bold">Employee Portal</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to access your assessments and progress.
            </p>
          </div>

          <form className="mt-8 grid gap-4">
            <div>
              <label className={labelClass} htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className={fieldClass} placeholder="you@company.com" />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-sm font-medium" htmlFor="password">Password</label>
                <span className="text-xs font-medium text-primary">Forgot password?</span>
              </div>
              <input id="password" name="password" type="password" className={fieldClass} placeholder="••••••••" />
            </div>
            <button
              type="button"
              className={cn(buttonVariants({ size: "lg" }), "mt-2 w-full")}
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Need access?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Contact your administrator
            </Link>
          </p>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="size-3.5" />
          Authentication is a Phase 2 deliverable — this is a visual mockup.
        </p>
      </div>
    </section>
  );
}
