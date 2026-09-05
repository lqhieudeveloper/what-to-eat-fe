import { Section } from '@/components/DesignSystem/Section'

const SCALE = [
  { name: 'xs', className: 'shadow-xs', usage: 'Default card' },
  { name: 'sm', className: 'shadow-sm', usage: 'Card hover' },
  { name: 'md', className: 'shadow-md', usage: 'Popover, dropdown' },
  { name: 'lg', className: 'shadow-lg', usage: 'Dialog' },
  { name: 'xl', className: 'shadow-xl', usage: 'Large floating panels' },
]

function ShadowsSection() {
  return (
    <Section
      id="shadows"
      title="Shadows"
      description="Grounded, not floating. Subtle shadows for cards; stronger shadows reserved for dialogs, dropdowns, and popovers."
    >
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
        {SCALE.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-2 text-center">
            <div className={`size-16 rounded-lg border bg-card ${item.className}`} />
            <div className="flex flex-col">
              <span className="text-body-sm font-semibold text-foreground">{item.name}</span>
              <span className="text-caption text-muted-foreground">{item.usage}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { ShadowsSection }
