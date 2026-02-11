import React from 'react'
import { LoginScreensDespProps } from '../types'
import Typography from '@/components/theme/Typography'
import { Icon } from '@/shared/icons/Icon'

// ;<Icon name="SearchIcon" size={18} className="text-muted" />
function Discription({ title, subTitle, listItems }: LoginScreensDespProps) {
  // Chart bars data for visualization

  return (
    <div className="flex flex-col gap-8 lg:pr-10 h-full justify-between w-1/2">
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
              className="text-app-white max-w-lg leading-relaxed"
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
      <Icon size={125} name="BarCharts" className="w-[600px] h-[125px]" />
    </div>
  )
}

export default Discription
