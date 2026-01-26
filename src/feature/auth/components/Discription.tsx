import React from 'react'
import { LoginScreensDespProps } from '../types'
import Typography from '@/components/theme/Typography'

function Discription({ title, subTitle, listItems }: LoginScreensDespProps) {
  // Chart bars data for visualization
  const bars = [
    { height: 'h-8', opacity: 'opacity-40' },
    { height: 'h-12', opacity: 'opacity-50' },
    { height: 'h-16', opacity: 'opacity-60' },
    { height: 'h-10', opacity: 'opacity-40' },
    { height: 'h-14', opacity: 'opacity-50' },
    { height: 'h-24', opacity: 'opacity-70' }, // Highlighted group start
    { height: 'h-32', opacity: 'opacity-80' },
    { height: 'h-28', opacity: 'opacity-75' },
    { height: 'h-20', opacity: 'opacity-60' },
    { height: 'h-18', opacity: 'opacity-50' },
    { height: 'h-12', opacity: 'opacity-40' },
    { height: 'h-20', opacity: 'opacity-60' },
    { height: 'h-28', opacity: 'opacity-80' },
    { height: 'h-36', opacity: 'opacity-100' }, // Peak
  ]

  return (
    <div className="flex flex-col gap-8 lg:pr-10 h-full justify-between">
      <Typography
        variant="Heading1"
        as="h1"
        className="font-light tracking-wide text-white italic mb-4"
      >
        {title || '805'}
        <span className="not-italic font-normal">
          {title?.includes('805') ? 'Intelligence' : ''}
        </span>
      </Typography>
      <div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-6">
            {subTitle.header && (
              <div
                className="text-4xl lg:text-5xl font-bold leading-tight"
                dangerouslySetInnerHTML={{ __html: subTitle.header }}
              />
            )}

            <Typography
              variant="PageSecondText"
              className="text-app-greyText max-w-lg leading-relaxed"
            >
              {subTitle.p}
            </Typography>
          </div>

          {listItems && (
            <ul className="space-y-4">
              {listItems.map((curr: string, ind: number) => (
                <li className="flex items-center gap-3 text-white/90" key={ind}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white block shrink-0" />
                  <Typography variant="TableText" as="span">
                    {curr}
                  </Typography>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Chart Visualization (Bottom Left) */}
      <div className="mt-12 flex items-end gap-2 h-40 mask-gradient-to-t">
        {bars.map((bar, i) => (
          <div
            key={i}
            className={`w-3 sm:w-4 rounded-t-sm bg-chart-gradient ${bar.height} ${bar.opacity}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Discription
