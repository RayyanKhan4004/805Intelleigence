import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // PRIMARY: matches bg-[var(--color-primary)]
        default:
          'bg-app-primary text-app-white rounded-xl px-4 py-4 border border-app-primary hover:bg-app-primary/90',
        // SECONDARY: placeholder for future implementation
        secondary:
          'bg-secondary text-secondary-foreground rounded-xl px-4 py-4 hover:bg-secondary/80',
        // OUTLINE: matches border-[var(--color-primary)]
        outline:
          'bg-transparent border border-app-primary text-app-primary rounded-xl px-4 py-4 hover:bg-app-primary/10',
        // ROUNDED: matches rounded-[32px]
        rounded:
          'bg-app-primary text-app-white rounded-[32px] px-4 py-[11px] border border-app-primary hover:bg-app-primary/90',
        // ROUNDED OUTLINE
        roundedOutline:
          'bg-transparent border border-app-primary text-app-primary rounded-full px-4 py-[11px] hover:bg-app-primary/10',
        // DANGER: matches border-[var(--color-danger)]
        danger:
          'bg-transparent border border-destructive text-destructive rounded-xl px-[13px] py-[10px] hover:bg-destructive/10',
        // Additional utility variants
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-app-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-4 py-4',
        sm: 'px-3 py-2 text-xs',
        lg: 'px-8 py-4',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
