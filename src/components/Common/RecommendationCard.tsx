import { Heart, MapPin, Shuffle, Sparkles, Star } from 'lucide-react'

import { cn } from '@/utils/utils'
import { formatDistance, formatPrice } from '@/utils/format-food'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { FoodImage } from '@/components/Common/FoodImage'
import type { Food } from '@/types/common/entities'

function RecommendationCard({
  food,
  reason,
  onTryAnother,
  onChoose,
  className,
}: {
  food: Food
  reason: string
  onTryAnother?: () => void
  onChoose?: () => void
  className?: string
}) {
  return (
    <Card variant="featured" className={cn('gap-5 p-6 text-center', className)}>
      <span className="inline-flex items-center justify-center gap-1.5 text-caption font-semibold tracking-wide text-primary uppercase">
        <Sparkles className="size-3.5" />
        Gợi ý cho bạn
      </span>

      <FoodImage src={food.imageUrl} alt={food.name} className="rounded-xl" />

      <div className="flex flex-col items-center gap-2">
        <h3 className="text-h3 font-bold text-foreground">
          {food.emoji} {food.name}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3 text-body-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Star className="size-4 fill-amber-500 text-amber-500" />
            <span className="font-semibold text-foreground">{food.rating.toFixed(1)}</span>
          </span>
          <span>{formatPrice(food.priceMin, food.priceMax)}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-4" />
            {formatDistance(food.distanceMeters)}
          </span>
        </div>
        <p className="text-body-sm text-muted-foreground italic">&ldquo;{reason}&rdquo;</p>
      </div>

      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <Button variant="outline" size="lg" className="flex-1" onClick={onTryAnother}>
          <Shuffle />
          Thử món khác
        </Button>
        <Button size="lg" className="flex-1" onClick={onChoose}>
          <Heart />
          Chọn món
        </Button>
      </div>
    </Card>
  )
}

export { RecommendationCard }
