import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          `
          h-12 w-full rounded-[16px]
          bg-white
          px-4 text-sm text-foreground
          placeholder:text-muted-foreground
          border border-border
          shadow-sm

          focus:outline-none
          focus:ring-2 focus:ring-ring
          focus:border-transparent

          disabled:opacity-50
          disabled:cursor-not-allowed
          `,
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
