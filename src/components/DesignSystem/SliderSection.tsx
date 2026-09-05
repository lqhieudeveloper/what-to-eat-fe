import { Label } from '@/ui/label'
import { Slider } from '@/ui/slider'
import { Section } from '@/components/DesignSystem/Section'

function SliderSection() {
  return (
    <Section
      id="slider"
      title="Slider"
      description="For continuous ranges, like max distance or price ceiling."
    >
      <div className="flex flex-col gap-2 sm:max-w-sm">
        <Label>Khoảng cách tối đa · 3km</Label>
        <Slider defaultValue={[3]} max={10} step={1} />
      </div>
      <div className="flex flex-col gap-2 sm:max-w-sm">
        <Label>Khoảng giá · 50k – 150k</Label>
        <Slider defaultValue={[50, 150]} max={300} step={10} />
      </div>
    </Section>
  )
}

export { SliderSection }
