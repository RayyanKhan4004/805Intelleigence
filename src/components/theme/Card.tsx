import * as React from 'react'
import { Card as ShadCard } from '@/components/UI/card'
import { cn } from '@/lib/utils'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <ShadCard
      ref={ref}
      className={cn(
        'w-[45%] rounded-[20px] h-auto lg:p-10 shadow-field bg-field-gradient',
        className
      )}
      {...props}
    >
      {children}
    </ShadCard>
  )
)

Card.displayName = 'ThemeCard'

export default Card
