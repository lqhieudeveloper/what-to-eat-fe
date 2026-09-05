import { Checkbox } from '@/ui/checkbox'
import { Label } from '@/ui/label'
import { Demo, Section } from '@/components/DesignSystem/Section'

function CheckboxSection() {
  return (
    <Section
      id="checkbox"
      title="Checkbox"
      description="For multi-select filters like dietary tags."
    >
      <Demo label="States">
        <div className="flex items-center gap-2">
          <Checkbox id="ds-cb-1" />
          <Label htmlFor="ds-cb-1">Chay</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ds-cb-2" defaultChecked />
          <Label htmlFor="ds-cb-2">Healthy</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ds-cb-3" disabled />
          <Label htmlFor="ds-cb-3">Hải sản</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ds-cb-4" disabled defaultChecked />
          <Label htmlFor="ds-cb-4">Cay</Label>
        </div>
      </Demo>
    </Section>
  )
}

export { CheckboxSection }
