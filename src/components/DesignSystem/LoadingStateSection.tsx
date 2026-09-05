import { LoadingState } from '@/components/Common/LoadingState'
import { Section } from '@/components/DesignSystem/Section'

function LoadingStateSection() {
  return (
    <Section
      id="loading-state"
      title="Loading State"
      description="For full-section loads where a skeleton grid isn't practical."
    >
      <LoadingState label="Đang tìm món phù hợp với bạn..." className="w-full" />
    </Section>
  )
}

export { LoadingStateSection }
