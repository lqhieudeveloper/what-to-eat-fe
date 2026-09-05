import { Section } from '@/components/DesignSystem/Section'

const SCALE = [
  { px: 4, className: 'w-2' },
  { px: 8, className: 'w-4' },
  { px: 12, className: 'w-6' },
  { px: 16, className: 'w-8' },
  { px: 20, className: 'w-10' },
  { px: 24, className: 'w-12' },
  { px: 32, className: 'w-16' },
  { px: 40, className: 'w-20' },
  { px: 48, className: 'w-24' },
  { px: 64, className: 'w-32' },
  { px: 80, className: 'w-40' },
  { px: 96, className: 'w-48' },
]

function SpacingSection() {
  return (
    <Section
      id="spacing"
      title="Spacing"
      description="A 4px-based scale. Mobile page padding is 16px, desktop 24–32px, section spacing 48–64px, hero spacing 64–96px."
    >
      <div className="flex flex-col gap-2.5">
        {SCALE.map((item) => (
          <div key={item.px} className="flex items-center gap-4">
            <span className="w-12 shrink-0 text-body-sm font-medium text-foreground">
              {item.px}px
            </span>
            <div className={`h-4 rounded-sm bg-primary ${item.className}`} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export { SpacingSection }
