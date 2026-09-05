import * as React from 'react'

import { cn } from '@/utils/utils'

const SECTIONS = [
  'overview',
  'colors',
  'typography',
  'spacing',
  'radius',
  'shadows',
  'buttons',
  'inputs',
  'select',
  'combobox',
  'checkbox',
  'radio',
  'switch',
  'slider',
  'badge',
  'card',
  'food-card',
  'food-rating',
  'recommendation-card',
  'dialog',
  'drawer',
  'dropdown',
  'tooltip',
  'tabs',
  'alert',
  'toast',
  'skeleton',
  'empty-state',
  'error-state',
  'loading-state',
  'pagination',
  'navigation',
] as const

type SectionId = (typeof SECTIONS)[number]

function Section({
  id,
  title,
  description,
  children,
}: {
  id: SectionId
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-border py-12 first:pt-0 last:border-b-0"
    >
      <div className="mb-8 flex flex-col gap-1.5">
        <h2 className="text-h3 font-bold text-foreground">{title}</h2>
        <p className="max-w-2xl text-body text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  )
}

function Demo({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <span className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      <div className={cn('flex flex-wrap items-center gap-3', className)}>{children}</div>
    </div>
  )
}

export { Section, Demo, SECTIONS }
export type { SectionId }
