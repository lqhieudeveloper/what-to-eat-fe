import { Label } from '@/ui/label'
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group'
import { Section } from '@/components/DesignSystem/Section'

function RadioSection() {
  return (
    <Section
      id="radio"
      title="Radio"
      description="For single-select choices, like number of people or spice level."
    >
      <RadioGroup defaultValue="2">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="1" id="ds-people-1" />
          <Label htmlFor="ds-people-1">1 người</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="2" id="ds-people-2" />
          <Label htmlFor="ds-people-2">2 người</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="4" id="ds-people-4" />
          <Label htmlFor="ds-people-4">4 người</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="6" id="ds-people-6" disabled />
          <Label htmlFor="ds-people-6">6+ người</Label>
        </div>
      </RadioGroup>
    </Section>
  )
}

export { RadioSection }
