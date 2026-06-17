import type { Metadata } from "next";
import { CalendarCheck, Mail, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { PageHero, Section } from "@/components/page-shell";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a demo, contact sales, or schedule a discovery call with Afferent Influence.",
};

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30";
const labelClass = "mb-1.5 block text-sm font-medium";

const contactOptions = [
  {
    icon: CalendarCheck,
    title: "Schedule a discovery call",
    body: "Talk through your injury and cost goals with our team.",
  },
  {
    icon: Mail,
    title: "Email sales",
    body: "sales@afferentinfluence.com",
  },
  {
    icon: Phone,
    title: "Call us",
    body: "(000) 000-0000",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a demo"
        description="See how Afferent Influence can reduce injuries and lower workers' compensation costs for your organization."
      />

      <Section className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr]">
        {/* Form (visual mockup — submission wired up later) */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold">Tell us about your team</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            We&apos;ll follow up within one business day.
          </p>
          <form className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="firstName">First name</label>
                <input id="firstName" name="firstName" className={fieldClass} placeholder="Jane" />
              </div>
              <div>
                <label className={labelClass} htmlFor="lastName">Last name</label>
                <input id="lastName" name="lastName" className={fieldClass} placeholder="Doe" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="email">Work email</label>
                <input id="email" name="email" type="email" className={fieldClass} placeholder="jane@company.com" />
              </div>
              <div>
                <label className={labelClass} htmlFor="company">Company</label>
                <input id="company" name="company" className={fieldClass} placeholder="Company, Inc." />
              </div>
            </div>
            <div>
              <label className={labelClass} htmlFor="employees">Number of employees</label>
              <select id="employees" name="employees" className={fieldClass} defaultValue="">
                <option value="" disabled>Select a range</option>
                <option>1–50</option>
                <option>51–250</option>
                <option>251–1,000</option>
                <option>1,000+</option>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="message">What are you hoping to solve?</label>
              <textarea id="message" name="message" rows={4} className={fieldClass} placeholder="Tell us about your injury and cost goals…" />
            </div>
            <button
              type="button"
              className={cn(buttonVariants({ size: "lg" }), "mt-2 w-full sm:w-auto")}
            >
              Request a Demo
            </button>
            <p className="text-xs text-muted-foreground">
              Form is a visual mockup — submission handling is a later deliverable.
            </p>
          </form>
        </div>

        {/* Other ways to reach us */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Other ways to connect</h2>
          {contactOptions.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
