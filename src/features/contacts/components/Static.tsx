import { Select, SelectTrigger, SelectValue } from '@/components/UI/select'
import React from 'react'

function Static() {
  return (
    <div className="p-[60px]   max-md:px-6 max-sm:px-6 max-lg:px-6">
      <div className="flex justify-between rounded-[80px]   bg-app-surface items-center overflow-x-auto py-[19px] px-5 p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6 ">
        <div>
          <Select>
            <SelectTrigger className="w-full h-[60px]">
              <SelectValue placeholder="Action" />
            </SelectTrigger>
          </Select>
        </div>
        <div className='flex gap-[7px]'>
          <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="Campaign" />
              </SelectTrigger>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="Created Any Time" />
              </SelectTrigger>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="Last report sent any time " />
              </SelectTrigger>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="Show opt-ins & opt-outs" />
              </SelectTrigger>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full h-[60px]">
                <SelectValue placeholder="Locations" />
              </SelectTrigger>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Static
