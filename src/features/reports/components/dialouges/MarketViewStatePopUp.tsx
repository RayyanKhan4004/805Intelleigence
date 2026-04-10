import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import { Select, SelectTrigger, SelectValue } from '@/components/UI/select'
import React from 'react'
import { Label } from 'recharts'
import ChartContainer from '../ChartContainer'
import ChartGrid from '../ChartGrid'
import { Icon } from '@/shared/icons/Icon'
import CustomBadge from '@/components/theme/CustomBadge'
const tabs: Array<{ label: string; value: 'Report View' | 'Market Snapshot'; title: string }> = [
  {
    label: 'Report View',
    value: 'Report View',
    title: 'Market Snapshot View',
  },
  {
    label: 'Market Snapshot',
    value: 'Market Snapshot',
    title: 'Market Snapshot View',
  },
]

function MarketViewStatePopUp() {
  const [isOpen, setIsOpen] = React.useState(true)
  const [selectedTab, setSelectedTab] = React.useState(tabs[0])
  return (
    <div>
      <CustomPopup
        title={
          <div className="flex justify-between items-center font-semibold text-[25px] text-app-primary text-nowrap">
            {selectedTab.title}

            <div className="flex gap-[15px] ">
              {tabs.map(curr => {
                return (
                  <Button
                    className=" font-medium text-[20px]  "
                    onClick={() => setSelectedTab(curr)}
                    key={curr.value}
                    variant={selectedTab.value === curr.value ? 'rounded' : 'roundedOutline'}
                  >
                    {curr.label}
                  </Button>
                )
              })}
              <Select>
                <SelectTrigger className="w-full h-[60px] rounded-[32px] border-app-primary border-[1.5px]  data-[placeholder]:text-app-primary data-[placeholder]:font-medium data-[placeholder]:text-[20px]">
                  <SelectValue
                    placeholder="Houses"
                    className="font-medium text-[20px] !text-app-primary"
                  />
                </SelectTrigger>
              </Select>
            </div>
          </div>
        }
        // Description="ertyh"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        hideClose={true}
      >
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[15px]">
            <div className="text-[20px] text-app-primary">Select Charts</div>
            <div>
              <Select>
                <SelectTrigger className="w-full h-[60px]">
                  <SelectValue placeholder="Select charts to show on card" />
                </SelectTrigger>
              </Select>
            </div>
          </div>

          <CustomBadge />

          <div className=" rounded-[20px] shadow-shadow p-5">
            <div className="font-medium text-[20px] text-app-primary mb-[11px]">Preview</div>
            <ChartContainer title={'ORANGE COUNTY, CA'} />
          </div>
          <div className="flex justify-end gap-[10px] mt-[30px]">
            <Button className="text-[16px] font-medium text-app-primary" variant="outline">
              Cancel
            </Button>
            <Button>Save </Button>
          </div>
        </div>
      </CustomPopup>
    </div>
  )
}

export default MarketViewStatePopUp
