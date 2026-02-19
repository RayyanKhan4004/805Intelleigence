'use client'
import StackedBarChart from '@/components/theme/CustomBarChart'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import React from 'react'
import { reportsData } from '../Data'
import { Icon } from '@/shared/icons/Icon'
// const data = [
//   { title: '24', sub: 'Active Markets' },
//   { title: '$1.2M', sub: 'Avg List Price' },

//   { title: '+34%', sub: 'YoY Growth' },
//   { title: '38', sub: 'Avg Days on Market' },
// ]
// const br = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ]

// const reportsData = [
//   {
//     id: '1',
//     location: 'Los Angeles County, CA',
//     views: 1,
//   },
//   {
//     id: '2',
//     location: 'Los Angeles County, CA',
//     views: 1,
//   },
//   {
//     id: '3',
//     location: 'Los Angeles County, CA',
//     views: 1,
//   },
// ]

function Header() {
  return (
    <div className="p-[60px]">
      <div className="flex gap-[30px] flex-col">
        <div className="flex justify-between  ">
          <div>
            <Typography
              variant="PageHeading"
              className="font-semibold text-app-primary text-[30px]"
            >
              Market Reports
            </Typography>
            <Typography variant="TableTextSize" className="text-app-black text-[14px]">
              Real time insights for 805 areas
            </Typography>
          </div>
          <div className="flex gap-4">
            <Input
              preIcon={<Icon name="Search" className="!w-6 !h-6" />}
              className="w-[237px] h-[56px] text-app-primary placeholder:text-app-greyText rounded-[12px] border-app-primary "
              placeholder=" Search by name"
            />
            <Button variant="outline" className="p-4  h-[56px] border border-app-primary">
              <Typography
                variant="PageSecondText"
                className="text-app-primary font-medium border-app-primary rounded-[12px] flex items-center"
              >
                <Icon name="DownDown" className="!w-6 !h-6" />
                Export
              </Typography>
            </Button>
            <Button className="p-4 w-[162px] h-[56px] flex items-center">  <Icon name="Plus" className="!w-6 !h-6" /> Add Report</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
