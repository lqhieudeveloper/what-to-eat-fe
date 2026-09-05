import { Combobox } from '@/ui/combobox'
import { Demo, Section } from '@/components/DesignSystem/Section'

const LOCATION_OPTIONS = [
  { value: 'q1', label: 'Quận 1' },
  { value: 'q3', label: 'Quận 3' },
  { value: 'q7', label: 'Quận 7' },
  { value: 'binh-thanh', label: 'Bình Thạnh' },
  { value: 'thu-duc', label: 'Thủ Đức' },
]

function ComboboxSection() {
  return (
    <Section
      id="combobox"
      title="Combobox"
      description="For long option lists that benefit from search — location, restaurant, dish name."
    >
      <Demo label="Location">
        <Combobox
          options={LOCATION_OPTIONS}
          placeholder="Chọn khu vực"
          searchPlaceholder="Tìm khu vực..."
          emptyText="Không tìm thấy khu vực."
        />
      </Demo>

      <Demo label="Disabled">
        <Combobox options={LOCATION_OPTIONS} placeholder="Chọn khu vực" disabled />
      </Demo>
    </Section>
  )
}

export { ComboboxSection }
