import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import React from 'react'

const data = [
  {
    title: 'Basic',
    subtitle: 'Generate a free report',
    price: '$0',
    li: ['1 zip/city report', '1 county report', 'Easy-to-share market summaries', 'empty'],
    button: 'Get Started',
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
    button: 'Get Started',
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
    button: 'Get Started',
  },
]

function ListCard() {
  return (
    <div className="flex gap-[20px] justify-center flex-nowrap items-center max-sm:flex-col  max-xl:flex-wrap ">
      {data.map(item => {
        return (
          <div className="w-[451px] h-[603px] border border-app-stroke rounded-[32px] pl-[40px] bg-gradient-to-br from-[#EAECEE] to-[#FFFFFF] relative ">
            <Typography variant="Heading1" className="text-left text-app-primary font-bold ">
              {item.title}
            </Typography>
            <Typography variant="Heading2" className="text-left text-app-primary text-[24px]">
              {item.subtitle}
            </Typography>
            <Typography
              variant="h8"
              className="w-full text-nowrap flex justify-center font-medium text-app-green text-[32px] items-center"
            >
              {item.price}
              <Typography variant="TableTextSize" className="text-[14px]">
                / per year
              </Typography>
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
            {/* <div className='flex justify-center'> */}
            <Button className="rounded-[6px] absolute bottom-10  text-white translate-x-1/2 right-1/2 ">
              {item.button}
            </Button>
            {/* </div> */}
          </div>
        )
      })}
    </div>
  )
}

export default ListCard
