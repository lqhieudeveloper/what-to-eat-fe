import { RecommendationCard } from '@/components/Common/RecommendationCard'
import { Section } from '@/components/DesignSystem/Section'
import { SAMPLE_FOODS } from '@/components/DesignSystem/sample-foods'

function RecommendationCardSection() {
  return (
    <Section
      id="recommendation-card"
      title="Recommendation Card"
      description="The product's signature moment — one dish, one reason, one clear choice. Image, name, and CTA lead; metadata stays last."
    >
      <RecommendationCard
        food={SAMPLE_FOODS[0]}
        reason="Phù hợp với sở thích của bạn"
        className="mx-auto max-w-sm"
      />
    </Section>
  )
}

export { RecommendationCardSection }
