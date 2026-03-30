import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import React from 'react'
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
import LeadForm from './tabs/LeadForm'
import Image from './tabs/Image'
import SearchBox from './tabs/SearchBox'
const tabs: Array<{ label: string; value: 'image' | 'lead form' | 'search box'; title: string }> = [
  {
    label: 'Image',
    value: 'image',
    title: 'Los Angeles County, CA',
  },
  {
    label: 'Lead Form',
    value: 'lead form',
    title: 'Build Lead Form',
  },
  {
    label: 'Search Box',
    value: 'search box',
    title: 'Search Box ',
  },
]
function EmbedPopUp({ isOpen , onClose} : {isOpen : boolean ,  onClose : any}) {
  // const [isOpen, setIsOpen] = React.useState(true)
  const [selectedTab, setSelectedTab] = React.useState(tabs[0])

  return (
    <div>
      <CustomPopup
        title={
          <div className="flex justify-between items-center font-semibold text-[25px] text-app-primary text-nowrap">
            {/* Los Angeles County, CA */}
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
            </div>
          </div>
        }
        // Description="ertyh"
        isOpen={isOpen}
        onClose={onClose}
        hideClose={true}
        // footer={
        //   <div className="flex items-center justify-between w-full ">
        //     <div>
        //       <Button className="text-[16px] font-medium text-app-primary" variant="outline">
        //         Cancel
        //       </Button>
        //     </div>
        //     <div className=" flex gap-[10px]">
        //       <Button variant="outline">Download Image </Button>
        //       <Button variant="outline">Copy Image Link </Button>
        //       <Button variant="outline">Copy Image Html</Button>
        //     </div>
        //   </div>
        // }
      >
        {selectedTab.value === 'lead form' && <LeadForm />}
        {selectedTab.value === 'image' && <Image />}
        {selectedTab.value === 'search box' && <SearchBox />}
      </CustomPopup>
    </div>
  )
}

export default EmbedPopUp
