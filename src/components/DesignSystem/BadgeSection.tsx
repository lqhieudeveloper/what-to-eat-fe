import { Badge } from '@/ui/badge'
import { Demo, Section } from '@/components/DesignSystem/Section'

function BadgeSection() {
  return (
    <Section
      id="badge"
      title="Badge"
      description="Compact and secondary to the food content — used for cuisine, category, and status tags."
    >
      <Demo label="Variants">
        <Badge>Phổ biến</Badge>
        <Badge variant="secondary">Món nước</Badge>
        <Badge variant="outline">Việt Nam</Badge>
        <Badge variant="success">Đang mở cửa</Badge>
        <Badge variant="warning">Sắp đóng cửa</Badge>
        <Badge variant="destructive">Hết món</Badge>
      </Demo>

      <Demo label="Food tags">
        <Badge variant="secondary">Cay</Badge>
        <Badge variant="secondary">Healthy</Badge>
        <Badge variant="secondary">Nhật Bản</Badge>
      </Demo>
    </Section>
  )
}

export { BadgeSection }
