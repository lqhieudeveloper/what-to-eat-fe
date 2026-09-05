import { Navbar } from '@/components/Common/Navbar'
import { FoodFilterBar } from '@/components/Common/FoodFilterBar'
import { Section } from '@/components/DesignSystem/Section'

function NavigationSection() {
  return (
    <Section
      id="navigation"
      title="Navigation"
      description="A clean horizontal nav on desktop, a compact drawer on mobile — plus the filter bar pattern used across food discovery screens."
    >
      <div className="overflow-hidden rounded-lg border">
        <Navbar />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
          Food filter bar
        </span>
        <FoodFilterBar />
      </div>
    </Section>
  )
}

export { NavigationSection }
