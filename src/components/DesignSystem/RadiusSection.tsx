import { Section } from '@/components/DesignSystem/Section'

const SCALE = [
  { name: 'sm', px: '6px', className: 'rounded-sm', usage: 'Small controls' },
  { name: 'default', px: '10px', className: 'rounded', usage: 'Buttons, inputs' },
  { name: 'md', px: '12px', className: 'rounded-md', usage: 'Select, menus' },
  { name: 'lg', px: '16px', className: 'rounded-lg', usage: 'Default card' },
  { name: 'xl', px: '20px', className: 'rounded-xl', usage: 'Featured card' },
  { name: '2xl', px: '24px', className: 'rounded-2xl', usage: 'Large surfaces' },
  { name: 'full', px: '9999px', className: 'rounded-full', usage: 'Badge, avatar' },
]

function RadiusSection() {
  return (
    <Section
      id="radius"
      title="Radius"
      description="Restrained rounding — not every surface needs to be fully rounded."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {SCALE.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-2 text-center">
            <div className={`size-16 border-2 border-primary bg-olive-100 ${item.className}`} />
            <div className="flex flex-col">
              <span className="text-body-sm font-semibold text-foreground">{item.name}</span>
              <span className="text-caption text-muted-foreground">{item.px}</span>
              <span className="text-caption text-muted-foreground">{item.usage}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { RadiusSection }
