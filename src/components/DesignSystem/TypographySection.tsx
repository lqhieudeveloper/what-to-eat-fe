import { Section } from '@/components/DesignSystem/Section'

const SCALE = [
  {
    name: 'Display',
    spec: '64px / 1.05 / 700',
    className: 'text-display font-bold',
    sample: 'Hôm nay ăn gì?',
  },
  {
    name: 'H1',
    spec: '40px / 1.15 / 700',
    className: 'text-h1 font-bold',
    sample: 'Khám phá món ngon',
  },
  { name: 'H2', spec: '32px / 1.2 / 700', className: 'text-h2 font-bold', sample: 'Gợi ý cho bạn' },
  {
    name: 'H3',
    spec: '24px / 1.25 / 600',
    className: 'text-h3 font-semibold',
    sample: 'Bún bò Huế',
  },
  {
    name: 'H4',
    spec: '20px / 1.3 / 600',
    className: 'text-h4 font-semibold',
    sample: 'Quán ăn gần bạn',
  },
  {
    name: 'Body Large',
    spec: '18px / 1.5 / 400',
    className: 'text-body-lg font-normal',
    sample: 'Món ăn phù hợp với khẩu vị của bạn hôm nay.',
  },
  {
    name: 'Body',
    spec: '16px / 1.5 / 400',
    className: 'text-body font-normal',
    sample: 'Hơn 1,200 quán ăn trong bán kính 3km.',
  },
  {
    name: 'Body Small',
    spec: '14px / 1.45 / 400',
    className: 'text-body-sm font-normal',
    sample: '4.7 · 1,284 đánh giá · 800m',
  },
  {
    name: 'Caption',
    spec: '12px / 1.4 / 500',
    className: 'text-caption font-medium',
    sample: 'MÓN NƯỚC · VIỆT NAM',
  },
]

function TypographySection() {
  return (
    <Section
      id="typography"
      title="Typography"
      description="Geist, with an editorial scale that favors strong hierarchy over density. Every step pairs a fixed size and line-height."
    >
      <div className="flex flex-col divide-y divide-border rounded-lg border bg-card">
        {SCALE.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-2 p-5 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <div className="flex w-40 shrink-0 flex-col gap-0.5">
              <span className="text-body-sm font-semibold text-foreground">{item.name}</span>
              <span className="text-caption text-muted-foreground">{item.spec}</span>
            </div>
            <p className={item.className}>{item.sample}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { TypographySection }
