import { Heart, MapPin, Sparkles } from 'lucide-react'

import { cn } from '@/utils/utils'
import { formatDistance, formatPrice } from '@/utils/format-food'
import { Badge } from '@/ui/badge'
import { Card } from '@/ui/card'
import { FoodImage } from '@/components/Common/FoodImage'
import { FoodRating } from '@/components/Common/FoodRating'
import type { Food } from '@/types/common/entities'

function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  className,
}: {
  isFavorite?: boolean
  onToggleFavorite?: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Bỏ yêu thích' : 'Yêu thích'}
      className={cn(
        'flex size-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-xs backdrop-blur-sm transition-colors hover:bg-background',
        className,
      )}
    >
      <Heart className={cn('size-4', isFavorite && 'fill-destructive text-destructive')} />
    </button>
  )
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
        </Badge>
      ))}
    </div>
  )
}

function FoodCard({
  food,
  variant = 'default',
  isFavorite,
  onToggleFavorite,
  className,
}: {
  food: Food
  variant?: 'default' | 'compact' | 'featured' | 'horizontal' | 'recommendation'
  isFavorite?: boolean
  onToggleFavorite?: () => void
  className?: string
}) {
  if (variant === 'horizontal') {
    return (
      <Card className={cn('flex-row gap-4 p-3', className)}>
        <div className="relative w-28 shrink-0">
          <FoodImage src={food.imageUrl} alt={food.name} ratio="1/1" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
          <p className="truncate text-body font-semibold text-foreground">
            {food.emoji} {food.name}
          </p>
          <FoodRating rating={food.rating} reviewCount={food.reviewCount} size="compact" />
          <div className="flex items-center gap-3 text-caption text-muted-foreground">
            <span>{formatPrice(food.priceMin, food.priceMax)}</span>
            <span className="inline-flex items-center gap-0.5">
              <MapPin className="size-3" />
              {formatDistance(food.distanceMeters)}
            </span>
          </div>
        </div>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          className="self-start"
        />
      </Card>
    )
  }

  if (variant === 'compact') {
    return (
      <Card className={cn('gap-3 overflow-hidden p-3', className)}>
        <div className="relative">
          <FoodImage src={food.imageUrl} alt={food.name} />
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
            className="absolute top-2 right-2 size-7"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="truncate text-body-sm font-semibold text-foreground">
            {food.emoji} {food.name}
          </p>
          <div className="flex items-center justify-between text-caption text-muted-foreground">
            <FoodRating rating={food.rating} size="compact" />
            <span>{formatPrice(food.priceMin, food.priceMax)}</span>
          </div>
        </div>
      </Card>
    )
  }

  const isFeatured = variant === 'featured'

  return (
    <Card
      variant={isFeatured ? 'featured' : 'default'}
      className={cn('gap-4 overflow-hidden p-4', className)}
    >
      <div className="relative">
        <FoodImage src={food.imageUrl} alt={food.name} />
        {variant === 'recommendation' && (
          <Badge className="absolute top-2 left-2 gap-1 bg-background/90 text-primary shadow-xs">
            <Sparkles className="size-3" />
            Đề xuất
          </Badge>
        )}
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          className="absolute top-2 right-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p
          className={cn(
            'truncate font-semibold text-foreground',
            isFeatured ? 'text-h4' : 'text-body',
          )}
        >
          {food.emoji} {food.name}
        </p>
        <FoodRating rating={food.rating} reviewCount={food.reviewCount} />
        <div className="flex items-center gap-3 text-body-sm text-muted-foreground">
          <span>{formatPrice(food.priceMin, food.priceMax)}</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" />
            {formatDistance(food.distanceMeters)}
          </span>
        </div>
        <TagRow tags={food.tags} />
      </div>
    </Card>
  )
}

export { FoodCard }
