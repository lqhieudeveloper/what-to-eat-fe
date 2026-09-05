import { Link, createFileRoute } from '@tanstack/react-router'

import { Button } from '@/ui/button'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background">
      <h1 className="text-h1 font-bold text-primary">What to Eat?</h1>
      <Button asChild size="lg">
        <Link to="/design-system">View design system</Link>
      </Button>
    </main>
  )
}
