import React from 'react'

interface SubtitlePropes {
  header: React.ReactNode | string
  p: string
}
export interface props {
  title: string
  subTitle: SubtitlePropes
  listItems?: string[]
}
