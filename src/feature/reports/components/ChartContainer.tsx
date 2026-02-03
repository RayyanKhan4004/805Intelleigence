import Typography from '@/components/theme/Typography'
import React from 'react'
import ReportCharts from './reportCharts'

const data = [
  {
    title: 'Median List price',
    price: '$233,000',
  },
  {
    title: 'Avg DOM',
    price: '$233,000',
  },
  {
    title: 'Market Action',
    price: '$233,000',
  },
]

function ChartContainer({ title }: { title: string }) {
  return (
    <>
      {' '}
      <div>
        <div>
          <Typography variant="PageHeading">{title}</Typography>
        </div>
        <div>
          {data.map(item => {
            return priceContainer({ title: item.title, price: item.price })
          })}
        </div>
      </div>
      <ReportCharts />
      <div className="border-t-2 border-primary w-full"></div>
    </>
  )
}

function priceContainer({ title, price }: { title: string; price: string }) {
  return (
    <div className="px-[15px] pt-4 pb-6 rounded-[8px] bg-primary/5">
      <Typography variant="h4" className="font-semibold text-primary">
        {title}
      </Typography>
      <Typography variant="h5" className="font-semibold text-[var(--color-green)]">
        {price}
      </Typography>
    </div>
  )
}
export default ChartContainer
