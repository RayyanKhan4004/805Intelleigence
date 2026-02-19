import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  preIcon?: React.ReactNode
  posIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, preIcon, posIcon, ...props }, ref) => {
    return (
      <div
        className={cn(
          `
          flex items-center gap-2
          h-12 w-full rounded-[16px]
          bg-background
          px-4 text-sm text-foreground
          placeholder:text-muted-foreground
          border border-border
          shadow-sm

          focus-within:ring-2 focus-within:ring-ring
          focus-within:border-transparent

          disabled:opacity-50
          disabled:cursor-not-allowed
        `,
          className
        )}
      >
        {preIcon}

        <input
          ref={ref}
          type={type}
          className={cn(
            `
            h-full w-full bg-transparent
            outline-none
            placeholder:text-muted-foreground
          `
          )}
          {...props}
        />

        {posIcon}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
