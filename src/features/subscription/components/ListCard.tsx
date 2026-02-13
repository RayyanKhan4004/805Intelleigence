
import Typography from '@/components/theme/Typography'
import React from 'react'

const data = [
  {
    title: 'Basic',
    subtitle: 'Generate a free report',
    price: '$0',
    li: ['1 zip/city report', '1 county report', 'Easy-to-share market summaries', 'empty'],
  },
  {
    title: 'Premium',
    subtitle: 'Automated market insights',
    price: '$24',
    li: [
      '10 zip/city reports',
      '1 user',
      'Custom-branded reports',
      'Automated marketing suite',
      '1,000 contacts',
      'Live training',
      'Cancel at any time',
    ],
  },
  {
    title: 'Pro',
    subtitle: 'Dominate your entire state',
    price: '$24',
    li: [
      'Everything in professional',
      'Every report in 1 state',
      '3 users with shared branding',
      '5,000 contacts',
      'Advanced analytics platform',
      'Cancel at any time',
    ],
  },
]

function ListCard() {
  return (
    <div className="flex gap-[20px] bg-gradient-to-br from-[#EAECEE] to-[#FFFFFF]">
      {data.map(item => {
        return (
          <div className='w-[451px] h-[603px] border border-app-stroke rounded-[32px] pl-[40px] '>
            <Typography variant="Heading1" className="text-center">
              {item.title}
            </Typography>
            <Typography variant="Heading2" className="text-center">
              {item.subtitle}
            </Typography>
            <Typography variant="h8" className="text-center text-nowrap flex justify-center">
              {item.price}
              <Typography variant="TableTextSize">/ per year</Typography>
            </Typography>
            <ul className="mt-6 space-y-4">
              {item.li.map((curr, ind) => (
                <li key={ind} className="flex items-center gap-3 text-app-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-app-primary block shrink-0" />
                  <Typography variant="TableText" as="span">
                    {curr}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default ListCard
