import { type TypographyProps } from '@/types'
import { TypographyVariants } from '@/components/enums/index'
import { cn } from '@/lib/utils'
import { ElementType } from 'react'

interface ExtendedTypographyProps extends TypographyProps {
  as?: ElementType
}

export default function Typography({
  variant,
  children,
  className,
  as: Component = 'p',
}: ExtendedTypographyProps) {
  const defaultSize = 16
  const variants = TypographyVariants as Record<string, number>
  const size = variant && typeof variants[variant] === 'number' ? variants[variant] : defaultSize

  return (
    <Component className={cn(className)} style={{ fontSize: `${size}px` }}>
      {children}
    </Component>
  )
}
