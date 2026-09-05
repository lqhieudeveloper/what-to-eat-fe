import { Label } from '@/ui/label'
import { Switch } from '@/ui/switch'
import { Demo, Section } from '@/components/DesignSystem/Section'

function SwitchSection() {
  return (
    <Section id="switch" title="Switch" description="For binary on/off preferences and settings.">
      <Demo label="Default">
        <div className="flex items-center gap-2">
          <Switch id="ds-switch-1" />
          <Label htmlFor="ds-switch-1">Thông báo món mới</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="ds-switch-2" defaultChecked />
          <Label htmlFor="ds-switch-2">Chế độ ăn chay</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="ds-switch-3" disabled />
          <Label htmlFor="ds-switch-3">Không khả dụng</Label>
        </div>
      </Demo>

      <Demo label="Small">
        <div className="flex items-center gap-2">
          <Switch id="ds-switch-sm" size="sm" defaultChecked />
          <Label htmlFor="ds-switch-sm">Compact</Label>
        </div>
      </Demo>
    </Section>
  )
}

export { SwitchSection }
