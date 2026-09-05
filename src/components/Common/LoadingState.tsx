import { Loader2 } from 'lucide-react'

import { cn } from '@/utils/utils'

function LoadingState({
  label = 'Đang tải...',
  className,
}: {
  label?: string
  className?: string
}) {
  return (
    <div
      data-slot="loading-state"
      className={cn('flex flex-col items-center gap-3 px-6 py-16 text-center', className)}
    >
      <Loader2 className="size-6 animate-spin text-primary" />
      <p className="text-body-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export { LoadingState }
