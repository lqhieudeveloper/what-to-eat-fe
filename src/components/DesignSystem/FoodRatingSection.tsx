import { FoodRating } from '@/components/Common/FoodRating'
import { Demo, Section } from '@/components/DesignSystem/Section'

function FoodRatingSection() {
  return (
    <Section
      id="food-rating"
      title="Food Rating"
      description="A consistent rating treatment used across cards, lists, and detail views."
    >
      <Demo label="Compact">
        <FoodRating rating={4.7} size="compact" />
      </Demo>
      <Demo label="Default">
        <FoodRating rating={4.7} reviewCount={1284} size="default" />
      </Demo>
      <Demo label="Large">
        <FoodRating rating={4.7} reviewCount={1284} size="large" />
      </Demo>
    </Section>
  )
}

export { FoodRatingSection }
