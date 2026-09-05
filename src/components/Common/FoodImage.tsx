import * as React from 'react'
import { Utensils } from 'lucide-react'

import { cn } from '@/utils/utils'
import { Skeleton } from '@/ui/skeleton'

function FoodImage({
  src,
  alt,
  className,
  ratio = '4/3',
}: {
  src?: string
  alt: string
  className?: string
  ratio?: '4/3' | '1/1' | '16/9'
}) {
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>(
    src ? 'loading' : 'error',
  )

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg bg-muted',
        ratio === '4/3' && 'aspect-4/3',
        ratio === '1/1' && 'aspect-square',
        ratio === '16/9' && 'aspect-video',
        className,
      )}
    >
      {status === 'loading' && <Skeleton className="absolute inset-0 rounded-none" />}
      {status === 'error' ? (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <Utensils className="size-8" strokeWidth={1.5} />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={cn(
            'size-full object-cover transition-opacity duration-200',
            status === 'loading' ? 'opacity-0' : 'opacity-100',
          )}
        />
      )}
    </div>
  )
}

export { FoodImage }
