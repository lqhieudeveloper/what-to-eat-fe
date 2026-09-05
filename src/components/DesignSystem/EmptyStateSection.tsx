import { Button } from '@/ui/button'
import { EmptyState } from '@/components/Common/EmptyState'
import { Section } from '@/components/DesignSystem/Section'

function EmptyStateSection() {
  return (
    <Section
      id="empty-state"
      title="Empty State"
      description="When there's nothing to show, tell the user why and give them a way forward."
    >
      <EmptyState
        title="Không tìm thấy món ăn"
        description="Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm."
        action={<Button variant="outline">Xóa bộ lọc</Button>}
        className="w-full"
      />
    </Section>
  )
}

export { EmptyStateSection }
