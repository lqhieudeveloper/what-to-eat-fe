import * as React from 'react'
import { Menu, Utensils } from 'lucide-react'

import { cn } from '@/utils/utils'
import { Avatar, AvatarFallback } from '@/ui/avatar'
import { Button } from '@/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/ui/sheet'

const NAV_ITEMS = ['Home', 'Discover', 'Favorites', 'History']

function NavLink({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        'text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
        active && 'text-foreground',
      )}
    >
      {children}
    </button>
  )
}

function Navbar({ className }: { className?: string }) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        'flex h-16 items-center justify-between border-b bg-background px-4',
        className,
      )}
    >
      <div className="flex items-center gap-2 font-bold text-foreground">
        <Utensils className="size-5 text-primary" />
        WhatToEat
      </div>

      <nav className="hidden items-center gap-6 md:flex">
        {NAV_ITEMS.map((item, index) => (
          <NavLink key={item} active={index === 0}>
            {item}
          </NavLink>
        ))}
      </nav>

      <div className="hidden items-center gap-3 md:flex">
        <Avatar size="sm">
          <AvatarFallback>DL</AvatarFallback>
        </Avatar>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Utensils className="size-5 text-primary" />
              WhatToEat
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item}
                type="button"
                className={cn(
                  'rounded px-3 py-2 text-left text-body-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  index === 0 && 'bg-secondary text-foreground',
                )}
              >
                {item}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export { Navbar }
