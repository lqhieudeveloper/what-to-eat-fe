import { ArrowRight, Utensils } from 'lucide-react'

import { Section } from '@/components/DesignSystem/Section'

const PHILOSOPHY_STEPS = [
  { label: 'Food / Content', description: 'The dish is always the hero of the screen.' },
  { label: 'Primary Action', description: 'One obvious next step — never buried.' },
  {
    label: 'Supporting Information',
    description: 'Rating, price, distance — context, not clutter.',
  },
  { label: 'Metadata', description: 'Tags and details, kept quiet until needed.' },
]

function OverviewSection() {
  return (
    <Section
      id="overview"
      title="Overview"
      description="The visual foundation for WhatToEat — a warm, editorial design system built to answer one question fast: hôm nay ăn gì?"
    >
      <div className="flex flex-col gap-6 rounded-lg border bg-card p-6 sm:p-8">
        <div className="flex items-center gap-2 text-primary">
          <Utensils className="size-5" />
          <span className="text-caption font-semibold tracking-wide uppercase">
            Warm Cream × Olive
          </span>
        </div>
        <p className="max-w-2xl text-h4 font-semibold text-foreground">
          &ldquo;I opened the app and immediately know what to eat.&rdquo;
        </p>
        <p className="max-w-2xl text-body text-muted-foreground">
          Every screen should feel calm, premium, and food-focused — closer to a modern food
          magazine than a SaaS dashboard. Strong typography, generous whitespace, and food imagery
          carry the product; olive accents point at the one decision that matters.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
        {PHILOSOPHY_STEPS.map((step, index) => (
          <div key={step.label} className="flex flex-col gap-2 rounded-lg border bg-card p-4">
            <div className="flex items-center justify-between">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-caption font-semibold text-primary-foreground">
                {index + 1}
              </span>
              {index < PHILOSOPHY_STEPS.length - 1 && (
                <ArrowRight className="size-4 text-muted-foreground sm:hidden" />
              )}
            </div>
            <p className="text-body-sm font-semibold text-foreground">{step.label}</p>
            <p className="text-caption text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { OverviewSection }
