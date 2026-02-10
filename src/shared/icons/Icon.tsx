'use client'

import React from 'react'
import * as Icons from './index'
import { IconProps } from './types'

export function Icon({ name, size = 20, className, ...props }: IconProps) {
  // Dynamically grab the component from our registry
  const SvgIcon = Icons[name]

  if (!SvgIcon || typeof SvgIcon !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Icon "${name}" not found or failed to load as a component.`)
    }
    return null
  }

  return <SvgIcon width={size} height={size} className={className} aria-hidden="true" {...props} />
}
