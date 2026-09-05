import { cn } from '@/utils/utils'
import { Section } from '@/components/DesignSystem/Section'

const STONE_STEPS = [
  { step: '50', hex: '#FAFAF9', className: 'bg-stone-50' },
  { step: '100', hex: '#F5F5F4', className: 'bg-stone-100' },
  { step: '200', hex: '#E7E5E4', className: 'bg-stone-200' },
  { step: '300', hex: '#D6D3D1', className: 'bg-stone-300' },
  { step: '400', hex: '#A8A29E', className: 'bg-stone-400' },
  { step: '500', hex: '#78716C', className: 'bg-stone-500' },
  { step: '600', hex: '#57534E', className: 'bg-stone-600' },
  { step: '700', hex: '#44403C', className: 'bg-stone-700' },
  { step: '800', hex: '#292524', className: 'bg-stone-800' },
  { step: '900', hex: '#1C1917', className: 'bg-stone-900' },
]

const OLIVE_STEPS = [
  { step: '50', hex: '#F5F7ED', className: 'bg-olive-50' },
  { step: '100', hex: '#E8EDD9', className: 'bg-olive-100' },
  { step: '200', hex: '#D4DEB9', className: 'bg-olive-200' },
  { step: '300', hex: '#B8C98E', className: 'bg-olive-300' },
  { step: '400', hex: '#8FA65A', className: 'bg-olive-400' },
  { step: '500', hex: '#556B2F', className: 'bg-olive-500' },
  { step: '600', hex: '#465A27', className: 'bg-olive-600' },
  { step: '700', hex: '#39491F', className: 'bg-olive-700' },
  { step: '800', hex: '#2D391A', className: 'bg-olive-800' },
  { step: '900', hex: '#202814', className: 'bg-olive-900' },
]

const AMBER_STEPS = [
  { step: '50', hex: '#FFFBEB', className: 'bg-amber-50' },
  { step: '100', hex: '#FEF3C7', className: 'bg-amber-100' },
  { step: '200', hex: '#FDE68A', className: 'bg-amber-200' },
  { step: '500', hex: '#F59E0B', className: 'bg-amber-500' },
  { step: '600', hex: '#D97706', className: 'bg-amber-600' },
]

const SEMANTIC_TOKENS = [
  { name: 'background', className: 'bg-background border' },
  { name: 'foreground', className: 'bg-foreground' },
  { name: 'card', className: 'bg-card border' },
  { name: 'primary', className: 'bg-primary' },
  { name: 'secondary', className: 'bg-secondary' },
  { name: 'muted', className: 'bg-muted' },
  { name: 'accent', className: 'bg-accent' },
  { name: 'destructive', className: 'bg-destructive' },
  { name: 'success', className: 'bg-success' },
  { name: 'warning', className: 'bg-warning' },
  { name: 'info', className: 'bg-info' },
  { name: 'border', className: 'bg-border' },
  { name: 'ring', className: 'bg-ring' },
]

function PaletteRow({
  name,
  steps,
}: {
  name: string
  steps: { step: string; hex: string; className: string }[]
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-body-sm font-semibold text-foreground">{name}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {steps.map((swatch) => (
          <div key={swatch.step} className="flex flex-col gap-1.5">
            <div className={cn('h-14 rounded-md border border-border/50', swatch.className)} />
            <div className="text-caption text-muted-foreground">
              <span className="font-medium text-foreground">
                {name}-{swatch.step}
              </span>
              <br />
              {swatch.hex}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ColorsSection() {
  return (
    <Section
      id="colors"
      title="Colors"
      description="Warm neutrals, olive as the primary brand hue, amber used sparingly as a food accent — plus the semantic tokens every component consumes."
    >
      <div className="flex flex-col gap-8">
        <PaletteRow name="stone" steps={STONE_STEPS} />
        <PaletteRow name="olive" steps={OLIVE_STEPS} />
        <PaletteRow name="amber" steps={AMBER_STEPS} />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-body-sm font-semibold text-foreground">Semantic tokens</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {SEMANTIC_TOKENS.map((token) => (
            <div key={token.name} className="flex flex-col gap-1.5">
              <div className={cn('h-14 rounded-md', token.className)} />
              <span className="text-caption text-muted-foreground">--{token.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export { ColorsSection }
