import { ReportsTable } from '@/components/theme/CustomTable'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import React from 'react'
const data = [
  { title: '24', sub: 'Active Markets' },
  { title: '$1.2M', sub: 'Avg List Price' },

  { title: '+34%', sub: 'YoY Growth' },
  { title: '38', sub: 'Avg Days on Market' },
]
const reportsData = [
  {
    id: "1",
    location: "Los Angeles County, CA",
    views: 1,
  },
  {
    id: "2",
    location: "Los Angeles County, CA",
    views: 1,
  },
  {
    id: "3",
    location: "Los Angeles County, CA",
    views: 1,
  },
]
function Header() {
  return (
    <div className="p-[60px]">
      <div className="flex gap-[30px] flex-col">
        <div className="flex justify-between  ">
          <div>
            <Typography variant="PageHeading" className="font-semibold text-app-primary">
              Market Reports
            </Typography>
            <Typography variant="TableTextSize" className="text-app-black">
              Real time insights for 805 areas
            </Typography>
          </div>
          <div className="flex gap-4">
            <Input
              className="w-[237px] h-[56px] text-app-primary placeholder:text-app-greyText "
              placeholder="Search by name"
            />
            <Button variant="outline" className="p-4  h-[56px] border border-app-primary">
              <Typography variant="PageSecondText" className="text-app-primary font-medium">
                Export
              </Typography>
            </Button>
            <Button className="p-4 w-[162px] h-[56px]">Add Report</Button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex gap-10 bg-primary text-white w-[1156px] h-[150px] rounded-[12px] justify-center px-10 py-6">
            {data.map((curr, ind) => (
              <div className={`${ind > 0 && 'border-l-2 pl-[60px] border-white'}`} key={ind}>
                <Typography variant="h3" className="w-bold ">
                  {curr.title}
                </Typography>
                <Typography variant="Heading2" className="font-medium">
                  {curr.sub}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2.5">
            <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary  ">
              Favourite
            </Button>
            <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
              All Reports
            </Button>
          </div>
          <div className="flex gap-3">
            <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
              Tressa Golden-Mills
            </Button>
            <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
              Setting
            </Button>
            <Button variant="roundedOutline" className="p-4  h-[56px] border border-app-primary">
              Sort By
            </Button>
            <Button
              variant="roundedOutline"
              className="p-4  h-[56px] border border-app-primary bg-primary text-white"
            >
              List view
            </Button>
          </div>
        </div>
      </div>
      <ReportsTable title={['hello','world']} data={reportsData} />
    </div>
  )
}

export default Header
