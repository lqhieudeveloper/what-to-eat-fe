import * as React from 'react'

import { FoodCard } from '@/components/Common/FoodCard'
import { Demo, Section } from '@/components/DesignSystem/Section'
import { SAMPLE_FOODS } from '@/components/DesignSystem/sample-foods'

function FavoriteFoodCard(props: React.ComponentProps<typeof FoodCard>) {
  const [isFavorite, setIsFavorite] = React.useState(false)
  return (
    <FoodCard
      {...props}
      isFavorite={isFavorite}
      onToggleFavorite={() => setIsFavorite((v) => !v)}
    />
  )
}

function FoodCardSection() {
  return (
    <Section
      id="food-card"
      title="Food Card"
      description="The core content unit of the app. The image always leads; metadata stays quiet and scannable."
    >
      <Demo label="Default" className="items-start">
        <FavoriteFoodCard food={SAMPLE_FOODS[0]} className="w-64" />
      </Demo>

      <Demo label="Compact" className="items-start">
        <FavoriteFoodCard food={SAMPLE_FOODS[1]} variant="compact" className="w-44" />
        <FavoriteFoodCard food={SAMPLE_FOODS[4]} variant="compact" className="w-44" />
      </Demo>

      <Demo label="Featured" className="items-start">
        <FavoriteFoodCard food={SAMPLE_FOODS[2]} variant="featured" className="w-72" />
      </Demo>

      <Demo label="Horizontal" className="items-start">
        <FavoriteFoodCard food={SAMPLE_FOODS[3]} variant="horizontal" className="w-full sm:w-96" />
      </Demo>

      <Demo label="Recommendation" className="items-start">
        <FavoriteFoodCard food={SAMPLE_FOODS[5]} variant="recommendation" className="w-64" />
      </Demo>
    </Section>
  )
}

export { FoodCardSection }
