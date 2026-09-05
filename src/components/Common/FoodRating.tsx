import { Star } from 'lucide-react'

import { cn } from '@/utils/utils'

const sizeStyles = {
  compact: { icon: 'size-3', text: 'text-caption', gap: 'gap-0.5' },
  default: { icon: 'size-3.5', text: 'text-body-sm', gap: 'gap-1' },
  large: { icon: 'size-5', text: 'text-h4', gap: 'gap-1.5' },
} as const

function FoodRating({
  rating,
  reviewCount,
  size = 'default',
  className,
}: {
  rating: number
  reviewCount?: number
  size?: keyof typeof sizeStyles
  className?: string
}) {
  const styles = sizeStyles[size]

  return (
    <span className={cn('inline-flex items-center', styles.gap, styles.text, className)}>
      <Star className={cn(styles.icon, 'fill-amber-500 text-amber-500')} />
      <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-muted-foreground">· {reviewCount.toLocaleString('vi-VN')}</span>
      )}
    </span>
  )
}

export { FoodRating }
