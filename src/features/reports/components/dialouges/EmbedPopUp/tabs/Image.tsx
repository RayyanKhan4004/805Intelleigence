import React from 'react'
import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/UI/select'

import { Checkbox } from '@/components/UI/checkbox'
import { Label } from '@/components/UI/label'
import CustomAreaChart from '@/components/theme/AreaChart'
const tabs: Array<{ label: string; value: 'Image' | 'Lead Form' | 'Search Box'; title: string }> = [
  {
    label: 'Image',
    value: 'Image',
    title: 'Los Angeles County, CA',
  },
  {
    label: 'Lead Form',
    value: 'Lead Form',
    title: 'Build Lead Form',
  },
  {
    label: 'Search Box',
    value: 'Search Box',
    title: 'Search Box ',
  },
]
function Image() {
  const [isOpen, setIsOpen] = React.useState(true)
  const [selectedTab, setSelectedTab] = React.useState(tabs[0])
  return (
    <div>
    
      <div className="flex flex-col gap-[20px] ">
        <div className="flex items-center justify-between gap-[20px] ">
          <Select>
            <SelectTrigger className="w-full h-[60px]">
              <SelectValue placeholder="Charts" />
            </SelectTrigger>
          </Select>

          <Select>
            <SelectTrigger className="w-full h-[60px]">
              <SelectValue placeholder="Houses" />
            </SelectTrigger>
          </Select>

          <Select>
            <SelectTrigger className="w-full h-[60px]">
              <SelectValue placeholder="Large [600x400]" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Select>
              <SelectTrigger className="w-[398px] h-[60px] items-center">
                <SelectValue placeholder="Median List Price" />
              </SelectTrigger>
            </Select>
          </div>

          <div className="flex items-center gap-5 h-full">
            <div className="flex items-center gap-[12px] ">
              <Checkbox className="border border-app-greyText" />
              <Label className="text-app-greyText text-[14px]">Title</Label>
            </div>

            <div className="flex items-center gap-[12px] ">
              <Checkbox className="border border-app-greyText" />
              <Label className="text-app-greyText text-[14px]">Segments</Label>
            </div>
          </div>
        </div>

        <div className="border border-app-stroke rounded-[16px] text-[14px] text-app-greyText p-[20px] ">
          {
            '  <a href="https://altos.re/r/7aff8dda-9b08-4c7c-9ee3-3461426c0b6b?data=price_median" target="_blank"><img width="600px" src="https://altos.'
          }
        </div>

        <div className="border border-app-stroke rounded-[16px] text-[14px] text-app-greyText p-[20px] ">
          {
            ' <a href="https://altos.re/r/7aff8dda-9b08-4c7c-9ee3-3461426c0b6b?data=price_median" target="_blank"><img width="600px" src="https://altos. '
          }
        </div>
        <div className="font-bold text-[20px] text-app-primary">Preview</div>

        <div className="flex flex-col ">
          <div className="font-bold text-[20px] text-app-primary">
            Median List price for Los Angeles County, CA
          </div>

          <CustomAreaChart />
        </div>
        <div className="border-b border-app-stroke pb-2.5"></div>
        <div className='flex justify-between items-center'>
        <div>
         <Button variant="outline" className='text-[16px] text-app-primary font-medium'>Cancel</Button>
        </div>
        <div className='flex gap-[10px]'>
             <Button variant="outline" className='text-[16px] text-app-primary font-medium'>Download Image</Button>
              <Button variant="outline" className='text-[16px] text-app-primary font-medium'>Copy Image Link</Button>
               <Button variant="outline" className='text-[16px] text-app-primary font-medium'>Copy Image Html</Button>

        </div>
        </div>
      </div>
      {/* </CustomPopup> */}
    </div>
  )
}

export default Image
