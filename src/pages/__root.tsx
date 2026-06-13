import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Toaster } from '@/ui/sonner'
import { TooltipProvider } from '@/ui/tooltip'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <TooltipProvider>
      <Outlet />
      <Toaster richColors closeButton />
    </TooltipProvider>
  )
}
