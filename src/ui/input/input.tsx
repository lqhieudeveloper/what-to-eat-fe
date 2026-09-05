import * as React from 'react'

import { cn } from '@/utils/utils'

function Input({
  className,
  type,
  state,
  leadingIcon,
  trailingAction,
  ...props
}: React.ComponentProps<'input'> & {
  state?: 'default' | 'success'
  leadingIcon?: React.ReactNode
  trailingAction?: React.ReactNode
}) {
  if (!leadingIcon && !trailingAction) {
    return (
      <input
        type={type}
        data-slot="input"
        data-state={state}
        className={cn(
          'h-9 w-full min-w-0 rounded border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
          'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
          'data-[state=success]:border-success data-[state=success]:ring-success/20',
          className,
        )}
        {...props}
      />
    )
  }

  return (
    <div
      data-slot="input-wrapper"
      data-state={state}
      className={cn(
        'flex h-9 w-full min-w-0 items-center gap-2 rounded border border-input bg-transparent px-3 shadow-xs transition-[color,box-shadow] has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-[3px] has-[input:focus-visible]:ring-ring/50 has-[input:disabled]:pointer-events-none has-[input:disabled]:opacity-50 has-[input[aria-invalid=true]]:border-destructive has-[input[aria-invalid=true]]:ring-destructive/20 data-[state=success]:border-success data-[state=success]:ring-success/20 dark:bg-input/30',
        className,
      )}
    >
      {leadingIcon && (
        <span className="flex shrink-0 items-center text-muted-foreground [&_svg]:size-4">
          {leadingIcon}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className="h-full w-full min-w-0 bg-transparent text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
        {...props}
      />
      {trailingAction && (
        <span className="flex shrink-0 items-center text-muted-foreground">{trailingAction}</span>
      )}
    </div>
  )
}

export { Input }
