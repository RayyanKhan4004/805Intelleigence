import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import Spinner from '../theme/Spinner'

const buttonVariants = cva(
  'w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // PRIMARY: matches bg-[var(--color-primary)]
        default:
          'bg-app-primary text-app-white rounded-xl px-4 py-2.5 border border-app-primary hover:bg-app-primary/90',
        // SECONDARY: placeholder for future implementation
        secondary:
          'bg-secondary text-secondary-foreground rounded-xl px-4 py-2.5 hover:bg-secondary/80',
        // OUTLINE: matches border-[var(--color-primary)]
        outline:
          'bg-transparent border border-app-primary text-app-primary rounded-xl px-4 py-2.5 hover:bg-app-primary/10',
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
        default: 'px-4 py-2.5',
        sm: 'px-3 py-2 text-xs',
        lg: 'px-8 py-2.5',
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
  isloading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      isloading = false,
      variant,
      size,
      disabled = false,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        disabled={disabled || isloading}
        className={cn(
          buttonVariants({ variant, size }),
          isloading && 'opacity-70 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {children}
        {isloading && <Spinner size="w-5 h-5" />}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
