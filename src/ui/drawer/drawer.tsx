import * as React from 'react'

import { cn } from '@/utils/utils'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui/sheet'

const Drawer = Sheet
const DrawerTrigger = SheetTrigger
const DrawerClose = SheetClose

function DrawerContent({
  className,
  children,
  showCloseButton = false,
  ...props
}: Omit<React.ComponentProps<typeof SheetContent>, 'side'>) {
  return (
    <SheetContent
      data-slot="drawer-content"
      side="bottom"
      showCloseButton={showCloseButton}
      className={cn(
        'max-h-[85vh] gap-0 rounded-t-xl border-t-0 pb-[max(1rem,env(safe-area-inset-bottom))]',
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-3 h-1.5 w-10 shrink-0 rounded-full bg-muted" />
      {children}
    </SheetContent>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<typeof SheetHeader>) {
  return <SheetHeader data-slot="drawer-header" className={cn('text-left', className)} {...props} />
}

function DrawerFooter({ className, ...props }: React.ComponentProps<typeof SheetFooter>) {
  return <SheetFooter data-slot="drawer-footer" className={className} {...props} />
}

const DrawerTitle = SheetTitle
const DrawerDescription = SheetDescription

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
