import { Skeleton } from '@/ui/skeleton'
import { Section } from '@/components/DesignSystem/Section'

function SkeletonSection() {
  return (
    <Section
      id="skeleton"
      title="Skeleton"
      description="Matches the shape of the content it replaces, so loading never causes layout shift."
    >
      <div className="flex w-64 flex-col gap-3">
        <Skeleton className="aspect-4/3 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3.5 w-1/2" />
      </div>
    </Section>
  )
}

export { SkeletonSection }
