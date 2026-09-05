import { Button } from '@/ui/button'
import { ErrorState } from '@/components/Common/ErrorState'
import { Section } from '@/components/DesignSystem/Section'

function ErrorStateSection() {
  return (
    <Section
      id="error-state"
      title="Error State"
      description="Failures are explained in plain language, with a clear retry path."
    >
      <ErrorState
        title="Đã có lỗi xảy ra"
        description="Không thể tải danh sách món ăn ngay lúc này."
        action={<Button variant="outline">Thử lại</Button>}
        className="w-full"
      />
    </Section>
  )
}

export { ErrorStateSection }
